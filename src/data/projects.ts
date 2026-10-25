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
    name: 'Data Flow',
    category: 'data',
    tech: 'Python / Airflow',
    description: 'A pipeline orchestration layer for scheduling and monitoring recurring data jobs.',
  },
  {
    name: 'Protoboard Editor',
    href: '/Protoboard-Editor/',
    category: 'electronics',
    tech: 'Next.js / Django',
    description: 'A browser layout editor for stripboards, dot boards, tripads and breadboard PCBs, with auto-layout. A fork of Stripboard Editor.',
  },
  {
    name: 'AltDonate',
    category: 'postgres',
    tech: 'Postgres / Next.js',
    description: 'A donation platform backed by a Postgres ledger with reconciliation tooling.',
  },
];
