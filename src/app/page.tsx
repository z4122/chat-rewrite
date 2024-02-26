import { Title } from './(components)/title';
import { MainContent } from './(components)/main-content';

// wordWrap
export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Title />
      <MainContent />
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}
