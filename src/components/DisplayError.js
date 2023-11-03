import "../styles/Error.css";

function DisplayError() {
  return (
    <div className="align_content">
      <p className="wide_text">404</p>
      <p className="error_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <a href="/" className="back_menu">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
}

export default DisplayError;
