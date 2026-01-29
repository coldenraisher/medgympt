import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Video,
  FileText,
  ExternalLink,
  Copy,
  Check,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/utils/cn";

const CLIENT = {
  handle: "@medgympt",
  name: "MedGym | Gymnastics Physical Therapy",
  tagline:
    "Sports medicine education + gymnastics rehab/injury-prevention content",
};

const KEYWORDS = [
  { k: "gymnastics PT", cat: "Positioning" },
  { k: "sports medicine", cat: "Positioning" },
  { k: "injury prevention", cat: "Education" },
  { k: "rehabilitation", cat: "Education" },
  { k: "return to sport", cat: "Education" },
  { k: "overuse injuries", cat: "Education" },
  { k: "wrist/shoulder/back", cat: "Body regions" },
  { k: "mobility", cat: "Performance" },
  { k: "strength", cat: "Performance" },
  { k: "mental health / burnout", cat: "Athlete mindset" },
  { k: "nutrition / iron deficiency", cat: "Support factors" },
  { k: "coaches & parents", cat: "Audience" },
  { k: "continuing education", cat: "Monetization" },
  { k: "courses / certification", cat: "Monetization" },
  { k: "webinars / practicals", cat: "Monetization" },
];

const THEMES = [
  {
    title: "Gymnastics injury education",
    items: [
      "Common gymnastics injury patterns (wrist/shoulder/spine/ankle)",
      "Red flags vs normal soreness",
      "Practical what to do next guidance",
    ],
    icon: "sparkles",
  },
  {
    title: "Course-led content engine",
    items: [
      "Pinned course promos and educator credibility",
      "Provider/team introductions as trust builders",
      "Event-driven posts (congresses, practicals, webinars)",
    ],
    icon: "file",
  },
  {
    title: "Mindset + athlete wellbeing",
    items: [
      "Burnout / boundaries / athlete identity",
      "Fear, perfectionism, and confidence",
      "Coach-athlete relationship dynamics",
    ],
    icon: "users",
  },
  {
    title: "Reels: quick clinical takes",
    items: [
      "Short-form 3 things frameworks",
      "Myth-busting and simple cues",
      "Tight hook with 1-3 actionable points",
    ],
    icon: "video",
  },
];

const COMPETITORS = [
  {
    name: "Rehab Science (Dr. Tom Walters)",
    handle: "@rehabscience",
    niche: "Evidence-based mobility + pain education",
    followers: 1700000,
    tier: "Mega",
    why: "Scaled educational rehab content with consistent formats.",
  },
  {
    name: "The Prehab Guys",
    handle: "@theprehabguys",
    niche: "Prehab/rehab exercises + longevity movement",
    followers: 1300000,
    tier: "Mega",
    why: "Clear exercise demos + saveable routines.",
  },
  {
    name: "The Physio Fix (Dr. Stacie Barber)",
    handle: "@thephysiofix",
    niche: "Athlete rehab + return-to-sport",
    followers: 877300,
    tier: "Macro",
    why: "Athlete-forward messaging + strong authority positioning.",
  },
  {
    name: "The Physiora (Aravinda Suresh)",
    handle: "@the_physiora",
    niche: "Pain management + neuro/clinic content",
    followers: 758800,
    tier: "Macro",
    why: "High output + clear clinic identity.",
  },
  {
    name: "Sumaiya Naaz",
    handle: "@fitsio_max",
    niche: "Sports physio + women's health + rehab",
    followers: 596300,
    tier: "Macro",
    why: "Broad but cohesive vertical content cadence.",
  },
  {
    name: "Dr. Dan Ginader",
    handle: "@dr.dan_dpt",
    niche: "Sports + dance PT reels",
    followers: 615100,
    tier: "Macro",
    why: "Energetic demos + dancer/gymnast adjacent audience.",
  },
  {
    name: "Doc Jen Fit (Dr. Jen Esquer)",
    handle: "@docjenfit",
    niche: "Mobility method + holistic movement",
    followers: 640000,
    tier: "Macro",
    why: "Personality-led mobility education; strong method branding.",
  },
  {
    name: "The Gymnastics PT (Dr. Brittany Lapinski)",
    handle: "@the.gymnastics.pt",
    niche: "Gymnastics injury prevention + recovery",
    followers: 52000,
    tier: "Mid",
    why: "Direct niche overlap; gymnast-parent-coach guidance.",
  },
  {
    name: "SHIFT Movement Science (Dave Tilley)",
    handle: "@shift_movementscience",
    niche: "Gymnastics strength + sports PT",
    followers: 46305,
    tier: "Mid",
    why: "Bridges coaching + clinical concepts.",
  },
  {
    name: "Chris Butler Sports PT",
    handle: "@cbutlersportspt",
    niche: "Sports PT education (overhead athletes)",
    followers: 30600,
    tier: "Mid",
    why: "Format discipline + high clarity instructional posts.",
  },
];

const HIGHLIGHTS = [
  {
    title: "What's working",
    points: [
      "Authority + trust: pinned educational/certification content and provider credentials.",
      "Saveable education: injury explainers, myth-busting, and simple frameworks perform well.",
      "Event hooks: Olympics / major competition moments create natural spikes in relevance.",
      "Human elements: team intros and athlete wellbeing themes create community resonance.",
    ],
  },
  {
    title: "What's not working (or under-leveraged)",
    points: [
      "Too many promos without a tight outcome promise can reduce retention.",
      "Inconsistent CTA pattern: some posts don't guide viewers to save/share/comment.",
      "Limited series branding: educational topics aren't always packaged as recurring series.",
      "Not enough proof loops: more case studies, before/after metrics, testimonials in reels.",
    ],
  },
];

const ACTIONS = [
  {
    title: "Turn education into repeatable series",
    desc: "Pick 3-5 flagship series and run them weekly. Consistency drives follows.",
    bullets: [
      "Gymnast Injury of the Week (symptoms, why, do/avoid, when to seek help)",
      "Coach Cue Clinic (1 cue, 1 drill, 1 mistake to avoid)",
      "Return-to-Sport Roadmap (phases + objective checkpoints)",
    ],
  },
  {
    title: "Optimize every post for saves/shares",
    desc: "Saves are the growth lever for educational accounts.",
    bullets: [
      "Add Save this for later on-screen within first 1-2 seconds (reels).",
      "Use checklists and 3 signs / 3 drills templates.",
      "End with a single CTA: Comment WRIST and I'll send the drill list.",
    ],
  },
  {
    title: "Build a conversion ladder",
    desc: "Make it obvious what to do next: follow, freebie, email, course, consult.",
    bullets: [
      "Create 1 flagship freebie (e.g., Gymnast Wrist Pain Quick Guide).",
      "Link-in-bio: one primary button + one secondary (avoid clutter).",
      "Retarget via weekly recap carousel: top 5 posts + invite to freebie.",
    ],
  },
  {
    title: "Lean into social proof content",
    desc: "Trust grows fastest when outcomes are visible.",
    bullets: [
      "Mini-case studies (problem, plan, progress) with consent.",
      "Student wins and course testimonials in reel format.",
      "Behind-the-scenes: practicals, conference speaking, clinic day-in-the-life.",
    ],
  },
];

function formatFollowers(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1000) return `${Math.round(n / 100) / 10}K`;
  return String(n);
}

function getIcon(iconName: string) {
  switch (iconName) {
    case "sparkles":
      return <Sparkles className="h-5 w-5" />;
    case "file":
      return <FileText className="h-5 w-5" />;
    case "users":
      return <Users className="h-5 w-5" />;
    case "video":
      return <Video className="h-5 w-5" />;
    default:
      return <Sparkles className="h-5 w-5" />;
  }
}

function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-3xl",
        "bg-white/60 backdrop-blur-2xl",
        "border border-white/40",
        "shadow-[0_8px_40px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)",
      }}
    >
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function StatPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex items-center gap-3 rounded-2xl px-4 py-3",
        "bg-white/50 backdrop-blur-xl",
        "border border-white/40",
        "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      )}
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 text-violet-600">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-xs text-slate-500">{label}</div>
        <div className="text-sm font-semibold tracking-tight text-slate-800">
          {value}
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        {eyebrow && (
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-medium text-violet-600">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-xl font-semibold tracking-tight text-slate-800 md:text-2xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            {subtitle}
          </p>
        )}
      </div>
      {right && <div className="hidden md:block">{right}</div>}
    </div>
  );
}

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "secondary";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-200",
        variant === "secondary"
          ? "bg-violet-100 text-violet-700"
          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
      )}
    >
      {children}
    </span>
  );
}

function TagCloud({ items }: { items: typeof KEYWORDS }) {
  const groups = useMemo(() => {
    const m = new Map<string, string[]>();
    for (const it of items) {
      const arr = m.get(it.cat) ?? [];
      arr.push(it.k);
      m.set(it.cat, arr);
    }
    return Array.from(m.entries()).map(([cat, ks]) => ({ cat, ks }));
  }, [items]);

  return (
    <div className="space-y-4">
      {groups.map((g, idx) => (
        <motion.div
          key={g.cat}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          className="flex flex-wrap items-center gap-2"
        >
          <Badge variant="secondary">{g.cat}</Badge>
          {g.ks.map((k) => (
            <Badge key={k}>{k}</Badge>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

interface AccordionItemProps {
  title: string;
  desc: string;
  bullets: string[];
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({
  title,
  desc,
  bullets,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <motion.div
      layout
      className={cn(
        "rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-sm overflow-hidden",
        "transition-shadow duration-300",
        isOpen && "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      )}
    >
      <button
        onClick={onClick}
        className="flex w-full items-start justify-between gap-4 p-4 text-left transition-colors hover:bg-white/60"
      >
        <div>
          <div className="font-semibold tracking-tight text-slate-800">
            {title}
          </div>
          <div className="mt-1 text-sm text-slate-600">{desc}</div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1 text-slate-400"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-slate-200/60 px-4 pb-4 pt-3">
              <ul className="space-y-2 text-sm text-slate-600">
                {bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-2"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CompetitorTable({ data }: { data: typeof COMPETITORS }) {
  const [q, setQ] = useState("");
  const [tier, setTier] = useState("all");
  const [copied, setCopied] = useState(false);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return data
      .filter((d) => (tier === "all" ? true : d.tier.toLowerCase() === tier))
      .filter((d) => {
        if (!qq) return true;
        return (
          d.name.toLowerCase().includes(qq) ||
          d.handle.toLowerCase().includes(qq) ||
          d.niche.toLowerCase().includes(qq)
        );
      })
      .sort((a, b) => b.followers - a.followers);
  }, [data, q, tier]);

  const copyHandles = async () => {
    const text = filtered.map((d) => d.handle).join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search creators, handles, niches..."
              className={cn(
                "w-full rounded-xl border border-slate-200/60 bg-white/60 backdrop-blur-sm",
                "py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400",
                "focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100",
                "transition-all duration-200"
              )}
            />
          </div>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            className={cn(
              "hidden md:block rounded-xl border border-slate-200/60 bg-white/60 backdrop-blur-sm",
              "px-4 py-2.5 text-sm text-slate-700",
              "focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100",
              "transition-all duration-200"
            )}
          >
            <option value="all">All tiers</option>
            <option value="mega">Mega</option>
            <option value="macro">Macro</option>
            <option value="mid">Mid</option>
          </select>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={copyHandles}
          className={cn(
            "flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium",
            "bg-slate-800 text-white",
            "hover:bg-slate-700",
            "transition-colors duration-200"
          )}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" /> Copy handles
            </>
          )}
        </motion.button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white/40 backdrop-blur-sm">
        <div className="grid grid-cols-12 gap-0 border-b border-slate-200/60 bg-slate-50/50 px-4 py-3 text-xs font-medium text-slate-600">
          <div className="col-span-5">Creator</div>
          <div className="col-span-3 hidden md:block">Niche</div>
          <div className="col-span-3 md:col-span-2">Followers</div>
          <div className="col-span-4 md:col-span-2 text-right">Tier</div>
        </div>
        <div className="divide-y divide-slate-200/60">
          {filtered.map((d, idx) => (
            <motion.div
              key={d.handle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="grid grid-cols-12 items-start gap-0 px-4 py-4 text-sm hover:bg-white/60 transition-colors duration-200"
            >
              <div className="col-span-9 md:col-span-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold tracking-tight text-slate-800">
                      {d.name}
                    </div>
                    <div className="mt-1 text-xs text-violet-600">
                      {d.handle}
                    </div>
                    <div className="mt-2 text-xs text-slate-500 md:hidden">
                      {d.niche}
                    </div>
                    <div className="mt-2 text-xs text-slate-500">{d.why}</div>
                  </div>
                  <a
                    href={`https://www.instagram.com/${d.handle.replace("@", "")}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:flex mt-0.5 h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all duration-200"
                    title="Open on Instagram"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="col-span-3 hidden md:block">
                <div className="text-xs text-slate-600">{d.niche}</div>
              </div>
              <div className="col-span-2 md:col-span-2">
                <div className="font-semibold text-slate-800">
                  {formatFollowers(d.followers)}
                </div>
                <div className="text-xs text-slate-400">approx.</div>
              </div>
              <div className="col-span-1 md:col-span-2 text-right">
                <Badge>{d.tier}</Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-xs text-slate-500">
        Note: follower counts shown are approximate and may vary over time.
      </div>
    </div>
  );
}

function GradientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-zinc-50" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-200/40 to-indigo-200/40 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -left-48 top-24 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-200/30 to-teal-200/30 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -right-48 top-64 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-rose-200/30 to-pink-200/30 blur-3xl"
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300",
        active ? "text-slate-800" : "text-slate-500 hover:text-slate-700"
      )}
    >
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-white rounded-xl shadow-sm"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export function App() {
  const [tab, setTab] = useState("summary");
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <GradientBackdrop />

      <div className="relative mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs",
                "bg-white/60 backdrop-blur-xl border border-white/40",
                "text-violet-700 font-medium"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Client Research Delivery
            </div>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-800 md:text-4xl">
              {CLIENT.name}
            </h1>
            <p className="mt-1 text-slate-500">{CLIENT.handle}</p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              {CLIENT.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            <StatPill
              icon={<TrendingUp className="h-5 w-5" />}
              label="Focus"
              value="Gymnastics rehab + education"
            />
            <StatPill
              icon={<Video className="h-5 w-5" />}
              label="Content engine"
              value="Short-form reels + carousels"
            />
          </motion.div>
        </div>

        <div className="mt-10">
          <div
            className={cn(
              "inline-flex rounded-2xl p-1.5 gap-1",
              "bg-slate-200/50 backdrop-blur-xl border border-white/40"
            )}
          >
            <TabButton
              active={tab === "summary"}
              onClick={() => setTab("summary")}
            >
              Summary
            </TabButton>
            <TabButton
              active={tab === "keywords"}
              onClick={() => setTab("keywords")}
            >
              Keywords
            </TabButton>
            <TabButton
              active={tab === "playbook"}
              onClick={() => setTab("playbook")}
            >
              Playbook
            </TabButton>
            <TabButton
              active={tab === "competitors"}
              onClick={() => setTab("competitors")}
            >
              Competitors
            </TabButton>
          </div>

          <AnimatePresence mode="wait">
            {tab === "summary" && (
              <motion.div
                key="summary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6"
              >
                <div className="grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-7">
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-slate-800">
                          Core themes & expertise
                        </h3>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                          {THEMES.map((t, idx) => (
                            <motion.div
                              key={t.title}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                              className={cn(
                                "rounded-2xl p-4",
                                "bg-gradient-to-br from-slate-50/80 to-white/40",
                                "border border-slate-200/60",
                                "transition-shadow duration-300 hover:shadow-md"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 text-violet-600">
                                  {getIcon(t.icon)}
                                </div>
                                <div className="font-semibold tracking-tight text-slate-800">
                                  {t.title}
                                </div>
                              </div>
                              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                                {t.items.map((x) => (
                                  <li key={x} className="flex gap-2">
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                                    <span>{x}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>

                        <div
                          className={cn(
                            "mt-5 rounded-2xl p-4",
                            "bg-gradient-to-br from-violet-50/60 to-indigo-50/40",
                            "border border-violet-200/40"
                          )}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold text-slate-800">
                                Engagement drivers
                              </div>
                              <div className="mt-1 text-sm text-slate-600">
                                Educational content + event relevance + human
                                moments.
                              </div>
                            </div>
                            <Badge variant="secondary">High signal</Badge>
                          </div>
                          <div className="mt-4 grid gap-2 md:grid-cols-2">
                            <div className="rounded-xl bg-white/60 p-3 border border-white/40">
                              <div className="text-xs font-medium text-slate-500">
                                Best hooks
                              </div>
                              <div className="mt-1 text-sm text-slate-700">
                                "3 things...", "Stop doing this...", "If your
                                gymnast has...", "Red flags vs normal soreness"
                              </div>
                            </div>
                            <div className="rounded-xl bg-white/60 p-3 border border-white/40">
                              <div className="text-xs font-medium text-slate-500">
                                Best formats
                              </div>
                              <div className="mt-1 text-sm text-slate-700">
                                Reels (fast tips), Carousels (checklists), Team
                                credibility posts
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  <div className="md:col-span-5">
                    <GlassCard>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-slate-800">
                          Quick diagnosis
                        </h3>
                        <div className="mt-5 space-y-4">
                          {HIGHLIGHTS.map((h, idx) => (
                            <motion.div
                              key={h.title}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className={cn(
                                "rounded-2xl p-4",
                                "bg-gradient-to-br from-slate-50/80 to-white/40",
                                "border border-slate-200/60"
                              )}
                            >
                              <div className="text-sm font-semibold text-slate-800">
                                {h.title}
                              </div>
                              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                {h.points.map((p) => (
                                  <li key={p} className="flex gap-2">
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                                    <span>{p}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}

                          <div
                            className={cn(
                              "rounded-2xl p-4",
                              "bg-gradient-to-br from-emerald-50/60 to-teal-50/40",
                              "border border-emerald-200/40"
                            )}
                          >
                            <div className="text-sm font-semibold text-slate-800">
                              Next 7 days
                            </div>
                            <div className="mt-2 text-sm text-slate-600">
                              Launch one series, add "Save this" hooks, and
                              publish one mini-case study reel.
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <Badge>Series</Badge>
                              <Badge>Saves</Badge>
                              <Badge>Proof</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </motion.div>
            )}

            {tab === "keywords" && (
              <motion.div
                key="keywords"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6"
              >
                <GlassCard>
                  <div className="p-6 space-y-6">
                    <SectionHeader
                      eyebrow="Language patterns"
                      title="Keyword & topic map"
                      subtitle="Use these terms (and close variants) consistently in captions, on-screen text, and highlights to reinforce category ownership."
                    />

                    <TagCloud items={KEYWORDS} />

                    <div className="grid gap-4 md:grid-cols-2">
                      <div
                        className={cn(
                          "rounded-2xl p-4",
                          "bg-gradient-to-br from-slate-50/80 to-white/40",
                          "border border-slate-200/60"
                        )}
                      >
                        <div className="text-sm font-semibold text-slate-800">
                          Caption template
                        </div>
                        <ol className="mt-3 space-y-2 text-sm text-slate-600">
                          <li className="flex gap-2">
                            <span className="text-violet-500 font-medium">
                              1.
                            </span>
                            Hook: the athlete problem in 10 words.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-violet-500 font-medium">
                              2.
                            </span>
                            Why: one sentence biomechanics/physiology.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-violet-500 font-medium">
                              3.
                            </span>
                            Do: 1-3 actionable steps.
                          </li>
                          <li className="flex gap-2">
                            <span className="text-violet-500 font-medium">
                              4.
                            </span>
                            CTA: "Save/share" + keyword comment trigger.
                          </li>
                        </ol>
                      </div>

                      <div
                        className={cn(
                          "rounded-2xl p-4",
                          "bg-gradient-to-br from-slate-50/80 to-white/40",
                          "border border-slate-200/60"
                        )}
                      >
                        <div className="text-sm font-semibold text-slate-800">
                          Highlight buckets
                        </div>
                        <div className="mt-3 grid gap-2 text-sm text-slate-600">
                          {[
                            "Start Here",
                            "Wrist",
                            "Shoulder",
                            "Back/Spine",
                            "Ankle",
                            "Coach Tips",
                            "Parent Tips",
                            "Courses",
                          ].map((x) => (
                            <div
                              key={x}
                              className="flex items-center justify-between rounded-xl bg-white/60 border border-white/40 px-3 py-2"
                            >
                              <span className="text-slate-700">{x}</span>
                              <Badge>pin</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {tab === "playbook" && (
              <motion.div
                key="playbook"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6"
              >
                <GlassCard>
                  <div className="p-6 space-y-6">
                    <SectionHeader
                      eyebrow="Execution"
                      title="Actionable growth playbook"
                      subtitle="Structured, repeatable changes that increase saves, follows, and conversion to courses/consults."
                    />

                    <div className="space-y-3">
                      {ACTIONS.map((a, idx) => (
                        <AccordionItem
                          key={a.title}
                          title={a.title}
                          desc={a.desc}
                          bullets={a.bullets}
                          isOpen={openAccordion === idx}
                          onClick={() =>
                            setOpenAccordion(
                              openAccordion === idx ? null : idx
                            )
                          }
                        />
                      ))}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div
                        className={cn(
                          "rounded-2xl p-4",
                          "bg-gradient-to-br from-slate-50/80 to-white/40",
                          "border border-slate-200/60"
                        )}
                      >
                        <div className="text-sm font-semibold text-slate-800">
                          Weekly cadence (simple)
                        </div>
                        <div className="mt-3 grid gap-2 text-sm text-slate-600">
                          {[
                            "Mon: Injury myth-bust reel",
                            "Tue: Carousel checklist (saveable)",
                            "Wed: Case study / testimonial reel",
                            "Thu: Coach cue clinic",
                            "Fri: Course value clip + CTA",
                            "Sun: Weekly recap carousel",
                          ].map((x) => (
                            <div
                              key={x}
                              className="rounded-xl bg-white/60 border border-white/40 px-3 py-2 text-slate-700"
                            >
                              {x}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        className={cn(
                          "rounded-2xl p-4",
                          "bg-gradient-to-br from-slate-50/80 to-white/40",
                          "border border-slate-200/60"
                        )}
                      >
                        <div className="text-sm font-semibold text-slate-800">
                          Post checklist
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                          {[
                            "Hook in first 2 seconds",
                            "On-screen keywords (wrist/shoulder/back)",
                            "One clear takeaway",
                            "CTA for save/share/comment",
                            "Pin best 3 comments",
                            "Reply to comments within 2 hours",
                          ].map((x) => (
                            <li key={x} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {tab === "competitors" && (
              <motion.div
                key="competitors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6"
              >
                <GlassCard>
                  <div className="p-6 space-y-6">
                    <SectionHeader
                      eyebrow="Benchmarking"
                      title="Competitor & creator landscape"
                      subtitle="Use these accounts to benchmark formats, recurring series, and conversion paths."
                      right={
                        <div className="rounded-xl bg-violet-50/60 border border-violet-200/40 px-4 py-3 text-xs text-violet-700">
                          Tip: Copy handles and paste into a competitor tracker.
                        </div>
                      }
                    />

                    <CompetitorTable data={COMPETITORS} />
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200/60 pt-6 text-xs text-slate-500 md:flex-row md:items-center"
        >
          <div>
            Delivered as Instagram Specific targeted research. Let's work together! 
          </div>
          <div className="inline-flex items-center gap-2 text-violet-600">
            <Sparkles className="h-4 w-4" />
            Liquid-glass UI • Smooth gradients • Clean layout
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
