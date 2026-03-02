// this component is used to close the modal when the user clicks outside of it or uses the close button
import { useEffect, useRef } from "react";

function StopModal({ stop, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    // focus the close button for accessibility
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${stop.name} details`}
      onMouseDown={(e) => {
        // click backdrop to close
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <button
          ref={closeBtnRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          ×
        </button>

        {stop.image && (
          <img src={stop.image} alt={stop.name} className="modal-image" />
        )}

        <h2 className="modal-title">{stop.name}</h2>
        <p className="modal-location">{stop.location}</p>

        <p className="modal-highlight">{stop.highlight}</p>

        <p className="modal-feature">
          <strong>Favorite feature:</strong> {stop.feature}
        </p>

        <a
          className="modal-link"
          href={stop.link}
          target="_blank"
          rel="noreferrer"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default StopModal;
