
import {
  Files,
  BrainCircuit,
  MessageCircle,
  Clock3,
  Plus,
  Upload,
  ArrowRight,
  Sparkles,
  FileText,
  BookOpen,
  FolderOpen,
  ShieldCheck,
} from 'lucide-react';

import StatCard from '../components/StatCard';
import DocumentCard from '../components/DocumentCard';

export default function Dashboard({
  documents,
  onOpen,
  onDelete,
  onFiles,
  setPage,
  search,
}) {
  const shown = documents
    .filter((d) =>
      d.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 4);

  return (
    <div className="page">
      <div className="welcome">
        <div>
          <div className="eyebrow">
            ● YOUR LEARNING, CONNECTED
          </div>

          <h1>
            Good evening, Nikhil <span>✦</span>
          </h1>

          <p>
            Your knowledge is growing. Pick up where you left off.
          </p>
        </div>

        <label className="primary">
          <Plus size={16} />
          Add new document

          <input
            type="file"
            multiple
            accept=".pdf,.txt,.doc,.docx"
            onChange={(e) =>
              onFiles(Array.from(e.target.files || []))
            }
          />
        </label>
      </div>

      <section className="hero">
        <div className="hero-text">
          <div className="eyebrow">
            <Sparkles size={14} />
            YOUR AI STUDY COMPANION
          </div>

          <h2>Learn beyond the page.</h2>

          <p>
            Ask questions across your documents, get clear
            explanations, and find the exact sources behind
            every answer.
          </p>

          <button onClick={() => setPage('AI assistant')}>
            Ask your notebook
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit1" />
          <div className="orbit orbit2" />

          <div className="brain">
            <BrainCircuit size={54} />
          </div>

          <div className="float-chip chip1">
            ✓ Source-backed
          </div>

          <div className="float-chip chip2">
            ✧ AI insights
          </div>
        </div>
      </section>

      <section className="stats">
        <StatCard
          icon={Files}
          label="Documents added"
          value={String(documents.length).padStart(2, '0')}
          trend="+2"
          note="Across your workspace"
          tone="purple"
        />

        <StatCard
          icon={BrainCircuit}
          label="Knowledge chunks"
          value="1,284"
          trend="+12%"
          note="Indexed for semantic search"
          tone="blue"
        />

        <StatCard
          icon={MessageCircle}
          label="Questions asked"
          value="36"
          trend="+8"
          note="This week"
          tone="orange"
        />

        <StatCard
          icon={Clock3}
          label="Study time saved"
          value="4.5h"
          trend="+18%"
          note="Estimated this month"
          tone="green"
        />
      </section>

      <section className="upload-strip">
        <div className="upload-symbol">
          <Upload size={20} />
        </div>

        <div>
          <b>Bring your study material together</b>

          <p>
            Drop files here or{' '}
            <label htmlFor="quick-upload">
              browse files
            </label>

            <small>
              PDF, DOCX or TXT · Frontend demo
            </small>
          </p>
        </div>

        <label className="secondary" htmlFor="quick-upload">
          ＋ Add documents
        </label>

        <input
          id="quick-upload"
          type="file"
          multiple
          accept=".pdf,.txt,.doc,.docx"
          onChange={(e) =>
            onFiles(Array.from(e.target.files || []))
          }
        />
      </section>

      <div className="section-heading">
        <div>
          <h2>Recent documents</h2>
          <p>Your recently added learning resources</p>
        </div>

        <button onClick={() => setPage('My documents')}>
          View all →
        </button>
      </div>

      {shown.length ? (
        <div className="documents">
          {shown.map((d) => (
            <DocumentCard
              key={d.id}
              doc={d}
              onOpen={onOpen}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          No documents match your search.
        </div>
      )}

      <div className="lower-grid">
        <section className="activity">
          <div className="section-heading">
            <div>
              <h2>Study activity</h2>
              <p>Your activity over the last 7 days</p>
            </div>
          </div>

          <div className="chart">
            {[4, 7, 5, 9, 6, 11, 8].map((h, i) => (
              <div key={i}>
                <i style={{ height: h * 8 }} />

                <small>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                </small>
              </div>
            ))}
          </div>
        </section>

        <section className="quick">
          <div className="section-heading">
            <div>
              <h2>Quick actions</h2>
              <p>What would you like to do?</p>
            </div>
          </div>

          {[
            [
              MessageCircle,
              'Ask a question',
              'Get answers from your documents',
              'AI assistant',
            ],
            [
              BookOpen,
              'Create study notes',
              'Turn complex topics into summaries',
              'Study notes',
            ],
            [
              FolderOpen,
              'Explore your library',
              'Browse all learning materials',
              'My documents',
            ],
          ].map(([Icon, title, desc, target]) => (
            <button
              key={title}
              onClick={() => setPage(target)}
            >
              <Icon size={18} />

              <span>
                <b>{title}</b>
                <small>{desc}</small>
              </span>

              <ArrowRight size={15} />
            </button>
          ))}
        </section>
      </div>

      <div className="disclaimer">
        <ShieldCheck size={14} />
        Prototype preview · Document indexing and AI answers
        need the backend connection.
      </div>
    </div>
  );
}
