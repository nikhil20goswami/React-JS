
import {
  Plus,
  Files,
  Upload,
  ShieldCheck,
} from 'lucide-react';

import DocumentCard from '../components/DocumentCard';

export default function Documents({
  documents,
  onOpen,
  onDelete,
  onFiles,
  search,
}) {
  const filtered = documents.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page inner">
      <div className="page-title">
        <div>
          <div className="eyebrow">YOUR LIBRARY</div>

          <h1>My documents</h1>

          <p>
            All your academic resources, in one searchable space.
          </p>
        </div>

        <label className="primary">
          <Plus size={16} />
          Upload files

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

      {filtered.length ? (
        <div className="documents">
          {filtered.map((d) => (
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
          <Files size={25} />

          <b>No documents found</b>

          <p>
            Upload study material or change your search.
          </p>
        </div>
      )}

      <div className="notice">
        <ShieldCheck size={16} />
        This prototype records selected file metadata only.
        Actual extraction, embeddings, and indexing require
        the backend.
      </div>
    </div>
  );
}
