const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://edebruin2.github.io/edebruin-portfolio-website',
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
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'emmettdebruin22@gmail.com',
}

export { header, about, projects, skills, contact }
