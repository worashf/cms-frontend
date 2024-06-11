import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
  
      {/* Main Content Section */}
      <main className="flex flex-grow flex-col  py-5  px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-600">
              ወደ ቅሬታ ማቅረቢያ መግቢያ እንኳን ደህና መጡ
            </h2>
            <p className="mt-2 text-center text-base text-gray-700">
              በአገልግሎታችን ላይ ያለዎትን ማንኛውም ቅሬታ የሚከተለው ማስፈንጠሪያ በመጫን ወደ ቅሬታ ማቅረቢያ ቅጹ
              ይግቡ
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/auth/compliance-form"
              className="border-transparent flex w-full items-center justify-center rounded-md border bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 md:py-3 md:px-4 md:text-lg"
            >
              Go to Compliance Form
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="text-md text-gray-800">
              <p>
              አለተመዘገቡም?{" "}
                <Link
                  to="/auth/sign-up"
                  className="font-medium text-md text-blue-600 hover:text-blue-500"
                >
                    አካውንት ይፍጠሩ
                </Link>
              </p>
              <p>
              አካውንት አለዎት, እባክዎትን?{" "}
                <Link
                  to="/auth/sign-in"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                        ይግቡ
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;