import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import type { Value } from "react-calendar/dist/shared/types.js";
import "../style/Calendar.css"
import { useNavigate } from "react-router-dom";

const DashboardCalendarCard = () => {
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState<string | null>(null)
    const navigate = useNavigate()

    const slots = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20h:00"];

    const handleChangeDate = (value: Value) => {
        if (value instanceof Date) {
            setDate(value);
            setHour(null);
        }
        const stringDate = date.toISOString().split('T')[0];
        const destination = `/reservations?date=${stringDate}`;
        navigate(destination);
    }

    return (
        <>
            <Calendar value={date} onChange={handleChangeDate} locale="fr-FR" />
        </>
    )
}

export default DashboardCalendarCard;