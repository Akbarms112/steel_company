import steelHero from '../img/steel.jpeg';
import steel1 from '../img/steel1.jpg';
import steel3 from '../img/steel3.jpg';
import steel4 from '../img/steel4.jpg';
import steel5Jpg from '../img/steel5.jpg';
import steel5Png from '../img/steel5.png';
import imgMain from '../img/images.jpeg';
import img1 from '../img/images (1).jpeg';
import img2 from '../img/images (2).jpeg';
import img3 from '../img/images (3).jpeg';

import roofingSteel1 from '../img/roofing_steel.jpeg';
import roofingSteel2 from '../img/roofing_steel2.jpeg';
import roofingSteel3 from '../img/roofing_steel3.jpeg';
import structSteel1 from '../img/structure_steel.jpeg';
import structSteel2 from '../img/structure_steel2.jpeg';

import roofingStacked from '../img/roofing.png';
import jswCutout from '../img/jsw-roofing-cutout.png';

import tataTiscon from '../img/tata-tiscon-tmt.jpg';
import tataShaktee from '../img/tata-shaktee-roofing.jpg';
import tataStructura from '../img/tata-structura-pipes.jpg';
import tataWiron from '../img/tata-wiron.jpg';

export const STEEL_IMAGES = {
  hero: roofingStacked,
  banner: jswCutout,
  roofingJsw: jswCutout,
  jswCutout: jswCutout,
  tataTiscon: tataTiscon,
  tataShaktee: tataShaktee,
  tataStructura: tataStructura,
  tataWiron: tataWiron,
  roofingSheetsStacked: roofingStacked,
  roofingSteel1: roofingSteel1,
  roofingSteel2: roofingSteel2,
  roofingSteel3: roofingSteel3,
  tmtRods: steel3,
  structuralMain: structSteel1,
  structuralPipes: structSteel2,
  warehouse: steel1,
  heavyPipes: steel4,
  cement: steel5Jpg,
  signboard: imgMain,
  structuralAlt: img1,
  sheetsAlt: img2,
  inventory: img3,
  sheet1: roofingSteel1,
  sheet2: roofingSteel2,
};

export const COMPANY_INFO = {
  name: "BAGAVAN STEELS MART",
  fullName: "BAGAVAN STEELS MART & ROOFING COMPANY",
  tagline: "Quality Steel & Roofing Solutions for Your Construction Needs",
  subMessage: "Reliable steel and roofing materials for homes, businesses, contractors and industrial construction projects.",
  location: "Dharmapuri & Surrounding Areas, Tamil Nadu",
  primaryArea: "Pulkarai, Dharmapuri, Tamil Nadu",
  publicRating: "4.7 / 5 (Verified Reviews)",
  phone: "+91 80567 80664",
  whatsapp: "918056780664",
  mobiles: ["+91 80567 80664", "+91 93442 80443", "+91 88831 21935"],
  founder: "Bagavan",
  owner: "Mr. Bagavan",
  email: "enquiry@bagavansteels.com",
  // Main facility address
  branches: [
    {
      id: 'branch1',
      label: 'Main Facility',
      address: "Dharmapuri Main Road, Pulkarai, Dharmapuri (DT)",
      phone: "+91 80567 80664",
      phone2: "+91 93442 80443",
    }
  ],
  address: "Dharmapuri Main Road, Pulkarai, Dharmapuri (DT)",
  copyright: "COPYRIGHT © 2026 BAGAVAN STEELS MART & ROOFING COMPANY. ALL RIGHTS RESERVED.",
  description: "Bagavan Steels Mart is a premier steel and roofing materials supplier serving Dharmapuri and nearby regions in Tamil Nadu. Founded by Mr. Bagavan, we specialize in JSW Trapezoidal PPGL Roofing Sheets, high-strength TMT Bars, MS Structural Steel, and fabrication materials.",
  aboutStory: "Founded and guided by Mr. Bagavan, Bagavan Steels Mart & Roofing Company provides construction-focused steel and roofing solutions for homeowners, civil contractors, commercial builders, and fabricators. Under Mr. Bagavan's leadership, our focus is on supplying dependable materials, helping customers select products suited to their exact structural requirements, and delivering competitive wholesale quotations with responsive local availability."
};

export const VERIFIED_DEALERS = [
  { id: 'jsw', name: 'JSW Trapezoidal PPGL', title: 'JSW Trapezoidal PPGL Sheets', badge: 'Verified Supplier' },
  { id: 'tata', name: 'Tata Steel Range', title: 'Tata Tiscon, Shaktee & Structura', badge: 'Authorized Sourcing' },
  { id: 'tmt', name: 'TMT Reinforcement Bars', title: 'High Yield Strength TMT Bars', badge: 'Construction Grade' },
  { id: 'ppgl', name: 'Color Coated PPGL Sheets', title: 'PPGL & GI Roofing Sheets', badge: 'ISO Weatherproof' },
  { id: 'ms-steel', name: 'MS Structural Steel', title: 'MS Angles, Channels & Beams', badge: 'Industrial Stock' },
];

export const TATA_STEEL_INFO = {
  title: "Tata Steel Construction & Structural Products",
  badge: "Core Multi-Brand Supply",
  subtitle: "Sourced & Distributed by Bagavan Steels Mart · Dharmapuri",
  description: "As a multi-brand steel retail and fabrication outlet, Bagavan Steels handles various core Tata Steel structural and construction products based on local demand and market availability.",
  stockNotice: "Note: Product stock fluctuates based on market demand. It is highly recommended to contact our store directly at our Pulikarai location to verify exact sizes and immediate availability before arriving.",
  categories: [
    {
      id: 'tata-tiscon',
      name: 'Tata Tiscon 550SD TMT Bars',
      brand: 'Tata Tiscon',
      badge: 'Fe 550SD Rebars',
      tagline: 'Primary High-Strength Concrete Reinforcement',
      image: STEEL_IMAGES.tataTiscon,
      description: 'The primary high-strength rebars used for residential and commercial concrete reinforcement and house construction.',
      specs: ['Super Ductile (SD)', 'Earthquake & Corrosion Resistant', 'Superior Bendability']
    },
    {
      id: 'tata-shaktee',
      name: 'Tata Shaktee Galvano / Roofing Sheets',
      brand: 'Tata Shaktee',
      badge: 'Corrugated & Galvano',
      tagline: 'Galvanized & Colour-Coated Roofing',
      image: STEEL_IMAGES.tataShaktee,
      description: 'Corrugated and galvanized steel sheets widely used for industrial roofing, residential sheds, and barricading.',
      specs: ['Uniform Zinc Coating', 'High Tensile Strength', 'Weather & Leak Proof']
    },
    {
      id: 'tata-structura',
      name: 'Tata Structura / Tata Pipes',
      brand: 'Tata Structura',
      badge: 'Hollow Sections (SHS/RHS)',
      tagline: 'Rectangular, Square & Circular Sections',
      image: STEEL_IMAGES.tataStructura,
      description: 'Hollow structural sections (rectangular, square, and circular steel pipes) used for roofing trusses, structural frames, and steel gates.',
      specs: ['Trusses & Structural Frames', 'High Load Bearing Capacity', 'Clean Fabrication & Weldability']
    },
    {
      id: 'tata-wiron',
      name: 'Tata Wiron Fencing & Binding Wires',
      brand: 'Tata Wiron',
      badge: 'Galvanized Fencing Wire',
      tagline: 'Agricultural Fencing & Construction Binding',
      image: STEEL_IMAGES.tataWiron,
      description: 'Galvanized wire products used for agricultural fencing and binding.',
      specs: ['Heavy Galvanized Zinc', 'Agricultural Fencing & Mesh', 'High Tensile Binding Wire']
    }
  ]
};

export const PRODUCTS_CATALOG = [
  {
    id: 'roofing-jsw',
    name: 'JSW Trapezoidal PPGL & Colour-Coated Sheets',
    category: 'Roofing Sheets',
    categories: ['Roofing Sheets'],
    image: STEEL_IMAGES.banner,
    verified: true,
    badge: 'JSW Trapezoidal PPGL',
    items: [
      'JSW Trapezoidal PPGL Roofing Sheets',
      'PPGL Colour-Coated Roofing Sheets',
      'GI / GC Galvanized Iron Sheets',
      'Industrial Heavy Duty Roofing Sheets',
      'Roofing Ridge & Flashing Accessories'
    ],
    description: 'High durability, weather-resistant JSW Trapezoidal PPGL and colour-coated sheets ideal for residential roofs, warehouses, and industrial sheds.'
  },
  {
    id: 'tata-tiscon-tmt',
    name: 'Tata Tiscon 550SD High-Strength TMT Bars',
    category: 'TMT Steel',
    categories: ['TMT Steel', 'Tata Steel Range'],
    image: STEEL_IMAGES.tataTiscon,
    verified: true,
    badge: 'Tata Fe 550SD',
    items: [
      'Super Ductile (SD) Fe 550SD Rebars',
      'Residential & Commercial Concrete Reinforcement',
      'Earthquake & Corrosion Resistant',
      'Superior Bendability & Safe Rib Pattern',
      'Sizes: 6mm, 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm'
    ],
    description: 'The primary high-strength rebars used for residential and commercial concrete reinforcement and house construction.'
  },
  {
    id: 'tata-shaktee-sheets',
    name: 'Tata Shaktee Galvano / Roofing Sheets',
    category: 'Roofing Sheets',
    categories: ['Roofing Sheets', 'Tata Steel Range'],
    image: STEEL_IMAGES.tataShaktee,
    verified: true,
    badge: 'Tata Shaktee Galvano',
    items: [
      'Corrugated & Galvanized Steel Sheets',
      'Uniform Zinc Protective Coating',
      'Industrial Roofing, Sheds & Barricading',
      'High Tensile Strength & Weather Resistance',
      'Standard Lengths & Custom Cut Supply'
    ],
    description: 'Corrugated and galvanized steel sheets widely used for industrial roofing, residential sheds, and barricading.'
  },
  {
    id: 'tmt-steel',
    name: 'Standard TMT & Reinforcement Steel Bars',
    category: 'TMT Steel',
    categories: ['TMT Steel'],
    image: STEEL_IMAGES.tmtRods,
    verified: true,
    badge: 'Fe 500 / 550 D',
    items: [
      'High-Strength TMT Bars (Fe 500 / 550 D)',
      'Reinforcement Steel Bars',
      'Mild Steel (MS) Round Bars',
      'Civil Construction Steel Rods',
      'Cut & Bend Steel Supply'
    ],
    description: 'Earthquake-resistant, corrosion-treated TMT reinforcement bars designed for high-rise buildings, home foundations, and civil infrastructure.'
  },
  {
    id: 'tata-structura-pipes',
    name: 'Tata Structura / Tata Pipes',
    category: 'Pipes & Tubes',
    categories: ['Pipes & Tubes', 'Tata Steel Range'],
    image: STEEL_IMAGES.tataStructura,
    verified: true,
    badge: 'Tata Structura (SHS/RHS)',
    items: [
      'Hollow Structural Sections (Square, Rectangular, Round)',
      'Roofing Trusses & Structural Frames',
      'Steel Gates, Railings & Architectural Structures',
      'High Load Bearing Capacity',
      'Clean Fabrication & Superior Weldability'
    ],
    description: 'Hollow structural sections (rectangular, square, and circular steel pipes) used for roofing trusses, structural frames, and steel gates.'
  },
  {
    id: 'structural-steel',
    name: 'MS Structural Steel Sections',
    category: 'Structural Steel',
    categories: ['Structural Steel'],
    image: STEEL_IMAGES.structuralMain,
    verified: true,
    badge: 'MS Structural',
    items: [
      'MS Equal Angles (L-Angle)',
      'MS Channels (C-Channel)',
      'MS Flat Bars & MS Plates',
      'MS Beams & I-Sections',
      'Heavy Metal Plates'
    ],
    description: 'Standard and custom mild steel structural sections used for shed fabrication, building frameworks, and heavy industrial support structures.'
  },
  {
    id: 'tata-wiron-wire',
    name: 'Tata Wiron Fencing & Binding Wires',
    category: 'Structural Steel',
    categories: ['Structural Steel', 'Tata Steel Range'],
    image: STEEL_IMAGES.tataWiron,
    verified: true,
    badge: 'Tata Wiron Wire',
    items: [
      'Heavy Galvanized Zinc Anti-Rust Coating',
      'Agricultural & Perimeter Fencing Wire',
      'High-Tensile Barbed Wire & Mesh',
      'Construction Grade Binding Wire Coils',
      'Durable All-Weather Longevity'
    ],
    description: 'Galvanized wire products used for agricultural fencing and binding with superior corrosion resistance.'
  },
  {
    id: 'pipes-tubing',
    name: 'MS Pipes & Hollow Sections',
    category: 'Pipes & Tubes',
    categories: ['Pipes & Tubes'],
    image: STEEL_IMAGES.structuralPipes,
    verified: true,
    badge: 'SHS / RHS Pipes',
    items: [
      'Square Hollow Sections (SHS)',
      'Rectangular Hollow Sections (RHS)',
      'Round MS Pipes',
      'Galvanized Iron (GI) Pipes',
      'Fabrication Steel Tubes'
    ],
    description: 'Precision engineered square, rectangular, and round steel pipes suitable for gates, trusses, handrails, and agricultural structures.'
  }
];

export const TARGET_CUSTOMERS = [
  {
    segment: 'Individual Home Builders',
    requirement: 'New houses, extensions, garages, residential roofs, and home foundation steel.',
    icon: 'Home'
  },
  {
    segment: 'Civil Contractors',
    requirement: 'TMT bars, structural steel, roofing sheets, and bulk site delivery.',
    icon: 'HardHat'
  },
  {
    segment: 'Builders & Construction Companies',
    requirement: 'Residential, commercial, warehouse, and large infrastructure projects.',
    icon: 'Building'
  },
  {
    segment: 'Industrial Customers',
    requirement: 'Factories, workshops, industrial sheds, and heavy steel structures.',
    icon: 'Factory'
  },
  {
    segment: 'Fabricators & Welders',
    requirement: 'Steel sections, pipes, MS angles, plates, and custom fabrication stock.',
    icon: 'Wrench'
  },
  {
    segment: 'Farmers & Agricultural Customers',
    requirement: 'Farm sheds, cattle sheds, crop storage structures, and durable roofing.',
    icon: 'Tractor'
  }
];

export const TRUST_ELEMENTS = [
  {
    title: 'Quality Materials',
    desc: 'Products rigorously selected for reliable residential, commercial, and industrial construction applications.',
    icon: 'CheckCircle'
  },
  {
    title: 'Competitive Quotations',
    desc: 'Transparent pricing based on your exact product type, grade, weight, and delivery location requirements.',
    icon: 'Tag'
  },
  {
    title: 'Local Availability',
    desc: 'Prompt local supply and ready stock serving Dharmapuri, Pulkarai, and nearby regions.',
    icon: 'MapPin'
  },
  {
    title: 'Bulk Requirements',
    desc: 'Specialized volume solutions and direct truckloads for civil contractors, builders, and factories.',
    icon: 'Truck'
  },
  {
    title: 'Quick Enquiry',
    desc: 'Direct phone and instant WhatsApp quote system for fast response and estimate generation.',
    icon: 'MessageSquare'
  }
];

export const GALLERY_ITEMS = [
  { id: 1, category: 'Roofing Sheets', title: 'JSW Colouron+ PPGL Roofing Sheet', img: STEEL_IMAGES.banner, badge: 'JSW PPGL' },
  { id: 2, category: 'TMT Steel', title: 'Tata Tiscon 550SD High-Strength TMT Bars', img: STEEL_IMAGES.tataTiscon, badge: 'Tata Tiscon' },
  { id: 3, category: 'Roofing Sheets', title: 'Tata Shaktee Galvano Roofing Sheets', img: STEEL_IMAGES.tataShaktee, badge: 'Tata Shaktee' },
  { id: 4, category: 'Pipes & Tubes', title: 'Tata Structura Hollow Sections & Pipes', img: STEEL_IMAGES.tataStructura, badge: 'Tata Structura' },
  { id: 5, category: 'Structural Steel', title: 'Tata Wiron Agricultural & Fencing Wires', img: STEEL_IMAGES.tataWiron, badge: 'Tata Wiron' },
  { id: 6, category: 'Roofing Sheets', title: 'Factory Stock Trapezoidal PPGL Sheets', img: STEEL_IMAGES.roofingSheetsStacked, badge: 'Factory Depot' },
  { id: 7, category: 'TMT Steel', title: 'High Yield Strength TMT Reinforcement Rods', img: STEEL_IMAGES.tmtRods, badge: 'TMT Bars' },
  { id: 8, category: 'Structural Steel', title: 'MS Angles, Channels & Beams Stock', img: STEEL_IMAGES.structuralMain, badge: 'MS Structural' },
  { id: 9, category: 'Pipes & Tubes', title: 'Square & Rectangular Pipes Inventory', img: STEEL_IMAGES.structuralPipes, badge: 'SHS / RHS' },
  { id: 10, category: 'Roofing Sheets', title: 'Industrial Shed Roofing Installation', img: STEEL_IMAGES.roofingSteel2, badge: 'Industrial' },
  { id: 11, category: 'Structural Steel', title: 'Heavy Duty Metal Plates & Flats', img: STEEL_IMAGES.roofingSteel3, badge: 'Metal Plates' },
  { id: 12, category: 'Warehouse', title: 'Bagavan Steels Central Storage Yard', img: STEEL_IMAGES.warehouse, badge: 'Stockyard' },
];
