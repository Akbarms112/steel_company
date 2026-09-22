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
import sheet1 from '../img/sheet.jpeg';
import sheet2 from '../img/sheet2.jpeg';
import structSteel1 from '../img/structure_steel.jpeg';
import structSteel2 from '../img/structure_steel2.jpeg';

import roofingStacked from '../img/roofing.png';
import jindalSabrang from '../img/jindal-sabrang-roofing-sheet-640x640.png';
import jindalCutout from '../img/jindal-roofing-cutout.png';

export const STEEL_IMAGES = {
  hero: roofingStacked,
  banner: jindalCutout,
  roofingJindal: jindalCutout,
  jindalCutout: jindalCutout,
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
  sheet1: sheet1,
  sheet2: sheet2,
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
  gstin: "33FIXPM3243P1ZF",
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
  description: "Bagavan Steels Mart is a premier steel and roofing materials supplier serving Dharmapuri and nearby regions in Tamil Nadu. We specialize in Jindal Trapezoidal PPGL Roofing Sheets, high-strength TMT Bars, MS Structural Steel, and fabrication materials.",
  aboutStory: "Bagavan Steels Mart & Roofing Company provides construction-focused steel and roofing solutions for homeowners, civil contractors, commercial builders, and fabricators. Our focus is on supplying dependable materials, helping customers select products suited to their exact structural requirements, and delivering competitive wholesale quotations with responsive local availability."
};

export const VERIFIED_DEALERS = [
  { id: 'jindal', name: 'Jindal Trapezoidal PPGL', title: 'Jindal Trapezoidal PPGL Sheets', badge: 'Verified Supplier' },
  { id: 'tmt', name: 'TMT Reinforcement Bars', title: 'High Yield Strength TMT Bars', badge: 'Construction Grade' },
  { id: 'ppgl', name: 'Color Coated PPGL Sheets', title: 'PPGL & GI Roofing Sheets', badge: 'ISO Weatherproof' },
  { id: 'ms-steel', name: 'MS Structural Steel', title: 'MS Angles, Channels & Beams', badge: 'Industrial Stock' },
];

export const PRODUCTS_CATALOG = [
  {
    id: 'roofing-sheets',
    name: 'Jindal Trapezoidal PPGL & Colour-Coated Sheets',
    category: 'Roofing Sheets',
    image: STEEL_IMAGES.banner,
    verified: true,
    items: [
      'Jindal Trapezoidal PPGL Roofing Sheets',
      'PPGL Colour-Coated Roofing Sheets',
      'GI / GC Galvanized Iron Sheets',
      'Industrial Heavy Duty Roofing Sheets',
      'Roofing Ridge & Flashing Accessories'
    ],
    description: 'High durability, weather-resistant Jindal Trapezoidal PPGL and colour-coated sheets ideal for residential roofs, warehouses, and industrial sheds.'
  },
  {
    id: 'tmt-steel',
    name: 'TMT & Reinforcement Steel Bars',
    category: 'TMT Steel',
    image: STEEL_IMAGES.tmtRods,
    verified: true,
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
    id: 'structural-steel',
    name: 'MS Structural Steel Sections',
    category: 'Structural Steel',
    image: STEEL_IMAGES.structuralMain,
    verified: true,
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
    id: 'pipes-tubing',
    name: 'MS Pipes & Hollow Sections',
    category: 'Pipes & Tubes',
    image: STEEL_IMAGES.structuralPipes,
    verified: true,
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
  { id: 1, category: 'Roofing Sheets', title: 'Jindal Sabrang PPGL Roofing Sheet', img: STEEL_IMAGES.banner, badge: 'Jindal PPGL' },
  { id: 2, category: 'Roofing Sheets', title: 'Factory Stock Trapezoidal PPGL Sheets', img: STEEL_IMAGES.roofingSheetsStacked, badge: 'Factory Depot' },
  { id: 3, category: 'TMT Steel', title: 'High Yield Strength TMT Reinforcement Rods', img: STEEL_IMAGES.tmtRods, badge: 'TMT Bars' },
  { id: 4, category: 'Structural Steel', title: 'MS Angles, Channels & Beams Stock', img: STEEL_IMAGES.structuralMain, badge: 'MS Structural' },
  { id: 5, category: 'Pipes & Tubes', title: 'Square & Rectangular Pipes Inventory', img: STEEL_IMAGES.structuralPipes, badge: 'SHS / RHS' },
  { id: 6, category: 'Roofing Sheets', title: 'Industrial Shed Roofing Installation', img: STEEL_IMAGES.roofingSteel2, badge: 'Industrial' },
  { id: 7, category: 'Structural Steel', title: 'Heavy Duty Metal Plates & Flats', img: STEEL_IMAGES.roofingSteel3, badge: 'Metal Plates' },
  { id: 8, category: 'Warehouse', title: 'Bagavan Steels Central Storage Yard', img: STEEL_IMAGES.warehouse, badge: 'Stockyard' },
  { id: 9, category: 'Roofing Sheets', title: 'Colour Coated Roofing Sheets Stock', img: STEEL_IMAGES.roofingSteel1, badge: 'Colour Coated' },
  { id: 10, category: 'Structural Steel', title: 'Steel Sheet Stock Inventory', img: STEEL_IMAGES.sheet1, badge: 'Steel Sheets' },
  { id: 11, category: 'Structural Steel', title: 'Flat Steel Sections', img: STEEL_IMAGES.sheet2, badge: 'Flat Sections' },
  { id: 12, category: 'Warehouse', title: 'Heavy Pipes Depot', img: STEEL_IMAGES.heavyPipes, badge: 'MS Pipes' },
];
