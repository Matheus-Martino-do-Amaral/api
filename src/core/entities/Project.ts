import project from '../types/project';
import Technology from './Technology';

export default class Project {
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
  technologies: Technology[];

  constructor(project: project) {
    this.name = project.name;
    this.translation = project.translation;
    this.path = project.path;
    this.url = project.url;
    this.repository = project.repository;
    this.previews = project.previews;
    this.descriptions = project.descriptions;
    this.libraries = project.libraries;
    this.apis = project.apis;
    this.technologies = project.technologies;
  }
}
