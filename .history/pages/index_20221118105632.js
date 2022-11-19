import Head from "next/head";
import Image from "next/image";
import { Sidebar } from "../components";

export default function Home() {
  return (
    <div className="flex mx-auto ">
      <Head>
        <title>Music Player</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside>
        <Sidebar />
      </aside>
    </div>
  );
}
