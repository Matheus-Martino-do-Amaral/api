import Project from './src/core/entities/Project';
import Technology from './src/core/entities/Technology';

const tech1 = new Technology({
  logo: 'logo1',
  name: 'name1',
  description: 'description1',
});
const tech2 = new Technology({
  logo: 'logo2',
  name: 'name2',
  description: 'description2',
});

const project1 = new Project({
  name: 'Project 1',
  translation: 'Projeto 1',
  path: 'path 1',
  url: 'url 1',
  repository: 'repo 1',
  previews: {
    miniature: 'miniature 1',
    gifs: {
      desktop: 'desktop 1',
      mobile: 'mobile 1',
    },
  },
  descriptions: {
    short: 'short 1',
    long: {
      paragraphs: ['paragraph 1'],
    },
  },
  libraries: ['lib 1'],
  apis: ['api 1'],
  technologies: [tech1, tech2],
});

console.log(project1);
