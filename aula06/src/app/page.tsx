import Image from "next/image";

const layoutTailwind = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-700 text-white p-6 text-center">
          <p className="text-4xl font-bold mb-2">Bem-vindo ao Tailwind CSS</p>
          <p>Aprenda como criar layouts com facilidade e rapidez</p>
        </header>

        <main className="flex-1 container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-300 p-4 rounded shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Coluna 1</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </div>

            <div className="bg-slate-300 p-4 rounded shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Coluna 2</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </div>

            <div className="bg-slate-300 p-4 rounded shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Coluna 3</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </div>
          </div>
        </main>

        <footer className="bg-blue-700 text-white text-center p-4 mt-6">
          <p>© 2025 Tailwind CSS - Todos os direitos reservados</p>
        </footer>
      </div>
    </>
  );
}
export default layoutTailwind;