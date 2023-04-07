import React from "react";
import { BsBook } from "react-icons/bs"
import { BsGlobe } from "react-icons/bs"

export default function HeroLayouts() {
    const heroItems = [
        {
            title: "Next Auth",
            subTitle: "React",
            appCount: 2,
            url: "/next-auth"
        },
        {
            title: "Nuxt Auth",
            subTitle: "Vue",
            appCount: 3,
            url: "/nuxt-auth"
        },
        {
            title: "Ng Recipe",
            subTitle: "Angular",
            appCount: 1,
            url: "/ng-recipe"
        },


    ]
    return (
        <section className="w-full  bg-pink-50">
            <div className="md:container mx-auto  py-20 px-6 lg:px-16">
                <h1 className="text-4xl text-pink-700 capitalize mb-4  font-semibold ">Your Projects</h1>
                <p className="text-slate-500 mb-8  text-xl">Take advantage of the Appwrite APIs and tools.</p>
                <div className="flex items-center gap-6 text-pink-700 font-medium mb-16">
                    <span className="flex items-center gap-2"><BsBook /><a href="#">Docs</a></span>
                    <span className="flex items-center gap-2"><BsGlobe /><a href="#">Support</a></span>
                </div>
                <div className="w-full md:grid-cols-3 place-items-center grid gap-8 md:gap-16 pb-16  ">

                    {
                        heroItems.map((data, dataIdx) => {
                            return (
                                <div className="flex flex-col bg-white  shadow-sm rounded-xl p-4 md:p-6 w-full hover:ring-pink-600 hover:ring transition-all cursor-pointer " key={dataIdx}>
                                    <h3 className="text-lg font-bold text-sky-800 capitalize pb-4">
                                        {data?.title}
                                    </h3>
                                    <p className="mt-1 text-xs font-medium uppercase text-gray-500 ">
                                        {data?.subTitle}
                                    </p>
                                    <p className="mt-2 text-gray-400 pb-6">
                                        {data?.appCount}
                                    </p>
                                    <a className=" inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700" href="#">

                                        <svg className="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
                <a href="/create" className="bg-pink-700 text-white capitalize py-2 px-4 rounded-3xl text-xl font-thin text-center shadow-sm hover:border-pink-700 hover:border overflow-hidden hover:bg-white hover:text-pink-700 transition-all">create project</a>
            </div>
        </section>
    )
}