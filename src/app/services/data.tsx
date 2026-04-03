import React from 'react';
import { BarChart3, Calculator, Receipt, DollarSign, Users, PieChart, ShieldAlert, BadgeDollarSign, ShieldCheck, Headset, Database, PlusCircle } from "lucide-react";

export const services = [
  {
    slug: "accounting-services",
    title: "Accounting Services",
    icon: <Calculator size={28} />,
    description: "Comprehensive accounting solutions including general ledger maintenance, accounts payable and receivable, and precise financial reporting to keep your business fully compliant and your ledgers flawlessly organized.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "Our Accounting Services provide the foundational pillars for your business's financial health. We go beyond mere data entry, taking a proactive approach to managing your entire financial ecosystem. From daily general ledger maintenance to complex accounts payable and receivable management, our team ensures complete accuracy and total transparency in every transaction.",
      "We utilize state-of-the-art accounting software and cloud technologies to give you real-time visibility into your financial status. This empowers you as a business owner to make data-driven decisions confidently, knowing your financial house is in perfect order and completely compliant with local and federal regulations."
    ],
    features: [
      "General Ledger Diagnostics & Maintenance",
      "Accounts Payable & Receivable Automation",
      "Cash Flow Forecasting & Tracking",
      "Custom Financial Dashboards"
    ]
  },
  {
    slug: "payroll-management",
    title: "Payroll Management & Reporting",
    icon: <Users size={28} />,
    description: "End-to-end payroll processing ensuring accurate, timely employee compensation, tax withholdings, and detailed reporting to satisfy all federal and state regulatory requirements.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "Navigating the complexities of modern payroll can be incredibly time-consuming and heavily penalized if done incorrectly. Our dedicated Payroll Management team assumes full responsibility for your payroll processes, guaranteeing that your employees are paid accurately and consistently on time.",
      "We handle everything from calculating multi-state tax withholdings to managing employee benefits deductions and garnishments. By outsourcing your payroll to Vigilant, you completely mitigate the risk of IRS penalties and reclaim countless hours of administrative work, allowing you to focus entirely on scaling your operations."
    ],
    features: [
      "Direct Deposit & Check Processing",
      "Automated Tax Withholding Calculations",
      "Benefit & Garnishment Deductions",
      "W-2 and 1099 Preparation & Filing"
    ]
  },
  {
    slug: "tax-management",
    title: "Tax Management & Reporting",
    icon: <Receipt size={28} />,
    description: "Strategic corporate tax planning and preparation to minimize your tax burden and maximize your bottom line. We provide vigilant oversight of all tax regulations affecting your business.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "Our approach to Tax Management is entirely proactive rather than reactive. We don't just calculate what you owe at the end of the year; we develop sophisticated, forward-thinking strategies to legally minimize your tax liabilities year-round.",
      "Our tax professionals continuously monitor the ever-changing landscape of federal, state, and local tax codes to ensure your business structure remains fully optimized. We assist with estimated quarterly payments, handle rigorous tax preparation, and aggressively search for applicable credits and deductions that others might miss, actively protecting your hard-earned revenue."
    ],
    features: [
      "Year-Round Strategic Tax Planning",
      "Corporate & Partnership Tax Preparation",
      "Entity Structuring for Maximum Savings",
      "Audit Defense and Representation"
    ]
  },
  {
    slug: "daily-sales-reconciliation",
    title: "Daily Sales Reconciliation",
    icon: <DollarSign size={28} />,
    description: "Meticulous daily tracking and reconciliation of your sales channels, matching deposits with sales records to instantly identify and resolve discrepancies, ensuring real-time revenue clarity.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "For businesses handling high transaction volumes across multiple platforms (e-commerce, point-of-sale, wholesale), keeping track of where every dollar goes is critical. Our Daily Sales Reconciliation team meticulously matches your daily sales logs against actual bank deposits.",
      "This rigorous daily process instantly highlights discrepancies, missing funds, or platform errors before they compound over the month. We provide you with verified, daily cash-flow reports so you have total confidence in your working capital at all times."
    ],
    features: [
      "Multi-Channel Sales Aggregation",
      "Daily Deposit Verification",
      "Discrepancy Detection & Resolution",
      "Chargeback Monitoring & Disputing"
    ]
  },
  {
    slug: "vendor-management",
    title: "Vendor Management",
    icon: <BarChart3 size={28} />,
    description: "Streamlining your vendor relationships by managing accounts payable, verifying invoices, negotiating terms, and ensuring timely payments to maintain strong supplier partnerships.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "Maintaining healthy, organized relationships with your suppliers is paramount to business stability. Our Vendor Management service takes over the entire accounts payable workflow, acting as the professional liaison between your business and your vendors.",
      "We thoroughly vet every invoice against purchase orders to prevent overbilling or duplicate payments. Furthermore, we strategically schedule outward payments to optimize your cash flow while ensuring you remain in excellent standing with your suppliers, often qualifying you for early-payment discounts."
    ],
    features: [
      "Comprehensive Invoice Auditing",
      "Strategic Payment Scheduling",
      "Vendor Communication & Dispute Resolution",
      "Form W-9 Collection & Filing"
    ]
  },
  {
    slug: "financials-and-reporting",
    title: "Financials and Reporting",
    icon: <PieChart size={28} />,
    description: "Delivering crystal-clear monthly, quarterly, and annual financial statements. We break down complex data into digestible insights to empower your strategic decision-making.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "Financial data is only as good as your ability to understand it. Our Financials and Reporting division is dedicated to transforming raw numbers into clear, narrative-driven insights. Every month, you receive a meticulously prepared package containing your Profit & Loss statement, Balance Sheet, and Statement of Cash Flows.",
      "More importantly, we don't just hand you reports; we interpret them for you. We highlight key performance indicators (KPIs), identify emerging cost trends, and visually present your data in a way that allows you, investors, and stakeholders to immediately grasp the financial trajectory of the company."
    ],
    features: [
      "Monthly Executive Summary Generation",
      "Profitability & Margin Analysis",
      "Customized KPI Dashboarding",
      "Budget vs. Actual Variance Reporting"
    ]
  },
  {
    slug: "virtual-monitoring-surveillance",
    title: "Virtual Monitoring & Surveillance",
    icon: <ShieldAlert size={28} />,
    description: "Proactive, tech-driven oversight of your financial transactions and system access logs to rapidly detect and prevent unauthorized activities or irregularities in your accounts.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "In the digital age, relying solely on month-end reconciliations leaves businesses vulnerable to immediate risks. Our Virtual Monitoring & Surveillance implements automated, AI-driven oversight across your financial networks.",
      "We set up rigorous alert protocols that constantly monitor for anomalous behaviors—such as unexpected out-of-state transactions, duplicate vendor payments, or sudden spikes in expenses. By keeping a vigilant, real-time eye on your financial flow, we detect and isolate issues before they can negatively impact your bottom line."
    ],
    features: [
      "Real-Time Transaction Alerts",
      "Automated Duplicate Entry Detection",
      "Access Log Oversight",
      "Weekly Activity Auditing"
    ]
  },
  {
    slug: "financial-consultancy",
    title: "Financial Consultancy & Loan Advisory",
    icon: <BadgeDollarSign size={28} />,
    description: "Expert guidance for securing capital, analyzing debt structures, and developing long-term financial forecasts to fuel your company's expansion and sustained growth.",
    image: "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "Scaling a business requires capital and strategy. Our Financial Consultancy team acts as your virtual CFO, providing high-level executive guidance on major financial decisions. Whether you are preparing to acquire a competitor, purchase commercial real estate, or raise capital, we are here to structure the deal.",
      "We work directly with financial institutions on your behalf, preparing the exhaustive financial forecasts, pro-forma statements, and risk analyses required to secure favorable loan terms. We leverage our extensive network and financial acumen to ensure you are heavily armed for any negotiation."
    ],
    features: [
      "Virtual CFO & High-Level Advisory",
      "Pro-Forma & Financial Forecasting",
      "Debt Restructuring Analysis",
      "Loan Package Preparation & Bank Liaison"
    ]
  },
  {
    slug: "fraud-protection",
    title: "Fraud Protection Department",
    icon: <ShieldCheck size={28} />,
    description: "Implementing rigorous internal controls and advanced monitoring protocols to safeguard your business assets against internal and external financial fraud.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "Corporate fraud, whether internal embezzlement or external phishing, is a pervasive threat to growing enterprises. Our Fraud Protection Department is dedicated to bulletproofing your financial systems. We begin with a comprehensive risk assessment to identify vulnerabilities in your current accounting practices.",
      "Based on our findings, we implement stringent separation-of-duties protocols, multi-tier approval workflows, and randomized deep-dive audits. We create an environment where fraudulent activities are structurally impossible to conceal, completely safeguarding your company's assets and reputation."
    ],
    features: [
      "Comprehensive Fraud Risk Assessments",
      "Implementation of Internal Controls",
      "Randomized Deep-Dive Auditing",
      "Employee Expenses Scrutiny"
    ]
  },
  {
    slug: "customer-service",
    title: "Customer Service Department",
    icon: <Headset size={28} />,
    description: "Dedicated financial support teams acting as a professional extension of your brand to handle billing inquiries, payment processing, and account management for your clients.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "Nothing frustrates a client more than unresolved billing issues. Our Customer Service team acts as a seamless, white-labeled extension of your own business, handling all financial communication directly with your clients with the utmost professionalism.",
      "From setting up payment plans and processing sensitive refunds to professionally handling past-due collections, we handle the friction of commercial billing. This ensures your clients receive prompt, accurate assistance regarding their financial accounts while protecting your brand's pristine reputation."
    ],
    features: [
      "White-Labeled Billing Support Inbound",
      "Professional Collections Outreach",
      "Refund & Dispute Triaging",
      "Payment Plan Scheduling & Oversight"
    ]
  },
  {
    slug: "data-handling-archiving",
    title: "Data Handling and Archiving",
    icon: <Database size={28} />,
    description: "Secure, structured digitization and archiving of all your financial documentation, guaranteeing rapid retrieval, secure backups, and strict compliance with data retention laws.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "In the event of an audit or historical review, instantaneous access to prior financial documentation isn't just a convenience—it is a regulatory necessity. Our Data Handling & Archiving service provides enterprise-grade digitization and structuring of your entire paper trail.",
      "We securely catalog bank statements, tax filings, payroll logs, and vendor receipts in encrypted, redundantly backed-up cloud servers. We manage the entire lifecycle of your data, guaranteeing strict adherence to federal data-retention laws across all industries."
    ],
    features: [
      "Encrypted Cloud Digitization",
      "Regulatory Compliant Data Retention",
      "Rapid Retrieval Indexing Systems",
      "Redundant Off-Site Cold Storage"
    ]
  },
  {
    slug: "additional-services",
    title: "Additional Value Added Services",
    icon: <PlusCircle size={28} />,
    description: "Customized financial solutions designed specifically around your unique business challenges, including specialized auditing, software migrations, and specialized industry reporting.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    detailedDescription: [
      "Every business possesses unique financial challenges that don't fit into a standard box. Our Additional Value-Added Services are bespoke solutions designed explicitly for the complex needs of modern, rapidly evolving organizations.",
      "Whether you are migrating from an outdated legacy accounting system to a modern cloud-based ERP, requiring highly specific industry compliance reporting (such as specialized healthcare or real estate accounting), or needing rigorous pre-acquisition due diligence, our elite project teams stand ready."
    ],
    features: [
      "Accounting Software Migrations",
      "Merger & Acquisition Due Diligence",
      "Industry-Specific Compliance Reporting",
      "Emergency Financial Cleanups"
    ]
  }
];
