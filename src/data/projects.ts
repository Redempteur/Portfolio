import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    title: "Flood Impact & Household Economic Vulnerability Analysis",
    category: "Data Analysis & Machine Learning",
    tagline: "Predictive vulnerability analysis of climate-induced flood impacts in the Imbo Plain.",
    description: "A comprehensive data-driven investigation examining economic resilience and household vulnerability to climate-induced flooding in the Imbo Plain, combining field data collection, machine learning classification, and spatial GIS mapping.",
    technologies: ["Python", "KoboToolbox", "ArcGIS", "K-Means", "SMOTE", "Decision Trees", "Statistical Analysis", "Data Visualization"],
    keyContributions: [
      "Engineered digital field survey tools in KoboToolbox for structured household data collection across affected zones.",
      "Performed advanced exploratory analysis and spatial data processing in ArcGIS to map geographical vulnerability risk.",
      "Applied K-Means unsupervised clustering to segment households into distinct socio-economic risk tiers.",
      "Resolved severe class imbalance using SMOTE (Synthetic Minority Over-sampling Technique) to ensure unbiased ML training.",
      "Trained Decision Tree predictive classifiers to identify key determinants of household economic vulnerability."
    ],
    results: [
      "Successfully categorized households into 4 distinct vulnerability clusters with high statistical confidence.",
      "Achieved 91% predictive accuracy in classifying high-vulnerability households using SMOTE-balanced Decision Trees.",
      "Produced executive spatial maps enabling humanitarian stakeholders to target emergency aid distribution effectively."
    ],
    methodology: [
      { label: "Data Collection", description: "Mobile survey engineering with KoboToolbox" },
      { label: "Data Cleaning", description: "Outlier filtering & missing value handling" },
      { label: "Exploratory Analysis", description: "Descriptive statistics & bivariate correlation" },
      { label: "K-Means Clustering", description: "Unsupervised socio-economic segmentation" },
      { label: "SMOTE Resampling", description: "Class balancing for minority vulnerability classes" },
      { label: "Decision Tree Modeling", description: "Supervised predictive classification" },
      { label: "Prediction & Validation", description: "Model evaluation & precision metrics" },
      { label: "Visualization & Mapping", description: "ArcGIS spatial mapping & executive charts" }
    ],
    overview: "Climate-induced floods in the Imbo Plain present severe economic threats to vulnerable households. This analytical project establishes a quantitative framework for assessing vulnerability by combining field survey data, geographical spatial analysis, and predictive machine learning models.",
    problem: "Humanitarian organizations and local decision-makers often lack high-resolution, predictive data on which households are most at risk of severe economic collapse during flood events, leading to suboptimal emergency relief allocation.",
    objectives: [
      "Quantify household vulnerability drivers across demographic, economic, and geographical dimensions.",
      "Segment households into clear vulnerability profiles to assist targeted aid deployment.",
      "Build a machine learning predictive model capable of classifying household vulnerability risk with high accuracy."
    ],
    approach: "The project adopted an end-to-end data science lifecycle. Field data collected via KoboToolbox was cleaned in Python, geo-referenced in ArcGIS, and segmented via K-Means. SMOTE was applied to balance target classes before training Decision Tree classifiers.",
    demoType: "data-pipeline",
    demoData: {
      clusters: [
        { name: "Extreme Vulnerability", share: "28%", incomeDrop: "-65%", resilienceScore: 2.1 },
        { name: "High Risk", share: "34%", incomeDrop: "-42%", resilienceScore: 4.3 },
        { name: "Moderate Resilience", share: "23%", incomeDrop: "-18%", resilienceScore: 6.8 },
        { name: "Stable / Resilient", share: "15%", incomeDrop: "-5%", resilienceScore: 8.5 }
      ],
      modelMetrics: {
        accuracy: "91.4%",
        precision: "89.2%",
        recall: "93.1%",
        f1Score: "91.1%"
      }
    },
    githubUrl: "https://github.com/Redempteur/flood-vulnerability-analysis"
  },
  {
    id: "project-02",
    title: "IOM Migration Health Assessment Clinic Data System",
    category: "Data Quality & Information Management",
    tagline: "High-integrity medical record tracking and statistical quality control for international resettlement.",
    description: "A specialized data processing framework managed at the International Organization for Migration (IOM) for processing, validating, and tracking migrant health records across UK, Australia, Canada, France, Belgium, and USRAP resettlement programs.",
    technologies: ["IOM Data Systems", "SQL", "Python", "Data Quality Control", "Medical Data Validation", "Statistical Reporting", "Resettlement Tracking"],
    keyContributions: [
      "Managed quality control procedures for immigrant medical clinic data across multi-country departure pipelines.",
      "Executed systematic error detection, database reconciliation, and medical record follow-up until final departure.",
      "Coordinated with partner health clinics and embassies to ensure timely service payment and record tracking.",
      "Published regular statistical reports on migration health indicators for senior management."
    ],
    results: [
      "Maintained 100% data audit compliance for international resettlement medical records (07/2019 – 03/2025).",
      "Eliminated processing bottlenecks, accelerating migrant health clearing times for resettlement partner countries.",
      "Guaranteed strict data confidentiality and compliance with international health standards."
    ],
    methodology: [
      { label: "Clinic Data Intake", description: "Medical assessment intake & record logging" },
      { label: "Quality Control", description: "Diagnostic verification & missing data checks" },
      { label: "Database Error Resolution", description: "Systematic record reconciliation" },
      { label: "Partner Coordination", description: "Tracking records with clinic partners & embassies" },
      { label: "Resettlement Clearing", description: "Final clearance validation for departure" },
      { label: "Statistical Reporting", description: "Publishing routine migration health statistics" }
    ],
    overview: "International refugee resettlement programs require uncompromising accuracy in health data processing. At IOM, this system ensured that all medical records met strict receiving-country health guidelines.",
    problem: "Errors or delays in migrant health assessments can stall resettlement departures, create partner payment friction, and compromise health data integrity.",
    objectives: [
      "Establish automated and manual audit controls for clinic data entry.",
      "Maintain real-time tracking of medical records from initial clinic screening to final flight departure.",
      "Ensure full compliance with receiving country health regulations (UK, Canada, Australia, France, Belgium, USRAP)."
    ],
    approach: "Combined systematic SQL and database validation rules with multi-clinic coordination protocols, creating a zero-error medical record workflow.",
    demoType: "interactive-chart",
    demoData: {
      initialErrors: 312,
      cleanedErrors: 0,
      qualityScore: "100%"
    },
    githubUrl: "https://github.com/Redempteur/"
  },
  {
    id: "project-03",
    title: "FHI 360 / PEPFAR PMTCT & M&E Indicator Dashboard",
    category: "Business Intelligence & M&E",
    tagline: "USAID/PEPFAR DATIM indicator tracking, SIMS scorecards, and DQA data quality audits.",
    description: "An enterprise M&E indicator monitoring and Data Quality Assessment (DQA) solution developed for FHI 360 under the USAID/PEPFAR-funded IHPB project, tracking PMTCT, early PCR, and MNCH indicators across Burundi.",
    technologies: ["Power BI", "DATIM", "SIMS", "DHIS2", "DQA Audits", "M&E Scorecards", "USAID / PEPFAR", "SPSS"],
    keyContributions: [
      "Architected M&E indicator dashboards tracking PMTCT and early PCR integration in maternal health centers.",
      "Led routine Data Quality Assessments (DQAs) and SIMS evaluations across partner health centers.",
      "Strengthened provider capacity through routine SIS analysis meetings and data quality supervision.",
      "Updated central project databases to meet PEPFAR DATIM and Burundi Ministry of Health reporting specs."
    ],
    results: [
      "Achieved 100% on-time quarterly reporting compliance to PEPFAR via the DATIM platform.",
      "Standardized M&E indicator collection across intervention and control health zones.",
      "Elevated provider data entry accuracy through regular DQA feedback loops."
    ],
    methodology: [
      { label: "M&E Matrix Definition", description: "PEPFAR DATIM & SIMS indicator targets" },
      { label: "Field DQA Audits", description: "On-site data quality assessment at health centers" },
      { label: "Data Modeling", description: "Star-schema modeling in Power BI & DHIS2" },
      { label: "Provider Coaching", description: "SIS analysis meetings & formative supervision" },
      { label: "Executive Reporting", description: "Quarterly DATIM & donor dashboard submission" }
    ],
    overview: "USAID/PEPFAR health interventions require precise tracking of maternal and child health indicators. This project established a comprehensive M&E dashboard and quality control framework.",
    problem: "Healthcare facilities struggled with inconsistent indicator definitions, delayed quarterly reporting, and data discrepancy risks during donor audits.",
    objectives: [
      "Build a centralized M&E dashboard tracking key PMTCT and early PCR indicators.",
      "Conduct rigorous DQAs to ensure data match between health center registers and central DATIM submissions.",
      "Train health facility staff on digital data entry and indicator analysis."
    ],
    approach: "Designed structured DQA audit protocols, configured Power BI and DHIS2 dashboards, and conducted quarterly indicator review sessions with facility supervisors.",
    demoType: "power-bi",
    demoData: {
      totalBeneficiaries: "142,500",
      targetReachRate: "98.2%",
      activeProjects: 14,
      onTrackIndicators: "20 / 20"
    },
    githubUrl: "https://github.com/Redempteur/"
  },
  {
    id: "project-04",
    title: "TOFAUTI Business Management & CRM System",
    category: "Business Management / CRM",
    tagline: "Integrated enterprise management solution for small-scale beverage production and commercial sales.",
    description: "A comprehensive digital management and CRM application engineered for an enterprise operating in beverage production and commercial distribution, unifying customer management, quotation workflows, inventory tracking, and sales analytics.",
    technologies: ["Database Design", "Information Systems", "Business Analysis", "Workflow Automation", "CRM Concepts", "SQL", "Reporting"],
    keyContributions: [
      "Analyzed beverage manufacturing and commercial distribution workflows to design tailored system requirement specifications.",
      "Designed normalized database architectures connecting Products, Clients, Prospects, Quotations, Invoices, Stock Levels, and Financial Transactions.",
      "Implemented automated quotation-to-invoice generation flows to accelerate sales cycle processing.",
      "Engineered stock movement tracking algorithms that alert management when raw materials or finished inventory drop below safety thresholds."
    ],
    results: [
      "Digitized commercial operations, cutting invoice generation times by 75%.",
      "Eliminated inventory stock-outs through automated reorder alerts and real-time inventory ledger tracking.",
      "Generated instant profitability and client performance reporting for management review."
    ],
    methodology: [
      { label: "Business Process Mapping", description: "Mapping sales & production workflows" },
      { label: "DB Schema Design", description: "Entity-relationship modeling & normalization" },
      { label: "Module Architecture", description: "Products, CRM, Invoicing, Stock & Ledger" },
      { label: "Workflow Automation", description: "Quotation conversion & stock alerts" },
      { label: "Reporting Engine", description: "Sales analytics & financial summaries" }
    ],
    overview: "Small and medium manufacturing enterprises require tailored digital solutions to control production stock and streamline customer relationships. TOFAUTI delivers a unified information system managing everything from lead prospect tracking to beverage delivery invoicing.",
    problem: "Manual spreadsheet tracking of client quotes, pending invoices, and warehouse stock levels led to lost revenue, delayed order deliveries, and inaccurate financial reporting.",
    objectives: [
      "Centralize client and prospect relationship records into a single accessible database.",
      "Automate the commercial workflow from initial price quotation to final invoice payment tracking.",
      "Maintain real-time inventory visibility across raw material stock and finished beverage supplies."
    ],
    approach: "Designed a modular business management architecture around core modules: Products, Customers, Opportunities, Quotations, Invoices, Payments, Stock Control, and Executive Dashboards.",
    demoType: "crm-flow",
    demoData: {
      modules: ["Products & Batches", "Customers & Prospects", "Quotations & Orders", "Invoices & Payments", "Inventory & Stock", "Sales Analytics"],
      timeSaved: "75% Faster Processing"
    },
    githubUrl: "https://github.com/Redempteur/"
  },
  {
    id: "project-05",
    title: "ADE-Espoir Information System & Web Platform",
    category: "Organizational Information Management",
    tagline: "Official web portal (https://ade-espoir.org/) development & Project Management leadership.",
    description: "Designed, engineered, and launched the official organizational web portal (https://ade-espoir.org/) in June 2025 for ADE-Espoir, establishing a modern digital presence, institutional information structure, and M&E reporting matrix that led to appointment as Project Manager in July 2025.",
    technologies: ["https://ade-espoir.org/", "Project Management", "Web Development", "Information Systems", "M&E Matrix", "Digital Transformation"],
    keyContributions: [
      "Architected and developed the official website https://ade-espoir.org/ in June 2025 to showcase organization projects, mission, and beneficiary impacts.",
      "Appointed Project Manager in July 2025 to direct organizational project planning, execution, and M&E indicator tracking.",
      "Formalized standardized operational procedure (SOP) manuals for data entry, file archiving, and quarterly reporting.",
      "Established an integrated organizational M&E reporting matrix connecting field units with executive management."
    ],
    results: [
      "Successfully launched https://ade-espoir.org/, elevating organizational transparency and donor engagement.",
      "Promoted to Project Manager (July 2025 – Present) leading multi-sectoral project execution.",
      "Standardized quarterly reporting formats, ensuring 100% on-time submission to institutional partners."
    ],
    methodology: [
      { label: "Web Portal Engineering", description: "Design & launch of https://ade-espoir.org/ in June 2025" },
      { label: "Project Leadership", description: "Appointed Project Manager in July 2025" },
      { label: "Structure & SOPs", description: "Defining roles, responsibilities & procedures" },
      { label: "M&E Matrix", description: "Integrating reporting indicators & benchmarks" },
      { label: "Digital Transition", description: "Migrating records to structured databases" },
      { label: "Capacity Building", description: "Staff training & system adoption review" }
    ],
    overview: "Non-profit organizations and development projects require solid digital platforms and structured information management to sustain project growth and satisfy donor accountability requirements. This project delivered https://ade-espoir.org/ and project management leadership.",
    problem: "Informal reporting channels, unstandardized file storage, and vague role definitions compromised operational transparency and hindered effective project monitoring.",
    objectives: [
      "Design and deploy a modern web portal (https://ade-espoir.org/) for public engagement and project visibility.",
      "Formalize organizational structure, departmental roles, and information governance procedures.",
      "Implement secure digital information management routines for sensitive beneficiary data."
    ],
    approach: "Developed https://ade-espoir.org/, mapped organizational data flows, drafted operational procedure guidelines, configured digital record repositories, and assumed Project Manager leadership.",
    demoType: "org-system",
    demoData: {
      departmentsMapped: 6,
      proceduresStandardized: 14,
      reportingCompliance: "100%"
    },
    liveUrl: "https://ade-espoir.org/",
    githubUrl: "https://github.com/Redempteur/"
  }
];
