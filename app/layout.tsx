import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AuthContext from "./context/AuthContext";
import ActiveStatus from "./components/ActiveStatus";
import ToasterContext from "./context/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messenger App",
  description:
    "Experience seamless real-time messaging with our feature-rich Messenger app, offering secure communication and a visually stunning interface.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
