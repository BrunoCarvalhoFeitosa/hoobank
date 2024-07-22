"use client"
import CountUp from "react-countup"
import Image from "next/image"
import { DiscountSvg } from "@/public/svg/discount-svg"

export const HeroSection = () => {
    return (
        <section id="hero-section" className="mx-auto py-10">
            <div className="flex flex-col lg:flex-row justify-between items-center xl:items-start gap-10 w-full h-full">
                <div className="px-5 md:px-10 xl:-translate-y-14 flex-1 w-full">
                    <div className="w-fit xl:mt-20 mx-auto lg:mx-0 p-2 flex justify-center items-center gap-1 rounded-md bg-black-gradient">
                        <div>
                            <DiscountSvg width="40" height="40" />
                        </div>
                        <div className="flex-2 text-sm md:text-xl uppercase">
                            <strong>20%</strong> de desconto no <strong>primeiro mês</strong>.
                        </div>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-[56px] xl:leading-[66px] 2xl:lg:text-[128px] 2xl:leading-[120px] font-semibold text-center lg:text-left">
                            O método de pagamento da próxima <strong className="font-semibold text-gradient">geração</strong>.
                        </h1>
                        <p className="mt-6 xl:w-2/3 text-center lg:text-left text-gray-400">
                            Nossa equipe de especialistas utiliza uma metodologia 
                            para identificar o cartão de crédito com maior probabilidade 
                            de atender às suas necessidades. Examinamos taxas percentuais 
                            anuais e taxas anuais.
                        </p>
                    </div>
                </div>
                <div className="relative flex-1 w-full xl:-translate-y-16">
                    <div className="box-border w-full">
                        <Image
                            src="/images/image-hero.png"
                            alt=""
                            width={1200}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute z-[0] w-[20%] h-[35%] top-0 pink-gradient" />
                    <div className="absolute z-[1] w-[60%] h-[80%] rounded-full white-gradient bottom-40" />
                    <div className="absolute z-[0] w-[30%] h-[50%] right-20 bottom-20 blue-gradient" />
                </div>
            </div>
            <div className="lg:-translate-y-14 xl:-translate-y-16 mt-16 xl:mt-0 px-5 md:px-10 w-full flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex justify-between items-center gap-3">
                    <div className="text-xl lg:text-3xl xl:text-4xl font-bold">
                        <CountUp
                            start={0}
                            end={3800}
                            duration={4}
                            separator="."
                            enableScrollSpy
                        />+
                    </div>
                    <div className="text-sm lg:text-lg uppercase text-gradient">
                        Usuários ativos
                    </div>
                    <div className="hidden lg:block xl:ml-24 w-[1px] h-5 bg-gray-500" />
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="text-xl lg:text-3xl xl:text-4xl font-bold">
                        <CountUp
                            start={0}
                            end={435}
                            duration={4}
                            separator="."
                            enableScrollSpy
                        />+
                    </div>
                    <div className="text-sm lg:text-lg uppercase text-gradient">
                        Confiam em nós
                    </div>
                    <div className="hidden lg:block xl:ml-24 w-[1px] h-5 bg-gray-500" />
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-xl lg:text-3xl xl:text-4xl font-bold">
                        R$<CountUp
                            start={0}
                            end={230}
                            duration={4}
                            separator="."
                            enableScrollSpy
                        />+
                    </div>
                    <div className="text-sm lg:text-lg uppercase text-gradient">
                        Em transações
                    </div>
                </div>
            </div>
        </section>
    )
}