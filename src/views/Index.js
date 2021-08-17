/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Modern Generation Specialist for software solutions
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                The leading Software Solutions providers in Sri Lanka
              </p>
              {/* <div className="mt-12">
                <a
                  href=""
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Our Services
                </a>
                <a
                  href=""
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Contact Us
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/test.gif").default}
          alt="..."
        />
      </section>
      <section>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">OUR SERVICES</h2>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Web Development
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Your website is the center of your business. We will develop
                    a high-standard website to accelerate its growth.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Mobile Application Development
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Take your business & barand on onother level.
                    we offer any type of mobile application decelopment
                    service to build best in class mobile apps to keep you
                    ahead of the curve
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://cdesignc.co.za/wp-content/uploads/2020/08/1572855136-393487-graphicdesignsoftwarejpg.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Graphic design
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Every element that you need in a product comes built in as a
                    component. All components fit perfectly with each other and
                    can have different colours.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      HTML
                    </p>
                  </div>

                  <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      ReactJS
                    </p>
                  </div>
                  <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      NextJS
                    </p>
                  </div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      JavaScript
                    </p>
                  </div>
                  <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Angular
                    </p>
                  </div>
                  <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Vue.js
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                What We Use
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Cutting edge technologies with frequent updates.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  HTML
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  CSS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Java Script
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Flutter
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Xamarin
                </span>
              </div>
            </div>
          </div>
          <a
            href=""
            className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
          >
            View All{" "}
            <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
          </a>
        </div>

        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32"></div>
      </section>

      <Footer />
    </>
  );
}
