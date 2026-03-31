import { Button } from "../components/ui/button";
import StatCards from "../components/StatCards";
import DashboardReservationsCard from "../components/DashboardReservationsCard";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CalendarCard from "@/components/CalendarCard";

const Dashboard = () => {
    const navigate = useNavigate();

    const reservations = [
        { id: 1, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente" },
        { id: 2, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée" },
        { id: 3, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée" },
        { id: 4, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée" },
        { id: 5, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente" },
        { id: 6, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée" },
        { id: 7, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée" },
        { id: 8, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée" },
    ];

        const getStatusVariant = (status: string) => {
            switch (status) {
                case "En attente":
                    return "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20 rounded";
                case "Confirmée":
                    return "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20 rounded";
                case "Annulée":
                    return "bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20 rounded";
                default:
                    return "bg-slate-500/10 text-slate-500 hover:bg-slate-500/20 border-slate-500/20 rounded";
            }
        }

        return (
            <>
                <div className="pl-5 pr-12 py-5">
                    <div className="md:flex text-center md:text-left justify-between items-center mt-5 mb-5 md:mb-10">
                        <h1 className="text-xl lg:text-2xl">Tableau de bord</h1>
                        <Button variant={"mybutton"}>Ajouter une réservation</Button>
                    </div>

                    <StatCards />

                    <div className="bg-white rounded-lg py-5 px-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
                        <div>
                            <Button onClick={() => navigate("/admin/availability")}
                                className="flex items-center hover:text-[#1E3A8A] mb-5">
                                <p>Voir les disponibilités</p>
                                <ArrowRight size={16} />
                            </Button>
                            <CalendarCard />
                        </div>
                        <div>
                            <Button onClick={() => navigate("/admin/reservations")}
                                className="flex items-center hover:text-[#1E3A8A] mb-5">
                                <p>Voir toutes les réservations</p>
                                <ArrowRight size={16} />
                            </Button>
                            <DashboardReservationsCard reservations={reservations} variantStatus={getStatusVariant} />
                        </div>
                    </div>
                </div>

            </>
        )
    }
    export default Dashboard;