export interface courseListing {
  images: string;
  name: string;
  info: string;
}

export const card: courseListing[] = [
  {
    images: 'assets/images/course/skill-up.png',
    name: 'Skill-Up',
    info: 'Front End Developer'
  },
  {
    images: 'assets/images/course/soft-serve.png',
    name: 'SoftServe',
    info: 'HTML/CSS/JS'
  },
  {
    images: 'assets/images/course/programming-mentor.png',
    name: 'Programming Mentor',
    info: 'JS'
  },
];
