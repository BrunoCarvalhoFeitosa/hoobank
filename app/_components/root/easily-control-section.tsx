"use client"
import { FaCheck, FaPaypal, FaTwitch } from "react-icons/fa"
import { FaApple, FaCaretDown, FaGooglePlay } from "react-icons/fa6"
import { SiNetflix, SiNubank } from "react-icons/si"

export const EasilyControlSection = () => {
    return (
        <section id="solutions-section" className="lg:mt-60 my-28 px-5 md:px-10 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="relative md:mt-40 lg:mt-0 order-2 lg:order-1 w-full flex-1">
                    <div className="relative">
                        <div className="p-4 md:absolute md:-top-40 lg:-top-40 right-0 md:right-4 lg:-right-8 xl:right-20 rounded-xl md:min-w-96 lg:min-w-64 bg-black-gradient">
                            <div className="flex justify-center items-center gap-4">
                                <div className="flex justify-center items-center w-16 h-16 rounded-full bg-black">
                                    <FaPaypal className="w-10 h-10 text-teal-600" />
                                </div>
                                <div>
                                    <strong className="text-2xl font-semibold">
                                        PayPal
                                    </strong>
                                    <p className="text-sm text-gray-400">
                                        Checkout
                                    </p>
                                </div>
                            </div>
                            <div className="my-6 flex justify-between items-center gap-4">
                                <div>
                                    <p className="text-gray-400">
                                        Total
                                    </p>
                                    <p className="text-lg font-semibold">
                                        R$3900,00
                                    </p>
                                </div>
                                <div>
                                    <div className="p-2 border border-blue-400 rounded-md text-sm text-blue-400">
                                        Mudar
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <button
                                    type="button"
                                    className="p-3 w-full rounded-lg bg-blue-gradient text-sm font-semibold text-black hover:opacity-75 transition-opacity duration-300"
                                >
                                    Receber pagamento
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 py-6 px-4 lg:px-4 w-full lg:w-fit rounded-xl bg-black-gradient">
                            <div className="mb-5">
                                <strong className="text-xl font-semibold">
                                    Última transação
                                </strong>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3 md:min-w-64">
                                        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-black">
                                            <FaTwitch className="w-8 h-8 text-teal-600" />
                                        </div>
                                        <div>
                                            <p className="mb-1 text-base font-bold leading-none">
                                                Twitch
                                            </p>
                                            <p className="text-xs leading-none text-gray-400">
                                                15 Days ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div>
                                            <FaCaretDown className="text-green-600 w-5 h-5" />
                                        </div>
                                        <div>
                                            +R$4679,93
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3 md:min-w-64">
                                        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-black">
                                            <SiNetflix className="w-8 h-8 text-teal-600" />
                                        </div>
                                        <div>
                                            <p className="mb-1 text-base font-bold leading-none">
                                                Netflix
                                            </p>
                                            <p className="text-xs leading-none text-gray-400">
                                                4 Days ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div>
                                            <FaCaretDown className="text-red-600 w-5 h-5" />
                                        </div>
                                        <div>
                                            -R$250,93
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3 md:min-w-64">
                                        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-black">
                                            <SiNubank className="w-8 h-8 text-teal-600" />
                                        </div>
                                        <div>
                                            <p className="mb-1 text-base font-bold leading-none">
                                                Nubank
                                            </p>
                                            <p className="text-xs leading-none text-gray-400">
                                                3 Days ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div>
                                            <FaCaretDown className="text-red-600 w-5 h-5" />
                                        </div>
                                        <div>
                                            -R$563,74
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-2/4 -translate-x-2/4 lg:left-auto lg:translate-x-0 -bottom-12 md:-bottom-10 lg:-bottom-6 lg:right-10 py-3 px-4 flex items-center gap-2 w-[105%] lg:w-fit rounded-xl bg-white">
                            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-green-500">
                                <FaCheck className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-black">
                                    Pagamento realizado com sucesso.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 flex-1">
                    <div className="mb-8">
                        <h4 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left">
                            Controle facilmente gastos e faturamentos.
                        </h4>
                        <p className="mt-4 text-center lg:text-start text-gray-400">
                            Tenha na palma da sua mão o controle das suas finanças.
                            Com o nosso app você tem um resumo rápido ou detalhado
                            dos valores que você recebe e transfere, bem como é 
                            notificado antecipadamente dos valores que ainda serão lançados.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4">
                        <button className="py-3 px-4 min-h-16 flex flex-1 lg:flex-none justify-center items-center gap-2 w-full lg:w-2/4 rounded-lg bg-blue-gradient font-semibold text-black hover:opacity-75 transition-opacity duration-300">
                            <div>
                                <FaApple className="w-10 h-10" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-xs leading-none">
                                    Baixe o app na
                                </span>
                                <span className="text-xl leading-none">
                                    App Store
                                </span>
                            </div>
                        </button>
                        <button className="py-3 px-4 min-h-16 flex flex-1 lg:flex-none justify-center items-center gap-2 w-full lg:w-2/4 rounded-lg bg-blue-gradient font-semibold text-black hover:opacity-75 transition-opacity duration-300">
                            <div>
                                <FaGooglePlay className="w-8 h-8" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-xs leading-none">
                                    Baixe o app no
                                </span>
                                <span className="text-xl leading-none">
                                    Google Play
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}