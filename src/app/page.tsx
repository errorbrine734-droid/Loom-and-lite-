import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 pt-20 text-white">
        <section className="max-w-3xl text-center">
          <h1 className="text-6xl font-bold">
            🌌 Loom And Lite
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Where Imagination Meets Innovation.
          </p>

          <button className="mt-10 rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold transition hover:bg-violet-500">
            Start Learning
          </button>
        </section>
      </main>
    </>
  );
}
