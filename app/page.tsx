import { Footer } from "@/components";
import Image from "next/image";
import { FaFacebook, FaX } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-between w-full">
        <Image
          src={"/coat-of-arms.png"}
          width={90}
          height={90}
          alt="Coat of Arms"
          className="animate-fade-in"
        />
        <Image
          aria-hidden
          src={"/scales.png"}
          width={150}
          height={150}
          alt="Coat of Arms"
          className="animate-fade-in"
        />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-center animate-fade-in">
          OOJ Intranet
          <div className="text-6xl font-bold font-poppins mb-4">
            Coming Soon<span className="text-[#812121]">...</span>
          </div>
          <p className="text-lg font-muli">
            Justice delayed is justice denied, but websites take time. Stay
            tuned!
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://x.com/NAMJudiciary" className="icon">
              <FaX />
            </a>
            <a
              href="https://www.facebook.com/NamibianJudiciary/"
              className="icon"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
