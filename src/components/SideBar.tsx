import { Menu, Home, Calendar, Clock, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const navItems = [
    { title: "Dashboerd", path: "dashboard", icon: Home },
    { title: "Réservations", path: "reservations", icon: Calendar },
    { title: "Disponibilités", path: "availability", icon: Clock },
    { title: "Paramètres", path: "settings", icon: Settings },
  ];

  return (
    <>
      <div className="max-w-60 h-full bg-white min-h-screen">
        {/*Header */}
        <div className="bg-[#1E3A8A] p-3 h-12">
          <Menu color={"#ffffff"} />
        </div>

        {/* Navigation */}
        <nav className="">
          {
            navItems.map((item) => (
              <NavLink key={item.path} to={item.path}
                className="flex gap-2 items-center px-3 py-5 border-b-2 border-[#F8FAFC] text-[#64748B]"
              >
                <item.icon/>
                <span>{item.title}</span>
              </NavLink>
            ))
          }
        </nav>
      </div>
    </>
  )
}

export default SideBar;