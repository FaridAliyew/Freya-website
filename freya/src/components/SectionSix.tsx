import img1 from '../images/img7.png';
import img2 from '../images/img8.png';
import img3 from '../images/img9.png';
function SectionSix() {
    return (
        <section className="text-center mt-32 mx-44">
            <h1 className="text-4xl mb-12">A Brooklyn space becomes greener than ever.</h1>
            <p className="w-custom ms-auto me-auto text-gray-500">
                With Freya's magical touch, a office space at Brooklyn becomes greener than ever. Cras matti consectetur purus st amet fermentum. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia qua venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula neget.
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
            </div>
        </section>
    );
}

export default SectionSix