import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Titouan GUIOCHET | Developer', // e.g: 'Name | Developer'
  lang: 'en, fr', // e.g: en, es, fr, jp
  description: 'My personal porfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Titouan Guiochet',
  subtitle: "I'm a software Enginneer student.",
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a 21 years old french student interested in mechanic, sport, music and technology. I have a fairly good level of understanding in english, and I have my driving licence for both car and motorcycle.",
  paragraphTwo:
    "I'm currently in my third years of IT engineering study, my goal is to become a software engineer.",
  paragraphThree:
    'I mainly develop in Ruby and in Javascript, I am familiar with tool like GraphQL and RSpec. I have used Framework like React and Svelte. I also have some knowledge of Wordpress.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Internship At Startup Keypup .',
    info: 'This internship took place in La Rochelle from 04 January to 16 April 2021. I was responsible of developing a VSCode extension to extend the Keypup platform possibility.',
    info2: '',
    url: 'https://www.keypup.io/',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'titouan@guiochet.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/titouan-guiochet-92788a1a9/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/LilTits',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
