export default function Footer() {
  return (
    <footer className="bg-dark text-white w-100 mt-auto">
      <div className="container">
        <div className="row justify-content-center text-center align-items-center py-3">
          <p className="mb-0">
            © {new Date().getFullYear()} Deniya Edwinraj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
