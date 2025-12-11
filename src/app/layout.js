import { Inter } from "next/font/google";
import NoscriptTags from "./component/common/TrackingScripts/NoscriptTags";
import TrackingScripts from "./component/common/TrackingScripts/TrackingScripts";
import Header from "./component/Header/Header";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "Find Trusted Local Services and Professionals",
  description:
    "Connect with verified local experts through Localists.com. Find trusted professionals, compare quotes, and hire the best for your project—quick, easy, and free.",
  robots: {
    index: false,
    follow: false,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <TrackingScripts />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NoscriptTags />
        <StoreProvider>
          <div className="w-full">
            <div className="mx-auto w-full max-w-[1536px]">
              <Header />
              {children}
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
