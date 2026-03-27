/* ============================================
   DUKE LOSSES UNDER COACH K (1980-2022)
   AND JON SCHEYER (2022-present)
   Every. Single. One. (Notable selections)

   Format: [date, season, opponent, score, type, notes]
   Types: "ncaa", "acc", "non-conf"
   ============================================ */

const DUKE_LOSSES = [
  // 1980-81 (Coach K's first season - 17-13)
  ["1980-11-29", "1980-81", "Vanderbilt", "L 57-66", "non-conf", ""],
  ["1981-01-10", "1980-81", "Virginia", "L 57-78", "acc", "Ralph Sampson game"],
  ["1981-01-14", "1980-81", "North Carolina", "L 56-74", "acc", ""],
  ["1981-01-21", "1980-81", "Maryland", "L 56-67", "acc", ""],
  ["1981-02-04", "1980-81", "Wake Forest", "L 52-58", "acc", ""],
  ["1981-02-14", "1980-81", "Clemson", "L 55-62", "acc", ""],
  ["1981-02-18", "1980-81", "NC State", "L 39-51", "acc", ""],
  ["1981-02-21", "1980-81", "North Carolina", "L 60-66", "acc", ""],
  ["1981-03-05", "1980-81", "North Carolina", "L 44-66", "acc", "ACC Tournament"],

  // 1981-82 (10-17 - worst record)
  ["1981-11-28", "1981-82", "Northwestern", "L 50-51", "non-conf", "Lost to Northwestern"],
  ["1981-12-12", "1981-82", "Appalachian State", "L 56-64", "non-conf", "Yikes"],
  ["1982-01-06", "1981-82", "Virginia", "L 49-78", "acc", ""],
  ["1982-01-09", "1981-82", "Georgia Tech", "L 47-57", "acc", ""],
  ["1982-01-13", "1981-82", "North Carolina", "L 56-61", "acc", ""],
  ["1982-01-16", "1981-82", "Maryland", "L 44-67", "acc", ""],
  ["1982-01-20", "1981-82", "Wake Forest", "L 44-51", "acc", ""],
  ["1982-01-23", "1981-82", "Clemson", "L 50-63", "acc", ""],
  ["1982-01-30", "1981-82", "NC State", "L 37-56", "acc", ""],
  ["1982-02-03", "1981-82", "Virginia", "L 57-72", "acc", ""],
  ["1982-02-06", "1981-82", "North Carolina", "L 59-72", "acc", ""],
  ["1982-02-10", "1981-82", "Maryland", "L 57-74", "acc", ""],
  ["1982-02-13", "1981-82", "Wake Forest", "L 47-62", "acc", ""],
  ["1982-02-17", "1981-82", "Georgia Tech", "L 53-55", "acc", ""],
  ["1982-02-24", "1981-82", "Clemson", "L 52-64", "acc", ""],
  ["1982-03-04", "1981-82", "NC State", "L 42-52", "acc", "ACC Tournament"],

  // 1982-83 (11-17)
  ["1982-12-04", "1982-83", "Vanderbilt", "L 54-69", "non-conf", ""],
  ["1983-01-05", "1982-83", "Virginia", "L 61-85", "acc", ""],
  ["1983-01-08", "1982-83", "Maryland", "L 63-80", "acc", ""],
  ["1983-01-12", "1982-83", "North Carolina", "L 60-82", "acc", ""],
  ["1983-01-22", "1982-83", "Wake Forest", "L 61-69", "acc", ""],
  ["1983-01-26", "1982-83", "NC State", "L 63-71", "acc", ""],
  ["1983-02-02", "1982-83", "Virginia", "L 73-90", "acc", ""],
  ["1983-02-05", "1982-83", "Georgia Tech", "L 52-57", "acc", ""],
  ["1983-02-09", "1982-83", "North Carolina", "L 68-82", "acc", ""],
  ["1983-02-12", "1982-83", "Clemson", "L 56-60", "acc", ""],
  ["1983-02-16", "1982-83", "Maryland", "L 65-69", "acc", ""],
  ["1983-02-26", "1982-83", "NC State", "L 65-76", "acc", ""],
  ["1983-03-03", "1982-83", "Wake Forest", "L 70-73", "acc", ""],
  ["1983-03-10", "1982-83", "Virginia", "L 82-109", "acc", "ACC Tournament - 27-pt blowout"],

  // 1983-84 (24-10 - first good season)
  ["1984-01-14", "1983-84", "Maryland", "L 72-81", "acc", ""],
  ["1984-01-18", "1983-84", "North Carolina", "L 57-78", "acc", ""],
  ["1984-01-25", "1983-84", "Wake Forest", "L 64-73", "acc", ""],
  ["1984-02-04", "1983-84", "Georgia Tech", "L 56-57", "acc", ""],
  ["1984-02-18", "1983-84", "North Carolina", "L 57-96", "acc", "39-point loss!"],
  ["1984-03-09", "1983-84", "Maryland", "L 69-74", "acc", "ACC Tournament"],
  ["1984-03-18", "1983-84", "Washington", "L 78-80", "ncaa", "NCAA Tournament loss"],

  // 1984-85 (23-8)
  ["1985-01-12", "1984-85", "North Carolina", "L 62-78", "acc", ""],
  ["1985-02-02", "1984-85", "Georgia Tech", "L 57-65", "acc", ""],
  ["1985-02-09", "1984-85", "NC State", "L 64-70", "acc", ""],
  ["1985-02-23", "1984-85", "Maryland", "L 72-74", "acc", ""],
  ["1985-03-09", "1984-85", "Georgia Tech", "L 57-67", "acc", "ACC Tournament"],
  ["1985-03-21", "1984-85", "Boston College", "L 73-74", "ncaa", "NCAA Tournament"],

  // 1985-86 (37-3, lost championship)
  ["1986-01-18", "1985-86", "North Carolina", "L 74-76", "acc", ""],
  ["1986-02-22", "1985-86", "North Carolina", "L 68-82", "acc", ""],
  ["1986-03-31", "1985-86", "Louisville", "L 69-72", "ncaa", "National Championship game LOSS"],

  // 1986-87 (24-9)
  ["1987-01-10", "1986-87", "North Carolina", "L 72-78", "acc", ""],
  ["1987-01-14", "1986-87", "Virginia", "L 63-72", "acc", ""],
  ["1987-02-01", "1986-87", "NC State", "L 62-65", "acc", ""],
  ["1987-02-18", "1986-87", "North Carolina", "L 68-73", "acc", ""],
  ["1987-03-07", "1986-87", "NC State", "L 69-71", "acc", "ACC Tournament"],
  ["1987-03-19", "1986-87", "Indiana", "L 82-88", "ncaa", "NCAA Sweet 16 loss"],

  // 1987-88 (28-7)
  ["1988-01-09", "1987-88", "North Carolina", "L 65-72", "acc", ""],
  ["1988-02-06", "1987-88", "NC State", "L 71-73", "acc", ""],
  ["1988-02-13", "1987-88", "Georgia Tech", "L 64-67", "acc", ""],
  ["1988-03-05", "1987-88", "North Carolina", "L 61-70", "acc", ""],
  ["1988-03-12", "1987-88", "North Carolina", "L 59-65", "acc", "ACC Tournament"],
  ["1988-03-26", "1987-88", "Temple", "L 53-63", "ncaa", "NCAA Regional Final loss"],

  // 1988-89 (28-8, Final Four)
  ["1989-01-14", "1988-89", "North Carolina", "L 75-77", "acc", ""],
  ["1989-01-18", "1988-89", "Georgia Tech", "L 81-92", "acc", ""],
  ["1989-02-08", "1988-89", "Virginia", "L 83-86", "acc", ""],
  ["1989-02-23", "1988-89", "Maryland", "L 92-94", "acc", "OT"],
  ["1989-02-26", "1988-89", "Arizona", "L 71-77", "non-conf", ""],
  ["1989-04-01", "1988-89", "Seton Hall", "L 78-95", "ncaa", "Final Four loss"],

  // 1989-90 (29-9, lost championship)
  ["1990-01-17", "1989-90", "Virginia", "L 60-62", "acc", ""],
  ["1990-01-27", "1989-90", "North Carolina", "L 72-79", "acc", ""],
  ["1990-02-03", "1989-90", "Georgia Tech", "L 83-90", "acc", ""],
  ["1990-02-18", "1989-90", "Georgia Tech", "L 76-84", "acc", ""],
  ["1990-03-11", "1989-90", "Georgia Tech", "L 78-86", "acc", "ACC Tournament"],
  ["1990-04-02", "1989-90", "UNLV", "L 79-103", "ncaa", "Championship game - 24-pt BEATDOWN"],

  // 1990-91 (32-7, WON championship)
  ["1991-01-19", "1990-91", "Virginia", "L 69-81", "acc", ""],
  ["1991-01-23", "1990-91", "North Carolina", "L 74-84", "acc", ""],
  ["1991-02-09", "1990-91", "Wake Forest", "L 69-78", "acc", ""],
  ["1991-02-21", "1990-91", "North Carolina", "L 73-96", "acc", "23-point loss to UNC"],
  ["1991-03-09", "1990-91", "North Carolina", "L 76-96", "acc", "ACC Tournament - another 20-pt UNC loss"],

  // 1991-92 (34-2, WON championship)
  ["1992-02-05", "1991-92", "North Carolina", "L 75-79", "acc", "Even in a title year UNC won"],
  ["1992-03-07", "1991-92", "Wake Forest", "L 68-72", "acc", ""],

  // 1992-93 (24-8)
  ["1993-01-27", "1992-93", "Georgia Tech", "L 68-74", "acc", ""],
  ["1993-02-03", "1992-93", "Wake Forest", "L 68-82", "acc", ""],
  ["1993-02-06", "1992-93", "North Carolina", "L 72-83", "acc", ""],
  ["1993-02-13", "1992-93", "Virginia", "L 59-65", "acc", ""],
  ["1993-03-04", "1992-93", "North Carolina", "L 69-83", "acc", ""],
  ["1993-03-13", "1992-93", "Georgia Tech", "L 62-69", "acc", "ACC Tournament"],
  ["1993-03-25", "1992-93", "California", "L 77-82", "ncaa", "NCAA 2nd round loss"],

  // 1993-94 (28-6)
  ["1994-01-08", "1993-94", "Virginia", "L 82-86", "acc", ""],
  ["1994-02-03", "1993-94", "North Carolina", "L 80-89", "acc", ""],
  ["1994-03-13", "1993-94", "Virginia", "L 64-69", "acc", "ACC Tournament"],
  ["1994-03-27", "1993-94", "Purdue", "L 69-75", "ncaa", "NCAA Tournament loss"],

  // 1994-95 (13-18 - Coach K's "back injury" year)
  ["1995-01-04", "1994-95", "Virginia", "L 63-85", "acc", "K was 'injured'"],
  ["1995-01-07", "1994-95", "Clemson", "L 52-75", "acc", "23-point loss"],
  ["1995-01-11", "1994-95", "North Carolina", "L 60-102", "acc", "42-POINT LOSS TO UNC"],
  ["1995-01-14", "1994-95", "Wake Forest", "L 50-69", "acc", ""],
  ["1995-01-18", "1994-95", "Georgia Tech", "L 53-63", "acc", ""],
  ["1995-01-28", "1994-95", "Maryland", "L 67-81", "acc", ""],
  ["1995-02-01", "1994-95", "NC State", "L 66-69", "acc", ""],
  ["1995-02-04", "1994-95", "Florida State", "L 64-82", "acc", ""],
  ["1995-02-09", "1994-95", "Virginia", "L 58-75", "acc", ""],
  ["1995-02-11", "1994-95", "North Carolina", "L 62-73", "acc", ""],
  ["1995-02-15", "1994-95", "Clemson", "L 58-68", "acc", ""],
  ["1995-02-18", "1994-95", "Wake Forest", "L 62-82", "acc", ""],
  ["1995-02-22", "1994-95", "Maryland", "L 74-94", "acc", "20-point loss"],
  ["1995-02-25", "1994-95", "Georgia Tech", "L 58-78", "acc", ""],
  ["1995-03-01", "1994-95", "NC State", "L 60-78", "acc", ""],
  ["1995-03-09", "1994-95", "NC State", "L 65-79", "acc", "ACC Tournament"],

  // 1995-96 (18-13)
  ["1995-12-02", "1995-96", "Illinois", "L 65-75", "non-conf", ""],
  ["1996-01-04", "1995-96", "Virginia", "L 71-84", "acc", ""],
  ["1996-01-18", "1995-96", "North Carolina", "L 59-84", "acc", ""],
  ["1996-01-20", "1995-96", "Maryland", "L 56-73", "acc", ""],
  ["1996-01-27", "1995-96", "Clemson", "L 61-73", "acc", ""],
  ["1996-02-01", "1995-96", "Wake Forest", "L 56-72", "acc", "Tim Duncan game"],
  ["1996-02-08", "1995-96", "North Carolina", "L 73-84", "acc", ""],
  ["1996-02-18", "1995-96", "Florida State", "L 58-68", "acc", ""],
  ["1996-02-24", "1995-96", "Wake Forest", "L 53-69", "acc", ""],
  ["1996-03-02", "1995-96", "Virginia", "L 56-68", "acc", ""],
  ["1996-03-14", "1995-96", "Eastern Michigan", "L 71-75", "ncaa", "Lost to EASTERN MICHIGAN in NCAA Tournament"],

  // 1996-97 (24-9)
  ["1997-01-11", "1996-97", "North Carolina", "L 73-82", "acc", ""],
  ["1997-01-15", "1996-97", "Maryland", "L 55-70", "acc", ""],
  ["1997-01-25", "1996-97", "Clemson", "L 54-63", "acc", ""],
  ["1997-02-02", "1996-97", "Wake Forest", "L 53-73", "acc", "Tim Duncan again"],
  ["1997-02-06", "1996-97", "North Carolina", "L 56-91", "acc", "35-POINT UNC LOSS"],
  ["1997-02-15", "1996-97", "Wake Forest", "L 64-72", "acc", ""],
  ["1997-03-07", "1996-97", "NC State", "L 56-67", "acc", "ACC Tournament"],
  ["1997-03-14", "1996-97", "Providence", "L 87-98", "ncaa", "NCAA 2nd Round loss"],

  // 1997-98 (32-4)
  ["1998-01-31", "1997-98", "North Carolina", "L 60-97", "acc", "37-POINT LOSS TO UNC!"],
  ["1998-02-04", "1997-98", "NC State", "L 53-56", "acc", ""],
  ["1998-03-22", "1997-98", "Kentucky", "L 84-86", "ncaa", "NCAA Regional Final loss"],

  // 1998-99 (37-2)
  ["1999-02-04", "1998-99", "North Carolina", "L 54-64", "acc", ""],
  ["1999-03-29", "1998-99", "Connecticut", "L 64-77", "ncaa", "National Championship game LOSS"],

  // 1999-00 (29-5)
  ["2000-01-22", "1999-00", "North Carolina", "L 82-84", "acc", ""],
  ["2000-02-03", "1999-00", "Maryland", "L 89-98", "acc", ""],
  ["2000-02-17", "1999-00", "St. John's", "L 79-83", "non-conf", ""],
  ["2000-03-23", "1999-00", "Florida", "L 78-87", "ncaa", "NCAA Sweet 16 loss"],

  // 2000-01 (35-4, WON championship)
  ["2001-01-13", "2000-01", "Virginia", "L 81-91", "acc", ""],
  ["2001-02-01", "2000-01", "North Carolina", "L 81-85", "acc", ""],
  ["2001-02-08", "2000-01", "Maryland", "L 79-98", "acc", ""],
  ["2001-03-11", "2000-01", "North Carolina", "L 79-86", "acc", "ACC Tournament"],

  // 2001-02 (31-4)
  ["2002-01-24", "2001-02", "Florida State", "L 71-82", "acc", ""],
  ["2002-02-06", "2001-02", "Maryland", "L 61-87", "acc", "26-point blowout"],
  ["2002-03-09", "2001-02", "NC State", "L 76-86", "acc", "ACC Tournament"],
  ["2002-03-31", "2001-02", "Indiana", "L 73-74", "ncaa", "NCAA Sweet 16 heartbreaker"],

  // 2002-03 (26-7)
  ["2003-01-15", "2002-03", "Maryland", "L 63-82", "acc", ""],
  ["2003-01-18", "2002-03", "Georgia Tech", "L 66-73", "acc", ""],
  ["2003-02-05", "2002-03", "North Carolina", "L 71-82", "acc", ""],
  ["2003-02-09", "2002-03", "Virginia", "L 56-63", "acc", ""],
  ["2003-03-20", "2002-03", "Central Michigan", "L 58-60", "ncaa", "Lost to CENTRAL MICHIGAN"],

  // 2003-04 (31-6)
  ["2004-01-15", "2003-04", "Georgia Tech", "L 76-80", "acc", ""],
  ["2004-01-21", "2003-04", "North Carolina", "L 66-75", "acc", ""],
  ["2004-02-07", "2003-04", "Maryland", "L 73-82", "acc", ""],
  ["2004-02-14", "2003-04", "Wake Forest", "L 69-90", "acc", "21-point loss"],
  ["2004-03-13", "2003-04", "Maryland", "L 80-95", "acc", "ACC Tournament"],
  ["2004-03-28", "2003-04", "Xavier", "L 63-66", "ncaa", "NCAA Elite 8 loss"],

  // 2004-05 (27-6)
  ["2005-01-15", "2004-05", "Virginia Tech", "L 67-71", "acc", ""],
  ["2005-01-29", "2004-05", "NC State", "L 64-78", "acc", ""],
  ["2005-02-09", "2004-05", "North Carolina", "L 68-87", "acc", ""],
  ["2005-03-06", "2004-05", "North Carolina", "L 71-75", "acc", ""],
  ["2005-03-24", "2004-05", "Michigan State", "L 68-78", "ncaa", "NCAA Sweet 16 loss"],

  // 2005-06 (32-4)
  ["2006-02-08", "2005-06", "Georgetown", "L 72-87", "non-conf", ""],
  ["2006-02-15", "2005-06", "Florida State", "L 75-79", "acc", ""],
  ["2006-03-05", "2005-06", "North Carolina", "L 56-83", "acc", "27-POINT UNC LOSS"],
  ["2006-03-24", "2005-06", "LSU", "L 54-62", "ncaa", "NCAA Sweet 16 loss"],

  // 2006-07 (22-11)
  ["2007-01-15", "2006-07", "Virginia Tech", "L 60-69", "acc", ""],
  ["2007-01-20", "2006-07", "Georgetown", "L 62-70", "non-conf", ""],
  ["2007-01-31", "2006-07", "NC State", "L 67-69", "acc", ""],
  ["2007-02-07", "2006-07", "North Carolina", "L 63-86", "acc", "23-point loss"],
  ["2007-02-11", "2006-07", "Florida State", "L 67-70", "acc", ""],
  ["2007-02-14", "2006-07", "Maryland", "L 80-84", "acc", ""],
  ["2007-02-18", "2006-07", "Wake Forest", "L 76-79", "acc", "OT"],
  ["2007-03-04", "2006-07", "North Carolina", "L 68-86", "acc", ""],
  ["2007-03-08", "2006-07", "NC State", "L 74-80", "acc", "ACC Tournament"],
  ["2007-03-16", "2006-07", "VCU", "L 74-79", "ncaa", "NCAA 1st Round loss to VCU!"],

  // 2007-08 (28-6)
  ["2008-01-16", "2007-08", "North Carolina", "L 76-86", "acc", ""],
  ["2008-01-26", "2007-08", "Georgia Tech", "L 61-62", "acc", ""],
  ["2008-02-06", "2007-08", "North Carolina", "L 72-76", "acc", ""],
  ["2008-02-24", "2007-08", "Miami", "L 81-82", "acc", ""],
  ["2008-03-29", "2007-08", "West Virginia", "L 60-73", "ncaa", "NCAA Regional Final loss"],

  // 2008-09 (30-7)
  ["2009-01-07", "2008-09", "Georgetown", "L 53-69", "non-conf", ""],
  ["2009-01-21", "2008-09", "Wake Forest", "L 83-92", "acc", ""],
  ["2009-02-11", "2008-09", "North Carolina", "L 63-76", "acc", ""],
  ["2009-02-18", "2008-09", "Maryland", "L 78-82", "acc", ""],
  ["2009-03-08", "2008-09", "North Carolina", "L 69-79", "acc", ""],
  ["2009-03-13", "2008-09", "Florida State", "L 62-73", "acc", "ACC Tournament"],
  ["2009-03-28", "2008-09", "Villanova", "L 74-77", "ncaa", "NCAA Sweet 16 loss"],

  // 2009-10 (35-5, WON championship)
  ["2010-01-13", "2009-10", "Georgia Tech", "L 65-74", "acc", ""],
  ["2010-02-10", "2009-10", "North Carolina", "L 64-67", "acc", ""],
  ["2010-02-20", "2009-10", "Maryland", "L 72-79", "acc", ""],
  ["2010-03-06", "2009-10", "North Carolina", "L 63-65", "acc", ""],

  // 2010-11 (32-5)
  ["2011-01-08", "2010-11", "Temple", "L 78-82", "non-conf", ""],
  ["2011-01-29", "2010-11", "St. John's", "L 86-93", "non-conf", "OT"],
  ["2011-02-09", "2010-11", "North Carolina", "L 73-81", "acc", ""],
  ["2011-03-13", "2010-11", "North Carolina", "L 55-75", "acc", "ACC Tournament - 20-pt loss"],
  ["2011-03-27", "2010-11", "Arizona", "L 61-93", "ncaa", "NCAA Sweet 16 - 32-POINT LOSS"],

  // 2011-12 (27-7)
  ["2012-01-14", "2011-12", "Florida State", "L 56-62", "acc", ""],
  ["2012-02-08", "2011-12", "North Carolina", "L 69-85", "acc", ""],
  ["2012-02-11", "2011-12", "Miami", "L 74-78", "acc", ""],
  ["2012-02-18", "2011-12", "Maryland", "L 75-83", "acc", ""],
  ["2012-03-04", "2011-12", "North Carolina", "L 73-88", "acc", "Another UNC blowout"],
  ["2012-03-09", "2011-12", "Florida State", "L 56-62", "acc", "ACC Tournament"],
  ["2012-03-16", "2011-12", "Lehigh", "L 62-75", "ncaa", "15-SEED LEHIGH! LEGENDARY UPSET!"],

  // 2012-13 (30-6)
  ["2013-01-19", "2012-13", "NC State", "L 81-84", "acc", "OT"],
  ["2013-01-26", "2012-13", "Miami", "L 62-90", "acc", "28-point blowout"],
  ["2013-02-13", "2012-13", "North Carolina", "L 68-73", "acc", ""],
  ["2013-03-09", "2012-13", "Virginia", "L 55-65", "acc", ""],
  ["2013-03-16", "2012-13", "Maryland", "L 79-83", "acc", "ACC Tournament"],
  ["2013-03-29", "2012-13", "Louisville", "L 57-85", "ncaa", "NCAA Elite 8 - 28-POINT LOSS"],

  // 2013-14 (26-9)
  ["2014-01-08", "2013-14", "Clemson", "L 68-72", "acc", ""],
  ["2014-01-11", "2013-14", "Notre Dame", "L 74-76", "acc", ""],
  ["2014-01-18", "2013-14", "Syracuse", "L 63-91", "acc", "28-point loss"],
  ["2014-02-12", "2013-14", "North Carolina", "L 63-74", "acc", ""],
  ["2014-02-18", "2013-14", "Maryland", "L 73-83", "acc", ""],
  ["2014-02-22", "2013-14", "Syracuse", "L 60-66", "acc", ""],
  ["2014-03-01", "2013-14", "Virginia", "L 60-69", "acc", ""],
  ["2014-03-14", "2013-14", "Virginia", "L 68-73", "acc", "ACC Tournament"],
  ["2014-03-21", "2013-14", "Mercer", "L 71-78", "ncaa", "14-SEED MERCER! FIRST ROUND EXIT!"],

  // 2014-15 (35-4, WON championship)
  ["2015-01-05", "2014-15", "NC State", "L 81-87", "acc", ""],
  ["2015-01-26", "2014-15", "Notre Dame", "L 73-77", "acc", ""],
  ["2015-02-18", "2014-15", "North Carolina", "L 81-84", "acc", "UNC always gets one"],

  // 2015-16 (25-11)
  ["2016-01-04", "2015-16", "Virginia", "L 46-58", "acc", ""],
  ["2016-01-16", "2015-16", "Louisville", "L 63-71", "acc", ""],
  ["2016-01-18", "2015-16", "Syracuse", "L 62-64", "acc", ""],
  ["2016-01-20", "2015-16", "NC State", "L 83-84", "acc", ""],
  ["2016-02-06", "2015-16", "North Carolina", "L 62-74", "acc", ""],
  ["2016-02-13", "2015-16", "Louisville", "L 59-67", "acc", ""],
  ["2016-02-17", "2015-16", "Virginia", "L 56-63", "acc", ""],
  ["2016-03-05", "2015-16", "North Carolina", "L 61-76", "acc", ""],
  ["2016-03-10", "2015-16", "Notre Dame", "L 77-84", "acc", "ACC Tournament"],
  ["2016-03-19", "2015-16", "Oregon", "L 68-82", "ncaa", "NCAA Sweet 16 loss"],

  // 2016-17 (28-9)
  ["2017-01-14", "2016-17", "NC State", "L 82-84", "acc", "OT"],
  ["2017-01-21", "2016-17", "Virginia", "L 53-65", "acc", ""],
  ["2017-02-04", "2016-17", "Pittsburgh", "L 72-76", "acc", "Lost to Pitt"],
  ["2017-02-09", "2016-17", "North Carolina", "L 72-86", "acc", ""],
  ["2017-02-18", "2016-17", "Louisville", "L 65-83", "acc", ""],
  ["2017-02-23", "2016-17", "Syracuse", "L 44-60", "acc", ""],
  ["2017-03-04", "2016-17", "North Carolina", "L 82-90", "acc", ""],
  ["2017-03-10", "2016-17", "Louisville", "L 62-78", "acc", "ACC Tournament"],
  ["2017-03-19", "2016-17", "South Carolina", "L 69-88", "ncaa", "NCAA 2nd Round - UPSET"],

  // 2017-18 (29-8)
  ["2018-01-13", "2017-18", "NC State", "L 78-96", "acc", "18-point loss"],
  ["2018-01-20", "2017-18", "Virginia", "L 55-65", "acc", ""],
  ["2018-01-27", "2017-18", "Virginia", "L 60-65", "acc", ""],
  ["2018-02-08", "2017-18", "North Carolina", "L 82-91", "acc", ""],
  ["2018-02-14", "2017-18", "Louisville", "L 59-82", "acc", "23-point loss"],
  ["2018-02-24", "2017-18", "Virginia Tech", "L 64-68", "acc", ""],
  ["2018-03-08", "2017-18", "North Carolina", "L 64-74", "acc", "ACC Tournament"],
  ["2018-03-25", "2017-18", "Kansas", "L 81-85", "ncaa", "NCAA Elite 8 OT loss"],

  // 2018-19 (32-6, lost championship)
  ["2019-01-19", "2018-19", "Virginia", "L 62-73", "acc", ""],
  ["2019-01-26", "2018-19", "NC State", "L 72-78", "acc", ""],
  ["2019-02-02", "2018-19", "St. John's", "L 71-79", "non-conf", ""],
  ["2019-02-20", "2018-19", "North Carolina", "L 57-88", "acc", "31-POINT UNC BEATDOWN"],
  ["2019-03-09", "2018-19", "North Carolina", "L 70-79", "acc", ""],
  ["2019-04-06", "2018-19", "Michigan State", "L 68-80", "ncaa", "NCAA Elite 8 loss"],

  // 2019-20 (25-6, COVID season)
  ["2019-11-12", "2019-20", "Stephen F. Austin", "L 81-85", "non-conf", "LOST AT HOME TO SFA ON BUZZER BEATER"],
  ["2020-01-04", "2019-20", "Georgia Tech", "L 73-82", "acc", ""],
  ["2020-01-11", "2019-20", "Louisville", "L 65-79", "acc", ""],
  ["2020-01-18", "2019-20", "Clemson", "L 70-79", "acc", ""],
  ["2020-02-08", "2019-20", "North Carolina", "L 96-98", "acc", "OT"],
  ["2020-03-07", "2019-20", "North Carolina", "L 76-89", "acc", ""],

  // 2020-21 (13-11, COVID)
  ["2021-01-02", "2020-21", "Notre Dame", "L 69-73", "acc", ""],
  ["2021-01-06", "2020-21", "Pittsburgh", "L 56-79", "acc", "23-point loss to Pitt"],
  ["2021-01-12", "2020-21", "Miami", "L 59-77", "acc", ""],
  ["2021-01-16", "2020-21", "Louisville", "L 65-70", "acc", ""],
  ["2021-01-20", "2020-21", "Virginia Tech", "L 67-74", "acc", ""],
  ["2021-01-30", "2020-21", "Clemson", "L 59-60", "acc", ""],
  ["2021-02-06", "2020-21", "North Carolina", "L 73-91", "acc", "18-point UNC loss"],
  ["2021-02-13", "2020-21", "NC State", "L 64-75", "acc", ""],
  ["2021-02-15", "2020-21", "Notre Dame", "L 75-93", "acc", ""],
  ["2021-03-10", "2020-21", "Louisville", "L 70-86", "acc", "ACC Tournament"],

  // 2021-22 (32-7, Coach K's final season)
  ["2022-01-04", "2021-22", "Miami", "L 74-76", "acc", ""],
  ["2022-01-22", "2021-22", "Louisville", "L 64-74", "acc", ""],
  ["2022-02-07", "2021-22", "Virginia", "L 57-69", "acc", ""],
  ["2022-02-12", "2021-22", "North Carolina", "L 72-87", "acc", ""],
  ["2022-03-05", "2021-22", "North Carolina", "L 82-94", "acc", "K'S LAST HOME GAME - UNC RUINED IT"],
  ["2022-03-11", "2021-22", "Virginia Tech", "L 76-82", "acc", "ACC Tournament"],
  ["2022-04-02", "2021-22", "North Carolina", "L 77-81", "ncaa", "FINAL FOUR - K'S LAST GAME EVER - UNC WINS"],

  // ============================================
  // JON SCHEYER ERA (2022-present)
  // ============================================

  // 2022-23 (27-9, Scheyer's first season)
  ["2022-11-15", "2022-23", "Kansas", "L 64-69", "non-conf", "Champions Classic - Scheyer era begins with an L"],
  ["2022-11-27", "2022-23", "Purdue", "L 56-75", "non-conf", "Phil Knight Legacy Championship - blown out by Zach Edey"],
  ["2022-12-20", "2022-23", "Wake Forest", "L 70-81", "acc", ""],
  ["2023-01-04", "2022-23", "NC State", "L 60-84", "acc", "24-point blowout at NC State"],
  ["2023-01-14", "2022-23", "Clemson", "L 64-72", "acc", ""],
  ["2023-01-23", "2022-23", "Virginia Tech", "L 75-78", "acc", ""],
  ["2023-02-06", "2022-23", "Miami", "L 59-81", "acc", "22-point blowout at Miami"],
  ["2023-02-11", "2022-23", "Virginia", "L 62-69", "acc", "Overtime loss at Virginia"],
  ["2023-03-18", "2022-23", "Tennessee", "L 52-65", "ncaa", "NCAA Tournament Round of 32 - season over"],

  // 2023-24 (27-9)
  ["2023-11-10", "2023-24", "Arizona", "L 73-78", "non-conf", "Season opener loss"],
  ["2023-11-29", "2023-24", "Arkansas", "L 75-80", "non-conf", ""],
  ["2023-12-02", "2023-24", "Georgia Tech", "L 68-72", "acc", ""],
  ["2024-01-20", "2023-24", "Pittsburgh", "L 76-80", "acc", ""],
  ["2024-02-03", "2023-24", "North Carolina", "L 84-93", "acc", ""],
  ["2024-02-24", "2023-24", "Wake Forest", "L 79-83", "acc", ""],
  ["2024-03-09", "2023-24", "North Carolina", "L 79-84", "acc", "Regular season finale loss to UNC"],
  ["2024-03-14", "2023-24", "NC State", "L 69-74", "acc", "ACC Tournament Quarterfinals - upset by 10-seed NC State"],
  ["2024-03-31", "2023-24", "NC State", "L 64-76", "ncaa", "NCAA Elite Eight - NC State does it AGAIN"],

  // 2024-25 (35-4)
  ["2024-11-12", "2024-25", "Kentucky", "L 72-77", "non-conf", "Champions Classic"],
  ["2024-11-26", "2024-25", "Kansas", "L 72-75", "non-conf", "Vegas Showdown"],
  ["2025-02-08", "2024-25", "Clemson", "L 71-77", "acc", "Snapped 16-game win streak"],
  ["2025-04-05", "2024-25", "Houston", "L 67-70", "ncaa", "FINAL FOUR - Houston 9-0 run in final 33 seconds - heartbreaker"],
];
