const Contacto = () => {
  return (
    <div className="py-5">
      <h1>Contacto</h1>
      <form className="mt-4" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="tucorreo@ejemplo.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" rows="4" placeholder="Escribí tu mensaje..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
