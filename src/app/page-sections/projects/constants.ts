import { IProject } from './interfaces';

export const PROJECTS: IProject[] = [
  {
    name: 'AI Attribution Toolkit',
    description:
      'Implementation of the toolkit as part of work conducted with my team at IBM Research. This effort aims to create a voluntary, detailed attribution standard that promotes transparency about how AI is used in creative work. It helps creators specify the type and degree of AI involvement in their work, encouraging more responsible and transparent use of generative tools.',
    logoPath: 'assets/images/AI_Attribution_Toolkit_Logo.png',
    websiteLink: 'https://aiattribution.github.io/',
  },
  {
    name: 'Exactamente',
    description:
      'Creator and maintainer of the website. The idea of the website is to provide a place where students can find tools and useful material to help them during their time at university.',
    logoPath: 'assets/images/Exactamente_Logo.jpg',
    websiteLink: 'https://www.exactamente.com.ar/',
  },
  {
    name: 'SurfPhotos',
    description:
      'Co-creator of the website. A website to showcase surfing photos taken by a photographer from the city where I am residing. The photos can be grouped into albums, and information is provided to contact the photographer.',
    logoPath: 'assets/images/SurfPhotos.jpeg',
    websiteLink: 'https://surfphotos.com.ar',
  },
];
