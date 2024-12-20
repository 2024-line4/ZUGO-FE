"use client";

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import style from "../[dormitory_name]/dormitoryName.module.scss";
import { getGeoCode } from "../_lib/GeoCode";
import { getNearby } from "../_lib/getNearby";

type Props = {
  address: string;
};

export default function Map({
  address,
  //@ts-ignore
  setNearby,
  //@ts-ignore
  setFormmetedLocation,
}: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function initMap(): Promise<void> {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const geoData = await getGeoCode(address);
      const location = geoData.results[0]?.geometry.location || {
        lat: 37.5503,
        lng: 126.9971,
      };

      const [nearSchools, near] = await getNearby(
        geoData.results[0]?.geometry.location.lat,
        geoData.results[0]?.geometry.location.lng,
      );

      //@ts-ignore
      setFormmetedLocation(geoData.results[0].formatted_address);
      setNearby({
        school: nearSchools,
        near: near,
      });

      const options: google.maps.MapOptions = {
        center: location,
        zoom: 15,
        mapId: "NEXT_MAPS_TUTS",
      };

      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker",
      )) as any;

      const map = new Map(mapRef.current as HTMLDivElement, options);

      new AdvancedMarkerElement({
        position: location,
        map: map,
        title: "Your Location",
      });
    }

    initMap();
  }, []);

  return <div className={style.map} ref={mapRef} />;
}
