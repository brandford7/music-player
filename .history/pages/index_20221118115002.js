import Head from "next/head";
import Image from "next/image";
import { Sidebar, UserAvatar } from "../components";

export default function Home() {
  return (
    <div className="flex items-center  mx-auto max-w-6xl my-20">
      <Head>
        <title>Music Player</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside>
        <Sidebar />
      </aside>
      <main className="flex flex-1">
        <UserAvatar name='Brand Jr'/>
      </main>
    </div>
  );
}
