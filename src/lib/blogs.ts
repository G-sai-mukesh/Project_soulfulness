// Blog posts for /blog. Each post is a list of simple blocks so pages stay presentational.
// To add a post: append an entry below — the listing, article page, and sitemap pick it up automatically.

export type BlogBlock =
  | { type: "p";     text: string }
  | { type: "h2";    text: string }
  | { type: "ul";    items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug:     string;
  title:    string;
  excerpt:  string; // also used as the meta description — keep it under ~160 chars
  category: string;
  date:     string; // ISO yyyy-mm-dd
  readTime: string;
  image:    string;
  imageAlt: string;
  keywords: string[];
  body:     BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug:     "loneliness-in-young-adults",
    title:    "Lonely in a Crowded City: Why Young Adults Feel Isolated (and What Actually Helps)",
    excerpt:  "You can have 800 followers and no one to call. Here's why loneliness hits young adults hardest — and the small, real-world habits that ease it.",
    category: "Connection",
    date:     "2026-09-24",
    readTime: "7 min read",
    image:    "/images/community.jpg",
    imageAlt: "Friends sharing a relaxed moment together",
    keywords: ["loneliness in young adults", "how to feel less lonely", "urban loneliness", "making friends in a new city"],
    body: [
      { type: "p", text: "It's one of the strangest feelings of modern life: you're surrounded by people all day — on the metro, in the office, in group chats that never go quiet — and yet you go home feeling completely alone. If that sounds familiar, you're far from the only one." },
      { type: "p", text: "In 2023 the World Health Organization launched a Commission on Social Connection, naming loneliness a pressing global health concern. The same year, the U.S. Surgeon General issued an advisory calling it an epidemic. And again and again, surveys find the loneliest group isn't the elderly — it's people in their late teens, twenties and early thirties." },
      { type: "h2", text: "Why loneliness hits young adults so hard" },
      { type: "p", text: "Your twenties are a decade of constant transition. You move cities for college or work, friendships from school drift apart, colleagues change every couple of years, and the structures that once handed you a social life — classrooms, hostels, sports teams — disappear almost overnight." },
      { type: "ul", items: [
        "Relocation: a new city means starting your social circle from scratch.",
        "Work culture: long hours and hybrid schedules leave little energy for showing up for people.",
        "Digital substitutes: scrolling feels like connection, but it rarely meets the need to be seen and heard.",
        "Stigma: admitting you're lonely can feel like admitting you've failed — so most people don't.",
      ]},
      { type: "h2", text: "Loneliness is a signal, not a flaw" },
      { type: "p", text: "Researchers often compare loneliness to hunger. It's an uncomfortable feeling designed to push you toward something you need — in this case, people. Feeling lonely doesn't mean something is wrong with you. It means a basic human need isn't being met, and that's something you can work on, step by step." },
      { type: "quote", text: "Loneliness isn't the absence of people. It's the absence of feeling known." },
      { type: "h2", text: "Small habits that genuinely help" },
      { type: "ul", items: [
        "Become a regular somewhere. Visiting the same café, gym or class every week turns strangers into familiar faces — and familiar faces into friends.",
        "Choose activities over 'meeting people'. It's far easier to connect while doing something together — a yoga class, a workshop, a walk — than in a forced conversation.",
        "Say yes twice. One meetup rarely creates a friendship. Repetition does. Commit to going back at least once more.",
        "Send the first message. Most people are waiting for someone else to reach out. Be that someone.",
        "Put the phone face-down. Being fully present for one conversation beats half-listening to five.",
      ]},
      { type: "h2", text: "Why spaces matter as much as willpower" },
      { type: "p", text: "Telling someone to 'just go out more' misses the point: many cities simply don't have welcoming places to go that aren't loud bars or quiet libraries. That's why we built Project Soulfulness — a warm café and community space where it's normal to sit beside a stranger, join a discussion circle, or simply be around people without pressure." },
      { type: "p", text: "If you've been feeling alone, consider this your gentle nudge. You don't need to fix everything at once. You just need one place, one conversation, one evening that reminds you that you belong somewhere." },
      { type: "p", text: "Note: if loneliness has started to feel heavy or hopeless, please speak to a qualified mental-health professional or a helpline in your area. Community and professional support work best together." },
    ],
  },
  {
    slug:     "social-wellness-vs-therapy",
    title:    "Social Wellness vs Therapy: Understanding the Gentle Middle Ground",
    excerpt:  "Not every bad week needs a clinic — but you still deserve support. Here's what social wellness is, how it differs from therapy, and when to choose which.",
    category: "Wellness",
    date:     "2026-09-10",
    readTime: "6 min read",
    image:    "/images/exp-discussion.jpg",
    imageAlt: "A small group in conversation during a discussion circle",
    keywords: ["what is social wellness", "social wellness vs therapy", "non-clinical mental wellness", "mental health stigma"],
    body: [
      { type: "p", text: "Most of us were taught there are two options for our emotional health: you're either 'fine', or you need therapy. But real life happens in the wide space in between — the stressful month at work, the breakup that still stings, the quiet sense that you haven't laughed properly in a while." },
      { type: "p", text: "That in-between space is where social wellness lives." },
      { type: "h2", text: "What is social wellness?" },
      { type: "p", text: "Social wellness is your ability to build and keep healthy, supportive relationships — and to feel like you belong to a community. It's one of the recognised dimensions of overall wellbeing, alongside physical, emotional and mental health. When it's strong, you have people to share good news with, lean on in hard times, and simply enjoy life alongside." },
      { type: "h2", text: "How it differs from therapy" },
      { type: "ul", items: [
        "Therapy is clinical and one-to-one. A trained professional helps you work through specific mental-health concerns, trauma or patterns.",
        "Social wellness is communal and everyday. It's built through shared experiences: conversations over coffee, group activities, laughter, movement and belonging.",
        "Therapy has a structure and a goal. Social wellness is open-ended — you show up, take part, and benefits accumulate quietly over time.",
        "Therapy can feel like a big step. Social wellness has almost no barrier to entry: you just walk in.",
      ]},
      { type: "quote", text: "Therapy helps you understand yourself. Community helps you remember you're not alone. Most of us need both at different times." },
      { type: "h2", text: "Why the 'middle ground' matters" },
      { type: "p", text: "In many places, mental health still carries stigma. Plenty of young people who are stressed, lonely or burnt out never seek help because a clinic feels too formal, too expensive, or too much like admitting something is 'wrong'. A non-clinical space lowers that barrier. You're not a patient — you're a guest, a member, a friend." },
      { type: "p", text: "Often, the simple act of being around kind people — sharing a meal, joining a yoga session, listening in a discussion circle — eases the pressure enough for you to think clearly again. And for those who do need professional care, a supportive community can make the first step toward therapy feel less daunting." },
      { type: "h2", text: "When to choose which" },
      { type: "ul", items: [
        "Choose social wellness when you feel disconnected, stressed, lonely, or simply want more joy and balance in your routine.",
        "Choose therapy when difficult feelings persist for weeks, interfere with daily life, or relate to trauma, anxiety or depression.",
        "Choose both when you want professional guidance plus a warm community to practise feeling better in.",
      ]},
      { type: "p", text: "At Project Soulfulness we sit firmly in that gentle middle — a café-meets-sanctuary where healing happens socially, without judgement. We're not a replacement for professional care, and we'll always encourage you to seek it when you need it. We're the place you come to breathe, connect and feel a little more like yourself." },
    ],
  },
  {
    slug:     "mindfulness-for-work-stress",
    title:    "10-Minute Mindfulness Habits for Work Stress (No Retreat Required)",
    excerpt:  "Deadlines, pings and back-to-back calls? These quick, science-backed mindfulness habits fit into a busy workday and help you reset in minutes.",
    category: "Mindfulness",
    date:     "2026-08-27",
    readTime: "6 min read",
    image:    "/images/exp-yoga.jpg",
    imageAlt: "A calm yoga session in a sunlit room",
    keywords: ["mindfulness for work stress", "quick stress relief at work", "burnout prevention tips", "breathing exercises for anxiety"],
    body: [
      { type: "p", text: "You don't need a mountain retreat or an hour of silent meditation to feel calmer. For most of us, the problem isn't a lack of time — it's that stress builds up all day with nowhere to go. Mindfulness gives it an exit." },
      { type: "p", text: "Mindfulness simply means paying attention to the present moment, on purpose, without judging it. Research on mindfulness practices has linked them to lower perceived stress and better focus. The best part? Small doses, done consistently, add up." },
      { type: "h2", text: "1. The 4-7-8 reset (1 minute)" },
      { type: "p", text: "Breathe in through your nose for 4 counts, hold for 7, and exhale slowly through your mouth for 8. Repeat three or four times. A long exhale is one of the quickest ways to tell your body it's safe to slow down — try it before a tough meeting." },
      { type: "h2", text: "2. Single-task your coffee (5 minutes)" },
      { type: "p", text: "Next coffee or chai break, leave your phone behind. Notice the warmth of the cup, the aroma, the first sip. It sounds small, but turning an autopilot habit into a mindful one gives your brain a genuine break from constant input." },
      { type: "h2", text: "3. The 5-4-3-2-1 grounding check (2 minutes)" },
      { type: "p", text: "When your thoughts are racing, name 5 things you can see, 4 you can feel, 3 you can hear, 2 you can smell and 1 you can taste. It pulls your attention out of the spiral and back into the room." },
      { type: "h2", text: "4. Desk stretches between calls (3 minutes)" },
      { type: "ul", items: [
        "Roll your shoulders back slowly five times.",
        "Tilt each ear toward your shoulder and hold for a few breaths.",
        "Interlace your fingers, stretch your arms overhead and breathe deeply.",
        "Stand up, plant your feet and feel the ground for 30 seconds.",
      ]},
      { type: "h2", text: "5. A 'done list' at the end of the day (5 minutes)" },
      { type: "p", text: "Instead of staring at everything you didn't finish, write down three things you did. It helps your mind close the workday instead of carrying it home." },
      { type: "h2", text: "6. A walk without a podcast (10 minutes)" },
      { type: "p", text: "Walking is moving meditation. Leave the headphones off, notice the sky, the trees, the sounds around you. Many people find their best ideas arrive on exactly these walks." },
      { type: "quote", text: "You can't stop the waves, but you can learn to surf. — Jon Kabat-Zinn" },
      { type: "h2", text: "Make it stick: practise with others" },
      { type: "p", text: "The hardest part of mindfulness isn't learning it — it's remembering to do it. That's why group practice works so well. Showing up to a weekly yoga or mindfulness session builds the habit, and being around others who are slowing down too makes it easier to let go." },
      { type: "p", text: "Our weekend Yoga & Mindfulness sessions at Project Soulfulness are designed for complete beginners and busy professionals alike. Come as you are — no mat, experience or flexibility required." },
    ],
  },
  {
    slug:     "how-to-make-friends-as-an-adult",
    title:    "How to Make Friends as an Adult: A Realistic Guide for Your 20s and 30s",
    excerpt:  "Making friends after college feels awkward for everyone. A practical, judgement-free guide to building real friendships as a working adult.",
    category: "Connection",
    date:     "2026-08-13",
    readTime: "8 min read",
    image:    "/images/exp-cafe.jpg",
    imageAlt: "People chatting over coffee in a cosy café",
    keywords: ["how to make friends as an adult", "making friends in your 20s", "making friends after college", "adult friendship tips"],
    body: [
      { type: "p", text: "Remember when making a friend was as simple as sitting next to someone in class? As adults, there's no seating chart. Friendships don't just happen anymore — they need a little intention. The good news: once you understand how adult friendships form, it gets a lot less mysterious." },
      { type: "h2", text: "The three ingredients of friendship" },
      { type: "p", text: "Sociologists have long pointed to three conditions that help close friendships form: proximity (being near each other), repeated unplanned interaction, and a setting that lets people relax and open up. School and college gave us all three automatically. Adult life rarely does — so we have to recreate them." },
      { type: "p", text: "Research by Jeffrey Hall at the University of Kansas also suggests it takes many hours together — roughly 50 to move from acquaintance to casual friend, and far more to become close friends. In other words: friendship is mostly time. Be patient with it." },
      { type: "h2", text: "Where to actually meet people" },
      { type: "ul", items: [
        "Recurring activities: weekly classes, book clubs, run clubs or workshops give you built-in repetition.",
        "Community spaces: cafés and venues designed around connection make it normal to talk to strangers.",
        "Volunteering: working side by side on something meaningful creates bonds quickly.",
        "Group travel: a weekend trip with a small group can compress months of friendship into a few days.",
        "Your existing circle: ask a friend to bring a friend. Friends-of-friends are an underrated source of connection.",
      ]},
      { type: "h2", text: "How to go from 'nice to meet you' to actual friends" },
      { type: "ul", items: [
        "Be the one who follows up. 'It was great chatting — want to grab coffee next week?' is all it takes.",
        "Suggest a specific plan. 'We should hang out sometime' rarely happens. 'Comedy night on Saturday?' does.",
        "Share a little of yourself. Friendship deepens when both people open up, a bit at a time.",
        "Show up consistently. Reliability builds trust faster than charisma ever will.",
        "Don't keep score. Some people are slower to reach out — that's rarely a sign they don't care.",
      ]},
      { type: "quote", text: "Everyone you meet is quietly hoping someone else will make the first move." },
      { type: "h2", text: "What to do when it feels awkward" },
      { type: "p", text: "It will feel awkward sometimes — for everyone. Many people underestimate how much others enjoy talking to them; studies of conversations between strangers have found people consistently leave feeling more liked than they expected. Assume the other person wants to connect too. Most of the time, they do." },
      { type: "h2", text: "A place designed for exactly this" },
      { type: "p", text: "Project Soulfulness was built around those three ingredients. You can drop in for coffee, become a regular, join a discussion circle or a weekend workshop, and see the same friendly faces week after week. It's a lot easier to make friends when the space does half the work for you." },
    ],
  },
  {
    slug:     "pets-and-mental-wellbeing",
    title:    "Paws for Thought: How Pets and Companion Animals Support Mental Wellbeing",
    excerpt:  "From calmer moods to easier conversations with strangers, here's how time with companion animals can ease stress and loneliness.",
    category: "Wellness",
    date:     "2026-07-30",
    readTime: "5 min read",
    image:    "/images/exp-bulldog.jpg",
    imageAlt: "A friendly French bulldog looking at the camera",
    keywords: ["pets and mental health", "benefits of pets for loneliness", "animal companionship stress relief", "French bulldog companion"],
    body: [
      { type: "p", text: "Anyone who has been greeted by a wagging tail after a long day knows the feeling: the shoulders drop, the face softens, the day suddenly feels lighter. That isn't just sentiment — there's a growing body of research on how animals support our wellbeing." },
      { type: "h2", text: "What the research suggests" },
      { type: "ul", items: [
        "Lower stress: studies on human–animal interaction have found that petting a friendly animal can reduce stress markers and help people feel calmer.",
        "Less loneliness: caring for an animal gives structure, purpose and a constant, non-judgemental companion.",
        "More movement: dog owners tend to walk more, which brings its own mood benefits.",
        "Easier social connection: animals are natural icebreakers — people are far more likely to start a conversation with someone who has a dog beside them.",
      ]},
      { type: "h2", text: "Why companion animals help with trust" },
      { type: "p", text: "For people recovering from difficult relationships or struggling with trust, animals offer something rare: affection with no conditions. There's no judgement, no hidden meaning, no pressure to perform. That simple, steady connection can be a gentle first step toward opening up to people again." },
      { type: "quote", text: "Animals don't care about your job title, your follower count or your bad day. They just want you to be there." },
      { type: "h2", text: "Can't own a pet? You still have options" },
      { type: "p", text: "Not everyone can keep a pet — rentals, long work hours and travel all get in the way. You can still enjoy animal companionship by volunteering at a shelter, offering to walk a neighbour's dog, fostering, or spending time in pet-friendly spaces." },
      { type: "h2", text: "Meet our four-legged team" },
      { type: "p", text: "At Project Soulfulness, companion French bulldogs are part of the community. Their easy-going, affectionate nature makes them perfect for curling up next to while you read, or for breaking the ice with the person at the next table. We also support responsible adoption for members ready to welcome a companion home." },
      { type: "p", text: "Come say hello. We promise at least one snuffly greeting." },
    ],
  },
  {
    slug:     "laughter-and-stress-relief",
    title:    "Why Laughter Is Serious Medicine for Stress",
    excerpt:  "A good laugh does more than lift your mood. Here's what laughing does for stress and social bonds — and how to make more room for it.",
    category: "Joy",
    date:     "2026-07-16",
    readTime: "5 min read",
    image:    "/images/exp-comedy.jpg",
    imageAlt: "An audience laughing at a stand-up comedy show",
    keywords: ["laughter and stress relief", "benefits of laughter", "stand-up comedy night", "fun ways to reduce stress"],
    body: [
      { type: "p", text: "When was the last time you laughed so hard your stomach hurt? If you have to think about it, you're not alone. As adults get busier and more stressed, laughter is often one of the first things we lose — and one of the easiest things to bring back." },
      { type: "h2", text: "What laughter does to your body" },
      { type: "p", text: "A real, hearty laugh is a mini-workout. It increases your intake of air, stimulates your heart and lungs, and then leaves your muscles more relaxed than before. Researchers have linked laughter to short-term stress relief, and many people report feeling calmer and more optimistic after a good laugh." },
      { type: "h2", text: "Laughter is social glue" },
      { type: "p", text: "Psychologists have noticed that we're far more likely to laugh with other people than alone — often many times more. Laughing together signals trust and safety. It's one of the fastest ways strangers become friends, and one of the ways friends stay close." },
      { type: "quote", text: "A day without laughter is a day wasted. — Charlie Chaplin" },
      { type: "h2", text: "Simple ways to laugh more" },
      { type: "ul", items: [
        "Spend time with funny friends — laughter is contagious.",
        "Go to a live comedy show. The shared energy of a room is impossible to get from a screen.",
        "Try something new and be bad at it. Pottery, dance, improv — laughing at yourself is freeing.",
        "Swap one evening of scrolling for a board-game night.",
        "Don't wait for things to be funny. Look for the small absurd moments in everyday life.",
      ]},
      { type: "h2", text: "Our Stand-up Comedy Evenings" },
      { type: "p", text: "That's exactly why stand-up comedy is part of the Project Soulfulness calendar. These are light-hearted, welcoming evenings — great to come to solo, because you'll leave having shared a laugh with everyone in the room. Check our upcoming events and bring a friend (or make one there)." },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
