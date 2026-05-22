import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = { title: "Conservatories & Orangeries | FS Home Improvements", description: "Bespoke conservatories and orangeries designed and installed for your home. Free design consultation." };

export default function ServatoriesPage() {
  return (
    <ServicePageTemplate
      title="Conservatories"
      subtitle="Beautiful Living Space Extensions"
      icon="🏡"
      description="A conservatory or orangery is one of the most rewarding investments you can make in your home. We design and build bespoke structures that complement your property perfectly and give you a stunning new living space to enjoy year-round."
      features={[
        "Bespoke designs tailored to your home",
        "Victorian, Edwardian and lean-to styles",
        "Solid tiled roof options available",
        "Orangery and garden room extensions",
        "Full planning advice and support",
        "10-year comprehensive guarantee",
      ]}
      benefits={[
        { title: "Extra Living Space", desc: "Add a beautifully light-filled room that works as a dining room, lounge, playroom or home office — whatever you need." },
        { title: "Add Property Value", desc: "A well-designed conservatory or orangery can add 5–10% to your property value and make it more attractive to buyers." },
        { title: "Year-Round Comfort", desc: "With modern solid roof systems and efficient glazing, your new space will be warm in winter and cool in summer." },
        { title: "Bespoke Design", desc: "Every conservatory we build is designed specifically for your property. We don't do one-size-fits-all." },
        { title: "Fast Installation", desc: "Most conservatories are fully installed within 5–10 working days, causing minimal disruption to your home." },
        { title: "Planning Support", desc: "Our team will advise on permitted development rights and handle any planning applications on your behalf." },
      ]}
      options={[
        { title: "Victorian Conservatory", desc: "The classic choice — ornate ridgeline, multi-faceted front and decorative cresting for a timeless look." },
        { title: "Edwardian Conservatory", desc: "Square or rectangular footprint maximises usable floor space while maintaining an elegant, traditional appearance." },
        { title: "Lean-To Conservatory", desc: "Clean, simple lines that work brilliantly with modern and bungalow-style properties. Cost-effective and stylish." },
        { title: "Orangery", desc: "A more substantial brick-built extension with large glazed panels — the natural step between conservatory and full extension." },
        { title: "Solid Roof Conservatory", desc: "Transform an existing or new conservatory with a solid tiled roof for year-round use and better energy efficiency." },
        { title: "Garden Room", desc: "A fully insulated, plastered garden room that feels like a genuine part of the house — not an add-on." },
      ]}
      faqs={[
        { q: "Do I need planning permission for a conservatory?", a: "Most conservatories fall within permitted development rights and don't require planning permission. There are size and position restrictions though, and we'll check your specific situation during a free home survey." },
        { q: "Can I use a conservatory all year round?", a: "With the right roof and glazing, yes. Our solid roof and thermally efficient glazing options are specifically designed for year-round comfort. A traditional polycarbonate roof won't achieve this, but we have much better solutions." },
        { q: "How long does installation take?", a: "Most projects are completed in 5–10 working days depending on the size and complexity of the structure. We'll provide a detailed timeline after your design consultation." },
        { q: "What's the difference between a conservatory and an orangery?", a: "A conservatory is predominantly glass. An orangery features more substantial brick or rendered walls with a central glass lantern roof — it feels more like a genuine room extension." },
      ]}
      heroImage="/images/conservatory-job.jpg"
    />
  );
}
