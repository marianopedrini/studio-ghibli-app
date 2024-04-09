export default function Footer() {
  return (
    <footer className="flex flex-col items-center pt-6 pb-4">
      <div className="flex justify-center items-center gap-x-12 mb-3">
        <a
          href="https://github.com/marianopedrini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mariano-pedrini-1a6a701a6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div>
        Made by Mariano Pedrini
      </div>
    </footer>
  );
}
