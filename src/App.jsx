import React from 'react';

export default function App() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1>Dorins Måleri</h1>
        <p className="lead">Färg, kvalitet och hantverk i varje penseldrag</p>
      </header>

      <section className="mb-5">
        <h2>Om Oss</h2>
        <p>Vi är ett familjeföretag med 20 års erfarenhet av måleri i Mälardalen. Vi erbjuder hög kvalitet och professionell service för både privatpersoner och företag.</p>
      </section>

      <section className="mb-5">
        <h2>Tjänster</h2>
        <ul>
          <li>Invändig och utvändig målning</li>
          <li>Fasadmålning</li>
          <li>Tapetsering</li>
          <li>Fönstermålning</li>
          <li>Gratis offert</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Kontakt</h2>
        <p>Telefon: 070-123 45 67</p>
        <p>Email: kontakt@dorinsmaleri.se</p>
      </section>

      <footer className="text-center mt-5">
        <p>© 2025 Dorins Måleri. Org.nr 123456-7890</p>
      </footer>
    </div>
  );
}
