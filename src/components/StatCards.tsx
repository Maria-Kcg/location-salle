import { CalendarClock, CalendarCheck2, CalendarX2 } from "lucide-react";

const StatCards = () => {
    const cards = [
        { title: "En Attente", stat: 10, icon: CalendarClock, color: "text-orange-400" },
        { title: "Confirmées", stat: 10, icon: CalendarCheck2, color: "text-green-600" },
        { title: "Annulées", stat: 10, icon: CalendarX2, color: "text-red-600" },
        { title: "Passées", stat: 10, icon: CalendarCheck2, color: "text-green-600" },
    ]

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
                {cards.map((card) => (
                    <div key={card.title} className="bg-white p-3 rounded-lg">
                        <p className={`mb-( md:mb-7 ${card.color} font-medium md:text-lg`}>{card.title}</p>
                        <div className="flex justify-between items-center">
                            <p className="font-medium text-lg md:text-2xl">{card.stat}</p>
                            <span><card.icon color="#64748B" /></span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StatCards;