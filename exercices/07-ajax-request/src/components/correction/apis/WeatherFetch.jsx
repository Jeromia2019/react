import React from 'react';
import { useWeatherAjax } from '../hooks/meteo-hook';
import Spinner from '../loading/Spinner';

function WeatherFetch({ city }) {
  const [data, error, isLoading] = useWeatherAjax(city);

  return (
    <div>
        { isLoading && (
            <Spinner />
        )}
         {/* : error ? (
            <p>error !</p>
        ) :  data && (
            <code>{ JSON.stringify(data) }</code>
        ) } */}
    </div>
  );
}

export default WeatherFetch;
