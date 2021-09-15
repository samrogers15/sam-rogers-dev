import Head from "next/head";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto mt-0 antialiased">
        <Navigation />
        <Navbar />
      </main>
    </div>
  );
}
