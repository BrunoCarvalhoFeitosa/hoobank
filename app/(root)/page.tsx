import { HeroSection } from "@/app/(root)/_components/hero-section"
import { WhatWeDoSection } from "@/app/(root)/_components/what-we-do-section"
import { EasilyControlSection } from "@/app/(root)/_components/easily-control-section"
import { FindBetterCardSection } from "@/app/(root)/_components/find-better-card-section"
import { TestimonialsSection } from "@/app/(root)/_components/testimonials-section"
import { SponsorsSection } from "@/app/(root)/_components/sponsors-section"
import { ContactSection } from "@/app/(root)/_components/contact-section"

const HomePage = () => {
    return (
        <main className="w-full">
            <HeroSection />
            <WhatWeDoSection />
            <EasilyControlSection />
            <FindBetterCardSection />
            <TestimonialsSection />
            <SponsorsSection />
            <ContactSection />
        </main>
    )
}

export default HomePage