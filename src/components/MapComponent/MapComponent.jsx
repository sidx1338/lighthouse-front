import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './MapComponent.scss';

const MapComponent = () => {
    const mapState = { center: [44.96117307460871, 34.11820299999991], zoom: 12 }; // Координаты и масштаб карты
    const markGeometries = [
        [44.96117307460871, 34.11820299999991], // Координаты для первой метки
        [44.93124707458278, 34.071185499999984], // Координаты для второй метки
        [44.96461057459199, 34.14171199999999]  // Координаты для третьей метки
    ];

    return (
        <YMaps query={{apikey: '7c5e173a-adf5-4c78-bfc8-299877a77056'}}>
            <div className="map">
                <Map className="yandex-map" state={mapState}>
                    {markGeometries.map((geometry, index) => (
                        <Placemark key={index} geometry={geometry} />
                    ))}
                </Map>
            </div>
        </YMaps>
    );
};

export default MapComponent;
