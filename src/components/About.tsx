'use client';
import { useEffect, useRef } from "react";
import { useSpring, useInView, useMotionValue } from "framer-motion";

const AnimateNumber = ({ value }: any) => {
    // const ref = useRef(null);
    const ref = useRef<HTMLSpanElement | null>(null); 

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

export const About = () => {
    return (
        <>
            <div className="flex justify-around col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3 px-4 sm:px-0">
                <div className="flex flex-col justify-center xl:items-center">
                    <span className="inline-block font-bold text-[2.5rem] leading-none md:text-6xl sm:text-5xl">
                        <AnimateNumber value={5} />k+
                    </span>
                    <h2 className="text-base font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                        satisfied clinets
                    </h2>
                </div>

                <div className="flex flex-col justify-center xl:items-center">
                    <span className="inline-block font-bold text-[2.5rem] leading-none md:text-6xl sm:text-5xl">
                        <AnimateNumber value={350} />+
                    </span>
                    <h2 className="text-base font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                        running projects
                    </h2>
                </div>

                <div className="flex flex-col justify-center xl:items-center">
                    <span className="inline-block font-bold text-[2.5rem] leading-none md:text-6xl sm:text-5xl">
                        <AnimateNumber value={900} />+
                    </span>
                    <h2 className="text-base font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                        projects completed
                    </h2>
                </div>
            </div>
        </>
    )
}
