export const profile = {
  name: "Rangan Roy",
  title: "Software Engineer III",
  tagline: "Backend · Data Pipelines · LLM Systems",
  location: "Hyderabad, India",
  email: "rangan.roy.ivw@gmail.com",
  phone: "+91-7278856087",
  linkedin: "https://linkedin.com/in/rangan-roy",
  leetcode: "https://leetcode.com/rroy94",
  summary:
    "Results-driven Software Engineer with 10 years of experience in backend development, big data engineering, and cloud-based data pipeline architecture. Building scalable ETL pipelines, microservices, and LLM-powered compliance systems across banking, government, and fintech domains.",
  photo: "/rroy.jpg",
};

export const stats = [
  { value: "10", label: "Years Experience" },
  { value: "70M+", label: "Records Processed" },
  { value: "5", label: "Companies" },
  { value: "3★", label: "Awards" },
];

export const skillGroups = [
  { title: "Languages",           color: "accent",  items: ["Python", "Java"] },
  { title: "Frameworks & Tools",  color: "green",   items: ["Apache Spark", "Apache Hadoop", "Apache Hive", "Apache Airflow", "Flask", "Spring Boot",  "gRPC"] },
  { title: "Cloud & Infra",       color: "purple",  items: ["AWS ECS", "AWS S3", "Amazon Bedrock", "Amazon EventBridge", "Amazon RDS", "Terraform"] },
  { title: "Databases",           color: "gold",    items: ["MySQL", "Amazon RDS"] },
  { title: "AI / LLMs",           color: "red",     items: ["OpenAI API", "Amazon Bedrock", "Amazon Nova", "Claude Sonnet"] },
];

export const experience = [
  {
    role: "Software Engineer III",
    company: "J.P. Morgan India Private Limited",
    period: "Oct 2024 – Present",
    location: "Hyderabad, IN",
    current: true,
    color: "accent",
    bullets: [
      "Core developer on the Data Product Initiatives, identifying consumers' preferred Chase credit card based on transaction spend behavior.",
      "Architected and built a data pipeline that establishes a single source of truth for Spend-based Data Product logic, enabling monthly metrics across all credit card products.",
      "Enabled rapid reporting of critical financial metrics and off-the-shelf analysis at customer, account, and product levels to support high-risk request resolution.",
      "Integrated LLM-powered document review into the regulatory compliance workflow, automating review of marketing materials against regulatory guidelines.",
      "Built a Python/Flask API service backed by OpenAI and Amazon Bedrock, deployed on AWS ECS with document storage on S3, enabling automated compliance checks at scale.",
    ],
    stack: ["Python", "Java", "Flask", "AWS ECS", "AWS S3", "AWS Lambda", "AWS EventBridge", "Apache Airflow", "Apache Spark", "OpenAI API", "Amazon Bedrock", "OpenAI API", "Amazon Nova", "Claude Sonnet"],
  },
  {
    role: "Software Engineer A2",
    company: "EPAM Systems",
    period: "Oct 2023 – Oct 2024",
    location: "Hyderabad, IN",
    current: false,
    color: "green",
    bullets: [
      "Developed an internal budget management system enabling requesters to raise, negotiate, and gain approval for quarterly and annual infrastructure budget proposals.",
      "Implemented comprehensive integration test suites to ensure system reliability and correctness.",
    ],
    stack: ["Java", "Google Guice", "gRPC"],
  },
  {
    role: "Software Engineer A2 (Client: DBS Bank)",
    company: "EPAM Systems",
    period: "Apr 2021 – Sep 2023",
    location: "Hyderabad, IN",
    current: false,
    color: "purple",
    bullets: [
      "Part of the Core Hadoop Development team in the Finance domain, aggregating DBS Bank customer and subsidiary data for financial reporting.",
      "Implemented ETL job to identify inter-company transaction gaps across all DBS branches, reducing manual reconciliation effort by 50%.",
      "Built multiple ETL pipelines ingesting over 70 million raw transactional records from source systems using Apache Spark.",
    ],
    stack: ["Apache Spark (Java)", "Apache Hive", "MySQL"],
  },
  {
    role: "Consultant",
    company: "Deloitte USI (Client: Government of USA)",
    period: "Apr 2019 – Mar 2021",
    location: "Hyderabad, IN",
    current: false,
    color: "gold",
    bullets: [
      "Played an integral role in developing and maintaining social services software used by over 60,000 residents of Rhode Island.",
      "Back-end developer on the Worker Portal team, building systems to aggregate and evaluate user eligibility requests for government benefit programs.",
    ],
    stack: ["Core Java", "MySQL"],
  },
  {
    role: "Software Engineer",
    company: "Altimetrik India Private Limited",
    period: "Jul 2016 – Mar 2019",
    location: "Chennai, IN",
    current: false,
    color: "muted",
    bullets: [
      "Member of Ancestry's Core API Development team, building back-end services serving 2+ million paying subscribers and multiple client applications.",
      "Contributed to a core Hadoop migration project for Silicon Valley Bank, implementing history load, full load, and incremental load data warehousing pipelines that supported funding for 21+ startups in India.",
    ],
    stack: ["Java", "Spring Boot", "AWS S3", "Amazon Aurora", "Amazon RDS", "Amazon DynamoDB"],
  },
];

export const awards = [
  {
    title: "Guards of the Fort Award",
    org: "J.P. Morgan India Private Limited",
    year: "2025",
    desc: "Implementation of Amazon Managed Workflows for Apache Airflow in Card Data Technology",
  },
  {
    title: "Star Performer Award",
    org: "EPAM Systems",
    year: "2022",
    desc: "Extraordinary Technical Contribution and Outstanding Performance",
  },
  {
    title: "DBS MOT FINCAPPLATFORM Award",
    org: "DBS Bank",
    year: "2022",
    desc: "Extraordinary Technical Contribution and Outstanding Performance",
  },
  {
    title: "DBS MOT People Lights On Award",
    org: "DBS Bank",
    year: "2021",
    desc: "Extraordinary Contribution to Production Support Teams",
  },
  {
    title: "SPOT Award",
    org: "Altimetrik",
    year: "2018",
    desc: "Splendid Performance",
  },
];

export const education = {
  degree: "B.Tech in Information Technology",
  school: "Siliguri Institute of Technology, Siliguri",
  year: "Jun 2016",
  gpa: "7.86 / 10.0",
};
