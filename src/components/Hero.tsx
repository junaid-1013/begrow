export const Hero = () => {
    return (
        <section className="bg-white">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        We Are Digital Experts
                    </h1>
                    <h2 className="max-w-2xl mb-6 text-2xl font-bold text-gray-800 lg:mb-8 md:text-3xl xl:text-4xl">
                        Based in North America / AZ
                    </h2>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-x">
                        Today&apos;s World, everything powered with AI, begrowsoft offering AI-Integrated
                        Apps and Web App to enhance your growth and Brand Positioning.
                    </p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center
                     text-white border bg-purple-600 rounded-lg hover:bg-purple-500 focus:ring-4 focus:ring-purple-700
                     ">
                        Get Started
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="/heroImg.png" alt="mockup" />
                </div>
            </div>
        </section>
    )
}
