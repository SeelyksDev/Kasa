import type { AboutDataItem } from "../types/aboutData.types";

export async function getDropdownsAbout(): Promise<AboutDataItem[] | undefined> {
    const url: string = "/data/about-data.json";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur : ${response.status}`);
        }

        const data: AboutDataItem[] = await response.json();
        return data;
    } catch (error) {
        console.error((error as Error).message);
    }
}
