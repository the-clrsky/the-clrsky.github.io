export type ProjectCategory = 'oracle' | 'postgres' | 'data' | 'voip';

export interface Project {
  name: string;
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
    name: 'AltDonate',
    category: 'postgres',
    tech: 'Postgres / Next.js',
    description: 'A donation platform backed by a Postgres ledger with reconciliation tooling.',
  },
];
