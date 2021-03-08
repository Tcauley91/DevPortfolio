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
    img: 'feedme.jpg',
    title: 'Feed Me!',
    info: 'Feed Me is a solution to the hardest question of the day; what am I going to eat? Feed Me can populate nearby restaurants or if you are would prefer to cook; it can produce over 360,000 recipes. This application is powered jQuery and JavaScript utilizing two APIs, Spoonacular & Zomato.',
    info2: '',
    url: 'https://tcauley91.github.io/Feed-Me/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reactgames.jpg',
    title: 'React Games',
    info: 'Built with React.js, utilizing JWT Authentication and React-Table. React Games is a great place to challenge yourself as well as your peers to see who can get the highest scores.',
    info2: '',
    url: 'https://reactgames.herokuapp.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Day Planner',
    info: 'Keep track of your daily appointments with ease, this day planner will actively track the time throughout the day letting you know if you are or are not on schedule with your appointments.',
    info2: '',
    url: 'https://tcauley91.github.io/Day-Planner/',
    repo: 'https://github.com/Tcauley91/Day-Planner', // if no repo, the button will not show up
  },
  {
  id: nanoid(),
    img: 'project.jpg',
    title: 'Progressive Budget',
    info: 'Keep track of your spending habbits or profit and losses with this easy to use budget tracketr.',
    info2: '',
    url: 'https://secret-citadel-22710.herokuapp.com/',
    repo: 'https://github.com/Tcauley91/Progressive-Budget', // if no repo, the button will not show up
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
