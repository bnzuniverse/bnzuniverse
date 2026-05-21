"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play, Search, Bell, User, Crown, Radio, Clapperboard, Gamepad2, Shirt, Mic2, Film, BarChart3, Wallet, TrendingUp, Eye, Heart, MessageCircle, Share2, Sparkles, Zap, Globe2, DollarSign, Clock, Upload, Settings, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const videos = [
  { title: "Boss Moves — From Downfall to Divine Elevation", type: "BNZ Originals™", views: "1.8M", revenue: "$4,820", pulse: 98, tag: "Exclusive Premiere", time: "0:28", accent: "from-red-600/40 to-yellow-500/20" },
  { title: "Toronto Rooftop Victory Film", type: "Music Film", views: "912K", revenue: "$2,114", pulse: 91, tag: "Trending Global", time: "2:58", accent: "from-yellow-500/30 to-red-700/20" },
  { title: "BNZ Live: Behind The Visuals", type: "BNZ Live™", views: "388K", revenue: "$876", pulse: 85, tag: "Livestream Replay", time: "41:22", accent: "from-red-900/40 to-black" },
  { title: "Fashion Drop: Black Gold Era", type: "Fashion", views: "211K", revenue: "$529", pulse: 79, tag: "Merch Spotlight", time: "6:18", accent: "from-zinc-900 to-yellow-700/20" },
];

const categories = [
  { icon: Clapperboard, label: "Music Videos" },
  { icon: Radio, label: "BNZ Live™" },
  { icon: Crown, label: "BNZ Originals™" },
  { icon: Mic2, label: "Podcasts" },
  { icon: Film, label: "Films" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Shirt, label: "Fashion + Merch" },
  { icon: Globe2, label: "Global Premieres" },
];

const algorithmSignals = [
  ["Watch Time", "42%", "+18%"],
  ["Replay Rate", "31%", "+11%"],
  ["Likes", "128K", "+24%"],
  ["Comments", "19K", "+9%"],
  ["Shares", "44K", "+37%"],
];

type Video = {
  title: string;
  type: string;
  views: string;
  revenue: string;
  pulse: number;
  tag: string;
  time: string;
  accent: string;
};

function VideoCard({ video, index }: { video: Video; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
    >
      <Card className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-2xl shadow-red-950/20">
       <div className="relative overflow-hidden rounded-t-2xl aspect-video">
  <iframe
    src="https://customer-b3btgo3u087fuuxk.cloudflarestream.com/e2cefc05d2d6fa6dbf21a319c85d9035/iframe?poster=https%3A%2F%2Fcustomer-b3btgo3u087fuuxk.cloudflarestream.com%2Fe2cefc05d2d6fa6dbf21a319c85d9035%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
    loading="lazy"
    className="absolute inset-0 h-full w-full"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
    allowFullScreen
  ></iframe>
</div>
        <CardContent className="space-y-4 p-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              {video.type}
            </div>
            <h3 className="mt-1 text-lg font-bold text-white">
              {video.title}
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="rounded-xl bg-white/5 p-2 text-zinc-300">
              <Eye className="mb-1 h-4 w-4 text-yellow-300" />
              {video.views}
            </div>

            <div className="rounded-xl bg-white/5 p-2 text-zinc-300">
              <Wallet className="mb-1 h-4 w-4 text-yellow-300" />
              {video.revenue}
            </div>

            <div className="rounded-xl bg-white/5 p-2 text-zinc-300">
              <Zap className="mb-1 h-4 w-4 text-red-400" />
              Pulse {video.pulse}
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-400">
            <Heart className="h-4 w-4" />
            <MessageCircle className="h-4 w-4" />
            <Share2 className="h-4 w-4" />
            <span className="ml-auto text-xs text-yellow-200">
              Autoplay ready
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function BNZUniversePrototype() {
  const [active, setActive] = useState("Home");
  const nav = ["Home", "Trending", "BNZ Originals™", "BNZ Live™", "Monetization", "Analytics"];
  const totalRevenue = useMemo(() => "$8,339", []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600/60">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_10%,rgba(201,31,31,.35),transparent_28%),radial-gradient(circle_at_20%_0%,rgba(245,178,54,.18),transparent_24%),linear-gradient(180deg,#080808,#0a0a0a_45%,#000)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:54px_54px]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-red-500/40 bg-gradient-to-br from-red-700 to-black shadow-lg shadow-red-800/30">
              <Crown className="h-6 w-6 text-yellow-300" />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight"><span className="text-white">BNZ</span><span className="text-red-500">UNIVERSE</span><span className="text-yellow-300">™</span></div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-yellow-200/80">Powered by BNZ Pulse™ Algorithm</div>
            </div>
          </div>

          <nav className="ml-6 hidden flex-1 items-center gap-2 lg:flex">
            {nav.map((item) => (
              <button key={item} onClick={() => setActive(item)} className={`rounded-full px-4 py-2 text-sm transition ${active === item ? "bg-red-700 text-white shadow-lg shadow-red-900/40" : "text-zinc-400 hover:bg-white/5 hover:text-white"}`}>{item}</button>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 md:flex">
            <Search className="h-4 w-4 text-zinc-400" />
            <span className="text-sm text-zinc-500">Search videos, films, lives, merch...</span>
          </div>
          <Button className="rounded-full bg-yellow-400 text-black hover:bg-yellow-300"><Upload className="mr-2 h-4 w-4" />Upload</Button>
          <Bell className="h-5 w-5 text-zinc-300" />
          <User className="h-5 w-5 text-zinc-300" />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <section className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-red-950/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,210,91,.28),transparent_24%),linear-gradient(115deg,rgba(131,14,14,.75),rgba(0,0,0,.95)_48%,rgba(246,183,60,.16))]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="relative min-h-[520px] p-8 md:p-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-black/45 px-4 py-2 text-sm font-semibold text-yellow-200 backdrop-blur">
                <Sparkles className="h-4 w-4" /> Global cinematic media platform
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-none tracking-tight md:text-7xl">
                Own your views. <span className="text-red-500">Control</span> your media. Get paid through the <span className="text-yellow-300">BNZ Pulse™</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                BNZUNIVERSE™ is built as a premium streaming home for music videos, livestreams, films, podcasts, gaming, fashion, merch drops, exclusive premieres, and BNZ Originals™.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-full bg-red-700 px-7 text-white hover:bg-red-600"><Play className="mr-2 h-5 w-5 fill-white" />Watch featured premiere</Button>
                <Button size="lg" variant="outline" className="rounded-full border-yellow-300/40 bg-black/40 px-7 text-yellow-200 hover:bg-yellow-300 hover:text-black">View payout dashboard</Button>
              </div>
              <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
                {[["Total Views", "3.31M"], ["Ad Revenue", totalRevenue], ["Subscribers", "84.2K"], ["Pulse Score", "98/100"]].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur">
                    <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">{k}</div>
                    <div className="mt-2 text-2xl font-black text-white">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <Card className="rounded-[2rem] border border-yellow-300/20 bg-zinc-950/90 shadow-xl shadow-yellow-950/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-yellow-300">Monetization Engine</div>
                    <h2 className="mt-2 text-2xl font-black text-white">User watches → Ad plays → You get paid</h2>
                  </div>
                  <DollarSign className="h-9 w-9 text-yellow-300" />
                </div>
                <div className="mt-6 space-y-3">
                  {["Pre-roll video ads", "Banner ads", "Premium subscriptions", "Artist placements", "Sponsor campaigns"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 text-zinc-300"><div className="h-2 w-2 rounded-full bg-red-500" />{item}<ChevronRight className="ml-auto h-4 w-4 text-yellow-300" /></div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border border-red-500/20 bg-zinc-950/90">
              <CardContent className="p-6">
                <div className="flex items-center gap-3"><Zap className="h-7 w-7 text-red-500" /><h2 className="text-2xl font-black text-white">BNZ Pulse™ Signals</h2></div>
                <div className="mt-5 space-y-3">
                  {algorithmSignals.map(([name, value, change]) => (
                    <div key={name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-2xl bg-white/5 p-3 text-sm">
                      <span className="text-zinc-300">{name}</span><span className="font-bold text-white">{value}</span><span className="rounded-full bg-red-700/40 px-2 py-1 text-xs text-red-100">{change}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-8 grid gap-3 md:grid-cols-4 lg:grid-cols-8">
          {categories.map(({ icon: Icon, label }) => (
            <button key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:border-red-500/50 hover:bg-red-950/20">
              <Icon className="mb-3 h-6 w-6 text-yellow-300" />
              <div className="text-sm font-bold text-white">{label}</div>
            </button>
          ))}
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-red-400">Featured + Trending</div>
              <h2 className="mt-2 text-3xl font-black">Powered by BNZ Pulse™ Recommendations</h2>
            </div>
            <Button variant="outline" className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10">See all</Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {videos.map((video, index) => <VideoCard key={video.title} video={video} index={index} />)}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="rounded-[2rem] border border-white/10 bg-zinc-950/90 lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div><div className="text-xs uppercase tracking-[0.25em] text-yellow-300">Creator Earnings</div><h2 className="mt-2 text-2xl font-black text-white">Payout Dashboard</h2></div>
                <BarChart3 className="h-8 w-8 text-red-500" />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[["Ad RPM", "$3.42"], ["Premium Revenue", "$1,260"], ["Sponsor Revenue", "$2,900"]].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-5"><div className="text-sm text-zinc-400">{k}</div><div className="mt-2 text-3xl font-black text-yellow-300">{v}</div></div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-950/20 p-4 text-sm leading-7 text-zinc-300">
                Revenue logic: every eligible view can trigger a pre-roll or banner impression. BNZUNIVERSE™ tracks views, ad plays, watch time, engagement, replay rate, shares, and sponsor placements so your media page can calculate creator earnings.
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-white/10 bg-zinc-950/90">
            <CardContent className="p-6">
              <div className="flex items-center gap-3"><Settings className="h-7 w-7 text-yellow-300" /><h2 className="text-2xl font-black text-white">Platform Stack</h2></div>
              <div className="mt-5 space-y-3 text-sm text-zinc-300">
                {["bnzuniverse.com domain", "Video hosting + encoding", "Ad server integration", "Subscriber billing", "Analytics database", "Creator payout ledger"].map((x) => <div key={x} className="rounded-xl bg-white/5 p-3">{x}</div>)}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

