/**
 * Evronya Shokry Naguib - Portfolio Projects Data System
 * Reusable project architecture. Add new projects here easily without altering UI structure.
 */

const PROJECTS_DATA = [
  {
    id: 1,
    slug: "hirono-little-mischief-blind-box",
    title: 'Hirono "Little Mischief" Blind Box',
    fullTitle: 'Hirono "Little Mischief" Figurines Blind Box',
    category: "Packaging Design",
    categorySlug: "packaging",
    subCategory: "Collectibles & Art Toy Packaging / Character Packaging",
    featured: true,
    priorityOrder: 1,
    shortDesc: "A mysterious Blind Box packaging concept for the Hirono 'Little Mischief' art toy collection, combining contemporary graphic collage with an emotional and mysterious visual language.",
    concept: "The design uses a vintage collage and abstract newspaper-inspired aesthetic in black and white, with red accents used as a strong visual highlight. The composition communicates mystery, emotion, and collectible culture.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    role: "Packaging & Graphic Designer",
    responsibilities: [
      "Visual collage composition",
      "Graphic elements & typography",
      "Blind Box packaging layout",
      "Character presentation system",
      "Available character display matrix",
      "Secret character presentation treatment"
    ],
    focus: [
      "Art Toy Packaging",
      "Graphic Collage",
      "Typography",
      "Visual Storytelling",
      "Packaging Layout",
      "Character Presentation"
    ],
    mainImage: "assets/placeholders/project-01-hirono.svg",
    galleryImages: [
      "assets/placeholders/project-01-hirono.svg",
      "assets/placeholders/project-01-hirono-box.svg",
      "assets/placeholders/project-01-hirono-dieline.svg"
    ],
    colorAccent: "#e63946"
  },
  {
    id: 2,
    slug: "draco-phoenix-character-sheet",
    title: "Draco Phoenix — Mythical Character Sheet",
    fullTitle: "Draco Phoenix — Mythical Character Sheet",
    category: "Concept Art",
    categorySlug: "concept-art",
    subCategory: "Concept Art / Creature Design",
    featured: true,
    priorityOrder: 2,
    shortDesc: "A mythical character development sheet combining the characteristics of a powerful dragon and a majestic phoenix, presented as an ancient illustrated bestiary manuscript.",
    concept: "The concept combines the strength and ferocity of a dragon with the majesty and symbolism of the phoenix. The parchment-inspired presentation documents the creature's eye, feathers, scales, anatomy, textures, and color palette.",
    tools: ["Adobe Photoshop", "Digital Painting Tools"],
    role: "Digital Artist & Concept Creator",
    responsibilities: [
      "Creature concept & silhouette ideation",
      "Digital painting & anatomical detailing",
      "Character development sheet layout",
      "Anatomical callout studies (eye, feather, scale)",
      "Color palette research and development",
      "Ancient manuscript visual styling"
    ],
    focus: [
      "Creature Design",
      "Concept Art",
      "Digital Painting",
      "Character Development",
      "World Building",
      "Visual Research"
    ],
    mainImage: "assets/placeholders/project-02-draco-phoenix.svg",
    galleryImages: [
      "assets/placeholders/project-02-draco-phoenix.svg",
      "assets/placeholders/project-02-draco-anatomy.svg"
    ],
    colorAccent: "#f4a261"
  },
  {
    id: 3,
    slug: "guerlain-shalimar-parfum-initial",
    title: "Guerlain Shalimar Parfum Initial",
    fullTitle: "Guerlain Shalimar Parfum Initial Visual Ad",
    category: "Commercial Ads",
    categorySlug: "commercial-ads",
    subCategory: "Social Media Ad / Luxury Product Manipulation",
    featured: true,
    priorityOrder: 3,
    shortDesc: "A sophisticated advertising visual for a luxury perfume focusing on elegance, calmness, refined lighting, and premium product presentation.",
    concept: "Warm nude and earthy tones create an elegant environment around the perfume bottle. Architectural elements, soft shadows, and refined glass reflections communicate a classic Parisian luxury aesthetic.",
    tools: ["Adobe Photoshop"],
    role: "Digital Manipulation Artist",
    responsibilities: [
      "High-end luxury bottle retouching",
      "Architectural environment staging",
      "Glass refraction & specular reflection tuning",
      "Soft natural shadow casting",
      "Subtle color harmony & grading"
    ],
    focus: [
      "Luxury Advertising",
      "Product Manipulation",
      "Lighting & Speculars",
      "Glass Reflections",
      "Editorial Composition",
      "Color Grading"
    ],
    mainImage: "assets/placeholders/project-03-guerlain-shalimar.svg",
    galleryImages: [
      "assets/placeholders/project-03-guerlain-shalimar.svg",
      "assets/placeholders/project-03-guerlain-detail.svg"
    ],
    colorAccent: "#d4af37"
  },
  {
    id: 4,
    slug: "dragon-kings-throne-room",
    title: "The Dragon King's Throne Room",
    fullTitle: "The Dragon King's Throne Room",
    category: "Concept Art",
    categorySlug: "concept-art",
    subCategory: "Digital Painting / Environment Design",
    featured: true,
    priorityOrder: 4,
    shortDesc: "An epic fantasy environment depicting a dramatic dragon throne sanctuary surrounded by monumental stone architecture, fire, and royal symbolism.",
    concept: "The scene explores dark fantasy and royal power. A monumental black throne inspired by dragon wings dominates the environment, surrounded by fiery openings, stone textures, and dragon symbols.",
    tools: ["Adobe Photoshop", "Midjourney", "Digital Composition Tools"],
    role: "Digital Composite & Environment Artist",
    responsibilities: [
      "Environment architectural construction",
      "Digital composition and atmospheric perspective",
      "Volumetric lighting and flame illumination",
      "Shadow control and chiaroscuro depth",
      "Architectural detailing & royal insignia",
      "Surface texture treatment (granite, obsidian, molten gold)"
    ],
    focus: [
      "Environment Design",
      "Digital Painting",
      "Dark Fantasy",
      "Lighting & Atmosphere",
      "Cinematic Composition",
      "World Building"
    ],
    mainImage: "assets/placeholders/project-04-dragon-throne.svg",
    galleryImages: [
      "assets/placeholders/project-04-dragon-throne.svg",
      "assets/placeholders/project-04-dragon-lighting.svg"
    ],
    colorAccent: "#ff5400"
  },
  {
    id: 5,
    slug: "red-bull-energy-on-the-go",
    title: 'Red Bull "Energy On The Go"',
    fullTitle: 'Red Bull "Energy On The Go" Social Media Campaign',
    category: "Commercial Ads",
    categorySlug: "commercial-ads",
    subCategory: "Commercial Manipulation / Advertising Campaign",
    featured: true,
    priorityOrder: 5,
    shortDesc: "A dynamic advertising concept connecting energy with speed, adventure, movement, and high-intensity experiences.",
    concept: "A winding asphalt road wraps around the product while fast-moving cars, a paraglider, smoke, and explosive visual elements create a sense of speed and adrenaline.",
    tools: ["Adobe Photoshop"],
    role: "Commercial Graphic Designer",
    responsibilities: [
      "Dynamic road wrapping composition around can",
      "High-speed sports action element integration",
      "Smoke, sparks, and kinetic particle creation",
      "Motion blur vectoring & speed trails",
      "Bold brand typography & slogan integration"
    ],
    focus: [
      "Commercial Manipulation",
      "Advertising Campaign",
      "Dynamic Composition",
      "Visual Effects & Particles",
      "Motion Illusion",
      "Typography"
    ],
    mainImage: "assets/placeholders/project-05-redbull.svg",
    galleryImages: [
      "assets/placeholders/project-05-redbull.svg",
      "assets/placeholders/project-05-redbull-motion.svg"
    ],
    colorAccent: "#e60026"
  },
  {
    id: 6,
    slug: "toy-story-kids-hexagonal-box",
    title: "Toy Story Kids Collection Box",
    fullTitle: "Toy Story Kids Collection — Hexagonal Window Box",
    category: "Packaging Design",
    categorySlug: "packaging",
    subCategory: "Toy Packaging / Structural Packaging Design",
    featured: true,
    priorityOrder: 6,
    shortDesc: "An innovative hexagonal packaging concept for a children's toy collection featuring a transparent circular window that reveals the product inside.",
    concept: "The geometric hexagonal structure creates an interactive and playful package. A circular transparent window allows the product to become part of the visual experience, while cheerful graphics and a calm blue background create a sense of fun and adventure.",
    tools: ["Adobe Illustrator", "3ds Max", "Adobe Photoshop"],
    role: "Structural & Graphic Packaging Designer",
    responsibilities: [
      "Structural dieline creation & folding geometry",
      "Hexagonal packaging construction test",
      "Cutting areas & die-cut tolerance calculations",
      "Transparent circular window placement",
      "Graphic composition & playful character branding",
      "3D photorealistic packaging visualization"
    ],
    focus: [
      "Structural Packaging",
      "Dieline Design",
      "3D Mockup & Rendering",
      "Toy Packaging",
      "Graphic Composition",
      "Color Psychology"
    ],
    mainImage: "assets/placeholders/project-06-toystory.svg",
    galleryImages: [
      "assets/placeholders/project-06-toystory.svg",
      "assets/placeholders/project-06-toystory-dieline.svg"
    ],
    colorAccent: "#0077b6"
  },
  {
    id: 7,
    slug: "the-beasts-nest-knight-encounter",
    title: "The Beast's Nest — Knight Encounter",
    fullTitle: "The Beast's Nest — Knight Encounter",
    category: "Concept Art",
    categorySlug: "concept-art",
    subCategory: "Photo Manipulation / Matte Painting",
    featured: true,
    priorityOrder: 7,
    shortDesc: "A dramatic fantasy composition depicting a confrontation between a classic warrior and a gigantic Komodo dragon protecting its glowing eggs.",
    concept: "The scene focuses on dramatic scale contrast between the human warrior and the enormous creature. Warm orange firelight from the eggs contrasts with the cool blue environment and distant castle, creating a cinematic atmosphere.",
    tools: ["Adobe Photoshop"],
    role: "Digital Artist & Photo Manipulator",
    responsibilities: [
      "Multi-element compositing of warrior, beast, and terrain",
      "Perspective matching & foreshortening adjustments",
      "Extreme scale manipulation and depth cues",
      "Warm bioluminescent egg light vs. cold twilight balance",
      "Firelight rim integration on knight armor",
      "Atmospheric dust and mist particle painting"
    ],
    focus: [
      "Photo Manipulation",
      "Matte Painting",
      "Cinematic Composition",
      "Scale & Proportion",
      "Lighting & Rim Light",
      "Visual Storytelling"
    ],
    mainImage: "assets/placeholders/project-07-beasts-nest.svg",
    galleryImages: [
      "assets/placeholders/project-07-beasts-nest.svg",
      "assets/placeholders/project-07-beasts-lighting.svg"
    ],
    colorAccent: "#ff9e00"
  },
  {
    id: 8,
    slug: "el-abd-chocolate-chip-cookies",
    title: "El Abd Chocolate Chip Cookies",
    fullTitle: "El Abd Chocolate Chip Cookies Packaging Redesign",
    category: "Packaging Design",
    categorySlug: "packaging",
    subCategory: "Packaging Design / FMCG",
    featured: true,
    priorityOrder: 8,
    shortDesc: "A classic chocolate chip cookie packaging concept designed to communicate quality, warmth, familiarity, and a friendly family-oriented character.",
    concept: "The concept combines the comforting feeling of traditional homemade baking with a contemporary visual language. Warm beige and chocolate tones are combined with playful cookie illustrations to create a welcoming and approachable package.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    role: "Packaging Designer & Dieline Creator",
    responsibilities: [
      "Structural folding carton dieline layout",
      "Visual element placement and brand hierarchy",
      "Custom typography and appetite appeal headlines",
      "Product information and shelf standout layout",
      "Ingredients and regulatory nutritional table layout",
      "Pre-press prep and color separation compliance"
    ],
    focus: [
      "FMCG Packaging",
      "Brand Communication",
      "Dieline Engineering",
      "Appetite Appeal Typography",
      "Custom Illustration",
      "Print Design"
    ],
    mainImage: "assets/placeholders/project-08-elabd-cookies.svg",
    galleryImages: [
      "assets/placeholders/project-08-elabd-cookies.svg",
      "assets/placeholders/project-08-elabd-dieline.svg"
    ],
    colorAccent: "#7f4f24"
  },
  {
    id: 9,
    slug: "fire-grilled-burger-delivery-ad",
    title: "Fire-Grilled Burger Speed Delivery",
    fullTitle: "Fire-Grilled Burger Speed Delivery Ad",
    category: "Commercial Ads",
    categorySlug: "commercial-ads",
    subCategory: "Social Media Manipulation / Fast Food Campaign",
    featured: true,
    priorityOrder: 9,
    shortDesc: "A high-energy fast-food advertising concept communicating heat, speed, grilled flavor, and rapid delivery.",
    concept: "Flames surround the burger while tomato-based visual elements are transformed into dynamic wheels, creating a visual metaphor for speed and fast delivery.",
    tools: ["Adobe Photoshop"],
    role: "Visual Manipulation Artist",
    responsibilities: [
      "Burger food styling retouching & texture boost",
      "Dynamic flame extraction and thermal lighting",
      "Tomato slice to wheels visual metaphor composite",
      "Motion streaking, smoke, and ember particles",
      "Punchy commercial typography & CTA integration"
    ],
    focus: [
      "Food Advertising",
      "Photo Manipulation",
      "Fire & Heat Effects",
      "Visual Metaphor",
      "Dynamic Composition",
      "Commercial Storytelling"
    ],
    mainImage: "assets/placeholders/project-09-burger-speed.svg",
    galleryImages: [
      "assets/placeholders/project-09-burger-speed.svg",
      "assets/placeholders/project-09-burger-effects.svg"
    ],
    colorAccent: "#e71d36"
  },
  {
    id: 10,
    slug: "moonlight-serpent-sanctuary",
    title: "Moonlight Serpent Sanctuary",
    fullTitle: "Moonlight Serpent Sanctuary",
    category: "Concept Art",
    categorySlug: "concept-art",
    subCategory: "Photo Manipulation / Fantasy Art",
    featured: false,
    priorityOrder: 10,
    shortDesc: "A mystical fantasy composition depicting a giant serpent protecting a glowing blue egg beneath a full moon.",
    concept: "The artwork focuses on mystery and magical atmosphere through blue and cyan-green tones. The glowing egg becomes the primary focal point, surrounded by moonlight, clouds, and the serpent.",
    tools: ["Adobe Photoshop"],
    role: "Digital & Photo Manipulation Artist",
    responsibilities: [
      "Multi-element compositing of serpent scales and environment",
      "Magical bioluminescent lighting and ethereal glow effects",
      "Background mountain and cloud atmosphere treatment",
      "Moonlight specular highlights and water reflections",
      "Cyan-teal and midnight blue color grading"
    ],
    focus: [
      "Fantasy Art",
      "Photo Manipulation",
      "Color Grading",
      "Atmospheric Lighting",
      "Bioluminescence",
      "Visual Storytelling"
    ],
    mainImage: "assets/placeholders/project-10-moonlight-serpent.svg",
    galleryImages: [
      "assets/placeholders/project-10-moonlight-serpent.svg",
      "assets/placeholders/project-10-moonlight-details.svg"
    ],
    colorAccent: "#00b4d8"
  },
  {
    id: 11,
    slug: "golden-amber-luxury-perfume",
    title: "Golden Amber Luxury Perfume",
    fullTitle: "Golden Amber Luxury Perfume Concept",
    category: "Commercial Ads",
    categorySlug: "commercial-ads",
    subCategory: "Commercial Product Manipulation / Visual Advertising",
    featured: false,
    priorityOrder: 11,
    shortDesc: "An abstract luxury perfume advertising concept combining geometric forms, water reflections, warm colors, and dynamic composition.",
    concept: "The visual combines refreshing water movement with warm spherical forms and a golden-orange geometric frame to create a balance between freshness, warmth, luxury, and modernity.",
    tools: ["Adobe Photoshop"],
    role: "Visual & Composite Artist",
    responsibilities: [
      "Water caustics and fluid movement compositing",
      "Warm spherical geometry integration",
      "Gold leaf texture treatment and frame alignment",
      "Refined glass bottle refraction and amber liquid shading",
      "Harmonious warm-cool color grading"
    ],
    focus: [
      "Product Advertising",
      "Abstract Composition",
      "Water Effects & Caustics",
      "Glass Reflections",
      "Geometric Aesthetics",
      "Color Balance"
    ],
    mainImage: "assets/placeholders/project-11-golden-amber.svg",
    galleryImages: [
      "assets/placeholders/project-11-golden-amber.svg",
      "assets/placeholders/project-11-golden-geometry.svg"
    ],
    colorAccent: "#ffb703"
  },
  {
    id: 12,
    slug: "lozzano-mojito-splash",
    title: "Lozzano Mojito Splash",
    fullTitle: "Lozzano Mojito Splash Social Media Ad",
    category: "Commercial Ads",
    categorySlug: "commercial-ads",
    subCategory: "Product Manipulation / Refreshment Advertising",
    featured: false,
    priorityOrder: 12,
    shortDesc: "A refreshing beverage advertising concept featuring water splashes, floating lime pieces, mint leaves, and a vibrant green environment.",
    concept: "The composition creates high energy and freshness through dynamic water movement, flying ingredients, condensation, and vivid color.",
    tools: ["Adobe Photoshop"],
    role: "Digital Manipulation Artist",
    responsibilities: [
      "High-velocity liquid splash synthesis and blending",
      "Floating lime slice and fresh mint leaf physics composition",
      "Can surface condensation beads and droplets",
      "Vibrant lime-green ambient environment lighting",
      "Dynamic focal depth and motion blur on flying elements"
    ],
    focus: [
      "Beverage Advertising",
      "Water Splash Dynamics",
      "Product Manipulation",
      "Condensation & Lighting",
      "Motion Effects",
      "Freshness Communicator"
    ],
    mainImage: "assets/placeholders/project-12-lozzano-mojito.svg",
    galleryImages: [
      "assets/placeholders/project-12-lozzano-mojito.svg",
      "assets/placeholders/project-12-lozzano-splash.svg"
    ],
    colorAccent: "#2ec4b6"
  },
  {
    id: 13,
    slug: "blueberry-bath-bomb-packaging",
    title: "Blueberry Bath Bomb Packaging",
    fullTitle: "Blueberry Bath Bomb Packaging Design",
    category: "Packaging Design",
    categorySlug: "packaging",
    subCategory: "Cosmetic & Personal Care Packaging",
    featured: false,
    priorityOrder: 13,
    shortDesc: "A refreshing and contemporary packaging concept for a blueberry bath bomb inspired by relaxation, freshness, and an enjoyable bath-time experience.",
    concept: "The visual direction uses sky-blue tones, bubbles, and playful blueberry illustrations to communicate freshness, cleanliness, relaxation, and natural fragrance.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    role: "Visual Identity & Packaging Designer",
    responsibilities: [
      "Structural box dieline creation",
      "Graphic design & layout system",
      "Bubble illustration and effervescent accents",
      "Product information and scent profile layout",
      "Typography pairing (editorial sans + script)",
      "3D mockup presentation and rendering"
    ],
    focus: [
      "Cosmetic Packaging",
      "Visual Identity",
      "Custom Illustration",
      "Color Palette",
      "Clean Typography",
      "Packaging Layout"
    ],
    mainImage: "assets/placeholders/project-13-blueberry-bath.svg",
    galleryImages: [
      "assets/placeholders/project-13-blueberry-bath.svg",
      "assets/placeholders/project-13-blueberry-dieline.svg"
    ],
    colorAccent: "#4361ee"
  },
  {
    id: 14,
    slug: "noxiceylon-blackberry-jam",
    title: "Noxiceylon Blackberry Jam",
    fullTitle: "Noxiceylon Blackberry Jam Packaging Presentation",
    category: "Commercial Ads",
    categorySlug: "commercial-ads",
    subCategory: "Product Manipulation / Luxury Food Packaging Ad",
    featured: false,
    priorityOrder: 14,
    shortDesc: "A premium advertising presentation for 100% natural blackberry jam.",
    concept: "The jar is surrounded by fresh blackberries and dark rich tones to create a sophisticated, premium, natural food aesthetic.",
    tools: ["Adobe Photoshop"],
    role: "Visual Designer",
    responsibilities: [
      "Moody dark-mode art direction and product staging",
      "Fresh blackberry fruit cluster placement & water droplets",
      "Rich jam glossiness and light transmission through glass",
      "Deep shadowy depth map and vignette creation",
      "Artisanal brand badge and label enhancement"
    ],
    focus: [
      "Food Advertising",
      "Product Presentation",
      "Dark Moody Art Direction",
      "Color Grading",
      "Depth & Atmosphere",
      "Premium Composition"
    ],
    mainImage: "assets/placeholders/project-14-noxiceylon-jam.svg",
    galleryImages: [
      "assets/placeholders/project-14-noxiceylon-jam.svg",
      "assets/placeholders/project-14-noxiceylon-staging.svg"
    ],
    colorAccent: "#7209b7"
  },
  {
    id: 15,
    slug: "tender-moisturizing-cream",
    title: "Tender Moisturizing Cream",
    fullTitle: "Tender Moisturizing Cream Mineral Concept",
    category: "Commercial Ads",
    categorySlug: "commercial-ads",
    subCategory: "Cosmetic Manipulation / Skincare Visual",
    featured: false,
    priorityOrder: 15,
    shortDesc: "A premium skincare advertising concept inspired by natural minerals, softness, purity, and calmness.",
    concept: "The product is placed on a refined platform surrounded by smooth icy-blue stones and marble textures to communicate purity, softness, and natural mineral ingredients.",
    tools: ["Adobe Photoshop"],
    role: "Digital Composite Artist",
    responsibilities: [
      "Mineral pedestal and organic stone compositing",
      "Soft diffuse studio lighting and caustics",
      "Cosmetic cream texture ripple detailing",
      "Pure icy-blue and serene off-white palette balance",
      "High-end beauty editorial retouching"
    ],
    focus: [
      "Cosmetic Advertising",
      "Product Manipulation",
      "Natural Materials",
      "Art Direction",
      "Soft Diffuse Lighting",
      "Serene Color Grading"
    ],
    mainImage: "assets/placeholders/project-15-tender-cream.svg",
    galleryImages: [
      "assets/placeholders/project-15-tender-cream.svg",
      "assets/placeholders/project-15-tender-minerals.svg"
    ],
    colorAccent: "#48cae4"
  },
  {
    id: 16,
    slug: "k2-strawberry-juice-immune-booster",
    title: "K2 Strawberry Juice Booster",
    fullTitle: "K2 Strawberry Juice 'Immune Booster' Visual Ad",
    category: "Commercial Ads",
    categorySlug: "commercial-ads",
    subCategory: "Social Media Ad / Beverage Campaign",
    featured: false,
    priorityOrder: 16,
    shortDesc: "A vibrant commercial visual for natural strawberry juice focusing on freshness, nutrition, and energetic visual communication.",
    concept: "The product is surrounded by fresh strawberries and green leaves, using warm red tones to create an energetic and appetizing composition.",
    tools: ["Adobe Photoshop"],
    role: "Graphic & Manipulation Designer",
    responsibilities: [
      "Juicy strawberry fruit macro retouching and glistening dew",
      "Fresh mint/strawberry leaf swirling vortex composition",
      "Dynamic red splash droplets and liquid flow",
      "Vibrant high-contrast commercial color calibration",
      "Social media headline & immune booster badge design"
    ],
    focus: [
      "Beverage Advertising",
      "Product Manipulation",
      "Food Styling",
      "Typography & Badges",
      "Vibrant Color",
      "Energetic Composition"
    ],
    mainImage: "assets/placeholders/project-16-k2-strawberry.svg",
    galleryImages: [
      "assets/placeholders/project-16-k2-strawberry.svg",
      "assets/placeholders/project-16-k2-splash.svg"
    ],
    colorAccent: "#f72585"
  },
  {
    id: 17,
    slug: "almarai-pure-orange-juice",
    title: "Almarai Pure Orange Juice",
    fullTitle: "Almarai Pure Orange Juice Commercial Concept",
    category: "Commercial Ads",
    categorySlug: "commercial-ads",
    subCategory: "Social Media Manipulation / FMCG Product Presentation",
    featured: false,
    priorityOrder: 17,
    shortDesc: "A natural orange juice advertising concept focused on freshness, purity, natural ingredients, and product quality.",
    concept: "The product emerges directly from a fresh orange, surrounded by natural leaves, creating a visual metaphor for freshness and natural origin.",
    tools: ["Adobe Photoshop"],
    role: "Manipulation Artist",
    responsibilities: [
      "Visual metaphor execution: bottle emerging from fruit",
      "Orange peel curl and pulp texture preservation",
      "Golden citrus splash droplets and ambient glow",
      "Fresh orchard leaf composition with morning dew",
      "Clean commercial lighting matching natural sunlight"
    ],
    focus: [
      "FMCG Advertising",
      "Product Manipulation",
      "Natural Ingredients Metaphor",
      "Composition & Symmetry",
      "Warm Citrus Lighting",
      "Commercial Freshness"
    ],
    mainImage: "assets/placeholders/project-17-almarai-orange.svg",
    galleryImages: [
      "assets/placeholders/project-17-almarai-orange.svg",
      "assets/placeholders/project-17-almarai-details.svg"
    ],
    colorAccent: "#fb8500"
  },
  {
    id: 18,
    slug: "dont-be-afraid-of-the-dark",
    title: "Don't Be Afraid of the Dark",
    fullTitle: "Don't Be Afraid of the Dark",
    category: "Posters & Visual Design",
    categorySlug: "posters",
    subCategory: "Poster Design / Visual Composition",
    featured: false,
    priorityOrder: 18,
    shortDesc: "A dark conceptual poster exploring fear, mystery, and the unknown. The design uses dramatic perspective, bold typography, strong red and black contrasts, and a central figure to create an intense and mysterious atmosphere.",
    concept: "A dark conceptual poster exploring psychological fear and the thrill of the unknown. Deep obsidian blacks are slashed with vivid crimson lights, utilizing an ominous central silhouette and towering cinematic type to pull the viewer into the abyss.",
    tools: ["Adobe Photoshop"],
    role: "Digital Artist & Graphic Designer",
    responsibilities: [
      "Conceptual narrative and mood boarding",
      "Extreme red and black contrast grading",
      "Dramatic foreshortened perspective staging",
      "Silhouette and shadow integration",
      "Cinematic display typography and poster hierarchy"
    ],
    focus: [
      "Typography",
      "Photo Manipulation",
      "Visual Composition",
      "Color Contrast",
      "Visual Storytelling",
      "Dramatic Lighting"
    ],
    mainImage: "assets/placeholders/project-18-afraid-dark.svg",
    galleryImages: [
      "assets/placeholders/project-18-afraid-dark.svg",
      "assets/placeholders/project-18-afraid-typography.svg"
    ],
    colorAccent: "#d00000"
  },
  {
    id: 19,
    slug: "edm-music-poster",
    title: "EDM Music Poster",
    fullTitle: "EDM — Contemporary Music Poster",
    category: "Posters & Visual Design",
    categorySlug: "posters",
    subCategory: "Music Poster / Editorial Design",
    featured: false,
    priorityOrder: 19,
    shortDesc: "A contemporary EDM-inspired poster combining monochromatic photography with warm orange elements to create a bold and energetic visual identity. Large-scale typography, geometric shapes, and layered textures create a modern experimental composition.",
    concept: "Translating electronic music frequencies into visual rhythm. High-grain monochrome photography is energized with electric orange geometric overlays, grid frameworks, and experimental typographic scale to capture the kinetic pulse of live electronic sound.",
    tools: ["Adobe Photoshop"],
    role: "Graphic Designer & Visual Artist",
    responsibilities: [
      "Experimental grid layout design",
      "Monochrome photography texture grading",
      "Geometric vector overlay synthesis",
      "Kinetic typographic scale contrast",
      "Music festival visual identity development"
    ],
    focus: [
      "Editorial Design",
      "Typography",
      "Photo Manipulation",
      "Geometric Composition",
      "Layered Textures",
      "Color Balance"
    ],
    mainImage: "assets/placeholders/project-19-edm.svg",
    galleryImages: [
      "assets/placeholders/project-19-edm.svg",
      "assets/placeholders/project-19-edm-grid.svg"
    ],
    colorAccent: "#f77f00"
  }
];

// Helper functions for data queries
function getAllProjects() {
  return [...PROJECTS_DATA].sort((a, b) => a.priorityOrder - b.priorityOrder);
}

function getFeaturedProjects() {
  return PROJECTS_DATA.filter(p => p.featured).sort((a, b) => a.priorityOrder - b.priorityOrder);
}

function getProjectsByCategory(categorySlug) {
  if (categorySlug === 'all') return getAllProjects();
  if (categorySlug === 'featured') return getFeaturedProjects();
  return PROJECTS_DATA.filter(p => p.categorySlug === categorySlug).sort((a, b) => a.priorityOrder - b.priorityOrder);
}

function getProjectById(id) {
  return PROJECTS_DATA.find(p => p.id === Number(id));
}

function getProjectBySlug(slug) {
  return PROJECTS_DATA.find(p => p.slug === slug);
}
