"use client";

import { useMemo } from "react";

const WEEKS = 52;
const DAYS_PER_WEEK = 7;
const TOTAL_DAYS = WEEKS * DAYS_PER_WEEK;
const TOTAL_CONTRIBUTIONS = 1512;

type Level = 0 | 1 | 2 | 3 | 4;

function generateGrid(): Level[] {
  // Deterministic pseudo-random grid seeded by index
  const grid: Level[] = [];
  for (let i = 0; i < TOTAL_DAYS; i++) {
    const hash = ((i * 2654435761) >>> 0) % 100;
    if (hash < 30) grid.push(0);
    else if (hash < 55) grid.push(1);
    else if (hash < 75) grid.push(2);
    else if (hash < 90) grid.push(3);
    else grid.push(4);
  }
  return grid;
}

const levelClass: Record<Level, string> = {
  0: "contrib-cell contrib-0",
  1: "contrib-cell contrib-1",
  2: "contrib-cell contrib-2",
  3: "contrib-cell contrib-3",
  4: "contrib-cell contrib-4",
};

export default function ContributionGraph() {
  const grid = useMemo(() => generateGrid(), []);

  // Reshape into weeks (columns) of 7 days
  const weeks: Level[][] = [];
  for (let w = 0; w < WEEKS; w++) {
    weeks.push(grid.slice(w * 7, w * 7 + 7) as Level[]);
  }

  return (
    <section className="contrib-section">
      <p className="contrib-title">{TOTAL_CONTRIBUTIONS.toLocaleString()} contributions in the last year</p>
      <div className="contrib-grid">
        {weeks.map((week, wi) => (
          <div key={wi} className="contrib-week">
            {week.map((level, di) => (
              <div key={di} className={levelClass[level]} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
