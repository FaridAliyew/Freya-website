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

      <div className="grid grid-cols-3 justify-center gap-5">
        <div className="text-justify">
          <img src={img3} className="object-contain w-full" alt="img1" />
          <h1 className="text-center uppercase text-2xl my-4">Residential</h1>
          <p className="text-gray-500">From Manitoba to Brooklyn, affordable, comfortable and livable houses for families of all shapes and sizes are covered by us. Cras justo odio, dapibus, egestas eget quam lorem ipsum.</p>
        </div>
        <div className="text-justify">
          <img src={img2} className="object-contain w-full" alt="img2" />
          <h1 className="text-center uppercase text-2xl my-4">Commercial</h1>
          <p className="text-gray-500">We have also designing interiors for restaurants, bar or office spaces. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dolor.</p>
        </div>
        <div className="text-justify">
          <img src={img1} className="object-contain w-full" alt="img3" />
          <h1 className="text-center uppercase text-2xl my-4">Hospitality</h1>
          <p className="text-gray-500">You need your guests to have an unforgettable experience, Freya Inc. is ready to deliver. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus.</p>
        </div>
      </div>
    </section>
  );
}

export default Section;
