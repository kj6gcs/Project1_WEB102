function StopCard({ stop, onOpen }) {
  return (
    <article
      className="stop-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(stop)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(stop);
      }}
    >
      {stop.image && (
        <img src={stop.image} alt={stop.name} className="card-image" />
      )}

      <h2>{stop.name}</h2>
      <p className="location">{stop.location}</p>
      <p>{stop.highlight}</p>

      <p className="feature">
        <strong>Favorite feature:</strong> {stop.feature}
      </p>

      <a
        className="card-link"
        href={stop.link}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()} // prevents opening modal when clicking link
      >
        Visit Website
      </a>
    </article>
  );
}

export default StopCard;
