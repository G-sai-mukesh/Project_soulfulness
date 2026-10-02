// All page copy and media paths live here so sections stay presentational.

export const navLinks = [
  { label: "Home",        href: "#home" },
  { label: "About",       href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Events",      href: "#events" },
  { label: "Community",   href: "#community" },
  { label: "Contact",     href: "#contact" },
];

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

export const events = [
  { day: "SAT", date: "12", month: "APR", title: "Yoga & Mindfulness Session", tagline: "A calmer mind, a happier you.",    image: "/images/event-yoga.jpg" },
  { day: "SAT", date: "19", month: "APR", title: "Stand-up Comedy Evening",    tagline: "Laughter for a lighter you.",      image: "/images/event-comedy.jpg" },
  { day: "SUN", date: "27", month: "APR", title: "Group Discussion Circle",    tagline: "Real people, real conversations.", image: "/images/event-circle.jpg" },
  { day: "SAT", date: "03", month: "MAY", title: "Weekend Workshop: Self-Discovery", tagline: "Learn, create, and grow.",   image: "/images/event-workshop.jpg" },
];

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
