import { HeroSection } from "@/app/_components/root/hero-section"
import { WhatWeDoSection } from "@/app/_components/root/what-we-do-section"
import { EasilyControlSection } from "@/app/_components/root/easily-control-section"
import { FindBetterCardSection } from "@/app/_components/root/find-better-card-section"
import { TestimonialsSection } from "@/app/_components/root/testimonials-section"
import { SponsorsSection } from "@/app/_components/root/sponsors-section"
import { ContactSection } from "@/app/_components/root/contact-section"

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