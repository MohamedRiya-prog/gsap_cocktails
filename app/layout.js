export const metadata = {
  title: "Velvet Pour",
  description: "Discover expertly crafted cocktails, mixology tips, and exquisite drink recipes at Velvet Pour.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
