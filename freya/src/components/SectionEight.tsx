import img1 from '../images/img14.jpg';
import img2 from '../images/img15.jpg';
import img3 from '../images/img16.jpg';
import img4 from '../images/img17.jpg';

function SectionEight() {
    return (
        <section className="text-center mt-32 mx-44">
            <h1 className="text-4xl mb-12">Luxurious lifestyle in the Mansion</h1>
            <p className="w-custom ms-auto me-auto text-gray-500">
                No matter the task, Freya Inc. is up for it. Cum sociis natoque penatibus et magnis dis parturient bee, nascetur ridiculus mus. Nulla vitae elit libero, pharetra. Integer posuere erat ante venenatis posuere velit aliquet. Etiam wagner moura porta malesuada magna mollis euismod mondar alu aflak.
            </p>

            <div className="flex flex-wrap gap-11 justify-center items-center mx-auto mt-20">
                <div className="w-full">
                    <img src={img1} alt="Image 1" className="w-full h-auto" />
                </div>
                <div className="w-[48%]">
                    <img src={img2} alt="Image 2" className="w-full h-auto" />
                </div>
                <div className="w-[48%]">
                    <img src={img3} alt="Image 3" className="w-full h-auto" />
                </div>
                <div className="w-full">
                    <img src={img4} alt="Image 4" className="w-full h-auto" />
                </div>
            </div>
        </section>
    )
}

export default SectionEight