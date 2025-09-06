export default function Home() {
  return (
    <main className="p-8 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 animate-bg-slide">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-purple-800 animate-bounce">
        Welcome to MemeOrbit! 🎉
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-center text-gray-700 animate-fade-in">
        Your ultimate hub for memes and AI fun 😂🤖
      </p>
      <a
        href="https://cms.memeorbitai.com"
        className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
      >
        Visit our Blog
      </a>
    </main>
  );
}
