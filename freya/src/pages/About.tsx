function About() {
    return (
        <section className="relative bg-about-header w-full h-custom3 bg-center bg-cover">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="text-center">
                    <h1 className="text-custom2 text-white">Stylish Interior</h1>
                    <p className="uppercase text-gray-400 text-3xl">is The Symbol of Elegance</p>
                </div>
            </div>
        </section>
    );
}

export default About;
