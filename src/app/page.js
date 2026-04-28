import PhotoCarousel from "../app/components/PhotoCarousel/PhotoCarousel";

// 🔹 Slides pour la galerie principale
const galerieSlides = [
  {
    src: "/1.JPG",
    alt: "Répétitions sur le plateau",
  },
  {
    src: "/2.JPG",
    alt: "Travail de table autour du texte",
  },
  {
    src: "/3.JPG",
    alt: "Essais lumière et espace",
  },
  {
    src: "/4.JPG",
    alt: "Essais lumière et espace",
  },
  {
    src: "/ag1.JPG",
    alt: "répétition",
  },
  {
    src: "/ag2.JPG",
    alt: "répétition",
  },
  {
    src: "/ag3.JPG",
    alt: "répétition",
  },
  {
    src: "/ag4.JPG",
    alt: "répétition",
  },
  {
    src: "/ag5.JPG",
    alt: "répétition",
  },
  {
    src: "/ag6.JPG",
    alt: "répétition",
  },
  {
    src: "/ag7.JPG",
    alt: "répétition",
  },
];

// 🔹 Slides pour la carte Ann-Gisel
const annGiselSlides = [
  {
    src: "/ann-gisel-1.jpg",
    alt: "Ann-Gisel Glass en répétition",
  },
  {
    src: "/ann-gisel-2.jpg",
    alt: "Ann-Gisel Glass sur scène",
  },
];

// 🔹 Slides pour la carte Didier Bernard
const didierSlides = [
  {
    src: "/didier-1.jpg",
    alt: "Didier Bernard en répétition",
  },
  {
    src: "/didier-2.jpg",
    alt: "Didier Bernard en discussion",
  },
  {
    src: "/didier-3.png",
    alt: "Didier Bernard en discussion",
  },
];

const marcelineSlides = [
  {
    src: "/Marceline.jpeg",
    alt: "Marceline Loridan-Ivens",
  },
];

export default function Home() {
  const reservationSubject = encodeURIComponent(
    "Réservation de places - L'Amour Après"
  );

  const reservationBody = encodeURIComponent(`Bonjour,

Je souhaiterais réserver des places pour le spectacle L'Amour Après.

Nombre de places :
Date souhaitée :
Nom / Prénom :
Téléphone :

Merci.`);

  const reservationMailto = `mailto:admin@hintika.fr?subject=${reservationSubject}&body=${reservationBody}`;

  const podcastLink =
    "https://idfm98.fr/podcast/les-secrets-de-la-servante-le-samedi-a-16h-avec-christelle-barrilliet/";

  return (
    <>
      {/* 🎬 VIDEO INTRO AJOUTÉE SANS RIEN SUPPRIMER */}
      <section className="intro-video-section" id="top">
        <div className="intro-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/3QjBiHw8Oqw?autoplay=1=1&controls=1&rel=0&modestbranding=1&playsinline=1"
            title="Teaser L'Amour Après"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="intro-video-actions">
          <a href="#site-content" className="btn">
            Entrer sur le site
          </a>
        </div>
      </section>

      <header className="hero" id="site-content">
        <div className="hero-overlay" />
        <div className="hero-content">
          <nav className="navbar">
            <a href="#top" className="nav-logo">
              Hintika
            </a>
            <div className="nav-links">
              <a href="#hintika">La compagnie</a>
              <a href="#projets">Productions</a>
              <a href="#amour-apres">L&apos;Amour Après</a>
              <a href="#amour-apres-equipe">L&apos;équipe</a>
              <a href="/video">Vidéo</a>
              <a href="#podcast">Podcast</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-text">
            <div className="hero-photo">
              <img
                src="/HINTIKA.png"
                alt="Affiche du spectacle L'Amour Après"
              />
            </div>

            <div className="hero-copy">
              <h1 className="logo">Hintika Production</h1>

              <p className="tagline">
                Une maison de création qui accompagne, éclaire et produit des
                projets engagés, sensibles et profondément humains.
              </p>

              <div className="hero-buttons">
                <a href="#projets" className="btn">
                  Découvrir nos productions
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contacter Hintika
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="hintika" className="section">
          <div className="container">
            <h2>
              <span>Hintika</span>, la structure
            </h2>
            <p className="intro">
              Hintika est une structure de production née du désir de porter des
              projets artistiques forts, incarnés et ancrés dans le réel.
            </p>
            <p>
              Nous accompagnons des artistes, des metteuses et metteurs en
              scène, des interprètes et des auteurs dans des créations qui
              interrogent notre époque, mêlant théâtre, écriture, image et
              matière documentaire. Nous défendons une approche humaine,
              attentive aux processus de travail autant qu&apos;aux formes
              finales.
            </p>
          </div>
        </section>

        <section id="projets" className="section section-alt">
          <div className="container">
            <h2>
              <span>Nos</span> productions
            </h2>

            <div className="grid">
              <article className="card">
                <h3>L&apos;Amour Après</h3>
                <p className="card-meta">
                  En création · Avec Ann-Gisel Glass · Mise en scène Didier
                  Bernard
                </p>
                <p>
                  Premier projet produit par Hintika : une adaptation sensible
                  et profondément incarnée du livre de Marceline Loridan-Ivens et
                  Judith Perrignon.
                </p>
                <a href="#amour-apres" className="card-link">
                  Découvrir le projet →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="amour-apres" className="section">
          <div className="container">
            <h2>
              <span>L&apos;Amour</span> Après, un projet Hintika
            </h2>

            <section id="galerie" className="section">
              <div className="container">
                <h2>
                  <span>Galerie</span> photos
                </h2>
                <PhotoCarousel slides={galerieSlides} />
              </div>
            </section>

            <p className="intro">
              Adaptation du livre de Marceline Loridan-Ivens et Judith
              Perrignon. Une traversée de la vie de Marceline après la
              déportation, où se rejoue la conquête de la liberté et la
              réconciliation entre la femme et la survivante.
            </p>
            <p>
              Sur scène, une femme seule, entourée d&apos;images et de voix. Elle
              convoque les rencontres qui ont jalonné sa vie d&apos;après : les
              hommes de passage, les amitiés, les compagnons de route et le
              cinéma, comme espace de parole et de transmission. Le spectacle
              tisse un dialogue sensible entre mémoire intime, histoire
              collective et désir de vivre.
            </p>

            <div className="hero-buttons">
              <a href="/video" className="btn btn-video">
                Voir la vidéo du spectacle
              </a>

              <a
                href={podcastLink}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎧 Écouter le podcast
              </a>
            </div>
          </div>
        </section>

        <section id="amour-apres-genese" className="section section-alt">
          <div className="container">
            <h2>
              <span>Genèse</span> du projet
            </h2>
            <p className="intro">
              Tout part d&apos;une lecture : un jour de pluie, un livre ouvert par
              hasard et refermé au cœur de la nuit, avec l&apos;évidence qu&apos;il
              faut en partager la voix sur un plateau.
            </p>
            <p>
              Ann-Gisel Glass y reconnaît quelque chose de sa propre histoire et
              de celle de sa famille, sans que les parcours soient identiques.
              Ce qui s&apos;impose avant tout, c&apos;est le mouvement de renaissance
              après la destruction, la manière dont Marceline choisit la vie,
              l&apos;amour, l&apos;humour et la liberté.
            </p>
            <p>
              Après une première collaboration autour de{" "}
              <em>La Princesse blanche</em> de Rilke, Ann-Gisel Glass et Didier
              Bernard cherchaient un nouveau projet commun. Ils le trouvent dans
              ce texte, qui devient le point de départ d&apos;une pièce pour une
              actrice dans une mise en scène sobre et attentive à la parole.
            </p>
          </div>
        </section>

        <section id="amour-apres-intention" className="section">
          <div className="container">
            <h2>
              <span>Note</span> d&apos;intention
            </h2>
            <p className="intro">
              Dès les premières lignes, nous sommes plongés dans la nuit de
              Marceline, dans la peur de perdre la vue, et dans cette question
              obsédante : comment continuer à vivre après l&apos;irreprésentable&nbsp;?
            </p>
            <p>
              À partir de là, la pièce suit une jeune femme qui refuse de se
              laisser définir uniquement par son statut de survivante. Son corps
              devient à la fois mémoire, terrain de jeu, lieu de plaisir et de
              questions. En parlant de ses amours, elle raconte aussi son retour
              au monde, sa façon d&apos;être « parmi les vivants ».
            </p>
            <p>
              La mise en scène propose un espace épuré où la voix d&apos;Ann-Gisel
              Glass répond à des présences filmées&nbsp;: visages, hommes,
              fragments de souvenirs, comme autant de partenaires imaginaires
              avec lesquels Marceline poursuit sa conversation. Le théâtre
              devient un lieu de partage direct avec le public, où la question
              du bonheur revient, simple, presque naïve, mais essentielle&nbsp;:
              « Êtes-vous en vie&nbsp;? Êtes-vous heureux&nbsp;? ».
            </p>
          </div>
        </section>

        <section id="podcast" className="section section-alt">
          <div className="container">
            <h2>
              <span>Podcast</span> autour de la pièce
            </h2>

            <p className="intro">
              Retrouvez un échange radiophonique autour de <em>L&apos;Amour Après</em>,
              de sa création, de ses résonances et de la parole portée par le
              spectacle.
            </p>

            <div className="card">
              <h3>Les secrets de la servante</h3>
              <p className="card-meta">
                IDFM 98 · Avec Christelle Barrilliet
              </p>
              <p>
                Une rencontre à écouter pour prolonger l&apos;univers de la pièce
                et découvrir un autre regard sur son cheminement artistique.
              </p>

              <div className="contact-actions">
                <a
                  href={podcastLink}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎧 Écouter le podcast
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="amour-apres-equipe" className="section section-alt">
          <div className="container">
            <h2>
              <span>Équipe</span> artistique
            </h2>
            <div className="grid">
              <article className="card">
                <PhotoCarousel slides={annGiselSlides} className="card-carousel" />

                <h3>Ann-Gisel Glass</h3>
                <p className="card-meta">Interprétation</p>
                <p>
                  D&apos;abord remarquée au cinéma, elle tourne notamment avec
                  Jean-Luc Godard, Costa-Gavras, Jacques Doillon, Olivier
                  Assayas, Tony Gatlif ou Gérard Jugnot. Elle se consacre ensuite
                  au théâtre et à la production de courts métrages, en
                  développant un travail où l&apos;intime et le politique se
                  rejoignent.
                </p>

                <a
                  href="/CV-AnnGiselGlass-2025-1.pdf"
                  className="card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir le cv →
                </a>
              </article>

              <article className="card">
                <PhotoCarousel slides={didierSlides} className="card-carousel" />

                <h3>Didier Bernard</h3>
                <p className="card-meta">Mise en scène</p>
                <p>
                  Comédien et formateur, il met en scène de nombreux spectacles
                  en France, au Liban et en Nouvelle-Calédonie. Son travail
                  s&apos;attache à faire entendre les textes dans des dispositifs
                  sobres, où la relation aux spectateurs est centrale et directe.
                </p>
                <a
                  href="/didiercv.pdf"
                  className="card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir le cv →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="autrices" className="section">
          <div className="container">
            <h2>
              <span>Les</span> autrices
            </h2>
            <div className="grid">
              <article className="card">
                <PhotoCarousel
                  slides={marcelineSlides}
                  className="card-carousel"
                />

                <h3>Marceline Loridan-Ivens</h3>
                <p className="card-meta">Scénariste, réalisatrice, écrivaine</p>
                <p>
                  Rescapée de la Shoah, elle consacre une grande partie de son
                  œuvre à la mémoire de la déportation et à la transmission&nbsp;:
                  films documentaires réalisés avec Joris Ivens, écrits
                  autobiographiques et récits où l&apos;intime rencontre
                  l&apos;histoire collective.
                </p>
              </article>

              <article className="card">
                <h3>Judith Perrignon</h3>
                <p className="card-meta">Autrice &amp; journaliste</p>
                <p>
                  Journaliste à <em>Libération</em> puis autrice de nombreux
                  livres, elle signe des récits, enquêtes et romans où se mêlent
                  portraits et grandes questions politiques. Elle co-écrit
                  notamment <em>Et tu n&apos;es pas revenu</em> et{" "}
                  <em>L&apos;Amour après</em> avec Marceline Loridan-Ivens.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>
              <span>Production</span> &amp; contact
            </h2>

            <p className="intro">
              Pour toute demande de programmation, d&apos;informations techniques,
              de presse ou de réservation, vous pouvez contacter Hintika et la
              production du spectacle.
            </p>

            <div className="contact-block">
              <p>
                <strong>Hintika Production</strong>
                <br />
                Structure de production et d&apos;accompagnement de projets
                artistiques.
              </p>

              <p>
                <strong>Contact production / diffusion / réservation</strong>
                <br />
                <a href="mailto:admin@hintika.fr">admin@hintika.fr</a>
              </p>

              <div className="contact-actions">
                {/* BOUTON PDF */}
                <a
                  href="/bulletin-adhesion-hintika.pdf"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  📥 Télécharger la fiche d&apos;inscription
                </a>

                {/* BOUTON MAILTO */}
                <a href={reservationMailto} className="btn">
                  🎟️ Réserver par email
                </a>

                {/* BOUTON PODCAST */}
                <a
                  href={podcastLink}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎧 Écouter le podcast
                </a>
              </div>

              {/* MESSAGE INFO */}
              <p className="contact-note">
                Si le bouton de réservation ne s&apos;ouvre pas sur votre
                ordinateur, vous pouvez nous écrire directement à :
              </p>

              <a href="mailto:admin@hintika.fr" className="direct-mail-link">
                admin@hintika.fr
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Hintika Production — Tous droits
            réservés.
          </p>

          <div className="footer-links">
            <a href="#top">Retour en haut ↑</a>

            <span className="footer-sep">·</span>

            <a
              href="http://tiktok.com/@ann.gisle.glass"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>

            <span className="footer-sep">·</span>

            <a
              href="https://www.instagram.com/lamourapres_theatre?igsh=MXdsM3dtaTZzeHc0ag=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <span className="footer-sep">·</span>

            <a
              href="https://www.facebook.com/anngisel.glass?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

            <span className="footer-sep">·</span>

            <a
              href="https://fr.ulule.com/ecoutez-marceline/?utm_campaign=presale_222967&utm_source=shared-from-Ulule-success-modal-on---http.referer--&utm_medium=uluid_161017"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ulule
            </a>

            <span className="footer-sep">·</span>

            <a
              href={podcastLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Podcast
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}