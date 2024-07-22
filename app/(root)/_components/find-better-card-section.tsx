"use client"
import Image from "next/image"
import { BiQrScan } from "react-icons/bi"
import { FaAmazonPay, FaApplePay, FaCaretDown, FaGooglePay, FaPaypal } from "react-icons/fa"
import { SiNubank } from "react-icons/si"

export const FindBetterCardSection = () => {
    return (
        <section className="lg:mt-48 my-28 mb-16 px-5 md:px-10 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                    <div className="mb-8">
                        <h4 className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center lg:text-left">
                            Encontre ofertas de maneira fácil e ágil.
                        </h4>
                        <p className="mt-4 text-center lg:text-start text-gray-400">
                            Tendo o seu cartão, você consegue fácilmente garimpar produtos
                            que possuem descontos especiais de acordo com a bandeira de pagamento.
                            Além de te trazer mais economia, você acumula mais score para futuras
                            compras com o cartão de crédito.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <button className="py-4 px-8 w-full min-h-16 bg-blue-gradient rounded-xl text-base md:text-lg font-bold text-black hover:opacity-75 transition-opacity duration-300">
                            Começar agora mesmo
                        </button>
                    </div>
                </div>
                <div className="flex justify-center flex-1">
                    <div className="relative md:w-[560px] md:h-[560px] lg:w-[450px] lg:h-[450px] rounded-full z-10">
                        <div className="hidden md:block absolute top-0 left-0 w-full h-full rounded-full border-[16px] border-teal-800" />
                        <div className="hidden md:block absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-2/3 h-2/3 rounded-full border-[10px] border-teal-800" />
                        <div className="hidden md:block absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-2/5 h-2/5 rounded-full border-[4px] border-teal-800" />
                        <div className="md:absolute md:top-32 lg:top-14 md:-left-5 lg:-left-12 p-3 flex flex-col items-center w-full md:w-56 rounded-xl bg-black-gradient text-center">
                            <div className="flex justify-center items-center w-12 h-12 rounded-lg bg-black">
                                <BiQrScan className="w-7 h-7 text-teal-400" />
                            </div>
                            <div className="mt-5">
                                <strong className="text-sm">
                                    Escaneie cartões de crédito
                                </strong>
                                <p className="text-xs text-gray-400">
                                    Escaneie seu cartão de crédito em até 4 minutos.
                                </p>
                            </div>
                        </div>
                        <div className="md:absolute top-10 right-0 md:-right-5 lg:-top-12 lg:-right-6 xl:-right-20 my-4 md:my-0 p-4 flex flex-col items-center w-full md:w-72 rounded-xl bg-black-gradient text-center">
                            <div className="w-full flex justify-between items-center mt-5">
                                <div>
                                    <strong className="text-sm">
                                        Análise online
                                    </strong>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="text-xs">
                                        1 mês
                                    </div>
                                    <div>
                                        <FaCaretDown className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                            <div className="my-8 w-full">
                                <div className="w-full flex justify-between items-center gap-16">
                                    <div className="flex flex-col items-start">
                                        <p className="text-sm text-teal-500">
                                            R$1M
                                        </p>
                                        <p className="text-xs text-teal-500 opacity-45">
                                            Renda
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-sm text-teal-500">
                                            R$222K
                                        </p>
                                        <p className="text-xs text-teal-500 opacity-45">
                                            Despesas
                                        </p>
                                    </div>
                                </div>
                                <div className="relative w-full h-32">
                                    <Image
                                        fill
                                        src="/images/image-graph.png"
                                        alt="Gráfico"
                                        className="w-full h-full object-fill"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <div className="p-1 rounded-md text-xs font-semibold text-gray-400 hover:text-black hover:bg-teal-500 cursor-pointer">
                                    Jan
                                </div>
                                <div className="p-1 rounded-md text-xs font-semibold text-gray-400 hover:text-black hover:bg-teal-500 cursor-pointer">
                                    Fev
                                </div>
                                <div className="p-1 rounded-md text-xs font-semibold text-gray-400 hover:text-black hover:bg-teal-500 cursor-pointer">
                                    Mar
                                </div>
                                <div className="p-1 rounded-md text-xs font-semibold text-gray-400 hover:text-black hover:bg-teal-500 cursor-pointer">
                                    Abr
                                </div>
                                <div className="p-1 rounded-md text-xs font-semibold text-gray-400 hover:text-black hover:bg-teal-500 cursor-pointer">
                                    Mai
                                </div>
                                <div className="p-1 rounded-md bg-teal-500 text-xs font-semibold text-black cursor-pointer">
                                    Jun
                                </div>
                            </div>
                        </div>
                        <div className="md:absolute md:bottom-0 md:left-2/4 md:-translate-x-2/4 p-4 rounded-xl w-full md:w-3/4 bg-black-gradient">
                            <div className="mb-6">
                                <strong className="text-sm">
                                    Métodos de pagamento
                                </strong>
                                <p className="text-xs text-gray-400">
                                    Tenha mais opções e economize muito mais.
                                </p>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <div className="flex justify-center items-center w-12 h-12 rounded-md bg-black">
                                    <SiNubank className="w-7 h-7 text-teal-600" />
                                </div>
                                <div className="flex justify-center items-center w-12 h-12 rounded-md bg-black">
                                    <FaPaypal className="w-7 h-7 text-teal-600" />
                                </div>
                                <div className="flex justify-center items-center w-12 h-12 rounded-md bg-black">
                                    <FaAmazonPay className="w-9 h-9 text-teal-600" />
                                </div>
                                <div className="flex justify-center items-center w-12 h-12 rounded-md bg-black">
                                    <FaApplePay className="w-10 h-10 text-teal-600" />
                                </div>
                                <div className="flex justify-center items-center w-12 h-12 rounded-md bg-black">
                                    <FaGooglePay className="w-10 h-10 text-teal-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}