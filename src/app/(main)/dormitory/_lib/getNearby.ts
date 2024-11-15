export async function getNearby(lat: number, lng: number) {
  const center = new google.maps.LatLng(lat, lng);
  const { Place, SearchNearbyRankPreference } =
    (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;

  const schoolRequest = {
    fields: ["displayName"],
    locationRestriction: {
      center: center,
      radius: 5000,
    },
    includedPrimaryTypes: ["school"],
    maxResultCount: 5,
    rankPreference: SearchNearbyRankPreference.POPULARITY,
    language: "ko",
  };

  const nearRequest = {
    fields: ["displayName"],
    locationRestriction: {
      center: center,
      radius: 1000,
    },
    includedPrimaryTypes: ["hospital", "library", "park", "museum"],
    maxResultCount: 5,
    rankPreference: SearchNearbyRankPreference.POPULARITY,
    language: "ko",
  };

  //@ts-ignore
  const [nearSchools, near] = await Promise.all([
    Place.searchNearby(schoolRequest),
    Place.searchNearby(nearRequest),
  ]);

  return [nearSchools, near];
}
