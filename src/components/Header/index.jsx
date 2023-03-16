export default function Header({ page, pageHandler }) {
  return (
    <header>
      <button onClick={pageHandler}>
        Go to {page === "Home" ? "About" : "Home"}
      </button>
    </header>
  );
}
