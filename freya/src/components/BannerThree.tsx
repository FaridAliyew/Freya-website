import { useEffect, useState } from "react";

function BannerThree() {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className="relative w-full h-custom2 bg-banner_3 bg-current bg-cover text-white flex items-center justify-center mt-36"
            style={{
                backgroundPositionY: `${offset * 0.505}px`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-custom2">Prestana Remereo</h1>
                <p className="text-3xl uppercase">Rio De Janeiro</p>
            </div>
        </section>
    )
}

export default BannerThree