import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Header } from "@/app/_components/common/header"
import { Footer } from "@/app/_components/common/footer"
import "./globals.css"
import "react-toastify/dist/ReactToastify.css"

const font = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
    title: "Hoobank",
    description: "Hoobank, uma solução bancária para pagamentos e para todos.",
    icons: {
        icon: "/favicon/favicon.svg",
        shortcut: "/favicon/favicon.svg"
    },
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    }
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body className={font.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}