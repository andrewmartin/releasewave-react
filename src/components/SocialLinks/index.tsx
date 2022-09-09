import { Artist } from '@/types/Data';
import React from 'react';
import {
  FaSpotify,
  FaBandcamp,
  FaSoundcloud,
  FaFacebook,
  FaExternalLinkSquareAlt,
  FaTwitter,
  FaItunes,
  FaInstagram,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
const Social: Record<
  string,
  {
    Icon: IconType;
  }
> = {
  bandcamp: {
    Icon: FaBandcamp,
  },
  soundcloud: {
    Icon: FaSoundcloud,
  },
  spotify: {
    Icon: FaSpotify,
  },
  facebook: {
    Icon: FaFacebook,
  },
  website: {
    Icon: FaExternalLinkSquareAlt,
  },
  twitter: {
    Icon: FaTwitter,
  },
  itunes: {
    Icon: FaItunes,
  },
  instagram: {
    Icon: FaInstagram,
  },
};

interface IconProps {
  type: string;
  link: string;
  name: string;
}

const SocialIconLi = ({ type, link, name }: IconProps) => {
  const { Icon } = Social[type];
  const SIZE = `50`;

  return (
    <li className="block">
      <a
        title={`${name} on ${type}`}
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`w-[50px] h-[50px] block transition-transform hover:scale-125 transform-gpu`}
      >
        <Icon
          color="#AC1E8C"
          className="w-full h-full"
          width={SIZE}
          height={SIZE}
        />
      </a>
    </li>
  );
};

type ArtistKeys = keyof Partial<Artist>;
export const SOCIALS: ArtistKeys[] = [
  `spotify`,
  `facebook`,
  `twitter`,
  `bandcamp`,
  `itunes`,
  `soundcloud`,
  `website`,
  `instagram`,
];

export const SocialLinks = (props: Artist) => {
  const {
    name,
    itunes,
    bandcamp,
    soundcloud,
    spotify,
    facebook,
    website,
    twitter,
    instagram,
  } = props;

  return (
    <ul className="flex space-x-4 my-12 transition-all opacity-50 hover:opacity-100">
      {spotify && (
        <SocialIconLi name={name || ``} type="spotify" link={spotify} />
      )}
      {facebook && (
        <SocialIconLi name={name || ``} type="facebook" link={facebook} />
      )}
      {twitter && (
        <SocialIconLi name={name || ``} type="twitter" link={twitter} />
      )}
      {bandcamp && (
        <SocialIconLi name={name || ``} type="bandcamp" link={bandcamp} />
      )}
      {itunes && <SocialIconLi name={name || ``} type="itunes" link={itunes} />}
      {soundcloud && (
        <SocialIconLi name={name || ``} type="soundcloud" link={soundcloud} />
      )}
      {website && (
        <SocialIconLi name={name || ``} type="website" link={website} />
      )}
      {instagram && (
        <SocialIconLi name={name || ``} type="instagram" link={instagram} />
      )}
    </ul>
  );
};
