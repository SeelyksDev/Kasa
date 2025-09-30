import type { RentalItem } from "../types/rental.types";

let rentalsCache:  Promise<RentalItem[]> | undefined = undefined;

export async function getCachedRentals(getRentals: () => Promise<RentalItem[]>): Promise<RentalItem[]>  {
  if (!rentalsCache) {
    rentalsCache = getRentals();
  }
  return rentalsCache;
}