import './Home.css';

const Home = () => {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h1 className="mb-4 fw-bold">Bienvenido a <span className="text-primary">CositasOnline</span></h1>
        <p className="lead">La mejor tecnología al alcance de tu mano</p>
        <img
          src="https://dummyimage.com/600x400/0006af/ffffff&text=CositasOnline"
          className="img-fluid rounded shadow mt-4"
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Home;