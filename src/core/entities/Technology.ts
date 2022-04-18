import technology from '../types/technology';

export default class Technology {
  name: string;
  logo: string;
  description: string;

  constructor(technology: technology) {
    this.name = technology.name;
    this.logo = technology.logo;
    this.description = technology.description;
  }
}
