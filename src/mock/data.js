import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: "Parag's Portfolio",
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  name: 'Parag Vaid',
  subtitle: "I'm a Software Developer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Fourth Year Computer Engineering student with an interest and adequate skills in the domain of Web Development and Machine learning. I love working with new technologies and take on challenging projects.',
  resume: 'https://drive.google.com/file/d/1SM-F699NJWvlSimOwjaMoN4_chAXmzjs/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    title: 'Project Finder',
    info:
      'Project Finder is an application that acts as a medium of communication between the students regarding their extra-curricular activities like open-source projects, hackathons, etc, and helps students to connect.',
    info2: 'React, Node Js, Hasura and GraphQl',
    repo: 'https://github.com/parag1999/Project-Finder',
  },
  {
    id: uuidv1(),
    title: 'College Event Manager',
    info:
      'An app made for college which automatically generates report pdf of the events conducted and automatically sends an email to the respected authority and also has features like event scheduling and an option for generating a monthly excel file.',
    info2: 'React, Django and DRF',
    repo: 'https://github.com/parag1999/college-event-manager',
  },
  {
    id: uuidv1(),
    title: 'Attention Span Checker',
    info:
      "A portal to infer student's attention based on the facial features captured during a live video conference or while watching a course video and using it to make the lectures and content more engaging and interesting.",
    info2: 'OpenCV, DRF, Django, WebRTC, HTML, CSS',
    repo: 'https://github.com/parag1999/sih-2020-qualification-hackathon',
  },
  {
    id: uuidv1(),
    title: 'E-Yantra Nutty Squirrel',
    info:
      "eYantra Robotics competition: Built a line following, color sensing bot with picking and releasing mechanism using Atmega256 which traversed using Djikstra's algorithm",
    info2: 'Embedded C',
    repo: 'https://github.com/parag1999/E-Yantra2018-semifinals',
  },
  {
    id: uuidv1(),
    title: 'Sleep Stage Classifier',
    info:
      'Manually scoring sleep stages is a tedious task requiring sleep experts to visually inspect PSG data recorded during the whole sleep study. These EEG signals are classified using 2D and 1D CNN.',
    info2: 'Keras, Tensorflow, Matplotlib',
    repo: 'https://github.com/parag1999/Sleep-Stages-Classification-using-EEG-and-Spectrogram',
  },
  {
    id: uuidv1(),
    title: 'Food Feed',
    info:
      'A Web app and a PWA which connects Hotel Owners, catering services, event organizers, etc who have high food wastage and volunteers who are willing to help the people in need through a chain of command.',
    info2: 'React, Hasura, GraphQl',
    repo: 'https://github.com/parag1999/spit-hackathon-2020',
  },
  {
    id: uuidv1(),
    title: 'Gender recognition by voice',
    info:
      'In this project, the focus is on training computers to identify the gender based on input of acoustic attributes using various Machine Learning algorithms like SVM, Random Forest Classifier, Gradient Boosting and Logistic Regression and get the best results',
    info2: 'Scikit learn, Pandas, Matplotlib',
    repo: 'https://github.com/parag1999/Gender-Classification-using-voice',
  },
  {
    id: uuidv1(),
    title: 'Interview helper',
    info:
      'A portal where students who are preparing for vivas and interview can go through all sorts of question and videos provided by teachers and generate custom docs of their notes ',
    info2: 'Nodejs-ExpressJs, MYSQL, HTML, CSS',
    repo: 'https://github.com/parag1999/Mini-project-Interview-helper',
  },
  // {
  //   id: uuidv1(),
  //   title: 'Stock Data Predictor',
  //   info: 'Clone and reorganise the repo',
  //   info2: '',
  //   repo: 'https://github.com/parag1999/Stock-Data-Predictor',
  // },
  // {
  //   id: uuidv1(),
  //   title: 'Politist',
  //   info: '',
  //   info2: '',
  //   repo: 'https://github.com/parag1999',
  // },
];

export const experienceData = [
  {
    id: uuidv1(),
    title: 'JP Morgan Chase & Co',
    info: ['Worked on an end to end Interns for Social Good project'],
    start: 'June 2020',
    end: 'July 2020',
    role: 'Software Engineer Intern',
    info2: 'Django, DRF, React, Redux, Flask, OpenCV',
  },
  {
    id: uuidv1(),
    title: 'Lido Learning',
    info: [
      'Automated content mining for scaling question creation process.',
      'Owner of end-to-end development of content dashboard and quiz module.\n',
      'Collaborated with backend team to deploy Apollo GraphQL server.',
    ],
    start: 'June 2019',
    end: 'August 2019',
    role: 'Web Development  Intern',
    info2: 'React, Redux, Hasura, GraphQL, Serverless, AWS lambda.',
  },
  {
    id: uuidv1(),
    title: 'DJ Unicode',
    info: [
      'Unicode is a purely technical organisation of D.J.Sanghvi College of Engineering',
      'Member of the Core Committee',
      'Currently mentoring a project on placement portal for college',
    ],
    start: 'August 2019',
    end: 'Present',
    role: 'Full Stack Mentor',
    info2: '',
  },
  {
    id: uuidv1(),
    title: 'DJ ICACTA',
    start: 'August 2019',
    end: 'Feb 2020',
    role: 'Sponsorship Committee',
    info: [
      'ICACTA stands for International Conference on Advanced Computing Technologies and Applications',
      'It was held in the month of February, 2020',
    ],
    info2: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'paragvaid3496@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/parag_vaid/',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/parag-vaid-59b978179/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/parag1999',
    },
    {
      id: uuidv1(),
      name: 'envelope',
      url: 'mailto:paragvaid3496@gmail.com',
    },
  ],
};
