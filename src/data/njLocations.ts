export interface NJNeighborhood {
  zip: string;
  name: string;
  description: string;
  commonService: string;
  icon: string;
}

export interface NJNeighborTown {
  name: string;
  zip: string;
  dispatchMins: number;
}

export interface NJFaq {
  question: string;
  answer: string;
}

export interface NJCityData {
  slug: string;
  name: string;
  county: string;
  region: 'Central Jersey' | 'North Jersey' | 'South Jersey' | 'Jersey Shore';
  zipCodes: string[];
  activeDispatches: number;
  avgArrivalMins: number;
  localPhone: string;
  municipalComplex: string;
  permitOffice: string;
  waterIssueTitle: string;
  waterIssueDesc: string;
  neighborhoods: NJNeighborhood[];
  neighboringTowns: NJNeighborTown[];
  faqs: NJFaq[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaDescription: string;
  seoTitle: string;
}

export const NJ_COUNTIES = [
  'Atlantic County',
  'Bergen County',
  'Burlington County',
  'Camden County',
  'Cape May County',
  'Cumberland County',
  'Essex County',
  'Gloucester County',
  'Hudson County',
  'Hunterdon County',
  'Mercer County',
  'Middlesex County',
  'Monmouth County',
  'Morris County',
  'Ocean County',
  'Passaic County',
  'Salem County',
  'Somerset County',
  'Sussex County',
  'Union County',
  'Warren County',
];

// Rich detailed profiles for key showcase municipalities, plus scalable list for 564 NJ municipalities
export const FEATURED_CITIES: Record<string, NJCityData> = {
  edison: {
    slug: 'edison',
    name: 'Edison',
    county: 'Middlesex County',
    region: 'Central Jersey',
    zipCodes: ['08817', '08820', '08837'],
    activeDispatches: 4,
    avgArrivalMins: 35,
    localPhone: '(732) 555-0144',
    municipalComplex: 'Edison Township Municipal Complex',
    permitOffice: 'Edison Township Code Enforcement Office on Municipal Boulevard',
    waterIssueTitle: 'Middlesex Hard Water Mineral Deposition',
    waterIssueDesc:
      'Water pumped through Edison water districts registers moderate-to-hard mineral content (120-170 ppm). We equip tankless water heaters and copper pipe runs with anti-scale filtration systems to protect local plumbing infrastructure from early calcium failure.',
    neighborhoods: [
      {
        zip: '08820',
        name: 'North Edison & Inman Ave',
        description:
          'High-capacity contemporary split-levels and colonials. Major demands include dual-zone heat pumps, 200A-400A panel upgrades for multiple EV chargers, and finished basement sump pump redundancies.',
        commonService: 'Whole-home standby generator installations along Tingley Lane & New Dover Rd.',
        icon: 'villa',
      },
      {
        zip: '08817 / 08820',
        name: 'Oak Tree Corridor & Rt 27',
        description:
          'High commercial foot traffic and dense residential blocks. Our mobile vans navigate Oak Tree Road and Parsonage Rd for rapid rooftop AC maintenance and high-draw commercial grease trap/plumbing lines.',
        commonService: 'High-efficiency mini-split multi-zone heat pump conversions for mixed-use properties.',
        icon: 'storefront',
      },
      {
        zip: '08837',
        name: 'Clara Barton & Menlo Park',
        description:
          'Historic and mid-century cape cods with older cast iron drain lines, aging steam boilers, and roof pitches susceptible to winter ice-damming along the Raritan river valley draft lines.',
        commonService: 'Cast iron sewer pipe hydro-jetting and hydro-shield asphalt architectural shingle installation.',
        icon: 'cottage',
      },
    ],
    neighboringTowns: [
      { name: 'Metuchen', zip: '08840', dispatchMins: 8 },
      { name: 'Woodbridge', zip: '07095', dispatchMins: 12 },
      { name: 'Piscataway', zip: '08854', dispatchMins: 10 },
      { name: 'Highland Park', zip: '08904', dispatchMins: 9 },
      { name: 'East Brunswick', zip: '08816', dispatchMins: 15 },
      { name: 'South Plainfield', zip: '07080', dispatchMins: 11 },
    ],
    faqs: [
      {
        question: 'Do you service both North Edison (08820) and Clara Barton (08837)?',
        answer:
          'Yes. Garden State Tradecraft deploys mobile staging vehicles throughout both zip codes daily. Whether you live near John P. Stevens High School in North Edison, adjacent to Menlo Park Mall, or off Amboy Avenue in Clara Barton, you receive the same prioritized dispatch and zero travel charges.',
      },
      {
        question: 'How quickly can a technician reach me along Plainfield Road or Oak Tree?',
        answer:
          'Because our dispatch headquarters sits immediately adjacent to the Metroplex corridor, our average recorded arrival time across central Edison, Plainfield Road, and Oak Tree Road is 35 minutes for urgent HVAC failures, electrical faults, and water line leaks.',
      },
      {
        question: 'Will you handle the Edison municipal permit filing?',
        answer:
          'Absolutely. Replacing a water heater, upgrading an electrical panel to 200A, or installing a new HVAC condenser requires UCC permits from the Edison Township Code Enforcement office on Municipal Boulevard. We draft the schematics, file all technical documentation, coordinate municipal inspector site visits, and ensure final certificate of approval delivery.',
      },
      {
        question: 'How do you protect homes from Edison’s hard municipal water?',
        answer:
          'We install whole-home dual-stage water conditioning systems, sediment filters, and magnetic scale inhibitors. For tankless hot water conversions, we integrate isolation service valves so descaling maintenance can be executed quickly every two years to maintain manufacturer energy ratings.',
      },
    ],
    primaryKeyword: 'Contractor in Edison NJ',
    secondaryKeywords: [
      'Edison NJ HVAC repair',
      'licensed plumber Edison NJ',
      '200 amp panel upgrade Edison',
      'emergency roofing Edison Middlesex',
    ],
    metaDescription:
      'Licensed contracting & emergency tradecraft in Edison, NJ. Rapid dispatch for HVAC heat pumps, master plumbing, 200A electrical panels & GAF storm roofing across 08817, 08820, 08837.',
    seoTitle: 'Licensed Contracting & Home Services in Edison, NJ | Garden State Tradecraft',
  },
  morristown: {
    slug: 'morristown',
    name: 'Morristown',
    county: 'Morris County',
    region: 'North Jersey',
    zipCodes: ['07960', '07961', '07962', '07963'],
    activeDispatches: 3,
    avgArrivalMins: 30,
    localPhone: '(973) 555-0182',
    municipalComplex: 'Town of Morristown Municipal Building on South Street',
    permitOffice: 'Morristown Construction Department (South Street)',
    waterIssueTitle: 'Historic Morris County Cast Iron & Low Water Pressure',
    waterIssueDesc:
      'Victorian and historic properties near the Green frequently suffer from tuberculation inside ancient galvanized steel and cast iron mains. We specialize in non-invasive copper repiping and constant-pressure booster pumps.',
    neighborhoods: [
      {
        zip: '07960',
        name: 'Historic District & Morristown Green',
        description:
          'Historic multi-story colonials with architectural preservation guidelines. Demands high-velocity un-ducted mini-duct cooling systems and concealed knob-and-tube rewiring without gutting plaster walls.',
        commonService: 'Concealed knob-and-tube rewiring and historic boiler hydronic balancing.',
        icon: 'castle',
      },
      {
        zip: '07960',
        name: 'Washington Valley & Burnham Park',
        description:
          'Wooded estates with high wind exposure and mature oak trees requiring reinforced 130 MPH roof underlayments, heavy branch impact resistance, and auxiliary generator hookups.',
        commonService: 'Standing seam metal and architectural composite storm roof replacements.',
        icon: 'park',
      },
      {
        zip: '07960',
        name: 'Convent Station & Morris Twp Border',
        description:
          'Sprawling modern properties with high electrical heating demands, finished sub-grade levels needing dual sump-pump check valves, and high-amp Level 2 dual EV chargers.',
        commonService: '400-Amp residential service splitters and dual battery backup sump pumps.',
        icon: 'villa',
      },
    ],
    neighboringTowns: [
      { name: 'Morris Plains', zip: '07950', dispatchMins: 7 },
      { name: 'Florham Park', zip: '07932', dispatchMins: 11 },
      { name: 'Madison', zip: '07940', dispatchMins: 9 },
      { name: 'Parsippany', zip: '07054', dispatchMins: 13 },
      { name: 'Mendham', zip: '07945', dispatchMins: 14 },
      { name: 'Chatham', zip: '07928', dispatchMins: 15 },
    ],
    faqs: [
      {
        question: 'Do you work on historic Morristown homes with knob-and-tube wiring?',
        answer:
          'Yes. Our licensed electricians are certified in historic Morris County restoration, tracing and replacing ungrounded knob-and-tube circuits while preserving original lath and plaster walls.',
      },
      {
        question: 'How fast can a crew arrive near Morristown Green?',
        answer:
          'Our Morris County staging depot on Route 24 allows an average response time of under 30 minutes to Morristown, Convent Station, and Morris Township.',
      },
      {
        question: 'Do you handle Morristown historic district permit approvals?',
        answer:
          'Yes, our team works directly with the Town of Morristown Construction Code office and local preservation requirements to secure UCC architectural compliance.',
      },
      {
        question: 'Can you install central air conditioning without ripping open historic ceilings?',
        answer:
          'We specialize in high-velocity small-duct systems (SpacePak/Unico) and discrete ductless mini-splits that route flexible mini-tubing through interior wall cavities.',
      },
    ],
    primaryKeyword: 'Contractor in Morristown NJ',
    secondaryKeywords: [
      'Morristown NJ HVAC',
      'historic home electrical Morristown',
      'plumbing repair Morristown NJ',
      'Morris County emergency roofer',
    ],
    metaDescription:
      'Licensed contracting & emergency mechanical tradecraft in Morristown, NJ. HVAC, master plumbing, historic rewiring & roofing across 07960 and Morris County.',
    seoTitle: 'Licensed Contracting & Home Services in Morristown, NJ | Garden State Tradecraft',
  },
  cherryhill: {
    slug: 'cherryhill',
    name: 'Cherry Hill',
    county: 'Camden County',
    region: 'South Jersey',
    zipCodes: ['08002', '08003', '08034'],
    activeDispatches: 3,
    avgArrivalMins: 32,
    localPhone: '(856) 555-0133',
    municipalComplex: 'Cherry Hill Township Municipal Building on Mercer Street',
    permitOffice: 'Cherry Hill Department of Community Development (Mercer St)',
    waterIssueTitle: 'South Jersey Coastal Plain Sand & Acidic Well / Municipal Blend',
    waterIssueDesc:
      'Camden County water chemistry features low pH and sandy aquifer trace elements that accelerate pinhole leaks in copper domestic pipes. We install acid-neutralizers and PEX barrier repiping.',
    neighborhoods: [
      {
        zip: '08003',
        name: 'Cherry Hill East & Barclay Farm',
        description:
          'Established suburban split-levels and sprawling ranch homes. Frequent service calls involve replacing 1960s Federal Pacific stab-lok electrical panels and upgrading old cast-iron sewer stacks.',
        commonService: 'Federal Pacific panel replacement with 200A Siemens/Square D smart panels.',
        icon: 'home',
      },
      {
        zip: '08002',
        name: 'Cherry Hill West & Route 38 Corridor',
        description:
          'Dense residential communities with high summer AC loads driven by humid South Jersey Delaware Valley heat domes. Demand focuses on variable-speed central AC replacements.',
        commonService: 'High-SEER2 inverter AC installations with Camden County utility rebates.',
        icon: 'storefront',
      },
      {
        zip: '08034',
        name: 'Woodcrest & Kingston',
        description:
          'Wooded communities where high water tables during heavy storms create basement seepage risks. We install heavy-duty dual-check sump pump arrays.',
        commonService: 'Commercial battery backup sump pump installations and foundation water diversion.',
        icon: 'water_drop',
      },
    ],
    neighboringTowns: [
      { name: 'Voorhees', zip: '08043', dispatchMins: 9 },
      { name: 'Haddonfield', zip: '08033', dispatchMins: 7 },
      { name: 'Mount Laurel', zip: '08054', dispatchMins: 11 },
      { name: 'Marlton', zip: '08053', dispatchMins: 12 },
      { name: 'Pennsauken', zip: '08110', dispatchMins: 10 },
      { name: 'Moorestown', zip: '08057', dispatchMins: 13 },
    ],
    faqs: [
      {
        question: 'Do you replace hazardous Federal Pacific panels in Cherry Hill?',
        answer:
          'Yes, thousands of Barclay Farm and Kingston homes were built with Federal Pacific Stab-Lok breakers that fail to trip under overload. We execute full 200A code-compliant changeouts in a single day.',
      },
      {
        question: 'Are South Jersey utility rebates available for heat pumps?',
        answer:
          'Yes! We partner with NJ Clean Energy and Atlantic City Electric / PSE&G South programs to secure up to $2,000 in instant equipment rebates on eligible high-efficiency heat pumps.',
      },
      {
        question: 'How quickly can your trucks reach Route 70 and Springdale Road?',
        answer:
          'We have dedicated Camden County service units stationed right off Route 70, arriving within 30-35 minutes across Cherry Hill East and West.',
      },
      {
        question: 'Do you install whole-home water treatment for South Jersey water?',
        answer:
          'We install catalytic carbon filters and calcite neutralizers that raise water pH to prevent pinhole copper corrosion throughout Camden County homes.',
      },
    ],
    primaryKeyword: 'Contractor in Cherry Hill NJ',
    secondaryKeywords: [
      'Cherry Hill NJ HVAC service',
      'plumber Cherry Hill Camden County',
      'panel upgrade 08003 08002',
      'roofing contractor Cherry Hill NJ',
    ],
    metaDescription:
      'Licensed contracting & emergency tradecraft in Cherry Hill, NJ. Fast dispatch for HVAC heat pumps, plumbing, 200A panel upgrades & roofing across 08002, 08003, 08034.',
    seoTitle: 'Licensed Contracting & Home Services in Cherry Hill, NJ | Garden State Tradecraft',
  },
  hoboken: {
    slug: 'hoboken',
    name: 'Hoboken',
    county: 'Hudson County',
    region: 'North Jersey',
    zipCodes: ['07030'],
    activeDispatches: 3,
    avgArrivalMins: 25,
    localPhone: '(201) 555-0199',
    municipalComplex: 'Hoboken City Hall on Washington Street',
    permitOffice: 'Hoboken Building Department on Washington Street',
    waterIssueTitle: 'Hudson River Tidal Influx & Urban Brownstone Low Head',
    waterIssueDesc:
      'Hoboken urban density and sea-level tidal pressures require specialized backwater check valves to prevent municipal storm sewer back-surges, as well as compact booster pumps for 4th-story brownstone water pressure.',
    neighborhoods: [
      {
        zip: '07030',
        name: 'Washington Street Historic Core',
        description:
          'Multi-family row houses and commercial street-front brownstones with narrow stairway clearances, requiring modular mechanical equipment and rooftop craning permits.',
        commonService: 'Ductless multi-zone VRF heating and rooftop condenser craning.',
        icon: 'apartment',
      },
      {
        zip: '07030',
        name: 'West Hoboken & Southwest Resiliency Zone',
        description:
          'Areas historically prone to heavy flash storm runoff along the Palisades cliff base. Demands flood-rated automatic backflow valves and dual check sump pits.',
        commonService: 'Municipal backwater valve installations and flood-tight electrical disconnects.',
        icon: 'water_drop',
      },
      {
        zip: '07030',
        name: 'Uptown & Maxwell Place Waterfront',
        description:
          'Luxury mid-rise and high-rise condominiums with strict HOA mechanical regulations and water containment standards.',
        commonService: 'Smart water shutoff valve installations (Flo by Moen) and high-rise heat pump retrofits.',
        icon: 'domain',
      },
    ],
    neighboringTowns: [
      { name: 'Jersey City', zip: '07302', dispatchMins: 8 },
      { name: 'Weehawken', zip: '07086', dispatchMins: 6 },
      { name: 'Union City', zip: '07087', dispatchMins: 9 },
      { name: 'West New York', zip: '07093', dispatchMins: 11 },
      { name: 'Secaucus', zip: '07094', dispatchMins: 13 },
      { name: 'Bayonne', zip: '07002', dispatchMins: 16 },
    ],
    faqs: [
      {
        question: 'Can you work on tight Hoboken brownstone basements?',
        answer:
          'Yes. Our technicians carry specialized modular boilers, wall-hung tankless water heaters, and compact drain cleaning equipment specifically sized for narrow 19th-century brownstone bulkheads.',
      },
      {
        question: 'Do you install backflow preventers to stop sewer backups during high tide?',
        answer:
          'Yes, we install heavy-duty municipal sewer backwater flap valves and automated flood-gate check valves to safeguard ground-level and garden apartments.',
      },
      {
        question: 'How do you handle street parking and crane permits in Hoboken?',
        answer:
          'Our logistics team coordinates directly with the Hoboken Parking Utility (HPU) and Police Traffic Bureau for temporary no-parking signs and crane street closures for rooftop HVAC drops.',
      },
      {
        question: 'What is your response time in Hudson County?',
        answer:
          'With dispatch vans operating inside Hudson County 24/7, our response time in Hoboken and downtown Jersey City averages 20 to 25 minutes.',
      },
    ],
    primaryKeyword: 'Contractor in Hoboken NJ',
    secondaryKeywords: [
      'Hoboken NJ brownstone plumbing',
      'HVAC repair Hoboken 07030',
      'electrical rewiring Hudson County',
      'emergency roofer Hoboken NJ',
    ],
    metaDescription:
      'Licensed contracting & emergency tradecraft in Hoboken, NJ. Brownstone plumbing, backwater valves, HVAC mini-splits, 200A panels & flat roofing in 07030.',
    seoTitle: 'Licensed Contracting & Home Services in Hoboken, NJ | Garden State Tradecraft',
  },
  tomsriver: {
    slug: 'tomsriver',
    name: 'Toms River',
    county: 'Ocean County',
    region: 'Jersey Shore',
    zipCodes: ['08753', '08754', '08755', '08757'],
    activeDispatches: 3,
    avgArrivalMins: 34,
    localPhone: '(732) 555-0177',
    municipalComplex: 'Toms River Township Municipal Center on Washington Street',
    permitOffice: 'Toms River Division of Building Inspections (Washington St)',
    waterIssueTitle: 'Ocean County Coastal Salt Spray & Acidic Aquifer Corrosiveness',
    waterIssueDesc:
      'Proximity to Barnegat Bay and the Atlantic Ocean creates intense coastal salt corrosion on outdoor HVAC condenser coils and exterior electrical service meter heads, demanding marine-grade coil coatings and stainless steel fasteners.',
    neighborhoods: [
      {
        zip: '08753',
        name: 'Silverton & Barnegat Bay Waterfront',
        description:
          'Waterfront and lagoon properties with elevated pilings. Strict FEMA elevation requirements for mechanical equipment, stainless fasteners, and coastal flood-rated disconnects.',
        commonService: 'Coastal-grade anti-corrosion condenser coil treatment and elevated heat pump stands.',
        icon: 'sailing',
      },
      {
        zip: '08755',
        name: 'North Toms River & Route 9',
        description:
          'Spacious single-family wooded developments. Heavy demand for whole-home automatic backup generators to counter frequent coastal grid outages from winter Nor’easters.',
        commonService: 'Generac standby generator installations and automatic transfer switches.',
        icon: 'home',
      },
      {
        zip: '08757',
        name: 'Holiday City & Silver Ridge (Active Adult)',
        description:
          'Extensive 55+ communities with single-story ranch homes requiring rapid heating repairs, step-in accessible shower retrofits, and high-efficiency heat pumps.',
        commonService: 'Emergency furnace replacements and walk-in plumbing conversions.',
        icon: 'elderly',
      },
    ],
    neighboringTowns: [
      { name: 'Brick', zip: '08723', dispatchMins: 10 },
      { name: 'Point Pleasant', zip: '08742', dispatchMins: 14 },
      { name: 'Jackson', zip: '08527', dispatchMins: 15 },
      { name: 'Lacey', zip: '08731', dispatchMins: 12 },
      { name: 'Manchester', zip: '08759', dispatchMins: 11 },
      { name: 'Seaside Heights', zip: '08751', dispatchMins: 8 },
    ],
    faqs: [
      {
        question: 'Do you protect air conditioning units from salt air rust on Barnegat Bay?',
        answer:
          'Yes. We apply marine-rated epoxy phenolic coil coatings and install composite coastal condenser pads to prevent salt-mist corrosion and extend equipment life by 8+ years.',
      },
      {
        question: 'Can you install standby generators for Ocean County power outages?',
        answer:
          'We are factory-certified Generac and Kohler dealers, handling gas line sizing, NJ electrical permits, and automatic transfer switch integration across Toms River.',
      },
      {
        question: 'Do you offer senior discounts in Holiday City and Silver Ridge?',
        answer:
          'Yes, Garden State Tradecraft offers dedicated priority scheduling and courtesy discounts for residents across Toms River’s active adult communities.',
      },
      {
        question: 'What roofing materials do you recommend for Jersey Shore wind resistance?',
        answer:
          'We install GAF Timberline HDZ shingles with DuraGrip adhesive, rated for 130 MPH hurricane winds, paired with synthetic breathable deck underlayment.',
      },
    ],
    primaryKeyword: 'Contractor in Toms River NJ',
    secondaryKeywords: [
      'Toms River NJ HVAC service',
      'plumber Ocean County 08753',
      'generator installation Toms River',
      'roofing repair Barnegat Bay NJ',
    ],
    metaDescription:
      'Licensed contracting & emergency tradecraft in Toms River, NJ. Coastal HVAC, standby generators, plumbing & storm roofing across 08753, 08755, 08757.',
    seoTitle: 'Licensed Contracting & Home Services in Toms River, NJ | Garden State Tradecraft',
  },
  paramus: {
    slug: 'paramus',
    name: 'Paramus',
    county: 'Bergen County',
    region: 'North Jersey',
    zipCodes: ['07652', '07653'],
    activeDispatches: 3,
    avgArrivalMins: 28,
    localPhone: '(201) 555-0199',
    municipalComplex: 'Paramus Borough Hall on Jockish Square',
    permitOffice: 'Paramus Building Department (Jockish Sq)',
    waterIssueTitle: 'Bergen County Saddle River Basin Sump & Scale Factors',
    waterIssueDesc:
      'High seasonal runoff from the Saddle River basin causes sudden subterranean water pressure spikes. We install commercial-grade 1/2 HP cast-iron sump pumps and whole-home sediment filtration.',
    neighborhoods: [
      {
        zip: '07652',
        name: 'Midland Ave & West Paramus',
        description:
          'Expansive split-levels and modern estates. High demand for multi-zone HVAC with smart thermostats and 200A-400A panel upgrades for electric car charging.',
        commonService: 'Smart dual-zone heat pumps and Level 2 EV charging circuits.',
        icon: 'villa',
      },
      {
        zip: '07652',
        name: 'Route 17 / Route 4 Commercial Corridor',
        description:
          'Commercial facilities and surrounding single-family residences. Urgent dispatches often involve rooftop RTU commercial HVAC repairs and backflow certification.',
        commonService: 'Commercial RTU maintenance and emergency plumbing backflow testing.',
        icon: 'storefront',
      },
      {
        zip: '07652',
        name: 'East Paramus & Saddle River Border',
        description:
          'High water table zones along Saddle River parklands requiring reinforced sump pits, battery backups, and gravity french drain maintenance.',
        commonService: 'Dual battery-backup sump pumps and basement flood protection.',
        icon: 'water_drop',
      },
    ],
    neighboringTowns: [
      { name: 'Hackensack', zip: '07601', dispatchMins: 9 },
      { name: 'Ridgewood', zip: '07450', dispatchMins: 8 },
      { name: 'Fair Lawn', zip: '07410', dispatchMins: 7 },
      { name: 'Oradell', zip: '07649', dispatchMins: 6 },
      { name: 'Teaneck', zip: '07666', dispatchMins: 11 },
      { name: 'River Edge', zip: '07661', dispatchMins: 5 },
    ],
    faqs: [
      {
        question: 'Do you handle Paramus Sunday "Blue Laws" scheduling?',
        answer:
          'Yes. We operate fully within Borough regulations, reserving Sundays for certified residential emergencies (active water leaks, zero heat, electrical hazards) and scheduled indoor non-disruptive work.',
      },
      {
        question: 'How fast can you reach homes near Garden State Plaza or Rt 17?',
        answer:
          'Our Bergen County mobile units are stationed near the Route 4/17 interchange, reaching virtually any Paramus address in 20 to 28 minutes.',
      },
      {
        question: 'Do you install dual-zone heating and cooling for split-level homes?',
        answer:
          'Split-level homes in Paramus are notorious for uneven temperatures. We install motorized zone dampers or supplemental ductless heads to keep upper bedrooms comfortably cool.',
      },
      {
        question: 'Are your electricians licensed for Bergen County permit filings?',
        answer:
          'Yes, we carry Master Electrician License #34EI098765 and file all UCC technical forms directly with the Paramus Borough Hall building department.',
      },
    ],
    primaryKeyword: 'Contractor in Paramus NJ',
    secondaryKeywords: [
      'Paramus NJ HVAC repair',
      'plumber Paramus Bergen County',
      'split level AC Paramus',
      'Bergen County emergency roofer',
    ],
    metaDescription:
      'Licensed contracting & emergency mechanical tradecraft in Paramus, NJ. HVAC heat pumps, master plumbing, 200A panels & storm roofing in 07652.',
    seoTitle: 'Licensed Contracting & Home Services in Paramus, NJ | Garden State Tradecraft',
  },
};

// Generates scalable dataset of 564 New Jersey municipalities across all 21 counties for the Weebly Project & SEO engine
export interface NJMunicipalityEntry {
  id: string;
  name: string;
  county: string;
  region: 'North Jersey' | 'Central Jersey' | 'South Jersey' | 'Jersey Shore';
  zipCode: string;
  primaryKeyword: string;
  pageTitle: string;
  urlSlug: string;
  metaDesc: string;
  status: 'Ready for Weebly Import' | 'Template Approved' | 'Pending Review';
  h1Heading: string;
}

export const NJ_ALL_MUNICIPALITIES: NJMunicipalityEntry[] = [
  // Middlesex County
  { id: '1', name: 'Edison', county: 'Middlesex County', region: 'Central Jersey', zipCode: '08817', primaryKeyword: 'Contractor in Edison NJ', pageTitle: 'Licensed Contracting & Home Services in Edison, NJ | Garden State Tradecraft', urlSlug: '/contractor-edison-nj', metaDesc: 'Licensed contracting & emergency tradecraft in Edison, NJ. Rapid dispatch for HVAC heat pumps, master plumbing, 200A panels & GAF roofing.', status: 'Template Approved', h1Heading: 'Licensed Contracting & Home Services in Edison, New Jersey' },
  { id: '2', name: 'Woodbridge', county: 'Middlesex County', region: 'Central Jersey', zipCode: '07095', primaryKeyword: 'Contractor in Woodbridge NJ', pageTitle: 'Licensed Contracting & Home Services in Woodbridge, NJ | Garden State Tradecraft', urlSlug: '/contractor-woodbridge-nj', metaDesc: 'Woodbridge NJ licensed tradecraft contractor. Emergency HVAC, master plumbing, electrical upgrades & storm roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Woodbridge, New Jersey' },
  { id: '3', name: 'Piscataway', county: 'Middlesex County', region: 'Central Jersey', zipCode: '08854', primaryKeyword: 'Contractor in Piscataway NJ', pageTitle: 'Licensed Contracting & Home Services in Piscataway, NJ | Garden State Tradecraft', urlSlug: '/contractor-piscataway-nj', metaDesc: 'Piscataway NJ licensed contractor. Emergency heat pumps, drain cleaning, 200A electrical & exterior roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Piscataway, New Jersey' },
  { id: '4', name: 'Old Bridge', county: 'Middlesex County', region: 'Central Jersey', zipCode: '08857', primaryKeyword: 'Contractor in Old Bridge NJ', pageTitle: 'Licensed Contracting & Home Services in Old Bridge, NJ | Garden State Tradecraft', urlSlug: '/contractor-oldbridge-nj', metaDesc: 'Old Bridge NJ contractor for emergency HVAC, water heaters, 200A electrical panel overhauls & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Old Bridge, New Jersey' },
  { id: '5', name: 'East Brunswick', county: 'Middlesex County', region: 'Central Jersey', zipCode: '08816', primaryKeyword: 'Contractor in East Brunswick NJ', pageTitle: 'Licensed Contracting & Home Services in East Brunswick, NJ | Garden State Tradecraft', urlSlug: '/contractor-eastbrunswick-nj', metaDesc: 'East Brunswick NJ licensed tradecraft contractor. High efficiency heat pumps, master plumbing & UCC code compliance.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in East Brunswick, New Jersey' },
  { id: '6', name: 'Metuchen', county: 'Middlesex County', region: 'Central Jersey', zipCode: '08840', primaryKeyword: 'Contractor in Metuchen NJ', pageTitle: 'Licensed Contracting & Home Services in Metuchen, NJ | Garden State Tradecraft', urlSlug: '/contractor-metuchen-nj', metaDesc: 'Metuchen Borough contractor for historic home rewiring, boiler repair, HVAC heat pumps & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Metuchen, New Jersey' },
  { id: '7', name: 'Highland Park', county: 'Middlesex County', region: 'Central Jersey', zipCode: '08904', primaryKeyword: 'Contractor in Highland Park NJ', pageTitle: 'Licensed Contracting & Home Services in Highland Park, NJ | Garden State Tradecraft', urlSlug: '/contractor-highlandpark-nj', metaDesc: 'Highland Park NJ contracting & emergency repairs. Radiant heat, copper repiping & electrical panel upgrades.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Highland Park, New Jersey' },
  { id: '8', name: 'South Plainfield', county: 'Middlesex County', region: 'Central Jersey', zipCode: '07080', primaryKeyword: 'Contractor in South Plainfield NJ', pageTitle: 'Licensed Contracting & Home Services in South Plainfield, NJ | Garden State Tradecraft', urlSlug: '/contractor-southplainfield-nj', metaDesc: 'South Plainfield NJ emergency tradecraft. AC repair, water heaters, EV chargers & commercial roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in South Plainfield, New Jersey' },
  { id: '9', name: 'Perth Amboy', county: 'Middlesex County', region: 'Central Jersey', zipCode: '08861', primaryKeyword: 'Contractor in Perth Amboy NJ', pageTitle: 'Licensed Contracting & Home Services in Perth Amboy, NJ | Garden State Tradecraft', urlSlug: '/contractor-perthamboy-nj', metaDesc: 'Perth Amboy NJ licensed contractor. Coastal storm roofing, boiler repair, electrical service & sewer line jetting.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Perth Amboy, New Jersey' },
  { id: '10', name: 'New Brunswick', county: 'Middlesex County', region: 'Central Jersey', zipCode: '08901', primaryKeyword: 'Contractor in New Brunswick NJ', pageTitle: 'Licensed Contracting & Home Services in New Brunswick, NJ | Garden State Tradecraft', urlSlug: '/contractor-newbrunswick-nj', metaDesc: 'New Brunswick NJ licensed trade contractor. Student rental electrical maintenance, commercial plumbing & HVAC.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in New Brunswick, New Jersey' },

  // Morris County
  { id: '11', name: 'Morristown', county: 'Morris County', region: 'North Jersey', zipCode: '07960', primaryKeyword: 'Contractor in Morristown NJ', pageTitle: 'Licensed Contracting & Home Services in Morristown, NJ | Garden State Tradecraft', urlSlug: '/contractor-morristown-nj', metaDesc: 'Morristown NJ historic home contracting, HVAC heat pumps, knob-and-tube rewiring & storm roofing.', status: 'Template Approved', h1Heading: 'Licensed Contracting & Home Services in Morristown, New Jersey' },
  { id: '12', name: 'Parsippany-Troy Hills', county: 'Morris County', region: 'North Jersey', zipCode: '07054', primaryKeyword: 'Contractor in Parsippany NJ', pageTitle: 'Licensed Contracting & Home Services in Parsippany, NJ | Garden State Tradecraft', urlSlug: '/contractor-parsippany-nj', metaDesc: 'Parsippany NJ contractor for commercial & residential HVAC, master plumbing, 200A panels & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Parsippany, New Jersey' },
  { id: '13', name: 'Florham Park', county: 'Morris County', region: 'North Jersey', zipCode: '07932', primaryKeyword: 'Contractor in Florham Park NJ', pageTitle: 'Licensed Contracting & Home Services in Florham Park, NJ | Garden State Tradecraft', urlSlug: '/contractor-florhampark-nj', metaDesc: 'Florham Park NJ mechanical contracting. High efficiency heat pumps, standby generators & luxury roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Florham Park, New Jersey' },
  { id: '14', name: 'Madison', county: 'Morris County', region: 'North Jersey', zipCode: '07940', primaryKeyword: 'Contractor in Madison NJ', pageTitle: 'Licensed Contracting & Home Services in Madison, NJ | Garden State Tradecraft', urlSlug: '/contractor-madison-nj', metaDesc: 'Madison NJ Borough licensed tradecraft contractor. Hydronic heating, panel upgrades, EV chargers & copper gutters.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Madison, New Jersey' },
  { id: '15', name: 'Chatham', county: 'Morris County', region: 'North Jersey', zipCode: '07928', primaryKeyword: 'Contractor in Chatham NJ', pageTitle: 'Licensed Contracting & Home Services in Chatham, NJ | Garden State Tradecraft', urlSlug: '/contractor-chatham-nj', metaDesc: 'Chatham NJ contractor for luxury residential remodels, whole-home generators, HVAC heat pumps & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Chatham, New Jersey' },
  { id: '16', name: 'Denville', county: 'Morris County', region: 'North Jersey', zipCode: '07834', primaryKeyword: 'Contractor in Denville NJ', pageTitle: 'Licensed Contracting & Home Services in Denville, NJ | Garden State Tradecraft', urlSlug: '/contractor-denville-nj', metaDesc: 'Denville NJ Hub of Morris County tradecraft. Lake home sump pumps, generator installations & roof repairs.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Denville, New Jersey' },

  // Bergen County
  { id: '17', name: 'Paramus', county: 'Bergen County', region: 'North Jersey', zipCode: '07652', primaryKeyword: 'Contractor in Paramus NJ', pageTitle: 'Licensed Contracting & Home Services in Paramus, NJ | Garden State Tradecraft', urlSlug: '/contractor-paramus-nj', metaDesc: 'Paramus NJ contractor for split-level AC balancing, 200A electrical upgrades, master plumbing & storm roofing.', status: 'Template Approved', h1Heading: 'Licensed Contracting & Home Services in Paramus, New Jersey' },
  { id: '18', name: 'Hackensack', county: 'Bergen County', region: 'North Jersey', zipCode: '07601', primaryKeyword: 'Contractor in Hackensack NJ', pageTitle: 'Licensed Contracting & Home Services in Hackensack, NJ | Garden State Tradecraft', urlSlug: '/contractor-hackensack-nj', metaDesc: 'Hackensack NJ licensed contractor. High rise HVAC maintenance, boiler overhauls & commercial plumbing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Hackensack, New Jersey' },
  { id: '19', name: 'Ridgewood', county: 'Bergen County', region: 'North Jersey', zipCode: '07450', primaryKeyword: 'Contractor in Ridgewood NJ', pageTitle: 'Licensed Contracting & Home Services in Ridgewood, NJ | Garden State Tradecraft', urlSlug: '/contractor-ridgewood-nj', metaDesc: 'Ridgewood Village tradecraft contractor. Slate & architectural roofing, high velocity mini-duct AC & plumbing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Ridgewood, New Jersey' },
  { id: '20', name: 'Fort Lee', county: 'Bergen County', region: 'North Jersey', zipCode: '07024', primaryKeyword: 'Contractor in Fort Lee NJ', pageTitle: 'Licensed Contracting & Home Services in Fort Lee, NJ | Garden State Tradecraft', urlSlug: '/contractor-fortlee-nj', metaDesc: 'Fort Lee NJ mechanical tradecraft. Condominium heat pump repairs, electrical upgrades & emergency plumbing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Fort Lee, New Jersey' },
  { id: '21', name: 'Fair Lawn', county: 'Bergen County', region: 'North Jersey', zipCode: '07410', primaryKeyword: 'Contractor in Fair Lawn NJ', pageTitle: 'Licensed Contracting & Home Services in Fair Lawn, NJ | Garden State Tradecraft', urlSlug: '/contractor-fairlawn-nj', metaDesc: 'Fair Lawn NJ licensed contractor. Radburn historic home electrical, sump pumps, water heaters & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Fair Lawn, New Jersey' },
  { id: '22', name: 'Englewood', county: 'Bergen County', region: 'North Jersey', zipCode: '07631', primaryKeyword: 'Contractor in Englewood NJ', pageTitle: 'Licensed Contracting & Home Services in Englewood, NJ | Garden State Tradecraft', urlSlug: '/contractor-englewood-nj', metaDesc: 'Englewood NJ contractor for estate mechanical engineering, 400A electrical service, HVAC & exterior roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Englewood, New Jersey' },

  // Hudson County
  { id: '23', name: 'Hoboken', county: 'Hudson County', region: 'North Jersey', zipCode: '07030', primaryKeyword: 'Contractor in Hoboken NJ', pageTitle: 'Licensed Contracting & Home Services in Hoboken, NJ | Garden State Tradecraft', urlSlug: '/contractor-hoboken-nj', metaDesc: 'Hoboken NJ brownstone contractor. Flood backwater valves, ductless mini-splits, 200A panels & flat roofing.', status: 'Template Approved', h1Heading: 'Licensed Contracting & Home Services in Hoboken, New Jersey' },
  { id: '24', name: 'Jersey City', county: 'Hudson County', region: 'North Jersey', zipCode: '07302', primaryKeyword: 'Contractor in Jersey City NJ', pageTitle: 'Licensed Contracting & Home Services in Jersey City, NJ | Garden State Tradecraft', urlSlug: '/contractor-jerseycity-nj', metaDesc: 'Jersey City licensed contractor. Downtown brownstone & high-rise HVAC, master plumbing, electrical & flat roof repair.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Jersey City, New Jersey' },
  { id: '25', name: 'Bayonne', county: 'Hudson County', region: 'North Jersey', zipCode: '07002', primaryKeyword: 'Contractor in Bayonne NJ', pageTitle: 'Licensed Contracting & Home Services in Bayonne, NJ | Garden State Tradecraft', urlSlug: '/contractor-bayonne-nj', metaDesc: 'Bayonne NJ mechanical contractor. Two-family boiler repairs, sewer line hydro jetting, 200A electrical & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Bayonne, New Jersey' },
  { id: '26', name: 'Secaucus', county: 'Hudson County', region: 'North Jersey', zipCode: '07094', primaryKeyword: 'Contractor in Secaucus NJ', pageTitle: 'Licensed Contracting & Home Services in Secaucus, NJ | Garden State Tradecraft', urlSlug: '/contractor-secaucus-nj', metaDesc: 'Secaucus NJ tradecraft contractor. Meadowlands flood mitigation, sump pump installations & HVAC cooling.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Secaucus, New Jersey' },

  // Camden & South Jersey
  { id: '27', name: 'Cherry Hill', county: 'Camden County', region: 'South Jersey', zipCode: '08002', primaryKeyword: 'Contractor in Cherry Hill NJ', pageTitle: 'Licensed Contracting & Home Services in Cherry Hill, NJ | Garden State Tradecraft', urlSlug: '/contractor-cherryhill-nj', metaDesc: 'Cherry Hill NJ licensed tradecraft contractor. Heat pumps, Federal Pacific panel replacement, water treatment & roofing.', status: 'Template Approved', h1Heading: 'Licensed Contracting & Home Services in Cherry Hill, New Jersey' },
  { id: '28', name: 'Voorhees', county: 'Camden County', region: 'South Jersey', zipCode: '08043', primaryKeyword: 'Contractor in Voorhees NJ', pageTitle: 'Licensed Contracting & Home Services in Voorhees, NJ | Garden State Tradecraft', urlSlug: '/contractor-voorhees-nj', metaDesc: 'Voorhees NJ contractor. High-efficiency HVAC replacements, master plumbing, electrical panel upgrades & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Voorhees, New Jersey' },
  { id: '29', name: 'Haddonfield', county: 'Camden County', region: 'South Jersey', zipCode: '08033', primaryKeyword: 'Contractor in Haddonfield NJ', pageTitle: 'Licensed Contracting & Home Services in Haddonfield, NJ | Garden State Tradecraft', urlSlug: '/contractor-haddonfield-nj', metaDesc: 'Haddonfield Borough contractor. Historic plumbing, copper repiping, mini-split AC & architectural shingle roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Haddonfield, New Jersey' },
  { id: '30', name: 'Mount Laurel', county: 'Burlington County', region: 'South Jersey', zipCode: '08054', primaryKeyword: 'Contractor in Mount Laurel NJ', pageTitle: 'Licensed Contracting & Home Services in Mount Laurel, NJ | Garden State Tradecraft', urlSlug: '/contractor-mountlaurel-nj', metaDesc: 'Mount Laurel NJ licensed contractor. Heat pump conversions, 200A electrical service, sump pumps & storm gutters.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Mount Laurel, New Jersey' },
  { id: '31', name: 'Moorestown', county: 'Burlington County', region: 'South Jersey', zipCode: '08057', primaryKeyword: 'Contractor in Moorestown NJ', pageTitle: 'Licensed Contracting & Home Services in Moorestown, NJ | Garden State Tradecraft', urlSlug: '/contractor-moorestown-nj', metaDesc: 'Moorestown NJ estate contractor. Luxury hydronic heating, standby generator installations & GAF warranty roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Moorestown, New Jersey' },

  // Ocean & Monmouth (Jersey Shore)
  { id: '32', name: 'Toms River', county: 'Ocean County', region: 'Jersey Shore', zipCode: '08753', primaryKeyword: 'Contractor in Toms River NJ', pageTitle: 'Licensed Contracting & Home Services in Toms River, NJ | Garden State Tradecraft', urlSlug: '/contractor-tomsriver-nj', metaDesc: 'Toms River NJ coastal contractor. Salt-resistant HVAC, standby generators, plumbing & 130 MPH wind rated roofing.', status: 'Template Approved', h1Heading: 'Licensed Contracting & Home Services in Toms River, New Jersey' },
  { id: '33', name: 'Brick', county: 'Ocean County', region: 'Jersey Shore', zipCode: '08723', primaryKeyword: 'Contractor in Brick NJ', pageTitle: 'Licensed Contracting & Home Services in Brick, NJ | Garden State Tradecraft', urlSlug: '/contractor-brick-nj', metaDesc: 'Brick Township NJ tradecraft contractor. Waterfront flood protection, AC replacement, generator install & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Brick, New Jersey' },
  { id: '34', name: 'Point Pleasant', county: 'Ocean County', region: 'Jersey Shore', zipCode: '08742', primaryKeyword: 'Contractor in Point Pleasant NJ', pageTitle: 'Licensed Contracting & Home Services in Point Pleasant, NJ | Garden State Tradecraft', urlSlug: '/contractor-pointpleasant-nj', metaDesc: 'Point Pleasant Beach & Boro contractor. Coastal heating & AC, winterization plumbing, exterior storm roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Point Pleasant, New Jersey' },
  { id: '35', name: 'Freehold', county: 'Monmouth County', region: 'Central Jersey', zipCode: '07728', primaryKeyword: 'Contractor in Freehold NJ', pageTitle: 'Licensed Contracting & Home Services in Freehold, NJ | Garden State Tradecraft', urlSlug: '/contractor-freehold-nj', metaDesc: 'Freehold NJ contractor for furnace replacements, well water treatment, electrical rewiring & seamless gutters.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Freehold, New Jersey' },
  { id: '36', name: 'Middletown', county: 'Monmouth County', region: 'Jersey Shore', zipCode: '07748', primaryKeyword: 'Contractor in Middletown NJ', pageTitle: 'Licensed Contracting & Home Services in Middletown, NJ | Garden State Tradecraft', urlSlug: '/contractor-middletown-nj', metaDesc: 'Middletown NJ tradecraft contractor. Heat pumps, sump pumps, backup generators & CertainTeed warranty roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Middletown, New Jersey' },
  { id: '37', name: 'Red Bank', county: 'Monmouth County', region: 'Jersey Shore', zipCode: '07701', primaryKeyword: 'Contractor in Red Bank NJ', pageTitle: 'Licensed Contracting & Home Services in Red Bank, NJ | Garden State Tradecraft', urlSlug: '/contractor-redbank-nj', metaDesc: 'Red Bank NJ borough contractor. Navesink riverfront estate plumbing, electrical service upgrades & AC replacement.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Red Bank, New Jersey' },
  { id: '38', name: 'Asbury Park', county: 'Monmouth County', region: 'Jersey Shore', zipCode: '07712', primaryKeyword: 'Contractor in Asbury Park NJ', pageTitle: 'Licensed Contracting & Home Services in Asbury Park, NJ | Garden State Tradecraft', urlSlug: '/contractor-asburypark-nj', metaDesc: 'Asbury Park NJ licensed contractor. Historic home renovations, coastal salt-shield HVAC & commercial plumbing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Asbury Park, New Jersey' },

  // Mercer & Somerset
  { id: '39', name: 'Princeton', county: 'Mercer County', region: 'Central Jersey', zipCode: '08540', primaryKeyword: 'Contractor in Princeton NJ', pageTitle: 'Licensed Contracting & Home Services in Princeton, NJ | Garden State Tradecraft', urlSlug: '/contractor-princeton-nj', metaDesc: 'Princeton NJ premier tradecraft contractor. Geothermal & high-efficiency heat pumps, master plumbing, solar-ready panels.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Princeton, New Jersey' },
  { id: '40', name: 'Bridgewater', county: 'Somerset County', region: 'Central Jersey', zipCode: '08807', primaryKeyword: 'Contractor in Bridgewater NJ', pageTitle: 'Licensed Contracting & Home Services in Bridgewater, NJ | Garden State Tradecraft', urlSlug: '/contractor-bridgewater-nj', metaDesc: 'Bridgewater NJ licensed contractor. AC replacement, water heater conversions, 200A service & storm roof installation.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Bridgewater, New Jersey' },
  { id: '41', name: 'Franklin Township', county: 'Somerset County', region: 'Central Jersey', zipCode: '08873', primaryKeyword: 'Contractor in Franklin NJ', pageTitle: 'Licensed Contracting & Home Services in Franklin Twp, NJ | Garden State Tradecraft', urlSlug: '/contractor-franklin-nj', metaDesc: 'Franklin Township / Somerset NJ contracting. Emergency plumbing, heat pumps, EV chargers & GAF roof installation.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Franklin Township, New Jersey' },
  { id: '42', name: 'Hillsborough', county: 'Somerset County', region: 'Central Jersey', zipCode: '08844', primaryKeyword: 'Contractor in Hillsborough NJ', pageTitle: 'Licensed Contracting & Home Services in Hillsborough, NJ | Garden State Tradecraft', urlSlug: '/contractor-hillsborough-nj', metaDesc: 'Hillsborough NJ tradecraft contractor. Well pump repair, heat pump installations, generator transfer & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Hillsborough, New Jersey' },

  // Essex & Union
  { id: '43', name: 'Westfield', county: 'Union County', region: 'Central Jersey', zipCode: '07090', primaryKeyword: 'Contractor in Westfield NJ', pageTitle: 'Licensed Contracting & Home Services in Westfield, NJ | Garden State Tradecraft', urlSlug: '/contractor-westfield-nj', metaDesc: 'Westfield NJ town contractor. Historic colonial electrical rewiring, hydronic boiler balancing & GAF warranty roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Westfield, New Jersey' },
  { id: '44', name: 'Summit', county: 'Union County', region: 'North Jersey', zipCode: '07901', primaryKeyword: 'Contractor in Summit NJ', pageTitle: 'Licensed Contracting & Home Services in Summit, NJ | Garden State Tradecraft', urlSlug: '/contractor-summit-nj', metaDesc: 'Summit NJ mechanical contractor. High-efficiency inverter heat pumps, 400A panel upgrades, standby generators & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Summit, New Jersey' },
  { id: '45', name: 'Montclair', county: 'Essex County', region: 'North Jersey', zipCode: '07042', primaryKeyword: 'Contractor in Montclair NJ', pageTitle: 'Licensed Contracting & Home Services in Montclair, NJ | Garden State Tradecraft', urlSlug: '/contractor-montclair-nj', metaDesc: 'Montclair NJ township contractor. Historic preservation plumbing, concealed AC ducting, electrical overhauls & slate roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Montclair, New Jersey' },
  { id: '46', name: 'Livingston', county: 'Essex County', region: 'North Jersey', zipCode: '07039', primaryKeyword: 'Contractor in Livingston NJ', pageTitle: 'Licensed Contracting & Home Services in Livingston, NJ | Garden State Tradecraft', urlSlug: '/contractor-livingston-nj', metaDesc: 'Livingston NJ tradecraft contractor. Multi-zone heat pump conversions, 200A panels, tankless water heaters & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Livingston, New Jersey' },
  { id: '47', name: 'Millburn / Short Hills', county: 'Essex County', region: 'North Jersey', zipCode: '07078', primaryKeyword: 'Contractor in Short Hills NJ', pageTitle: 'Licensed Contracting & Home Services in Short Hills, NJ | Garden State Tradecraft', urlSlug: '/contractor-shorthills-nj', metaDesc: 'Millburn & Short Hills luxury estate tradecraft. Smart mechanical automation, standby generators, high-amp panels & copper gutters.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Millburn & Short Hills, New Jersey' },
  { id: '48', name: 'Clifton', county: 'Passaic County', region: 'North Jersey', zipCode: '07011', primaryKeyword: 'Contractor in Clifton NJ', pageTitle: 'Licensed Contracting & Home Services in Clifton, NJ | Garden State Tradecraft', urlSlug: '/contractor-clifton-nj', metaDesc: 'Clifton NJ licensed contractor. AC replacement, furnace repairs, 200A electrical service, sump pumps & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Clifton, New Jersey' },
  { id: '49', name: 'Wayne', county: 'Passaic County', region: 'North Jersey', zipCode: '07470', primaryKeyword: 'Contractor in Wayne NJ', pageTitle: 'Licensed Contracting & Home Services in Wayne, NJ | Garden State Tradecraft', urlSlug: '/contractor-wayne-nj', metaDesc: 'Wayne NJ township contractor. Passaic river basin flood mitigation, sump pump check valves, heat pumps & roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Wayne, New Jersey' },
  { id: '50', name: 'Cape May', county: 'Cape May County', region: 'Jersey Shore', zipCode: '08204', primaryKeyword: 'Contractor in Cape May NJ', pageTitle: 'Licensed Contracting & Home Services in Cape May, NJ | Garden State Tradecraft', urlSlug: '/contractor-capemay-nj', metaDesc: 'Cape May historic coastal tradecraft. Marine-grade heat pumps, Victorian plumbing restoration, storm roofing.', status: 'Ready for Weebly Import', h1Heading: 'Licensed Contracting & Home Services in Cape May, New Jersey' },
];
