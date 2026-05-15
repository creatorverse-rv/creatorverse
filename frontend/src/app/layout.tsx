import "./globals.css";

export const metadata = {
  title: "Creatorverse",
  description: "Created with 💜 by creators, for creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}