// All page copy and media paths live here so sections stay presentational.

export const navLinks = [
  { label: "Home",        href: "#home" },
  { label: "About",       href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Events",      href: "#events" },
  { label: "Community",   href: "#community" },
  { label: "Blogs",       href: "/blog" },
  { label: "Contact",     href: "/contact" },
];

/* Section anchors only exist on the home page, so point them back at "/" from other pages. */
export function navHref(href: string, onHome: boolean) {
  return href.startsWith("#") && !onHome ? `/${href}` : href;
}

/* Public site URL — used for canonical links, the sitemap and social previews. Update if the domain differs. */
export const siteUrl = "https://projectsoulfulness.com";

/* Photo stack under the hero intro — swap in real photos from the café. */
export const heroGallery = [
  { src: "/images/gallery-music.jpeg",       caption: "Music & good company" },
  { src: "/images/gallery-coffee-rave.jpeg", caption: "Coffee raves" },
  { src: "/images/gallery-comedy.jpeg",      caption: "Laughter-filled evenings" },
  { src: "/images/gallery-bulldog.jpeg",     caption: "Playtime with our pups" },
  { src: "/images/gallery-trek.jpeg",        caption: "Trails & fresh air" },
  { src: "/images/gallery-meals.jpeg",       caption: "Wholesome meals" },
  { src: "/images/gallery-painting.jpeg",    caption: "Paint & sip workshops" },
  { src: "/images/gallery-games.jpeg",       caption: "Games & giggles" },
];

export type IconName =
  | "sprout" | "coffee" | "flower" | "heart" | "users" | "sparkles"
  | "brain" | "lightbulb" | "dog" | "plane"
  | "chat" | "music" | "mic" | "salad" | "talk" | "palette";

export const heroPillars: { icon: IconName; label: string }[] = [
  { icon: "sprout", label: "Community Companionship" },
  { icon: "coffee", label: "Meaningful Conversations" },
  { icon: "flower", label: "Mindfulness & Wellness" },
  { icon: "heart",  label: "A Kinder, Happier You" },
];

export const problemSolutionPromise = [
  {
    icon:  "brain" as IconName,
    title: "The Problem",
    tone:  "blush" as const,
    body:  "Urban young adults are increasingly overwhelmed by work stress, peer pressure, relationship trauma, loneliness, trust issues and difficulty forming genuine companionship. Conventional therapy is often perceived as clinical and carries social stigma.",
  },
  {
    icon:  "lightbulb" as IconName,
    title: "The Solution",
    tone:  "mint" as const,
    body:  "A non-clinical social-wellness space where healing happens gently, socially and without judgement — through hospitality, companionship, mindfulness and community programming.",
  },
  {
    icon:  "heart" as IconName,
    title: "The Promise",
    tone:  "blush" as const,
    body:  "A gentle nature-cure approach — no clinical setting, no stigma. Just community, companionship and curated group trips that quietly rebuild emotional integrity over time.",
  },
];

/* `orbitImage` is the photo used in the hero circle animation; `image` is used on the Experiences cards. */
export const experiences: { id: string; icon: IconName; title: string; desc: string; image: string; orbitImage: string; accent: string }[] = [
  { id: "exp-cafe",       icon: "coffee",  title: "Café & Coffee Raving",   desc: "A warm, unhurried coffee culture to linger and connect.",       image: "/images/gallery-coffee-rave.jpeg",       orbitImage: "/images/orbit-cafe.jpeg", accent: "#E58A3A" },
  { id: "exp-bulldog",    icon: "dog",     title: "French Bulldog Adoption", desc: "Companion pets to ease loneliness and build trust.",            image: "/images/gallery-bulldog.jpeg",    orbitImage: "/images/gallery-bulldog.jpeg", accent: "#00BB65" },
  { id: "exp-travel",     icon: "plane",   title: "Travel Cluster",          desc: "Curated group trips that turn healing into shared experiences.", image: "/images/gallery-trek.jpeg",     orbitImage: "/images/orbit-travel.jpeg", accent: "#2D8BD8" },
  { id: "exp-discussion", icon: "music",   title: "Jamming Sessions",        desc: "Bring a song, pick up a guitar, or just sing along.",           image: "/images/gallery-music.jpeg", orbitImage: "/images/orbit-discussion.jpeg", accent: "#E58A3A" },
  { id: "exp-comedy",     icon: "mic",     title: "Stand-up Comedy",         desc: "Light-hearted evenings to release tension and laugh.",          image: "/images/gallery-comedy.jpeg",     orbitImage: "/images/orbit-comedy.jpeg", accent: "#C32991" },
  { id: "exp-menu",       icon: "salad",   title: "Curated Healthy Menu",    desc: "Food designed to nourish body and mind.",                       image: "/images/exp-meals.jpg",       orbitImage: "/images/orbit-menu.jpeg", accent: "#00BB65" },
  { id: "exp-talks",      icon: "talk",    title: "Inspirational Talks",     desc: "Sessions with accomplished speakers for perspective.",          image: "/images/exp-comedy.jpg",      orbitImage: "/images/exp-talks.jpg", accent: "#2D8BD8" },
  { id: "exp-workshop",   icon: "palette", title: "Weekend Workshops",       desc: "Skill-building and self-discovery formats to grow.",            image: "/images/gallery-painting.jpeg",   orbitImage: "/images/orbit-workshop.jpeg", accent: "#C32991" },
];

export const audiencePoints = [
  "Work stress and peer pressure",
  "Relationship trauma and trust issues",
  "Loneliness and companionship struggles",
];

/* Events aren't running yet: while this is false the home page and /events show a "Coming soon"
   preview of the kinds of events planned (no dates, times or booking). Set to true once the
   real calendar below is ready. */
export const eventsLive = false;

/* Placeholder schedule — replace dates, times and details with the real calendar.
   Keep them in date order: the home page shows the first four, /events shows them all. */
export type EventItem = {
  slug:       string;
  date:       string; // ISO yyyy-mm-dd
  start:      string; // 24h "HH:MM"
  end:        string;
  title:      string;
  tagline:    string;
  category:   string;
  image:      string;
  about:      string;
  highlights: string[];
  bring:      string[];
  goodFor:    string;
};

export const events: EventItem[] = [
  {
    slug: "stand-up-comedy-evening", date: "2026-10-17", start: "19:30", end: "21:30",
    title: "Stand-up Comedy Evening", tagline: "Laughter for a lighter you.", category: "Comedy",
    image: "/images/event-comedy.jpg",
    about: "An easy-going night of local stand-up in a warm, intimate room. Clean, relatable comedy about city life, work and relationships — the kind of evening where strangers leave as friends.",
    highlights: ["Sets from local and up-and-coming comedians", "Open-mic slot for brave first-timers", "Café menu and mocktails all evening"],
    bring: ["A friend — or come solo and make one"],
    goodFor: "Anyone who needs a good laugh after a long week",
  },
  {
    slug: "group-discussion-circle", date: "2026-10-25", start: "17:00", end: "18:30",
    title: "Group Discussion Circle", tagline: "Real people, real conversations.", category: "Connection",
    image: "/images/event-circle.jpg",
    about: "A small, facilitated circle where you can talk, listen and be heard without judgement. This month's theme is 'Starting over in a new city' — share as much or as little as you like.",
    highlights: ["Small group, gently facilitated", "A safe, confidential, judgement-free space", "Chai and snacks to keep things cosy"],
    bring: ["An open mind — no preparation needed"],
    goodFor: "Anyone feeling lonely, stuck or simply wanting deeper conversation",
  },
  {
    slug: "weekend-workshop-self-discovery", date: "2026-10-31", start: "11:00", end: "14:00",
    title: "Weekend Workshop: Self-Discovery", tagline: "Learn, create, and grow.", category: "Workshop",
    image: "/images/event-workshop.jpg",
    about: "A hands-on, reflective workshop combining journaling prompts, creative exercises and small-group sharing to help you understand what you value and where you want to go next.",
    highlights: ["Guided journaling and reflection exercises", "Creative activity to map your goals", "Healthy lunch from our curated menu"],
    bring: ["A notebook and pen (or use ours)"],
    goodFor: "Anyone at a crossroads, or curious to know themselves better",
  },
  {
    slug: "pups-and-coffee-morning", date: "2026-11-08", start: "10:00", end: "12:00",
    title: "Pups & Coffee Morning", tagline: "Snuggles, sips and smiles.", category: "Companionship",
    image: "/images/exp-bulldog.jpg",
    about: "Spend a slow Sunday morning with our resident French bulldogs. Enjoy a coffee, meet the pups, and learn about responsible pet adoption and companionship from our team.",
    highlights: ["Time with our friendly French bulldogs", "Speciality coffee and fresh bakes", "A short talk on responsible adoption"],
    bring: ["Nothing but yourself (and maybe a camera)"],
    goodFor: "Animal lovers, and anyone who could use some unconditional affection",
  },
  {
    slug: "inspirational-talk-evening", date: "2026-11-21", start: "18:30", end: "20:00",
    title: "Inspirational Talk: Finding Your Balance", tagline: "Perspective from people who've been there.", category: "Talk",
    image: "/images/exp-talks.jpg",
    about: "An honest evening talk from an accomplished guest speaker on burnout, setbacks and building a more balanced life — followed by an open Q&A and time to mingle.",
    highlights: ["Talk from a guest speaker (to be announced)", "Open audience Q&A", "Networking over light bites"],
    bring: ["Your questions"],
    goodFor: "Young professionals navigating career pressure",
  },
  {
    slug: "mindful-brunch", date: "2026-11-29", start: "11:00", end: "13:00",
    title: "Mindful Brunch Club", tagline: "Nourish the body, feed the soul.", category: "Food",
    image: "/images/exp-menu.jpg",
    about: "A shared-table brunch built around our curated healthy menu. We'll start with a short mindful-eating exercise, then simply enjoy good food and good company.",
    highlights: ["Seasonal, wholesome brunch menu", "Short guided mindful-eating practice", "Shared tables made for meeting new people"],
    bring: ["An appetite — let us know about any dietary needs when you reserve"],
    goodFor: "Foodies, newcomers to the city, and anyone who'd like a slower Sunday",
  },
];

const DAYS   = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

/* Date parts for the calendar badges, computed without time zones so server and browser always agree. */
export function eventDateParts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { day: DAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()], date: String(d).padStart(2, "0"), month: MONTHS[m - 1], year: y };
}

export function formatEventTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}

/* SAMPLE testimonials — written to show the tone, not real people. Replace with genuine quotes
   (and photos, with permission) from real members before launch.
   `avatar` is optional: without one, the card shows the person's initial in a brand-coloured circle. */
export const testimonials: { quote: string; name: string; age: number; role: string; avatar?: string }[] = [
  { quote: "Moved to Hyderabad for work and didn't know a soul. One filter coffee here turned into a Saturday jamming group I now never miss.", name: "Ananya", age: 25, role: "Product designer, Madhapur" },
  { quote: "After a 10-hour sprint, this is where I switch off. Nobody asks about deadlines — just good chai, good music and good people.",       name: "Karthik", age: 27, role: "Software engineer, Gachibowli" },
  { quote: "I came for the French bulldogs, honestly. I stayed for the people. It feels like a second home, not a café.",                     name: "Sneha", age: 23, role: "Postgrad student, Kondapur" },
  { quote: "The comedy nights are the best stress-buster in the city. I've laughed more here in a month than all of last year.",               name: "Rahul", age: 29, role: "Chartered accountant, Hitech City" },
  { quote: "I'm an introvert, so I was nervous. Everyone was so kind — no pressure to talk, but I always leave having made a new friend.",     name: "Priya", age: 26, role: "Content writer, Jubilee Hills" },
  { quote: "The trek with the group was the reset I didn't know I needed. Strangers on the way up, friends by the time we came down.",         name: "Arjun", age: 28, role: "Data analyst, Kukatpally" },
];

/* Contact details. `addressShort` is for tight spots like the footer row; both link to `mapsUrl`. */
const fullAddress = "Western Dallas Center, Dallas Centre Rd, Silpa Gram Craft Village, Madhapur, Hyderabad, Telangana 500032";

export const contact = {
  email:        "contact@projectsoulfulness.com",
  phone:        "+91 79938 37007",
  address:      fullAddress,
  addressShort: "Madhapur, Hyderabad",
  mapsUrl:      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
};
