"use client";

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import style from "../[dormitory_name]/dormitoryName.module.scss";
import { getGeoCode } from "../../school/_lib/GeoCode";

type Props = {
  address: string;
};

export default function Map({ address }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function initMap(): Promise<void> {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      // `await`을 추가하여 실제 값을 가져옵니다.
      const geoData = await getGeoCode(address);
      const location = geoData.results[0].geometry.location; // 이제 정상적으로 접근 가능

      const options: google.maps.MapOptions = {
        center: location,
        zoom: 18,
        mapId: "NEXT_MAPS_TUTS",
      };

      const map = new Map(mapRef.current as HTMLDivElement, options);
    }

    initMap();
  }, []);

  return <div className={style.map} ref={mapRef} />;
}
