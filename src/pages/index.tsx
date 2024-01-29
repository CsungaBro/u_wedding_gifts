import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { api } from "~/utils/api";

const NavPanel = ({ children }) => {
  return (
    <div className="min-h-full rounded-l-3xl rounded-r-md border-8 border-zinc-800 p-3">
      {children}
    </div>
  );
};

const NavButton = ({ children }) => {
  return (
    <div className="h-15 items-center rounded-lg p-3 hover:border-2 hover:border-zinc-800 hover:bg-zinc-800">
      {children}
    </div>
  );
};

function SignInPanel(props: { isSignedIn: boolean }) {
  return (
    <div>
      {!props.isSignedIn && (
        <div>
          <SignInButton />
        </div>
      )}
      {!!props.isSignedIn && (
        <div>
          <SignOutButton />
        </div>
      )}
    </div>
  );
}

const Navigation = (props: { isSignedIn: boolean }) => {
  return (
    <NavPanel>
      <NavButton>
        <SignInPanel isSignedIn={props.isSignedIn} />
      </NavButton>
    </NavPanel>
  );
};

export default function Home() {
  const navigation = [
    { name: "Gifts", href: "#", current: true },
    { name: "Info's", href: "#", current: false },
    { name: "Accomodation", href: "#", current: false },
  ];
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
      <main>
        <div
          className="flex h-screen items-center justify-center bg-white bg-cover bg-center"
          style={{ backgroundImage: 'url("/background1.png")' }}
        >
          <div className="shadow-3xl border-t-1 border-l-1 via-white-80 h-[800px] w-[1640px] rounded-3xl border-l-lime-50 border-t-lime-50 bg-gradient-to-br from-white via-white/90 via-40% to-white/10 backdrop-blur-md"></div>
          <div
            className="bg-cover opacity-90"
            style={{ backgroundImage: 'url("/background.png")' }}
          ></div>
        </div>
      </main>
    </>
  );
}
