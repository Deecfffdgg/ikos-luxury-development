// IKOS Luxury Developments — State Management & Content Layer (CMS)
// Wired for instant dynamic updates without code edits.

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  location: string;
  scale: string; // e.g., "14,200 sq. ft."
  materials: string[];
  features: string[];
  phase: string; // e.g., "Phase 4: Finishing Touches"
  progress: number; // percentage
  completionYear: string;
  collaborators: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  projectScale: string;
  location: string;
}

export interface LiveBuildStatus {
  id: string;
  projectName: string;
  currentPhase: string;
  percentage: number;
  lastUpdated: string;
  metrics: string[];
  notes: string;
}

export interface CorporateData {
  location: {
    address: string;
    cityStateZip: string;
    phone: string;
    email: string;
  };
  founders: {
    elena: {
      name: string;
      title: string;
      experience: string;
      bio: string;
    };
    stamos: {
      name: string;
      title: string;
      experience: string;
      bio: string;
    };
  };
  coreDifferentiator: {
    title: string;
    description: string;
  };
}

// Simulated dynamic CMS State. In a production environment, this is hydrated from
// standard webhooks or remote API endpoints (e.g., Contentful / Sanity).
const portfolioData: Project[] = [
  {
    slug: "glass-pavilion",
    title: "The Glass Pavilion",
    subtitle: "A crystalline sanctuary floating above natural contours",
    description: "An ultra-minimalist architectural marvel blending floor-to-ceiling high-performance structural glass with cantilevered raw concrete roofs.",
    longDescription: "Sited majestically overlooking the Springbank valley, The Glass Pavilion represents the zenith of modernist residential design. Emphasizing absolute structural transparency, the perimeter features custom double-glazed structural panels with razor-thin profiles, framing panoramic vistas of the Rocky Mountains. Floating concrete slabs project outward, providing passive solar shading while establishing a dramatic horizontal presence. Inside, the limestone floors flow seamlessly from the interior hearth to the outer terraces, dissolving the boundary between nature and shelter.",
    imageUrl: "https://ikosluxurydevelopments.com/wp-content/uploads/2024/11/IKOS-Home1-edit-1-WMK.jpg",
    location: "Springbank — Calgary, AB",
    scale: "14,200 sq. ft.",
    materials: ["Structural Low-E Glass", "Cantilevered Raw Concrete", "Travertine Limestone", "Hand-Rubbed Bronze Panels"],
    features: ["Acoustically insulated subterranean theater", "100-foot infinity swimming pool", "Automated smart thermal envelope", "Geothermal radiant climate grid"],
    phase: "Phase 5: Custom Fit-Out & Landscaping",
    progress: 94,
    completionYear: "2026",
    collaborators: ["IKOS Studio", "Studio Marfa (Interiors)", "Lévesque Structural Ltd"]
  },
  {
    slug: "minimalist-concrete",
    title: "The Minimalist Monolith",
    subtitle: "Raw board-formed concrete meets architectural silence",
    description: "An introverted masterpiece constructed from monolithic board-formed obsidian concrete and carbon-treated Shou Sugi Ban cedar.",
    longDescription: "Carved into the rugged banks of the Elbow River, The Minimalist Monolith is a study in raw materiality and silent power. The structure utilizes custom-pigmented dark concrete, poured on-site into narrow wooden frameworks to imprint a rich, tactile timber grain texture. Strategically placed skylights and geometric cutouts puncture the concrete skin, funneling dramatic shafts of sunlight onto dark basalt stone walls. Its design offers ultimate privacy from the public front, opening entirely to a private internal courtyard oriented around a single ancient pine tree.",
    imageUrl: "https://ikosluxurydevelopments.com/wp-content/uploads/2025/01/IKOS-Home6-1-WMK.jpg",
    location: "Elbow River — Calgary, AB",
    scale: "8,400 sq. ft.",
    materials: ["Pigmented Board-Formed Concrete", "Carbonized Shou Sugi Ban Cedar", "Honed Basalt Floor Slabs", "Architectural Bronze Frames"],
    features: ["Hidden courtyard with reflective black pond", "Sublevel professional wellness spa & cold plunge", "Custom-cast raw concrete wood-burning hearth", "Retractable triple-paned structural glazing"],
    phase: "Phase 3: Structural Frameworks & Concrete Curing",
    progress: 68,
    completionYear: "2027",
    collaborators: ["IKOS Studio", "Aethelgard Engineering", "Vanguard Landscape Design"]
  },
  {
    slug: "obsidian-suite",
    title: "The Obsidian Suite",
    subtitle: "Cinematic proportions and hand-detailed luxury",
    description: "An high-altitude sky-estate detailed with bookmatched Calacatta marble, floating bronze stairs, and custom architectural plaster.",
    longDescription: "Suspended high above Calgary's historic Mount Royal skyline, this bespoke penthouse is a tour de force of custom interior architecture. Designed for an avid art collector, the layout features double-height galleries with shadow-line gallery baseboards and museum-grade multi-directional lighting. A sculptural, floating steel stair wrapped in brushed bronze sheet acts as the centerpiece, rising elegantly to a mezzanine library. Raw oak parquet floors, wire-brushed and hand-waxed, create a rich organic counterweight to the soaring walls of hand-applied Marmorino Venetian plaster.",
    imageUrl: "https://ikosluxurydevelopments.com/wp-content/uploads/2024/11/IKOS-Home3-edit-1-WMK.png",
    location: "Mount Royal — Calgary, AB",
    scale: "6,500 sq. ft.",
    materials: ["Bookmatched Calacatta Marble", "Brushed Bronze Plating", "Marmorino Venetian Plaster", "Quarter-Sawn Smoked Oak"],
    features: ["Private high-speed keycard-access elevator", "Temperature-controlled 600-bottle glass wine cellar", "Custom automated bronze fireplace hearth", "Automated motorized silk-draped acoustic partitions"],
    phase: "Phase 4: Architectural Finishes & Custom Joinery",
    progress: 82,
    completionYear: "2026",
    collaborators: ["IKOS Studio", "Harkness Fine Metalworks", "Belvedere Joinery Studio"]
  }
];

const testimonialData: Testimonial[] = [
  {
    id: "1",
    quote: "IKOS did not just build a home; they curated an architectural symphony. The glass detailing in our pavilion captures the raw Albertan sunrise with an ethereal clarity that is impossible to articulate.",
    author: "Lady Genevieve Vance",
    projectScale: "The Glass Pavilion",
    location: "Springbank — Calgary, AB"
  },
  {
    id: "2",
    quote: "The board-formed concrete is a tactile masterpiece. Its brutalist elegance, blended with warm bronze highlights, stands as a testament to what is possible when design meets raw devotion.",
    author: "Marcus Aurelius Thorne",
    projectScale: "The Minimalist Monolith",
    location: "Elbow River — Calgary, AB"
  },
  {
    id: "3",
    quote: "Every inch of the interior is a masterclass in custom joinery and spatial alignment. The architectural scale of the bronze details commands respect while remaining entirely intimate.",
    author: "Alistair & Vivienne Sterling",
    projectScale: "The Obsidian Suite",
    location: "Mount Royal — Calgary, AB"
  }
];

const liveBuildData: LiveBuildStatus[] = [
  {
    id: "status-glass-pavilion",
    projectName: "The Glass Pavilion",
    currentPhase: "Finishing Touches & Landscaping",
    percentage: 94,
    lastUpdated: "2 hours ago",
    metrics: [
      "Custom double-glazed glass panels certified to -40°C thermal envelope",
      "Travertine terrace tiling completed; underfloor hydronic heating system operational",
      "Subterranean home cinema calibrated to THX audio reference specs"
    ],
    notes: "Currently installing bespoke brass cabinetry handles and preparing the perimeter for mature pine forest transplants."
  },
  {
    id: "status-obsidian-monolith",
    projectName: "The Minimalist Monolith",
    currentPhase: "Structural Framing & Shell Curing",
    percentage: 68,
    lastUpdated: "4 hours ago",
    metrics: [
      "Final pouring of pigmented board-formed concrete shear walls completed",
      "Shou Sugi Ban charred cedar cladding delivered and treatment inspected",
      "Under-slab plumbing and electrical layouts tested and pressure-certified"
    ],
    notes: "Core shell is curing. Formwork stripping is underway to reveal the wood-grain imprint on concrete face. Roof joists are being installed."
  },
  {
    id: "status-mount-royal",
    projectName: "The Obsidian Suite",
    currentPhase: "Bespoke Carpentry & Wall Finishes",
    percentage: 82,
    lastUpdated: "1 hour ago",
    metrics: [
      "Venetian plastering (Marmorino style) 100% completed on all high-ceilings",
      "Floating bronze-plated staircase anchors structural testing passed",
      "Climate control systems calibrated to custom humidity levels for art storage"
    ],
    notes: "Joinery installation is in full effect. Millworkers are dry-fitting the smoked oak wardrobe frames in the master suite."
  }
];

const corporateData: CorporateData = {
  location: {
    address: "Suite 213, 315 – 8th Avenue SW",
    cityStateZip: "Calgary, Alberta (T2P 4K1)",
    phone: "403-630-9346",
    email: "curator@ikosdevelopments.com"
  },
  founders: {
    elena: {
      name: "Elena Achilleos",
      title: "Principal of Aesthetics",
      experience: "40+ years in European luxury designer fashion",
      bio: "Elena Achilleos brings over four decades of European luxury curation as the co-owner of Calgary's iconic high-fashion destination, La Chic. Her legacy is one of absolute visual refinement, sharp proportions, and an intuitive understanding of textiles, rare materials, and spatial harmony. At IKOS, Elena steers the aesthetic direction, establishing bespoke specifications, hand-selected plaster treatments, and international partnerships with elite artisanal workshops in Milan, Paris, and Athens."
    },
    stamos: {
      name: "Stamos Chalapas",
      title: "Principal of Operations",
      experience: "30+ years in financial risk & project management",
      bio: "Stamos Chalapas commands over thirty years of high-altitude execution in international capital projects, financial risk modeling, and complex structural coordination. His engineering-focused, risk-calculated operational framework ensures that IKOS's bold architectural visions are delivered with flawless schedule discipline, structural precision, and meticulous fiscal transparency. Under Stamos's command, every client commission becomes a study in bulletproof project mechanics and structural immortality."
    }
  },
  coreDifferentiator: {
    title: "End-to-End Structural Curation",
    description: "IKOS is built upon our exclusive, direct partnerships with prestigious international interior design firms and European fabricators. Unlike standard boutique home builders, we manage the entire material and design supply chain—from custom-cast board-formed obsidian concrete in Calgary to bookmatched Calacatta marble extracted from private Tuscan quarries. This end-to-end integration guarantees absolute visual continuity and unparalleled structural integrity."
  }
};

// Helper functions for dynamic routing and templates
export async function getProjects(): Promise<Project[]> {
  return portfolioData;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return portfolioData.find(project => project.slug === slug);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonialData;
}

export async function getLiveBuildStatuses(): Promise<LiveBuildStatus[]> {
  return liveBuildData;
}

export function getCorporateData(): CorporateData {
  return corporateData;
}
