import React from 'react'
import './index.css'
import Example from './Button'
import './pic/BinanceUsdBadge.svg'
const explore = () => {
    return (

        <section>
            <div className="container  mt-10 flex flex-col-reverse mx-auto  md:flex md:justify-between md:flex-row ">
                {/* 1 st item */}
                <div className="text-center my-auto p-6">
                    <h1 className='text-4xl'>Discover NFTs from artist around the world !</h1>
                </div>

                <div className='mx-auto w-8/12   '>
                    <img className='hidden md:block rounded-2xl' src={require("./pic/TEST.webp")} alt="" />
                </div>


                <div className='hidden lg:bg-spc-c2 lg:rounded-2xl lg:flex flex-row  lg:px-6 lg:py-2 ' id="bnr">
                    <div className='mr-32 ml-7' >current bid : <br /> 7.56 ETH  </div>
                    <div className=' mr-7'>Ends in : <br /> 24 Hrs</div>

                </div>





            </div>


            {/* seperator */}
            {/* <hr className='my-10' /> */}
            <div className="section3 bg-spc-c3 mx-3  my-16 rounded">
                <div className='mx-auto mx-10  '>
                    <h1 className='pt-10' id='explorepage-text'>Trending ArtWorks </h1>
                    <div className="flex justify-between my-10">
                        <span className=' text-2xl' >Top artworks of this year</span>

                        <div>

                            <Example />


                        </div>
                    </div>
                </div>

                {/* items */}
                <div className="p-9 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {/* <!--Card 1--> */}
                    <div className="rounded-3xl overflow-hidden shadow-lg bg-spc-c2">
                        <div className='mx-5 my-5'> <img className=" w-full  max-h-96  rounded-3xl  " src={require("./pic/sa.png")} alt="Mountain" /> </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">:21</div>
                            <p className="text-gray-700 text-base">
                                SHARK///
                            </p>
                        </div>
                        <div className="flex flex-row justify-between  px-6 pt-4 pb-2" id='pricesection'>
                            {/* price  */}
                            <span className='text-2xl '>Price: </span>  <div className='flex flex-row space-x-1'><span className='text-2xl ' id='price' > 3.8</span> <span id='currency'><img className='w-3 h-4 mt-2' src={require("./pic/eth.png")} alt="" /></span></div>
                        </div>
                    </div>
                    {/* <!--Card 2--> */}
                    <div className="rounded-3xl overflow-hidden shadow-lg bg-spc-c2">
                        <div className='mx-5 my-5'> <div> <img className="max-w-96 max-h-96 rounded-3xl object-scale-down " src={require("./pic/1st.gif")} alt="Shiba" /> </div> </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Andrew</div>
                            <p className="text-gray-700 text-base">
                                DummyFI
                            </p>
                        </div>
                        <div className="flex flex-row justify-between  px-6 pt-4 pb-2" id='pricesection'>
                            {/* price  */}
                            <span className='text-2xl '>Price: </span>  <div className='flex flex-row space-x-1'><span className='text-2xl ' id='price' > 7.6</span> <span id='currency'><img className='w-3 h-4 mt-2' src={require("./pic/eth.png")} alt="" /></span></div>
                        </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-lg bg-spc-c2">
                        <div className='mx-5 my-5'> <div> <img className="max-w-96 max-h-96 rounded-3xl object-scale-down " src={require("./pic/primetony.png")}  /> </div> </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">PRIME Bad Boy Tony #10</div>
                            <p className="text-gray-700 text-base">
                                NFT_club
                            </p>
                        </div>
                        <div className="flex flex-row justify-between  px-6 pt-4 pb-2" id='pricesection'>
                            {/* price  */}
                            <span className='text-2xl '>Price: </span>  <div className='flex flex-row space-x-1'><span className='text-2xl ' id='price' > 22000</span> <span id='currency'><img className='w-4 h-4 mt-2' src={require("./pic/BinanceUsdBadge copy.png")} alt="" /></span></div>
                        </div>
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-lg bg-spc-c2">
                        <div className='mx-5 my-5'> <div> <img className="max-w-96 max-h-96 rounded-3xl object-scale-down " src={require("./pic/FANCY BEAR.png")} alt="Shiba" /> </div> </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Fancy Bear #5365</div>
                            <p className="text-gray-700 text-base">
                                Anonymous
                            </p>
                        </div>
                        <div className="flex flex-row justify-between  px-6 pt-4 pb-2" id='pricesection'>
                            {/* price  */}
                            <span className='text-2xl '>Price: </span>  <div className='flex flex-row space-x-1'><span className='text-2xl ' id='price' > 15</span> <span id='currency'><img className='w-3 h-4 mt-2' src={require("./pic/eth.png")} alt="" /></span></div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default explore