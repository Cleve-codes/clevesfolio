import { jost } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Cleve's | Personal Portofolio",
  description: "Cleve Momanyi's is a creative Frontend developer based in Nairobi, Kenya and passionate about building beautiful and functional websites",

};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
      </body>
    </html>
  );
}