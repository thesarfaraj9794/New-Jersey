export interface TradeService {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  tagline: string;
  heroImage: string;
  description: string;
  njCodeFocus: string;
  avgResponse: string;
  licenseRequirement: string;
  features: string[];
  scopeHighlights: { title: string; desc: string; icon: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const TRADE_SERVICES: TradeService[] = [
  {
    id: 'hvac',
    slug: 'services-hvac',
    name: 'Emergency HVAC & Heat Pump Installations',
    shortName: 'HVAC Heating & AC',
    badge: 'HVAC Heating & AC',
    tagline: 'High-Efficiency Inverter Heat Pumps, Dual-Fuel Furnaces & 24/7 AC Recovery',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrYw_zTh6bYUltdtYokfzjH-zzppYFqnBmLFlDPyMfhJ-rDxsz0xFLmkQdKcQbZ4Ss01nfOg0Wbg2eGzBsaMXCbA4xvqPG_8TbT_tImcbhCf5PBCAt2-JErMq68sjQ-_VNbDdnmTcRmHjIo5mX6Ifxfatf-FY2fWlNr5hU2jP-5N6uOBjT8P3vtIPz-gaEAsCxJb2jQmFDTjY9ex7Rjcru_bDWpNHjXbLFcf5SONYrQ7fWf743ZFJQ',
    description:
      'High-humidity New Jersey summers stress condenser coils, while January polar vortex cold snaps threaten aging boilers and heat pumps. We install ultra-high SEER2 inverter heat pumps, multi-zone ductless mini-splits, and 96%+ AFUE gas furnaces with precision UCC mechanical permit documentation.',
    njCodeFocus: 'NJ UCC Mechanical Subcode N.J.A.C. 5:23-3.20 & Manual J/S/D Load Calculations',
    avgResponse: '35 minutes average truck arrival',
    licenseRequirement: 'NJ HVACR Master Contractor License #19HC00987600',
    features: [
      'Same-day emergency AC refrigerant leak detection and electronic recharge',
      'High-efficiency condensing gas furnace and hydronic boiler conversions',
      'Dual-fuel hybrid heat pump systems eligible for up to $2,000 NJ Clean Energy rebates',
      'Multi-story zoning with motorized dampers and smart ecobee/Nest integration',
      'Complete duct fabrication and static pressure airflow balancing',
    ],
    scopeHighlights: [
      {
        title: 'Cold-Climate Heat Pumps',
        desc: 'Advanced hyper-heating systems operating at 100% heating capacity down to -13°F without emergency strip heat.',
        icon: 'ac_unit',
      },
      {
        title: 'Boiler & Radiant Heating',
        desc: 'Cast-iron and wall-hung high-efficiency modulating boilers for New Jersey split-levels, capes, and victorians.',
        icon: 'mode_heat',
      },
      {
        title: 'Airflow & Duct Optimization',
        desc: 'Eliminating hot and cold second-story rooms with computer-balanced supply ducts and acoustic vibration isolators.',
        icon: 'air',
      },
    ],
    process: [
      { step: '01', title: 'Manual J Load Calculation', desc: 'Precision room-by-room thermodynamic modeling factoring New Jersey seasonal extremes and window thermal envelopes.' },
      { step: '02', title: 'Township Permit Pre-Approval', desc: 'We compile mechanical blueprints, equipment AHRI ratings, and gas load schematics for municipal sub-code signoff.' },
      { step: '03', title: 'One-Day Installation & Commissioning', desc: 'Factory-certified technicians complete full system swap, nitrogen pressure test, and electronic vacuum evacuation.' },
      { step: '04', title: 'Municipal Inspection & Warranty Delivery', desc: 'We coordinate the township inspector site walk and issue our 10-year craftsmanship guarantee.' },
    ],
    faqs: [
      { q: 'How do NJ Clean Energy rebates work on new heat pumps?', a: 'Through New Jersey’s Clean Energy Program (NJCEP) and utility partners (PSE&G, JCP&L, Atlantic City Electric), homeowners can qualify for $1,000 to $2,000 in instant equipment rebates plus federal 25C tax credits.' },
      { q: 'Can a heat pump replace my old gas or oil furnace in NJ?', a: 'Yes. Modern cold-climate inverter heat pumps maintain full output during freeze conditions, dramatically lowering utility bills while eliminating oil tank maintenance.' },
    ],
  },
  {
    id: 'plumbing',
    slug: 'services-plumbing',
    name: 'Master Plumbing, Sump Pumps & Water Heaters',
    shortName: 'Master Plumbing',
    badge: 'Master Plumbing',
    tagline: 'Cast-Iron Sump Pump Arrays, Trenchless Water Mains & Anti-Scale Tankless Conversions',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBcTms-QUm4oKDNa90aWJHI7EftxTBVjGgb0PcVkfsPM5C2R17fjzf_PYWsFYC5JD0yWm4yxI0tYf7Bpq9Y1_7PUL4bOcHGpRw9bQCiGohL1-KAAGOOa7Won6dLZ682RpQ-Is14r1z6qGVbingXItU1_TIoA7tE5ju27gYNjb0FKqROmfQ6ujdGOaNEbRTbrGVdqi85aMRD9K_JkABc8piuMmARI5zVxNUCANR-1K4GrkUDydKGmZ4y',
    description:
      'From water table management in low-elevation river valleys to hard water calcium deposition inside water heaters, our licensed master plumbers resolve sewer, potable, and emergency drainage challenges with heavy industrial durability.',
    njCodeFocus: 'NJ Uniform Construction Code Plumbing Subcode N.J.A.C. 5:23-3.15',
    avgResponse: '25-35 minutes urgent dispatch',
    licenseRequirement: 'NJ Master Plumber Lic #36BI123456',
    features: [
      'Commercial-grade cast-iron sump pumps with dual AGM battery backups and WiFi alarms',
      'Trenchless sewer line pipe-bursting & hydro-jetting avoiding driveway excavations',
      'Continuous endless tankless hot water conversions with gas line capacity verification',
      'Whole-house water filtration & water softening neutralizing regional mineral hardness',
      'Main water shutoff valve upgrades and smart automatic leak detection installations',
    ],
    scopeHighlights: [
      {
        title: 'Basement Flood Defense',
        desc: 'Submersible 1/2 HP and 3/4 HP cast iron primary and backup pumps engineered for torrential New Jersey cloudbursts.',
        icon: 'water_drop',
      },
      {
        title: 'Tankless Hot Water',
        desc: 'Navien and Rinnai condensing tankless units providing unlimited hot water with 98% thermal efficiency and space savings.',
        icon: 'hot_tub',
      },
      {
        title: 'Video Pipe Diagnostic',
        desc: 'Full-color self-leveling fiber optic camera inspections locating root intrusions, pipe collapses, and belly dips.',
        icon: 'videocam',
      },
    ],
    process: [
      { step: '01', title: 'Diagnostic Isolation', desc: 'Electronic acoustic leak detection and HD sewer camera run to pinpoint failure points.' },
      { step: '02', title: 'Upfront Flat Rate Quote', desc: 'Clear itemized proposal covering parts, labor, and township permit costs before work begins.' },
      { step: '03', title: 'Code-Compliant Repair', desc: 'Master plumber execution using Type L copper, commercial brass, and schedule 40 DWV piping.' },
      { step: '04', title: 'Hydrostatic Pressure Test', desc: 'Full pressure test to exceed NJ municipal code safety margins.' },
    ],
    faqs: [
      { q: 'Why is a battery-backup sump pump critical in New Jersey?', a: 'Severe nor’easters and coastal storms frequently knock out power at the exact peak of basement water inflow. A heavy-duty battery backup keeps your sump pump running for over 48 hours without grid power.' },
      { q: 'Will converting to a tankless water heater lower my gas bill?', a: 'Yes. By eliminating the standby energy losses of keeping 50 gallons of water heated constantly, tankless systems reduce water heating energy costs by up to 34%.' },
    ],
  },
  {
    id: 'electrical',
    slug: 'services-electrical',
    name: '200A Electrical Panel Upgrades & EV Chargers',
    shortName: 'Electrical Contracting',
    badge: 'Electrical Contracting',
    tagline: 'Service Modernization, Solar-Ready Distribution, Whole-Home Surge & Level 2 EV Stations',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvC6YIUkO9pyhzMkVGTV9CFyGZVieWyH033_XrdDwZ9HiR87uaL1nUwqd4L2kOnMIFcRRLb12HJ2JeKUqFTm3ZIYWGL6DSkP55H027iUJ63QB2GoWmbqAu1bmfGQRnQXyfhebz0E0RxO7RFtBlDGYZVjgXfTE2c8weTg0qKtzB8vGXryhGXoO7OxtlMKemyYlXyUrdzUhGos_i0n22Iz7Jw0Tuf50sp-AdAbS9qWkfgdBVJbuaaPJh',
    description:
      'Many mid-century New Jersey homes still operate on obsolete 100A Federal Pacific, Zinsco, or split-bus fuse panels unable to handle modern induction cooktops, heat pumps, and electric vehicles. We upgrade main services to 200A/400A with utility company coordination and whole-home surge protection.',
    njCodeFocus: 'National Electrical Code (NEC) & NJ UCC Electrical Subcode N.J.A.C. 5:23-3.16',
    avgResponse: 'Immediate dispatch for electrical hazards',
    licenseRequirement: 'NJ Electrical Contractor Lic #34EI098765',
    features: [
      'PSE&G and JCP&L utility coordination for overhead/underground service drops and meter pans',
      'Federal Pacific & Zinsco fire-hazard panel replacements with Square D / Siemens panels',
      'Whole-home Type 2 surge suppression protecting modern microprocessors and HVAC controls',
      'Level 2 Tesla & universal J1772 / NACS EV charging station dedicated 50A/60A installations',
      'Whole-home standby generator automatic transfer switches (ATS) and interlock kits',
    ],
    scopeHighlights: [
      {
        title: '200A / 400A Modernization',
        desc: 'Expanding breaker capacity to prevent overloads and ensure clean electrical distribution for electrified homes.',
        icon: 'electric_meter',
      },
      {
        title: 'Level 2 EV Charging',
        desc: 'High-speed overnight charging delivering up to 44 miles of range per hour with dedicated conduits and GFCI protection.',
        icon: 'ev_station',
      },
      {
        title: 'Standby Generator Transfer',
        desc: 'Seamless automatic transition from utility grid to standby power within 10 seconds of an outage.',
        icon: 'power',
      },
    ],
    process: [
      { step: '01', title: 'Load Calculation & Service Sizing', desc: 'Comprehensive electrical demand audit based on NEC 220 factoring future HVAC and EV expansion.' },
      { step: '02', title: 'Utility Notification & Permit File', desc: 'We coordinate with PSE&G/JCP&L for disconnect/reconnect orders and submit municipal permit filings.' },
      { step: '03', title: 'Single-Day Panel Swap', desc: 'Power disconnected at 8:00 AM, new copper service entrance cable, copper grounding rods, and panel installed by 3:00 PM.' },
      { step: '04', title: 'Utility Meter Seal & Municipal Inspection', desc: 'Township sub-code inspector approval and official utility reconnect.' },
    ],
    faqs: [
      { q: 'Why must Federal Pacific Stab-Lok panels be replaced?', a: 'Independent testing revealed that Federal Pacific Stab-Lok circuit breakers fail to trip under overload or short-circuit conditions over 25% of the time, presenting a documented fire hazard.' },
      { q: 'How long will power be out during an electrical panel upgrade?', a: 'We schedule work efficiently so power is typically off for only 5 to 7 hours during business hours on the day of replacement.' },
    ],
  },
  {
    id: 'roofing',
    slug: 'services-roofing',
    name: 'Storm-Resistant Roofing & Seamless Gutters',
    shortName: 'Roofing & Exteriors',
    badge: 'Roofing & Exteriors',
    tagline: '130 MPH Wind-Rated Architectural Shingles, Ice-Dam Shielding & 6-Inch Seamless Gutters',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFW0CvAtxhbZaSeCw449auz0-MbNFq69xG3l9SbWcTD6fdyzo1HqGLL_HbY00s3nK7pvG8WjJjZYXVJ3mj23XvExjfRIYIlkxm-A1cy8g5EwSRp7Zw6Rt58PW8lXS7Zvg6Nj-Bg0WNLg-zVXGQfXMTCmdd9DsVG0wK2qWFtz_M-QP6r5a6GoeahfO55I1ENwHyMrLUm2ZMAv6HfvVlCa633uShDZ9aQPrt-cThdvfdMXLxwHlPTZMA',
    description:
      'Atlantic nor’easters, winter freeze-thaw cycles, and violent summer cloudbursts punish vulnerable roof eaves and valleys across New Jersey. We install GAF Timberline HDZ architectural systems engineered for 130 MPH winds with full plywood redecking, ice-dam water shield barriers, and heavy-gauge seamless gutters.',
    njCodeFocus: 'NJ UCC Building Subcode Chapter 15 Roof Assemblies & Wind Uplift Standards',
    avgResponse: '24/7 emergency storm tarping within 45 mins',
    licenseRequirement: 'NJ Home Improvement Contractor Lic #13VH09876500',
    features: [
      'GAF & CertainTeed certified 50-year non-prorated system warranty installations',
      'Complete tear-off down to rafters with decayed plywood decking replacement',
      'Self-adhering ice-and-water barrier installed 6 feet up eaves and in all roof valleys',
      'High-capacity 6-inch seamless K-style aluminum gutters with hidden screw-hangers',
      'Emergency storm tarping, hail damage inspections & insurance claim documentation',
    ],
    scopeHighlights: [
      {
        title: '130 MPH Hurricane Rating',
        desc: 'LayerLock technology and DuraGrip adhesive strip withstand extreme coastal gusts without blow-offs.',
        icon: 'storm',
      },
      {
        title: 'Ice Dam Protection',
        desc: 'Advanced self-sealing waterproof membrane prevents backing water from infiltrating winter roof eaves.',
        icon: 'ac_unit',
      },
      {
        title: 'Heavy-Flow 6" Gutters',
        desc: 'Carries 40% more volume than standard 5" gutters, preventing foundation saturation and basement moisture.',
        icon: 'water',
      },
    ],
    process: [
      { step: '01', title: 'Drone & Physical Inspection', desc: 'High-resolution roof deck audit identifying soft wood, damaged flashing, and chimney masonry status.' },
      { step: '02', title: 'Complete Tear-Off & Deck Prep', desc: 'Removal of all old layers down to wood sheathing, replacing rotted plywood with CDX exterior-grade plywood.' },
      { step: '03', title: 'Shield & Shingle Application', desc: 'Installation of drip edge, ice & water shield, synthetic underlayment, starter strips, and shingles with 6-nail wind pattern.' },
      { step: '04', title: 'Magnetic Clean-Sweep & Inspection', desc: 'Ground protection tarps, multi-pass magnetic nail roller across lawn and driveway, and municipal code signoff.' },
    ],
    faqs: [
      { q: 'Can you install shingles over an existing roof layer in New Jersey?', a: 'While NJ code permits up to two layers in certain instances, we strongly recommend a complete tear-off to inspect the structural wood decking, verify rafter integrity, and install required ice-dam barriers.' },
      { q: 'How long does a complete residential roof replacement take?', a: 'Most residential roofs (2,000–3,500 sq ft) are stripped and completed in a single day, followed by our magnetic cleanup.' },
    ],
  },
];
