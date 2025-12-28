import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

type EventData = CollectionEntry<"events">["data"];

interface ProcessedEvent extends EventData {
  date: string;
}

export async function getPageData(lang: string) {
  // Load settings
  const allSettingsEntries = await getCollection("settings");
  const settingsEntry = allSettingsEntries.find(e => e.id === `settings.${lang}.md`);

  // Load all events for this language
  const allEvents = await getCollection("events", ({ id }) => {
    return id.endsWith(`.${lang}.md`);
  });

  const rawEvents = allEvents.map((event) => event.data);
  const now = new Date();

  const cmsEvents = rawEvents
    .filter((event) => {
      if (event.alwaysShow) return true;
      const dateTimeString = event.time ? `${event.date}T${event.time}` : event.date;
      return new Date(dateTimeString) >= now;
    })
    .sort((a, b) => {
      const aDateTime = a.time ? `${a.date}T${a.time}` : a.date;
      const bDateTime = b.time ? `${b.date}T${b.time}` : b.date;
      return new Date(aDateTime).getTime() - new Date(bDateTime).getTime();
    });

  const events = formatEvents(cmsEvents, lang);

  // Load content sections
  const allBioEntries = await getCollection("biography");
  const bioEntry = allBioEntries.find(e => e.id === `biography.${lang}.md`);
  const bioContent = bioEntry ? await bioEntry.render() : { Content: null };

  const allVideoEntries = await getCollection("videos");
  const videoEntry = allVideoEntries.find(e => e.id === `videos.${lang}.md`);

  const videoItems = videoEntry?.data?.items
    ?.filter(item => !item.hidden)
    .map(item => ({
      title: item.title,
      vimeoId: item.vimeoId.toString(),
      customContainerStyle: item.customContainerStyle || '',
    })) || [];

  const allGalleryEntries = await getCollection("gallery");
  const galleryEntry = allGalleryEntries.find(e => e.id === `gallery.${lang}.md`);

  const allUpcomingEntries = await getCollection("upcoming");
  const upcomingEntry = allUpcomingEntries.find(e => e.id === `upcoming.${lang}.md`);

  const allContactEntries = await getCollection("contact");
  const contactEntry = allContactEntries.find(e => e.id === `contact.${lang}.md`);

  return {
    settings: {
      pageTitle: settingsEntry?.data?.pageTitle || '',
      metaDescription: settingsEntry?.data?.metaDescription || '',
      mainTitle: settingsEntry?.data?.headerMainTitle || '',
      subTitle: settingsEntry?.data?.headerSubtitle || '',
      posthogId: settingsEntry?.data?.posthogId,
    },
    events,
    bio: {
      entry: bioEntry,
      content: bioContent.Content,
    },
    video: {
      entry: videoEntry,
      items: videoItems,
    },
    gallery: galleryEntry,
    upcoming: upcomingEntry,
    contact: contactEntry,
  };
}

function formatEvents(events: EventData[], lang: string): ProcessedEvent[] {
  if (lang === "sv") {
    return events.map((event) => {
      const dateTimeString = event.time ? `${event.date}T${event.time}` : event.date;
      const date = new Date(dateTimeString);

      const weekday = date.toLocaleDateString("sv-SE", { weekday: "long" });
      const day = date.getDate();
      const month = date.toLocaleDateString("sv-SE", { month: "long" });
      
      const time = event.time || date
        .toLocaleTimeString("sv-SE", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
        .replace(":", ".");

      const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

      return {
        ...event,
        date: `${capitalize(weekday)} ${day} ${month} kl ${time}`,
      };
    });
  }

  // English formatting
  return events.map((event) => {
    const dateTimeString = event.time ? `${event.date}T${event.time}` : event.date;
    const date = new Date(dateTimeString);

    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const day = date.getDate();
    
    const getOrdinal = (d: number) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    
    const ordinal = getOrdinal(day);
    const time = event.time || date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return {
      ...event,
      date: `${weekday}, ${month} ${day}${ordinal} at ${time}`,
    };
  });
}
