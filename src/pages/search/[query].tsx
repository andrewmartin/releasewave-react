import { SearchPage } from '@/components/Search/page';
import { FormProvider } from '@/context/app/form';
import { ArtistContextContainer } from '@/context/artist';
import { ReleaseContextContainer } from '@/context/release';
import { WithModal } from '@/util/next/getServerSideProps/global';
import {
  ISearchServerSideProps,
  searchServerSideProps,
} from '@/util/next/getServerSideProps/search';

export default function Search(props: WithModal<ISearchServerSideProps>) {
  const { releases, artists, ModalContainer, searchQuery } = props;

  return (
    <ReleaseContextContainer releases={releases}>
      <ArtistContextContainer artists={artists}>
        <FormProvider>
          <SearchPage searchQuery={searchQuery} />
          {ModalContainer}
        </FormProvider>
      </ArtistContextContainer>
    </ReleaseContextContainer>
  );
}

export const getServerSideProps = searchServerSideProps;
