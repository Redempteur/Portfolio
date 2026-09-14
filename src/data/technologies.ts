import { Technology } from '../types';

export const TECHNOLOGIES: Technology[] = [
  {
    name: "Python",
    category: "Languages & DB",
    icon: "FileCode2",
    description: "Data manipulation (Pandas, NumPy), Machine Learning (Scikit-Learn, K-Means, Decision Trees), SMOTE resampling, and AI algorithms.",
    featured: true
  },
  {
    name: "SQL & Databases",
    category: "Languages & DB",
    icon: "Database",
    description: "Database queries, stored procedures, schema design, PostgreSQL, MySQL, SQL Server, PHP/SQL architecture, and CISA security.",
    featured: true
  },
  {
    name: "DHIS2 & SIDA Info",
    category: "Analytics & BI",
    icon: "Server",
    description: "Health information system design, custom tracker configuration, indicator aggregations, and PEPFAR DATIM platform integrations.",
    featured: true
  },
  {
    name: "Power BI & SPSS",
    category: "Analytics & BI",
    icon: "PieChart",
    description: "Statistical data analysis (SPSS crosstabs, regressions, sampling error adjustments), DAX measures, and interactive dashboards.",
    featured: true
  },
  {
    name: "CSPro & KoboToolbox",
    category: "Field & Spatial",
    icon: "ClipboardCheck",
    description: "Field survey engineering, CSPro 4.1/5.0 data entry masks, mobile forms (KoboToolbox/ODK), skip logic, and enumerator validation.",
    featured: true
  },
  {
    name: "ArcGIS",
    category: "Field & Spatial",
    icon: "Map",
    description: "Geographic spatial analysis, geo-referencing, spatial vulnerability mapping, and environmental GIS visualization.",
    featured: true
  },
  {
    name: "PROGRESS & VolRep",
    category: "Field & Spatial",
    icon: "ShieldCheck",
    description: "UNHCR specialized database systems for refugee tracking, returnee registration, and international protection indicator monitoring.",
    featured: true
  },
  {
    name: "Microsoft Excel & Macros",
    category: "Analytics & BI",
    icon: "Table",
    description: "Advanced PivotTables, Power Query ETL, VBA macros, dynamic audit models, and routine data validation checklists.",
    featured: true
  },
  {
    name: "HTML / CSS / JS",
    category: "Development",
    icon: "Code",
    description: "Mobile and web programming fundamentals, dashboard UI components, and web report rendering.",
    featured: false
  },
  {
    name: "Git & GitHub",
    category: "Development",
    icon: "GitBranch",
    description: "Version control system for tracking statistical scripts, ML models, survey specifications, and documentation.",
    featured: false
  }
];
