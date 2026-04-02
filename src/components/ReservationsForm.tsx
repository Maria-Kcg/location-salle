import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

const ReservationsForm = ({ selectedDate }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const newEvent = {
            id: Date.now().toString(),
            title: data.name,
            start: new Date(`${data.date}T${data.start}`),
            end: new Date(`${data.date}T${data.start}`),
        };

        onAdd(newEvent);

        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-5 rounded-lg mt-4 space-y-3" >
            <h3 className="font-semibold text-lg">Nouvelle réservation</h3>

            <div>
                <input
                    type="text"
                    placeholder="Nom complet"
                    className="border p-2 w-full rounded"
                    {...register("name", { required: true })}
                />
                {errors.name && <p className="text-red-500 text-sm">Veuillez entrer votre nom (au moins 3 caractères)</p>}
            </div>

            <div>
                <input type="date" defaultValue={selectedDate} className="border p-2 w-full rounded"
                    {...register("date", { required: true })}
                />
                {errors.date && <p className="text-red-500 text-sm">Veuillez entrer la date</p>}
            </div>

            <div>
                <input type="time" className="border p-2 w-full rounded"
                    {...register("start", { required: true })}
                />
                {errors.start && <p className="text-red-500 text-sm">Veuillez entrer l'heure de début</p>}
            </div>

            <div>
                <input type="number" step="0.5" placeholder="Durée (Ex: 1.5 pour 1h30)" className="border p-2 w-full rounded"
                    {...register("duration", { required: true, min: 1 })}
                />
                {errors.duration && (
                    <p className="text-red-500 text-sm">Veuillez entrer la durée</p>
                )}
            </div>

            <div>
                <input type="number" placeholder="Nombre d'occupants" className="border p-2 w-full rounded"
                    {...register("people", { required: true, min: 1 })}
                />
                {errors.people && (
                    <p className="text-red-500 text-sm">Veuillez entrer le nombre d'occupants</p>
                )}
            </div>

            <div>
                <input type="tel" placeholder="Numéro de téléphone" className="border p-2 w-full rounded"
                    {...register("phone", { required: true })}
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm">Veuillez entrer votre numéro de téléphone</p>
                )}
            </div>

            <Button variant="mybutton" className=" px-4 py-5 w-full">
                Ajouter la réservation
            </Button>
        </form>
    );
};

export default ReservationsForm;