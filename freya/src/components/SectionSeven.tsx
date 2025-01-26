import React from 'react'
import img1 from '../images/img10.jpg';
import img2 from '../images/img11.jpg';
import img3 from '../images/img12.jpg';
import img4 from '../images/img13.jpg';
function SectionSeven() {
  return (
    <section className="text-center mt-32 mx-44">
            <h1 className="text-4xl mb-12">Prestana Remereo deserved a coat of paint</h1>
            <p className="w-custom ms-auto me-auto text-gray-500">
            Prestana Remereo wanted renovation, we simply delivered. Nullam quis risus eget urna mollis ornare vel leo. Donec sed odio dui. Nullam quis risus eget ua mollis ornare vel eu leo. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>

            <div className="flex flex-wrap gap-11 justify-center items-center mx-auto mt-20">
                <div className="w-[48%]">
                    <img src={img1} alt="Image 1" className="w-full h-auto" />
                </div>
                <div className="w-[48%]">
                    <img src={img2} alt="Image 2" className="w-full h-auto" />
                </div>
                <div className="w-[48%]">
                    <img src={img3} alt="Image 3" className="w-full h-auto" />
                </div>
                <div className="w-[48%]">
                    <img src={img4} alt="Image 4" className="w-full h-auto" />
                </div>
            </div>
        </section>
  )
}

export default SectionSeven