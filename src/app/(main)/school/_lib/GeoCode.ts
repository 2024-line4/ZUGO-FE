type GeoCodeResponse = {
  results: {
    geometry: {
      location: google.maps.LatLngLiteral;
    };
  }[];
};

export async function getGeoCode(address: string): Promise<GeoCodeResponse> {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("HTTP ERROR");
  }

  return response.json();
}
