export const metadata = {
  title: "Bulgaria Web Studio",
  description: "Минимален Next.js стартов сайт",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head />
      <body>{children}</body>
    </html>
  );
}
