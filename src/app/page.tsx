import Image from "next/image";
import { Title } from "./(components)/title";
import { MainContent } from "./(components)/main-content";
import { Footer } from "./(components)/footer";

// wordWrap
export default function Home() {
  return (
    <div className="flex flex-col h-lvh">
      <Title />
      <MainContent />
      <Footer />
    </div>
  );
}
