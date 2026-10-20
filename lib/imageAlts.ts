// One description per photo, used everywhere the image appears.
const alts: Record<string, string> = {
  "/images/conservatory-job.jpg":
    "White uPVC Victorian-style conservatory with a glazed roof and French doors on a red-brick home",
  "/images/projects/kethis-bungalow-angle.jpg":
    "Sage green uPVC windows and matching composite front door fitted to a brick bungalow",
  "/images/projects/kethis-bungalow-full.jpg":
    "Brick bungalow with a full set of new sage green uPVC windows and composite front door",
  "/images/projects/detached-oak-porch.jpg":
    "Detached home with an oak-framed porch, black front door and white shuttered windows",
  "/images/projects/showcase-large-house.jpg":
    "Detached house with an oak porch canopy, white windows and landscaped block-paved drive",
  "/images/projects/anthracite-white-render.jpg":
    "Anthracite grey aluminium bi-fold doors on a white rendered rear extension",
  "/images/doors/anthracite-composite.jpg":
    "Anthracite grey composite front door with a frosted glass panel beneath a timber porch canopy",
  "/images/doors/sage-green-composite.jpg":
    "Sage green composite front door with chrome hardware",
  "/images/doors/white-composite-glazed.jpg":
    "White composite front door with decorative glazing",
  "/images/doors/white-stable.jpg":
    "White composite stable-style front door",
  "/images/doors/hallmark-pigeon-blue.jpeg":
    "Pigeon blue Hallmark composite front door with gold knocker, letterplate and handle in a white uPVC frame on a buff-brick home",
  "/images/doors/sliding-patio-garden.jpeg":
    "Two-panel white uPVC sliding patio doors fitted to a brick rear elevation, opening onto a paved garden patio",
  "/images/doors/white-stable-panelled.jpeg":
    "White uPVC stable door with vertical cottage panelling, obscure glazed top light and black handle and letterplate on a buff-brick home",
  "/images/doors/white-upvc-side-door.jpeg":
    "White half-glazed uPVC side door with obscure patterned glass, twin raised lower panels and chrome handle in a brick side passage",
  "/images/windows/white-picture-window.jpeg":
    "Large white uPVC fixed picture window with a new external sill in a red-brick wall",
  "/images/windows/white-casement-red-brick.jpg":
    "White uPVC double-glazed casement window newly fitted in a brick wall",
  "/images/windows/victorian-sash-red-door.jpg":
    "White uPVC sash windows on a Victorian terrace beside a red front door",
  "/images/windows/sash-magnolia.jpg":
    "White uPVC sliding sash window in a magnolia rendered wall",
  "/images/windows/white-casement-2.jpg":
    "White uPVC casement windows with A-rated double glazing",
  "/images/windows/casement-rendered-house.jpg":
    "White uPVC casement windows on a rendered house",
  "/images/windows/sage-green-install.jpg":
    "Sage green uPVC casement windows being installed",
  "/images/windows/anthracite-casement.jpg":
    "Anthracite grey uPVC casement window",
  "/images/bifold/anthracite-white-render.jpg":
    "Anthracite grey aluminium bi-fold doors opening onto a patio from a white rendered extension",
  "/images/bifold/anthracite-brick-topiary.jpg":
    "Four-panel anthracite grey aluminium bi-fold doors flanked by topiary planters",
};

export function altFor(src: string, fallback: string): string {
  return alts[src] ?? fallback;
}
