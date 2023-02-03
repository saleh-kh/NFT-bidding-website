import React from 'react'

const Extra = () => {
    return (
        <section id="hero" className=' pt-32'>
            <div className="container flex flex-col-reverse  items-center mx-auto px-9 mt- md:flex justify-around md:flex-row  ">
                {/* first item */}
                <div className='flex flex-col mb-32'>
                    <h1 className=' text-center text-5xl'>Invite Your Friends to <span id='span4nft'> NFTs!</span> <br />
                        And get Free Crypto</h1>


                    <p className="about text-md-start my-4 text-xl" id='desc' >Get free
                        <span className='BOLDER'> NFTs - </span> for every friend you refer.
                        <span className='BOLDER'> Sign up for news &amp; special offers .</span> <br />
                        For each invited friend, you will receive a unique bonus and access to rare NFTS.
                    </p>
                    <button class="bg-spc-g hover:bg-spc-c text-black font-bold py-2 px-14 rounded-md flex justify-around mx-auto  " id='bttn'>
                        Invite!
                    </button>


                </div>
                {/* second */}
                <div className="mb-32 md: w-1/3 h-1/4 mb-32 ml-3 pt-5">
                    <img src={require("./pic/g3.png")} alt="" />
                </div>





            </div>
        </section>
    )
}

export default Extra