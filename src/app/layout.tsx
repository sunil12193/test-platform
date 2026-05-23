import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}

          <Toaster position="top-right" reverseOrder={false} />
        </QueryProvider>
      </body>
    </html>
  );
}
