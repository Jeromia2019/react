import React from 'react';
import { useWeatherAjax } from '../hooks/meteo-hook';
import Spinner from '../loading/Spinner';
import MeteoDisplay from '../displays/MeteoDisplay';
import ErrorDisplay from '../displays/ErrorDisplay';

function WeatherFetch({ city }) {
  const [data, error, isLoading, reload] = useWeatherAjax(city);

  const handleRefresh = () => {
    reload();
  }
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage='Ville non trouvée' />
      ) : (
        data && <MeteoDisplay {...data} onCallRefresh={handleRefresh} />
      )}
    </div>
  );
}

export default WeatherFetch;
