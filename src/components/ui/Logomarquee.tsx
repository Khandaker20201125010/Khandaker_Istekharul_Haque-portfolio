/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';
import reactLogo from "../../../public/images/reactlogo.png";
import nextjsLogo from "../../../public/images/nextjs.png";
import tailwindLogo from "../../../public/images/tailwindlogo.png";
import jSLogo from "../../../public/images/jslogo.png";
import tSLogo from "../../../public/images/ts.png";
import nodejsLogo from "../../../public/images/nodejs.png";
import expressLogo from "../../../public/images/express.png";
import postgresLogo from "../../../public/images/postgressql.png";
import prismaLogo from "../../../public/images/prisma.png";
import firebaseLogo from "../../../public/images/firebase.png";
import vercelLogo from "../../../public/images/vercel.png";
import htmlLogo from "../../../public/images/html.png";
import cssLogo from "../../../public/images/css.png";
import Image from 'next/image';

interface LogoProps {
    size?: number;
    alt?: string;
    className?: string;
}


const LogoImage = ({ src, alt, size = 40, className }: { src: any; alt?: string; size?: number; className?: string }) => (
    <Image
        src={src}
        alt={alt ?? ''}
        style={{ height: `${size}px`, width: "auto" }}
        className={className}
    />
);

// Individual logos
const ReactLogo = (props: LogoProps) => <LogoImage src={reactLogo} alt="React" {...props} />;
const NextjsLogo = (props: LogoProps) => <LogoImage src={nextjsLogo} alt="Next.js" {...props} />;
const TailwindLogo = (props: LogoProps) => <LogoImage src={tailwindLogo} alt="Tailwind" {...props} />;
const JSLogo = (props: LogoProps) => <LogoImage src={jSLogo} alt="JavaScript" {...props} />;
const TSLogo = (props: LogoProps) => <LogoImage src={tSLogo} alt="TypeScript" {...props} />;
const NodejsLogo = (props: LogoProps) => <LogoImage src={nodejsLogo} alt="Node.js" {...props} />;
const ExpressLogo = (props: LogoProps) => <LogoImage src={expressLogo} alt="Express.js" {...props} />;
const PostgresLogo = (props: LogoProps) => <LogoImage src={postgresLogo} alt="PostgreSQL" {...props} />;
const PrismaLogo = (props: LogoProps) => <LogoImage src={prismaLogo} alt="Prisma" {...props} />;
const FirebaseLogo = (props: LogoProps) => <LogoImage src={firebaseLogo} alt="Firebase" {...props} />;
const VercelLogo = (props: LogoProps) => <LogoImage src={vercelLogo} alt="Vercel" {...props} />;
const HTMLLogo = (props: LogoProps) => <LogoImage src={htmlLogo} alt="HTML" {...props} />;
const CSSLogo = (props: LogoProps) => <LogoImage src={cssLogo} alt="CSS" {...props} />;

const logos1 = [
    { id: 1, component: <ReactLogo /> },
    { id: 2, component: <HTMLLogo /> },
    { id: 3, component: <TailwindLogo /> },
    { id: 4, component: <CSSLogo /> },
    { id: 5, component: <NextjsLogo /> },
    { id: 6, component: <VercelLogo /> },
    { id: 7, component: <JSLogo /> },
    { id: 8, component: <TSLogo /> },
    { id: 9, component: <FirebaseLogo /> },
    { id: 10, component: <PrismaLogo /> },
    { id: 11, component: <PostgresLogo /> },
    { id: 12, component: <ExpressLogo /> },
    { id: 13, component: <NodejsLogo /> },
];

const logos2 = [
    { id: 1, component: <ReactLogo /> },
    { id: 2, component: <HTMLLogo /> },
    { id: 3, component: <TailwindLogo /> },
    { id: 4, component: <CSSLogo /> },
    { id: 5, component: <NextjsLogo /> },
    { id: 6, component: <VercelLogo /> },
    { id: 7, component: <JSLogo /> },
    { id: 8, component: <TSLogo /> },
    { id: 9, component: <FirebaseLogo /> },
    { id: 10, component: <PrismaLogo /> },
    { id: 11, component: <PostgresLogo /> },
    { id: 12, component: <ExpressLogo /> },
    { id: 13, component: <NodejsLogo /> },
];


function Logomarquee() {
    // We need to inject the keyframes animation into the document's head
    // because Tailwind CSS doesn't directly support the 'cqw' unit.
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    const Marquee = ({ logos, direction = 'forwards' }: { logos: typeof logos1; direction?: string }) => {
        const numItems = logos.length;
        const speed = '25s';
        const itemWidth = '120px';
        const itemGap = '25px';

        return (
            <div
                className="max-w-full overflow-hidden"
                style={{
                    '--speed': speed,
                    '--numItems': numItems,
                    '--item-width': itemWidth,
                    '--item-gap': itemGap,
                    '--direction': direction,
                    maskImage: 'linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)',
                } as React.CSSProperties}
            >
                <div
                    className="w-max flex"
                    style={{
                        '--track-width': `calc(var(--item-width) * ${numItems})`,
                        '--track-gap': `calc(var(--item-gap) * ${numItems})`,
                    } as React.CSSProperties}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex justify-center items-center bg-gradient-to-br from-blue-500/20 via-gray-700 to-blue-500/30 border border-black rounded-2xl text-white"
                            style={{
                                width: 'var(--item-width)',
                                aspectRatio: '1 / 1.2',
                                marginRight: 'var(--item-gap)',
                                animation: `marquee-move var(--speed) linear infinite ${direction}`,
                            } as React.CSSProperties}
                        >
                            <div className="flex justify-center items-center w-full h-full">
                                {logo.component}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="items-center overflow-hidden ">
            <div className="w-full max-w-full flex flex-col gap-y-6 ">
                <Marquee logos={logos1} />
                <Marquee logos={logos2} direction="reverse" />
            </div>
        </div>
    );
}

export default Logomarquee;
