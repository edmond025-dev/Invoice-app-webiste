import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Faqs from "./components/Faqs";
import BackToTop from "./components/BackToTop";

function App() {
  const handleDownload = () => {
    window.open(
      "https://github.com/edmond025-dev/invoice-it-downloads/releases/download/v1.0.0.0/Invoice-it.zip",
      "_blank"
    );
  };

  return (
    <div className="bg-white">
      {/* home div here */}

      <Navbar />

      {/* hero div here */}
      <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56 pb-14">
        <div className="text-center">
          <h1 className="text-balance text-7xl font-stix font-regular tracking-tight leading-[1] text-gray-900 sm:text-7xl">
            Record and keep track <br />
            of your invoices <br />
            payment and expenses
          </h1>
        </div>

        <p className="mt-8 text-pretty font-inter text-lg-custom font-medium text-gray-500 sm:text-xl/8">
          <span className="font-semibold" style={{ color: "#1B1B1B" }}>
            Invoice-it
          </span>{" "}
          A tool for businesses or freelancer to help you
          <br />
          record and keep track of your business invoice, <br />
          payments and expenses. Keep your clutter <br />
          organised
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center bg-[#2D3142] text-white px-4 py-3 rounded-[5px] space-x-3 mt-6 mx-auto"
          >
            <span className="mr-3">Download it for free</span>
            <img
              src="assets/windows-icon.png"
              alt="Windows Icon"
              className="h-5 w-5"
            />
          </button>
        </div>

        <p className="mt-8 text-pretty font-inter text-lg-custom font-medium text-gray-500 sm:text-xl/8">
          Only windows version available for now
        </p>
      </div>
      {/* hero div here */}

      {/* product image div here */}
      <img
        src="assets/product-image.png"
        alt="Product"
        className="w-full h-[650px] mt-1 object-cover"
      />
      {/* product image div here */}

      {/* faqs accordion div here */}
      <div
        id="faqs"
        className="inline-block px-10 py-2 rounded-md text-lg mt-20 mb-16"
        style={{
          backgroundColor: "#d1d4e0",
          color: "#292d3d",
        }}
      >
        FAQs
      </div>
      <Faqs />

      {/* faqs accordion div here */}

      <div
        id="pricing"
        className="inline-block px-10 py-2 rounded-md text-lg mt-20 mb-16"
        style={{
          backgroundColor: "#d1d4e0",
          color: "#292d3d",
        }}
      >
        PRICING
      </div>

      <div className="text-center">
        <h1 className="text-balance text-5xl font-stix font-regular tracking-tight leading-[1] text-gray-900 sm:text-5xl">
          Free as it is
        </h1>
      </div>
      <p className="mt-4 text-pretty font-inter text-md-custom font-medium text-gray-500 sm:text-xl/8">
        You are allowed to contact for any additional changes
      </p>

      <div
        id="contact"
        className="inline-block px-10 py-2 rounded-md text-lg mt-20 mb-16"
        style={{
          backgroundColor: "#d1d4e0",
          color: "#292d3d",
        }}
      >
        CONTACT US
      </div>

      <div className="text-center">
        <h1 className="text-balance text-5xl font-stix font-regular tracking-tight leading-[1] text-gray-900 sm:text-5xl">
          For more jobs like this and support <br />
          feel free to contact us
          <br />
          on
        </h1>
      </div>
      <p className="mt-4 mb-8 text-pretty font-inter text-md-custom font-medium text-gray-500 sm:text-xl/8">
        Email : passionrun2021@gmail.com
        <br />
        Whatsapp : +254725018807
      </p>

      {/* home div ends here */}

      <BackToTop />
    </div>
  );
}

export default App;
