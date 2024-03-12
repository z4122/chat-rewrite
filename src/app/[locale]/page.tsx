import { Title } from '../(components)/title';
import { MainContent } from '../(components)/main-content';
import TranslationsProvider from '../(components)/translations-provider';
import initTranslations from '../i18n';

const i18nNamespaces = ['common'];

export default async function Home({ params }: { params: { locale: string } }) {
  const { resources } = await initTranslations(params.locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={params.locale}
      resources={resources}
    >
      <div className="flex h-screen flex-col">
        <Title />
        <MainContent />
        {/* </div> */}
        {/* <Footer /> */}
      </div>
    </TranslationsProvider>
  );
}
