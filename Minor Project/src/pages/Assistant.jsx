
import { useState } from 'react';
import {
  BrainCircuit,
  Sparkles,
  Send,
  FileText,
  Plus,
  ShieldCheck,
} from 'lucide-react';

export default function Assistant({ documents }) {
  const [question, setQuestion] = useState('');

  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'Hi Nikhil! Ask me about your study material. This prototype demonstrates the chat experience; it is not connected to an LLM or retrieval backend yet.',
    },
  ]);

  function ask(q = question) {
    q = q.trim();

    if (!q) return;

    setMessages((m) => [
      ...m,
      { role: 'you', text: q },
      {
        role: 'ai',
        text: `Study guide for “${q}”

Start with the definition, explain the main points step by step, and add a relevant example. For a 7-mark exam answer, use clear headings and include a diagram or comparison table where appropriate.

This is a sample response. After backend integration, answers will be generated from retrieved document chunks and show verified page/section citations.`,
        source: documents[0]?.title,
      },
    ]);

    setQuestion('');
  }

  return (
    <div className="page inner">
      <div className="page-title">
        <div>
          <div className="eyebrow">✦ RAG-POWERED LEARNING</div>
          <h1>AI assistant</h1>
          <p>Ask questions. Understand concepts. Follow the sources.</p>
        </div>

        <span className="demo-pill">● Demo mode</span>
      </div>

      <div className="assistant">
        <aside className="context">
          <b>KNOWLEDGE CONTEXT</b>

          <label>Available documents</label>

          <div className="context-count">
            <FileText size={18} />

            <span>
              <strong>{documents.length} documents</strong>
              <small>In this workspace</small>
            </span>
          </div>

          <hr />

          <label>TRY ASKING</label>

          {[
            'Explain a topic in simple words',
            'Create a 7-mark exam answer',
            'Summarize my notes',
            'Compare two concepts',
          ].map((q) => (
            <button key={q} onClick={() => ask(q)}>
              ✧ {q} ↗
            </button>
          ))}

          <div className="context-note">
            <ShieldCheck size={15} />
            Source citations will be grounded after retrieval is connected.
          </div>
        </aside>

        <section className="chat">
          <div className="chat-head">
            <div className="agent">
              <div>
                <BrainCircuit size={20} />
              </div>

              <span>
                <b>Notebook assistant</b>
                <small>● Ready to help</small>
              </span>
            </div>

            <button
              onClick={() =>
                setMessages([
                  {
                    role: 'ai',
                    text: 'New conversation started. What would you like to study?',
                  },
                ])
              }
            >
              <Plus size={14} />
              New chat
            </button>
          </div>

          <div className="messages">
            {messages.map((m, i) => (
              <article
                className={'message ' + m.role}
                key={i}
              >
                <div className="message-icon">
                  {m.role === 'ai' ? (
                    <Sparkles size={15} />
                  ) : (
                    'NP'
                  )}
                </div>

                <div>
                  <b>{m.role === 'ai' ? 'Notely AI' : 'You'}</b>

                  <p>{m.text}</p>

                  {m.source && (
                    <div className="citation">
                      <FileText size={14} />

                      <span>
                        <small>SOURCE PREVIEW</small>
                        <b>{m.source}</b>
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <form
            className="composer"
            onSubmit={(e) => {
              e.preventDefault();
              ask();
            }}
          >
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything about your study material..."
              rows="2"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  ask();
                }
              }}
            />

            <div>
              <small>Enter to send · Shift + Enter for new line</small>

              <button className="primary" type="submit">
                <Send size={15} />
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
