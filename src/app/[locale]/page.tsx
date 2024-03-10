import { Title } from '../(components)/title';
import { MainContent } from '../(components)/main-content';
import TranslationsProvider from '../(components)/translations-provider';

const i18nNamespaces = ['common'];

export default async function Home({ params }: { params: { locale: string } }) {
  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={params.locale}>
      <div className="flex h-screen flex-col">
        <Title />
        <MainContent />
        {/* </div> */}
        {/* <Footer /> */}
      </div>
    </TranslationsProvider>
  );
}
