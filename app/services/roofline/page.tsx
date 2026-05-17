import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = { title: "Roofline | FS Home Improvements", description: "Professional fascia, soffit and guttering replacement. Protect your home and enhance its appearance." };

export default function RooflinePage() {
  return (
    <ServicePageTemplate
      title="Roofline"
      subtitle="Fascias, Soffits & Guttering"
      icon="🏠"
      description="Your roofline is your home's first defence against the elements. Worn, cracked or rotten fascias and soffits allow moisture to penetrate your roof and walls. Our roofline service replaces everything with high-performance uPVC products that will protect your home for decades."
      features={[
        "uPVC fascias, soffits and bargeboards",
        "Full guttering replacement and downpipes",
        "All existing timber removed and disposed of",
        "Wide range of colours and profiles",
        "Ventilated soffits to prevent condensation",
        "10-year comprehensive guarantee",
      ]}
      benefits={[
        { title: "Protect Your Home", desc: "New fascias and soffits seal your roof edge from moisture, preventing damp penetration that causes serious structural damage." },
        { title: "Stop Leaks & Damp", desc: "Cracked guttering and overflowing downpipes are a leading cause of damp problems. We'll make your drainage system watertight." },
        { title: "Zero Maintenance", desc: "uPVC never rots, cracks or needs painting. Once fitted, your roofline will look as good in 20 years as it does today." },
        { title: "Instant Transformation", desc: "New white or coloured fascias and guttering can completely refresh the appearance of your home at a fraction of the cost of other renovations." },
        { title: "Pest Prevention", desc: "We seal all gaps that birds, squirrels and insects use to access your roof void — protecting insulation and roof timbers." },
        { title: "Quick Installation", desc: "Most roofline projects are completed in a single day, with minimal disruption to your household." },
      ]}
      options={[
        { title: "uPVC Fascia Boards", desc: "Available in a range of widths, profiles and colours to match your property style. Capped or full replacement." },
        { title: "Soffit Boards", desc: "Solid or vented soffits to ensure proper roof ventilation while providing a clean, finished appearance." },
        { title: "Bargeboards", desc: "Protect the gable ends of your roof with new bargeboards that match your fascia and soffit for a uniform finish." },
        { title: "Half-Round Guttering", desc: "The classic profile — widely compatible with existing brackets and a great all-round performer." },
        { title: "Square/Ogee Guttering", desc: "Modern square and decorative ogee profiles available in black, white and anthracite for a contemporary look." },
        { title: "Cast Iron-Effect Guttering", desc: "The aesthetic of traditional cast iron without the weight, cost and maintenance. Perfect for period properties." },
      ]}
      faqs={[
        { q: "How do I know if my fascias need replacing?", a: "Signs include flaking paint, cracks, soft spots when pressed (indicates rot), gaps at joints, leaking gutters and birds nesting in the roof void. Any of these suggest it's time for a replacement." },
        { q: "Can you cap over existing fascias?", a: "In some cases yes — if the existing timber is still sound, we can cap over with uPVC. However, we always recommend full removal and replacement to ensure any hidden rot is treated and the job is done properly." },
        { q: "How long does roofline installation take?", a: "Most standard semi-detached properties can be completed in a single day. Larger detached homes may take two days. We'll always give you a clear estimate when we provide your quote." },
        { q: "What colours are available?", a: "We offer white, black, anthracite grey, woodgrain foiled and a range of other colours. Most of our customers choose white or anthracite grey for a clean, modern finish." },
      ]}
      heroImage="/images/projects/kethis-bungalow-angle.jpg"
      galleryImages={[
        "/images/projects/kethis-bungalow-full.jpg",
        "/images/projects/showcase-large-house.jpg",
      ]}
    />
  );
}
