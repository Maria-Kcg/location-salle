import { Button } from "../components/ui/button";
import StatCards from "../components/StatCards";
import ReservationsCard from "../components/ReservationsCard";

const Dashboard = () => {
    return (
        <>
            <div className="pl-5 pr-12 py-5">
                <div className="md:flex text-center md:text-left justify-between items-center mt-5 mb-5 md:mb-10">
                    <h1 className="text-xl lg:text-2xl">Tableau de bord</h1>
                    <Button variant={"mybutton"}>Faire une réservation</Button>
                </div>

                <StatCards />

                <div className="bg-white rounded-lg p-5 mt-10 grid gid-cols-& md:grid-cols-2">
                    <div></div>
                    <ReservationsCard />
                </div>
            </div>

        </>
    )
}
export default Dashboard;