import { meta, shopify, here, tesla, accenture } from '../assets/images';
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  tailwindcss,
  threads,
  typescript,
  python,
  java,
  go,
  springBoot,
  postgresql,
  mysql,
  jenkins,
  linux,
  jira,
  confluence,
  terraform,
  aws,
  gcp,
  docker,
  kubernetes,
  helm,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: python,
    name: 'Python',
    type: 'Backend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: java,
    name: 'Java',
    type: 'Backend',
  },
  {
    imageUrl: go,
    name: 'GoLang',
    type: 'Backend',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: springBoot,
    name: 'Spring Boot',
    type: 'Backend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: mysql,
    name: 'MySQL',
    type: 'Database',
  },
  {
    imageUrl: postgresql,
    name: 'PostgreSQL',
    type: 'Database',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: jenkins,
    name: 'Jenkins',
    type: 'Cloud',
  },
  {
    imageUrl: linux,
    name: 'Linux',
    type: 'OS',
  },
  {
    imageUrl: jira,
    name: 'Jira',
    type: 'Collaboration Tool',
  },
  {
    imageUrl: confluence,
    name: 'Confluence',
    type: 'Collaboration Tool',
  },
  {
    imageUrl: aws,
    name: 'AWS',
    type: 'Cloud',
  },
  {
    imageUrl: gcp,
    name: 'Google Cloud',
    type: 'Cloud',
  },
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'Cloud',
  },
  {
    imageUrl: kubernetes,
    name: 'Kubernetes',
    type: 'Cloud',
  },
  {
    imageUrl: helm,
    name: 'Helm',
    type: 'Cloud',
  },
  {
    imageUrl: terraform,
    name: 'Terraform',
    type: 'Cloud',
  },
];

export const experiences = [
  {
    title: 'DevOps Engineer Intern',
    company_name: 'HERE Technologies',
    icon: here,
    iconBg: '#B4B6BB',
    date: 'Jun 2023 - Sep 2023',
    points: [
      'Designed and implemented GKE infrastructure for data pipeline microservices, enabling the ingestion and processing of geographical data, which resulted in charting over 100 square miles of uncharted routes.',
      'Improved documentation of resource allocation in Confluence, enhancing team collaboration and transparency.',
      'Optimized GCP GKE cluster provisioning with Terraform, ensuring efficient resource usage and reducing costs by threefold.',
      'Collaborated with cross-functional teams to ensure seamless integration and deployment of microservices.',
      'Conducted regular reviews and updates to infrastructure, ensuring scalability and performance.',
    ],
  },
  {
    title: 'Team Lead/Software Engineer',
    company_name: 'Accenture',
    icon: accenture,
    iconBg: '#DCC2EB',
    date: 'Apr 2022 - Jun 2022',
    points: [
        "Streamlined the development process through requirement analysis and efficient application architecture design.",
        "Utilized Jira, GitHub, and Confluence for effective project management and collaboration.",
        "Led frontend development training sessions for employees across various domains.",
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Accenture',
    icon: accenture,
    iconBg: '#DCC2EB',
    date: 'Feb 2021 - Mar 2022',
    points: [
        "Developed the application layer for a search engine, leveraging Agile methodologies to ensure timely delivery and efficient teamwork.",
        "Engineered REST APIs using NodeJS and built the UI with React and TypeScript, following Test-Driven Development (TDD) principles for high-quality code.",
        "Enhanced React component performance through Lazy-loading and debouncing, while utilizing CSS and Material UI for a polished client interface.",
        "Ensured robust unit testing with jest, maintaining high code coverage to minimize bugs and improve application reliability.",
        "Conducted A/B testing to refine search filter functionality, enhancing user engagement and search accuracy.",
        "Streamlined version control using Git, and established CI/CD pipelines with Jenkins and GitHub Actions for seamless integration and deployment."
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Accenture',
    icon: accenture,
    iconBg: '#DCC2EB',
    date: 'Jul 2019 - Jan 2021',
    points: [
        "Developed a web-based Financial Reporting System for a multinational financial services firm, following Agile methodologies.",
        "Designed and implemented UI features using React and Redux, and built report generation modules with NodeJS and Typescript.",
        "Delivered RESTful APIs for report generation and financial statement modules using ExpressJS and Java Spring Boot.",
        "Achieved high code coverage and reduced bugs through unit testing in React with Jest.",
        "Employed Python, pandas, and SQLAlchemy to manage data extraction and storage in PostgreSQL.",
        "Upgraded Docker files to efficiently manage dependencies and environment configurations for multiple applications.",
        "Managed cloud server configurations with Nginx and set up CI/CD pipelines using Jenkins."
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Microservices Deployment on Google Cloud Kubernetes Engine',
    description:
      'Deployed three microservices to GCP GKE using Kubernetes, automated infrastructure with Terraform, optimized CI/CD pipelines, and enhanced system performance with custom GoLang Kubernetes Operator, Kafka integration, and Prometheus monitoring.',
    link: 'https://github.com/cyse7125-fall2023-group2',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Cloud Native Deployment on AWS',
    description:
      'Developed secure REST APIs with Python Flask, established CI with GitHub Actions, provisioned AWS resources with Terraform, created AMIs with Packer, and ensured scalability with EC2 autoscaling and CloudWatch integration.',
    link: 'https://github.com/orgs/AnkitLallOrganization/repositories',
  },
];
