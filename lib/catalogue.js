// All content and imagery below is taken from the Rizak Industries / Kakoo Metal catalogue.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rizakindustries.com";

const img = (name) => `/catalogue/${name}.webp`;

export const company = {
  name: "Rizak Industries",
  brand: "Kakoo Metal",
  tagline: "Strength in Metal. Excellence in Wood.",
  intro: "Experts in Modular Workstations & Metal and Wood Components",
  since: 2018,
  factoryArea: "3000 sq. ft",
  address: "Kh. No. 83/23, Mundka Industrial Area, Mundka Village, New Delhi 110041",
  email: "rizakindustries.kakoo@gmail.com",
  phones: ["+91 98993 49890", "+91 98993 49913"],
  mapQuery: "Mundka Industrial Area, Mundka Village, New Delhi 110041",
};

export const certifications = [
  "ISO 9001:2015",
  "ISO 14000:2015",
  "ISO 45001:2018",
  "ISO 50001:2018",
  "AOITA",
  "Greenguard",
  "BIFMA",
];

export const profile = [
  "Rizak Industries is an ISO 9001:2015, ISO 14000-2015, ISO 45001:2018 and 50001:2018, AOITA, Greenguard & BIFMA certified modular office furniture manufacturer based in Delhi, with our factory in a 3000 sq. ft area in Mundka.",
  "We are focused on manufacturing modular office workstations, desking furniture and conference tables, storages, executive tables, office chairs and hostel furniture.",
  "Our products are available in various grades and specifications as per the requirement of the customers. We pay attention to the minutest detail — from suggesting the best model and designs for the project, to technical precision in manufacturing, selection of the premium and best possible raw materials, skilled and well-planned execution, and supportive after-sales service.",
  "We ensure that the raw materials are of the best possible standard and the workmanship of the highest level. Manufacturing is mostly machine made, ensuring fewer errors and lower maintenance costs too.",
  "Since our operations began in 2018, we have been working diligently to establish reliable office furniture manufacturing, always focused on cost-effective products with premium quality and timely delivery.",
  "We have dedicated teams for pre-production, manufacturing and installation to ensure a seamless flow of process and add value for our customers. Our certifications and accreditations are proof of our consistency and perseverance to adhere to the highest quality of office furniture manufacturing.",
];

export const clients = [
  "Reserve Bank of India, Guwahati",
  "N.F. Railway, Maligaon, Guwahati",
  "NIT Hamirpur",
  "IIT Kanpur",
  "ABV-IIITM, Gwalior",
  "Tool Room & Training Centre, Tinsukia",
  "PWD Dibrugarh",
  "CIPET Murthal",
  "CIPET Dehradun",
  "Navy INHS Warmar",
  "Naval Base Kochi",
  "IIM Rohtak (Haryana)",
  "NIT Agartala",
  "KVS Schools — Goalpara, RK Puram, Imphal, Dimapur",
  "Canara Bank, Nehru Place, New Delhi",
  "Reserve Bank of India — Kanpur, Thiruvananthapuram, Lucknow",
  "ICF Chennai",
];

export const machinery = [
  { name: "CNC Router Automatic Through Feed", group: "Wood", image: img("machine-cnc-router") },
  { name: "Panel Saw", group: "Wood", image: img("machine-panel-saw") },
  { name: "CNC Laser Sheet & Pipe Cutting Machine", group: "Metal", image: img("machine-laser-cutter") },
  { name: "CNC Brake Press Sheet Bending Machine", group: "Metal", image: img("machine-brake-press") },
];

export const offerings = [
  "Conference / Meeting", "Group Table Series", "Class Room Desk Series", "Mobile Stage",
  "Work Stations", "Training", "Computer / Library", "Hostel Furniture", "Lounge", "Cabin Desk",
  "Storages", "Seating Chair", "Attendant Recliner", "OPD Furniture", "Banquet Furniture",
  "Patient Bed", "Medical Trolley", "Reception Desk", "Side Table", "Cafeteria",
  "Locker / Storages", "Lounge Chair", "Restaurant", "Trolley",
];

export const categories = [
  { id: "workstations", label: "Workstation Series" },
  { id: "conference", label: "Conference" },
  { id: "executive", label: "Executive Cabins" },
  { id: "education", label: "Education" },
  { id: "computer", label: "Computer & Library" },
];

const variants = (code, prefix, letters = "abcdef") =>
  letters.split("").map((l) => ({ label: `${prefix}${l.toUpperCase()}`, image: img(`${code}-${l}`) }));

const numbered = (code, count, label) =>
  Array.from({ length: count }, (_, i) => ({
    label: `${label} ${String(i + 1).padStart(2, "0")}`,
    image: img(`${code}-${String(i + 1).padStart(2, "0")}`),
  }));

export const series = [
  {
    slug: "ri-13",
    name: "RI-13",
    category: "workstations",
    frame: "Slanted cantilever leg",
    blurb: "A bold, slanted cantilever leg in powder-coated steel — for executive desks, L-shaped tables and screened workstations.",
    hero: img("hero-13"),
    dark: true,
    variants: variants("13", "RI-13"),
  },
  {
    slug: "ri-v15",
    name: "RI V-15",
    category: "workstations",
    frame: "Tapered V-profile leg",
    blurb: "Tapered V-profile legs with a crisp top rail. Clean-lined desking from single desks to six-seater clusters.",
    hero: img("hero-v15"),
    dark: true,
    variants: variants("15", "RI-15"),
  },
  {
    slug: "ri-1213",
    name: "RI-1213",
    category: "workstations",
    frame: "Splayed trestle frame",
    blurb: "A splayed, four-point trestle frame that reads light and architectural — available in vivid powder-coat colours.",
    hero: img("hero-1213"),
    variants: variants("1213", "RI-1213"),
  },
  {
    slug: "ri-a1",
    name: "RI A-1",
    category: "workstations",
    frame: "Slim tapered A-frame",
    blurb: "Slim tapered tubular legs on an A-frame. Elegant for manager desks, meeting tables and open-plan benching.",
    hero: img("hero-a1"),
    dark: true,
    variants: variants("a1", "RI A-1"),
  },
  {
    slug: "ri-a10",
    name: "RI A-10",
    category: "workstations",
    frame: "Wide-stance A-frame",
    blurb: "A wide-stance A-frame with flared legs, built for stability across long spans and shared workstations.",
    hero: img("hero-a10"),
    dark: true,
    variants: variants("a10", "RI A-10"),
  },
  {
    slug: "ri-a50",
    name: "RI A-50",
    category: "workstations",
    frame: "Square-post bridge leg",
    blurb: "Square-section posts with a straight bridge — a confident, architectural base for desks and benching.",
    hero: img("hero-a50"),
    variants: variants("a50", "RI A-50"),
  },
  {
    slug: "ri-b50",
    name: "RI B-50",
    category: "workstations",
    frame: "Closed rectangular loop",
    blurb: "A closed rectangular loop leg: timeless, strong and equally at home in cabins, conference rooms and workstations.",
    hero: img("hero-b50"),
    variants: variants("b50", "RI B-50"),
  },
  {
    slug: "ri-c50",
    name: "RI C-50",
    category: "workstations",
    frame: "Open bridge frame",
    blurb: "An open bridge frame with slim posts, pairing well with modesty panels and screened multi-seat layouts.",
    hero: img("hero-c50"),
    variants: variants("c50", "RI C-50"),
  },
  {
    slug: "ri-lt",
    name: "RI LT",
    category: "workstations",
    frame: "Round tapered leg with caps",
    blurb: "Round tapered legs finished with cast caps and levelling feet — a refined look in a spectrum of colours.",
    hero: img("hero-lt"),
    dark: true,
    variants: variants("lt", "RI LT "),
  },
  {
    slug: "ri-q7",
    name: "RI Q7",
    category: "workstations",
    frame: "Tapered leg with chrome feet",
    blurb: "Tapered round legs on chrome feet for a lighter, floating stance across desks and linear workstations.",
    hero: img("hero-q7"),
    dark: true,
    variants: variants("q7", "RI Q7 "),
  },
  {
    slug: "ri-2575",
    name: "RI 2575",
    category: "workstations",
    frame: "Rectangular loop frame",
    blurb: "A sturdy rectangular loop frame offered in warm metallic and neutral finishes for cabins and team clusters.",
    hero: img("hero-2575"),
    variants: variants("2575", "RI 2575 "),
  },
  {
    slug: "ri-3060",
    name: "RI 3060 A&B",
    category: "workstations",
    frame: "Slim loop leg, two profiles",
    blurb: "A slim loop leg in two profiles (A & B) for clean, modern desking that scales from one seat to many.",
    hero: img("hero-3060"),
    variants: variants("3060", "RI 3060 A&B "),
  },
  {
    slug: "ri-3080",
    name: "RI 3080",
    category: "workstations",
    frame: "Heavy box-section bridge",
    blurb: "A heavy box-section bridge leg with a substantial presence — ideal for long benching runs.",
    hero: img("hero-3080"),
    dark: true,
    variants: variants("3080", "RI 3080 "),
  },
  {
    slug: "ri-j650",
    name: "RI J-650",
    category: "workstations",
    frame: "Trapezoid loop leg",
    blurb: "A dynamic trapezoid loop leg that gives executive desks and workstations a confident, forward-leaning stance.",
    hero: img("hero-j650"),
    dark: true,
    variants: variants("j650", "RI J-650 "),
  },
  {
    slug: "ri-t10",
    name: "RI T-10",
    category: "workstations",
    frame: "Benching frame with cable trays",
    blurb: "A complete benching frame with integrated cable management, ready for high-density workstation layouts.",
    hero: img("t10-e"),
    variants: variants("t10", "RI T-10 "),
  },
  {
    slug: "ri-j26",
    name: "RI J-26",
    category: "workstations",
    frame: "Tapered A-leg with infill",
    blurb: "Tapered A-legs with optional infill panels — warm, colourful and modern for cabins and team desks.",
    hero: img("j26-1"),
    variants: [
      { label: "RI J-26 Series", image: img("j26-1") },
      { label: "RI J-26 Series", image: img("j26-2") },
      ...variants("j26", "RI J-26 ", "abcde"),
      { label: "RI J-26 Leg options", image: img("j26-legs") },
    ],
  },
  {
    slug: "ri-j27",
    name: "RI J-27",
    category: "workstations",
    frame: "Bent A-leg in bold colour",
    blurb: "A bent A-leg in bold powder-coat colours, bringing energy to modern desks and screened workstations.",
    hero: img("hero-j27"),
    variants: [
      { label: "RI J-27", image: img("j27-1") },
      { label: "RI J-27", image: img("j27-2") },
      { label: "RI J-27", image: img("j27-3") },
      { label: "RI J-27 Leg", image: img("hero-j27") },
    ],
  },
  {
    slug: "ri-j56",
    name: "RI J-56",
    category: "workstations",
    frame: "Bridge A-frame",
    blurb: "A bridge A-frame for clustered workstations with integrated pedestals and fabric screens.",
    hero: img("j56-d"),
    variants: variants("j56", "RI J-56 "),
  },
  {
    slug: "ri-j1213",
    name: "RI J-1213",
    category: "conference",
    frame: "Conference tables",
    blurb: "Generous conference tables on tapered legs, with a sleek centre data strip — made for boardrooms.",
    hero: img("j1213-2"),
    variants: [
      { label: "RI J-1213", image: img("j1213-1") },
      { label: "RI J-1213", image: img("j1213-2") },
    ],
  },
  {
    slug: "ri-y6",
    name: "RI Y-6",
    category: "conference",
    frame: "Sculptural Y-split leg",
    blurb: "A sculptural Y-split leg for meeting and conference tables — a statement piece for any room.",
    hero: img("hero-y6"),
    dark: true,
    variants: [
      { label: "RI Y-6A", image: img("y6-a") },
      { label: "RI Y-6B", image: img("y6-b") },
      { label: "RI Y-6 Leg", image: img("hero-y6") },
    ],
  },
  {
    slug: "executive-cabins",
    name: "Executive Cabins",
    category: "executive",
    frame: "Wooden works",
    blurb: "Executive tables, L-desks and cabin storage in rich wood laminates — crafted in-house on CNC wood machinery.",
    hero: img("exec-1-1"),
    variants: [1, 2, 3, 4].flatMap((p) =>
      [1, 2, 3, 4].map((i) => ({ label: `Executive Desk ${String((p - 1) * 4 + i).padStart(2, "0")}`, image: img(`exec-${p}-${i}`) }))
    ),
  },
  {
    slug: "classroom-and-shelves",
    name: "Book Shelves & Classroom Desks",
    category: "education",
    frame: "Education furniture",
    blurb: "Colourful classroom desks, activity tables, cubby shelves, study carrels and lecture seating for schools and institutes.",
    hero: img("classroom-02"),
    variants: numbered("classroom", 12, "Classroom"),
  },
  {
    slug: "computer-and-library",
    name: "Computer & Library",
    category: "computer",
    frame: "Study & computer desks",
    blurb: "Computer tables, study desks with storage and library units — compact, practical and finished to last.",
    hero: img("computer-04"),
    variants: numbered("computer", 12, "Computer & Library"),
  },
];

export const getSeries = (slug) => series.find((s) => s.slug === slug);
// Leg-frame renders shot on light studio backdrops, used for the home showcase.
export const frameSeries = ["ri-1213", "ri-a50", "ri-b50", "ri-c50", "ri-2575", "ri-3060", "ri-j27"].map(getSeries);

// Lead with a bright room shot where the leg-frame render sits on a black studio backdrop.
for (const s of series) s.cover = s.dark ? s.variants[0].image : s.hero;

// Client logos for the home page strip. Clients without a usable public logo — or whose
// insignia carries the State Emblem of India (Navy, Railways), which private firms may not
// use commercially — are shown by name instead.
export const clientLogos = [
  { name: "Reserve Bank of India", logo: "/clients/rbi.png" },
  { name: "N.F. Railway" },
  { name: "IIT Kanpur", logo: "/clients/iit-kanpur.png" },
  { name: "ICF Chennai" },
  { name: "IIM Rohtak", logo: "/clients/iim-rohtak.png" },
  { name: "ABV-IIITM Gwalior" },
  { name: "NIT Hamirpur", logo: "/clients/nit-hamirpur.png" },
  { name: "CIPET" },
  { name: "NIT Agartala", logo: "/clients/nit-agartala.png" },
  { name: "Naval Base Kochi" },
  { name: "Kendriya Vidyalaya Sangathan", logo: "/clients/kvs.png" },
  { name: "PWD Dibrugarh" },
  { name: "Canara Bank", logo: "/clients/canara.png" },
  { name: "Tool Room Tinsukia" },
];
