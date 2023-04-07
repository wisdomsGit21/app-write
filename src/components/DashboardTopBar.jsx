import React from "react";
import { BsPlusCircleFill } from "react-icons/bs"

export default function DashboardTopBar() {
    return (
        <>
            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 border-b border-slate-200 ">
                <nav className="max-w-[97%] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div className="flex lg:pl-72 gap-4 items-center  justify-between">

                        <select className="py-3 px-4 pr-9 block w-64 border-slate-200 bg-slate-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500  outline-none ">
                            <option defaultValue>Medications dashboard</option>
                            <option>Analytic dashboard</option>
                            <option>Navigational dashboard</option>
                            <option>Eloquent dashboard</option>
                        </select>

                        <button><BsPlusCircleFill className="text-pink-600 w-8 h-8" /></button>
                        <div className="sm:hidden">

                            <div className="flex items-center  gap-5 mt-3 ">
                                <a className="font-medium text-gray-600 hover:text-gray-400 " href="#">TERi</a>
                                <img className="inline-block h-[2.375rem] rounded-full ring-2 ring-white " src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                            </div>
                        </div>
                    </div>
                    <div id="navbar-image-and-text-1" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 px-6 py-1">
                            <a className="font-medium text-gray-600 hover:text-gray-400 " href="#">TERi</a>
                            <img className="inline-block h-[2.375rem] rounded-full ring-2  ring-white " src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}