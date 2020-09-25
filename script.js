fetch('http://api.openweathermap.org/data/2.5/weather?q=Ranchi&appid=18e042e50f50e20c51a2c72f8289758d')
.then(data=>{return data.json()})
.then(data1=>console.log(data1));