"use client"
import Image from "next/image"

export const SponsorsSection = () => {
    return (
        <div className="my-16 px-5 md:px-10 grid grid-cols-2 lg:grid-cols-4 place-content-center place-items-center gap-10 w-full">
            <Image
                src="/images/image-brand-airbnb.png"
                width={160}
                height={30}
                alt="Airbnb"
            />
            <Image
                src="/images/image-brand-binance.png"
                width={200}
                height={50}
                alt="Binance"
            />
            <Image
                src="/images/image-brand-coinbase.png"
                width={150}
                height={40}
                alt="Coinbase"
            />
            <Image
                src="/images/image-brand-dropbox.png"
                width={180}
                height={40}
                alt="Dropbox"
            />
        </div>
    )
}