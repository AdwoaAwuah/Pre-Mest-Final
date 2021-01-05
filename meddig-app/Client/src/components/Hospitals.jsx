import React from 'react';
import './Hospital.css';
import "./assessments.css"
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


const HospitalsPage =()=> {
    
    
        mapboxgl.accessToken = 'pk.eyJ1IjoidGhlaGVhbHRoYXBwIiwiYSI6ImNrajNlN3ZjbjVmNmkydnFqY2xodWdkdDQifQ.9r8D8DCmGAQwmefaYj0lyw'

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
            
        }

        const showPosition = (position) => {
            let userLat = position.coords.latitude.toFixed(2);
            let userLon = position.coords.longitude.toFixed(2);
            console.log(userLat, userLon)

            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [userLon, userLat],
                zoom: 8
            });

            map.addControl(
                new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
                })
                );
        }
        getLocation()
    



    
        return (
            <>
                <div className="col">
                    <h3 >Search for Health Centers and Hospitals here</h3>
                    <div id='map'></div>
                </div>
            </>
        )
    
}
export default HospitalsPage;