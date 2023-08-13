import React from 'react';
import './Footer.css'; // Archivo de estilos CSS para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>¡Gracias por visitar "Tu Frontend"!</p>
        <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;