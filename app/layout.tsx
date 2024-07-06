import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: {
    default:"Next.js Tutorial", //when there is no metadata present in the page or layout.tsx file this will displaye as title
    template:"%s | tutorial" // when a page or layout.tsx file contains a metadat object then %s- describe that title or particular page or t=layout.tsx file and then add | tutorial in the title
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
