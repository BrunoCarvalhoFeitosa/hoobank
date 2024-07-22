"use client"
import { SendSvg } from "@/public/svg/send-svg"
import { ShieldSvg } from "@/public/svg/shield-svg"
import { StarSvg } from "@/public/svg/star-svg"

export const WhatWeDoSection = () => {
    return (
        <section id="about-section" className="mt-20 lg:mt-0 w-full px-5 md:px-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                    <div>
                        <h2 className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center lg:text-left">
                            Você faz o negócio, nós cuidamos do dinheiro.
                        </h2>
                        <p className="mt-4 mb-12 text-center lg:text-left text-gray-400">
                            Com o cartão de crédito certo, você pode melhorar 
                            sua vida financeira construindo crédito, ganhando 
                            recompensas e economizando dinheiro. Mas com centenas 
                            de cartões de crédito no mercado.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <button className="py-4 px-8 w-full min-h-16 bg-blue-gradient rounded-xl text-base md:text-lg font-bold text-black hover:opacity-75 transition-opacity duration-300">
                            Começar agora mesmo
                        </button>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-10">
                    <div className="rounded-xl">
                        <div className="flex items-center gap-4">
                            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-teal-950">
                                <StarSvg width="30" height="30" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">
                                    Recompensas
                                </h3>
                                <p className="mt-2">
                                    O melhor cartão de crédito oferece algumas 
                                    combinações tentadoras de promoções e preços.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl">
                        <div className="flex items-center gap-4">
                            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-teal-950">
                                <ShieldSvg width="30" height="30" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">
                                    100% Seguro
                                </h3>
                                <p className="mt-2">
                                    Tomamos medidas proativas para garantir que 
                                    suas informações e transações estejam seguras.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl">
                        <div className="flex items-center gap-4">
                            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-teal-950">
                                <SendSvg width="30" height="30" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">
                                    Transferência de saldo
                                </h3>
                                <p className="mt-2">
                                    Um cartão de crédito para transferência de saldo 
                                    pode economizar muito dinheiro em taxas de juros.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}