import img1 from '../../images/portrait-1.png'
import img2 from '../../images/portrait-2.png'
import img3 from '../../images/portrait-3.png'


function Associates() {
    return (
        <section>
            <div className="text-center mt-36 mb-20">
                <h1 className="text-4xl">Our Associates</h1>
                <p className="mt-4">Working hard to get the thing done</p>
            </div>

            <div className='flex justify-center gap-10 w-2/3 ms-auto me-auto'>
                <div className='text-center'>
                    <img src={img1} alt="" />
                    <h2 className='mt-5 font-bold'>Shane Cotter</h2>
                    <p>Associate, IT</p>
                </div>
                <div className='text-center'>
                    <img src={img2} alt="" />
                    <h2 className='mt-5 font-bold'>Kathryn Wilson</h2>
                    <p>Associate, Development</p>
                </div>
                <div className='text-center'>
                    <img src={img3} alt="" />
                    <h2 className='mt-5 font-bold'>Thomas Anders</h2>
                    <p>Associate, Architecture</p>
                </div>
            </div>

        </section>
    )
}

export default Associates