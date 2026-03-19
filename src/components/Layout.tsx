import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Bell } from "lucide-react";

const Layout = () => {
    return (
        <>
            <div className="flex">
                <aside className="shrink-0">
                    <SideBar />
                </aside>
                <div className="flex-1">
                    <header>
                        <div className="bg-white h-12 flex justify-end pr-12">
                            <div className="flex items-center gap-4">
                                <button className="p-2 text-slate-400 hover:text-blue-600"><Bell /></button>
                                <div className="flex items-center gap-2 border-l pl-4 ">
                                    <span className="text-sm font-medium">Admin</span>
                                    <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center">A</div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout;