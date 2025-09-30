import type { RentalItem } from "../types/rental.types";

export async function getRentals(): Promise<RentalItem[]> {
    const url: string = "/data/rentals.json";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur : ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error((error as Error).message);
        return [];
    }
}