import Image from "next/image";
import { Title } from "./(components)/title";
import { MainContent } from "./(components)/main-content";
import { Footer } from "./(components)/footer";

// wordWrap
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Title />
      <div className="flex-1">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
