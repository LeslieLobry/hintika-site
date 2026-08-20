// app/page.js

import PhotoCarousel from "../app/components/PhotoCarousel/PhotoCarousel";

/* =========================================================
   GALERIE PRINCIPALE
   ========================================================= */

const galerieSlides = [
  {
    src: "/ag9.jpg",
    alt: "Répétitions sur le plateau",
  },
  {
    src: "/ag10.jpg",
    alt: "Répétitions sur le plateau",
  },
  {
    src: "/ag11.jpg",
    alt: "Répétitions sur le plateau",
  },
  {
    src: "/ag12.jpg",
    alt: "Répétitions sur le plateau",
  },
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
    alt: "Répétition",
  },
  {
    src: "/ag2.JPG",
    alt: "Répétition",
  },
  {
    src: "/ag3.JPG",
    alt: "Répétition",
  },
  {
    src: "/ag4.JPG",
    alt: "Répétition",
  },
  {
    src: "/ag5.JPG",
    alt: "Répétition",
  },
  {
    src: "/ag6.JPG",
    alt: "Répétition",
  },
  {
    src: "/ag7.JPG",
    alt: "Répétition",
  },
];

/* =========================================================
   ÉQUIPE
   ========================================================= */

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

/* =========================================================
   PRESSE
   ========================================================= */

const pressArticles = [
  {
    media: "La Provence",
    title: "« L'Amour après », un poignant témoignage de femme",
    meta: "Jean-Noël Grando · 7 juillet 2026",
    description:
      "Un spectacle profondément humain et émouvant, porté par Ann-Gisel Glass. Une ode à la vie, à la liberté et au courage des femmes.",
    pdf: "/presse/la-provence.pdf",
  },
  {
    media: "L'Écho du Mardi",
    title: "« L'Amour plus fort que l'indicible »",
    meta: "Mireille Hurlin · 5 juillet 2026",
    description:
      "Une chronique qui souligne la justesse d'Ann-Gisel Glass, la sobriété de la mise en scène de Didier Bernard et la force de cette mémoire devenue vivante.",
    pdf: "/presse/echo-du-mardi.pdf",
  },
  {
    media: "RegArts",
    title: "L'Amour Après — Festival Off d'Avignon 2026",
    meta: "Claude Bourbon · Avignon 2026",
    description:
      "Un portrait scénique sensible et précis qui fait entendre le parcours d'une femme libre refusant de se laisser définir par la souffrance.",
    pdf: "/presse/regarts.pdf",
  },
  {
    media: "La Théâtrothèque",
    title: "« Une belle interprétation »",
    meta: "Geneviève Brissot · 25 juillet 2026",
    description:
      "Une interprétation saluée pour sa sincérité et sa profonde sensibilité, entre douleurs, joies, désir et liberté.",
    pdf: "/presse/theatrotheque.pdf",
  },
  {
    media: "Théâtre au Vent",
    title: "L'Amour Après au Théâtre des 3S",
    meta: "Evelyne Trân · 5 août 2026",
    description:
      "Une chronique sensible autour de la transmission et de la personnalité de Marceline Loridan-Ivens.",
    pdf: "/presse/theatre-au-vent.pdf",
  },
  {
    media: "Culture-Tops",
    title: "Festival Off d'Avignon — 4 cœurs",
    meta: "Jean-Pierre Hané · 26 juillet 2026",
    description:
      "Quatre cœurs pour un récit sans pathos consacré au courage, à la liberté et à l'appétit de vivre.",
    pdf: "/presse/culture-tops.pdf",
  },
  {
    media: "Froggy's Delight",
    title: "« Remarquable et poignant. Coup de cœur ! »",
    meta: "Nicole Aramdam · Avignon, juillet 2026",
    description:
      "Une présence lumineuse, une interprétation juste et une mise en scène d'une grande épure.",
    pdf: "/presse/froggys-delight.pdf",
  },
];

/* =========================================================
   PAGE
   ========================================================= */

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

  const radioInterviewLink =
    "https://valeursenjeu.fr/wp-content/uploads/2026/07/Lamour-apr%C3%A8s-complet.mp3";

  return (
    <>
      {/* =====================================================
          VIDÉO D'INTRO
      ===================================================== */}

      <section className="intro-video-section" id="top">
        <div className="intro-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/3QjBiHw8Oqw?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1"
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

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="hero" id="site-content">
        <div className="hero-overlay" />

        <div className="hero-content">
          <nav className="navbar">
            <a href="#top" className="nav-logo">
              Hintika
            </a>

            <div className="nav-links">
              <a href="#hintika">La compagnie</a>
              <a href="#amour-apres">Le spectacle</a>
              <a href="#amour-apres-equipe">Équipe</a>
              <a href="#podcast">Radio</a>
              <a href="#presse">Presse</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-text">
            <div className="hero-copy">
              <p className="hero-kicker">Hintika Production présente</p>

              <h1 className="logo">
                L&apos;Amour
                <br />
                Après
              </h1>

              <p className="hero-credit">
                D&apos;après Marceline Loridan-Ivens et Judith Perrignon
              </p>

              <p className="tagline">
                Une traversée de la mémoire et du désir de vivre, portée sur
                scène par Ann-Gisel Glass dans une mise en scène de Didier
                Bernard.
              </p>

              <div className="hero-buttons">
                <a href="#amour-apres" className="btn">
                  Découvrir le spectacle
                </a>

                <a href="/video" className="btn btn-outline">
                  Voir la vidéo
                </a>
              </div>
            </div>

            <div className="hero-photo">
              <img
                src="/HINTIKA.png"
                alt="Affiche du spectacle L'Amour Après"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* =====================================================
            HINTIKA
        ===================================================== */}

        <section id="hintika" className="section">
          <div className="container editorial-section">
            <div className="editorial-heading">
              <p className="section-number">01</p>

              <h2>
                <span>Hintika</span> Production
              </h2>
            </div>

            <div className="editorial-content">
              <p className="intro">
                Une maison de création née du désir de porter des projets
                artistiques forts, incarnés et ancrés dans le réel.
              </p>

              <p>
                Hintika accompagne des artistes, metteuses et metteurs en scène,
                interprètes et auteurs dans des créations qui interrogent notre
                époque.
              </p>

              <p>
                Théâtre, écriture, image et matière documentaire se rencontrent
                dans une démarche attentive aux processus de création autant
                qu&apos;à la forme présentée au public.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            LE SPECTACLE
        ===================================================== */}

        <section id="amour-apres" className="section section-alt">
          <div className="container">
            <div className="section-heading-line">
              <div>
                <p className="section-number">02</p>

                <h2>
                  <span>L&apos;Amour</span> Après
                </h2>
              </div>

              <p className="section-side-note">
                Ann-Gisel Glass
                <br />
                Mise en scène Didier Bernard
              </p>
            </div>

            <div className="spectacle-intro">
              <p className="intro">
                Adaptation du livre de Marceline Loridan-Ivens et Judith
                Perrignon.
              </p>

              <p>
                Une traversée de la vie de Marceline après la déportation, où se
                rejoue la conquête de la liberté et la réconciliation entre la
                femme et la survivante.
              </p>
            </div>

            <div id="galerie" className="spectacle-gallery">
              <PhotoCarousel slides={galerieSlides} />
            </div>

            <div className="spectacle-text-columns">
              <div>
                <p className="text-label">Le spectacle</p>

                <p>
                  Sur scène, une femme seule, entourée d&apos;images et de voix.
                  Elle convoque les rencontres qui ont jalonné sa vie
                  d&apos;après : les hommes de passage, les amitiés, les
                  compagnons de route et le cinéma.
                </p>
              </div>

              <div>
                <p className="text-label">La transmission</p>

                <p>
                  Le spectacle tisse un dialogue sensible entre mémoire intime,
                  histoire collective et désir de vivre. La parole devient un
                  espace de liberté et de partage avec le public.
                </p>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="/video" className="btn">
                Voir la vidéo du spectacle
              </a>

              <a href="#podcast" className="btn btn-outline">
                Écouter les interviews
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            GENÈSE + NOTE D'INTENTION
        ===================================================== */}

        <section id="amour-apres-genese" className="section">
          <div className="container creation-columns">
            <div className="creation-column">
              <p className="section-number">03</p>

              <h2>
                <span>Genèse</span>
              </h2>

              <p className="intro">
                Tout part d&apos;une lecture : un jour de pluie, un livre ouvert
                par hasard et refermé au cœur de la nuit.
              </p>

              <p>
                Ann-Gisel Glass y reconnaît quelque chose de sa propre histoire
                et de celle de sa famille. Ce qui s&apos;impose avant tout,
                c&apos;est le mouvement de renaissance après la destruction, la
                manière dont Marceline choisit la vie, l&apos;amour,
                l&apos;humour et la liberté.
              </p>

              <p>
                Après une première collaboration autour de{" "}
                <em>La Princesse blanche</em> de Rilke, Ann-Gisel Glass et Didier
                Bernard trouvent dans ce texte le point de départ d&apos;une
                nouvelle création commune.
              </p>
            </div>

            <div
              className="creation-column"
              id="amour-apres-intention"
            >
              <p className="section-number">04</p>

              <h2>
                <span>Note</span> d&apos;intention
              </h2>

              <p className="intro">
                Comment continuer à vivre après l&apos;irreprésentable ?
              </p>

              <p>
                La pièce suit une jeune femme qui refuse de se laisser définir
                uniquement par son statut de survivante. Son corps devient
                mémoire, terrain de jeu, lieu de plaisir et de questionnement.
              </p>

              <p>
                Dans un espace épuré, la voix d&apos;Ann-Gisel Glass répond à
                des présences filmées : visages, hommes et fragments de
                souvenirs deviennent autant de partenaires imaginaires.
              </p>

              <blockquote className="theatre-quote">
                « Êtes-vous en vie ? Êtes-vous heureux ? »
              </blockquote>
            </div>
          </div>
        </section>

        {/* =====================================================
            RADIO / PODCAST / INTERVIEWS
        ===================================================== */}

        <section id="podcast" className="section section-alt">
          <div className="container">
            <div className="section-heading-line">
              <div>
                <p className="section-number">05</p>

                <h2>
                  Radio <span>&amp; interviews</span>
                </h2>
              </div>

              <p className="section-side-note">
                Festival Off
                <br />
                Avignon 2026
              </p>
            </div>

            <div className="media-layout">
              {/* BACKSTAGE TV */}

              <article className="media-featured">
                <div className="media-video">
                  <iframe
                    src="https://www.youtube.com/embed/YJgajjeGpuQ"
                    title="BackstageTV - L'Amour Après"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="media-featured-text">
                  <p className="media-type">Interview vidéo</p>

                  <h3>BackstageTV</h3>

                  <p>
                    Rencontre avec l&apos;équipe de{" "}
                    <em>L&apos;Amour Après</em> autour de la création du
                    spectacle et du travail mené sur la parole de Marceline
                    Loridan-Ivens.
                  </p>
                </div>
              </article>

              {/* AUDIO */}

              <div className="media-audio-list">
                <article className="media-audio-item">
                  <div>
                    <p className="media-type">
                      Valeurs en Jeu · 6 juillet 2026 · 12 min
                    </p>

                    <h3>Direct en Jeu</h3>

                    <p>
                      Interview d&apos;Alain Moreno avec Gérard Cherqui du
                      Mémorial de la Shoah, suivie d&apos;un entretien avec
                      Ann-Gisel Glass.
                    </p>
                  </div>

                  <a
                    href={radioInterviewLink}
                    className="media-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Écouter →
                  </a>
                </article>

                <article className="media-audio-item">
                  <div>
                    <p className="media-type">
                      IDFM 98 · Christelle Barrilliet
                    </p>

                    <h3>Les secrets de la servante</h3>

                    <p>
                      Une émission consacrée à la création du spectacle et au
                      travail mené autour de la mémoire de Marceline
                      Loridan-Ivens.
                    </p>
                  </div>

                  <a
                    href={podcastLink}
                    className="media-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Écouter →
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRESSE
        ===================================================== */}

        <section id="presse" className="section">
          <div className="container">
            <div className="section-heading-line">
              <div>
                <p className="section-number">06</p>

                <h2>
                  La presse <span>en parle</span>
                </h2>
              </div>

              <p className="section-side-note">Revue de presse · 2026</p>
            </div>

            <div className="press-list">
              {pressArticles.map((article) => (
                <article className="press-row" key={article.media}>
                  <div className="press-media">
                    <span>{article.media}</span>

                    <small>{article.meta}</small>
                  </div>

                  <div className="press-content">
                    <h3>{article.title}</h3>

                    <p>{article.description}</p>
                  </div>

                  <div className="press-links">
                    <a
                      href={article.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lire
                    </a>

                    <a href={article.pdf} download>
                      Télécharger
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ÉQUIPE ARTISTIQUE
        ===================================================== */}

        <section
          id="amour-apres-equipe"
          className="section section-alt"
        >
          <div className="container">
            <p className="section-number">07</p>

            <h2>
              Équipe <span>artistique</span>
            </h2>

            <div className="artist-list">
              {/* ANN GISEL */}

              <article className="artist-row">
                <div className="artist-photo">
                  <PhotoCarousel slides={annGiselSlides} />
                </div>

                <div className="artist-content">
                  <p className="artist-role">Interprétation</p>

                  <h3>Ann-Gisel Glass</h3>

                  <p>
                    D&apos;abord remarquée au cinéma, elle tourne notamment avec
                    Jean-Luc Godard, Costa-Gavras, Jacques Doillon, Olivier
                    Assayas, Tony Gatlif ou Gérard Jugnot.
                  </p>

                  <p>
                    Elle se consacre ensuite au théâtre et à la production de
                    courts métrages, en développant un travail où l&apos;intime
                    et le politique se rejoignent.
                  </p>

                  <a
                    href="/CV-AnnGiselGlass-2025-1.pdf"
                    className="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consulter le CV →
                  </a>
                </div>
              </article>

              {/* DIDIER */}

              <article className="artist-row artist-row-reverse">
                <div className="artist-photo">
                  <PhotoCarousel slides={didierSlides} />
                </div>

                <div className="artist-content">
                  <p className="artist-role">Mise en scène</p>

                  <h3>Didier Bernard</h3>

                  <p>
                    Comédien et formateur, il met en scène de nombreux
                    spectacles en France, au Liban et en Nouvelle-Calédonie.
                  </p>

                  <p>
                    Son travail s&apos;attache à faire entendre les textes dans
                    des dispositifs sobres, où la relation aux spectateurs est
                    centrale et directe.
                  </p>

                  <a
                    href="/didiercv.pdf"
                    className="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consulter le CV →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            AUTRICES
        ===================================================== */}

        <section id="autrices" className="section">
          <div className="container">
            <p className="section-number">08</p>

            <h2>
              Les <span>autrices</span>
            </h2>

            <div className="authors-layout">
              <article className="author-featured">
                <div className="author-photo">
                  <PhotoCarousel slides={marcelineSlides} />
                </div>

                <div>
                  <p className="artist-role">
                    Scénariste · Réalisatrice · Écrivaine
                  </p>

                  <h3>Marceline Loridan-Ivens</h3>

                  <p>
                    Rescapée de la Shoah, elle consacre une grande partie de son
                    œuvre à la mémoire de la déportation et à la transmission.
                  </p>

                  <p>
                    Films documentaires réalisés avec Joris Ivens, écrits
                    autobiographiques et récits : son œuvre fait constamment
                    dialoguer l&apos;intime et l&apos;histoire collective.
                  </p>
                </div>
              </article>

              <article className="author-secondary">
                <p className="artist-role">Autrice · Journaliste</p>

                <h3>Judith Perrignon</h3>

                <p>
                  Journaliste à <em>Libération</em> puis autrice de nombreux
                  ouvrages, elle signe des récits, enquêtes et romans où se
                  mêlent portraits et grandes questions politiques.
                </p>

                <p>
                  Elle co-écrit notamment <em>Et tu n&apos;es pas revenu</em>{" "}
                  et <em>L&apos;Amour après</em> avec Marceline Loridan-Ivens.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section id="contact" className="section section-alt">
          <div className="container contact-layout">
            <div>
              <p className="section-number">09</p>

              <h2>
                Production <span>&amp; contact</span>
              </h2>

              <p className="intro">
                Programmation, diffusion, presse ou réservation.
              </p>
            </div>

            <div className="contact-details">
              <p className="contact-name">Hintika Production</p>

              <a
                href="mailto:admin@hintika.fr"
                className="contact-email"
              >
                admin@hintika.fr
              </a>

              <div className="contact-actions">
                <a href={reservationMailto} className="btn">
                  Réserver par email
                </a>

                <a
                  href="/bulletin-adhesion-hintika.pdf"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Fiche d&apos;inscription
                </a>
              </div>

              <p className="contact-note">
                Si votre logiciel de messagerie ne s&apos;ouvre pas, écrivez
                directement à admin@hintika.fr.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Hintika Production
          </p>

          <div className="footer-links">
            <a href="#top">Haut de page</a>

            <span className="footer-sep">·</span>

            <a href="#presse">Presse</a>

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
          </div>
        </div>
      </footer>
    </>
  );
}