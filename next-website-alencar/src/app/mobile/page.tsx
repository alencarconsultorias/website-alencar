
export default function Mobile() {
    return (
      <main className="min-h-screen bg-gray-100 flex flex-col items-center">
        <header className="w-full p-4 md:p-8 bg-white shadow-md flex justify-between">
          <span className="font-bold text-xl">Logo</span>
          <nav className="hidden md:flex gap-6">
            <a href="#">Home</a>
            <a href="#">Sobre</a>
          </nav>
          <button className="md:hidden">☰</button>
        </header>
        <section className="w-full max-w-xl p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Bem-vindo!</h1>
          <p className="text-base md:text-lg">Este é um exemplo responsivo mobile-first.</p>
        </section>
      </main>
    );
  }
  