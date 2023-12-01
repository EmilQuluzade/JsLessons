var selectCity = document.getElementById('selectCity')
var selectMonth = document.getElementById('selectMonth')
var showTime = document.getElementById('showtime')
showtime.addEventListener("click", function(){
    if (selectCity.value!=="" && selectMonth.value!=="") {
        
    
    fetch(`https://api.aladhan.com/v1/calendarByCity/2023/${selectMonth.value}?city=${selectCity.value}&country=Azerbaijan&method=2`)
                .then(response => response.json())
                .then(json => {
                    var result="";
                    document.querySelector("table tbody").innerHTML="";
                    
                    json.data.forEach(element => {
                        console.log(element.date.readable)
                        result+=  `
                        <tr>
                    <th scope="row">${element.date.readable}</th>
                    <td>${element.timings.Fajr}</td>
                    <td>${element.timings.Sunrise}</td>
                    <td>${element.timings.Dhuhr}</td>
                    <td>${element.timings.Asr}</td>
                    <td>${element.timings.Sunset}</td>
                    <td>${element.timings.Maghrib}</td>
                    <td>${element.timings.Isha}</td>
                    <td>${element.timings.Imsak}</td>
                    <td>${element.timings.Midnight}</td>
                    <td>${element.timings.Firstthird}</td>
                    <td>${element.timings.Lastthird}</td>
                  </tr>
                        `
                     });
                      document.querySelector("table tbody").innerHTML= result
                } )
            }
            else
            {
                if (selectMonth.value==="" && selectCity.value==="") {
                    alert("Choose city and month to display Prayer times")
                }
                else if (selectCity.value==="") {
                    alert("Choose city to display Prayer times")
                }else if (selectMonth.value==="") {
                    alert("Choose month to display Prayer times")
                }
            }
})