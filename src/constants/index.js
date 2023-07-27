import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  redux,
  react_native,
  nodejs,
  mongodb,
  git,
  laravel,
  docker,
  orange,
  aline_solution,
  axium,
  maissane,
  carrent,
  jobit,
  tripguide,
  giga,
  aline,
  moustakbal,
  cuvee,
  restaurant,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Home",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Me Contacté",
  },
];

const services = [
  {
    title: "Developpeur web",
    icon: web,
  },
  {
    title: "Developpeur mobile",
    icon: mobile,
  },
  {
    title: " Developpeur Backend",
    icon: backend,
  },
  {
    title: "Createur de contenu",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "react native",
    icon: react_native,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "stage Orange Burkina",
    company_name: "Orange Burkina",
    icon: orange,
    iconBg: "#383E56",
    date: "Mars 2023 - a nos jours",
    points: [
      "Stage au service Marketing et communication de Orange burkina",
      "je suis a charge de l'administration du dite web Orange Burkina",
      "je suis a charge de la maintenance du dite web Orange Burkina",
      "je participe a l'élaboration des strategie efficace de communication",
    ],
  },
  {
    title: "Maissane",
    company_name: "Maissane, Mousstkbal",
    icon: maissane,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "developpement d'application de gestion de stock avec windev.",
      "developpement d'application de comptabilité avec windev.",
      "maintenance du reseau de l'entreprise.",
      "maintenance du systeme et outils informatique de l'entreprise.",
    ],
  },
  {
    title: "Axuim",
    company_name: "Axium Burkina",
    icon: axium,
    iconBg: "#383E56",
    date: "feb 2022 - juin 2022",
    points: [
      "developpement d'application web afin d'automatiser le processuss de souscription des kits solaires pour la societé Giga Energie sis en Cote d'ivoire",
      "Maintenance du systeme informatique de la societé Axium Burkina",
      "maintenance d'un logiciel de gestion pour une société d'hydrocarbure au burkina ",
      "maintenance du reseau de l'entreprise",
    ],
  },
  {
    title: "Aline solutions",
    company_name: "Aline-solutions",
    icon: aline_solution,
    iconBg: "#E6DEDD",
    date: "dec 2021 - jan 2022",
    points: [
      "developpement d'un site statique pour la société Aline Solutions avec wordpress",
      "j'etais en freelance ",
      "ce projet a duré 1 mois",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Designer Graphique | Designer Numérique | Advertising ",
    name: "Abdel Traore",
    designation: "Directeur",
    company: "API Company",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
  },
  {
    testimonial:
      "Expert en systeme solaire et vente de systeme solaire au burkina.",
    name: "Abdoul Rasmané Sanfo",
    designation: "Directeur",
    company: "Maissane, Mousstakbal",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
  },
  {
    testimonial:
      "Société de financiere qui interviet dans les solutions de credit en cote d'ivoire",
    name: "Aline solutions",
    designation: "Aine-solution",
    company: "Aline-solutions",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
  },
];

const projects = [
  {
    name: "Aline Solutions",
    description:
      "Aine solution est une solution informatique qui permet aux commercants et aux clients de ne plus se soucié de la monnaie car cette monnaie sera numerique .",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
    ],
    image: aline,
    source_code_link: "https://github.com/nikiema-marius",
  },
  {
    name: "mousstakbal ",
    description:
      "ce logiciel est un logiciel de gestion concu avec windev qui permet a la societé mousstakbal de mieux controlé ces sorties de stocks et aussi de faire un bon bilan de comptabilité mensuelle.",
    tags: [
      {
        name: "windev",
        color: "blue-text-gradient",
      },
      {
        name: "windev mobile",
        color: "green-text-gradient",
      },
    ],
    image: moustakbal,
    source_code_link: "https://github.com/nikiema-marius",
  },
  {
    name: "Cuvée d'Or",
    description:
      "ce logiciel cuvée d'or est un logiciel qui permet aux gestionaires des caves a vin de pouvoir avoir un bon controle des sorties et de faire egalement un bilan financier efficace .",
    tags: [
      {
        name: "windev",
        color: "blue-text-gradient",
      },
      {
        name: "windev mobile",
        color: "green-text-gradient",
      },
    ],
    image: cuvee,
    source_code_link: "https://github.com/nikiema-marius",
  },
  {
    name: "Guide voyage",
    description:
      "il s'agit d'un site qui permettra au tourisme de mieux connaitre le Burkina en effet ce site donne toutes les information concernant des zones du burkina et aussi vous donne les differents sites touristiques ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/nikiema-marius",
  },
  {
    name: "Appication Mobile de restaurant",
    description:
      "il s'agit d'une application que j'ai developpé en react native qui permet de vous lister les restaurants les plus proches de vous et vous propose quelques main des restaurants",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/nikiema-marius",
  },

  {
    name: "Giga Energie",
    description:
      "plateforme qui permet a la societe giga energie sis en coted'ivoire de automatiser leur processuss de souscription de kit solaire et aussi de faire un bilan des sorties",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: giga,
    source_code_link: "https://github.com/nikiema-marius",
  },
];

export { services, technologies, experiences, testimonials, projects };
