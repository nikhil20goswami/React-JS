
import { Search, Menu, CircleHelp } from 'lucide-react';

export default function Topbar({
  page,
  search,
  setSearch,
  setMobileOpen,
}) {
  return (
    <header className="topbar">
      <div className="crumb">
        <button
          className="mobile-menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={20} />
        </button>

        <span>Workspace</span>
        <i>/</i>
        <b>{page}</b>
      </div>

      <div className="top-actions">
        <label className="search">
          <Search size={16} />

          <input
            placeholder="Search anything..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <kbd>⌘ K</kbd>
        </label>

        <CircleHelp size={18} className="help" />

        <div className="avatar">NP</div>
      </div>
    </header>
  );
}
