import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Portfolio",
  description: "Showcasing Nadeem's expertise in web development, specializing in Next.js, TypeScript, Tailwind CSS, and backend technologies. Discover projects that highlight a commitment to quality and innovation in modern web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased  dark:bg-darkbgcolor`}
      >
        {children}
      </body>
    </html>
  );
}
