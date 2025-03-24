import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-purple-700 via-yellow-500 to-orange-500 text-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="rounded-full border-4 border-white"
          src="/lebron-james.png" // Replace with an actual image of LeBron
          alt="LeBron James"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-4xl font-bold text-center sm:text-left">
          King James
        </h1>
        <p className="text-lg text-center sm:text-left">
          Welcome to the court of greatness. Witness the legacy of LeBron James.
        </p>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Explore LeBron's career highlights.
          </li>
          <li className="tracking-[-.01em]">
            Learn about his impact on and off the court.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://www.nba.com/player/2544/lebron-james"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Stats
          </a>
          <a
            className="rounded-full border border-solid border-white transition-colors flex items-center justify-center hover:bg-white hover:text-black font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://lebronjames.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/results?search_query=lebron+james+highlights"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/basketball.svg" // Replace with a basketball icon
            alt="Basketball icon"
            width={16}
            height={16}
          />
          Highlights
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.nba.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/nba-logo.svg" // Replace with an NBA logo
            alt="NBA logo"
            width={16}
            height={16}
          />
          NBA
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.lebronjamesfamilyfoundation.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/crown.svg" // Replace with a crown icon
            alt="Crown icon"
            width={16}
            height={16}
          />
          LeBron's Foundation
        </a>
      </footer>
    </div>
  );
}
