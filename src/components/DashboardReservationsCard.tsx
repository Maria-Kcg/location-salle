import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "./ui/table"
import { Badge } from "@/components/ui/badge"

import type { Reservation } from "../types";

type Props = {
    reservations: Reservation[];
    variantStatus: (status: string) => string;
};

const DashboardReservationsCard = ({ reservations, variantStatus}: Props) => {

    return (
        <>
            <div className="border border-gray-400 rounded-lg overflow-hidden">
                <Table className=" ">
                    <TableHeader className="bg-[#F8FAFC]">
                        <TableRow className="border-gray-400">
                            <TableHead className="">Nom</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Code</TableHead>
                            <TableHead>Statut</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            reservations.map((reservation) => (
                                <TableRow key={reservation.id} className="border-gray-400">
                                    <TableCell className="font-medium ">{reservation.name}</TableCell>
                                    <TableCell>{reservation.date}</TableCell>
                                    <TableCell>{reservation.code}</TableCell>
                                    <TableCell>
                                        <Badge className={variantStatus(reservation.status)}>{reservation.status}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default DashboardReservationsCard ;