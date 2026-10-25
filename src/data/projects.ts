export type ProjectCategory = 'oracle' | 'postgres' | 'data' | 'voip' | 'electronics';

export interface Project {
  name: string;
  href?: string;
  category: ProjectCategory;
  tech: string;
  description: string;
}

export const projects: Project[] = [
  {
    name: 'Protoboard Editor',
    href: '/Protoboard-Editor/',
    category: 'electronics',
    tech: 'Next.js / Django',
    description: 'A browser layout editor for stripboards, dot boards, tripads and breadboard PCBs, with auto-layout. A fork of Stripboard Editor.',
  },
];
