"use client"

interface QuotesSvgProps {
    width: string
    height: string
}

export const QuotesSvg = ({ width, height }: QuotesSvgProps) => {
    return (
        <svg
            viewBox="0 0 43 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <path
                d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z"
                fill="url(#paint0_linear_310_509)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_310_509"
                    x1="28.8615"
                    y1="-24.7969"
                    x2="41.7939"
                    y2="24.1471"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.00887753" stopColor="#DEF9FA"/>
                    <stop offset="0.1723" stopColor="#BEF3F5"/>
                    <stop offset="0.4204" stopColor="#9DEDF0"/>
                    <stop offset="0.5512" stopColor="#7DE7EB"/>
                    <stop offset="0.7154" stopColor="#5CE1E6"/>
                    <stop offset="1" stopColor="#33BBCF"/>
                </linearGradient>
            </defs>
        </svg>
    )
}