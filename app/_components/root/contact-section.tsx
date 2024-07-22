"use client"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer, toast } from "react-toastify"
import * as yup from "yup"
import emailjs from "@emailjs/browser"
import { getAddress } from "@/app/services/get-address"
import { cepFormatMask } from "@/app/services/formatters"
import { ImUser } from "react-icons/im"
import { MdEmail } from "react-icons/md"
import { PiMoneyWavyFill, PiOfficeChairFill } from "react-icons/pi"
import { RiSignpostFill } from "react-icons/ri"
import { SiHomeassistantcommunitystore } from "react-icons/si"

const schema = yup.object({
    user_completeName:
        yup
        .string()
        .matches(/^[A-Za-z ]*$/, "Please enter a valid name.")
        .min(10, "Insira um nome completo válido.")
        .max(70)
        .required("O campo nome completo é obrigatório."),
    user_email:
        yup
        .string()
        .email("Insira um endereço de e-mail válido.")
        .min(10, "Insira um endereço de e-mail válido.")
        .max(100, "Insira um endereço de e-mail válido.")
        .required("O campo e-mail é obrigatório."),
    user_office:
        yup
        .string()
        .max(50, "Insira sua profissão.")
        .required("O campo profissão é obrigatório."),
    user_monthlyIncome:
        yup
        .string()
        .required("O campo renda mensal é obrigatório."),
    user_addressPostalCode:
        yup
        .string()
        .max(9)
        .required("O campo código postal é obrigatório."),
    user_addressState:
        yup
        .string()
        .max(50)
        .required("O campo estado é obrigatório."),
    user_addressCity:
        yup
        .string()
        .max(50)
        .required("O campo cidade é obrigatório."),
    user_addressNeighborhood:
        yup
        .string()
        .max(50)
        .required("O campo bairro é obrigatório."),
    user_addressStreet:
        yup
        .string()
        .max(50)
        .required("O campo rua é obrigatório."),
    user_message:
        yup
        .string()
        .min(10, "O mínimo de caracteres é 10.")
        .max(500, "O máximo de caracteres é 500.")
        .required("O campo mensagem é obrigatório.")
})

export const ContactSection = () => {
    const formRef = useRef(null)
    const serviceId = process.env.NEXT_APP_EMAILJS_SERVICE_ID!
    const templateId = process.env.NEXT_APP_EMAILJS_TEMPLATE_ID!
    const apiKey = process.env.NEXT_APP_EMAILJS_API_KEY!

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handlePostalCodeAutocomplete = async (ev: any) => {
        cepFormatMask(ev)
        const postalCode = ev.target.value.replace(/\D/g, "")

        if (postalCode.length <= 7) {
            setValue("user_addressState", "")
            setValue("user_addressCity", "")
            setValue("user_addressNeighborhood", "")
            setValue("user_addressStreet", "")
        }
        else {
            const search = await getAddress(postalCode)

            if (search) {
                setValue("user_addressState", search.uf)
                setValue("user_addressCity", search.localidade)
                setValue("user_addressNeighborhood", search.bairro)
                setValue("user_addressStreet", search.logradouro)
            }
        }
    }

    const onSubmit = async () => {
        try {
            if (formRef.current) {
                await emailjs.sendForm(serviceId, templateId, formRef.current, apiKey)
    
                toast.success("Mensagem enviada com sucesso.", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        } catch (error) {
            console.log("error", error)
            toast.error("Ocorreu um erro ao enviar sua mensagem, tente novamente.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }

    return (
        <section id="contact-section" className="px-5 md:px-10 w-full">
            <div className="p-5 lg:p-14 rounded-xl bg-black-gradient">
                <div className="mb-14">
                    <h5 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left">
                        Experimente nossos serviços agora!
                    </h5>
                    <p className="mt-4 text-center lg:text-start text-gray-400">
                        Tudo o que você precisa para aceitar pagamentos com cartão 
                        e expandir seus negócios em qualquer lugar do planeta.
                    </p>
                </div>
                <form
                    ref={formRef}
                    className="w-full flex flex-col gap-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-3">
                        <div className="relative flex-1 w-full">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <ImUser className="w-7 h-7" />
                            </div>
                            <div className="w-full">
                                <input
                                    {...register("user_completeName")}
                                    type="text"
                                    className="pl-14 pr-2 w-full h-12 bg-white/10 rounded-md border-none outline-none"
                                    placeholder="Nome completo"
                                />
                            </div>
                            {errors.user_completeName && (
                                <p className="absolute -top-6 text-sm font-semibold text-teal-400">
                                    {errors.user_completeName.message}
                                </p>
                            )}
                        </div>
                        <div className="relative flex-1 w-full">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <MdEmail className="w-7 h-7" />
                            </div>
                            <div className="w-full">
                                <input
                                    {...register("user_email")}
                                    type="email"
                                    className="pl-14 pr-2 w-full h-12 bg-white/10 rounded-md border-none outline-none"
                                    placeholder="E-mail"
                                    autoComplete="off"
                                />
                            </div>
                            {errors.user_email && (
                                <p className="absolute -top-6 text-sm font-semibold text-teal-400">
                                    {errors.user_email.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-3">
                        <div className="relative flex-1 w-full">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <PiOfficeChairFill className="w-7 h-7" />
                            </div>
                            <div className="w-full">
                                <input
                                    {...register("user_office")}
                                    type="text"
                                    className="pl-14 pr-2 w-full h-12 bg-white/10 rounded-md border-none outline-none"
                                    placeholder="Profissão"
                                />
                            </div>
                            {errors.user_office && (
                                <p className="absolute -top-6 text-sm font-semibold text-teal-400">
                                    {errors.user_office.message}
                                </p>
                            )}
                        </div>
                        <div className="relative flex-1 w-full">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <PiMoneyWavyFill className="w-7 h-7" />
                            </div>
                            <div className="w-full">
                                <input
                                    {...register("user_monthlyIncome")}
                                    type="number"
                                    className="pl-14 pr-2 w-full h-12 bg-white/10 rounded-md border-none outline-none"
                                    placeholder="Renda mensal aproximada"
                                    autoComplete="off"
                                />
                            </div>
                            {errors.user_monthlyIncome && (
                                <p className="absolute -top-6 text-sm font-semibold text-teal-400">
                                    {errors.user_monthlyIncome.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-3">
                        <div className="relative flex-1 w-full">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <RiSignpostFill className="w-7 h-7" />
                            </div>
                            <div className="w-full">
                                <input
                                    {...register("user_addressPostalCode")}
                                    type="text"
                                    className="pl-14 pr-2 w-full h-12 bg-white/10 rounded-md border-none outline-none"
                                    placeholder="Código postal"
                                    onKeyUp={handlePostalCodeAutocomplete}
                                />
                            </div>
                            {errors.user_addressPostalCode && (
                                <p className="absolute -top-6 text-sm font-semibold text-teal-400">
                                    {errors.user_addressPostalCode.message}
                                </p>
                            )}
                        </div>
                        <div className="relative flex-1 w-full">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <SiHomeassistantcommunitystore className="w-6 h-6 text-gray-400 cursor-not-allowed" />
                            </div>
                            <div className="w-full">
                                <input
                                    {...register("user_addressState")}
                                    disabled
                                    type="text"
                                    className="pl-14 pr-2 w-full h-12 bg-white/10 rounded-md border-none outline-none text-gray-400 disabled:cursor-not-allowed"
                                    placeholder="Estado"
                                    autoComplete="off"
                                />
                            </div>
                            {errors.user_addressState && (
                                <p className="absolute -top-6 text-sm font-semibold text-teal-400">
                                    {errors.user_addressState.message}
                                </p>
                            )}
                        </div>
                        <div className="relative flex-1 w-full">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <SiHomeassistantcommunitystore className="w-6 h-6 text-gray-400 cursor-not-allowed" />
                            </div>
                            <div className="w-full">
                                <input
                                    {...register("user_addressCity")}
                                    disabled
                                    type="text"
                                    className="pl-14 pr-2 w-full h-12 bg-white/10 rounded-md border-none outline-none text-gray-400 disabled:cursor-not-allowed"
                                    placeholder="Cidade"
                                    autoComplete="off"
                                />
                            </div>
                            {errors.user_addressCity && (
                                <p className="absolute -top-6 text-sm font-semibold text-teal-400">
                                    {errors.user_addressCity.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-3">
                        <div className="relative flex-1 w-full">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <SiHomeassistantcommunitystore className="w-6 h-6 text-gray-400 cursor-not-allowed" />
                            </div>
                            <div className="w-full">
                                <input
                                    {...register("user_addressNeighborhood")}
                                    disabled
                                    type="text"
                                    className="pl-14 pr-2 w-full h-12 bg-white/10 rounded-md border-none outline-none text-gray-400 disabled:cursor-not-allowed"
                                    placeholder="Bairro"
                                />
                            </div>
                            {errors.user_addressNeighborhood && (
                                <p className="absolute -top-6 text-sm font-semibold text-teal-400">
                                    {errors.user_addressNeighborhood.message}
                                </p>
                            )}
                        </div>
                        <div className="relative flex-1 w-full">
                            <div className="absolute left-3 top-2/4 -translate-y-2/4">
                                <SiHomeassistantcommunitystore className="w-6 h-6 text-gray-400 cursor-not-allowed" />
                            </div>
                            <div className="w-full">
                                <input
                                    {...register("user_addressStreet")}
                                    disabled
                                    type="text"
                                    className="pl-14 pr-2 w-full h-12 bg-white/10 rounded-md border-none outline-none text-gray-400 disabled:cursor-not-allowed"
                                    placeholder="Rua"
                                    autoComplete="off"
                                />
                            </div>
                            {errors.user_addressStreet && (
                                <p className="absolute -top-6 text-sm font-semibold text-teal-400">
                                    {errors.user_addressStreet.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="relative w-full">
                        <textarea
                            {...register("user_message")}
                            className="p-2 w-full h-24 bg-white/10 rounded-md border-none outline-none resize-none"
                            placeholder="Escreva uma mensagem..."   
                        />
                        {errors.user_message && (
                            <p className="absolute -top-6 text-sm font-semibold text-teal-400">
                                {errors.user_message.message}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-end w-full">
                        <button
                            type="submit"
                            className="w-full lg:w-2/4 h-14 rounded-md bg-blue-gradient text-base md:text-lg font-bold text-black hover:opacity-75 transition-opacity duration-300"
                        >
                            Enviar minha mensagem agora
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </section>
    )
}