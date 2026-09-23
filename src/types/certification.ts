export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerCategory: string;
  issueDate: string;
  credentialId: string;
  skills: string[];
  verificationUrl?: string;
  status: 'Verified' | 'Completed' | 'In Progress';
}
