import technology from './technology';

type project = {
  name: string;
  translation: string;
  path: string;
  url: string;
  repository: string;
  previews: {
    miniature: string;
    gifs: {
      desktop: string;
      mobile: string;
    };
  };
  descriptions: {
    short: string;
    long: {
      paragraphs: string[];
    };
  };
  libraries: string[];
  apis: string[];
  technologies: technology[];
};

export default project;
