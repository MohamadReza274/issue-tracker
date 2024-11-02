
export interface Issue {
    title: string;
    description: string;
    status: "OPEN" | "ON_PROGRESS" | "CLOSED";
}