function weatherdata() {
  let cityname = document.getElementById("city").value;
  axios.get(
      `https://api.weatherapi.com/v1/current.json?key=a85da595063441e8a0493204250111 &q=${cityname}`
    )
    .then(function (response) {
        console.log(response)
      let apidata = response.data;
      let weatherdata = ` 
      <div class="topsection">
        <img src="https:${apidata.current.condition.icon}" alt="" />
        <h1>${apidata.current.condition.text} (${apidata.current.temp_c}C°)</h1>
      </div>
      <div>
        <p>LOCATION: <b> "${apidata.location.name},${apidata.location.region},${apidata.location.country}"</p>
        <p>HUMIDITY: <b> ${apidata.current.humidity}</p>
        <p>FEEL LIKE: <b> ${apidata.current.feelslike_c}C°</p>
        <p>WIND KPH: <b> ${apidata.current.wind_kph}</p>
      </div>`
      document.querySelector(".weatherresult").innerHTML=weatherdata;
    })
    .catch(function (error) {
      alert(error);
    });
}
