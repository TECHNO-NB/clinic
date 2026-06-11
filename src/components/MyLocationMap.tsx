// @ts-nocheck
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function LocationMap() {
  const position = [27.700769, 85.300140]; // Example: Kathmandu

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      <Marker position={position}>
        <Popup>Our Location</Popup>
      </Marker>
    </MapContainer>
  );
}