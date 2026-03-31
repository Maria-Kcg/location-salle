import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button";
import type { Reservation } from "../types";
import { Info, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Props = {
    reservations: Reservation[];
    variantStatus: (status: string) => string;
    filter:  Reservation[]
};

const ReservationsCard = ({ reservations, variantStatus, filter }: Props) => {

    //pagination du tableau
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastitem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastitem - itemsPerPage;
    const currentItems = filter.slice(indexOfFirstItem, indexOfLastitem);
    const totalPages = Math.ceil(filter.length / itemsPerPage)

    return (
        <>
            <div className="border border-gray-400 rounded-lg overflow-hidden">
                <Table className=" ">
                    <TableHeader className="bg-[#F8FAFC]">
                        <TableRow className="border-gray-400">
                            <TableHead className="">Nom</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Heure</TableHead>
                            <TableHead>Code</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            currentItems.map((reservation) => (
                                <TableRow key={reservation.id} className="border-gray-400">
                                    <TableCell className="font-medium ">{reservation.name}</TableCell>
                                    <TableCell>{reservation.date}</TableCell>
                                    <TableCell>{reservation.hour}</TableCell>
                                    <TableCell>{reservation.code}</TableCell>
                                    <TableCell>
                                        <Badge className={variantStatus(reservation.status)}>{reservation.status}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Button className="text-slate-500"><Info /></Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-center mt-5">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}
                    className="rounded hover:bg-gray-100">
                    <ChevronLeft />
                </button>

                {
                    Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button key={number} onClick={() => setCurrentPage(number)}
                            className={`px-2 rounded border mr-2 ${number === currentPage
                                ? "bg-[#1E3A8A] text-white border[#1E3A8A]"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}>
                            {number}
                        </button>
                    ))
                }

                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}
                    className="rounded hover:bg-gray-100">
                    <ChevronRight />
                </button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-2">
                Affichage de {indexOfFirstItem + 1} à {Math.min(indexOfLastitem, reservations.length)} sur {reservations.length} réservations
            </p>
        </>
    )
}

export default ReservationsCard;