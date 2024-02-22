import { jost } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Cleve's Folio",
  description: "Cleve Momanyi's Personal Portofolio",

};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}