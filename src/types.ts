
export type Reservation = {
    id: number;
    name: string;
    date: string;
    code: string;
    status: string;
    hour?: string;
    start?: string;
    end?: string;
    borderColor?: string;
    textColor?: string;
    backgroundColor?: string;
};