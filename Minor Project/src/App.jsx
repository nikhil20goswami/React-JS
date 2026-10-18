
import { useState } from 'react';
import {
  X,
  FileText,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Assistant from './pages/Assistant';
import Notes from './pages/Notes';
import Collections from './pages/Collections';
import Settings from './pages/Settings';

const initial = [
  {
    id: 1,
    title: 'Operating System — Unit 3',
    type: 'PDF',
    pages: 42,
    size: '2.4 MB',
    date: 'Today',
    color: 'violet',
    status: 'Indexed',
    topic: 'Operating Systems',
  },
  {
    id: 2,
    title: 'Data Compression Notes',
    type: 'PDF',
    pages: 28,
    size: '1.8 MB',
    date: 'Yesterday',
    color: 'blue',
    status: 'Indexed',
    topic: 'Data Compression',
  },
  {
    id: 3,
    title: 'RAG: A Survey of Methods',
    type: 'PDF',
    pages: 19,
    size: '3.1 MB',
    date: 'Oct 10',
    color: 'orange',
    status: 'Indexed',
    topic: 'Research Paper',
  },
  {
    id: 4,
    title: 'Theory of Computation',
    type: 'PDF',
    pages: 56,
    size: '4.6 MB',
    date: 'Oct 08',
    color: 'green',
    status: 'Indexed',
    topic: 'TOC',
  },
];

export default function App() {
  const [page, setPage] = useState('Dashboard');
  const [search, setSearch] = useState('');
  const [docs, setDocs] = useState(initial);
  const [selected, setSelected] = useState(null);
  const [mobile, setMobile] = useState(false);

  function addFiles(files) {
    setDocs((old) => [
      ...Array.from(files).map((f, i) => ({
        id: Date.now() + i,
        title: f.name.replace(/\.[^/.]+$/, ''),
        type: f.name.split('.').pop().toUpperCase(),
        pages: '—',
        size: Math.max(1, Math.round(f.size / 1024)) + ' KB',
        date: 'Just now',
        color: ['violet', 'blue', 'orange', 'green'][i % 4],
        status: 'Pending backend',
        topic: 'Uploaded file',
      })),
      ...old,
    ]);
  }

  function remove(id) {
    if (
      window.confirm(
        'Remove this document from the demo library?'
      )
    ) {
      setDocs((old) => old.filter((d) => d.id !== id));
    }
  }

  const props = {
    documents: docs,
    onOpen: setSelected,
    onDelete: remove,
    onFiles: addFiles,
    setPage,
    search,
  };

  return (
    <div className="app-shell">
      <Sidebar page={page} setPage={setPage} />

      <main className="main">
        <Topbar
          page={page}
          search={search}
          setSearch={setSearch}
          setMobileOpen={setMobile}
        />

        {page === 'Dashboard' ? (
          <Dashboard {...props} />
        ) : page === 'My documents' ? (
          <Documents {...props} />
        ) : page === 'AI assistant' ? (
          <Assistant documents={docs} />
        ) : page === 'Study notes' ? (
          <Notes />
        ) : page === 'Collections' ? (
          <Collections />
        ) : (
          <Settings />
        )}

        <footer>
          <span>© 2026 Notely AI</span>

          <span>
            <i /> Built for better learning
          </span>

          <span>Privacy-first workspace</span>
        </footer>
      </main>

      {mobile && (
        <div
          className="mobile-overlay"
          onClick={() => setMobile(false)}
        >
          <button onClick={() => setMobile(false)}>
            <X />
          </button>

          <Sidebar
            page={page}
            setPage={(p) => {
              setPage(p);
              setMobile(false);
            }}
          />
        </div>
      )}

      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-x"
              onClick={() => setSelected(null)}
            >
              <X size={18} />
            </button>

            <div className={'doc-icon ' + selected.color}>
              <FileText size={22} />
            </div>

            <div className="eyebrow">
              DOCUMENT PREVIEW
            </div>

            <h2>{selected.title}</h2>

            <p>
              This is a preview placeholder. After backend
              integration, extracted text, page metadata, and
              indexed chunks will appear here.
            </p>

            <div className="modal-meta">
              <span>
                <FileText size={14} /> {selected.pages} pages
              </span>

              <span>
                <CheckCircle2 size={14} /> {selected.status}
              </span>
            </div>

            <button
              className="primary"
              onClick={() => setSelected(null)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
