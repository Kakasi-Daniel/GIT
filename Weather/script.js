document.querySelector('button').onclick = e => {

  fetch('https://api.weatherbit.io/v2.0/current?city=Apahida,RO&key=b700f4c267a94e5fba433b7d38a0a7e9')
  .then(res => res.json())
  .then(data => {
    console.log(data.data[0]);
    document.querySelector('div').innerHTML = data.data[0].city_name;
    document.querySelector('div').nextElementSibling.innerHTML = data.data[0].app_temp + ' C˚';
    document.querySelector('div').nextElementSibling.nextElementSibling.innerHTML = data.data[0].weather.description;
    document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = data.data[0].precip + " % precip";
    document.querySelector('div').nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = data.data[0].wind_spd + " km/h wind speed";
  });

}