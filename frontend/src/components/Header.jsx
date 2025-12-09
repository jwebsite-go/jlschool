import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#222",
        color: "white",
      }}
    >
      {/* Лого */}
      <h1 style={{ margin: 0 }}>JL School</h1>

      {/* Навигация */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          fontSize: "18px",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/prices" style={{ color: "white", textDecoration: "none" }}>
          Prices
        </Link>

        <Link to="/tests" style={{ color: "white", textDecoration: "none" }}>
          Tests
        </Link>

        <Link to="/english" style={{ color: "white", textDecoration: "none" }}>
          English
        </Link>

        <Link to="/arabic" style={{ color: "white", textDecoration: "none" }}>
          Arabic
        </Link>

        <Link to="/japanese" style={{ color: "white", textDecoration: "none" }}>
          Japanese
        </Link>

        <Link to="/german" style={{ color: "white", textDecoration: "none" }}>
          German
        </Link>

        <Link
          to="/summer-school-usa"
          style={{ color: "white", textDecoration: "none" }}
        >
          Summer School USA
        </Link>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/jl_school2023"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#E1306C",
            padding: "8px 15px",
            borderRadius: "6px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Instagram
        </a>
      </nav>
    </header>
  );
}

export default Header;



