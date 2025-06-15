import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="text-white text-center py-5"
        style={{
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(41, 41, 41, 1)',
          }}
        ></div>
        <div className="container position-relative">
          <img
            src="/dorins-maleri/logo.jpeg"
            alt="Dorins Måleri"
            style={{ maxWidth: '300px', height: 'auto' }}
            className="img-fluid mb-3"
          />
          <p className="lead">Färg, kvalitet och hantverk i varje penseldrag</p>
          <a href="#contact" className="btn btn-warning btn-lg mt-3">Kontakta oss</a>
        </div>
      </div>

      {/* ABOUT */}
      <div className="container py-5">
        <h2 className="mb-4">Om Oss</h2>
        <p>
          Vi är ett familjeföretag med över 20 års erfarenhet av måleri.
          Vi erbjuder professionell service och hållbara resultat för både privatpersoner och företag – oavsett var i Sverige du befinner dig.
        </p>
        <p>
          Utöver traditionellt måleri är vi specialister på arbete med <strong>linoljefärg</strong>, <strong>kyrkomåleri</strong> och <strong>guldförgyllning</strong>. 
          Dessa hantverksmetoder kräver stor precision, tålamod och respekt för historien – något vi har byggt vår expertis kring.
        </p>
      </div>

      {/* SERVICES */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Våra Tjänster</h2>
          <div className="row g-4">
            {[
              { title: 'Invändig målning', icon: '🖌️' },
              { title: 'Utvändig målning', icon: '🏠' },
              { title: 'Fasadmålning', icon: '🎨' },
              { title: 'Tapetsering', icon: '🧱' },
              { title: 'Fönstermålning', icon: '🪟' },
              { title: 'Gratis offert', icon: '💬' },
            ].map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="display-5">{service.icon}</div>
                    <h5 className="card-title mt-3">{service.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="container py-5">
        <h2 className="mb-4">Kontakta Oss</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <p>
              <strong>Telefon:</strong>{' '}
              <a href="tel:0729343610" className="text-decoration-none">072-934 36 10</a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:dorinsmaleri@gmail.com" className="text-decoration-none">dorinsmaleri@gmail.com</a>
            </p>
            <p><strong>Bas:</strong> Örebro</p>
            <p><strong>Tjänster:</strong> Vi erbjuder måleritjänster i hela Sverige</p>
          </div>
          <div className="col-md-6">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://maps.google.com/maps?q=örebro&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                title="Karta"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-muted py-4 bg-body-tertiary border-top">
        <div>© {new Date().getFullYear()} Dorins Måleri – Org.nr 559307-4783</div>
      </footer>
    </>
  );
}