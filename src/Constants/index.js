import {
  aboutImage1,
  aboutImage2,
  aboutImage3,
  aboutShape,
  aws,
  blog1,
  blog2,
  consulting,
  deployment,
  designing,
  dev,
  develop,
  development,
  devv,
  discover,
  expertiseShape,
  facebook,
  infoTech,
  instagram,
  ipsum1,
  ipsum2,
  ipsum3,
  ipsum4,
  ipsum5,
  line,
  linkedln,
  maintenance,
  processShape,
  quality,
  statShapes,
  support,
  supportAssist,
  technicalSupport,
  testing,
  testingg,
  timeDelivery,
  twitter,
} from "../Assets";

const NavLinks = [
  {
    id: "home",
    to: "/",
    title: "Home",
  },
  {
    id: "service",
    to: "/service",
    title: "Service",
  },
  {
    id: "company",
    to: "/company",
    title: "Company",
  },
  {
    id: "career",
    to: "/career",
    title: "Career",
  },
  {
    id: "blog",
    to: "/blog",
    title: "Blog",
  },
  {
    id: "contact",
    to: "/contact",
    title: "Contact us",
  },
];

const Ipsum = [
  {
    id: 1,
    image: ipsum1,
  },
  {
    id: 2,
    image: ipsum2,
  },
  {
    id: 3,
    image: ipsum3,
  },
  {
    id: 4,
    image: ipsum4,
  },
  {
    id: 5,
    image: ipsum5,
  },
];

const Statistics = [
  {
    id: 1,
    figure: "1560+",
    shapes: statShapes,
    title: "Project Delivered",
  },
  {
    id: 2,
    figure: "100+",
    shapes: statShapes,
    title: "Professional",
  },
  {
    id: 3,
    figure: "950+",
    shapes: statShapes,
    title: "Happy Client",
  },
  {
    id: 4,
    figure: "10 yrs",
    shapes: statShapes,
    title: "Experience",
  },
];

const Expertises = [
  {
    id: 1,
    image: timeDelivery,
    title: "On Time Delivery",
    content:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    id: 2,
    image: quality,
    title: "Best Quality",
    content:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    id: 3,
    image: supportAssist,
    title: "Support Assist",
    content:
      "Through True Rich Attended does no end it his mother since real had half every him.",
      shape: expertiseShape,
  },
];

const ServicesCard = [
  {
    id: 1,
    image: support,
    title: "Technical Support",
    content:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
  },
  {
    id: 2,
    image: testing,
    title: "Testing Management",
    content:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
  },
  {
    id: 3,
    image: dev,
    title: "Development",
    content:
      "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
  },
];

const ProcessCard = [ 
  {
    id: 1,
    image: discover,
    title: "Discover",
    content: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    number: "01",
    lined: line,
    shape: processShape,
  },
  {
    id: 2,
    image: designing,
    title: "Designing",
    content: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    number: "02",
    lined: line,
  },
  {
    id: 3,
    image: devv,
    title: "Development",
    content: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    number: "03",
    // lined: line,
  },
  {
    id: 4,
    image: testingg,
    title: "Testing",
    content: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    number: "04",
    lined: line,
  },
  {
    id: 5,
    image: deployment,
    title: "Deployment",
    content: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    number: "05",
    lined: line,
  },
  {
    id: 6,
    image: maintenance,
    title: "Maintenance",
    content: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    number: "06",
    shape2: processShape,
    // lined: line,
  },
]

const Blogr = [
  {
    id: 1,
    image: blog1,
    date: "Jan 19, 2023",
    title: "Today’s best design trends for digital products",
  },
  {
    id: 2,
    image: blog2,
    date: "Jan 19, 2023",
    title: "A practical guide to building a brand strategy",
  },
]

const aboutImages = [
  {
    id: 1,
    image: aboutImage1,
    image2: "",
  },
  {
    id: 2,
    image: aboutImage2,
    image2: "",
  },
  {
    id: 3,
    image: aboutImage3,
    image2: aboutShape,
  },
]

const footerLinks = [
  {
    id: 1, 
    text: "Home",
  },
  {
    id: 2, 
    text: "Service",
  },
  {
    id: 3, 
    text: "Company",
  },
  {
    id: 4, 
    text: "Career",
  },
  {
    id: 5, 
    text: "News",
  },
]

const footerLinks1 = [
  {
    id: 1, 
    title: "Service",
    text: "Technical Support",
  },
  {
    id: 2, 
    text: "Testing",
  },
  {
    id: 3, 
    text: "Development",
  },
  {
    id: 4, 
    text: "AWS/Azure",
  },
  {
    id: 5, 
    text: "Consulting",
  },
  {
    id: 6, 
    text: "Information Technology",
  },
]

const footerLinks2 = [
  {
    id: 1, 
    title: "Resources",
    text: "About Us",
  },
  {
    id: 2, 
    text: "Testimonial",
  },
  {
    id: 3, 
    text: "Privacy Policy",
  },
  {
    id: 4, 
    text: "Terms of use",
  },
  {
    id: 5, 
    text: "Blog",
  },
]

const socials = [
  {
    id: 1,
    link: "https://twitter.com/swift_fingers_",
    title: "facebook",
    image: facebook,
  },
  {
    id: 2,
    link: "https://twitter.com/swift_fingers_",
    title: "twitter",
    image: twitter,
  },
  {
    id: 3,
    link: "https://instagram.com/danie_swift_",
    title: "instagram",
    image: instagram,
  },
  {
    id: 4,
    link: "https://linkedln.com/daniel-ojeyomi",
    title: "linkedln",
    image: linkedln,
  },
]

const services = [
  {
    id: 1,
    caption: "Technical Support",
    title: "Best in class tech support for your company. We become your tech backbone ",
    content: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: technicalSupport,
  },
  {
    id: 2,
    caption: "Developoment",
    title: "Bring your ideas to reality with certified team of developers, working with latest technologies  ",
    content: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: develop,
  },
  {
    id: 3,
    caption: "AWS/Azure ",
    title: "We help you deploy, manage and secure your application on leading web services",
    content: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: aws,
  },
  {
    id: 4,
    caption: "Consulting",
    title: "Get advice from world class professionals ",
    content: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: consulting,
  },
  {
    id: 5,
    caption: "Information Technology",
    title: "We want to get local identification in every corner of the world in this era of global citizenship.",
    content: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.",
    image: infoTech,
  },
]

export { NavLinks, Ipsum, Statistics, Expertises, ServicesCard, services, ProcessCard, Blogr, footerLinks, footerLinks1, footerLinks2, socials, aboutImages };
