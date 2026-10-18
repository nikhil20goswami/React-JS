
import { useState } from 'react';
import {
  BrainCircuit,
  ShieldCheck,
} from 'lucide-react';

export default function Settings() {
  const [theme, setTheme] = useState('Dark');
  const [citations, setCitations] = useState(true);
  const [simple, setSimple] = useState(false);

  return (
    <div className="page inner">
      <div className="page-title">
        <div>
          <div className="eyebrow">MAKE IT YOURS</div>

          <h1>Settings</h1>

          <p>Manage your workspace preferences.</p>
        </div>
      </div>

      <section className="settings">
        <h3>Workspace preferences</h3>

        <p>Personalize your study environment.</p>

        <div className="setting">
          <span>
            <b>Appearance</b>
            <small>
              Choose your preferred interface theme.
            </small>
          </span>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option>Dark</option>
            <option>Light</option>
            <option>System</option>
          </select>
        </div>

        <div className="setting">
          <span>
            <b>Show source citations</b>
            <small>
              Display source references with AI answers.
            </small>
          </span>

          <button
            className={'toggle ' + (citations ? 'on' : '')}
            onClick={() => setCitations(!citations)}
            aria-label="Toggle source citations"
          />
        </div>

        <div className="setting">
          <span>
            <b>Prefer simpler explanations</b>
            <small>
              Use beginner-friendly wording by default.
            </small>
          </span>

          <button
            className={'toggle ' + (simple ? 'on' : '')}
            onClick={() => setSimple(!simple)}
            aria-label="Toggle simple explanations"
          />
        </div>

        <div className="notice">
          <ShieldCheck size={15} />
          Preferences are only stored in this demo session.
        </div>
      </section>

      <section className="settings about">
        <div>
          <BrainCircuit size={25} />
        </div>

        <span>
          <h3>
            Notely AI <em>Prototype</em>
          </h3>

          <p>
            Student Notebook and Research Assistant using
            Retrieval-Augmented Generation.
          </p>

          <small>Frontend demo · Version 1.0.0</small>
        </span>
      </section>
    </div>
  );
}
