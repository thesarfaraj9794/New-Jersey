export interface WeeblyPhase {
  phaseNumber: number;
  name: string;
  budgetAllocation: string;
  status: 'Completed' | 'In Progress' | 'Ready for Review';
  summary: string;
  deliverables: string[];
}

export const WEEBLY_PROJECT_PLAN: WeeblyPhase[] = [
  {
    phaseNumber: 1,
    name: 'Planning & Local SEO Research',
    budgetAllocation: '$25 of $150',
    status: 'Completed',
    summary: 'Audited New Jersey HVAC, plumbing, electrical, and roofing search intent. Mapped primary keywords across 21 counties and 564 target municipalities.',
    deliverables: [
      'Comprehensive New Jersey local intent keyword map',
      'Unified URL slug architecture: /[service]-[city]-nj and /contractor-[city]-nj',
      'Meta title and description formula adhering to Google SERP pixel limits',
      'Service area hierarchy: Statewide -> 21 Counties -> 564 Municipalities',
    ],
  },
  {
    phaseNumber: 2,
    name: 'Main Website Architecture (Weebly Native)',
    budgetAllocation: '$40 of $150',
    status: 'Completed',
    summary: 'Built brand foundation for Garden State Tradecraft using Weebly native sections, multi-column grids, and lead forms.',
    deliverables: [
      'Homepage with high-conversion hero, trust metrics, 4 tradecraft pillars, and dispatch hotline',
      'Dedicated Service pages: HVAC, Plumbing, Electrical, Roofing & 24/7 Emergency',
      'About Us with verified NJ HIC, Master Plumber, and Electrical license credentials',
      'Contact Us with interactive multi-trade estimate request module',
      'Legal disclosures (Privacy Policy, Terms of Service, UCC licensing compliance)',
    ],
  },
  {
    phaseNumber: 3,
    name: 'City Page Master Template (Edison, NJ Blueprint)',
    budgetAllocation: '$35 of $150',
    status: 'Ready for Review',
    summary: 'Designed the approved high-fidelity city page template in Edison, NJ. Incorporates localized zip codes (08817, 08820, 08837), municipal complex jurisdiction, micro-climate water hardness, and neighboring dispatch grid.',
    deliverables: [
      'Approved Edison Township master blueprint',
      'Micro-climate & infrastructure problem solvers (Middlesex hard water, Clara Barton sewer mains)',
      'Edison Code Enforcement permit integration notice',
      'Neighboring communities dispatch grid (Metuchen, Woodbridge, Piscataway, Highland Park, East Brunswick, South Plainfield)',
      '1-Click priority dispatch form with instant notification',
    ],
  },
  {
    phaseNumber: 4,
    name: 'Location Page Production (500–700 NJ Municipalities)',
    budgetAllocation: '$30 of $150',
    status: 'In Progress',
    summary: 'Generated structured SEO database for all 564 New Jersey municipalities across all 21 counties, complete with county mapping, custom URL slugs, H1 headings, and meta descriptions.',
    deliverables: [
      'Interactive 564 NJ Municipalities searchable spreadsheet',
      'Exportable CSV database for batch Weebly duplication and CSV page import',
      'Anti-duplicate content rules with localized geographic variables',
      'Dynamic neighborhood and micro-climate profile generator',
    ],
  },
  {
    phaseNumber: 5,
    name: 'Quality Assurance & Weebly Compatibility',
    budgetAllocation: '$10 of $150',
    status: 'Completed',
    summary: 'Verified 100% Weebly native element compatibility: zero broken links, mobile viewport responsiveness, click-to-call direct dial, and WCAG AA contrast.',
    deliverables: [
      'Weebly native element validator (Header, Columns, Title, Text, Form, Button)',
      'Mobile bottom sticky conversion dock compliance (<15% viewport height)',
      'WCAG AAA text contrast across institutional navy and safety orange',
      'Lead form submission validation with real-time feedback',
    ],
  },
  {
    phaseNumber: 6,
    name: 'Final Handover & Client Delivery Report',
    budgetAllocation: '$10 of $150',
    status: 'Ready for Review',
    summary: 'Comprehensive handover package confirming strict adherence to the $150 fixed budget, Weebly native constraints, and lead generation functionality.',
    deliverables: [
      'Total Project Cost: $150.00 Fixed (Zero overages)',
      'Production Tracking Spreadsheet & CSV download',
      'Weebly deployment checklist and Google Search Console sitemap instructions',
      'License and insurance verification certificate archive',
    ],
  },
];

export const WEEBLY_NATIVE_ELEMENTS = [
  {
    element: 'Header / Top Bar',
    weeblyType: 'Custom Header Section + Weebly Nav Menu',
    purpose: 'Persistent emergency contact (800-555-NJ-PRO) & license proof #13VH09876500',
    nativeCompatibility: '100% Weebly Compatible',
  },
  {
    element: 'Hero 2-Column Split',
    weeblyType: 'Section Block -> 2 Columns (60% / 40%)',
    purpose: 'Hero text on left, Weebly Native Contact Form on right',
    nativeCompatibility: '100% Weebly Compatible',
  },
  {
    element: 'Priority Dispatch Form',
    weeblyType: 'Weebly Native Form Builder',
    purpose: 'Lead capture with Service dropdown, Zip Code, Phone, and Submit CTA',
    nativeCompatibility: '100% Weebly Compatible',
  },
  {
    element: 'Neighborhood Grid',
    weeblyType: '3-Column Section + Title + Text Blocks',
    purpose: 'Localized zip codes (08820, 08817, 08837) and local challenges',
    nativeCompatibility: '100% Weebly Compatible',
  },
  {
    element: 'Available Trade Services',
    weeblyType: '2x2 Column Block with Weebly Image + Text Elements',
    purpose: '4 core tradecraft services with direct call-to-action buttons',
    nativeCompatibility: '100% Weebly Compatible',
  },
  {
    element: 'Interactive FAQ Accordion',
    weeblyType: 'Weebly App Store Accordion or Styled Text Elements',
    purpose: 'Edison-specific municipal permit & water hardness answers',
    nativeCompatibility: '100% Weebly Compatible',
  },
  {
    element: 'Neighboring Communities Grid',
    weeblyType: '6-Column Grid of Link Blocks',
    purpose: 'Internal SEO link equity distribution to adjacent towns',
    nativeCompatibility: '100% Weebly Compatible',
  },
  {
    element: 'Emergency Anchor & Map',
    weeblyType: 'Full-Width Section + Weebly Map Element',
    purpose: 'Immediate emergency conversion with direct hotline',
    nativeCompatibility: '100% Weebly Compatible',
  },
];
