
export interface Issue {
    id:number;
    title: string;
    description: string;
    status: "OPEN" | "IN_PROGRESS" | "CLOSED";
    createdAt: Date;
    updatedAt: Date;
}

export type Status = "OPEN" | "IN_PROGRESS" | "CLOSED";