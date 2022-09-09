import { Head } from '@/components/Head';
import { SearchPage } from '@/components/Search/page';
import { FormProvider } from '@/context/app/form';
import { ArtistContextContainer } from '@/context/artist';
import { ReleaseContextContainer } from '@/context/release';
import {
  ISearchServerSideProps,
  searchServerSideProps,
} from '@/util/next/getServerSideProps/search';

export default function Search(props: ISearchServerSideProps) {
  const { releases, artists, searchQuery, fullUrl } = props;
  const seo = {
    title: `Search`,
    description: `Search for Music on ReleaseWave.`,
  };

  return (
    <>
      <Head
        url={fullUrl || ``}
        title={seo.title}
        description={seo.description}
      />
      <ReleaseContextContainer releases={releases}>
        <ArtistContextContainer artists={artists}>
          <FormProvider>
            <SearchPage searchQuery={searchQuery} />
          </FormProvider>
        </ArtistContextContainer>
      </ReleaseContextContainer>
    </>
  );
}

export const getServerSideProps = searchServerSideProps;
