export async function getRentals() {
    const url = "/data/rentals.json";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur : ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error((error as Error).message);
    }
}