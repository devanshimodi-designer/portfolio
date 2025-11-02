export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate UI/UX designer who blends research, strategy, and aesthetics to shape impactful products.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Scholar Clone",
    des: "Designed the complete UI/UX architecture and website experience for ScholarClone, an all-in-one K-12 management platform, focusing on intuitive navigation, clear product storytelling, and improved user engagement.",
    img: "/p1.png",
    iconLists: ["/figma.png", "lovable.svg", ],
    link: "https://scholarclone.com/",
  },
  {
    id: 2,
    title: "Fibervalley",
    des: "Crafted a clear, credible, and user-friendly digital identity for Fibervalley, turning complex services into a seamless and trustworthy web experience.",
    img: "/p2.png",
    iconLists: ["/figma.png", "/lovable.svg"],
    link: "https://fibervalleyv1.vercel.app/",
  },
  {
    id: 3,
    title: "HumFirst",
    des: "Designed the end-to-end UI/UX for HP Skill System — a scalable skills & competency platform featuring assessment flows, personalized learning paths, admin tooling, and org-level analytics to drive measurable upskilling.",
    img: "/p3.png",
    iconLists: ["/figma.png", "/lovable.svg"],
    link: "https://www.figma.com/proto/TDcq3bNJqAvdMLFJ3oOUWA/CMS?page-id=0%3A1&node-id=453-180&scaling=scale-down-width&content-scaling=fixed&t=v1MV8v6oQ6bQTw5D-1",
  },
  {
    id: 4,
    title: "Velvet pour",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.png",
    iconLists: ["/figma.png", "/lovable.svg"],
    link: "https://www.figma.com/proto/kbXDlShJERfoXkpi7m207N/Personal-Demo-Design?page-id=29%3A51&node-id=29-405&p=f&viewport=417%2C60%2C0.08&t=wzZZgZyGv6edXDke-1&scaling=min-zoom&content-scaling=fixed",
  },
];

export const testimonials = [
  {
    quote:
      "Harsh's work looks great! It's clear that he care about your work. I'm glad to see him  challenging himself and he's open to more responsibilities.",
    name: "Ranjan Sharma",
    title: "Team Leader at Xira Infotech",
  },
  {
    quote:
      "Harsh is a dedicated professional who consistently delivers outstanding work. His attention to detail and commitment to quality are truly commendable. I have full confidence in his ability to take on new challenges and excel in any task he undertakes.",
    name: "Sunny Dharaiya",
    title: "Senior Developer at Xira Infotech",
  },
  {
    quote:
      "Working with Harsh has been a pleasure. His passion for his work is evident in the exceptional results he produces. Harsh is not afraid to step up and take on more responsibilities, which makes him a valuable asset to any team.",
    name: " Kishan Vishwakarma",
    title: "Web Designer at Xira Infotech",
  },
  {
    quote:
      "Harsh's work speaks volumes about his work ethic and dedication. He goes above and beyond to ensure that every project is completed with precision and care. I have no doubt that Harsh will continue to push himself and achieve great things in his career.",
    name: "Pravin Kulhari",
    title: "Senior Developer at Xira Infotech",
  },
  {
    quote:
      "Harsh is a true professional who consistently impresses with his work ethic and results. His willingness to take on new challenges demonstrates his growth mindset and determination to succeed. It's a pleasure to work with someone as dedicated and driven as Harsh.",
    name: "Nirav Panchal",
    title: "Senior Developer at Xira Infotech",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 4,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "UI Designer Intern - Unicron Solution",
    desc: "Learned core UI/UX principles through Mobile app design project.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg"
  },
  {
    id: 2,
    title: "UI/UX Design Intern - EFsouls LLP",
    desc: "Designed user-friendly web UI layouts, performed manual website testing for quality assurance, and managed LinkedIn content to strengthen brand presence.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UI/UX Designer & Researcher - Triz Innovation",
    desc: "Experienced in designing end-to-end product architectures and intuitive UI/UX for K-12 education platforms, LMS modules, enterprise systems, AI applications, HRMS apps, and branding websites, with a strong focus on usability, navigation flows, and user-centered research.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/devanshimodi-designer",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/devanshi-modi-8127b8227",
  },
];
