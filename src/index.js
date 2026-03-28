/* ============================================
   DOOKISBAD.COM - Cloudflare Worker
   Handles API routes; everything else falls
   through to static assets.
   ============================================ */

// ---- EDIT THIS TO CHANGE THE DESTINATION ----
const DESTINATION_EMAIL = 'contact@dookisbad.com';
// ---------------------------------------------

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Contact form submission
    if (request.method === 'POST' && url.pathname === '/api/contact') {
      return handleContact(request);
    }

    // CORS preflight for /api/* routes
    if (request.method === 'OPTIONS' && url.pathname.startsWith('/api/')) {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    // Everything else: serve static assets
    return env.ASSETS.fetch(request);
  }
};

// ---- CONTACT HANDLER ----

async function handleContact(request) {
  const headers = corsHeaders();

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400, headers);
  }

  const name    = (body.name    || '').trim();
  const email   = (body.email   || '').trim();
  const message = (body.message || '').trim();

  if (!name || !email || !message) {
    return json({ ok: false, error: 'All fields are required.' }, 400, headers);
  }

  if (!isValidEmail(email)) {
    return json({ ok: false, error: 'That email doesn\'t look right.' }, 400, headers);
  }

  // Send via MailChannels (free transactional email available to Cloudflare Workers)
  // Docs: https://mailchannels.zendesk.com/hc/en-us/articles/4565898358413
  // Note: requires SPF/DKIM or a MailChannels account for deliverability.
  const mailRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: DESTINATION_EMAIL }] }],
      from: {
        email: 'noreply@dookisbad.com',
        name: 'dookisbad.com'
      },
      reply_to: { email, name },
      subject: `Message from ${name} — dookisbad.com`,
      content: [{
        type: 'text/plain',
        value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      }]
    })
  });

  if (mailRes.ok || mailRes.status === 202) {
    return json({ ok: true }, 200, headers);
  }

  // Log the error body for debugging in the Workers dashboard
  const errBody = await mailRes.text().catch(() => '');
  console.error(`[contact] MailChannels error ${mailRes.status}:`, errBody);

  return json({ ok: false, error: 'Failed to send. Try again later.' }, 502, headers);
}

// ---- HELPERS ----

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

function json(data, status, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders }
  });
}

function isValidEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}
