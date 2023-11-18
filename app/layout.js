import { Inter } from "next/font/google";
import "./ui/globals.css";
/* import { store } from "./redux/store";
import { Provider } from "react-redux"; */

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Next.js Admin Dashboard",
  description: "Next.js 14 Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <Provider store={store}>{children}</Provider> */}
      </body>
    </html>
  );
}
