function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "white",
        padding: "20px",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} JL School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

