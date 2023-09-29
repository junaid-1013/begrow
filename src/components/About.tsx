'use client';
import { useEffect, useRef } from "react";
import { useSpring, useInView, useMotionValue } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
            <section id="about" className="relative pt-12">
                <div className="items-center flex flex-wrap mb-8">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-4 md:mb-0">
                        <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://www.sdocs.com/wp-content/uploads/Salesforce-For-Financial-Services.jpg" />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <p className="text-purple-600 text-lg font-bold mb-2">ABOUT</p>
                            <h3 className="text-3xl font-semibold mb-2">AI-Powered Strategies for Business Growth!</h3>
                            <h4 className="text-2xl font-semibold">Best CRM/Data driven Sales</h4>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500 text-justify">
                                We are providing the best CRM data-driven sales approach leverages customer relationship management technology
                                and data analytics to make informed, personalized sales decisions, resulting in more effective and targeted sales efforts.
                            </p>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="font-bold text-md">Dedicated AI Team</AccordionTrigger>
                                    <AccordionContent>
                                        Our AI team is a group of experts pioneering AI solutions to drive innovation and solve complex challenges across industries.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="font-bold text-md">Developing Strategy</AccordionTrigger>
                                    <AccordionContent>
                                        We are providing strategic solution to companies. It involves setting clear goals, analyzing data, and making informed decisions to achieve long-term objectives.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="font-bold text-md">24/7 Hours Support</AccordionTrigger>
                                    <AccordionContent>
                                        24/7 access round-the-clock availability, ensuring you can reach or use something at any time, day or night.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3 px-4 sm:px-0">
                    <div className="flex flex-col justify-center xl:items-center">
                        <span className="inline-block font-bold text-4xl leading-none md:text-6xl sm:text-5xl">
                            <AnimateNumber value={5} />k+
                        </span>
                        <h2 className="text-base font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                            satisfied clinets
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center xl:items-center">
                        <span className="inline-block font-bold text-4xl leading-none md:text-6xl sm:text-5xl">
                            <AnimateNumber value={350} />+
                        </span>
                        <h2 className="text-base font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                            running projects
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center xl:items-center">
                        <span className="inline-block font-bold text-4xl leading-none md:text-6xl sm:text-5xl">
                            <AnimateNumber value={900} />+
                        </span>
                        <h2 className="text-base font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                            projects completed
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}
