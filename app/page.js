import Image from "next/image";

export default function Home() {
  return (
    <main className="relative p-8 min-h-screen flex flex-col items-center justify-center
                     bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
                     bg-[length:200%_200%] animate-bg-slide overflow-hidden">

      {/* Hero Logo */}
      <Image
        src="/logo.png"          // Place your logo in public/logo.png
        alt="MemeOrbit Logo"
        width={150}
        height={150}
        priority
        className="mb-8 animate-fade-in"
      />

      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-white animate-fade-in mb-4" style={{ animationDelay: '0.2s' }}>
        Welcome to MemeOrbit! <span className="inline-block animate-wiggle animate-bounce-emoji">🚀</span>
      </h1>

      {/* Paragraph */}
      <p className="text-lg text-white/90 animate-fade-in mb-6" style={{ animationDelay: '0.5s' }}>
        Your hub for memes and AI fun. <span className="inline-block animate-wiggle animate-bounce-emoji">😎🎉</span>
      </p>

      {/* Button */}
      <a
        href="https://cms.memeorbitai.com"
        className="px-6 py-3 bg-white/90 text-purple-600 font-semibold rounded-lg shadow-lg
                   hover:bg-white hover:scale-110 hover:animate-pulse transition transform animate-fade-in"
        style={{ animationDelay: '0.8s' }}
      >
        Visit our Blog
      </a>

      {/* Floating shapes */}
      <span className="absolute top-10 left-20 w-10 h-10 bg-white/20 rounded-full animate-bounce-slow"></span>
      <span className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce-slower"></span>

    </main>
  );
}
