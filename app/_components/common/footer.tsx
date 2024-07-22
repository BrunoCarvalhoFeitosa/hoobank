"use client"
import { HoobankLogoSvg } from "@/public/svg/hoobank-logo-svg"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebook, FaYoutube } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className="mt-24 pt-20 w-full bg-black-gradient">
            <div className="px-5 md:px-10">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-24">
                    <div className="w-full lg:w-2/6">
                        <div className="flex flex-col">
                            <HoobankLogoSvg width="220" height="60" />
                        </div>
                        <div className="mt-3">
                            <p className="text-gray-400">
                                Um novo caminho mais fácil, ágil e seguro para
                                realizar pagamentos e consultar saldo de qualquer
                                lugar no mundo.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-0 flex-1 justify-between">
                        <ul className="flex flex-col gap-2">
                            <li className="mb-3 text-lg font-semibold">
                                Links úteis
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Sobre nós
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Lançamentos
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Explorar
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Serviços
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Termos e uso
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <li className="mb-3 text-lg font-semibold">
                                Comunidade
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Centro de ajuda
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Lançamentos
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Sugestões
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Blog
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Newsletter
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <li className="mb-3 text-lg font-semibold">
                                Institucional
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Seja um parceiro
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Peça o seu cartão
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Peça a sua maquininha
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                Dúvidas
                            </li>
                            <li className="text-gray-400 hover:opacity-65 cursor-pointer">
                                FAQ
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-center border-t border-zinc-600">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400">
                            Copyright © 2024 Hoobank
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-teal-500 transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                            <FaFacebook className="w-7 h-7 text-black" />
                        </div>
                        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-teal-500 transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                            <AiFillInstagram className="w-8 h-8 text-black" />
                        </div>
                        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-teal-500 transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                            <FaYoutube className="w-8 h-8 text-black" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 w-full h-1 bg-blue-gradient" />
        </footer>
    )
}