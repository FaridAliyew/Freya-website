import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

function Section() {
  return (
    <section className="mt-36 mx-44">
      <div className="text-center">
        <h1 className="mb-[1.8rem] mx-16 text-4xl">Freya Inc. is the hub for top architects and inventors, ready to turn your imagination into reality</h1>
        <p className="text-gray-600 mb-28">All photographs provided for demo purposes only.</p>
      </div>

      <div className="flex justify-center gap-5 border-4 border-red-900 ms-auto me-auto">
        <img src={img3} className="object-contain w-full" alt="" />
        <img src={img2} className="object-contain w-full" alt="" />
        <img src={img1} className="object-contain w-full" alt="" />
      </div>
    </section>
  );
}

export default Section;
