import { useArtistContext } from '@/context/artist';
import { getArtists } from '@/context/artist/api';
import { Artist } from '@/types/Data';
import { appendHostToImage } from '@/util/image';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { usePrevious } from 'react-use';
import styles from './Artist.module.css';
import atomStyles from '@/styles/Atoms.module.css';
import { Pagination } from '../Pagination';

const ArtistCollectionItem = (artist: Artist) => {
  const linkHref = `/artists/${artist.slug}`;

  return (
    <div className={styles.ArtistCollectionItem} key={artist.id}>
      <div className={styles.ArtistCollectionItemImage}>
        <Link href={linkHref}>
          <Image
            src={appendHostToImage(artist.image.large)}
            alt={`${artist.name}`}
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className={styles.ArtistCollectionItemContent}>
        <Link href={linkHref}>
          <h2 className={atomStyles.ArtistLink}>{artist.name}</h2>
        </Link>
      </div>
    </div>
  );
};

export const ArtistsCollectionContainer: FC<PropsWithChildren> = () => {
  const {
    dispatch: dispatchArtist,
    state: { artists },
  } = useArtistContext();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { current_page, per_page, total_entries } = artists!;
  const previousPage = usePrevious(current_page);
  useEffect(() => {
    if (titleRef.current && current_page !== previousPage) {
      titleRef.current.scrollIntoView({ behavior: `smooth` });
    }
  }, [current_page, previousPage]);

  const onSelectPage = (pageNumber: number) => {
    getArtists(dispatchArtist, {
      page: pageNumber,
    })(() => {
      console.log(`success`);
    });
  };

  return (
    <div className="p-4 md:p-12">
      <h2
        ref={titleRef}
        className="font-extrabold tracking-[-0.045em] text-2xl md:!text-3xl"
      >
        Our Artists
      </h2>
      <div className="mb-4">
        <p className="italic text-gray-500">
          All of the artists we recommend. Nothing more, nothing less.
        </p>
      </div>
      <Pagination
        per_page={per_page}
        total_entries={total_entries}
        current_page={current_page}
        onSelectPage={onSelectPage}
      />
      <div className="grid grid-cols-3 md:grid md:grid-cols-3 md:gap-12">
        {artists?.items?.map((release) => (
          <ArtistCollectionItem {...release} key={release.id} />
        ))}
      </div>
      <Pagination
        per_page={per_page}
        total_entries={total_entries}
        current_page={current_page}
        onSelectPage={onSelectPage}
      />
    </div>
  );
};
