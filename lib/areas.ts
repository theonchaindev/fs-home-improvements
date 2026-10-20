import { projects, type Project } from "@/lib/projects";

export interface Area {
  slug: string;
  name: string;
  county: string;
  intro: string[];
}

export const areas: Area[] = [
  {
    slug: "cambridge",
    name: "Cambridge",
    county: "Cambridgeshire",
    intro: [
      "Cambridge homes ask more of an installer than most. From Victorian terraces off Mill Road to modern developments on the city's edge, windows and doors need to respect the character of the property while delivering modern thermal performance — a balance we work to on every Cambridge job.",
      "Our recent work in the city includes a full Victorian bay window replacement on an 1890s terrace, where slim-profile A-rated units with decorative lead detailing kept the period look while cutting heat loss dramatically. Whether it's sash windows for a period property, a composite front door, or bi-fold doors for a rear extension, we survey, supply and install with a 10-year insurance-backed guarantee.",
    ],
  },
  {
    slug: "huntingdon",
    name: "Huntingdon",
    county: "Cambridgeshire",
    intro: [
      "We install windows, doors, conservatories and bi-fold doors across Huntingdon and the surrounding villages — Godmanchester, Brampton, St Ives and beyond. Every installation is carried out by our own fitters and backed by a 10-year guarantee.",
      "A recent Huntingdon project saw us fit slim-framed anthracite aluminium bi-fold doors with a flush floor track, opening the whole rear of the home to the garden. If you're planning something similar — or just need tired windows or a front door replaced — we'll give you a free, no-obligation quote with honest advice on what your home actually needs.",
    ],
  },
  {
    slug: "st-neots",
    name: "St Neots",
    county: "Cambridgeshire",
    intro: [
      "St Neots is right in the heart of our service area, and we cover the whole town and its villages — Eynesbury, Eaton Ford, Little Paxton and beyond — for windows, doors, conservatories and roofline work.",
      "One of our larger St Neots projects was a full-property window replacement: every window in a detached house swapped for A-rated white uPVC casements in two days, with an immediate difference in warmth and draughts. From a single door to a whole house, the same team and the same 10-year guarantee apply.",
    ],
  },
  {
    slug: "peterborough",
    name: "Peterborough",
    county: "Cambridgeshire",
    intro: [
      "From city-centre terraces to new builds in Hampton and Orton, we install windows, doors, bi-folds and conservatories across Peterborough. Free surveys, honest quotes, and installation by our own fitters.",
      "Our recent Peterborough work includes a six-panel bi-fold installation that opened up the full rear wall of a family home — one of the largest openings we've fitted. If you're weighing up bi-folds, sliding patio doors or French doors for your own home, we'll talk you through the options and price each one transparently.",
    ],
  },
  {
    slug: "bedford",
    name: "Bedford",
    county: "Bedfordshire",
    intro: [
      "We work across Bedford and the surrounding Bedfordshire villages, installing energy-efficient windows, secure composite doors, conservatories and full roofline replacements — all with a 10-year insurance-backed guarantee.",
      "A recent Bedford project transformed a dated entrance with a new composite front door — modern security and insulation behind a traditional look. First impressions matter when you're selling, and a front door is one of the most cost-effective upgrades a Bedford home can make.",
    ],
  },
  {
    slug: "sandy",
    name: "Sandy",
    county: "Bedfordshire",
    intro: [
      "Sandy and its neighbouring villages sit comfortably inside our Bedfordshire coverage, and we're regularly in the area for windows, doors and roofline work.",
      "One recent Sandy project was a complete roofline replacement — fascias, soffits and guttering all stripped back and replaced with maintenance-free uPVC, sealing the roof edge against damp for decades. If your fascias are flaking or your gutters overflow every winter, a free survey will tell you exactly what's needed.",
    ],
  },
  {
    slug: "biggleswade",
    name: "Biggleswade",
    county: "Bedfordshire",
    intro: [
      "We install across Biggleswade and the A1 corridor — windows, doors, conservatories and roofline, supplied and fitted by our own team with a 10-year guarantee.",
      "Recent work in Biggleswade includes new grey uPVC windows — one of the most popular upgrades we fit, pairing modern anthracite styling with A-rated thermal performance. If you're comparing colours, materials or glazing options, we're happy to bring samples to your free survey.",
    ],
  },
  {
    slug: "royston",
    name: "Royston",
    county: "Hertfordshire border",
    intro: [
      "Royston sits just over the county line, but it's well within our patch — we cover the town and the villages between Royston and Cambridge for windows, doors, conservatories and bi-folds.",
      "Our recent Royston work includes solid composite door installations — doors that look like painted timber but never warp, rot or need repainting, with multi-point locking as standard. From a single front door to a full house of windows, every job gets the same free survey and 10-year guarantee.",
    ],
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAreaProjects(area: Area): Project[] {
  return projects.filter((p) => p.location === area.name);
}
