export type ToolName = "Excel" | "Looker Studio" | "Tableau" | "Python" | "SQL" | "Power BI" | "BigQuery" | "Pandas";

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  tool: ToolName;
  visibility: "Public" | "Private";
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

// ─── ADD NEW PROJECTS HERE ───────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "chocolate-sales-analysis",
    name: "Chocolate-Sales-Analysis",
    description: "Interactive Tableau dashboards analyzing chocolate sales data across customers, stores, and products.",
    longDescription:
      "A 3-dashboard Tableau project built on a 100K+ row chocolate sales dataset. Includes a Sales Performance Dashboard, Customer Dashboard, and Store & Geography Dashboard. Features KPI cards, treemaps, maps, pie charts, and line charts with cross-dashboard navigation and chocolate-themed design.",
    tags: ["tableau", "data-visualization", "sales-analysis", "dashboard"],
    tool: "Tableau",
    visibility: "Public",
    githubUrl: "#",
  }
];
// ─────────────────────────────────────────────────────────────────────────────

export const ALL_TOOLS: ToolName[] = ["Excel", "Looker Studio", "Python", "SQL", "Tableau", "Power BI", "BigQuery", "Pandas"];

export const toolColors: Record<ToolName, string> = {
  Excel: "#1D6F42",
  "Looker Studio": "#4285F4",
  Tableau: "#E97627",
  Python: "#F7C948",
  SQL: "#336791",
  "Power BI": "#F2C811",
  BigQuery: "#4285F4",
  Pandas: "#150458",
};
