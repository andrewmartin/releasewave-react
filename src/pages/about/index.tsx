import React from 'react';
import atomStyles from '@/styles/Atoms.module.css';
import { ImInstagram } from 'react-icons/im';
import {
  aboutServerSideProps,
  IAboutServerSideProps,
} from '@/util/next/getServerSideProps/about';
import { Avatar } from '@/components/Atoms/ReleaseMeta';
import { Head, SeoProps } from '@/components/Head';

export default function About(props: IAboutServerSideProps) {
  const { users } = props;

  const seo: SeoProps = {
    title: `About Release Wave`,
    description: `Release Wave, formerly EmotionalPunk.com, is a site to discover all of the best in new music, curated by a team of musical geniuses.`,
  };

  return (
    <div className={`p-12 flex justify-start max-w-[800px] flex-wrap m-auto`}>
      <Head {...seo} />
      <h2 className="w-full text-3xl font-bold tracking-tighter mb-12">
        About
      </h2>
      <div className={`${atomStyles.EmphasisContent}`}>
        <p>
          <strong className="tracking-tighter text-[1.2em] font-bold text-pink">
            Release Wave
          </strong>
          {` `}
          is a music dedicated to curating the word about essential new and
          upcoming music. Originally formed in 2000 under the name
          EmotionalPunk.com, the site has reformed to encompass a wide array of
          genres.{` `}
        </p>

        <h3 className="my-8 text-[1.8em] font-bold tracking-tighter border-b-2 border-gray-200 inline-block">
          Contact Us
        </h3>
        <p>
          <strong className="tracking-tighter text-[1.2em] font-bold text-pink">
            Release Wave
          </strong>
          {` `}
          is run by a small team of music enthusiasts, and we love hearing about
          new music.
        </p>
        {users &&
          users.map((user) => {
            return (
              <a
                className={`${atomStyles.ReleaseLink} flex items-center mx-6 my-12`}
                href={`mailto:${user.email}`}
                key={user.id}
              >
                <Avatar src={user.image.square} alt={`image of ${user.name}`} />
                <span className="ml-8 w-full flex flex-wrap items-center">
                  <strong className="text-[1.2em] tracking-tighter font-bold leading-[0.8]">
                    {user.name}
                  </strong>
                  <span className="block w-full">{user.email}</span>
                </span>
              </a>
            );
          })}
        <h3 className="my-8 text-[1.8em] font-bold tracking-tighter border-b-2 border-gray-200 inline-block">
          Social
        </h3>
        <div className="ml-8 flex align-center items-center space-x-6">
          <a
            className={`${atomStyles.ArtistLink} flex align-center items-center space-x-6`}
            href="https://instagram.com/releasewave"
          >
            <ImInstagram size={50} />
            <span className="md:text-[1.8em] text-[1.2em] font-bold tracking-tighter">
              @releasewave
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = aboutServerSideProps({
  checkAdmin: false,
});
