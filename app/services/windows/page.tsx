import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = { title: "Windows | FS Home Improvements", description: "Energy-efficient uPVC, aluminium and timber windows. Expert installation with a 10-year guarantee." };

export default function WindowsPage() {
  return (
    <ServicePageTemplate
      title="Windows"
      subtitle="Expert Window Installation"
      icon="🪟"
      description="Transform your home with our stunning range of energy-efficient windows. From classic uPVC casement to sleek aluminium, we supply and install windows that look incredible and perform even better."
      features={[
        "uPVC, Aluminium and Timber options",
        "A-Rated energy efficiency as standard",
        "Casement, bay, sash and tilt-turn styles",
        "Wide range of colours and finishes",
        "Enhanced security multi-point locking",
        "10-year comprehensive guarantee",
      ]}
      benefits={[
        { title: "Lower Energy Bills", desc: "A-Rated double and triple glazing dramatically reduces heat loss, cutting your energy bills by up to 30%." },
        { title: "Enhanced Security", desc: "Multi-point locking systems and toughened glass give you peace of mind that your home is protected." },
        { title: "Noise Reduction", desc: "Our acoustic glazing options significantly reduce outside noise — perfect for busy roads or urban areas." },
        { title: "Kerb Appeal", desc: "New windows can completely transform the look of your home, boosting its value and attractiveness." },
        { title: "Low Maintenance", desc: "uPVC frames never need painting — just a wipe down. Timber alternatives last decades with minimal upkeep." },
        { title: "10-Year Guarantee", desc: "Every installation is backed by our insurance-backed 10-year guarantee, so you're covered long-term." },
      ]}
      options={[
        { title: "Casement Windows", desc: "The most popular style — hinged at the side or top, available in a huge range of colours and configurations." },
        { title: "Bay & Bow Windows", desc: "Create a stunning focal point and bring in more light with a beautifully crafted bay or bow window." },
        { title: "Sash Windows", desc: "Classic vertical sliding sash windows that complement period properties while meeting modern performance standards." },
        { title: "Tilt & Turn Windows", desc: "Versatile windows that open inward for easy cleaning, or tilt for ventilation — great for upper floors." },
        { title: "Aluminium Windows", desc: "Slimline aluminium frames for a contemporary look with maximum glass area and outstanding durability." },
        { title: "Timber Windows", desc: "Beautiful natural timber frames with the warmth and character that only real wood can provide." },
      ]}
      faqs={[
        { q: "How long does window installation take?", a: "Most installations are completed in a single day. Larger projects with bay windows or multiple storeys may take two days. We'll always give you a clear timeline upfront." },
        { q: "Do I need planning permission for new windows?", a: "In most cases, no. Replacing like-for-like windows in the same style and material doesn't require planning permission. We can advise if your property is listed or in a conservation area." },
        { q: "What is the best type of window for energy efficiency?", a: "Triple glazed A++-rated windows offer the best thermal performance. For most homes, A-rated double glazing provides excellent efficiency at a more accessible price point." },
        { q: "How much do new windows cost?", a: "Costs vary based on size, style, material and number of windows. We offer free, transparent quotes with no hidden extras. Contact us for a personalised estimate." },
      ]}
    />
  );
}
