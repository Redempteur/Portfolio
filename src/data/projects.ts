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
    githubUrl: "https://github.com/redempteur-bahuwimbuye/flood-vulnerability-analysis"
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
    }
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
    }
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
    }
  },
  {
    id: "project-05",
    title: "UNFPA & National Survey Information Systems",
    category: "Organizational Information Management",
    tagline: "CSPro data entry forms, census tabulations, and SPSS statistical survey analysis.",
    description: "A series of high-level national survey initiatives executed for UNFPA, PRODEMA, and the Burundi Census Bureau (BCR), encompassing the General Population Census (RGPH 2008), SPSR-2015 Follow-Up Survey, Vasectomy Survey, and Land Sector Review.",
    technologies: ["CSPro 4.1 / 5.0", "SPSS", "UNFPA", "RGPH Census", "Sampling Adjustment", "Survey Design", "Statistical Tabulation"],
    keyContributions: [
      "Designed and finalized data entry forms in CSPro 4.1 and CSPro 5.0 for nationwide demographic and reproductive health surveys.",
      "Trained data collectors, enumerators, and entry clerks across national survey sites.",
      "Applied statistical adjustment techniques in SPSS for undercounts, overcounts, and sampling weights.",
      "Overseed coding, entry, cleaning, and tabulation of data for the 2008 General Population and Housing Census (RGPH)."
    ],
    results: [
      "Produced verified statistical tables and analytical reports for UNFPA, World Bank, and Burundi government publications.",
      "Ensured zero data loss across multi-province field data entry operations.",
      "Established standard CSPro survey templates adopted for national demographic studies."
    ],
    methodology: [
      { label: "Survey Protocol", description: "Sampling design & questionnaire structuring" },
      { label: "CSPro Mask Design", description: "Form engineering in CSPro 4.1 / 5.0" },
      { label: "Field Enumerator Training", description: "Training data clerks & field supervisors" },
      { label: "Data Entry Supervision", description: "Supervising multi-terminal data entry" },
      { label: "SPSS Statistical Adjustments", description: "Weights, undercount adjustment & crosstabs" },
      { label: "National Publication", description: "Final analytical tables & report dissemination" }
    ],
    overview: "Demographic and reproductive health surveys form the bedrock of national development planning. This project collection demonstrates extensive mastery in large-scale survey data entry design and statistical analysis.",
    problem: "Large-scale paper and digital surveys suffer from high risks of data entry error, field sampling bias, and complex statistical tabulation bottlenecks.",
    objectives: [
      "Design error-proof data entry screens in CSPro with automatic range and logic checks.",
      "Train and supervise field teams to maintain high data entry fidelity.",
      "Generate weighted, statistically sound summary tables for UN and government policy makers."
    ],
    approach: "Designed CSPro entry masks with strict validation logic, supervised entry clerks, executed data cleaning routines, and generated SPSS statistical crosstabs.",
    demoType: "org-system",
    demoData: {
      departmentsMapped: 10,
      proceduresStandardized: 22,
      reportingCompliance: "100%"
    }
  }
];
