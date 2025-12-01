export default function DossierPage() {
  return (
    <main style={{ padding: "2rem 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem" }}>
        <h1 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
          Dossier du spectacle
        </h1>

        {/* Bouton télécharger */}
        <a
          href="/dossier-spectacle.pdf"
          download
          style={{
            display: "inline-block",
            marginBottom: "1.5rem",
            padding: "0.7rem 1.2rem",
            backgroundColor: "#c11e2f",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Télécharger le PDF
        </a>

        {/* PDF affiché */}
        <iframe
          src="/dossier-spectacle.pdf"
          style={{
            width: "100%",
            height: "85vh",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "8px",
          }}
        />
      </div>
    </main>
  );
}
