function genererEntete() {
  const html = `
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Covoiturage</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <style>
      .fullheight {
        height:100%;
      }
      </style>
    </head>
    <body>
      <div class="columns">
        <div class="column">
        <a class="button" href="/">Accueil</a>
        </div>
        <div class="column">
          <a class="button" href="obtenirOffres">Les Offres</a>
        </div>
        <div class="column">
          <a class="button" href="obtenirOffre/2">Offre #2</a>
        </div>
        <div class="column">
          Formulaire
        </div>
      </div>
      <div class="container">
        <div class="notification is-primary">
  `;
  return html;
}

async function genererAccueil() {
  const html = `
      <section class="hero">
        <div class="hero-body">
          <p class="title">
            Bienvenue dans l'application Covoiturage
          </p>
          <p class="subtitle">
          </p>
        </div>
      </section>
  `;

  return html;
}

function genererPiedDePage() {
  const html = `
    </div>
  </div>
        <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Covoiturage</strong> par Les Étudiants du cours 420-3D1.
          </p>
        </div>
      </footer>
    </body>
  </html>`;

  return html;
}

module.exports = {
  genererEntete,
  genererAccueil,
  genererPiedDePage,
};
