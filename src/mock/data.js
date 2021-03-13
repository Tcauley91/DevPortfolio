import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Web Developer based in Charlotte, NC. A graduate from the UNC Charlotte Full-Stack Web Development program with a focus in HTML5, CSS, JavaScript, JWT Authentication, jQuery, Bootstrap, Foundation, Boulma, Gatsby, Materialize, React.js, Node.js, Database Theory, Bookshelf.js, MongoDB, MySQL, Command Line, and Git.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1tsbbfqgVv60OjOUOffbXTBQDqzPQ9VVF6mhkukZGUQo/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'feedme.jpg',
    title: 'Feed Me!',
    info: 'Feed Me is a solution to the hardest question of the day; what am I going to eat? Feed Me can populate nearby restaurants or if you are would prefer to cook; it can produce over 360,000 recipes. This application is powered jQuery and JavaScript utilizing two APIs, Spoonacular & Zomato.',
    info2: '',
    url: 'https://tcauley91.github.io/Feed-Me/',
    repo: 'https://github.com/Tcauley91/Feed-Me', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reactgames.jpg',
    title: 'React Games',
    info: 'Built with React.js, utilizing JWT Authentication and React-Table. React Games is a great place to challenge yourself as well as your peers to see who can get the highest scores.',
    info2: '',
    url: 'https://reactgames.herokuapp.com/',
    repo: 'https://github.com/Tcauley91/React-Games', // if no repo, the button will not show up
  },
  {
  id: nanoid(),
    img: 'weatherdash.jpg',
    title: 'Weather Dashboard',
    info: 'Thinking of traveling to a different city but need to check the weather? This weather dashboard utilized the Open Weather API to grab real time data for any city you would like to know the weather of.',
    info2: '',
    url: 'https://tcauley91.github.io/Weather-Dashboard/',
    repo: 'https://github.com/Tcauley91/Weather-Dashboard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/brandon-tyler-cauley/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Tcauley91',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
