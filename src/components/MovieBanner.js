export default function MovieBanner({ img, title, titlejpn }) {
  return (
    <div
      className="movie-banner text-white flex flex-col items-baseline"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="movie-titles">
        <h1 className="text-5xl mx-5 mb-1 font-bold">{title}</h1>
        <h2 className="text-2xl mb-5 ml-5">( {titlejpn} )</h2>
      </div>
    </div>
  );
}
