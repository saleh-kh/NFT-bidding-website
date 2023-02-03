import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const landingPage = () => {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse  items-center mx-auto px-9 mt-0 md:flex justify-around md:flex-row  ">
                {/* first item */}
                <div className='flex flex-col mb-32 pt-32'>
                    <h1 className='  text-left '>Buy , Sell And bid on <span id='span4nft'> NFTs!</span> <br />
                        market place</h1>


                    <p className="about text-md-start my-4 text-xl" id='desc' >
                        <span className='BOLDER'>NFTs - </span> is the largest NFT Marketplace . <br />

                        featuring artist from around
                        the world. <br />  get started today with the easist and scure platform.
                    </p>
                    <Link to='/login'><button class="bg-spc-g hover:bg-spc-c text-black font-bold py-2 px-14 rounded-md flex justify-around mx-auto mt-5  " id='bttn'>
                        Start!
                    </button> </Link>


                </div>
                {/* second */}
                <div className="mb-32 md: w-1/2 h-1/4 mb-32 ml-3 pt-5">
                    <img src={require("./pic/image 1.png")} alt="" />
                </div>





            </div>
        </section>
    )
}

export default landingPage