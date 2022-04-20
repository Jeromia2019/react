const MeteoDisplay = (
  { id, city, country, weather, temperature, iconUrl, updateDate },
  { onCallRefresh }
) => (
  <div>
    <h2>
      {city} [{country}]
    </h2>
    <p>
      Il fait {temperature}°c. le temps est "{weather}"
    </p>
    <p>{updateDate.toLocaleString()}</p>
    <img src={iconUrl} alt={'Icone ' + weather} />
    <button onClick={() => onCallRefresh(id)}>Actualiser</button>
  </div>
);

export default MeteoDisplay;
