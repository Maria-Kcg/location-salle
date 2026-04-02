import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import type { Reservation } from "../types";
import { useState } from 'react';
import ReservationsForm from './ReservationsForm';

type Props = {
    reservations: Reservation[];
    setReservations: React.Dispatch<React.SetStateAction<Reservation[]>>;
};


const CalendarCard = ({ reservations, setReservations }: Props) => {
    const events = reservations
        .filter((res) => res.start && res.end)
        .map((res) => ({
            id: res.id.toString(),
            title: res.name,
            start: res.start,
            end: res.end,
            backgroundColor: res.backgroundColor || "#3E6FA3",
            borderColor: res.borderColor || "#3E6FA3",
            textColor: res.textColor || "#ffffff",
        }));

    const [eventsList, setEventsList] = useState(events);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const handleAddEvent = (newEvent) => {
        setEventsList([...eventsList, newEvent]);
    };



    return (
        <>

            <div className='grid grid-cols-2 gap-10'>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    slotMinTime="08:00:00"
                    slotMaxTime="19:00:00"
                    locale="fr"
                    height="auto"
                    events={eventsList}

                    headerToolbar={{
                        left: "prev,next",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}

                    buttonText={{
                        today: "Aujourd’hui",
                        month: "Mois",
                        week: "Semaine",
                        day: "Jour",
                    }}

                    dateClick={(info) => {
                        setSelectedDate(info.dateStr)
                    }}
                />

                {selectedDate && (
                    <ReservationsForm selectedDate={selectedDate} onAdd={handleAddEvent} />
                )}

            </div>
        </>
    )
}
export default CalendarCard;