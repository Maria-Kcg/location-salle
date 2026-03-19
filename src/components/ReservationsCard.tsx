import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"

const ReservationsCard = () => {
    const reservations = [
        { id: 1, name: "Manassé", date: "15-04-2026", code: "A45B", status: "En attente" },
        { id: 2, name: "Jolydia", date: "23-04-2026", code: "A44D", status: "Confirmée" },
        { id: 3, name: "Grâce", date: "01-05-2026", code: "AA8B", status: "Annulée" },
        { id: 4, name: "Moudji", date: "11-06-2026", code: "CD8B", status: "Passée" },
    ];

    return (
        <>
            <Table className="  ">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Nom</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Code</TableHead>
                        <TableHead>Statut</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        reservations.map((reservation) => (
                            <TableRow>
                                <TableCell className="font-medium">{reservation.name}</TableCell>
                                <TableCell>{reservation.date}</TableCell>
                                <TableCell>{reservation.code}</TableCell>
                                <TableCell>{reservation.status}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default ReservationsCard