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

/* Paste a hosted video URL (e.g. an .mp4) here to enable the hero "Watch Video" player. */
export const heroVideoSrc = "";

export type IconName =
  | "sprout" | "coffee" | "flower" | "heart" | "users" | "sparkles"
  | "brain" | "lightbulb" | "dog" | "yoga" | "book" | "plane"
  | "chat" | "mic" | "salad" | "talk" | "palette";

export const heroPillars: { icon: IconName; label: string }[] = [
  { icon: "sprout", label: "Community Companionship" },
  { icon: "coffee", label: "Meaningful Conversations" },
  { icon: "flower", label: "Mindfulness & Wellness" },
  { icon: "heart",  label: "A Kinder, Happier You" },
];

export const aboutHighlights: { icon: IconName; label: string }[] = [
  { icon: "users",    label: "A welcoming space for real connections" },
  { icon: "sparkles", label: "Experiences that uplift" },
  { icon: "heart",    label: "A community that cares" },
];

export const problemSolutionPromise = [
  {
    icon:  "brain" as IconName,
    title: "The Problem",
    tone:  "blush" as const,
    body:  "Urban young adults are increasingly overwhelmed by work stress, peer pressure, relationship trauma, loneliness, trust issues, and difficulty forming genuine companionship. Conventional therapy is often perceived as clinical and carries social stigma.",
  },
  {
    icon:  "lightbulb" as IconName,
    title: "The Solution",
    tone:  "mint" as const,
    body:  "A non-clinical social-wellness space where healing happens gently, socially, and without judgement — through hospitality, companionship, mindfulness, and community programming.",
  },
  {
    icon:  "heart" as IconName,
    title: "The Promise",
    tone:  "peach" as const,
    body:  "A gentle nature-cure approach — no clinical setting, no stigma. Just community, companionship, and curated group trips that quietly rebuild emotional integrity over time.",
  },
];

export const experiences: { id: string; icon: IconName; title: string; desc: string; image: string; accent: string }[] = [
  { id: "exp-cafe",       icon: "coffee",  title: "Café & Coffee Raving",   desc: "A warm, unhurried coffee culture to linger and connect.",       image: "/images/exp-cafe.jpg",       accent: "#E58A3A" },
  { id: "exp-bulldog",    icon: "dog",     title: "French Bulldog Adoption", desc: "Companion pets to ease loneliness and build trust.",            image: "/images/exp-bulldog.jpg",    accent: "#00BB65" },
  { id: "exp-yoga",       icon: "yoga",    title: "Yoga Space",              desc: "Gentle movement and mindfulness for balance.",                  image: "/images/exp-yoga.jpg",       accent: "#00BB65" },
  { id: "exp-library",    icon: "book",    title: "Library Space",           desc: "Quiet corners for reading and reflection.",                     image: "/images/exp-library.jpg",    accent: "#C32991" },
  { id: "exp-travel",     icon: "plane",   title: "Travel Cluster",          desc: "Curated group trips that turn healing into shared experiences.", image: "/images/exp-travel.jpg",     accent: "#2D8BD8" },
  { id: "exp-discussion", icon: "chat",    title: "Group Discussions",       desc: "Peer circles to talk, listen, and be heard.",                   image: "/images/exp-discussion.jpg", accent: "#E58A3A" },
  { id: "exp-comedy",     icon: "mic",     title: "Stand-up Comedy",         desc: "Light-hearted evenings to release tension and laugh.",          image: "/images/exp-comedy.jpg",     accent: "#C32991" },
  { id: "exp-menu",       icon: "salad",   title: "Curated Healthy Menu",    desc: "Food designed to nourish body and mind.",                       image: "/images/exp-menu.jpg",       accent: "#00BB65" },
  { id: "exp-talks",      icon: "talk",    title: "Inspirational Talks",     desc: "Sessions with accomplished speakers for perspective.",          image: "/images/exp-talks.jpg",      accent: "#2D8BD8" },
  { id: "exp-workshop",   icon: "palette", title: "Weekend Workshops",       desc: "Skill-building and self-discovery formats to grow.",            image: "/images/exp-workshop.jpg",   accent: "#C32991" },
];

export const audiencePoints = [
  "Work stress and peer pressure",
  "Relationship trauma and trust issues",
  "Loneliness and companionship struggles",
];

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
    slug: "yoga-mindfulness-session", date: "2026-10-10", start: "08:00", end: "09:30",
    title: "Yoga & Mindfulness Session", tagline: "A calmer mind, a happier you.", category: "Mindfulness",
    image: "/images/event-yoga.jpg",
    about: "Start your weekend slowly. A gentle, beginner-friendly flow followed by a guided breathing and mindfulness practice — designed to release the week's tension and help you feel grounded again.",
    highlights: ["Gentle yoga flow suitable for all levels", "Guided breathing and body-scan meditation", "Herbal tea and quiet conversation afterwards"],
    bring: ["Comfortable clothes", "A water bottle", "Your own mat if you have one (we have spares)"],
    goodFor: "Beginners, busy professionals, anyone feeling stretched thin",
  },
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
    slug: "book-swap-reading-hour", date: "2026-11-14", start: "16:00", end: "18:00",
    title: "Book Swap & Silent Reading Hour", tagline: "Stories shared, minds refreshed.", category: "Library",
    image: "/images/exp-library.jpg",
    about: "Bring a book you loved, take home one someone else loved. Then settle into an hour of phone-free reading in our library corner, followed by a relaxed chat about what everyone's reading.",
    highlights: ["Book swap table", "A full hour of phone-free silent reading", "Casual book chat over coffee"],
    bring: ["One or two books to swap (optional)"],
    goodFor: "Readers, introverts, and anyone craving a quiet reset",
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

/* Placeholder testimonials from the design mock — swap in real member quotes. */
export const testimonials = [
  { quote: "This space feels like a warm hug. I've made amazing friends and feel more like myself.", name: "Aarav", age: 26, avatar: "/images/avatar-aarav.jpg" },
  { quote: "From coffee to deep conversations, everything here just feels right.",                   name: "Meera", age: 24, avatar: "/images/avatar-meera.jpg" },
  { quote: "A place where I can relax, be myself, and actually feel heard.",                         name: "Rohan", age: 28, avatar: "/images/avatar-rohan.jpg" },
];

/* Placeholder contact details — replace with the real ones before launch. */
export const contact = {
  email:   "contact@projectsoulfulness.com",
  phone:   "+91 79938 37007",
  address: "Your café address, City",
};
