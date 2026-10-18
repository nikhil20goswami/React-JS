
export default function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  note,
  tone = 'purple',
}) {
  return (
    <article className="stat-card">
      <div className={'stat-icon ' + tone}>
        <Icon size={19} />
      </div>

      <div className="stat-info">
        <span>{label}</span>

        <div className="stat-value">
          {value}
          <em>↗ {trend}</em>
        </div>

        <small>{note}</small>
      </div>
    </article>
  );
}
