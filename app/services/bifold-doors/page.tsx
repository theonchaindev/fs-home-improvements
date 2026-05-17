import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = { title: "Bi-Fold Doors | FS Home Improvements", description: "Stunning aluminium bi-fold doors that open your home to the outside. Expert installation with 10-year guarantee." };

export default function BifoldDoorsPage() {
  return (
    <ServicePageTemplate
      title="Bi-Fold Doors"
      subtitle="Open Up Your Home"
      icon="🔲"
      description="Bi-fold doors are the ultimate way to connect your indoor and outdoor spaces. When fully open, they create a wide, unobstructed opening that brings the outside in and transforms how you use your home on warm days."
      features={[
        "Slim aluminium frames with maximum glass",
        "2 to 7 panel configurations",
        "Traffic door option for everyday access",
        "Double or triple glazed units",
        "Flush floor track or low threshold options",
        "10-year comprehensive guarantee",
      ]}
      benefits={[
        { title: "Stunning Opening Width", desc: "Bi-fold doors can span up to 6 metres, creating a breathtaking opening that connects your living room or kitchen to your garden." },
        { title: "Maximise Natural Light", desc: "The slimline aluminium frames allow enormous glass panels that flood your home with natural light even when the doors are closed." },
        { title: "Year-Round Thermal Performance", desc: "Advanced thermal break technology in the frames and high-performance double glazing keep warmth in and cold out." },
        { title: "Low Maintenance", desc: "Powder-coated aluminium frames never need painting and are resistant to corrosion, warping and fading for decades." },
        { title: "Flexible Opening Options", desc: "Choose which direction the panels stack and include a traffic door for easy everyday access without opening the full set." },
        { title: "Premium Security", desc: "Multi-point locking on every panel and toughened safety glass as standard — secure, yet effortlessly beautiful." },
      ]}
      options={[
        { title: "2-Panel Bi-Fold", desc: "Perfect for smaller openings. Both panels fold to one side to create a clean, unobstructed access point." },
        { title: "3-Panel Bi-Fold", desc: "The most popular configuration — versatile and effective for standard patio door openings." },
        { title: "4-Panel Bi-Fold", desc: "Ideal for wider openings. Stack panels to one side or split 2-2 for central opening access." },
        { title: "5 & 6 Panel Bi-Fold", desc: "Create a spectacular wide opening across the full back of your home for a truly dramatic effect." },
        { title: "Traffic Door Option", desc: "Include a single hinged door within the bi-fold configuration for convenient everyday use without opening all panels." },
        { title: "Corner Bi-Fold", desc: "Advanced corner post-free configurations that open two walls simultaneously for the ultimate indoor-outdoor experience." },
      ]}
      faqs={[
        { q: "How wide can bi-fold doors be?", a: "Our bi-fold door systems can span up to 6 metres across, with configurations of 2 to 7 panels. The maximum width depends on the number of panels chosen." },
        { q: "Are bi-fold doors secure?", a: "Yes. Our bi-fold doors feature multi-point locking systems on each panel, toughened safety glass and shoot-bolt top and bottom locks. They're as secure as any other door system." },
        { q: "Can bi-fold doors be fitted in winter?", a: "Yes — we install bi-fold doors year-round. We take every precaution to minimise disruption during installation and ensure your home is secure and weathertight throughout the process." },
        { q: "Do I need planning permission for bi-fold doors?", a: "In most cases, replacing an existing opening with bi-fold doors doesn't require planning permission. Creating a new opening may require approval — we'll advise you fully during your free survey." },
      ]}
      heroImage="/images/bifold/anthracite-brick-topiary.jpg"
      galleryImages={[
        "/images/bifold/anthracite-white-render.jpg",
        "/images/projects/detached-oak-porch.jpg",
      ]}
    />
  );
}
