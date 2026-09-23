import { Certification } from '../types/certification';

/**
 * Technical Certifications & Credentials
 * (Placeholder data: update with your official IDs, dates, and verification links)
 */
export const certificationsData: Certification[] = [
  {
    id: 'cert-fullstack-dev',
    title: 'Full-Stack Web Development & TypeScript Architecture',
    issuer: 'Meta / Coursera (Placeholder)',
    issuerCategory: 'Web Development',
    issueDate: '2025',
    credentialId: 'CRED-FS-94821',
    skills: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'State Architecture'],
    verificationUrl: '#',
    status: 'Verified'
  },
  {
    id: 'cert-applied-ai',
    title: 'Generative AI & LLM Retrieval-Augmented Generation (RAG)',
    issuer: 'DeepLearning.AI (Placeholder)',
    issuerCategory: 'Applied AI',
    issueDate: '2025',
    credentialId: 'CRED-AI-77304',
    skills: ['OpenAI API', 'Vector Embeddings', 'Semantic Search', 'Prompt Guardrails'],
    verificationUrl: '#',
    status: 'Verified'
  },
  {
    id: 'cert-database-sql',
    title: 'Relational Database Design & SQL Optimization',
    issuer: 'Oracle / Coursera (Placeholder)',
    issuerCategory: 'Database Engineering',
    issueDate: '2024',
    credentialId: 'CRED-DB-55219',
    skills: ['PostgreSQL', 'Schema Normalization', 'Complex Joins', 'Query Profiling'],
    verificationUrl: '#',
    status: 'Verified'
  },
  {
    id: 'cert-cloud-devops',
    title: 'Cloud Foundations & Modern DevOps Lifecycle',
    issuer: 'AWS Training & Certification (Placeholder)',
    issuerCategory: 'Cloud & Infrastructure',
    issueDate: '2024',
    credentialId: 'CRED-CL-33108',
    skills: ['Linux Administration', 'Git CI/CD', 'API Deployments', 'Container Basics'],
    verificationUrl: '#',
    status: 'Completed'
  }
];
