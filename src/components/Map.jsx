import { useContext, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { AppContext } from "../App";

import "mapbox-gl/dist/mapbox-gl.css";

import COUNTRIES from "../assets/geojson";
import COUNTRY_COLORS_PALETTE from "../assets/ColorsPalette";
import { customLabelsFill } from "../assets/SelectorCustomLabels";
import { countryToCode } from "../assets/SelectorCustomLabels";
import { calculateExchangePercentageChange } from "../helpers"

import "../App.css"

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXGL_ACCESS_TOKEN



function HoverEffectMap() {
    const { rates, yesterdayRates,
        selectedBaseCurrency,
        trigger, setMapClickTrigger, setSelectedQuoteCurrency,
    } = useContext(AppContext);


    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style:
                "mapbox://styles/mapbox/streets-v12",
            //London coordinates
            center: [0.1276, 51.5072],
            zoom: 2.75,
            projection: "globe",
            attributionControl: false
        });``

        map.addControl(new mapboxgl.AttributionControl({
            customAttribution: import.meta.env.VITE_CUSTOM_ATTRIBUTION
        }));

        map.on("load", () => {
            map.addSource("states", {
                type: "geojson",
                data: COUNTRIES,
            });



            map.addLayer({
                id: "state-fills",
                type: "fill",
                source: "states",
                layout: {},
                paint: {
                    "fill-color": COUNTRY_COLORS_PALETTE,
                    "fill-opacity": [
                        "case",
                        ["boolean", ["feature-state", "hover"], false],
                        1,
                        0.5,
                    ],
                },
            });

            map.addLayer({
                id: "state-borders",
                type: "line",
                source: "states",
                layout: {},
                paint: {
                    "line-color": "rgba(97, 48, 47, 0.4)",
                    "line-width": 1,
                },
            });

            // Add a popup to show information when a country is clicked
            map.on("click", "state-fills", (e) => {
                const selectedCountry = e.features[0].properties.name;
                const baseCurrencyCode = customLabelsFill[selectedBaseCurrency]?.primary;
                const quoteCurrencyCode = customLabelsFill[countryToCode[selectedCountry]]?.primary;
                const usdToQuote = rates.rates[quoteCurrencyCode]
                const baseToUsd = rates.rates[baseCurrencyCode]
                const baseToQuoteExchangeRate = usdToQuote / baseToUsd

                const yesterdayUsdToCode = yesterdayRates.rates[quoteCurrencyCode]
                const yesterdayBaseToUsd = yesterdayRates.rates[baseCurrencyCode]
                const yesterdayBaseToQuoteExchangeRate = yesterdayUsdToCode / yesterdayBaseToUsd
                const computed = calculateExchangePercentageChange(yesterdayBaseToQuoteExchangeRate, baseToQuoteExchangeRate)
                const coordinates = e.lngLat;

                setSelectedQuoteCurrency(countryToCode[selectedCountry])
                setMapClickTrigger(prev => !prev)

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(`
                        <div id="popup">
                            <h1 class="header">${selectedCountry}</h1>
                            <div class="container">
                            <div class="ticker-currency"> 
                                <p class="base-quote">${baseCurrencyCode}/${quoteCurrencyCode}</p>
                                <p class="exchange-rate">${Math.round(baseToQuoteExchangeRate * 100) / 100}</p>
                            </div>
                            <div class="change-currency">
                                <p class="heading">24h change</p>
                                <p class="change-percentage-pill ${computed.sign}">
                                    <span class="tendency" id="arrow">${computed.sign === 'positive' ? '▴' : '▾'}</span>
                                    <span class="percentage">${computed.value === 0 ? '0.01' : computed.value}%</span>
                                </p>
                            </div>
                            </div>
                        </div>
                        `
                    )
                    .addTo(map);

            });

            // Change the cursor to a pointer when the mouse is over a country
            map.on("mouseenter", "state-fills", () => {
                map.getCanvas().style.cursor = "pointer";
            });

            // Change it back to the default when it's not
            map.on("mouseleave", "state-fills", () => {
                map.getCanvas().style.cursor = "";
            });
        });

        return () => map.remove();
    }, [rates, trigger]);

    return (
        <div
            id="map"
            style={{ height: "100vh", top: 0, bottom: 0, width: "100%" }}
        ></div>
    );
}

export default HoverEffectMap;
