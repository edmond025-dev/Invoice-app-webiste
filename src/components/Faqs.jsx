import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";

const Faqs = () => {


     useEffect(() => {
    initFlowbite(); // Initialize Flowbite JS components
  }, []);

  return (
   <div>
  <div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-collapse-body-1"
      aria-expanded="true"
      aria-controls="accordion-collapse-body-1"
    >
      <span>How to Install</span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
  </h2>
  <div
    id="accordion-collapse-body-1"
    className="hidden"
    aria-labelledby="accordion-collapse-heading-1"
  >
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Click the download button zipped file is download into the downloads folder extract the zipped file
        you get get three folders open Setup folder and click on Invoice-it-setup it will start installing it may take some time be patient, then it will ask for license key which you will get in License Key file after successful installation by filing it the required details open the Fonts folder and double on the file named Roboto and
        on top you see the install button, on it to install and logout and start the application again and you are good to go
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Click on it to install{" "}
       
      </p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-collapse-body-2"
      aria-expanded="false"
      aria-controls="accordion-collapse-body-2"
    >
      <span>How to run</span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
  </h2>
  <div
    id="accordion-collapse-body-2"
    className="hidden"
    aria-labelledby="accordion-collapse-heading-2"
  >
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Find a shortcut named invoice-it with black sheet like icon, and click on after installation
        for the first time you will enter the license provided in the file you unzipped
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Enter the license and proceed to use the application for free.
      </p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-collapse-body-3"
      aria-expanded="false"
      aria-controls="accordion-collapse-body-3"
    >
      <span>How to add client</span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
  </h2>
  <div
    id="accordion-collapse-body-3"
    className="hidden"
    aria-labelledby="accordion-collapse-heading-3"
  >
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Click on the client button on the left side menu you will see add client button.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Fill in the required fields marked with * and proceed to save the details
      </p>
    </div>
  </div>

   <h2 id="accordion-collapse-heading-4">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-collapse-body-4"
      aria-expanded="false"
      aria-controls="accordion-collapse-body-4"
    >
      <span>How to add an invoice</span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
  </h2>
  <div
    id="accordion-collapse-body-4"
    className="hidden"
    aria-labelledby="accordion-collapse-heading-4"
  >
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Select invoice from the left menu then you will see button indicated create invoice click on the
        button select the client on the left side of the windows that has appear then proceed to fill other
        details and save will see the changes
      </p>
    </div>
  </div>



   <h2 id="accordion-collapse-heading-5">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-collapse-body-5"
      aria-expanded="false"
      aria-controls="accordion-collapse-body-5"
    >
      <span>How to change invoice header</span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
  </h2>
  <div
    id="accordion-collapse-body-5"
    className="hidden"
    aria-labelledby="accordion-collapse-heading-5"
  >
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Just click on the settings button on the top right corner of your app and proceed to verify the 
        details on setting and you can also add payment modes separated with OR in order to read correctly
        on the invoice
      </p>
    </div>
  </div>
  
     <h2 id="accordion-collapse-heading-6">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-collapse-body-6"
      aria-expanded="false"
      aria-controls="accordion-collapse-body-6"
    >
      <span>How to print reports</span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
  </h2>

   <div
    id="accordion-collapse-body-6"
    className="hidden"
    aria-labelledby="accordion-collapse-heading-6"
  >
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Click on report item on the left menu and from there you can click on any report you to see
        with the date filters you can print reports according to the dates you want.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Other functionality like invoice payment entries just work like entering invoice also expenses
        on invoice are also factored in.
      </p>
    </div>
  </div>

  <h2 id="accordion-collapse-heading-7">
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
      data-accordion-target="#accordion-collapse-body-7"
      aria-expanded="false"
      aria-controls="accordion-collapse-body-7"
    >
      <span>How to update invoice-it</span>
      <svg
        data-accordion-icon=""
        className="w-3 h-3 rotate-180 shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
  </h2>
  
    <div
    id="accordion-collapse-body-7"
    className="hidden"
    aria-labelledby="accordion-collapse-heading-7"
  >
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        To update you need to remove the existing invoice-it product via the add remove programs the application will prompt you that there is another product in existence and asks you to uninstall it
        do that before you proceed to re-install.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Once the first installation the database data will not be affected. So no data will change.
      </p>
    </div>
  </div>

</div>

</div>
  )
}

export default Faqs

