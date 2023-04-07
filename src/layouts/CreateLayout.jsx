import React from "react";

import Sidebar from "../components/Sidebar";
import DashboardTopBar from "../components/DashboardTopBar";

export default function CreateLayout({ children }) {
    return (
        <>
            <DashboardTopBar />
            <Sidebar />
            <main className=" lg:pl-64 bg-slate-200 ">
                <div className=" ">
                    {children}
                </div>
            </main >
        </>
    )
}