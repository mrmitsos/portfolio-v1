export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
      </h1>
      <p className="text-white text-lg mb-8 text-center">
        I am working hard to bring you something amazing. Stay tuned!
      </p>
      <p className="text-white text-lg mb-8 text-center">
        But do not hesitate to mail me for any question you may have!
      </p>
      <div>
        <a
          className="text-white inline-block text-2xl border-2 rounded-full border-white ease-in duration-500 border-solid p-2 hover:bg-white hover:text-black"
          href="mailto:dimitriosmaleas@hotmail.com"
          target="_blank"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
