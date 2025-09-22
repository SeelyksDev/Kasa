let rentalsCache = null;

export async function getCachedRentals(getRentals) {
  if (!rentalsCache) {
    rentalsCache = await getRentals();
  }
  return rentalsCache;
}