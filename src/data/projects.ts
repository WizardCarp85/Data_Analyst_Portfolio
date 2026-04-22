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
    id: "financial-modeler",
    name: "Financial-Modeler",
    description: "Advanced forecasting tool utilizing complex logic formulas and Power Query.",
    longDescription:
      "A comprehensive Excel-based financial modeling tool that leverages complex nested formulas, Power Query transformations, and dynamic named ranges to produce multi-scenario forecasting outputs. Built for executive-level decision making.",
    tags: ["financial-analysis", "power-query"],
    tool: "Excel",
    visibility: "Public",
    githubUrl: "#",
  },
  {
    id: "marketing-roi-tracker",
    name: "Marketing-ROI-Tracker",
    description: "Live dashboard connecting Google Ads and Analytics to track marketing spend efficiency.",
    longDescription:
      "A Looker Studio dashboard that pulls data from Google Ads, GA4, and BigQuery to provide real-time ROI metrics across all marketing channels. Includes custom blended data sources and automated alerting.",
    tags: ["marketing-api", "dashboard"],
    tool: "Looker Studio",
    visibility: "Public",
    githubUrl: "#",
  },
  {
    id: "sales-dashboard-vba",
    name: "Sales-Dashboard-VBA",
    description: "Automated KPI tracking with VBA and Pivot Charts for executive reporting.",
    longDescription:
      "An Excel workbook powered by VBA macros that automatically refreshes data, rebuilds pivot tables, and emails formatted PDF reports to stakeholders on a schedule. Reduced manual reporting time by 80%.",
    tags: ["vba", "automation"],
    tool: "Excel",
    visibility: "Public",
    githubUrl: "#",
  },
  {
    id: "ecommerce-live-map",
    name: "E-Commerce-Live-Map",
    description: "Real-time revenue tracking and map visualizations powered by BigQuery.",
    longDescription:
      "A geo-enriched Looker Studio report that visualizes e-commerce order flow across regions in near real-time. Uses BigQuery as the data backend with scheduled query refreshes and custom SQL metrics.",
    tags: ["bigquery", "mapping"],
    tool: "Looker Studio",
    visibility: "Public",
    githubUrl: "#",
  },
  {
    id: "predictive-churn-lod",
    name: "Predictive-Churn-LOD",
    description: "Predictive visual analytics on user retention logic using advanced LOD formulas.",
    longDescription:
      "A Tableau workbook employing Level of Detail (LOD) expressions to model customer churn probability across cohorts. Includes fixed, include, and exclude LOD calculations with interactive parameter-driven scenarios.",
    tags: ["predictive-modeling"],
    tool: "Tableau",
    visibility: "Public",
    githubUrl: "#",
  },
  {
    id: "real-estate-geospatial",
    name: "Real-Estate-Geospatial",
    description: "Geospatial mapping of housing prices and market shifts.",
    longDescription:
      "A Tableau dashboard that visualizes real estate price trends across neighborhoods using spatial files and custom geocoding. Layered with demographic overlays to surface market shift patterns over 5 years of data.",
    tags: ["geospatial", "mapping"],
    tool: "Tableau",
    visibility: "Public",
    githubUrl: "#",
  },
  {
    id: "global-health-trends",
    name: "Global-Health-Trends",
    description: "Interactive parameters highlighting demographic shifts utilizing Tableau features.",
    longDescription:
      "A Tableau dashboard built on WHO open datasets, featuring set actions, parameter controls, and dynamic reference lines to highlight global health KPIs like mortality rates, disease prevalence, and access to healthcare.",
    tags: ["data-visualization"],
    tool: "Tableau",
    visibility: "Public",
    githubUrl: "#",
  },
  {
    id: "health-data-scraper",
    name: "Health-Data-Scraper",
    description: "Python web scraper utilizing BeautifulSoup and Pandas to clean demographic data.",
    longDescription:
      "A Python pipeline that scrapes public health portals using BeautifulSoup, normalizes inconsistent data formats with Pandas, and outputs clean CSV/Parquet files for downstream Tableau and Looker Studio dashboards.",
    tags: ["python", "pandas", "web-scraping"],
    tool: "Python",
    visibility: "Public",
    githubUrl: "#",
  },
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
