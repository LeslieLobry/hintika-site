// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Compagnie Hintika",
  description:
    "Site vitrine de la compagnie de théâtre Hintika : spectacles, agenda et contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
