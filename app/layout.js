import { Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({subsets: ["latin"]});
export const metadata = {
  title: "FinAI",
  description: "Your solution to finance tracking",
};

export default function RootLayout({ children }) {
  return (
  <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >{/*Header*/}
      <Header></Header>
      <main className="min-h-screen">{children}</main>
        {/*footer*/}
        <footer className="bg-grey-50 py-12">
          <div className="container mx-auto px-4 text-center text-black-600">
            <p>Made by Bidhan and the Crew</p>
          </div>
        </footer>
      </body>
    </html>
  </ClerkProvider>
  );
}
