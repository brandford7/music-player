import Head from "next/head";
import Image from "next/image";
import { MusicCard, Sidebar, UserAvatar } from "../components";

export default function Home() {
  return (
    <div className="flex mx-auto max-w-6xl my-20 space-x-10 bg-gradient-to-r from-green-400 to-blue-500">
      <Head>
        <title>Music Player</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside>
        <Sidebar />
      </aside>
      <main className="flex flex-col flex-1 space-y-20">
        <UserAvatar name="Brand Jr" />
        <MusicCard title="Hello Hello" subs />
      </main>
    </div>
  );
}
