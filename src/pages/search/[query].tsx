import { SearchPage } from '@/components/Search/page';
import { FormProvider } from '@/context/app/form';
import { ArtistContextContainer } from '@/context/artist';
import { ReleaseContextContainer } from '@/context/release';
import {
  ISearchServerSideProps,
  searchServerSideProps,
} from '@/util/next/getServerSideProps/search';

export default function Search(props: ISearchServerSideProps) {
  const { releases, artists, searchQuery } = props;

  return (
    <ReleaseContextContainer releases={releases}>
      <ArtistContextContainer artists={artists}>
        <FormProvider>
          <SearchPage searchQuery={searchQuery} />
        </FormProvider>
      </ArtistContextContainer>
    </ReleaseContextContainer>
  );
}

export const getServerSideProps = searchServerSideProps;
