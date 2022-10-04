import { SiteOptionData } from '@/types/Data';

export const parseData = (siteOption: SiteOptionData): SiteOptionData => {
  return {
    featured_date_before: siteOption.featured_date_before || 25,
    featured_date_after: siteOption.featured_date_after || 25,
    upcoming_date_before: siteOption.upcoming_date_before || 25,
    upcoming_date_after: siteOption.upcoming_date_after || 25,
  };
};

export type OptionKeys = keyof SiteOptionData;

export const OPTION_DESCRIPTIONS: Record<
  keyof SiteOptionData,
  {
    afterInput: string;
    label: string;
    description: string;
  }
> = {
  featured_date_before: {
    afterInput: `days before today`,
    label: `"Before" window for Featured Releases`,
    description: `How far back should we go when gathering the featured releases on the homepage? Value is in days; for example, a value of 10 means we will go back 10 days before the current date to look for reviews.`,
  },
  featured_date_after: {
    afterInput: `days after today`,
    label: `"After" window for Featured Releases`,
    description: `How far ahead should we go when gathering the featured releases on the homepage? Value is in days; for example, a value of 10 means we will go ahead 10 days after the current date to look for reviews.`,
  },
  upcoming_date_before: {
    afterInput: `days before today`,
    label: `"Before" window for Upcoming Releases`,
    description: `How far back should we go when gathering the featured releases on the homepage? Value is in days; for example, a value of 10 means we will go back 10 days before the current date to look for reviews.`,
  },
  upcoming_date_after: {
    afterInput: `days after today`,
    label: `"After" window for Upcoming Releases`,
    description: `How far ahead should we go when gathering the upcoming releases on the homepage? Value is in days; for example, a value of 10 means we will go ahead 10 days after the current date to look for reviews.`,
  },
};
