export interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  galleryImages: string[];
  tags: string[];
  scope: string;
  duration: string;
  challenge: string;
  result: string;
  testimonial?: { text: string; name: string };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "victorian-bay-window-cambridge",
    title: "Victorian Bay Window Installation",
    location: "Cambridge",
    category: "Windows",
    shortDescription: "Full replacement of original single-glazed bay windows with A-rated double glazed units in anthracite grey.",
    fullDescription: "This 1890s terraced property in Cambridge had its original timber bay windows replaced with thermally efficient A-rated double glazed units. The homeowners wanted to preserve the period character of the property while dramatically improving insulation and eliminating the persistent draughts that made the front room uncomfortable in winter. We selected a slim-profile uPVC system powder-coated in anthracite grey to complement the brick facade, and included decorative lead detailing on the upper panes to maintain the Victorian aesthetic. The result is a transformation that feels entirely authentic to the period while performing to modern standards.",
    image: "/images/windows/victorian-sash-red-door.jpg",
    galleryImages: [
      "/images/windows/white-casement-red-brick.jpg",
      "/images/windows/sash-magnolia.jpg",
      "/images/windows/white-casement-2.jpg",
    ],
    tags: ["uPVC", "Bay Window", "Anthracite Grey", "Period Property"],
    scope: "3 bay windows + 2 standard casement windows",
    duration: "2 days",
    challenge: "Matching the Victorian character of the property while delivering modern thermal performance.",
    result: "40% reduction in heat loss. Homeowners reported a noticeably warmer front room immediately after installation.",
    testimonial: { text: "The windows look absolutely beautiful and the house is so much warmer. FS did a fantastic job matching the period style of our home.", name: "James & Claire R., Cambridge" },
  },
  {
    id: 2,
    slug: "bifold-doors-garden-huntingdon",
    title: "Grey Aluminium Bi-Folds",
    location: "Huntingdon",
    category: "Bi-Fold Doors",
    shortDescription: "Slim anthracite grey aluminium bi-fold doors opening the rear of the home to the garden with a flush floor track.",
    fullDescription: "The customer wanted a set of bi-fold doors that would open up the rear of their home and create a seamless flow to the garden. We installed a slim-framed aluminium bi-fold system in RAL 7016 anthracite grey, fitted with a flush floor track for a completely step-free transition. The slim aluminium frames maximise the glass area and complement the exterior perfectly. A traffic door within the configuration means everyday access without opening all panels.",
    image: "/images/bifold/anthracite-white-render.jpg",
    galleryImages: [
      "/images/bifold/anthracite-brick-topiary.jpg",
      "/images/projects/detached-oak-porch.jpg",
      "/images/projects/showcase-large-house.jpg",
    ],
    tags: ["Aluminium", "4-Panel", "Flush Track", "Anthracite Grey"],
    scope: "4-panel bi-fold 3.6m span with traffic door",
    duration: "1 day",
    challenge: "Achieving a flush floor threshold in an existing concrete extension floor without major structural work.",
    result: "Seamless indoor-outdoor flow. The kitchen-diner now feels twice the size when the doors are open.",
    testimonial: { text: "These bi-fold doors have completely changed how we use our home. On a sunny day the whole back of the house opens up. Incredible quality.", name: "Mark T., Huntingdon" },
  },
  {
    id: 3,
    slug: "edwardian-conservatory-st-neots",
    title: "Edwardian Conservatory with Solid Roof",
    location: "St Neots",
    category: "Conservatories",
    shortDescription: "Bespoke Edwardian conservatory with solid tiled roof for year-round use — 18m² addition to a 1930s semi.",
    fullDescription: "This 1930s semi-detached property in St Neots had a small, leaking lean-to greenhouse at the back that was unusable for most of the year. The homeowners wanted a proper living space — somewhere they could sit and have breakfast even in January. We designed and built a full Edwardian-style conservatory with a solid tiled roof system, finished in white uPVC to match the existing window frames. The roof system includes 100mm of insulation and a plastered internal ceiling, making it completely indistinguishable from the rest of the house in terms of comfort. Bi-fold doors at the rear open it up to the garden in summer.",
    image: "/images/projects/detached-oak-porch.jpg",
    galleryImages: [
      "/images/projects/showcase-large-house.jpg",
      "/images/projects/kethis-bungalow-full.jpg",
      "/images/windows/casement-rendered-house.jpg",
    ],
    tags: ["Solid Roof", "Edwardian", "Year-Round", "uPVC"],
    scope: "18m² Edwardian conservatory, solid tiled roof, new base",
    duration: "8 days",
    challenge: "Building on an existing concrete base that was uneven. We levelled and extended the base before beginning the structure.",
    result: "A beautiful, fully usable room that the family uses every day — even through the winter months.",
    testimonial: { text: "We couldn't be happier. It's our favourite room in the house now. FS Home Improvements were professional from start to finish.", name: "Linda B., St Neots" },
  },
  {
    id: 4,
    slug: "composite-front-door-bedford",
    title: "Composite Front Door Transformation",
    location: "Bedford",
    category: "Doors",
    shortDescription: "Solidor composite door in Chartwell Green with decorative glazing, chrome furniture and multi-point locking.",
    fullDescription: "The owners of this 1970s detached home in Bedford had an original timber door that was rotting at the bottom and letting in significant draughts. They wanted a striking replacement that would transform the front of their home. We installed a Solidor composite door in Chartwell Green — a gorgeous shade that works beautifully with the red brick exterior — with a bespoke decorative glazing panel, chrome lever handle set and matching letterbox. The composite construction means zero maintenance, exceptional security and far better insulation than the original timber door. The transformation to the front of the house was immediate and dramatic.",
    image: "/images/doors/anthracite-composite.jpg",
    galleryImages: [
      "/images/doors/sage-green-composite.jpg",
      "/images/doors/white-composite-glazed.jpg",
      "/images/doors/white-stable.jpg",
    ],
    tags: ["Composite", "Solidor", "Chartwell Green", "Chrome Hardware"],
    scope: "Single front door with decorative glazing and full hardware set",
    duration: "Half day",
    challenge: "The existing frame had some rot in the corners. We replaced the full frame to ensure a secure, draught-free fit.",
    result: "A completely transformed front elevation. Neighbours and visitors immediately commented on the improvement.",
    testimonial: { text: "The door is stunning. It's made such a difference to the look of the house and the draught has completely gone. Great value too.", name: "Sarah M., Bedford" },
  },
  {
    id: 5,
    slug: "full-roofline-replacement-sandy",
    title: "Full Roofline Replacement",
    location: "Sandy",
    category: "Roofline",
    shortDescription: "Complete removal and replacement of all fascias, soffits and guttering on a detached 4-bedroom property.",
    fullDescription: "This detached 4-bedroom property in Sandy had original timber fascias and soffits that were heavily rotted and causing damp issues at the eaves. The guttering was cracked and leaking at multiple joints, allowing water to track down the brickwork. We stripped all existing timber and guttering back to the rafter feet, treated any affected timber, and fitted a full uPVC roofline system in white with ogee-profile guttering. The job also included lead detailing at the valleys and new lead flashing around the chimney where water had been penetrating. The homeowners had put this job off for years — the difference was astonishing.",
    image: "/images/projects/kethis-bungalow-angle.jpg",
    galleryImages: [
      "/images/projects/kethis-bungalow-full.jpg",
      "/images/projects/showcase-large-house.jpg",
      "/images/projects/anthracite-white-render.jpg",
    ],
    tags: ["Full Replacement", "uPVC", "Ogee Profile", "White"],
    scope: "Full perimeter fascia, soffit and guttering — 4-bed detached",
    duration: "1.5 days",
    challenge: "Significant rot discovered in three rafter feet on the north elevation. We sistered new timber alongside the damaged sections before fitting the uPVC.",
    result: "No more damp issues at the eaves. The property now has a clean, bright roofline that will require zero maintenance.",
    testimonial: { text: "Should have done it years ago. The team were brilliant — arrived on time, worked clean and the job looks perfect.", name: "Robert H., Sandy" },
  },
  {
    id: 6,
    slug: "aluminium-windows-biggleswade",
    title: "Composite Solid Door — Anthracite Grey",
    location: "Biggleswade",
    category: "Doors",
    shortDescription: "Anthracite grey composite solid door fitted to a detached property — stylish, secure and low maintenance.",
    fullDescription: "The customer wanted to upgrade their front entrance with a door that would make a real statement while delivering excellent security and insulation. We supplied and installed a composite solid door in anthracite grey, featuring a multi-point locking system and a robust solid-core construction that provides outstanding thermal and acoustic performance. The transformation to the front of the property was immediate and dramatic.",
    image: "/images/windows/anthracite-casement.jpg",
    galleryImages: [
      "/images/windows/casement-rendered-house.jpg",
      "/images/projects/anthracite-white-render.jpg",
      "/images/projects/detached-oak-porch.jpg",
    ],
    tags: ["Composite", "Anthracite Grey", "Multi-Point Lock", "Solid Core"],
    scope: "Single composite front door with full hardware set",
    duration: "Half day",
    challenge: "Removing the existing frame which had minor rot — we replaced the full frame for a secure, weathertight fit.",
    result: "A striking front door that has completely transformed the entrance and impressed neighbours.",
  },
  {
    id: 7,
    slug: "french-doors-royston",
    title: "Composite Solid Doors",
    location: "Royston",
    category: "Doors",
    shortDescription: "White composite solid door with glazed panel fitted to a semi-detached property — secure, stylish and draught-free.",
    fullDescription: "The customer's existing door was letting in draughts and needed replacing. We supplied and installed a white composite solid door with a decorative glazed panel, bringing in natural light while maintaining security. The composite construction provides excellent insulation, zero maintenance and far superior security to the original door. The result was a clean, fresh entrance that the customer was delighted with.",
    image: "/images/doors/white-composite-glazed.jpg",
    galleryImages: [
      "/images/doors/white-stable.jpg",
      "/images/doors/sage-green-composite.jpg",
      "/images/doors/anthracite-composite.jpg",
    ],
    tags: ["Composite", "White", "Glazed Panel", "Solid Core"],
    scope: "Single composite front door with glazed panel and full hardware",
    duration: "Half day",
    challenge: "Ensuring the new frame sat perfectly square in an older opening that had slight movement over time.",
    result: "A bright, welcoming entrance that is completely draught-free and makes a great first impression.",
  },
  {
    id: 8,
    slug: "conservatory-roof-replacement-ely",
    title: "Victorian Conservatory Roof Replacement",
    location: "Ely",
    category: "Conservatories",
    shortDescription: "Polycarbonate roof replaced with insulated solid tiled roof — turning an unusable space into a year-round living room.",
    fullDescription: "This Victorian conservatory in Ely had served the family well for 20 years but was becoming increasingly unusable — unbearably hot in summer, freezing in winter, and noisy when it rained. The structure and glazed walls were in excellent condition, so a full rebuild wasn't necessary. Instead, we replaced the ageing polycarbonate roof with a fully insulated solid tiled roof system finished with period-appropriate roof tiles to complement the original Victorian structure. The difference was described by the homeowners as 'like gaining a completely new room'. The conservatory is now their most-used space.",
    image: "/images/projects/showcase-large-house.jpg",
    galleryImages: [
      "/images/projects/detached-oak-porch.jpg",
      "/images/windows/sash-magnolia.jpg",
      "/images/projects/anthracite-white-render.jpg",
    ],
    tags: ["Roof Replacement", "Victorian", "Solid Roof", "Year-Round"],
    scope: "Solid tiled roof replacement on existing Victorian conservatory",
    duration: "3 days",
    challenge: "Matching the Victorian ridge tiles and ensuring watertight integration with the existing gutter system.",
    result: "A fully regulated, year-round living space. No more temperature extremes or rain noise.",
    testimonial: { text: "It's like having a brand new room. We use it every single day now — even in the winter. Worth every penny.", name: "Patricia W., Ely" },
  },
  {
    id: 9,
    slug: "6-panel-bifold-peterborough",
    title: "6-Panel Bi-Fold — Full Rear Opening",
    location: "Peterborough",
    category: "Bi-Fold Doors",
    shortDescription: "Spectacular 5.4m wide 6-panel bi-fold installation across the full width of a rear extension in black aluminium.",
    fullDescription: "The owners of this large detached home in Peterborough had just completed a substantial rear extension and wanted the back of the house to make a real statement. We installed a 6-panel aluminium bi-fold system spanning the full 5.4 metre width of the extension in RAL 9005 jet black. At this scale, the doors completely dissolve the boundary between the interior and the garden — when fully open, the opening is wider than most rooms. The system stacks fully to one side, leaving an unobstructed view and access point. Triple glazed units maximise thermal performance despite the enormous glass area.",
    image: "/images/bifold/anthracite-brick-topiary.jpg",
    galleryImages: [
      "/images/bifold/anthracite-white-render.jpg",
      "/images/projects/detached-oak-porch.jpg",
      "/images/projects/showcase-large-house.jpg",
    ],
    tags: ["6-Panel", "Black Aluminium", "Large Opening", "Triple Glazed"],
    scope: "6-panel bi-fold 5.4m span, RAL 9005 black, triple glazed",
    duration: "2 days",
    challenge: "Handling panels of this size and weight required a 4-person team and specialist lifting equipment.",
    result: "A show-stopping installation that has been the subject of multiple planning enquiries from neighbours.",
    testimonial: { text: "Absolutely jaw-dropping. Every time we open them fully it takes your breath away. FS Home Improvements are the best.", name: "David & Karen T., Peterborough" },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
