import type { Metadata } from "next";
import "../src/index.css";

export const metadata: Metadata = { title: "Pineapple School | Lagos, Nigeria", description: "A welcoming school community committed to academic excellence, personal growth and opportunity for every learner.", applicationName: "Pineapple School" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
