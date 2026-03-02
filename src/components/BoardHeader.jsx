function BoardHeader({ title, subtitle }) {
  return (
    <header className="board-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

export default BoardHeader;
