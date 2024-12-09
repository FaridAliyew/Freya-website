import img1 from '../images/img4.png';
import img2 from '../images/img5.png';
import img3 from '../images/img6.png';

function SectionThree() {
  return (
    <section className="text-center mt-32 mx-44">
      <h1 className="text-4xl mb-12">A coffee shop gains a warmer look</h1>
      <p className="w-custom ms-auto me-auto text-gray-500">
        Museo coffees got in touch with Freya for their renovation. We took over and asked them to have a cup of coffee for themselves while the job is done! Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pellentesque ornare se lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
      </p>

      <div className="flex flex-wrap gap-11 justify-center items-center mx-auto mt-20">
        <div className="w-[48%]">
          <img src={img1} alt="Image 1" className="w-full h-auto" />
        </div>
        <div className="w-[48%]">
          <img src={img2} alt="Image 2" className="w-full h-auto" />
        </div>
        <div className="w-full">
          <img src={img3} alt="Image 3" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
