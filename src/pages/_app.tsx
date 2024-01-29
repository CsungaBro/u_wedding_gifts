import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { inter } from "./ui/fonts";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} classname={`${inter.className} antialiased`} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
