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
  paragraphOne: 'I am a Web Developer based in Charlotte, NC. A graduate from the UNC Charlotte Full-Stack Web Development program with knowldge in HTML5, CSS, JavaScript, JWT Authentication, jQuery, Bootstrap, Foundation, Boulma, Gatsby, Materialize, React.js, Node.js, Database Theory, Bookshelf.js, MongoDB, MySQL, Command Line, and Git.',
  paragraphTwo: 'I love this craft because it is a never ending learning experience which means the bar is always being raised. It allows me to use my creative mind while developing a user friendly product that accommodates a smooth experience making it easy for your clients to navigate headache free. When I am not coding I can be found road cycling or traveling.',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1tsbbfqgVv60OjOUOffbXTBQDqzPQ9VVF6mhkukZGUQo/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Feed Me!',
    info: 'Feed Me is a solution to the hardest question of the day; what am I going to eat? Feed Me can populate nearby restaurants or if you are would prefer to cook; it can produce over 360,000 recipes. This application is powered jQuery and JavaScript utilizing two APIs, Spoonacular & Zomato.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'React Games',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
