import { Title } from './(components)/title';
import { MainContent } from './(components)/main-content';

// wordWrap
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Title />
      <div className="flex-1">
        <MainContent />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
