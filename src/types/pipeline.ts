export interface PipelineNode {
  id: string;
  stepNumber: number;
  label: string;
  title: string;
  category: string;
  summary: string;
  inputFormat: string;
  outputFormat: string;
  coreLogic: string;
  technologies: string[];
  engineeringConsiderations: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
}
