"use client"
import Image from "next/image"
import { QuotesSvg } from "@/public/svg/quotes-svg"

export const TestimonialsSection = () => {
    return (
        <section className="px-5 md:px-10 w-full">
            <div className="flex flex-col lg:flex-row items-center lg:gap-12">
                <div className="w-full lg:w-2/3">
                    <h4 className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center lg:text-left">
                        O que estão dizendo sobre nós
                    </h4>
                </div>
                <div className="mt-4 lg:mt-0 w-full">
                    <p className="text-center lg:text-start text-gray-400">
                       Aceite pagamentos de qualquer cartão e
                       expanda seus negócios de qualquer lugar.
                    </p>
                </div>
            </div>
            <div className="mt-10 flex flex-col lg:flex-row items-center gap-8">
                <div className="py-8 px-5 rounded-lg bg-black-gradient">
                    <div className="mb-12">
                        <QuotesSvg width="40" height="40" />
                    </div>
                    <div className="mb-12">
                        <p>
                            O dinheiro é apenas uma ferramenta. Ele o levará 
                            aonde desejar, mas não o substituirá como motorista.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            <Image
                                src="/images/image-people-02.png"
                                width={60}
                                height={60}
                                alt="Daniel Benine"
                                className="grayscale hover:scale-110 transition-transform duration-200 cursor-zoom-in"
                            />
                        </div>
                        <div>
                            <h6 className="text-xl">
                                Daniel Benine
                            </h6>
                            <p className="text-gray-400">
                                Fundador & Líder
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-8 px-5 rounded-lg bg-black-gradient">
                    <div className="mb-12">
                        <QuotesSvg width="40" height="40" />
                    </div>
                    <div className="mb-12">
                        <p>
                            O dinheiro é apenas uma ferramenta. Ele o levará 
                            aonde desejar, mas não o substituirá como motorista.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            <Image
                                src="/images/image-people-01.png"
                                width={60}
                                height={60}
                                alt="Ana Beatriz"
                                className="grayscale hover:scale-110 transition-transform duration-200 cursor-zoom-in"
                            />
                        </div>
                        <div>
                            <h6 className="text-xl">
                                Ana Beatriz
                            </h6>
                            <p className="text-gray-400">
                                Fundadora & Líder
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-8 px-5 rounded-lg bg-black-gradient">
                    <div className="mb-12">
                        <QuotesSvg width="40" height="40" />
                    </div>
                    <div className="mb-12">
                        <p>
                            O dinheiro é apenas uma ferramenta. Ele o levará 
                            aonde desejar, mas não o substituirá como motorista.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            <Image
                                src="/images/image-people-03.png"
                                width={60}
                                height={60}
                                alt="Denis Gallagher"
                                className="grayscale hover:scale-110 transition-transform duration-200 cursor-zoom-in"
                            />
                        </div>
                        <div>
                            <h6 className="text-xl">
                                Denis Gallagher
                            </h6>
                            <p className="text-gray-400">
                                Fundador & Líder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}