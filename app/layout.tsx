import "./globals.css";

export const metadata = {
  title: "TBD Studio",
  description: "Website for TBD Studio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
