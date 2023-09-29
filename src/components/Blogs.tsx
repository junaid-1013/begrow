const articleData = [
    {
        imageSrc: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: 'Web Design',
        title: 'Key Principles for Creating an Excellent Website Design',
        description:
            'A great website should engage the visitor and effectively convey the message that it is trying to convey. A good website design is influenced by ...',
    },
    {
        imageSrc: "https://images.pexels.com/photos/4968390/pexels-photo-4968390.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: 'E-commerce',
        title: 'The Importance of Data Analytics in E-Commerce',
        description:
            'Imagine if you could predict what your customers are likely to purchase and the price range at which you should sell it in order to ...',
    },
    {
        imageSrc: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: 'CMS Website Development',
        title: 'Maximize Your Website`s Potential Using a CMS',
        description:
            'In the current digital age, a website has become a must for almost all types of businesses. Having a website is one of the crucial ...',
    },
];


export const Blogs = () => {
    return (
        <>
            <div id="blogs" className="inline-flex items-center justify-center w-full px-8 md:px-12 xl:px-32 lg:px-20">
                <hr className="w-full h-px my-8 bg-purple-400 border-0" />
                <span className="absolute px-3 font-bold text-lg text-purple-600 -translate-x-1/2 bg-white left-1/2">
                    BLOGS
                </span>
            </div>
            <div className="flex items-center justify-center">
                <div>
                    <h1 className="text-gray-900 text-4xl font-bold">
                        Read our top blogs
                    </h1>
                </div>
            </div>
            <div className="container mt-12 mx-auto px-4 md:px-12 -mb-4">
                <div className="flex flex-wrap px-2">
                    {articleData.map((article, index) => (
                        <div
                            key={index}
                            className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 py-4"
                        >
                            <article className=" rounded-lg shadow-lg">
                                <a href="#" className="image-wrapper block">
                                    <img
                                        alt="Placeholder"
                                        className="block rounded-lg h-auto w-full transition-transform duration-300 transform 
                                        hover:translate-y-[-5px] hover:elevated-shadow"
                                        src={article.imageSrc}
                                    />
                                </a>
                                <header className="flex flex-col items-start justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <a href="#" className="group text-purple-600 font-['Calibri'] text-bold transition duration-300">
                                            {article.category}
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-purple-600"></span>
                                        </a>
                                    </h1>
                                    <h1 className="text-lg">
                                        <a className="text-gray-700" href="#">
                                            {article.title}
                                        </a>
                                    </h1>
                                </header>
                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <p className="ml-2 text-sm">{article.description}</p>
                                </footer>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
