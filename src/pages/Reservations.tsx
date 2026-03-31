import { Button } from "@/components/ui/button";
import ReservationsCard from "@/components/ReservationsCard";
import { useState } from "react";


const Reservations = () => {
    const reservations = [
        { id: 1, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente", hour: "16:30" },
        { id: 2, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée", hour: "16:30" },
        { id: 3, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée", hour: "16:30" },
        { id: 4, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée", hour: "16:30" },
        { id: 5, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente", hour: "16:30" },
        { id: 6, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée", hour: "16:30" },
        { id: 7, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée", hour: "16:30" },
        { id: 8, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée", hour: "07:00" },
        { id: 9, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente", hour: "07:00" },
        { id: 10, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée", hour: "07:00" },
        { id: 11, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée", hour: "07:00" },
        { id: 12, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée", hour: "07:00" },
        { id: 13, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente", hour: "07:00" },
        { id: 14, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée", hour: "07:00" },
        { id: 15, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée", hour: "07:00" },
        { id: 16, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée", hour: "07:00" },
        { id: 17, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente", hour: "07:00" },
        { id: 18, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée", hour: "07:00" },
        { id: 19, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée", hour: "07:00" },
        { id: 20, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée", hour: "07:00" },
        { id: 21, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente", hour: "07:00" },
        { id: 22, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée", hour: "07:00" },
        { id: 23, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée", hour: "07:00" },
        { id: 24, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée", hour: "16:30" },
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


    //filtre
    const [filterName, setFilterName] = useState("");
    const [filterDate, setFilterDate] = useState("");
    const [filterHour, setFilterHour] = useState("");
    const [filterStatus, setFilterStatus] = useState("");

    const filteredReservations = reservations.filter((reservation) => {
        return (
            reservation.name.toLowerCase().includes(filterName.toLowerCase()) &&
            (filterDate === "" || reservation.date === filterDate) &&
            (filterHour === "" || reservation.hour === filterHour) &&
            (filterStatus === "" || reservation.status === filterStatus)
        );
    });

    return (
        <>
            <div className="pl-5 pr-12 py-5">
                <div className="md:flex text-center md:text-left justify-between items-center mt-5 mb-5 md:mb-10">
                    <h1 className="text-xl lg:text-2xl">Réservations</h1>
                    <Button variant={"mybutton"}>Ajouter une réservation</Button>
                </div>

                <div className="bg-white rounded-lg p-10">
                    <div className="flex gap-5">
                        <p className="text-lg font-medium">Filtres</p>
                        <div className="flex flex-wrap mb-4 gap-10 items-center">
                            <input type="text" placeholder="Filtrer par nom" value={filterName} onChange={(e) => setFilterName(e.target.value)}
                                className="border rounded px-2 py-1"
                            />
                            <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)}
                                className="border rounded px-2 py-1"
                            />
                            <input type="time" value={filterHour} onChange={(e) => setFilterHour(e.target.value)}
                                className="border rounded px-2 py-1"
                            />
                            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
                                className="border rounded px-2 py-1"   >
                                <option value="">Tous les statuts</option>
                                <option value="Confirmée">Confirmée</option>
                                <option value="Annulée">Annulée</option>
                                <option value="En attente">En attente</option>
                                <option value="Passée">Passée</option>
                            </select>
                        </div>
                    </div>

                    <ReservationsCard reservations={reservations} variantStatus={getStatusVariant} filter={filteredReservations} />
                </div>

            </div>
        </>
    )
}

export default Reservations;