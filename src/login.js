import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './index.css'

const login = () => {
    return (
        <section className="h-full gradient-form flex justify-around md:h-screen">

            <div className="container  px-6 ">
                <div className="flex justify-center items-center flex-wrap mt-5 pt-4 g-6 text-white">
                    <div className="xl:w-10/12">
                        <div className="block bg-spc-c2 shadow-lg rounded-lg" id='loginSection3'>
                            <div className="lg:flex lg:flex-wrap g-0">
                                <div className="lg:w-6/12 px-4 md:px-0">
                                    <div className="md:p-12 md:mx-6">
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48 mb-7"
                                                src={require("./pic/logo.png")}
                                                alt="logo"
                                            />
                                            {/* <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">We are The Lotus Team</h4> */}
                                        </div>
                                        <form>
                                            <p className="mb-4">Please login to your account</p>
                                            <div className="mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-spc-c bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-white-700   focus:outline-none"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    type="password"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-spc-c bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  f focus:outline-none"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="text-center pt-1 mb-12 pb-1">
                                                <button
                                                    className="inline-block px-6 py-2.5 text-black hover:text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-spc-g hover:bg-spc-c hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                    type="button"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                    id='A'
                                                >
                                                    Log in
                                                </button>
                                                <a className="text-white hover:opacity-50" href="#!">Forgot password?</a>
                                            </div>
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Don't have an account?</p>
                                                <Link to='/register'>
                                                    <button
                                                        type="button"
                                                        className=" text-black hover:text-white inline-block bg-spc-g px-6 py-2 border-1 font-medium text-xs leading-tight uppercase rounded hover:bg-spc-c hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light" >
                                                        Register
                                                    </button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className=" lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                                    id="loginSection2"
                                >
                                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                        <h1 className="text-4xl  mb-6 font-bolder" id='span4nft'>NFTs</h1>
                                        <p className="text-md" id='desc'>
                                            the largest NFT Marketplace .
                                            featuring artist from tround the world.
                                            get started today with the easist and scure platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape1 hidden md:block"></div>
            <div class="shape2 hidden md:block"></div>
            <div class="shape3 hidden md:block"></div>
        </section>
    )
}

export default login