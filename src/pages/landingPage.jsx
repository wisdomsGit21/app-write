import React from "react";
import Topbar from "../components/Topbar";
import HeroLayouts from "../layouts/HeroLayouts";

export default function LandingPage() {
    return (
        <main className="bg-slate-200 h-screen ">
            <Topbar />
            <HeroLayouts />
        </main>
    )
}