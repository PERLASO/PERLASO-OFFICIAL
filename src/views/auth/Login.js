import React from "react";

export default function Login() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h1 className="text-blueGray-500 text-lg font-bold">
                    Who we are
                  </h1>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
