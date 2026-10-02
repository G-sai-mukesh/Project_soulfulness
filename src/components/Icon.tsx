import {
  Sprout, Coffee, Flower2, Heart, Users, Sparkles, Brain, Lightbulb, Dog,
  PersonStanding, BookOpen, Plane, MessagesSquare, Mic, Salad, Presentation, Palette,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/content";

const icons = {
  sprout:    Sprout,
  coffee:    Coffee,
  flower:    Flower2,
  heart:     Heart,
  users:     Users,
  sparkles:  Sparkles,
  brain:     Brain,
  lightbulb: Lightbulb,
  dog:       Dog,
  yoga:      PersonStanding,
  book:      BookOpen,
  plane:     Plane,
  chat:      MessagesSquare,
  mic:       Mic,
  salad:     Salad,
  talk:      Presentation,
  palette:   Palette,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp aria-hidden="true" {...props} />;
}
