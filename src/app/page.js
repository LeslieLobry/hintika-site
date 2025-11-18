// app/page.js
export default function Home() {
  return (
    <>
      <header className="hero" id="top">
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
              {/* 🔗 lien direct vers la page vidéo */}
              <a href="/video">Vidéo</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-text">
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
      </header>

      <main>
        {/* HINTIKA — LA STRUCTURE */}
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

        {/* PRODUCTIONS */}
        <section id="projets" className="section section-alt">
          <div className="container">
            <h2>
              <span>Nos</span> productions
            </h2>

            <div className="grid">
              {/* PROJET 1 : L'AMOUR APRÈS */}
              <article className="card">
                <h3>L&apos;Amour Après</h3>
                <p className="card-meta">
                  Création 2025 · Avec Ann-Gisel Glass · Mise en scène Didier
                  Bernard
                </p>
                <p>
                  Premier projet produit par Hintika : une adaptation sensible
                  et profondément incarnée du livre de Marceline
                  Loridan-Ivens et Judith Perrignon, autour des amours de
                  Marceline après la déportation.
                </p>
                <a href="#amour-apres" className="card-link">
                  Découvrir le projet →
                </a>
              </article>

              {/* EMPLACEMENT PROJET FUTUR 1 */}
              <article className="card">
                <h3>Projet à venir</h3>
                <p className="card-meta">Nouvelle création en développement</p>
                <p>
                  Un prochain projet porté par Hintika, autour de récits
                  intimes et de grandes questions contemporaines. Annonce à
                  venir.
                </p>
              </article>

              {/* EMPLACEMENT PROJET FUTUR 2 */}
              <article className="card">
                <h3>Projet à venir</h3>
                <p className="card-meta">Création en cours d&apos;écriture</p>
                <p>
                  Un futur spectacle en préparation, croisant écriture,
                  plateau et image. Cette section sera enrichie au fil des
                  développements.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* L'AMOUR APRÈS — PRÉSENTATION */}
        <section id="amour-apres" className="section">
          <div className="container">
            <h2>
              <span>L&apos;Amour</span> Après — un projet Hintika
            </h2>
            <p className="intro">
              Adaptation du livre de Marceline Loridan-Ivens et Judith
              Perrignon. Une traversée des amours de Marceline après la
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

            {/* 🔗 bouton vers la page vidéo */}
            <a href="/video" className="btn" style={{ marginTop: "1.5rem" }}>
              Voir la vidéo du spectacle
            </a>
          </div>
        </section>

        {/* L'AMOUR APRÈS — GENÈSE */}
        <section id="amour-apres-genese" className="section section-alt">
          <div className="container">
            <h2>
              <span>Genèse</span> du projet
            </h2>
            <p className="intro">
              Tout part d&apos;une lecture : un jour de pluie, un livre ouvert par
              hasard et refermé au cœur de la nuit, avec l&apos;évidence qu&apos;il faut
              en partager la voix sur un plateau.
            </p>
            <p>
              Ann-Gisel Glass y reconnaît quelque chose de sa propre histoire et
              de celle de sa famille, sans que les parcours soient identiques.
              Ce qui s&apos;impose avant tout, c&apos;est le mouvement de renaissance
              après la destruction, la manière dont Marceline choisit la vie,
              l&apos;amour, l&apos;humour et la liberté.
            </p>
            <p>
              Après une première collaboration autour de <em>La Princesse
              blanche</em> de Rilke, Ann-Gisel Glass et Didier Bernard cherchaient
              un nouveau projet commun. Ils le trouvent dans ce texte, qui
              devient le point de départ d&apos;une lecture-spectacle portée par
              une actrice et accompagnée par une mise en scène sobre et
              attentive à la parole.
            </p>
          </div>
        </section>

        {/* L'AMOUR APRÈS — NOTE D'INTENTION */}
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
              Glass répond à des présences filmées&nbsp;: visages, hommes, fragments
              de souvenirs, comme autant de partenaires imaginaires avec
              lesquels Marceline poursuit sa conversation. Le théâtre devient un
              lieu de partage direct avec le public, où la question du bonheur
              revient, simple, presque naïve, mais essentielle&nbsp;: « Êtes-vous en
              vie&nbsp;? Êtes-vous heureux&nbsp;? ».
            </p>
          </div>
        </section>

        {/* ÉQUIPE ARTISTIQUE */}
        <section id="amour-apres-equipe" className="section section-alt">
          <div className="container">
            <h2>
              <span>Équipe</span> artistique
            </h2>
            <div className="grid">
              <article className="card">
                <h3>Ann-Gisel Glass</h3>
                <p className="card-meta">Interprétation</p>
                <p>
                  D&apos;abord remarquée au cinéma, elle tourne notamment avec
                  Jean-Luc Godard, Costa-Gavras, Jacques Doillon, Olivier
                  Assayas, Tony Gatlif ou Gérard Jugnot. Elle se consacre ensuite
                  au théâtre et à la production de courts métrages, en développant
                  un travail où l&apos;intime et le politique se rejoignent.
                </p>
              </article>

              <article className="card">
                <h3>Didier Bernard</h3>
                <p className="card-meta">Mise en scène</p>
                <p>
                  Comédien et formateur, il met en scène de nombreux spectacles
                  en France, au Liban et en Nouvelle-Calédonie. Son travail
                  s&apos;attache à faire entendre les textes dans des dispositifs
                  sobres, où la relation aux spectateurs est centrale et directe.
                </p>
              </article>

              <article className="card">
                <h3>Mise en Lumière</h3>
                <p className="card-meta">Production &amp; accompagnement</p>
                <p>
                  Structure associative fondée par Mathilde Mottier et François
                  Vila, Mise en Lumière accompagne des projets de théâtre,
                  musique et cinéma. Elle est coproductrice du festival Oui&nbsp;! à
                  Barcelone et partenaire du Prix de la Citoyenneté au Festival
                  de Cannes.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* LES AUTRICES */}
        <section id="autrices" className="section">
          <div className="container">
            <h2>
              <span>Les</span> autrices
            </h2>
            <div className="grid">
              <article className="card">
                <h3>Marceline Loridan-Ivens</h3>
                <p className="card-meta">Scénariste, réalisatrice, écrivaine</p>
                <p>
                  Rescapée de la Shoah, elle consacre une grande partie de son
                  œuvre à la mémoire de la déportation et à la transmission&nbsp;:
                  films documentaires réalisés avec Joris Ivens, écrits
                  autobiographiques et récits où l&apos;intime rencontre l&apos;histoire
                  collective.
                </p>
              </article>

              <article className="card">
                <h3>Judith Perrignon</h3>
                <p className="card-meta">Autrice &amp; journaliste</p>
                <p>
                  Journaliste à <em>Libération</em> puis autrice de nombreux livres,
                  elle signe des récits, enquêtes et romans où se mêlent portraits
                  et grandes questions politiques. Elle co-écrit notamment{" "}
                  <em>Et tu n&apos;es pas revenu</em> et <em>L&apos;Amour après</em> avec
                  Marceline Loridan-Ivens.
                </p>
              </article>

              <article className="card">
                <h3>Autour du livre</h3>
                <p className="card-meta">Œuvres et transmissions</p>
                <p>
                  Le spectacle s&apos;inscrit dans la continuité d&apos;un parcours marqué
                  par le cinéma, la littérature et un engagement constant pour la
                  mémoire, la liberté et la dignité. Il propose une nouvelle forme
                  de rencontre avec la parole de Marceline, adressée ici
                  directement aux spectateurs.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PRESSE / DOSSIER */}
        <section id="presse" className="section section-alt">
          <div className="container">
            <h2>
              <span>Dossier</span> &amp; presse
            </h2>
            <p className="intro">
              Espace à destination des programmateurs, structures culturelles et
              journalistes.
            </p>
            <ul className="presse-list">
              <li>
                <span>Dossier complet du spectacle L&apos;Amour Après</span>
                {/* Remplace par le vrai lien vers le PDF */}
                <a href="#" className="presse-link">
                  Télécharger le PDF
                </a>
              </li>
              <li>
                <span>Photos de répétitions / lectures</span>
                <a href="#" className="presse-link">
                  Demander un lien de téléchargement
                </a>
              </li>
              <li>
                <span>Teaser vidéo (à venir)</span>
                <a href="#" className="presse-link">
                  Bientôt disponible
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* CONTACT / PRODUCTION */}
        <section id="contact" className="section">
          <div className="container">
            <h2>
              <span>Production</span> &amp; contact
            </h2>
            <p className="intro">
              Pour toute demande de programmation, d&apos;informations techniques ou
              de presse, vous pouvez contacter Hintika et la production du
              spectacle.
            </p>
            <div className="contact-block">
              <p>
                <strong>Hintika Production</strong>
                <br />
                Structure de production et d&apos;accompagnement de projets
                artistiques.
              </p>
              <p>
                Production / diffusion :
                <br />
                <strong>Nom de la personne à contacter</strong>
                <br />
                Tél. : 00 00 00 00 00
                <br />
                <a href="mailto:contact@hintika.fr">contact@hintika.fr</a>
              </p>
              <p>
                Pour L&apos;Amour Après :
                <br />
                <strong>Mise en Lumière</strong>
                <br />
                <a href="mailto:francoisvila@gmail.com">
                  francoisvila@gmail.com
                </a>
              </p>
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
          <a href="#top">Retour en haut ↑</a>
        </div>
      </footer>
    </>
  );
}
