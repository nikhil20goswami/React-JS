
import {
  Library,
  Files,
  ArrowRight,
  Plus,
} from 'lucide-react';

const data = [
  [
    'Operating Systems',
    'Processes, memory, scheduling and more',
    'violet',
  ],
  [
    'Data Compression',
    'Entropy, Huffman coding and algorithms',
    'blue',
  ],
  [
    'Research & AI',
    'RAG papers, LLMs and retrieval',
    'orange',
  ],
  [
    'Theory of Computation',
    'Automata, grammars and formal languages',
    'green',
  ],
];

export default function Collections() {
  return (
    <div className="page inner">
      <div className="page-title">
        <div>
          <div className="eyebrow">
            ORGANIZE YOUR KNOWLEDGE
          </div>

          <h1>Collections</h1>

          <p>
            Group learning resources by subject or project.
          </p>
        </div>

        <button
          className="primary"
          onClick={() =>
            alert(
              'Collection creation will be connected to the backend.'
            )
          }
        >
          <Plus size={16} />
          New collection
        </button>
      </div>

      <div className="collections">
        {data.map(([title, desc, color]) => (
          <article key={title}>
            <div className={'collection-icon ' + color}>
              <Library size={22} />
            </div>

            <h3>{title}</h3>

            <p>{desc}</p>

            <div>
              <span>
                <Files size={14} />
                1 document
              </span>

              <ArrowRight size={15} />
            </div>
          </article>
        ))}
      </div>

      <p className="notice">
        These collections are sample frontend data for the prototype.
      </p>
    </div>
  );
}
