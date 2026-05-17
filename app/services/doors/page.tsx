import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = { title: "Doors | FS Home Improvements", description: "Composite, bi-fold, French and patio doors. Stunning security doors installed with a 10-year guarantee." };

export default function DoorsPage() {
  return (
    <ServicePageTemplate
      title="Doors"
      subtitle="Beautiful, Secure Door Installation"
      icon="🚪"
      description="Your front door is the first thing visitors see — make it count. Our range of composite, French and patio doors combine striking design with industry-leading security to give your home the entrance it deserves."
      features={[
        "Composite, uPVC and timber options",
        "Multi-point locking as standard",
        "Wide range of colours and glass designs",
        "French, patio and stable door styles",
        "Energy-efficient frames and glazing",
        "10-year comprehensive guarantee",
      ]}
      benefits={[
        { title: "Maximum Security", desc: "Our composite doors feature multi-point locking and toughened glass panels — far more secure than a standard door." },
        { title: "Outstanding Insulation", desc: "Solid foam core composite construction provides excellent thermal and acoustic insulation year-round." },
        { title: "Zero Maintenance", desc: "Composite doors never warp, swell or fade. They look as good in 20 years as the day they were installed." },
        { title: "Bespoke Design", desc: "Hundreds of colour, style, glass and hardware combinations mean your door is truly one of a kind." },
        { title: "Add Kerb Appeal", desc: "A new door can completely transform the exterior of your home and significantly increase its value." },
        { title: "Guaranteed for 10 Years", desc: "Full insurance-backed guarantee on every door we install, giving you long-term peace of mind." },
      ]}
      options={[
        { title: "Composite Front Doors", desc: "The premium choice — solid core, ultra-secure, available in dozens of colours and glass designs." },
        { title: "French Doors", desc: "Elegant double-opening doors that flood your room with light and create a beautiful garden access point." },
        { title: "Patio Sliding Doors", desc: "Space-saving sliding doors for seamless indoor-outdoor living. Available in uPVC and aluminium." },
        { title: "Stable Doors", desc: "Classic split doors that allow ventilation while keeping pets and young children safely inside." },
        { title: "Back Doors", desc: "Durable, secure uPVC or composite back doors in a range of styles to suit any property." },
        { title: "Side & Porch Doors", desc: "Complete your entrance with a matching side or porch door that blends seamlessly with your main door." },
      ]}
      faqs={[
        { q: "How long does door installation take?", a: "Most door installations are completed within a few hours on the same day. We'll remove your old door, fit the frame, hang the new door and ensure everything is perfectly sealed before we leave." },
        { q: "Are composite doors more secure than uPVC?", a: "Composite doors offer a higher level of security due to their solid foam core and tougher outer skin. Both types feature multi-point locking, but composite is the preferred choice for front doors." },
        { q: "Can I choose my own colour and glass design?", a: "Absolutely. We offer hundreds of colour combinations and glass panel designs so you can create a door that's completely personalised to your home." },
        { q: "Do you install cat flaps or letterboxes?", a: "Yes — we can add letterboxes, cat flaps, door knockers and a wide range of hardware as part of your installation." },
      ]}
      heroImage="/images/doors/anthracite-composite.jpg"
      galleryImages={[
        "/images/doors/sage-green-composite.jpg",
        "/images/doors/white-composite-glazed.jpg",
        "/images/doors/white-stable.jpg",
      ]}
    />
  );
}
