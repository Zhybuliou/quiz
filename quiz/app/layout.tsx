import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";


export const metadata: Metadata = {
  title: "Quiz App",
  description: "Quiz game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="primary"
            enableSystem
            disableTransitionOnChange
          >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
