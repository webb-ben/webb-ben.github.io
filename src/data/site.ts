import type { ImageMetadata } from 'astro';

import avatar from '../assets/avatar.png';
import wis from '../assets/projects/wis.png';
import pygeoapi from '../assets/projects/pygeoapi.png';
import riverRunner from '../assets/projects/river-runner.png';
import nldi from '../assets/projects/nldi.png';
import usaMap from '../assets/projects/usa-map.png';
import wis2box from '../assets/projects/wis2box.png';
import usgs from '../assets/orgs/usgs.png';
import wmo from '../assets/orgs/wmo.png';
import iow from '../assets/orgs/iow.png';
import osgeo from '../assets/orgs/osgeo.png';

export const profile = {
  name: 'Ben Webb',
  fullName: 'Benjamin Webb',
  title: 'Software developer',
  email: 'ben@benwebb.com',
  location: 'Washington, D.C., USA',
  avatar,
  description:
    'Open-source software developer at the Center for Geospatial Solutions, Lincoln Institute of Land Policy.',
  about: [
    'I am an open-source software developer employed by the Center For Geospatial Solutions at the Lincoln Institute of Land Policy.',
    'My job is to build software that benefits others. I believe there is significant change that can be effected through Free and Open Source Software and I am lucky to be able to contribute to various open source projects.',
  ],
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/webb-ben', icon: 'mdi:github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ben-webb-654b8715b/', icon: 'mdi:linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/neb_webb', icon: 'mdi:twitter' },
];

export const focus = [
  {
    icon: 'lucide:code',
    title: 'Software development',
    text: 'Developing scalable, containerized services primarily in Python.',
  },
  {
    icon: 'lucide:layers',
    title: 'Full-stack experience',
    text: 'Full-stack development experience, from initial mockups to robust server-side functionality and user experience.',
  },
  {
    icon: 'lucide:git-fork',
    title: 'Open source contributor',
    text: 'Core contributor to pygeoapi, wis2box, and the Hydro Network-Linked Data Index.',
  },
  {
    icon: 'lucide:mountain',
    title: 'Climbing',
    text: 'In my free time I love to spend my time outside, hopefully rock climbing.',
  },
];

export type Project = {
  title: string;
  /** Where the card links: the live site, or the GitHub repo for open-source work. */
  href: string;
  category: 'Open source' | 'Web development';
  /** Screenshot; also the placeholder shown while a live preview loads. */
  image?: ImageMetadata;
  /** URL rendered as a scaled-down live iframe preview instead of the screenshot. */
  embed?: string;
};

export const projects: Project[] = [
  {
    title: 'WIS 2.0 Live',
    href: 'https://benwebb.com/wis-live',
    category: 'Web development',
    image: wis,
    embed: 'https://benwebb.com/wis-live/',
  },
  {
    title: 'Amtracker',
    href: 'https://benwebb.com/amtracker',
    category: 'Web development',
    embed: 'https://benwebb.com/amtracker/',
  },
  { title: 'pygeoapi', href: 'https://github.com/geopython/pygeoapi', category: 'Open source', image: pygeoapi },
  { title: 'Global River Runner', href: 'https://river-runner-global.samlearner.com/', category: 'Web development', image: riverRunner },
  { title: 'NLDI', href: 'https://github.com/internetofwater/nldi-services', category: 'Open source', image: nldi },
  {
    title: 'Covid Map',
    href: 'https://benwebb.com/usa-map',
    category: 'Web development',
    image: usaMap,
    embed: 'https://benwebb.com/usa-map/',
  },
  { title: 'wis2box', href: 'https://github.com/World-Meteorological-Organization/wis2box', category: 'Open source', image: wis2box },
];

export const experience = [
  {
    role: 'Software Developer',
    period: '2021 — 2025',
    text: 'As a Software Developer for the Internet of Water project, I create open-source solutions that facilitate the adoption of state-of-the-art water data infrastructure by government agencies at the state and federal levels.',
  },
  {
    role: 'Contracted Developer',
    period: '2021 — 2022',
    text: 'Full-stack developer, with significant contributions to the wis2box, wis2box-ui, wis2box-admin, wis2box-auth, and wis2box-api repositories.',
  },
  {
    role: 'Research Intern',
    period: '2018 — 2019',
    text: 'Coded phenotype algorithms in SQL for the Columbia Electronic Health Record leveraging the Observational Medical Outcomes Partnership Common Data Model, which aims to break data siloing by improving the portability of phenotype algorithms between medical centers.',
  },
];

export const education = [
  {
    school: 'Colby College',
    period: '2016 — 2020',
    text: 'Bachelor of Arts in Computational Biology, Chemistry Minor. Honors in Computer Science, Distinction in Computational Biology.',
  },
];

export const skills = ['Python', 'Containerized development', 'Google Cloud Platform', 'User interface development'];

export const organizations = [
  { name: 'U.S. Geological Survey', href: 'https://www.usgs.gov/', logo: usgs },
  { name: 'World Meteorological Organization', href: 'https://public.wmo.int/', logo: wmo },
  { name: 'Internet of Water', href: 'https://internetofwater.org/', logo: iow },
  { name: 'OSGeo', href: 'https://www.osgeo.org/', logo: osgeo },
];
