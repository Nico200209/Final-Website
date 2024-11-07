import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import LoadTransition from "@/components/LoadTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Nicolás García",
  description: "Technical Game Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/PersonalPhotoCircle.png" />
      <body className={jetBrainsMono.variable}>
        <Header />
        <LoadTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
