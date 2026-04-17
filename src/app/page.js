import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">

      <div className="bg-blue-200 w-full h-[80vh] max-w-7xl rounded-2xl shadow-xl flex flex-col items-center justify-center p-10">
        
        {/* PHOTO */}
        <Image
          src="/farhat.jpeg" //  photo dans /public
          alt="Farhat"
          width={300}
          height={300}
          className="rounded-full mx-auto mb-4 object-cover"
        />

        {/* NOM */}
        <h1 className="text-2xl font-bold mb-2">
          Farhat TIGHZER
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-600 mb-6">
          Je suis étudiant en programmation informatique à La Cité.
          Passionné par le développement web.
        </p>

        {/* BOUTONS */}
        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Login
          </Link>

          <Link
            href="/inscription"
            className="px-4 py-2 border border-black rounded-md hover:bg-gray-200"
          >
            Inscription
          </Link>
        </div>
      </div>

    </div>
  );
}