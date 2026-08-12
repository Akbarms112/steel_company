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

export const STEEL_IMAGES = {
  hero: steelHero,
  banner: steel5Png,
  warehouse: steel1,
  rods: steel3,
  pipes: steel4,
  cement: steel5Jpg,
  signboard: imgMain,
  structural: img1,
  sheets: img2,
  inventory: img3,
};

export const COMPANY_INFO = {
  name: "TRICHY STEEL COMPANY",
  tagline: "Iron & Cement Merchants",
  establishedYear: 2008,
  mainBranchLocation: "Dharmapuri District",
  phone: "04342 - 2609194",
  mobiles: ["98424 25147", "99409 97604"],
  email: "trichysteel.dpi@gmail.com",
  address: "30/7, Krishnagiri Main Road, Opp : S.M.Arumugam Polytechnic, Dharmapuri - 636702, Tamilnadu, India.",
  copyright: "COPYRIGHT (C) 2015 TRICHY STEEL COMPANY. ALL RIGHTS RESERVED. POWERED BY DAZZLE SYSTECH INDIA PRIVATE LIMITED.",
  description: "TRICHY STEEL COMPANY is one of the most famous Iron and Cement merchants in Tamilnadu particularly around Dharmapuri District. Our success lies on Customer Satisfaction and the Quality of the Products. We are authorized dealers of Madras Cement Ltd, SuryaDev Construction Bars Company and Agni Steels Pvt Ltd.",
  aboutStory: "TRICHY STEEL COMPANY was started in the year of 2008. Within 4 years, we, TRICHY STEEL COMPANY tasted tremendous success in our service. Our main goal is our Customer Satisfaction. We are delivering very good Products and offering better Customer Service."
};

export const AUTHORIZED_DEALERS = [
  { id: 'suryadev', name: 'SuryaDev Construction Bars', title: 'SuryaDev Fe 500 TMT ISI', award: 'Appreciation Award Winner', badge: 'Authorized Dealer' },
  { id: 'agni', name: 'AGNI TMT Steel Rods', title: 'AGNI 500 TMT ISI', award: 'Certified Premium Dealer', badge: 'Authorized Dealer' },
  { id: 'madras', name: 'Madras Cements Ltd', title: 'Madras Cement', award: 'Official Regional Merchant', badge: 'Authorized Dealer' },
  { id: 'ashok', name: 'Ashok ISI TMT Bars', title: 'Ashok TMT ISI', award: 'Top Distribution Partner', badge: 'Authorized Dealer' },
  { id: 'ultratech', name: 'UltraTech Cements', title: 'Ultra Tech Cements', award: 'Authorized Merchant', badge: 'Authorized Dealer' },
  { id: 'ramco', name: 'Ramco Cements Bags', title: 'Ramco Cement & AC Sheets', award: 'Authorized Merchant', badge: 'Authorized Dealer' },
  { id: 'maruthi', name: 'Maruthi OPC Super Tech Cement', title: 'Maruthi OPC Cement Bags', award: 'Authorized Supplier', badge: 'Authorized Dealer' },
];

export const PRODUCTS_CATALOG = [
  {
    id: 'cement',
    name: 'Cement & Super Tech Bags',
    category: 'Cement',
    image: STEEL_IMAGES.cement,
    items: ['Madras Cement Ltd', 'Ultra Tech Cements', 'Ramco Cements Bags', 'Maruthi OPC Super Tech Cement Bags'],
    description: 'High-grade building cement from India\'s most trusted manufacturers ensuring maximum compressive strength and lifespan.'
  },
  {
    id: 'tmt-rods',
    name: 'TMT ISI Iron & Steel Rods',
    category: 'Iron & TMT',
    image: STEEL_IMAGES.rods,
    items: ['Suryadev Fe 500 TMT ISI', 'AGNI 500 TMT ISI', 'Kanishk TMT ISI', 'Ashok TMT ISI', 'PSK TMT ISI Rods'],
    description: 'Corrosion resistant high yield strength Thermo-Mechanically Treated bars engineered for earthquakes & heavy loads.'
  },
  {
    id: 'structural',
    name: 'Iron Pipes, Plates & Structural Steel',
    category: 'Structural Steel',
    image: STEEL_IMAGES.pipes,
    items: ['Iron Pipes & Plates', 'Metal Rods and Pipes', 'Vizag & Tata Joists', 'Channels, Angles & Flats'],
    description: 'Precision manufactured iron pipes, structural channels, joists, and heavy metal plates for industrial construction.'
  },
  {
    id: 'roofing',
    name: 'Cool Roof & AC Sheets',
    category: 'Roofing',
    image: STEEL_IMAGES.sheets,
    items: ['Ramco AC Sheets', 'Swasthik AC Sheets', 'Jayam Metal Color Cool Roof ISO Sheets'],
    description: 'ISO certified weather-proof color-coated cool roof metal sheets and classic durable AC sheets.'
  }
];

export const FEATURES_LIST = [
  "Authorized Dealer of Surya Dev Construction Bars",
  "Authorized Dealer of AGNI TMT Steel rods and bars",
  "Authorized Dealer of Madras Cements Ltd",
  "Authorized Dealer of Ashok ISI TMT Bars",
  "Authorized Dealer of Ultra Tech Cements",
  "Authorized Dealer of Ramco Cements Bags",
  "Authorized Dealer of Maruthi OPC Super Tech Cement Bags",
  "Ramco and Swasthik AC Sheets",
  "Jayam Metal color cool roof ISO Sheets",
  "Available Vizag & Tata, Joists, Channels, Angles, Flats etc.",
  "We have Appreciation award from SuryaDev Construction Bars",
  "All companies Steel rods - Suryadev Fe 500 TMT ISI, AGNI 500 TMT ISI, Kanishk TMT ISI, Ashok TMT ISI, PSK TMT ISI",
  "Excellent Customer Service"
];

export const BRANCHES = [
  { name: "Dharmapuri (Head Office)", address: "30/7, Krishnagiri Main Road, Opp: S.M.Arumugam Polytechnic", phone: "04342 - 2609194", status: "Main HQ" },
  { name: "Thiruvarur", address: "Central Steel Complex, Thiruvarur Road", phone: "+91 98424 25147", status: "Active Branch" },
  { name: "Aranthangi", address: "Main Market Road, Aranthangi", phone: "+91 99409 97604", status: "Active Branch" },
  { name: "Paramakudi", address: "Station Road, Paramakudi", phone: "+91 98424 25147", status: "Active Branch" },
  { name: "Aruppukottai", address: "Bypass Junction, Aruppukottai", phone: "+91 99409 97604", status: "Active Branch" },
  { name: "Musuri (Namakkal)", address: "Trichy-Namakkal Highway, Musuri", phone: "04342 - 2609194", status: "Active Branch" },
  { name: "Nannilam", address: "Bus Stand Commercial Zone, Nannilam", phone: "+91 98424 25147", status: "Active Branch" },
  { name: "Puthukottai", address: "Industrial Estate, Puthukottai", phone: "+91 99409 97604", status: "Active Branch" },
  { name: "Kumbakonam", address: "Tanjore Main Road, Kumbakonam", phone: "+91 98424 25147", status: "Active Branch" },
  { name: "Soolur (Coimbatore)", address: "Trichy Road, Soolur, Coimbatore", phone: "+91 99409 97604", status: "Active Branch" },
];

export const GALLERY_ITEMS = [
  { id: 1, category: 'TMT Steel Rods', title: 'High Strength TMT ISI Steel Rods', img: STEEL_IMAGES.rods, badge: 'TMT ISI' },
  { id: 2, category: 'Warehouse & Inventory', title: 'Trichy Steel Central Depot Stock', img: STEEL_IMAGES.warehouse, badge: 'Stockyard' },
  { id: 3, category: 'Structural Steel', title: 'Heavy Iron Pipes & Plates Stock', img: STEEL_IMAGES.pipes, badge: 'Pipes & Channels' },
  { id: 4, category: 'Cement Bags', title: 'Madras & UltraTech Premium Cement Bags', img: STEEL_IMAGES.cement, badge: 'Cement Depot' },
  { id: 5, category: 'Signboard & Store', title: 'Original Trichy Steel Company Outlet', img: STEEL_IMAGES.signboard, badge: 'Storefront' },
  { id: 6, category: 'Roofing Sheets', title: 'Jayam Metal Color Cool Roof ISO Sheets', img: STEEL_IMAGES.sheets, badge: 'ISO Cool Roof' },
  { id: 7, category: 'Structural Steel', title: 'Tata & Vizag Angles, Channels & Joists', img: STEEL_IMAGES.structural, badge: 'Tata & Vizag' },
  { id: 8, category: 'Warehouse & Inventory', title: 'Bulk Steel Yard Distribution Depot', img: STEEL_IMAGES.inventory, badge: 'Logistics' },
  { id: 9, category: 'TMT Steel Rods', title: 'Suryadev Fe 500 & AGNI 500 TMT Bundles', img: STEEL_IMAGES.hero, badge: 'Fe 500 TMT' },
  { id: 10, category: 'Signboard & Store', title: 'Trichy Steel Company Entrance Banner', img: STEEL_IMAGES.banner, badge: 'Main HQ' },
];
