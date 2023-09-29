import { Store, Code2, Rocket, Bot } from "lucide-react"

const Services = () => {
    return (
        <>
            <div id="services" className="flex flex-wrap justify-center text-center">
                <div className="inline-flex items-center justify-center w-full px-8 md:px-12 xl:px-32 lg:px-20">
                    <hr className="w-full h-px my-8 bg-purple-400 border-0" />
                    <span className="absolute px-3 font-bold text-lg text-purple-600 -translate-x-1/2 bg-white left-1/2">
                        OUR SERVICES
                    </span>
                </div>
                <div className="w-full lg:w-6/12 px-4 pt-8">
                    <p className="text-gray-700 text-lg font-light">
                        AI-Powered Strategies for Business Growth!
                    </p>
                </div>
            </div>
            <div className="xl:px-28 flex flex-wrap p-8 justify-center pb-0">

                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                        <div className="mx-auto mb-7 inline-block">
                            <Store strokeWidth="1.2px" className="w-16 h-16 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                Eccommerce Storefront
                            </h3>
                            <p className="text-base font-medium text-body-color">
                                Empower Your Business with Shopify and Woocommerce Development. Our Expertise Fuels E-commerce Success, Delivering Custom Solutions that Drive Sales and Growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                        <div className="mx-auto mb-7 inline-block">
                            <Code2 strokeWidth="1.2px" className="w-16 h-16 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                Web Development
                            </h3>
                            <p className="text-base font-medium text-body-color">
                                Unleash the Full Potential of Your Online Presence with Expert Web Development. We Create Dynamic Websites Tailored to Your Vision, Enhancing User Experience and Ensuring High Performance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                        <div className="mx-auto mb-7 inline-block">
                            <Rocket strokeWidth="1.2px" className="w-16 h-16 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                Digital Marketing
                            </h3>
                            <p className="text-base font-medium text-body-color">
                                Revolutionize Your Business with AI-Powered Digital Marketing and CRM Synergy. Our Expertise Combines Cutting-Edge AI Algorithms with CRM Data for Precision Targeting.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                        <div className="mx-auto mb-7 inline-block">
                            <Bot strokeWidth="1.2px" className="w-16 h-16 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                                AI ChatBot Integration
                            </h3>
                            <p className="text-base font-medium text-body-color">
                                Transform Your Customer Support with OpenAI-Powered AI Chatbots. Our AI Chatbot Solutions Enhance User Engagement, Streamline Queries, and NLP Langchain Model Integration.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services