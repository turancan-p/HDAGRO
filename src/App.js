import "./App.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "./components/images/logo.png";
import footer_logo from "./components/images/main.png";

import top_image_1 from "./components/images/top-image-1.jpg";
import top_image_2 from "./components/images/top-image-2.jpg";
import top_image_3 from "./components/images/top-image-3.jpg";
import top_image_4 from "./components/images/top-image-4.jpg";

import about_us_image_1 from "./components/images/about-us-image-1.jpg";
import about_us_image_2 from "./components/images/about-us-image-2.jpg";

import products_1 from "./components/images/products-1.jpg";
import products_2 from "./components/images/products-2.jpg";
import products_3 from "./components/images/products-3.jpg";
import products_4 from "./components/images/products-4.jpg";
import products_5 from "./components/images/products-5.jpg";

const email = "email@example.com";
const phone = "+90 01234 123 12 12";
const adress = "Turkey";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">HD AGRO</span>
                <img className="h-8" src={logo} alt="HDAGRO" />
              </a>
            </div>
            <div className="flex lg:hidden font-bold">
              <h1>HDAGRO</h1>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-gray-900 hover:text-gray-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end"></div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">HD AGRO</span>
                    <img className="h-8" src={logo} alt="HDAGRO" />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6"></div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </header>

      <main>
        <h1
          id="header-logo"
          className="mt-10 text-4xl font-bold tracking-tight text-center hidden"
        >
          HDAGRO
        </h1>
        <h2 className="mt-10 mb-10 text-3xl tracking-tight text-center">
          High Quality, Ready to Export Citrus Products.
        </h2>

        <div className="relative px-6 lg:px-8" id="home">
          <div className="mx-auto max-w-3xl pb-32 sm:pt-5 sm:pb-40">
            <div
              className="grid grid-cols-2 gap-4 flex items-center lg:grid-cols-4"
              id="header-grid"
            >
              <div className="">
                <img
                  src={top_image_1}
                  className="object-cover h-60 w-96 rounded-lg"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src={top_image_2}
                  className="object-cover h-60 w-96 rounded-lg"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src={top_image_3}
                  className="object-cover h-60 w-96 rounded-lg"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src={top_image_4}
                  className="object-cover h-60 w-96 rounded-lg"
                  alt=""
                />
              </div>
            </div>

            <div className="pt-20">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-center sm:text-3xl">
                  Quality is Never a Coincidence: Our Company's Commitment to
                  Providing the <em>Best Citrus Fruits</em>.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our company takes pride in providing the highest quality
                  citrus fruits to our customers, and we believe that quality is
                  never a coincidence. We carefully cultivate and source our
                  citrus fruits from the best growers around the world to ensure
                  that each fruit is of the highest quality. Whether it's a
                  juicy orange or a tart lemon, we guarantee that our fruits
                  will be packed with flavor and nutrition. We understand that
                  quality is key to customer satisfaction, and we strive to
                  exceed expectations with every product we produce.
                </p>
                <div className="mt-8 flex gap-x-4 justify-center">
                  <a
                    href="#about"
                    className="inline-block rounded-lg bg-indigo-600 hover:bg-sky-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700 transform motion-safe:hover:scale-110"
                  >
                    About Us{" "}
                  </a>
                  <a
                    href="#contact"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transform motion-safe:hover:scale-110"
                  >
                    Contact{" "}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 flex items-center">
                <div className="mt-20">
                  <img
                    src={about_us_image_1}
                    className="max-w-auto h-auto rounded-lg"
                    alt=""
                  />
                </div>
              </div>

              <div className="relative px-6 lg:px-8" id="about">
                <div div className="max-w-3xl pb-32 sm:pt-24 sm:pb-20">
                  <div>
                    <div>
                      <h1 className="text-2xl font-bold tracking-tight text-center">
                        The Mission:{" "}
                        <strong>
                          High Quality, Ready to Export Citrus Products to the
                          World!
                        </strong>
                      </h1>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        The phrase "High Quality, Ready to Export Citrus
                        Products" refers to the mission of our company to
                        provide high-quality citrus fruits that meet all
                        international standards and regulations for export. This
                        means that our fruits are grown and processed in a way
                        that ensures they are safe for consumption and meet all
                        the requirements for export to different countries
                        around the world. We are committed to providing our
                        customers with fruits that are of the highest quality,
                        both in terms of taste and nutrition, and that are ready
                        to be shipped to any location. Our company's mission is
                        to reach the whole world with our quality citrus fruits,
                        and we are dedicated to providing our customers with the
                        best possible experience.
                      </p>
                      <div className="mt-10 grid grid-cols-1 gap-4 flex items-center">
                        <img
                          src={about_us_image_2}
                          className="object-cover h-96 w-screen rounded-lg"
                          alt=""
                        />
                      </div>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        In order to achieve our mission of providing "High
                        Quality, Ready to Export Citrus Products", our company
                        has strict guidelines and protocols in place for the
                        cultivation, harvesting, and processing of our citrus
                        fruits. Our fruits are grown using sustainable and
                        environmentally friendly methods, which not only ensures
                        the highest quality but also protects the environment.
                        We also have strict quality control measures in place to
                        ensure that every fruit that leaves our farm meets the
                        highest standards. Furthermore, our company has a team
                        of experts that work closely with the authorities to
                        ensure that our fruits comply with the regulations of
                        the countries where we export. This includes obtaining
                        the necessary certifications and licenses to export our
                        products. In short, our mission is to provide the best
                        quality fruits to customers all over the world, and we
                        are committed to meeting or exceeding international
                        standards and regulations to achieve that goal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative px-6 lg:px-8" id="products">
                <div className="max-w-3xl pb-10 sm:pb-10">
                  <div className="text-center">
                    <div>
                      <h1 className="font-bold tracking-tight text-center text-2xl">
                        Our Products
                      </h1>
                      <div className="mt-6 grid grid-cols-4 gap-4 flex items-center">
                        <div className="shrink">
                          <img
                            src={products_1}
                            className="object-cover h-screen max-h-[80vh] w-auto rounded-lg"
                            alt=""
                          />
                        </div>
                        <div className="shrink">
                          <img
                            src={products_2}
                            className="object-cover h-screen max-h-[80vh] w-auto rounded-lg"
                            alt=""
                          />
                        </div>
                        <div className="shrink">
                          <img
                            src={products_3}
                            className="object-cover h-screen max-h-[80vh] w-auto rounded-lg"
                            alt=""
                          />
                        </div>
                        <div className="shrink">
                          <img
                            src={products_4}
                            className="object-cover h-screen max-h-[80vh] w-auto rounded-lg"
                            alt=""
                          />
                        </div>
                        <div className="col-span-4">
                          <img
                            src={products_5}
                            className="object-cover h-screen max-h-[80vh] w-auto rounded-lg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Our company offers a wide variety of fruits such as oranges,
                lemons, grapefruit, tangerines and avocados. These fruits are
                known for their bright colors, pungent taste and high vitamin C
                content. We select the highest quality fruits from the best
                growers around the world to make sure every fruit is packed with
                flavor and nutrition. Our products are not only delicious but
                also healthy and nutritious, making them a great addition to any
                diet. We offer a wide variety of packaging options to suit our
                customers' needs, including bulk and retail ready packaging.
              </p>

              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer
        className="text-center lg:text-left bg-gray-100 text-gray-600"
        id="contact"
      >
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/limo.nardo"
              className="mr-4 text-gray-600"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-20 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <h6
                className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cubes"
                  className="w-4 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                  ></path>
                </svg>
                HDAGRO
              </h6>
              <p className=" items-center justify-center md:justify-start mb-4">
                Thank you for visiting our website. If you have any questions or
                comments about our products or services, please do not hesitate
                to contact us. You can reach us emailing directly at{" "}
                <span>
                  <b>{email}</b>
                </span>
                , or calling us at{" "}
                <span>
                  <b>{phone}</b>
                </span>
                . We value your feedback and will make every effort to respond
                to your inquiry in a timely manner. Thank you for considering
                our company.
              </p>
            </div>
            <div className="col-span-2 flex justify-center">
              <h6 className="uppercase font-semibold mb-4"></h6>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
                {adress}
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                {email}
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                {phone}
              </p>
            </div>
          </div>
        </div>
        <div className="relative text-center items-center p-6 bg-gray-200">
          <span>© 2023 Copyright:</span>
          <a className="text-gray-600 font-semibold" href="/">
            HDAGRO
          </a>
          <a
            href="https://github.com/turancan-p"
            className="text-purple-600"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
