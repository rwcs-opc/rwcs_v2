// app/layout.jsx
import "./globals.css";
import SITE from "../data/site";
import Navbar from "./components/Navbar";

export const metadata = {
  title: SITE.title,
  description: "Modern IT solutions — web, cloud, software & automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Inter font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className="bg-slate-50 text-slate-800 antialiased"
        style={{
          fontFamily:
            "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        }}
      >
        <div className="min-h-screen flex flex-col">

          {/* Navbar is now client component */}
          <Navbar />

          <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer
            className="mt-10 py-6 w-full max-w-6xl mx-auto px-4 
    bg-red-600 text-white 
    rounded-2xl shadow-lg 
    border border-red-700/40
    text-center text-sm font-medium"
          >
            © {new Date().getFullYear()} RWORLD COMPUTER SOLUTIONS (OPC) PRIVATE LIMITED
          </footer>

        </div>
      </body>
    </html>
  );
}
