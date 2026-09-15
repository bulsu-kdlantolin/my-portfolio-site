import { PipelineNode } from '../types/pipeline';

export const pipelineNodes: PipelineNode[] = [
  {
    id: 'user-query',
    stepNumber: 1,
    label: '01. Query Input',
    title: 'User Query & Input Sanitization',
    category: 'Client & Gateway',
    summary: 'The visitor or user submits a natural-language question or task prompt via the interface.',
    inputFormat: 'Raw natural-language string (e.g., "How does Sensa handle live captions?")',
    outputFormat: 'Sanitized text payload with user session context & length bounds',
    coreLogic: 'Validate request length, strip malicious character sequences, and ensure input is properly bounded before model ingestion.',
    technologies: ['TypeScript', 'Zod / Validation', 'REST API / WebSocket'],
    engineeringConsiderations: [
      'Input token bounds prevent accidental buffer exhaustion.',
      'Checking for prompt injection patterns at the gateway layer.',
      'Normalizing Unicode character encodings.'
    ],
    codeSnippet: {
      language: 'typescript',
      code: `// Gateway Validation
export function sanitizeQuery(rawInput: string): string {
  const trimmed = rawInput.trim();
  if (trimmed.length < 3 || trimmed.length > 1000) {
    throw new Error('Query length out of supported bounds');
  }
  return trimmed.replace(/[\\u0000-\\u001F\\u007F-\\u009F]/g, '');
}`
    }
  },
  {
    id: 'embedding-generation',
    stepNumber: 2,
    label: '02. Vector Embedding',
    title: 'High-Dimensional Vector Embedding',
    category: 'Model Transformation',
    summary: 'The query text is passed to an embedding model to convert semantic meaning into a mathematical coordinate array.',
    inputFormat: 'Sanitized text query string',
    outputFormat: 'Dense float32 array (e.g., 1536 dimensions in text-embedding-3-small)',
    coreLogic: 'Maps tokens into a dense geometric space where concepts with similar meanings sit near each other regardless of wording.',
    technologies: ['Python', 'OpenAI text-embedding-3-small', 'Hugging Face Transformers'],
    engineeringConsiderations: [
      'Embedding latency must be kept low (typically ~20-50ms).',
      'Batching query embeddings when processing multiple documents.',
      'Consistency: the exact same model must be used for indexing and querying.'
    ],
    codeSnippet: {
      language: 'python',
      code: `# Python Embedding Generation
from openai import OpenAI
client = OpenAI()

def generate_embedding(text: str) -> list[float]:
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding`
    }
  },
  {
    id: 'vector-search',
    stepNumber: 3,
    label: '03. Vector Search',
    title: 'Vector Database Similarity Retrieval',
    category: 'Information Retrieval',
    summary: 'The query vector is compared against thousands of pre-indexed document chunks to find the closest matches.',
    inputFormat: '1536-dimensional query vector + optional metadata filters',
    outputFormat: 'Top-K nearest chunk records with cosine similarity scores and source metadata',
    coreLogic: 'Computes cosine distance or dot product across indexed vectors using approximate nearest neighbor (ANN) search algorithms.',
    technologies: ['Vector Databases (ChromaDB / Pinecone / pgvector)', 'Cosine Similarity'],
    engineeringConsiderations: [
      'Selecting optimal K (e.g., top-3 or top-5 chunks) balances relevance against context bloat.',
      'Similarity thresholds (e.g., score > 0.78) filter out noisy, irrelevant chunks.',
      'Metadata filtering (e.g., category == "accessibility") narrows search space.'
    ],
    codeSnippet: {
      language: 'python',
      code: `# Vector Search (Cosine Similarity Match)
results = vector_db.query(
    query_embeddings=[query_vector],
    n_results=3,
    where={"status": "published"}
)
# Returns top-3 matching chunks with similarity score`
    }
  },
  {
    id: 'retrieved-context',
    stepNumber: 4,
    label: '04. Context Filtering',
    title: 'Retrieved Context & Metadata Filtering',
    category: 'Knowledge Verification',
    summary: 'Matched document excerpts are extracted, verified, deduplicated, and prepared for prompt assembly.',
    inputFormat: 'Raw chunk payloads with metadata attributes and score rankings',
    outputFormat: 'Cleaned, structured contextual excerpts with source citations',
    coreLogic: 'Re-ranks chunks, verifies relevance confidence, and constructs reference IDs so the user can see where answers originated.',
    technologies: ['Python / TypeScript', 'Document Chunking', 'Metadata Schema'],
    engineeringConsiderations: [
      'Token budget calculation ensures chunks do not exceed prompt context limits.',
      'Deduplicating overlapping passages from adjacent chunks.',
      'Attaching verifiable source references (file, section, line number).'
    ],
    codeSnippet: {
      language: 'typescript',
      code: `// Assembling Context Block
const contextBlock = matches
  .filter(match => match.score >= 0.75)
  .map((match, idx) => \`[DOC \${idx + 1} - \${match.metadata.title}]: \${match.content}\`)
  .join('\\n\\n');`
    }
  },
  {
    id: 'prompt-injection',
    stepNumber: 5,
    label: '05. Prompt Injection',
    title: 'Context Injection & Prompt Engineering',
    category: 'System Orchestration',
    summary: 'The system prompt, retrieved knowledge chunks, and user query are combined into a structured prompt template.',
    inputFormat: 'System instructions + Formatted context blocks + User query',
    outputFormat: 'Final structured message payload for LLM ChatCompletions API',
    coreLogic: 'Enforces strict guardrails in the system message: answer ONLY based on provided context; cite sources; admit when facts are unknown.',
    technologies: ['OpenAI Prompt Engineering', 'Few-Shot Templates', 'System Guardrails'],
    engineeringConsiderations: [
      'Explicit negative constraints prevent fabrication and hallucinations.',
      'Structuring outputs as JSON or markdown with citation footnotes.',
      'Preserving conversation history if multi-turn dialogue is supported.'
    ],
    codeSnippet: {
      language: 'python',
      code: `system_prompt = """You are a precise technical assistant.
Answer the user's question using ONLY the provided verified context.
If the context does not contain the answer, explicitly state:
'The provided documentation does not contain this information.'
Always cite your source [DOC #]."""

messages = [
    {"role": "system", "content": system_prompt},
    {"role": "user", "content": f"Context:\\n{contextBlock}\\n\\nQuestion: {query}"}
]`
    }
  },
  {
    id: 'llm-synthesis',
    stepNumber: 6,
    label: '06. LLM Synthesis',
    title: 'Large Language Model Synthesis',
    category: 'Inference Engine',
    summary: 'The model analyzes the contextualized prompt, verifies factual alignment, and generates a grounded response.',
    inputFormat: 'Tokenized system and user message payload',
    outputFormat: 'Generated completion tokens (streamed in real-time)',
    coreLogic: 'Autoregressive transformer inference: predicting next tokens constrained by the prompt context, temperature parameter (e.g., 0.2 for factual precision).',
    technologies: ['OpenAI GPT-4o / GPT-4o-mini', 'Temperature Tuning (0.2)', 'Hugging Face'],
    engineeringConsiderations: [
      'Low temperature (0.1 - 0.3) enforces deterministic, fact-bound responses.',
      'Token consumption monitoring to control API cost and latency.',
      'Error handling for upstream rate limits and timeouts.'
    ],
    codeSnippet: {
      language: 'python',
      code: `# Streaming Chat Completion
response_stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=messages,
    temperature=0.2,
    stream=True
)`
    }
  },
  {
    id: 'streamed-response',
    stepNumber: 7,
    label: '07. UI Stream Output',
    title: 'Streamed UI Response & Citation Rendering',
    category: 'Client Presentation',
    summary: 'The client interface renders incoming text chunks in real-time with verified citations and latency metrics.',
    inputFormat: 'Server-Sent Events (SSE) token stream',
    outputFormat: 'Accessible, rendered markdown with source citations and telemetry',
    coreLogic: 'Consumes stream chunks, updates React state smoothly using requestAnimationFrame or chunk buffers, and renders interactive source popovers.',
    technologies: ['React', 'Server-Sent Events (SSE)', 'Markdown Renderer', 'Accessible UI'],
    engineeringConsiderations: [
      'Smooth streaming without UI layout stuttering.',
      'Keyboard-accessible citation links opening relevant document cards.',
      'Clear fallback indicators if connection terminates prematurely.'
    ],
    codeSnippet: {
      language: 'typescript',
      code: `// Client SSE Stream Handler
for await (const chunk of responseStream) {
  const token = chunk.choices[0]?.delta?.content || '';
  setStreamedText(prev => prev + token);
}`
    }
  }
];
