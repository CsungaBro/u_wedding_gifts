import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  if (!userLoaded) return <div />;

  return (
    <>
      <Head>
        <title>Viki&Csenger Wedding</title>
        <meta name="description" content="Viki and Csenger Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="text-slate-400">Workin</div>
        {!isSignedIn && (
          <div>
            <SignInButton />
          </div>
        )}
        {!!isSignedIn && (
          <div>
            <SignOutButton />
          </div>
        )}
      </main>
    </>
  );
}
