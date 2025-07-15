import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-content">
        <div className="contacto-header">
          <h1 className="contacto-title">Contactanos</h1>
          <p className="contacto-subtitle">
            ¿Tenés alguna consulta? Completa el formulario y te responderemos a la brevedad.
          </p>
        </div>

        <form className="contacto-form">
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              Nombre <span className="required">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              className="form-input"
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo electrónico <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto" className="form-label">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              className="form-input"
              placeholder="¿Sobre qué querés consultar?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje" className="form-label">
              Mensaje <span className="required">*</span>
            </label>
            <textarea
              id="mensaje"
              className="form-textarea"
              rows="5"
              placeholder="Escribí tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;