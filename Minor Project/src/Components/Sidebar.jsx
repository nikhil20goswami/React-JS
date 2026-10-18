
import {
  BrainCircuit,
  LayoutDashboard,
  Files,
  Bot,
  BookMarked,
  Library,
  Settings,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

const groups = [
  {
    title: 'WORKSPACE',
    items: [
      ['Dashboard', LayoutDashboard],
      ['My documents', Files],
      ['AI assistant', Bot],
      ['Study notes', BookMarked],
    ],
  },
  {
    title: 'MANAGE',
    items: [
      ['Collections', Library],
      ['Settings', Settings],
    ],
  },
];

export default function Sidebar({ page, setPage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <BrainCircuit />
        </div>

        <div>
          <b>
            notely<span>AI</span>
          </b>
          <small>YOUR KNOWLEDGE SPACE</small>
        </div>
      </div>

      <div className="workspace">
        <div className="workspace-avatar">S</div>

        <div>
          <b>Student workspace</b>
          <small>Free plan</small>
        </div>

        <ChevronDown size={15} />
      </div>

      {groups.map((g) => (
        <section className="nav-group" key={g.title}>
          <label>{g.title}</label>

          {g.items.map(([name, Icon]) => (
            <button
              key={name}
              className={
                'nav-item ' + (page === name ? 'active' : '')
              }
              onClick={() => setPage(name)}
            >
              <Icon size={18} />

              {name}

              {name === 'AI assistant' && <em>AI</em>}
            </button>
          ))}
        </section>
      ))}

      <div className="sidebar-bottom">
        <div className="upgrade">
          <Sparkles size={18} />

          <b>Make studying smarter</b>

          <p>
            Get more from your notes with AI-powered learning.
          </p>

          <button onClick={() => setPage('Settings')}>
            Explore features →
          </button>
        </div>

        <div className="profile">
          <div className="avatar">NP</div>

          <div>
            <b>Nikhil Puri Goswami</b>
            <small>Student account</small>
          </div>
        </div>
      </div>
    </aside>
  );
}
