const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://edebruin2.github.io/portfolio',
  title: 'EdeB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Emmett de Bruin',
  role: 'Software Engineer',
  description:
    'I am currently based in Long Island, New York. I graduated with a BA in Computer Science from The University of San Diego in 2025.',
  resume: 'https://github.com/edebruin2/edebruin-portfolio-website/raw/main/Emmett%20de%20Bruin_RESUME.pdf',
  social: {
    linkedin: 'www.linkedin.com/in/emmett-de-bruin-9a4580235',
    github: 'https://github.com/edebruin2',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'MathArt Playground',
    description:
      'IOS app used to create colorful art using geometric functions. Mainly used for relaxation or to help younger children get a better understanding of geometry without being overwhelmed by equations. ',
    stack: ['Swift', 'Agile', 'Firestore'],
    sourceCode: 'https://github.com/usd-cs/COMP-49X-24-25-PhoneArt',
    livePreview: 'https://https://apps.apple.com/us/app/mathart-playground/id6745572126',
  },
  {
    name: 'Pokemon Simulator',
    description:
      'A bare bones pokemon simulator, allowing the user to level up, battle, and catch pokemon. Offers a subset of pokemon which all have individual stat blocks and move pools.',
    stack: ['Java', 'OOP', 'Peer Programming'],
    sourceCode: 'https://github.com/usd-cs/comp305-final-project-sp24-s01s02-austincristianemmett-project4',
  },
  {
    name: 'Project 3',
    description:
      'TBA',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C',
  'JavaScript',
  'Java',
  'React',
  'Agile',
  'Object-Oriented Programming',
  'Material UI',
  'Git/Github',
  'HTML',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'emmettdebruin22@gmail.com',
}

export { header, about, projects, skills, contact }
