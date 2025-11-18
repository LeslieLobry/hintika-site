"use client";

import { useEffect, useState } from "react";

export default function VideoPage() {
  const [authorized, setAuthorized] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Au chargement : on regarde s'il existe déjà le cookie
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (document.cookie.includes("hintika_video_ok=1")) {
        setAuthorized(true);
      }
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/video-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.message || "Code invalide.");
        setAuthorized(false);
      } else {
        setAuthorized(true);
      }
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="section">
      <div className="container">
        <h1>Vidéo réservée</h1>
        <p className="intro">
          Cette vidéo est réservée à certains partenaires et programmateurs.
        </p>

        {!authorized && (
          <form onSubmit={handleSubmit} className="video-form">
            <label className="video-label">
              Entrez le code d’accès :
              <input
                type="password"
                className="video-input"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code d’accès"
              />
            </label>
            {error && <p className="video-error">{error}</p>}
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Vérification..." : "Valider"}
            </button>
          </form>
        )}

        {authorized && (
          <div className="video-wrapper">
            <h2>Teaser / captation</h2>
            {/* Option 1 : vidéo hébergée sur le site */}
            <video
              className="video-player"
              controls
              preload="metadata"
              src="/videos/hintika-teaser.mp4"
            />

            {/* Option 2 : si tu préfères un lecteur externe (Vimeo/YouTube) */}
            {/* <div className="video-iframe-wrapper">
              <iframe
                src="https://player.vimeo.com/video/XXXXX"
                title="Teaser Hintika"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div> */}
          </div>
        )}
      </div>
    </main>
  );
}
