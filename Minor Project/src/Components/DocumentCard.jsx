import { FileText, MoreHorizontal, CheckCircle2 } from 'lucide-react';

export default function DocumentCard({ doc, onOpen, onDelete }) {
  return (
    <article className="document-card">
      <div className="doc-top">
        <div className={'doc-icon ' + doc.color}>
          <FileText size={21} />
        </div>

        <button
          className="icon-button"
          onClick={() => onDelete(doc.id)}
          title="Remove document"
        >
          <MoreHorizontal size={19} />
        </button>
      </div>

      <button
        className="doc-title"
        onClick={() => onOpen(doc)}
      >
        {doc.title}
      </button>

      <div className="doc-meta">
        {doc.type} <i /> {doc.pages} pages <i /> {doc.size}
      </div>

      <div className="doc-bottom">
        <span>
          <CheckCircle2 size={13} /> {doc.status}
        </span>

        <small>{doc.date}</small>
      </div>
    </article>
  );
}
