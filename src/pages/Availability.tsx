import { Button } from "@/components/ui/button";
import CalendarCard from "@/components/CalendarCard";
import { useState } from "react";

const Availability = () => {
    const [reservations, setReservations] = useState<Reservation[]>([
        {
            id: 1, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente", start: '2026-03-31T10:00:00', end: '2026-03-31T11:30:00',
            borderColor: '#1e3a8a', textColor: '#ffffff', backgroundColor: '#1e3a8a',
        },
        {
            id: 2, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée", start: '2026-03-31T14:00:00', end: '2026-03-31T15:00:00',
            backgroundColor: '#10b981', borderColor: '#10b981'
        },
        { id: 3, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée" },
        { id: 4, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée" },
        { id: 5, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente" },
        { id: 6, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée" },
        { id: 7, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée" },
        { id: 8, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée" },
    ]);

    return (
        <>

            <div className="pl-5 pr-12 py-5">
                <div className="md:flex text-center md:text-left justify-between items-center mt-5 mb-5 md:mb-10">
                    <h1 className="text-xl lg:text-2xl">Disponibilités</h1>
                    <Button variant={"mybutton"}>Ajouter une réservation</Button>
                </div>

                <div className="bg-white rounded-lg p-10 ">
                    <CalendarCard reservations={reservations} setReservations={setReservations} />
                </div>

            </div>
        </>
    )
}
export default Availability;