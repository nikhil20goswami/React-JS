
import { useState } from 'react';
import {
  BookMarked,
  Plus,
  Trash2,
} from 'lucide-react';

export default function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'RAG — Quick revision',
      subject: 'AI / Research',
      body: 'Retrieval-Augmented Generation combines information retrieval with text generation. Relevant document chunks are retrieved and passed as context to an LLM so the response can be grounded in source material.',
    },
    {
      id: 2,
      title: 'OS — Exam checklist',
      subject: 'Operating Systems',
      body: 'Revise paging and segmentation, virtual memory, deadlocks, semaphores, CPU scheduling, and inter-process communication.',
    },
  ]);

  const [active, setActive] = useState(1);

  const current = notes.find((n) => n.id === active);

  const update = (k, v) =>
    setNotes((ns) =>
      ns.map((n) =>
        n.id === active ? { ...n, [k]: v } : n
      )
    );

  function add() {
    const n = {
      id: Date.now(),
      title: 'Untitled note',
      subject: 'New subject',
      body: '',
    };

    setNotes((ns) => [n, ...ns]);
    setActive(n.id);
  }

  return (
    <div className="page inner">
      <div className="page-title">
        <div>
          <div className="eyebrow">YOUR THINKING SPACE</div>

          <h1>Study notes</h1>

          <p>
            Capture what matters and turn ideas into understanding.
          </p>
        </div>

        <button className="primary" onClick={add}>
          <Plus size={16} />
          New note
        </button>
      </div>

      <div className="notes-layout">
        <aside>
          {notes.map((n) => (
            <button
              className={active === n.id ? 'chosen' : ''}
              key={n.id}
              onClick={() => setActive(n.id)}
            >
              <BookMarked size={16} />

              <span>
                <b>{n.title}</b>
                <small>{n.subject}</small>
              </span>
            </button>
          ))}
        </aside>

        {current ? (
          <section className="note-edit">
            <div className="saved">
              ● Saved in this session

              <button
                onClick={() => {
                  setNotes((ns) =>
                    ns.filter((n) => n.id !== active)
                  );

                  setActive(
                    notes.find((n) => n.id !== active)?.id
                  );
                }}
              >
                <Trash2 size={15} />
              </button>
            </div>

            <input
              value={current.title}
              onChange={(e) => update('title', e.target.value)}
              aria-label="Note title"
            />

            <input
              value={current.subject}
              onChange={(e) => update('subject', e.target.value)}
              aria-label="Subject"
            />

            <textarea
              value={current.body}
              onChange={(e) => update('body', e.target.value)}
              placeholder="Write your notes here..."
              aria-label="Note content"
            />
          </section>
        ) : (
          <div className="empty">
            Create a note to get started.
          </div>
        )}
      </div>
    </div>
  );
}
