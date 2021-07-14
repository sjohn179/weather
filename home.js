

/*alert(`window.innerWidth: ${window.innerWidth}`);
alert(`window.innerHeight: ${window.innerHeight}`);*/

/*let random = document.querySelector(".random");

function getRandNum(min, max){
    let randNum = 0;

    while(randNum < min || randNum > max){
        randNum = Math.floor(Math.random() * max) + min;
    }

    return randNum;
}

random.innerHTML = getRandNum(6, 12);*/

/*INSERTING A LINK INTO HTML DIV USING JAVASCRIPT:

//assiging box variable to box HTML div class
let box = document.querySelector(".box");

//creating an anchor tag (link tag) to insert into box class
let newElement = document.createElement("a");

//adding (appending) text within the anchor tags (link text)
newElement.append("This is a a link!");

//adding the actual link to the anchor tags
newElement.setAttribute("href", "https://www.google.com");

//displaying the link and text in the box div by adding it to the div
box.append(newElement);
*/

/*
//MANIPULATE CSS USING JS DOM

//assign the HTML div box class "box" to a JS variable named "box"
let box = document.querySelector(".box");

//change the font color to orange
box.style.color = "rgb(255,144,0)";

//change the font size to 64px
box.style.fontSize = "64px";

//change text to "DOLPHINS"
box.innerHTML = "DOLPHINS"
*/

/*
//MANIPULATE MULTIPLE CHARACTERISTICS AT ONCE using JS DOM
let box = document.querySelector(".box");

box.style.cssText = "font-size: 12px; color: rgb(128,128,128); background-color: rgb(0,0,0); border-color: rgb(255,0,255);"
*/

/*ALTERNATIVE TO ABOVE CODE; RESULT = IDENTICAL
let box = document.querySelector(".box");

box.setAttribute("style","font-size: 12px; color: rgb(128,128,128); background-color: rgb(0,0,0); border-color: rgb(255,0,255);");*/

let elapsed, iterations, currDate, hour, min, sec, file, tempReading, sunsetMil2, sunriseMil2, maxDate, timeOfDay2, date2, date2ALT, hour2Military, hour2TwelveHr, cityName, soundsEnabled, thunderAudio, k;

const getBody = document.body;

const rainAudio = new Audio('rain.mp3');
const windAudio = new Audio('wind.mp3');


currDate = new Date();

soundsEnabled = false;

k = 0;

hour = currDate.getHours();
min = currDate.getMinutes();
sec = currDate.getSeconds();
dayOfWeek = currDate.getDay();
month = currDate.getMonth();
dayOfMonth = currDate.getDate();
year = currDate.getFullYear();

 // hour = Math.floor(Math.random() * 16) + 4;

 //hour = 19;
 if(hour > 23) {
   hour = hour - 24;
 }

 console.log(`hour = ${hour}`);

//// ////////console.log(hour);

const weatherDiv = document.querySelector('.weather-div');

const weatherDivBG = document.querySelector('.weather-div-background');

const tempConditions = document.querySelector('.temp-conditions');

const temp = document.querySelector('.temp');

const conditions = document.querySelector('.conditions');

const city = document.querySelector('.city');

const leftDiv = document.querySelector('.left-div');

const rightDiv = document.querySelector('.right-div');

const highTempDiv = document.querySelector('.high-temp');

const lowTempDiv = document.querySelector('.low-temp');

const precipDiv = document.querySelector('.precip');

const conditionsInfoDiv = document.querySelector('.conditions-info');

const feelsLikeDiv = document.querySelector('.feels-like');

const humidityDiv = document.querySelector('.humidity');

const windDiv = document.querySelector('.wind');

const sunriseDiv = document.querySelector('.sunrise');

const sunsetDiv = document.querySelector('.sunset');

const conditionsInfoVal = document.querySelector('.conditions-info-val');

const feelsLikeVal = document.querySelector('.feels-like-val');

const humidityVal = document.querySelector('.humidity-val');

const windVal = document.querySelector('.wind-val');

const sunriseVal = document.querySelector('.sunrise-val');

const sunsetVal = document.querySelector('.sunset-val');

const dateAndTimeDiv = document.querySelector('.date-and-time');

const dateAndTimeText = document.querySelector('.date-and-time-text');

const greetingBar = document.querySelector('.weather-greeting');

const greetingBarTxt = document.querySelector('.weather-greeting-txt');

const lrDivs = document.querySelector('.lr-divs');

const conditionsImg = document.querySelector('.conditions img');

const conditionsImgAndTemp = document.querySelector('.conditions-img-and-temp');

const enableSoundDiv = document.querySelector('.enable-sound');

const approveSounds = document.querySelector('#sound-btn-0');
const denySounds = document.querySelector('#sound-btn-1');


  const portraitW = window.matchMedia("(orientation: portrait)");
  const landscapeW = window.matchMedia("(orientation: landscape)");  
  const smallMobileW = window.matchMedia("(max-width: 767px)");
  const medMobileW = window.matchMedia("(max-width: 1068px)");
  const lrgMobileW = window.matchMedia("(max-width: 1300px)");
  const xlMobileW = window.matchMedia("(min-height: 1000px)");
  const desktopW = window.matchMedia("(min-width: 1301px)");

  const maxWidth1200 = window.matchMedia("(max-width: 1200px)");

  const minWidth1200 = window.matchMedia("(min-width: 1200px)");

  const maxHeight600 = window.matchMedia("(max-height: 600px)");

  const maxWidth600 = window.matchMedia("(max-width: 600px)");

  const maxWidth370 = window.matchMedia("(max-width: 370px)");

  const maxHeight370 = window.matchMedia("(max-height: 370px)");
/*
  window.addEventListener('load', function() {
    alert(`HEIGHT: ${window.innerHeight}`);
    alert(`WIDTH: ${window.innerWidth}`);
  })
*/
  window.addEventListener('orientationchange',function() {
    /*let originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');

    document.body.style.display = 'none';*/

    setTimeout(() => {

      positionFile(file, tempConditions, conditions, temp, conditionsImg);
      
/*
      setTimeout(() => {
        document.body.style.display = originalBodyStyle;
      },1);*/
    },14);
  });

  // window.addEventListener('orientationchange',updateAppearance);

  /*
  window.addEventListener('orientationchange',function() {
    setTimeout(() => positionFile, 2);
  });*/

/*flex-grow: 1; (for greeting bar)*/


/*window.addEventListener('orientationchange',function() {
  setTimeout(() => setBackground,2);
});


function setBackground() {
  if(hour >= 4 && hour <= 11) {
    getBody.style.cssText = `background: url('img/coffee.jpg');`;
  } else if(hour >= 12 && hour <= 17) {
    getBody.style.cssText = `background: url('img/beach.jpg');`;
  } else if(hour >= 18 && hour <= 21) {
    getBody.style.cssText = `background: url('img/city2.jpg');`;
  } else if(hour >= 22 || hour <= 3) {
    getBody.style.cssText = `background: url('img/space.jpg');`;
  }
}
*/


    let weatherGreeting;

  if (hour >= 4 && hour <= 11) {
    getBody.setAttribute("style", "background: url('img/coffee.jpg'); background-size: cover; background-repeat: repeat; repeat: re");
    
    greetingBar.style.cssText = "background-color: rgb(0,106,92);";
    weatherGreeting = "Good Morning";

    

    

    leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,126,112);';
    rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,126,112);';
    lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

    weatherDiv.style.cssText = 'background-color: rgb(0,106,92);';

    weatherDivBG.style.cssText = "background-color: rgb(0,144,128);";

    
  } else if (hour >= 12 && hour <= 17) {
    // rgb(212,212,88);
    getBody.setAttribute("style", "background: url('img/beach.jpg'); background-size: cover; background-repeat: repeat;");
    
    greetingBar.style.cssText = "background-color: rgb(0,128,162);";
    weatherGreeting = "Good Afternoon";

    leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,149,182);';
    rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,149,182);';
    lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

    weatherDiv.style.cssText = 'background-color: rgb(0,128,162);';

    weatherDivBG.style.cssText = "background-color: rgb(212,84,84);";
  } else if (hour >= 18 && hour <= 21) {
    getBody.setAttribute("style", "background: url('img/city2.jpg'); background-size: cover; background-repeat: repeat;");
    
    greetingBar.style.cssText = "background-color: rgb(192,0,96);";
    weatherGreeting = "Good Evening";

    leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(92,0,164);';
    rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(92,0,164);';
    lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

    weatherDiv.style.cssText = 'background-color: rgb(72,0,144);';

    weatherDivBG.style.cssText = "background-color: rgb(0,196,212);";
  } else if ((hour >= 22 || hour <= 3) && hour <= 23) {
    getBody.setAttribute("style", "background: url('img/space.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
    
    greetingBar.style.cssText = "background-color: rgb(28,0,40);";
    weatherGreeting = "Goodnight :)";

    leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(49,0,61);';
    rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(49,0,61);';
    lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

    weatherDiv.style.cssText = 'background-color: rgb(28,0,40);';

    weatherDivBG.style.cssText = "background-color: rgb(2,2,2);";
  } else {
    getBody.setAttribute("style", "background: url('img/space.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
    
    greetingBar.style.cssText = "background-color: rgb(2,2,2);";
    weatherGreeting = "Greetings from Planet Earth :)";

    leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(16,16,16);';
    rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(16,16,16);';
    lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

    weatherDiv.style.cssText = 'background-color: rgb(2,2,2);';

    weatherDivBG.style.cssText = "background-color: rgb(2,2,2);";
  }

  //// ////////console.log(weatherGreeting);



  greetingBarTxt.textContent = ``;






/*
(async function getResults(){
  try {
    const res = await(axios('https://climacell-microweather-v1.p.rapidapi.com/weather/realtime'));

    //// ////////console.log(res);
  } catch(err) {
    //// ////////console.log(err);
  }
})();
*/

async function getResults(query) {
  // const url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&APPID=8545888095e6a5ded0848434fee746b3`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=8545888095e6a5ded0848434fee746b3`

  // e692d0d58d50dbeab29b9cdebf5de20a

//  const url2 = `https://cors-anywhere.herokuapp.com/https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&units=I&key=ebd668c024c449779cce39cad4cef052`;

  const url2 = `https://corsanywhere.herokuapp.com/https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&units=I&key=28074b3479ac4964bd24211eeefdc79c`;

//current: KN
  // c4577e8910f84292832bb2d655bb5098
  // cde51ce79a8a4982ba303736db667c11	
  // ebd668c024c449779cce39cad4cef052
  // 6ed2b61126cc4d2fa81c5254348a6a8c
  // 2feea9af9eb44029bca672d6abb8c673
  // d0a2d72466e143e7a09c2bd6a03ed8df
  // 98cf3fb4bf8d4b799730c54ce4a0db5f
  // 023d0c5ce23044e2b2a228564a6be7b2
  // 0726998f12a94fc388d7f2705d0947e4
  // 52f72cef1e0940a2ac0aff42e361bd39
  // 0139607fe6f54aecb5c21a91d923f7bc
  // ec437fdfcb744859a7f27af16331e918
  // 0ca5d4091c27440a9d93dd80b4f21aa8
  // edbba32850d944d482fe9b020cc14f36
  // 92432bdda9604f758012a9f7f589e9c9
  // 1be2728b330943faacd5da4fc7899ec7
  // 98af7ef685f44dae81b431f904a2fde3
  // cce96f333ace4083a86981483cf470d8
  // 9a553e0f4bcf49009843d4aa3b14534c
  // cce96f333ace4083a86981483cf470d8
  // 6f4d99efce6f4d4d9217f66683fe98e0
  // 66062d570dc248869e045bafc6581cda
  // e2f0398fda8f44239b7a3dc532b31216
  // 3ef2be9e4eda4e7393a6abcd3013bf86
  // 2e1864c54d464ba6aa2b1e58f6df033a
  // 5752dad9ce2f44c09a8cdb796a8df492
  // 9616a468cd3b42799c00a7afbb395902
  // 28a56e5470984c2baab58666e9c06fb1
  // 587f6dd0b2ae48a0a454414d3126e31e
  // 756fc26843af49f18530f2b1da3cfd06
  // 94f35e257e6c4c39b296d8aaa5b2857d
  // 2bb71ba4827e42d088e4133b27d10c0e
  // 0ede93277e4442d7979971c23a13daa4
  // 4497be3a473f489e91c54b36399b9c32
  // f91885cf842248b58888adee20cc446b
  // a367fbf7e0944a3a94a91c922c2023ab
  // e2a912bc54a04c06bf6037ec12725d86
  // 23c1fbbbc2e4493e8df00aa1ec45cda6
  // 6d5bdfbc5e46412d84c55bb35cce5ec2
  // b1c10be3b9694651a530d1edc3664b05
  // 03cc53959c3b49ca99d127ea257cef7f
  // 24d5d1315bd04cf5b639d5c0c5d2bf8c
  // 8ab37cc7e3a1449f842d7bedd79d4ecd
  // 3ec8d54181c24124b5eb5356d998dc45
  // 1d4230b9da7b4860a9ccb98a784ef77c
  // d436e0eb1f644b1f9b87fc0f00c6e85d
  // 23348238de5d479b94aee4aa115988cc
  // 5c76730b535d4bf48567967a70bc85c4
  // cda3598cc5014528882db1950e5cdde1
  // f1af91256d6d47478e15234d0c1afe57
  // 81b5711552ed405692e9f82ffa6cc1d1
  // 6af3a980b44347b4af797b6211b16340
  // 296b15f5368242e0af0b052a8a32c50d
  // 3b9d519501554abab4f8168ad0692b57
  // de19284b625047419343800ed620af14
  // 10e5ae103a4f41518008aacf48e65826
  // c6bb180d85834015af159d98481a8502
  // b2886b7041d84b28943cc0eb881975e8
  // 31d79c565fe84cdba532acd964631ac3
  // 9114aa61f5ed45a297eea20acdb58a4c
  // 00ab635dffbd4630b20b6e482cc1476a
  // e5761c19af6745989f75987ba7acc592 
  // d2e071e2e90543d38f49bc34a8e0522b
  // 3a164b25650e46329c3007d4be896560
  // 6e95c6cd01ce4bd2ba28ab11052a6b4d
  // 400e878dec0740af9b3abb7736bc9009
  // d372631bde014199b3d7efce58f97010
  // 8d4f9834ea6e41abb57662d52ee3fd25
  // 9d08a94ce2d7477f84923a298ae40a68
  // cae57ab381664f74b1e2eed35b2986c8
  // 08f7a3b8fe494b168fac154c9839f6fb
  // 69ed8913e540466dbeda5a92db2512a0
  // 281ae2a229924654a0919307e4627ee0
  // b46fce158b6f41008fa30a41137fb644
  // f04e438fad634cb69279978f915a4eeb
  // 7043c74c960d4da8a4a5ba6d5744c239
  // 1363c26eb5434f96a92d15d5f57dd836
  // 630f9d91e9034de4ab29dffcb40915ef
  // f74d8c3ec383437bad780d95f8d73107
  // d8fe56f973a54ba6877b141345e22b2c
  // 87e0090efc504232bb3c9bf66bdc6a8f
  // 0678899e4e114c81b07f9f54c86a9433
  // ad46a8eeb68e4cb8b0e9aaad1184d70e
  // 50f09f3c7ff143f59486588d809eaecc
  // 51b68ec6ae5c44c19e711c99a09dd4a4
  // 99084bac678242d28dd569962cffc7d9
  // 7976534849b5468aafb1ce5d44329353

  const url3 = `https://corsanywhere.herokuapp.com/http://api.worldweatheronline.com/premium/v1/weather.ashx?key=d5c2fc10e0f949e58a201437211407&q=${query}&format=json&num_of_days=10`;

  // 76f09b120c104ae899272540212105
  // 47fe2b9b3b1f447b8c175737200510
  // 743edb0fd85a44b0bfc75506200810
  // 851ebc1311e143b695c90814200712



  //const url2 = `https://api.worldweatheronline.com/premium/v1/weather.ashx?q=${query}&key=c7f124a0e6f049b288442043201407`;

  //const url2 = `http://api.weatherstack.com/current?access_key=9e353b8eef96b347153b55cf9f3f0ff5&query=${query}`;

//  const locKey = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=mgqYiDacPAJQgdxAjUdV9Esc1zmY1hXP&q=${query}`;

  const res = await fetch(url);

//  const resLoc = await fetch(locKey);

  const data = await res.json();

  //const resLocData = await resLoc.json();

//  const url2 = `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/forecasts/v1/daily/1day/${resLocData[0].Key}?apikey=mgqYiDacPAJQgdxAjUdV9Esc1zmY1hXP`;

const res2 = await fetch(url2);

const data2 = await res2.json();


const res3 = await fetch(url3);

const data3 = await res3.json();



  return [data, data2, data3];
}




// Math.round(result.main.temp)
function resultFunct(query) {
  getResults(query).then(result => renderData(result));
}

let numQueries = 0;

function renderData(result) {

  let sunrise, sunset, timezoneOffset, conditionsDesc, dtInfo;


window.onresize = positionFile;
  /*
    //// ////////console.log(`Weather for ${result[0].name}:`);

    //// ////////console.log(`Current Temp: ${Math.round(result[0].main.temp)}`);
    //// ////////console.log(`High: ${Math.round(result[0].main.temp_max)}`);
    //// ////////console.log(`Low: ${Math.round(result[0].main.temp_min)}`);
    //// ////////console.log(`Feels Like: ${Math.round(result[0].main.feels_like)}`);
    //// ////////console.log(`Humidity: ${Math.round(result[0].main.humidity)}%`);
    //// ////////console.log(`Conditions: ${result[0].weather[0].description}`);*/


  city.textContent = `${result[0].name}`;
  /*weatherDiv.innerHTML = `<img src="https://www.openweathermap.org/img/w/${result[0].weather[0].icon}.png">`;*/

  tempReading = Math.round(result[0].main.temp);

  // tempReading = -14;

  if(tempReading < 0) {
    console.log('tempReading is less than 0');
  } else {
    console.log('tempReading is NOT less than 0');
  }

  temp.textContent = `${tempReading}°`;

  //precip.textContent = `Precipitation: ${}%`;

  const desc = result[0].weather[0].description;
  const wind = Math.round(result[0].wind.speed);
  const windDeg = Math.round(result[0].wind.deg);
  const feelsLike = Math.round(result[0].main.feels_like);
  const humidity = Math.round(result[0].main.humidity);
  const timezone = result[0].timezone;
  const highTemp = Math.round(result[1].data[0].max_temp);
  const lowTemp = Math.round(result[1].data[0].min_temp);

  timezoneOffset = getLocalTimezone(timezone, result[0].name);

  dtInfo = getDateTimeInfo(timezoneOffset);
  hr = dtInfo[4];
  tod = dtInfo[7];
/*
  dateAndTimeText.innerHTML = `
    ${dtInfo[3]}, ${dtInfo[0]} ${dtInfo[1]}, ${dtInfo[2]}  -  ${dtInfo[4]}:${dtInfo[5]}:${dtInfo[6]} ${dtInfo[7]}
  `;*/

numQueries++;



//  // ////////console.log(`FINAL CONSOLE LOG FOR DATE AND TIME (FOR NOW): ${dtInfo[3]}, ${dtInfo[0]} ${dtInfo[1]}, ${dtInfo[2]} - ${dtInfo[4]}:${dtInfo[5]}:${dtInfo[6]} ${dtInfo[7]}`);


  //return [monthText, dateOfMonth, currYear, dayOfWeekText, currHour, currMin, currSec, timeOfDay];

  // ////////console.log(dtInfo);

  sunrise = calcSunrise(result[0].sys.sunrise, timezoneOffset);
  sunset = calcSunset(result[0].sys.sunset, timezoneOffset);
  windDir = findWindDir(windDeg);


  //// ////////console.log(desc);


  for(let i = 0; i < 6; i++) {
    setTimeout(() => {
      ////console.log(`hour passed in: ${hour}`);
      j = i + 1;

      updateDateTimeTicker(result);

      file = returnFile(desc, wind, hour2, sunriseMil2, sunsetMil2, date2, cityName, j);
    }, 1000 * i);
  }

  conditionsDesc = limitDescription(desc);

  conditionsInfoVal.textContent = `${conditionsDesc}`;
  feelsLikeVal.textContent = `${feelsLike}°`;
  humidityVal.textContent = `${humidity}%`;
  windVal.textContent = `${windDir} (${wind} mph)`;
  sunriseVal.textContent = `${sunrise}`;
  sunsetVal.textContent = `${sunset}`;
  highTempDiv.innerHTML = `High:&nbsp;&nbsp&nbsp;${highTemp}°`;
  lowTempDiv.innerHTML = `Low:&nbsp;&nbsp;&nbsp;${lowTemp}°`;

  /*file = 'moon.png';
  conditions.innerHTML = `<img src="img/${file}">`;

  setTimeout(() => {
    file = 'cloudy.png';
    conditions.innerHTML = `<img src="img/${file}">`;
    adjustTemp(file);
  },4000);

  setTimeout(() => {
    file = 'rainy.png';
    conditions.innerHTML = `<img src="img/${file}">`;
    adjustTemp(file);
  },8000);

  setTimeout(() => {
    file = 'stormyALT6A.png';
    conditions.innerHTML = `<img src="img/${file}">`;
    adjustTemp(file);
  },12000);

  setTimeout(() => {
    file = 'windy.png';
    conditions.innerHTML = `<img src="img/${file}">`;
    adjustTemp(file);
  },16000);

  setTimeout(() => {
    file = 'snowy.png';
    conditions.innerHTML = `<img src="img/${file}">`;
    adjustTemp(file);
  },20000);

  setTimeout(() => {
    file = 'sunny.png';
    conditions.innerHTML = `<img src="img/${file}">`;
    adjustTemp(file);
  },24000);

  setTimeout(() => {
    file = 'partly-cloudy.png';
    conditions.innerHTML = `<img src="img/${file}">`;
    adjustTemp(file);
  },28000);

  setTimeout(() => {
    file = 'hazy.png';
    conditions.innerHTML = `<img src="img/${file}">`;
    adjustTemp(file);
  },32000);

  setTimeout(() => {
    file = 'moon.png';
    conditions.innerHTML = `<img src="img/${file}">`;
    adjustTemp(file);
  },36000);*/


}


let h, m, s, dow, mon, d, y, tz, monTxt, dowTxt, tod, locationHr, newDay;

iterations = 0;

newDay;

function updateDateTimeTicker(result) {
  console.log(result);

  
  cityName = result[0].name;

  const desc = result[0].weather[0].description;
  const wind = Math.round(result[0].wind.speed);
  const timezone = result[0].timezone;
  let precip = result[2].data.weather[0].hourly[0].chanceofrain;
  const sunriseFromRes = result[0].sys.sunrise;
  const sunsetFromRes = result[0].sys.sunset;

  timezoneOffset2 = getLocalTimezone(timezone, cityName);

  //console.log(`Timezone Offset = ${timezoneOffset2}`);

  sunrise2 = calcSunrise(sunriseFromRes, timezoneOffset2);
  sunset2 = calcSunset(sunsetFromRes, timezoneOffset2);

/*
  dayOfWeek = already here (use function to get text);
  month = already here (use function to get text);
  timezoneOffset = use function to get it, then update hour to reflect it;
  tod = get necessary functions;
  hour = convert to AM / PM;
*/

  // local system date and time
  date2ALT = new Date();

  date2ALTms = date2ALT.getTime();


  // date and time at location
  date2 = new Date(date2ALTms + ((timezoneOffset2) * 3600000));

//  hour2 = date2.getHours();
  hour2 = date2.getHours();
  min2 = date2.getMinutes();
  sec2 = date2.getSeconds();
  dayOfWeek2 = date2.getDay();
  month2 = date2.getMonth();
  dayOfMonth2 = date2.getDate();
  year2 = date2.getFullYear();

  console.log(`Current time in ${cityName}: ${hour2}`);
  console.log(`Sunrise in ${cityName}: ${sunrise2}`);
  console.log(`Sunset in ${cityName}: ${sunset2}`);

  console.log(sunrise2[sunrise2.length-2]);
  console.log(sunset2[sunset2.length-2]);

  if(sunrise2[1] === '2' && sunset2[sunset2.length-2] === 'A') {
    sunriseMil2 = 0;
  } else if(sunrise2[1] === ':' && sunrise2[sunrise2.length-2] === 'P') {
    sunriseMil2 = eval(sunset2[0]) + 12;
  } else if((sunrise2[1] === '0' || sunrise2[1] === '1') && sunrise2[sunrise2.length-2] === 'P') {
    sunriseMil2 = eval(sunrise2.slice(0,2)) + 12; 
  } else if(sunrise2[1] === ':' && sunrise2[sunrise2.length-2] === 'A') {
    sunriseMil2 = eval(sunrise2[0]);
  } else if(((sunrise2[1] === '0' || sunrise2[1] === '1') && sunrise2[sunrise2.length-2] === 'A') || (sunrise2[1] === '2' && sunrise2[sunrise2.length-2] === 'P')) {
    sunriseMil2 = eval(sunrise2.slice(0,2));
  }

  if (sunset2[1] === '2' && sunset2[sunset2.length-2] === 'A') {
    // if it's midnight, sunset = 0
    sunsetMil2 = 0;
  } else if (sunset2[1] === ':' && sunset2[sunset2.length-2] === 'P') {
    // if it's not a double digit time, but it's PM, sunset += 12
    sunsetMil2 = eval(sunset2[0]) + 12;
  } else if(sunset2[1] === '0' || sunset2[1] === '1' && sunset2[sunset2.length-2] === 'P') {
    // if it's 10 or 11 PM, sunset += 12
    sunsetMil2 = eval(sunset2.slice(0,2)) + 12;
  } else if(sunset2[1] === ':' && sunset2[sunset2.length-2] === 'A') {
    sunsetMil2 = eval(sunset2[0]);
  } else if(((sunset2[1] === '0' || sunset2[1] === '1') && sunset2[sunset2.length-2] === 'A') || (sunset2[1] === '2' && sunset2[sunset2.length-2] === 'P')) {
    sunsetMil2 = eval(sunrise2.slice(0,2));
  }

  console.log(`sunriseMil2 = ${sunriseMil2}`);
  console.log(`sunsetMil2 = ${sunsetMil2}`);

  hour2TwelveHr = formatDateTick(hour2, min2, sec2)[0];

  maxDate = getMaxDate(mon);

  file = returnFile(desc, wind, hour2, sunriseMil2, sunsetMil2, date2, cityName, j);
  conditions.innerHTML = `<img src="img/${file}">`;
  adjustTemp(file);

  if(file === 'cloudy.png' && eval(precip) < 40) {
    precip = 40;
  }

  if(file !== 'rainy.png' && file !== 'stormyALT6A.png' && file !== 'stormyALT6B.png' && file !== 'snowy.png' && file !== 'moon.png' && file !== 'sunny.png') {
      precipDiv.innerHTML = `Precip:&nbsp;${precip}%`;
  } else if(file === 'moon.png' || file === 'sunny.png') {
    precipDiv.innerHTML = `Precip:&nbsp;0%`;
  } else {
    precipDiv.innerHTML = `Precip:&nbsp;100%`;
  }



  //console.log(`hour2 passed in: ${hour2}`);

  hour2military = hour2;

  dayOfWeek2Txt = getDayOfWeek(dayOfWeek2, timezoneOffset2)[0];
  month2Txt = getYearMonthDate(year2, month2, dayOfMonth2, hour2, timezoneOffset2)[1];
  min2 = formatDateTick(hour2, min2, sec2)[1];
  sec2 = formatDateTick(hour2, min2, sec2)[2];
  tod2 = formatDateTick(hour2military, min2, sec2)[3];

  //console.log(`tod2 returned: ${tod2}`);

  dateAndTimeDiv.innerHTML = `
    ${dayOfWeek2Txt}, ${month2Txt} ${dayOfMonth2}, ${year2}  -  ${hour2TwelveHr}:${min2}:${sec2} ${tod2}
  `;

  iterations++;

  ////console.log(`iterations: ${iterations}`);

  return [h, m, s, dow, mon, d, y, tz, maxDate, iterations];
}





/*for(let i = 0; i < 1000; i++) {
    const cities = ['Miami Beach','Orlando','Savannah','New Orleans','Toronto','Juneau','Honolulu','Stockholm','Helsinki','Oslo','Reykjavik','Dublin','London','Edinburgh','Zurich','Tokyo','Seattle','San Francisco','Nashville','Atlanta','Birmingham','Talladega'];

    let elapsed, next;
    elapsed = 0;
    next = 0;

    for(let city of cities) {
      setTimeout(() => {
          resultFunct(city);
          next += 1;
          elapsed = (i * (cities.length - 1) * 4000);
      },next);
    }
}*/

function getLocalTimezone(timezone, cityName) {
  let localTZ = (timezone / 3600) + 5;

  // ////////console.log(`Offset from Miami Beach to ${cityName}: ${localTZ}`);

  return localTZ;
}

function findWindDir(degrees) {
  let direction;


  if (degrees === 360 || degrees === 0) {
    direction = 'N';
  } else if (degrees > 0 && degrees < 45) {
    direction = 'NNE';
  } else if (degrees === 45) {
    direction = 'NE';
  } else if (degrees > 45 && degrees < 90) {
    direction = 'ENE';
  } else if (degrees === 90) {
    direction = 'E';
  } else if (degrees > 90 && degrees < 135) {
        direction = 'SSE';
  } else if (degrees === 135) {
    direction = 'SE';
  } else if (degrees > 135 && degrees < 180) {
    direction = 'ESE';
  } else if (degrees === 180) {
    direction = 'S';
  } else if (degrees > 180 && degrees < 225) {
    direction = 'SSW';
  } else if (degrees === 225) {
    direction = 'SW';
  } else if (degrees > 225 && degrees < 270) {
    direction = 'WSW';
  } else if (degrees === 270) {
    direction = 'W';
  } else if (degrees > 270 && degrees < 315) {
    direction = 'WNW';
  } else if (degrees === 315) {
    direction = 'NW';
  } else if (degrees > 315 && degrees < 360) {
    direction = 'NNW';
  }



  /*if(degrees > 337.5 || degrees < 22.5) {
      direction = "N";
  } else if(degrees >= 22.5 && degrees <= 67.5) {
    direction = "NE";
  } else if(degrees > 67.5 && degrees < 112.5) {
    direction = "E";
  } else if(degrees >= 112.5 && degrees <= 157.5) {
    direction = "SE";
  } else if(degrees > 157.5 && degrees < 202.5) {
    direction = "S";
  } else if(degrees >= 202.5 && degrees <= 247.5) {
    direction = "SW";
  } else if(degrees > 247.5 && degrees < 292.5) {
    direction = "W";
  } else if(degrees >= 292.5 && degrees <= 337.5) {
    direction = "NW";
  }*/

  return direction;
}


function limitDescription(description) {
  let descArray, newDesc, limitedDesc, descWordLength;

  descArray = description.split(' ');

  // ////////console.log(`descArray.length = ${descArray.length}`);
  // ////////console.log(`description = ${description}`);
  
  
  
  if (descArray.length > 1) {
    newDesc = [];

    for (let i = descArray.length - 2; i <= descArray.length - 1; i++) {
      newDesc.push(descArray[i]);
      // ////////console.log(`adding ${descArray[i]} to newDesc...`);
    }

    descWordLength = newDesc.map(function(word) {return word.length});

    if((descWordLength[0] + descWordLength[1]) > 8 && smallMobileW.matches && portraitW.matches) {
      newDesc.shift();
    }

    limitedDesc = newDesc.join(' ');
  } else {
    // ////////console.log(`ELSE BLOCK EXECUTED`);
    limitedDesc = description;
  }

  const mobile942 = window.matchMedia("(max-width: 942px)");

  // ////////console.log(`newDesc is ${newDesc}`);


  if(mobile942.matches && descArray.length > 1) {
    newDesc = [];
    
    for(let j = descArray.length - 2; j <= descArray.length - 1; j++) {
      newDesc.push(descArray[j]);
    }

    if(newDesc[0].length > 3) {
      newDesc.shift();
    }



    limitedDesc = newDesc.join(' ');  

  } 


  return limitedDesc;
}



function calcSunrise(sunriseInMS, timezoneOffset) {
  let sunrise, hours, mins;

  sunrise = sunriseInMS * 1000;

  const sunriseDate = new Date(sunrise);

  hours = sunriseDate.getHours();
  hours += timezoneOffset;

  mins = sunriseDate.getMinutes();

  if (hours < 12 && mins < 10) {
    sunrise = `${hours}:0${mins}AM`;
  } else if (hours < 12 && mins >= 10) {
    sunrise = `${hours}:${mins}AM`;
  } else if (hours === 12 && mins < 10) {
    sunrise = `${hours}:0${mins}PM`;
  } else if (hours === 12 && mins >= 10) {
    sunrise = `${hours}:${mins}AM`;
  } else if (hours === 24 && mins < 10) {
    sunrise = `12:0${mins}AM`;
  } else if (hours === 24 && mins >= 10) {
    sunrise = `12:${mins}AM`;
  } else if (hours > 24 && mins < 10) {
    sunrise = `${hours - 24}:0${mins}AM`;
  } else if (hours > 24 && mins >= 10) {
    sunrise = `${hours - 24}:${mins}AM`;
  } else if (hours > 12 && mins < 10) {
    sunrise = `${hours-12}:0${mins}PM`;
  } else if (hours > 12 && mins >= 10) {
    sunrise = `${hours-12}:${mins}PM`;
  }

  //// ////////console.log(`Sunrise: ${sunrise}`);

  return sunrise;
}

function calcSunset(sunsetInMS, timezoneOffset) {
  let sunset, hours, mins;

  sunset = sunsetInMS * 1000;

  const sunsetDate = new Date(sunset);

  hours = sunsetDate.getHours();

  // ////////console.log(`sunset hours: ${hours}`);

  hours += timezoneOffset;

  // ////////console.log(`sunset hours with timezone offset: ${hours}`);
  mins = sunsetDate.getMinutes();

  mins = sunsetDate.getMinutes();

  if (hours < 0 && mins < 10) {
    sunset = `${hours + 12}:0${mins}PM`;
  } else if (hours < 0 && mins >= 10) {
    sunset = `${hours + 12}:${mins}PM`;
  } else if (hours === 0 && mins < 10) {
    sunset = `12:0${mins}AM`;
  } else if (hours === 0 && mins >= 10) {
    sunset = `12:${mins}AM`;
  } else if (hours < 12 && mins < 10) {
    sunset = `${hours}:0${mins}AM`;
  } else if (hours < 12 && mins >= 10) {
    sunset = `${hours}:${mins}AM`;
  } else if (hours === 12 && mins < 10) {
    sunset = `${hours}:0${mins}PM`;
  } else if (hours === 12 && mins >= 10) {
    sunset = `${hours}:${mins}AM`;
  } else if (hours > 12 && hours <= 23 && mins < 10) {
    sunset = `${hours-12}:0${mins}PM`;
  } else if (hours > 12 && hours <= 23 && mins >= 10) {
    sunset = `${hours-12}:${mins}PM`;
  } else if (hours > 24 && mins < 10) {
    sunset = `${hours - 24}:0${mins}AM`;
  } else if (hours > 24 && mins >= 10) {
    sunset = `${hours - 24}:${mins}AM`;
  }


  //// ////////console.log(`Sunset: ${sunset}`);

  return sunset;
}

let iconZ, count;

count = 0;

function returnFile(description, windSpeed, hour, sunrise, sunset, date, cityName, j) {
  let icon, isNight, localTime;

  console.log(`hour in ${cityName}: ${hour}`);
  console.log(`sunrise in ${cityName}: ${sunrise}`);
  console.log(`sunset in ${cityName}: ${sunset}`);

/*  sunrise *= 1000;
  sunset *= 1000;

  console.log(`sunrise: ${sunrise}`);
  console.log(`sunset: ${sunset}`);
  console.log(`local: ${date.getTime()}`);

  console.log(date.getTime() > sunrise);
  console.log(date.getTime() < sunset);*/

   if(hour <= sunset && hour >= sunrise) {
    isNight = false;
    console.log(`!isNight in ${cityName}`);
  } else if(hour > sunset || hour < sunrise) {
    isNight = true;
    console.log(`isNight in ${cityName}`);
  }

if(count === 4 || count === 0) {
  count = 0;

  iconZ = Math.floor(Math.random() * 11);
} else {
  iconZ = iconZ;
}




if (/*iconZ === 2*/description.indexOf('storm') !== -1 && (j > 2 && j < 6)) {
  /*if(rainAudio) {
    rainAudio.pause();
  }*/
  
  if(windAudio) {
    windAudio.pause();
  }

  if(soundsEnabled) {
    // setTimeout(() => rainAudio.play(),1);

    thunderAudio = new Audio('thunder.mp3');
     
    setTimeout(() => {
      thunderAudio.play();
      
      setTimeout(() => rainAudio.play(),10);
    },1);
  }

  icon = 'stormyALT6B.png';

  count++;
} else if (/*iconZ === 3*/description.indexOf('storm') !== -1) {
  
  if(j === 1) {
    if(rainAudio) {
      rainAudio.pause();
    }
  
    if(thunderAudio) {
      thunderAudio.pause();
    }
  
    if(windAudio) {
      windAudio.pause();
    }
  }
  
  if(soundsEnabled && j <= 2) {
    setTimeout(() => rainAudio.play(),1);
    /*setTimeout(() => {
      thunderAudio.play();
    },2010);*/
  }
  
  icon = 'stormyALT6A.png';

  count++;
} else if (/*iconZ === 4*/description.indexOf('rain') !== -1 || description.indexOf('drizzle') !== -1) {
  if(rainAudio) {
    rainAudio.pause();
  }

  if(thunderAudio) {
    thunderAudio.pause();
  }

  if(windAudio) {
    windAudio.pause();
  }

  if(soundsEnabled) {
    setTimeout(() => rainAudio.play(),1);
  }

  icon = 'rainy.png';

  count++;
} else if (/*iconZ === 5*/description.indexOf('snow') !== -1 || description.indexOf('mix') !== -1 || description.indexOf('winter') !== -1) {
  if(rainAudio) {
    rainAudio.pause();
  }

  if(thunderAudio) {
    thunderAudio.pause();
  }

  if(windAudio) {
    windAudio.pause();
  }

  icon = 'snowy.png';

  count++;
} else if (/*iconZ === 6*/description.indexOf('wind') !== -1 || windSpeed >= 25) {
  if(rainAudio) {
    rainAudio.pause();
  }

  if(thunderAudio) {
    thunderAudio.pause();
  }

  if(soundsEnabled) {
    setTimeout(() => windAudio.play(),1);
  }

  icon = 'windy.png';

  count++;
} else if (/*iconZ === 0*/(description.indexOf('partly') !== -1 || description.indexOf('scattered clouds') !== -1 || description.indexOf('broken clouds') !== -1 || description.indexOf('few clouds') !== -1) && !isNight) {
  if(rainAudio) {
    rainAudio.pause();
  }

  if(thunderAudio) {
    thunderAudio.pause();
  }

  if(windAudio) {
    windAudio.pause();
  }
  
  icon = 'partly-cloudy.png';

  count++;
} else if (/*iconZ === 1*/(description.indexOf('partly') !== -1 || description.indexOf('scattered clouds') !== -1 || description.indexOf('broken clouds') !== -1 || description.indexOf('few clouds') !== -1) && isNight) {
  if(rainAudio) {
    rainAudio.pause();
  }

  if(thunderAudio) {
    thunderAudio.pause();
  }

  if(windAudio) {
    windAudio.pause();
  }
  
  icon = 'partly-cloudy-night8.png';

  count++;
} else if (/*iconZ === 7*/description.indexOf('haz') !== -1 || description.indexOf('fog') !== -1 || description.indexOf('smog') !== -1 || description.indexOf('mist') !== -1) {
  if(rainAudio) {
    rainAudio.pause();
  }

  if(thunderAudio) {
    thunderAudio.pause();
  }

  if(windAudio) {
    windAudio.pause();
  }

  icon = 'hazy.png';

  count++;
} else if (/*iconZ === 8*/description.indexOf('cloud') !== -1) {
  if(rainAudio) {
    rainAudio.pause();
  }

  if(thunderAudio) {
    thunderAudio.pause();
  }

  if(windAudio) {
    windAudio.pause();
  }

  icon = 'cloudy.png';

  count++;
} else if (/*iconZ === 9*/description.indexOf('sun') !== -1 || (description.indexOf('clear') !== -1 && !isNight)) {
  if(rainAudio) {
    rainAudio.pause();
  }

  if(thunderAudio) {
    thunderAudio.pause();
  }

  if(windAudio) {
    windAudio.pause();
  }

  icon = 'sunny.png';

  count++;
} else if (/*iconZ === 10*/description.indexOf('clear') !== -1) {
  if(rainAudio) {
    rainAudio.pause();
  }

  if(thunderAudio) {
    thunderAudio.pause();
  }

  if(windAudio) {
    windAudio.pause();
  }

  icon = 'moon.png';

  count++;
}





// icon = 'stormyALT6A.png';  


/*let iconZ2 = Math.round(Math.random() * 9);

if(iconZ2 === 0) {
  icon = 'moon.png';
} else if(iconZ2 === 1) {
  icon = 'partly-cloudy-night8.png';
} else if(iconZ2 === 2) {
  icon = 'sunny.png';
} else if(iconZ2 === 3) {
  icon = 'cloudy.png';
} else if(iconZ2 === 4) {
  icon = 'snowy.png';
} else if(iconZ2 === 5) {
  icon = 'windy.png';
} else if(iconZ2 === 6) {
  icon = 'hazy.png';
} else if(iconZ2 === 7) {
  icon = 'partly-cloudy.png';
} else if(iconZ2 === 8) {
  icon = 'rainy.png';
}*/

  return icon;
}

function adjustTemp(file) {
  //const conditionsIMG = document.querySelector('.conditions img');
  


  positionFile(file, tempConditions, conditions, temp, conditionsImg);

  

  updateAppearance(file);
}

function updateAppearance(file) {



  if (hour >= 4 && hour < 18) {
    switch (file) {
      case 'snowy.png':
        getBody.setAttribute("style", "background: url('img/day-snow-bg.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
        
        greetingBarTxt.style.cssText = "color: rgb(96,96,234);";
        greetingBar.style.cssText = "background-color: rgb(184,184,184); opacity: 0.82;";

        city.style.color = 'rgb(96,96,234)';
        
        leftDiv.style.borderColor = 'rgb(200,200,200)';
        rightDiv.style.color = 'rgb(12,12,12)';
        rightDiv.style.borderColor = 'rgb(200,200,200)';


        if(window.matchMedia("(max-width: 480px)").matches && portraitW.matches) {
          leftDiv.style.color = 'rgb(254,254,254)';
        } else {
          leftDiv.style.color = 'rgb(12,12,12)';
        }


        
        
        lowTempDiv.style.cssText = 'border-color: rgb(0,128,255);';

        feelsLikeDiv.style.cssText = 'border-color: rgb(0,128,255);';
        humidityDiv.style.cssText = 'border-color: rgb(0,128,255);';
        windDiv.style.cssText = 'border-color: rgb(0,128,255);';
        conditionsInfoDiv.style.cssText = 'border-color: rgb(0,128,255);';
        sunriseDiv.style.cssText = 'border-color: rgb(0,128,255);';

        feelsLikeVal.style.cssText = 'border-color: rgb(0,128,255);';
        humidityVal.style.cssText = 'border-color: rgb(0,128,255);';
        windVal.style.cssText = 'border-color: rgb(0,128,255);';
        conditionsInfoVal.style.cssText = 'border-color: rgb(0,128,255);';
        sunriseVal.style.cssText = 'border-color: rgb(0,128,255);';



        /**
         * feelsLikeDiv.style.cssText = 'border-color: rgb(128,128,128);';
        humidityDiv.style.cssText = 'border-color: rgb(128,128,128);';
        windDiv.style.cssText = 'border-color: rgb(128,128,128);';
        conditionsInfoDiv.style.cssText = 'border-color: rgb(128,128,128);';
        sunriseDiv.style.cssText = 'border-color: rgb(128,128,128);';

        feelsLikeVal.style.cssText = 'border-color: rgb(128,128,128);';
        humidityVal.style.cssText = 'border-color: rgb(128,128,128);';
        windVal.style.cssText = 'border-color: rgb(128,128,128);';
        conditionsInfoVal.style.cssText = 'border-color: rgb(128,128,128);';
        sunriseVal.style.cssText = 'border-color: rgb(128,128,128);';
         */



        weatherDiv.style.cssText = 'background-color: rgb(184,184,184);';

        weatherDivBG.style.cssText = "background-color: rgb(169,169,255);";
        break;

      case 'rainy.png':
        getBody.setAttribute("style", "background: url('img/day-rain-bg.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
        
        greetingBarTxt.style.cssText = "color: rgb(2,2,2);";
        greetingBar.style.cssText =  "background-color: rgb(192,192,192);";

        city.style.cssText = 'color: rgb(2,2,2);';
        
        
        lowTempDiv.style.cssText = 'border-color: rgb(2,2,2);';

        feelsLikeDiv.style.cssText = 'border-color: rgb(2,2,2);';
        humidityDiv.style.cssText = 'border-color: rgb(2,2,2);';
        windDiv.style.cssText = 'border-color: rgb(2,2,2);';
        conditionsInfoDiv.style.cssText = 'border-color: rgb(2,2,2);';
        sunriseDiv.style.cssText = 'border-color: rgb(2,2,2);';

        feelsLikeVal.style.cssText = 'border-color: rgb(2,2,2);';
        humidityVal.style.cssText = 'border-color: rgb(2,2,2);';
        windVal.style.cssText = 'border-color: rgb(2,2,2);';
        conditionsInfoVal.style.cssText = 'border-color: rgb(2,2,2);';
        sunriseVal.style.cssText = 'border-color: rgb(2,2,2);';

        weatherDiv.style.cssText = 'background-color: rgb(192,192,192);';

        // city.style.color = 'rgb(2,2,2)';

        if(window.matchMedia("(max-width: 480px)").matches && portraitW.matches) {
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';

          lowTempDiv.style.borderColor = 'rgb(255,255,255)';
        } else {
          leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
          rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';

          lowTempDiv.style.borderColor = 'rgb(2,2,2)';
        }
        
        

        weatherDivBG.style.cssText = "background-color: rgb(144,144,144);";
        break;

        case 'stormyALT6A.png':
          getBody.setAttribute("style", "background: url('img/day-rain-bg.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
          
          greetingBarTxt.style.cssText = "color: rgb(2,2,2);";
          greetingBar.style.cssText = "background-color: rgb(192,192,192);";
  
          city.style.cssText = 'color: rgb(2,2,2);';
  
          // temp.style.color = 'rgb(226,226,226)';
          
          lowTempDiv.style.cssText = 'border-color: rgb(2,2,2);';
  
          feelsLikeDiv.style.cssText = 'border-color: rgb(2,2,2);';
          humidityDiv.style.cssText = 'border-color: rgb(2,2,2);';
          windDiv.style.cssText = 'border-color: rgb(2,2,2);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(2,2,2);';
          sunriseDiv.style.cssText = 'border-color: rgb(2,2,2);';
  
          feelsLikeVal.style.cssText = 'border-color: rgb(2,2,2);';
          humidityVal.style.cssText = 'border-color: rgb(2,2,2);';
          windVal.style.cssText = 'border-color: rgb(2,2,2);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(2,2,2);';
          sunriseVal.style.cssText = 'border-color: rgb(2,2,2);';
  
          weatherDiv.style.cssText = 'background-color: rgb(192,192,192);';
  
          // city.style.color = 'rgb(2,2,2)';
          leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
          rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';

          if(window.matchMedia("(max-width: 480px)").matches && portraitW.matches) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';

            lowTempDiv.style.borderColor = 'rgb(255,255,255)';
          } else {
            leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
            rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';

            lowTempDiv.style.borderColor = 'rgb(2,2,2)';
          }
  
          weatherDivBG.style.cssText = "background-color: rgb(144,144,144);";
          break;

        case 'stormyALT6B.png':
        getBody.setAttribute("style", "background: url('img/day-rain-bg.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
        
        greetingBarTxt.style.cssText = "color: rgb(2,2,2);";
        greetingBar.style.cssText = "background-color: rgb(192,192,192);";

        city.style.cssText = 'color: rgb(2,2,2);';

        temp.style.color = 'rgb(144,144,255)';
        
        lowTempDiv.style.cssText = 'border-color: rgb(2,2,2);';

        feelsLikeDiv.style.cssText = 'border-color: rgb(2,2,2);';
        humidityDiv.style.cssText = 'border-color: rgb(2,2,2);';
        windDiv.style.cssText = 'border-color: rgb(2,2,2);';
        conditionsInfoDiv.style.cssText = 'border-color: rgb(2,2,2);';
        sunriseDiv.style.cssText = 'border-color: rgb(2,2,2);';

        feelsLikeVal.style.cssText = 'border-color: rgb(2,2,2);';
        humidityVal.style.cssText = 'border-color: rgb(2,2,2);';
        windVal.style.cssText = 'border-color: rgb(2,2,2);';
        conditionsInfoVal.style.cssText = 'border-color: rgb(2,2,2);';
        sunriseVal.style.cssText = 'border-color: rgb(2,2,2);';

        weatherDiv.style.cssText = 'background-color: rgb(192,192,192);';

        // city.style.color = 'rgb(2,2,2)';
        // leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
        // rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';

        if(window.matchMedia("(max-width: 480px)").matches && portraitW.matches) {
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';

          lowTempDiv.style.borderColor = 'rgb(255,255,255)';
        } else {
          leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
          rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';

          lowTempDiv.style.borderColor = 'rgb(2,2,2)';
        }

        weatherDivBG.style.cssText = "background-color: rgb(144,144,144);";
        break;

      case 'hazy.png':
        getBody.setAttribute("style", "background: url('img/day-haze-bg.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
        
        greetingBarTxt.style.cssText = "color: rgb(234,234,234);";
        greetingBar.style.cssText = "background-color: rgb(96,96,96);";

        
        
        
        lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

        feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
        humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
        windDiv.style.cssText = 'border-color: rgb(255,255,255);';
        conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
        sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

        feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
        humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
        windVal.style.cssText = 'border-color: rgb(255,255,255);';
        conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
        sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';


        weatherDiv.style.cssText = 'background-color: rgb(96,96,96);';

        weatherDivBG.style.cssText = "background-color: rgb(72,72,72);";
        break;

      case 'cloudy.png':
        if (hour < 12) {
          //morning
          getBody.setAttribute("style", "background: url('img/coffee.jpg'); background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(28,106,92);";
          weatherGreeting = "Good Morning";

          
          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

          weatherDiv.style.cssText = 'background-color: rgb(28,106,92);';

          weatherDivBG.style.cssText = "background-color: rgb(28,144,128);";
        } else if (hour >= 12) {
          //afternoon
          getBody.setAttribute("style", "background: url('img/beach.jpg'); background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(29,128,162);";
          weatherGreeting = "Good Afternoon";

          
          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

          weatherDiv.style.cssText = 'background-color: rgb(29,128,162);';

          weatherDivBG.style.cssText = "background-color: rgb(212,114,114);";
        }

        break;

      default:

        if (hour >= 4 && hour < 12) {
          //morning
          getBody.setAttribute("style", "background: url('img/coffee.jpg'); background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(0,106,92);";
          weatherGreeting = "Good Morning";

          
          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

          weatherDiv.style.cssText = 'background-color: rgb(0,106,92);';

          weatherDivBG.style.cssText = "background-color: rgb(0,144,128);";
        } else if (hour >= 12) {
          //afternoon
          getBody.setAttribute("style", "background: url('img/beach.jpg'); background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(0,128,162);";
          weatherGreeting = "Good Afternoon";

          
          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

          weatherDiv.style.cssText = 'background-color: rgb(0,128,162);';

          weatherDivBG.style.cssText = "background-color: rgb(212,84,84);";
        }
        break;
    }
  } else if (hour < 4 || (hour >= 18 && hour <= 23)) {
    switch (file) {
      case 'snowy.png':
        getBody.setAttribute("style", "background: url('img/night-snow-bg.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
        
        greetingBar.style.cssText = "background-color: rgb(144,144,144);";

        temp.style.color = 'rgb(2,2,2)';
        
        lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

        feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
        humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
        windDiv.style.cssText = 'border-color: rgb(255,255,255);';
        conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
        sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

        feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
        humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
        windVal.style.cssText = 'border-color: rgb(255,255,255);';
        conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
        sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

        weatherDiv.style.cssText = 'background-color: rgb(144,144,144);';

        weatherDivBG.style.cssText = "background-color: rgb(96,96,212);";
        break;

      case 'rainy.png':
        getBody.setAttribute("style", "background: url('img/night-rain-bg.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
        
        greetingBar.style.cssText = "background-color: rgb(128,128,128);";
        
        city.style.cssText = "color: rgb(253,253,253);";
        
        
        lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

        feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
        humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
        windDiv.style.cssText = 'border-color: rgb(255,255,255);';
        conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
        sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

        feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
        humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
        windVal.style.cssText = 'border-color: rgb(255,255,255);';
        conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
        sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

        weatherDiv.style.cssText = 'background-color: rgb(128,128,128);';

        // city.style.color = 'rgb(255,255,255)';
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';

        if(desktopW.matches) {
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); right: 21.6vw;';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); left: 21.6vw;';
        } else {
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
        }

        weatherDivBG.style.cssText = "background-color: rgb(96,96,96); color: rgb(254,254,254);";
        break;

        case 'stormyALT6A.png':
          getBody.setAttribute("style", "background: url('img/night-rain-bg.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(128,128,128);";
  
          city.style.cssText = 'color: rgb(253,253,253);';
  
          // temp.style.color = 'rgb(226,226,226)';
          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';
  
          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';
  
          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';
  
          weatherDiv.style.cssText = 'background-color: rgb(128,128,128);';
  
          // city.style.color = 'rgb(255,255,255)';
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
  
          weatherDivBG.style.cssText = "background-color: rgb(96,96,96);";
          break;

        case 'stormyALT6B.png':
        getBody.setAttribute("style", "background: url('img/night-rain-bg.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
        
        greetingBar.style.cssText = "background-color: rgb(128,128,128);";

        city.style.cssText = 'color: rgb(253,253,253);';

        temp.style.color = 'rgb(144,144,255)';
        
        lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

        feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
        humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
        windDiv.style.cssText = 'border-color: rgb(255,255,255);';
        conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
        sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

        feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
        humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
        windVal.style.cssText = 'border-color: rgb(255,255,255);';
        conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
        sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

        weatherDiv.style.cssText = 'background-color: rgb(128,128,128);';

        // city.style.color = 'rgb(255,255,255)';
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';

        weatherDivBG.style.cssText = "background-color: rgb(96,96,96);";
        break;

      case 'hazy.png':
        getBody.setAttribute("style", "background: url('img/night-haze-bg.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
        
        greetingBarTxt.style.cssText = "color: rgb(212,212,212);";
        greetingBar.style.cssText = "background-color: rgb(72,72,72);";

        
        
        lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

        feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
        humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
        windDiv.style.cssText = 'border-color: rgb(255,255,255);';
        conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
        sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

        feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
        humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
        windVal.style.cssText = 'border-color: rgb(255,255,255);';
        conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
        sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

        weatherDiv.style.cssText = 'background-color: rgb(72,72,72);';

        weatherDivBG.style.cssText = "background-color: rgb(46,46,46);";
        break;

      case 'cloudy.png':

        if (hour >= 18 && hour < 22) {
          //evening
          getBody.setAttribute("style", "background: url('img/city2.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(192,28,96);";
          weatherGreeting = "Good Evening";

          
          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

          weatherDiv.style.cssText = 'background-color: rgb(72,28,144);';

          weatherDivBG.style.cssText = "background-color: rgb(28,196,212);";
        } else if (hour < 4 || hour >= 22) {
          //night
          getBody.setAttribute("style", "background: url('img/space.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(28,0,40);";
          weatherGreeting = "Goodnight :)";

          
          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

          weatherDiv.style.cssText = 'background-color: rgb(28,0,40);';

          weatherDivBG.style.cssText = "background-color: rgb(2,2,2);";
        } else if (hour === 4 || hour === 5) {
          //morning
          getBody.setAttribute("style", "background: url('img/coffee.jpg'); background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(28,106,92);";
          weatherGreeting = "Good Morning";

          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

          weatherDiv.style.cssText = 'background-color: rgb(28,106,92);';

          weatherDivBG.style.cssText = "background-color: rgb(28,144,128);";
        }

        break;

      default:

        if (hour < 4 || hour >= 22) {
          //night
          getBody.setAttribute("style", "background: url('img/space.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(28,0,40);";
          weatherGreeting = "Goodnight :)";

          
          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

          weatherDiv.style.cssText = 'background-color: rgb(28,0,40);';

          weatherDivBG.style.cssText = "background-color: rgb(2,2,2);";
          //evening
        } else if (hour >= 18 && hour < 22) {
          getBody.setAttribute("style", "background: url('img/city2.jpg'); background-repeat: no-repeat; background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(192,0,96);";
          weatherGreeting = "Good Evening";

          
          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';


          weatherDiv.style.cssText = 'background-color: rgb(72,0,144);';

          weatherDivBG.style.cssText = "background-color: rgb(0,196,212);";
        } else if (hour === 4 || hour === 5) {
          //morning
          getBody.setAttribute("style", "background: url('img/coffee.jpg'); background-size: cover; background-repeat: repeat;");
          
          greetingBar.style.cssText = "background-color: rgb(0,106,92);";
          weatherGreeting = "Good Morning";

          
          lowTempDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeDiv.style.cssText = 'border-color: rgb(255,255,255);';
          humidityDiv.style.cssText = 'border-color: rgb(255,255,255);';
          windDiv.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoDiv.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseDiv.style.cssText = 'border-color: rgb(255,255,255);';

          feelsLikeVal.style.cssText = 'border-color: rgb(255,255,255);';
          humidityVal.style.cssText = 'border-color: rgb(255,255,255);';
          windVal.style.cssText = 'border-color: rgb(255,255,255);';
          conditionsInfoVal.style.cssText = 'border-color: rgb(255,255,255);';
          sunriseVal.style.cssText = 'border-color: rgb(255,255,255);';

          weatherDiv.style.cssText = 'background-color: rgb(0,106,92);';

          weatherDivBG.style.cssText = "background-color: rgb(0,144,128);";
        }
        break;
    }
  }
}



/*
for(let i = 0; i < 1000; i++) {
  let counter = 0;

  if(next === 0) {
    resultFunct('Miami Beach');
  } else {
    setTimeout(() => {
      resultFunct('Miami Beach');
    }, next + 4000);
  }

  counter += 1;

  setTimeout(() => {
    resultFunct('Orlando');
    //// ////////console.log(`Counter: ${counter}`);
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Savannah');
    //// ////////console.log(`Counter: ${counter}`);
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('New Orleans');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Toronto');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Juneau');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Honolulu');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Stockholm');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Helsinki');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Oslo');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Reykjavik');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Dublin');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('London');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Zurich');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Edinburgh');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Tokyo');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Seattle');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('San Francisco');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Nashville');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Atlanta');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Birmingham');
    counter += 1;
  }, next + (counter * 4000));

  setTimeout(() => {
    resultFunct('Talladega');
    counter += 1;
  }, next + (counter * 4000));

  next += (counter * 4000);
}*/


/*
fetch("https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast?fields=precipitation&unit_system=si&lat=42.8237618&lon=-71.2216286", {
	"method": "GET",
	"headers": {
    Access-Control-Allow-Origin: *,
		"x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com",
		"x-rapidapi-key": "4YOfKk1jJFr46QyS313af6auEdQ6lXN6"
	}
})
.then(response => {
	// ////////console.log(response);
})
.catch(err => {
	// ////////console.log(err);
});
*/

function getDateTimeInfo(timezoneOffset) {
  let dayOfWeekText, currYear, monthText, dateOfMonth, currHour;

  dayOfWeekText = getDayOfWeek(dayOfWeek, timezoneOffset)[0];
  currHour = getDayOfWeek(dayOfWeek, timezoneOffset)[1];
  currMin = getDayOfWeek(dayOfWeek, timezoneOffset)[2];
  currSec = getDayOfWeek(dayOfWeek, timezoneOffset)[3];
  timeOfDay = getDayOfWeek(dayOfWeek, timezoneOffset)[4];

  currYear = getYearMonthDate(year, month, dayOfMonth, hour, timezoneOffset)[0];
  monthText = getYearMonthDate(year, month, dayOfMonth, hour, timezoneOffset)[1];
  dateOfMonth = getYearMonthDate(year, month, dayOfMonth, hour, timezoneOffset)[2];

  // ////////console.log(`Day of Week: ${dayOfWeekText}`);
  // ////////console.log(`Month: ${monthText}`);

  return [monthText, dateOfMonth, currYear, dayOfWeekText, currHour, currMin, currSec, timeOfDay];
}



function getDayOfWeek(dayOfWeek, timezoneOffset) {
  console.log(`dayOfWeek = ${dayOfWeek}`);
  
  let hr = hour + timezoneOffset;

  let dayOfWkTxt;

  switch (dayOfWeek) {
    case 0:
      console.log('today is Sunday');
      dayOfWkTxt = 'Sunday';
      break;
    case 1:
      console.log('today is Monday');
      dayOfWkTxt = 'Monday';
      break;
    case 2:
      console.log('today is Tuesday');
      dayOfWkTxt = 'Tuesday';
      break;
    case 3:
      console.log('today is Wednesday');
      dayOfWkTxt = 'Wednesday';
      break;
    case 4:
      console.log('today is Thursday');
      dayOfWkTxt = 'Thursday';
      break;
    case 5:
      console.log('today is Friday');
      dayOfWkTxt = 'Friday';
      break;
    case 6:
      console.log('today is Saturday');
      dayOfWkTxt = 'Saturday';
      break;
    default:
      console.log('ERROR');
      dayOfWkTxt = 'ERROR';
      break;
  }

  if (hr > 23 && dayOfWeek < 6) {
    console.log('after midnight, before Saturday');
    
    hr -= 24;
    dayOfWeek += 1;
  } else if (hr > 23 && dayOfWeek === 6) {
    console.log('after midnight, Saturday');

    hr -= 24;
    dayOfWeek = 0;
  } else if (hr < 0 && dayOfWeek > 0) {
    console.log('before midnight, after Sunday');

    hr += 12;
    dayOfWeek -= 1;
  } else if (hr < 0 && dayOfWeek === 0) {
    console.log('before midnight, Sunday');

    hr += 12;
    dayOfWeek = 6;
  }

  console.log(dayOfWkTxt);

  ////////console.log(`HR BEFORE FORMAT: ${hr}`);
  const time = formatDate(hr);

  hr = time[0];
  minute = time[1];
  second = time[2];
  timeOfDay = time[3];

  ////////console.log(`HR: ${hr} ${timeOfDay}`);

  // ////////console.log(`Current Time: ${hr}:${minute}:${second} ${timeOfDay}`);

  return [dayOfWkTxt, hr, minute, second, timeOfDay];
}

/*
date = new Date();

hour = date.getHours();
min = date.getMinutes();
sec = date.getSeconds();
dayOfWeek = date.getDay();
month = date.getMonth();
dayOfMonth = date.getDate();
year = date.getFullYear();
*/

function getYearMonthDate(year, month, dateOfMonth, hour, timezoneOffset) {
  const maxMonth = 11;
  let maxDate, monthTxt;

  maxDate = getMaxDate(month);

  if (hour + timezoneOffset > 23 && dateOfMonth === maxDate && month === maxMonth) {
    // to new year
    month++;
    year++;
    dateOfMonth = 1;
  } else if(hour + timezoneOffset > 23 && dateOfMonth === maxDate) {
    // to next month
    month++;
    dateOfMonth = 1;
  } else if(hour + timezoneOffset > 23 && dateOfMonth < maxDate) {
    // to next day
    dateOfMonth++;
  } else if(hour + timezoneOffset < 0 && dateOfMonth === 1 && month === 0) {
    // to prev year
    month = maxMonth;
    year--;
    dateOfMonth = 31;
  } else if(hour + timezoneOffset < 0 && dateOfMonth === 1) {
    // to prev month
    month--;
    dateOfMonth = getMaxDate(month);
  } else if(hour + timezoneOffset + timezoneOffset < 0 && dateOfMonth > 1) {
    // to prev date
    dateOfMonth--;
  }

  switch (month) {
    case 0:
      monthTxt = 'January';
      break;
    case 1:
      monthTxt = 'February';
      break;
    case 2:
      monthTxt = 'March';
      break;
    case 3:
      monthTxt = 'April';
      break;
    case 4:
      monthTxt = 'May';
      break;
    case 5:
      monthTxt = 'June';
      break;
    case 6:
      monthTxt = 'July';
      break;
    case 7:
      monthTxt = 'August';
      break;
    case 8:
      monthTxt = 'September';
      break;
    case 9:
      monthTxt = 'October';
      break;
    case 10:
      monthTxt = 'November';
      break;
    case 11:
      monthTxt = 'December';
      break;
  }

  // ////////console.log(`Today's Date: ${monthTxt} ${dateOfMonth}, ${year}`);

  return [year, monthTxt, dateOfMonth];
}

function getMaxDate(month) {
  let maxDate;

  if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
    maxDate = 31;
  } else if (month === 3 || month === 5 || month === 8 || month === 10) {
    maxDate = 30;
  } else if (month === 1) {
    // NOT a leapyear
    if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
      maxDate = 28;
      // IS a leapyear
    } else {
      maxDate = 29;
    }
  }

  return maxDate;
}

function formatDate(hr) {
  let currMin, currSec, timeOfDay;

  currMin = min.toString();
  currSec = sec.toString();

  ////////console.log(`Current hourrrrrrr: ${hr}`);

  if(hr > 12 && hr <= 23) {
    hr -= 12;
    timeOfDay = 'PM';
  } else if(hr === 0) {
    hr = 12;
    timeOfDay = 'AM';
  } else if(hr === 12) {
      timeOfDay = 'PM';
  } else {
    timeOfDay = 'AM';
  }

// correct min and second format code
  if(min < 10 && currMin.length < 2) {
    currMin = `0${min}`;
  } else {
    currMin = `${min}`;
  }

  if(sec < 10 && currSec.length < 2) {
    currSec = `0${sec}`;
  } else {
    currSec = sec;
  }

  return [hr, currMin, currSec, timeOfDay];
}

function formatDateTick(hr, min, sec) {
  let currMin, currSec, timeOfDay;

  currMin = min.toString();
  currSec = sec.toString();

  ////////console.log(`Current hourrrrrrr: ${hr}`);

  //console.log(`hour2 after passed in: ${hr}`);
  if(hr > 12 && hr <= 23) {
    hr -= 12;
    timeOfDay = 'PM';
    //console.log('> 12 and <= 23');
  } else if(hr === 0) {
    hr = 12;
    timeOfDay = 'AM';
    //console.log('hr = 0');
  } else if(hr === 12) {
      timeOfDay = 'PM';
      //console.log('hr = 12');
  } else if(hr >= 0 && hr < 12) {
    timeOfDay = 'AM';
    //console.log('default');
  }

// correct min and second format code
  if(min < 10 && currMin.length < 2) {
    currMin = `0${min}`;
  } else {
    currMin = `${min}`;
  }

  if(sec < 10 && currSec.length < 2) {
    currSec = `0${sec}`;
  } else {
    currSec = sec;
  }

  //console.log(`tod2 before return: ${timeOfDay}`);

  return [hr, currMin, currSec, timeOfDay];
}





function positionFile(file, tempConditions, conditions, temp, conditionsImg) {
  const date3 = new Date();
  const hour3 = date3.getHours();

  console.log(`hour 3 is ${hour3}`);

/*
setTimeout(() => {
  if(smallMobileW.matches && portraitW.matches) {
    // leftDiv.style.top = '-10vh';
    // rightDiv.style.top = '-10vh';
  } else if(smallMobileW.matches && landscapeW.matches) {
    // leftDiv.style.top = '10vh';
    // rightDiv.style.top = '10vh';
  } else if(medMobileW.matches && portraitW.matches) {
    // leftDiv.style.top = '-8vh';
    // rightDiv.style.top = '-8vh';
  } else if(medMobileW.matches && landscapeW.matches) {
    // leftDiv.style.top = '10vh';
    // rightDiv.style.top = '10vh';
  } else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {
    // leftDiv.style.top = '8vh';
    // rightDiv.style.top = '8vh';
  } else if(lrgMobileW.matches && portraitW.matches && !xlMobileW.matches) {
    // leftDiv.style.top = '-10vh';
    // rightDiv.style.top = '-10vh';

    leftDiv.style.width = '40vw';
    // rightDiv.style.width = '40vw';
  } else if(lrgMobileW.matches && landscapeW.matches && !xlMobileW.matches) {
    // leftDiv.style.top = '5vh';
    leftDiv.style.width = '31vw';
    // rightDiv.style.top = '5vh';
    // rightDiv.style.width = '31vw';

    document.querySelector('.temp').style.left = '1.6vw';
  } else if(lrgMobileW.matches && portraitW.matches && xlMobileW.matches) {
    console.log('WHY THE FUCK WON\'T YOU CALL THIS??????');

    // leftDiv.style.top = '-4.8vh';
    // leftDiv.style.right = '47vw';
    // rightDiv.style.top = '-4.8vh';
    // rightDiv.style.left = '47vw';
  } else if(lrgMobileW.matches && landscapeW.matches && xlMobileW.matches) {
    // leftDiv.style.top = '20vh';
    leftDiv.style.width = '39vw';
    // leftDiv.style.right = '11vw';
    // rightDiv.style.top = '20vh';
    // rightDiv.style.width = '39vw';
    // rightDiv.style.left = '11vw';

    document.querySelector('.temp').style.left = '1.6vw';
  }

  if(maxWidth600.matches && landscapeW.matches) {
    leftDiv.style.width = '32vw';
    // rightDiv.style.width = '32vw';

    // leftDiv.style.right = '26vw';
    // rightDiv.style.left = '26vw';

    rightDiv.style.fontSize = '0.76em';
  }

  if(maxWidth370.matches && portraitW.matches) {
    leftDiv.style.width = '64vw';
  } else if(maxHeight370.matches && landscapeW.matches) {
    leftDiv.style.width = '30vw';
  }

},24);
*/  
  
  console.log(`desktopW.matches: ${desktopW.matches}`);
  console.log(`landscapeW.matches: ${landscapeW.matches}`);
  
/*  if(desktopW.matches && landscapeW.matches) {
    console.log("The conditions of this if statement are met, however I will not execute what\'s inside because I, the program, am a little bitch who is insistent on making the developer\'s life unneccessarily difficult.");
    
    lrDivs.style.position = 'absolute';
    lrDivs.style.bottom = '-14vh';
  }
*/




  switch (file) {
    case 'sunny.png':
      
      if(hour >= 4 && hour < 12) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
      } else if(hour >= 12 && hour < 18) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
      } else if(hour >= 18 && hour < 22) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
      } else if(hour >= 22 || hour < 4) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
      }

      city.style.color = 'rgb(255,255,255)';
      greetingBarTxt.style.color = 'rgb(255,255,255)';
      temp.style.color = 'rgb(2,2,2)';
      
    
      if(desktopW.matches) {
        tempConditions.style.cssText = 'top: 16vh;';
        conditions.style.cssText = `top: 0;`;
        
        // // city.style.top = '1vh';
        // // city.style.fontSize = '6.2em';


        /*
        if(window.matchMedia("(max-height: 749px)").matches) {
          temp.style.top = '33.14%';

          // leftDiv.style.right = '19.14vw';
          // rightDiv.style.left = '19.14vw';

          document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 251px;';
        } else if(window.matchMedia("(min-height: 1000px)").matches) {
          // city.style.fontSize = '7.2em';
          // city.style.top = '2vh';
*/
          

   if(window.matchMedia("(min-width: 2000px)").matches) {
    if(tempReading <= -1) {
      temp.style.left = '-1vw';
    } else {
      temp.style.left = '0.5vw';
    }
  } else if(window.matchMedia("(min-width: 1900px)").matches) {
    if(tempReading <= -1) {
      temp.style.left = '-0.8vw';
    } else {
      temp.style.left = '0.7vw';
    }
  } else if(window.matchMedia("(min-width: 1700px)").matches) {
    if(tempReading <= -1) {
      temp.style.left = '-0.7vw';
    } else {
      temp.style.left = '0.8vw';
    }
  } else if(window.matchMedia("(min-width: 1600px)").matches) {
    if(tempReading <= -1) {
      temp.style.left = '-0.6vw';
    } else {
      temp.style.left = '0.9vw';
    }
  } else if(window.matchMedia("(min-width: 1400px)").matches) {
    if(tempReading <= -1) {
      temp.style.left = '-0.5vw';
    } else {
      temp.style.left = '1vw';
    }
  } else if(window.matchMedia("(min-width: 1300px)").matches) {
    if(tempReading <= -1) {
      temp.style.left = '-0.7vw';
    } else {
      temp.style.left = '0.8vw';
    }
  }

  if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
    

    if(window.matchMedia("(max-height: 525px)").matches) {
      conditions.style.cssText = `top: 0vh;`;

      temp.style.top = '16.6vh';
    } else if(window.matchMedia("(max-height: 550px)").matches) {
      conditions.style.cssText = `top: 1.5vh;`;

      temp.style.top = '17.42vh';
    } else if(window.matchMedia("(max-height: 575px)").matches) {
      conditions.style.cssText = `top: 3vh;`;

      temp.style.top = '18.24vh';
    } else {
      conditions.style.cssText = `top: 4.5vh;`;
      
      temp.style.top = '18.24vh';
    }
  } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
    
    if(window.matchMedia("(max-height: 625px)").matches) {
      conditions.style.cssText = `top: 1.5vh;`;

      temp.style.top = '16.6vh';
    } else if(window.matchMedia("(max-height: 650px)").matches) {
      conditions.style.cssText = `top: 3vh;`;

      temp.style.top = '17.42vh';
    } else if(window.matchMedia("(max-height: 675px)").matches) {
      conditions.style.cssText = `top: 4.7vh;`;

      temp.style.top = '18.24vh';
    } else {
      conditions.style.cssText = `top: 4.6vh;`;
      
      temp.style.top = '17.6vh';
    }

  } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
    temp.style.top = '14.4vh';

    if(window.matchMedia("(max-height: 725px)").matches) {
      conditions.style.cssText = `top: 1vh;`;
    } else if(window.matchMedia("(max-height: 750px)").matches) {
      conditions.style.cssText = `top: 1.75vh;`;
    } else if(window.matchMedia("(max-height: 775px)").matches) {
      conditions.style.cssText = `top: 1.75vh;`;
    } else {
      conditions.style.cssText = `top: 2.25vh;`;
    }
  } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
    
    temp.style.top = '14.9vh';

    if(window.matchMedia("(max-height: 825px)").matches) {
      conditions.style.cssText = `top: 3vh;`;
    } else if(window.matchMedia("(max-height: 850px)").matches) {
      conditions.style.cssText = `top: 3.25vh;`;
    } else if(window.matchMedia("(max-height: 875px)").matches) {
      conditions.style.cssText = `top: 3.5vh;`;
    } else {
      conditions.style.cssText = `top: 3.75vh;`;
    }

  } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
    
    temp.style.top = '15.65vh';
    
    if(window.matchMedia("(max-height: 925px)").matches) {
      conditions.style.cssText = `top: 5vh;`;
    } else if(window.matchMedia("(max-height: 950px)").matches) {
      conditions.style.cssText = `top: 5.25vh;`;
    } else if(window.matchMedia("(max-height: 975px)").matches) {
      conditions.style.cssText = `top: 5.5vh;`;
    } else {
      conditions.style.cssText = `top: 5.75vh;`;
    }

  } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
    
    temp.style.top = '16vh';
    
    if(window.matchMedia("(max-height: 1025px)").matches) {
      conditions.style.cssText = `top: 6vh;`;
    } else if(window.matchMedia("(max-height: 1050px)").matches) {
      conditions.style.cssText = `top: 6.25vh;`;
    } else if(window.matchMedia("(max-height: 1075px)").matches) {
      conditions.style.cssText = `top: 6.5vh;`;
    } else {
      conditions.style.cssText = `top: 6.75vh;`;
    }

  } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
    
    temp.style.top = '14.96vh';

    if(window.matchMedia("(max-height: 1125px)").matches) {
      conditions.style.cssText = `top: 6vh;`;
    } else if(window.matchMedia("(max-height: 1150px)").matches) {
      conditions.style.cssText = `top: 6.25vh;`;
    } else if(window.matchMedia("(max-height: 1175px)").matches) {
      conditions.style.cssText = `top: 6.5vh;`;
    } else {
      conditions.style.cssText = `top: 6.75vh;`;
    }
    
  } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
    
    temp.style.top = '14.2vh';

    if(window.matchMedia("(max-height: 1225px)").matches) {
      conditions.style.cssText = `top: 6vh;`;
    } else if(window.matchMedia("(max-height: 1250px)").matches) {
      conditions.style.cssText = `top: 6.25vh;`;
    } else if(window.matchMedia("(max-height: 1275px)").matches) {
      conditions.style.cssText = `top: 6.5vh;`;
    } else {
      conditions.style.cssText = `top: 6.75vh;`;
    }

  } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
    
    temp.style.top = '14.7vh';

    if(window.matchMedia("(max-height: 1325px)").matches) {
      conditions.style.cssText = `top: 7vh;`;
    } else if(window.matchMedia("(max-height: 1350px)").matches) {
      conditions.style.cssText = `top: 7.25vh;`;
    } else if(window.matchMedia("(max-height: 1375px)").matches) {
      conditions.style.cssText = `top: 7.5vh;`;
    } else {
      conditions.style.cssText = `top: 7.75vh;`;
    }

  } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
    
    temp.style.top = '14.2vh';

    if(window.matchMedia("(max-height: 1425px)").matches) {
      conditions.style.cssText = `top: 7vh;`;
    } else if(window.matchMedia("(max-height: 1450px)").matches) {
      conditions.style.cssText = `top: 7.25vh;`;
    } else if(window.matchMedia("(max-height: 1475px)").matches) {
      conditions.style.cssText = `top: 7.5vh;`;
    } else {
      conditions.style.cssText = `top: 7.75vh;`;
    }

  } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
    
    temp.style.top = '14.4vh';

    if(window.matchMedia("(max-height: 1525px)").matches) {
      conditions.style.cssText = `top: 8vh;`;
    } else if(window.matchMedia("(max-height: 1550px)").matches) {
      conditions.style.cssText = `top: 8.25vh;`;
    } else if(window.matchMedia("(max-height: 1575px)").matches) {
      conditions.style.cssText = `top: 8.5vh;`;
    } else {
      conditions.style.cssText = `top: 8.75vh;`;
    }

  } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
    
    temp.style.top = '14vh';

    if(window.matchMedia("(max-height: 1625px)").matches) {
      conditions.style.cssText = `top: 8vh;`;
    } else if(window.matchMedia("(max-height: 1650px)").matches) {
      conditions.style.cssText = `top: 8.25vh;`;
    } else if(window.matchMedia("(max-height: 1675px)").matches) {
      conditions.style.cssText = `top: 8.5vh;`;
    } else {
      conditions.style.cssText = `top: 8.75vh;`;
    }

  } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
    
    temp.style.top = '14vh';

    conditions.style.top = '8.25vh';

  } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {
    
    temp.style.top = '13.5vh';
    
    conditions.style.cssText = `top: 8.25vh;`;
  } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
    
    

    if(window.matchMedia("(min-height: 976px)").matches) {
      temp.style.top = '15vh';  
    } else {
      temp.style.top = '15.5vh';
    }
    
    conditions.style.cssText = `top: 10.25vh;`;

  } else {
    
    temp.style.top = '15vh';
    
    conditions.style.cssText = `top: 10.25vh;`;
  }


  if(window.matchMedia("(max-height: 599px)").matches) {
    document.querySelector('.conditions img').style.cssText = 'height: 254px; width: 272px;';
  } else if(window.matchMedia("(max-height: 699px)").matches) {
    document.querySelector('.conditions img').style.cssText = 'height: 269px; width: 280px;';
  } else if(window.matchMedia("(min-height: 800px)").matches) {
    document.querySelector('.conditions img').style.cssText = 'height: 289px; width: 294px;';
  } else {
    document.querySelector('.conditions img').style.cssText = 'height: 279px; width: 284px;';
  }

        
      } else if(portraitW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

        if(moon260.matches) {
            temp.style.cssText = 'top: 11.6%; margin: auto;';

            if(tempReading <= -1) {
              temp.style.left = '2vw';
            } else {
              temp.style.left = '4vw';
            } 

            tempConditions.style.cssText = 'top: 8.2vh;';
            conditions.style.cssText = `top: 3.5vh;`;
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {
            const minWidth481 = window.matchMedia('(min-width: 481px)');
            
            if(minWidth481.matches) {
              temp.style.cssText = 'top: 6.6vh; margin: auto;';

              // temp.style.fontSize = '4.8em';
              conditions.style.cssText = `top: 0;`;

              if(tempReading <= -1) {
                temp.style.left = '-0.4vw';
              } else {
                temp.style.left = '1.6vw';
              } 
            } else if(window.matchMedia("(min-width: 400px)").matches) {
              temp.style.cssText = 'top: 10.4vh; margin: auto;';
              conditions.style.cssText = `top: 0vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '0.2';
              } else {
                temp.style.left = '2.2vw';
              } 
            } else if(window.matchMedia("(min-width: 380px)").matches) {
              temp.style.cssText = 'left: 3vw; top: 12.7%; margin: auto;';
              conditions.style.cssText = `top: 0vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '0.7vw';
              } else {
                temp.style.left = '2.7vw';
              } 
            } else if(window.matchMedia("(min-height: 647px)").matches) {
              temp.style.cssText = 'left: 3vw; top: 11.7%; margin: auto;';

              if(window.matchMedia("(max-height: 660px)").matches) {
                conditions.style.cssText = `top: -0.5vh;`;
              } else {
                conditions.style.cssText = `top: 0vh;`;
              }
              
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '1vw';
              } else {
                temp.style.left = '3vw';
              } 

              if(window.matchMedia("(max-width: 300px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '1.84vw';
                } else {
                  temp.style.left = '3.84vw';
                } 
              } else {
                if(tempReading <= -1) {
                  temp.style.left = '1vw';
                } else {
                  temp.style.left = '3vw';
                } 
              }


            } else {
              temp.style.cssText = 'left: 3vw; top: 12.7%; margin: auto;';
              conditions.style.cssText = `top: 0vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '1vw';
              } else {
                temp.style.left = '3vw';
              }
              
            }


            if(maxHeight600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 177px; width: 191px;';
              temp.style.top = '13.34%';
              conditions.style.cssText = 'top: 1vh;';

              // temp.style.fontSize = '3.7em';
            } else if(minWidth481.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 245px;';
            } else if(window.matchMedia("(min-width: 370)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 230px;';
            } else {
              if(window.matchMedia("(min-height: 660px)").matches) {
                temp.style.top = '12.6%';

                document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 224px;';
              } else if(window.matchMedia("max-width: 300px")) {
                document.querySelector('.conditions img').style.cssText = 'height: 218px; width: 224px;';
              } else if(window.matchMedia("(min-height: 647px)").matches) {
                temp.style.top = '12.7%';

                document.querySelector('.conditions img').style.cssText = 'height: 218px; width: 224px;';
              } else {
                temp.style.top = '12.9%';

                document.querySelector('.conditions img').style.cssText = 'height: 218px; width: 228px;';
              }
            }

            

            tempConditions.style.cssText = 'top: 11vh;';
            

            /*// leftDiv.style.top = '-10vh';
            // rightDiv.style.top = '-10vh';*/
        

            console.log('GUESS WHO?');

            if(window.matchMedia("(min-height: 700px)").matches) {
              if(window.matchMedia("(max-height: 728px)").matches) {
                temp.style.top = '12.46%';

                conditions.style.top = '-0.75vh';

                if(window.matchMedia("(min-width: 500px)").matches) {
                  if(tempReading <= -1) {
                    temp.style.left = '0.5vw';
                  } else {
                    temp.style.left = '2.5vw';
                  }

                  document.querySelector('.conditions img').style.cssText = 'height: 255px; width: 258px;';
                }

                

                
              } else {
                temp.style.top = '13.3%';

                document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 245px;';
              }

              
            }
            
          } 




          if(window.matchMedia("(min-height: 800px)").matches) {
            // // city.style.fontSize = '3.7em';
            conditions.style.top = '-0.25vh';

            if(window.matchMedia("(min-height: 1000px)").matches) {
              temp.style.top = '10.4%';

              conditions.style.top = '0.25vh';

              document.querySelector('.conditions img').style.cssText = 'height: 270px; width: 274px;';
            } else if(window.matchMedia("(min-height: 900px)").matches) {
              temp.style.top = '10.6%';

              document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 262px;';
            } else if(window.matchMedia("(min-height: 851px)").matches) {
              temp.style.top = '12.5%';
              conditions.style.top = '0vh';

              document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 251px;';
            } else if(window.matchMedia("(min-height: 820px)").matches) {
              temp.style.top = '12.6%';
              conditions.style.top = '0vh';

              document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 251px;';
            } else {
              temp.style.top = '12.6%';

              document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 251px;';
            }
            
            
               
            document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
            document.querySelector('.date-and-time').style.fontSize = '1.1em';
          }

          
/*
          if(hour3 >= 4 && hour < 12) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
          } else if(hour >= 12 && hour < 18) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
          } else if(hour >= 18 && hour < 22) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
          } else if(hour >= 22 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
          }*/
      }  else if(landscapeW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

       /* if(moon260.matches) {
            temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 7.2vh;';
            conditions.style.cssText = `top: 2.5vh;`;
        
            conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {*/
            

            temp.style.cssText = 'margin: auto;';

            // temp.style.fontSize = '2.8em';

            if(window.matchMedia("(min-width: 700px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '-0.25vw';
              } else {
                temp.style.left = '1.25vw';
              } 
            } else if(window.matchMedia("(min-width: 660px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '-0.33vw';
              } else {
                temp.style.left = '1.17vw';
              } 
            } else if(window.matchMedia("(min-width: 647px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '-0.5vw';
              } else {
                temp.style.left = '1vw';
              } 
            } else {
              if(tempReading <= -1) {
                temp.style.left = '-0.15vw';
              } else {
                temp.style.left = '1.35vw';
              } 
            }

            if(window.matchMedia("(min-height: 420px)").matches) {
              temp.style.top = '19.6vh';

              document.querySelector('.conditions img').style.cssText = 'height: 170px; width: 170px;';
            } else if(window.matchMedia("(min-height: 400px)").matches) {
              temp.style.top = '22.6vh';

              document.querySelector('.conditions img').style.cssText = 'height: 165px; width: 170px;';
            } else if(window.matchMedia("(min-height: 373px)").matches) {  
              temp.style.top = '22.6vh';

              document.querySelector('.conditions img').style.cssText = 'height: 158px; width: 162px;';
            } else {  
              temp.style.top = '21.35vh';

              document.querySelector('.conditions img').style.cssText = 'height: 154px; width: 158px;';
            }

            // document.querySelector('.conditions img').style.cssText = 'height: 170px; width: 170px;';

            tempConditions.style.cssText = 'top: 9.6vh;';

            if(window.matchMedia("(max-height: 300px)").matches) {
              conditions.style.cssText = `top: 8.6vh;`;
            } else {
              conditions.style.cssText = `top: 10.7vh;`;
            }
            

            setTimeout(() => {

              if(window.matchMedia("(min-width: 700px)").matches) {
                // leftDiv.style.right = '23.5vw';
                // rightDiv.style.left = '23.5vw';
              } else if(window.matchMedia("(max-width: 600px)").matches) {
                // leftDiv.style.right = '30vw';
                // rightDiv.style.left = '30vw';
              } else {
                // leftDiv.style.right = '22vw';
                // rightDiv.style.left = '22vw';

                /*leftDiv.style.width = '32vw';
                // rightDiv.style.width = '32vw';*/
              }

              if(window.matchMedia("(max-width: 600px)").matches) {
                // rightDiv.style.width = '31vw';
              } else if(window.matchMedia("(max-width: 767px)").matches) {
                // rightDiv.style.width = '30vw';
              }

              if(window.matchMedia("(min-height: 314px)").matches) {
                  // leftDiv.style.top = '8vh';
                  // rightDiv.style.top = '8vh';
              }
            },28);
        
            if(window.matchMedia("(min-width: 700px)").matches && window.matchMedia("(min-height: 500px)").matches) {
              temp.style.top = '25.2vh';
              conditions.style.top = '14.7vh';

              // temp.style.fontSize = '3.2em';

              if(tempReading <= -1) {
                temp.style.left = '-0.3vw';
              } else {
                temp.style.left = '1.2vw';
              } 
              document.querySelector('.conditions img').style.cssText = 'height: 167px; width: 172px;';
            } else if(window.matchMedia("(max-height: 300px)").matches) {
              temp.style.top = '25.5vh';
              conditions.style.top = '9.1vh';
              document.querySelector('.conditions img').style.cssText = 'height: 144px; width: 151px; top: 5.1vh;';
            } else if(window.matchMedia("(max-height: 372px)").matches) {
              conditions.style.top = '8vh';
            } else if(window.matchMedia("(max-height: 397px)").matches) {
              conditions.style.top = '9vh';
            } else if(window.matchMedia("(max-height: 600px)").matches) {
              conditions.style.top = '9.5vh';
            } else {
              document.querySelector('.conditions img').style.cssText = 'height: 166px; width: 166px;';
            }
            

            if(maxWidth600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 130px; width: 132px;';

              setTimeout(() => {
                // leftDiv.style.right = '26vw';
                // rightDiv.style.left = '26vw';
              },28);
              

              // temp.style.fontSize = '3em';
              temp.style.top = '23vh';
              conditions.style.top = '9.9vh';


              if(tempReading <= -1) {
                temp.style.left = '-0.1vw';
              } else {
                temp.style.left = '1.4vw';
              } 
            }
         // }
          
        }  else if(portraitW.matches && medMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");
  
         /* if(moon260.matches) {
              temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 7.2vh;';
              conditions.style.cssText = `top: 2.5vh;`;
          
              conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {*/
              
  
              
  
              tempConditions.style.cssText = 'top: 9.6vh;';

              // // city.style.top = '1vh';
              

              if(window.matchMedia("(min-height: 1153px)").matches && window.matchMedia("(min-width: 1000px)").matches) {
                temp.style.cssText = 'left: 1.4vw; top: 11.75vh; margin: auto;';
                conditions.style.cssText = `top: 3vh;`;

                if(tempReading <= -1) {
                  temp.style.left = '-0.6vw';
                } else {
                  temp.style.left = '1.4vw';
                }

                document.querySelector('.conditions img').style.cssText = 'height: 346px; width: 356px;';
              } else if(window.matchMedia("(min-height: 1153px)").matches) {
                temp.style.cssText = 'top: 10.96vh; margin: auto;';
                conditions.style.cssText = `top: 2.25vh;`;

                if(tempReading <= -1) {
                  temp.style.left = '-0.25vw';
                } else {
                  temp.style.left = '1.75vw';
                }

                document.querySelector('.conditions img').style.cssText = 'height: 334px; width: 346px;';
              } else {
                temp.style.cssText = 'top: 11.1vh; margin: auto;';
                conditions.style.cssText = `top: 2vh;`;

                if(tempReading <= -1) {
                  temp.style.left = '-0.5vw';
                } else {
                  temp.style.left = '1.5vw';
                }

                document.querySelector('.conditions img').style.cssText = 'height: 300px; width: 312px;';
              }
          
              
           // }
            
          }  else if(landscapeW.matches && medMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                
    
                if(window.matchMedia("(min-height: 511px)").matches) {
                  temp.style.cssText = 'top: 22.6vh; margin: auto;';

                    if(window.matchMedia("(min-width: 1000px)").matches) {
                      if(tempReading <= -1) {
                        temp.style.left = '-0.61vw';
                      } else {
                        temp.style.left = '0.89vw';
                      }
                    } else {
                      if(tempReading <= -1) {
                        temp.style.left = '-0.5vw';
                      } else {
                        temp.style.left = '1vw';
                      }
                    }
                  

                // temp.style.fontSize = '4em';
    
                tempConditions.style.cssText = 'top: 9.6vh;';
                
            
                if(window.matchMedia("(min-height: 700px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 229px;';
                  conditions.style.cssText = `top: 16.2vh;`;
                  temp.style.top = '26.8vh';
                } else {
                  document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 218px;';
                  conditions.style.cssText = `top: 13.4vh;`;
                  temp.style.top = '25.6vh';
                }

                } else {
                  temp.style.cssText = 'margin: auto;';

                  if(tempReading <= -1) {
                    temp.style.left = '-0.5vw';
                  } else {
                    temp.style.left = '1vw';
                  }
    
                tempConditions.style.cssText = 'top: 9.6vh;';

                if(window.matchMedia("(min-height: 400px)").matches) {
                  conditions.style.cssText = `top: 10.2vh;`;
                } else {
                  conditions.style.cssText = `top: 8.2vh;`;
                }
                

                // temp.style.fontSize = '3.2em';

                // leftDiv.style.right = '23vw';

                // rightDiv.style.left = '23vw';

                if(window.matchMedia('(min-height: 400px)').matches) {
                  temp.style.top = '23vh';
                } else {
                  temp.style.top = '24vh';
                }
            

                if(window.matchMedia("(min-width: 800px)").matches && window.matchMedia("(max-height: 447px)").matches) {

                  if(tempReading <= -1) {
                    temp.style.left = '-0.25vw';
                  } else {
                    temp.style.left = '1.25vw';
                  }

                  if(window.matchMedia("(max-height: 411px)").matches) {
                    temp.style.top = '23.24vh';

                    document.querySelector('.conditions img').style.cssText = 'height: 172px; width: 184px;';
                  } else {
                    temp.style.top = '24.24vh';

                    document.querySelector('.conditions img').style.cssText = 'height: 177px; width: 192px;';
                  }
                  
                } else if(window.matchMedia("(min-width: 800px)").matches && window.matchMedia("(min-height: 448px)").matches) {
                  conditions.style.top = '12.2vh';
                  temp.style.top = '24.6vh';

                  if(tempReading <= -1) {
                    temp.style.left = '-0.15vw';
                  } else {
                    temp.style.left = '1.35vw';
                  }

                  document.querySelector('.conditions img').style.cssText = 'height: 184px; width: 192px;';
                } else {
                  document.querySelector('.conditions img').style.cssText = 'height: 170px; width: 184px;';
                }
                

                }
                
             // }
              
            }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
      
                  temp.style.cssText = 'top: 12vh; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  conditions.style.cssText = `top: 8vh;`;

                  if(tempReading <= -1) {
                    temp.style.left = '0';
                  } else {
                    temp.style.left = '2vw';
                  }
              
                  //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
               // }
                
              }  else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {
                    temp.style.cssText = 'margin: auto;';

                    // temp.style.fontSize = '4.2em';

                    if(tempReading <= -1) {
                      temp.style.left = '-0.3vw';
                    } else {
                      temp.style.left = '1.2vw';
                    }

                    conditions.style.cssText = `top: 11.1vh;`;

                    document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 272px';

                    if(window.matchMedia("(min-height: 900px)").matches) {
                      temp.style.top = '22.8vh';
                      conditions.style.top = '14.1vh';

                      document.querySelector('.conditions img').style.cssText = 'height: 264px; width: 274px;';
                    } else if(window.matchMedia("(min-height: 800px)").matches) {
                      temp.style.top = '21.8vh';
                    } else {
                      temp.style.top = '20.2vh';
                      conditions.style.cssText = `top: 6.2vh;`;

                      document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 272px';
                    }

                    // // city.style.top = '1vh';
                    // // city.style.fontSize = '6.2em';

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    

                    rightDiv.style.fontSize = '1.6em';

                    
                    document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                    document.querySelector('.date-and-time').style.fontSize = '1.4em';
              }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                const moon260 = window.matchMedia("(max-width: 260px)");
        
               /* if(moon260.matches) {
                    temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 7.2vh;';
                    conditions.style.cssText = `top: 2.5vh;`;
                
                    conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                  } else {*/
                    
        
                    setTimeout(() => {
                      temp.style.cssText = 'margin: auto;';

                      // temp.style.fontSize = '5.1em';

                      if(tempReading <= -1) {
                        temp.style.left = '-0.58vw';
                      } else {
                        temp.style.left = '0.92vw';
                      }

                      let minHeight900 = window.matchMedia("(min-height: 900px)");

                      console.log(`window.innerHeight = ${window.innerHeight}`)
                      console.log(`minHeight900.matches: ${minHeight900.matches}`);

                      if(minHeight900.matches) {
                        temp.style.top = '18.8vh';

                        if(tempReading <= -1) {
                          temp.style.left = '-0.5vw';
                        } else {
                          temp.style.left = '1vw';
                        }
                      } else {


                        temp.style.top = '18.4vh';
                      }
                    },25);
                    
        
                    tempConditions.style.cssText = 'top: 9.6vh;';
                    conditions.style.cssText = `top: 8vh;`;
                    
                    /*if(maxWidth1200.matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                    } else {*/
                      document.querySelector('.conditions img').style.cssText = 'height: 237px; width: 237px;';
                    //}
                    
                 // }
                  
                }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'top: 6.14vh; margin: auto;';

                      // temp.style.fontSize = '6em';

                      if(tempReading <= -1) {
                        temp.style.left = '-0.9vw';
                      } else {
                        temp.style.left = '1.1vw';
                      }
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: -1.5vh;`;

                      setTimeout(() => {
                        leftDiv.style.height = '32vh';
                        rightDiv.style.height = '32vh';

                        
                        
                      },28);
                  
                      document.querySelector('.conditions img').style.cssText = 'height: 277px; width: 295px;';
                   // }
                    
                  }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        setTimeout(() => {
                          temp.style.cssText = 'top: 28vh; margin: auto;';

                          // temp.style.fontSize = '5.1em';

                          if(tempReading <= -1) {
                            temp.style.left = '-0.3vw';
                          } else {
                            temp.style.left = '1.2vw';
                          }

                          // leftDiv.style.right = '12vw';
                          // rightDiv.style.left = '12vw';
                        },25);
                        
            
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        conditions.style.cssText = `top: 20vh;`;
                    
                        document.querySelector('.conditions img').style.cssText = 'height: 267px; width: 274px;';
                     // }
                      
                    } 

      
      break;

    case 'partly-cloudy.png':

      if(hour >= 4 && hour < 12) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
      } else if(hour >= 12 && hour < 18) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
      } else if(hour >= 18 && hour < 22) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
      } else if(hour >= 22 || hour < 4) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
      }

      city.style.color = 'rgb(255,255,255)';
      greetingBarTxt.style.color = 'rgb(255,255,255)';
      temp.style.color = 'rgb(2,2,2)';


      if(desktopW.matches) {
        tempConditions.style.cssText = 'top: 16vh;';
        conditions.style.cssText = `top: -2vh;`;
        temp.style.cssText = 'top: 30%';

        if(tempReading <= -1) {
          temp.style.left = '3.5%';
        } else {
          temp.style.left = '5%';
        }

        // // city.style.top = '1vh';
        // // city.style.fontSize = '6.2em';

        
        if(window.matchMedia("(min-width: 2000px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.36vw';
          } else {
            temp.style.left = '1.14vw';
          }
        } else if(window.matchMedia("(min-width: 1900px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1700px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.1vw';
          } else {
            temp.style.left = '1.4vw';
          }
        } else if(window.matchMedia("(min-width: 1600px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.1vw';
          } else {
            temp.style.left = '1.4vw';
          }
        } else if(window.matchMedia("(min-width: 1400px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.1vw';
          } else {
            temp.style.left = '1.4vw';
          }
        } else if(window.matchMedia("(min-width: 1300px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        }
      
        if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
          
      
          if(window.matchMedia("(max-height: 525px)").matches) {
            conditions.style.cssText = `top: -0.5vh;`;
      
            temp.style.top = '22.5vh';
          } else if(window.matchMedia("(max-height: 550px)").matches) {
            conditions.style.cssText = `top: 1vh;`;
      
            temp.style.top = '23vh';
          } else if(window.matchMedia("(max-height: 575px)").matches) {
            conditions.style.cssText = `top: 2.5vh;`;
      
            temp.style.top = '23.5vh';
          } else {
            conditions.style.cssText = `top: 4vh;`;
            
            temp.style.top = '24vh';
          }


        } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
          
          if(window.matchMedia("(max-height: 625px)").matches) {
            conditions.style.cssText = `top: 1vh;`;
      
            temp.style.top = '21.5vh';
          } else if(window.matchMedia("(max-height: 650px)").matches) {
            conditions.style.cssText = `top: 2vh;`;
      
            temp.style.top = '22vh';
          } else if(window.matchMedia("(max-height: 675px)").matches) {
            conditions.style.cssText = `top: 2.25vh;`;
      
            temp.style.top = '22vh';
          } else {
            conditions.style.cssText = `top: 3vh;`;
            
            temp.style.top = '22vh';
          }
      
        } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
          temp.style.top = '16.6vh';
      
          if(window.matchMedia("(max-height: 725px)").matches) {
            conditions.style.cssText = `top: 0vh;`;
          } else if(window.matchMedia("(max-height: 750px)").matches) {
            conditions.style.cssText = `top: 0.25vh;`;
          } else if(window.matchMedia("(max-height: 775px)").matches) {
            conditions.style.cssText = `top: 0.5vh;`;
          } else {
            temp.style.top = '16.2vh';
            conditions.style.cssText = `top: 1vh;`;
          }
        } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
          
          temp.style.top = '16.2vh';
          conditions.style.top = '1vh';
      
        } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
          
          temp.style.top = '15.2vh';
      
          if(window.matchMedia("(max-height: 925px)").matches) {
            conditions.style.cssText = `top: 1vh;`;
          } else if(window.matchMedia("(max-height: 950px)").matches) {
            conditions.style.cssText = `top: 1.25vh;`;
          } else if(window.matchMedia("(max-height: 975px)").matches) {
            conditions.style.cssText = `top: 1.5vh;`;
          } else {
            conditions.style.cssText = `top: 1.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
          
          temp.style.top = '15.2vh';
      
          if(window.matchMedia("(max-height: 1025px)").matches) {
            conditions.style.cssText = `top: 2vh;`;
          } else if(window.matchMedia("(max-height: 1050px)").matches) {
            conditions.style.cssText = `top: 2.25vh;`;
          } else if(window.matchMedia("(max-height: 1075px)").matches) {
            conditions.style.cssText = `top: 2.5vh;`;
          } else {
            temp.style.top = '14.7vh';
            conditions.style.cssText = `top: 2.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
          
          temp.style.top = '14.7vh';
      
          if(window.matchMedia("(max-height: 1125px)").matches) {
            conditions.style.cssText = `top: 3vh;`;
          } else if(window.matchMedia("(max-height: 1150px)").matches) {
            conditions.style.cssText = `top: 3.25vh;`;
          } else if(window.matchMedia("(max-height: 1175px)").matches) {
            conditions.style.cssText = `top: 3.5vh;`;
          } else {
            conditions.style.cssText = `top: 3.75vh;`;
          }
          
        } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
          
          temp.style.top = '14.7vh';
      
          if(window.matchMedia("(max-height: 1225px)").matches) {
            conditions.style.cssText = `top: 4vh;`;
          } else if(window.matchMedia("(max-height: 1250px)").matches) {
            conditions.style.cssText = `top: 4.25vh;`;
          } else if(window.matchMedia("(max-height: 1275px)").matches) {
            conditions.style.cssText = `top: 4.5vh;`;
          } else {
            conditions.style.cssText = `top: 4.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
          
          temp.style.top = '14.7vh';
      
          if(window.matchMedia("(max-height: 1325px)").matches) {
            conditions.style.cssText = `top: 5vh;`;
          } else if(window.matchMedia("(max-height: 1350px)").matches) {
            conditions.style.cssText = `top: 5.25vh;`;
          } else if(window.matchMedia("(max-height: 1375px)").matches) {
            conditions.style.cssText = `top: 5.5vh;`;
          } else {
            conditions.style.cssText = `top: 5.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
          
          temp.style.top = '15.2vh';
      
          if(window.matchMedia("(max-height: 1425px)").matches) {
            conditions.style.cssText = `top: 6vh;`;
          } else if(window.matchMedia("(max-height: 1450px)").matches) {
            conditions.style.cssText = `top: 6.25vh;`;
          } else if(window.matchMedia("(max-height: 1475px)").matches) {
            conditions.style.cssText = `top: 6.5vh;`;
          } else {
            conditions.style.cssText = `top: 6.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
          
          temp.style.top = '15.7vh';
      
          if(window.matchMedia("(max-height: 1525px)").matches) {
            conditions.style.cssText = `top: 7vh;`;
          } else if(window.matchMedia("(max-height: 1550px)").matches) {
            conditions.style.cssText = `top: 7.25vh;`;
          } else if(window.matchMedia("(max-height: 1575px)").matches) {
            conditions.style.cssText = `top: 7.5vh;`;
          } else {
            conditions.style.cssText = `top: 7.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
          
          temp.style.top = '16.2vh';
      
          if(window.matchMedia("(max-height: 1625px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
          } else if(window.matchMedia("(max-height: 1650px)").matches) {
            conditions.style.cssText = `top: 8.25vh;`;
          } else if(window.matchMedia("(max-height: 1675px)").matches) {
            conditions.style.cssText = `top: 8.5vh;`;
          } else {
            temp.style.top = '16.7vh';
            
            conditions.style.cssText = `top: 8.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
          
          if(window.matchMedia("(min-height: 1776px)").matches) {
            temp.style.top = '16.5vh';
          } else {
            temp.style.top = '16.7vh';
          }

          conditions.style.top = '9vh';
      
        } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {
          
          temp.style.top = '16.5vh';
          
          conditions.style.cssText = `top: 9.25vh;`;
        } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
          
          temp.style.top = '16vh'
          
          conditions.style.cssText = `top: 9.5vh;`;
      
        } else {
          
          temp.style.top = '16.5vh';
          
          conditions.style.cssText = `top: 10.25vh;`;
        }
      
      
        if(window.matchMedia("(max-height: 599px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 254px; width: 242px;';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 270px; width: 251px;';
        } else if(window.matchMedia("(min-height: 800px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 275px; width: 246px;';
        } else {
          document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 246px;';
        }
        
      } else if(portraitW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

        if(moon260.matches) {
            temp.style.cssText = 'top: 11.6%; margin: auto;';

            if(tempReading <= -1) {
              temp.style.left = '2vw';
            } else {
              temp.style.left = '4vw';
            }

            tempConditions.style.cssText = 'top: 8.2vh;';
            conditions.style.cssText = `top: 3.5vh;`;
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {
            const minWidth481 = window.matchMedia('(min-width: 481px)');
            
            if(minWidth481.matches) {
              temp.style.cssText = 'top: 6.6vh; margin: auto;';
              conditions.style.cssText = `top: -3.8vh;`;

              // temp.style.fontSize = '4.8em';

              if(tempReading <= -1) {
                temp.style.left = '-0.4vw';
              } else {
                temp.style.left = '1.6vw';
              }
            } else if(window.matchMedia("(min-width: 400px)").matches) {
              temp.style.cssText = 'top: 12.6vh; margin: auto;';
              conditions.style.cssText = `top: -3vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '2vw';
              } else {
                temp.style.left = '4vw';
              }
            } else {
              temp.style.cssText = 'margin: auto;';

              if(window.matchMedia("(min-height: 660px)").matches) {
                conditions.style.cssText = `top: -3.3vh;`;
              } else {
                conditions.style.cssText = `top: -3vh;`;
              }

              
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '2.6vw';
              } else {
                temp.style.left = '4.6vw';
              }

              if(window.matchMedia("(min-height: 661px)").matches) {
                temp.style.top = '18.4%';
              } else if(window.matchMedia("(min-height: 651px)").matches) {
                temp.style.top = '16.8%';
              } else if(window.matchMedia('(min-height: 600px)').matches) {
                temp.style.top = '16.4%';
              } else {
                temp.style.top = '20.4%';
              }
            }

            if(maxHeight600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 191px;';

              conditions.style.cssText = 'top: -3.64vh;';

              temp.style.top = '19%';
              // temp.style.fontSize = '3.7em';
            } else if(minWidth481.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 284px; width: 245px;';
            } else if(window.matchMedia("(min-width: 400px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 270px; width: 231px;';

              if(window.matchMedia("(min-height: 768px)").matches) {
                conditions.style.top = '-2vh';
              }

            } else if(window.matchMedia("(min-height: 820px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 229px;';
            } else if(window.matchMedia("(min-width: 370px)").matches && window.matchMedia("(min-height: 750px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 267px; width: 234px;';
            } else if(window.matchMedia("(min-width: 370px)").matches && window.matchMedia("(min-height: 660px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 229px;';
            } else if(window.matchMedia("(min-width: 300px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 229px;';
            } else {
              document.querySelector('.conditions img').style.cssText = 'height: 234px; width: 212px;';
            }

            

            tempConditions.style.cssText = 'top: 11vh;';
            

            /*// leftDiv.style.top = '-10vh';
            // rightDiv.style.top = '-10vh';*/
        

            console.log('GUESS WHO?');

            if(window.matchMedia("(min-height: 660px)").matches) {
              temp.style.top = '16.8%';
            } else if(window.matchMedia("(min-height: 647px)").matches) {
              temp.style.top = '15.8%';
            }

            if(window.matchMedia("(min-height: 984px)").matches) {
              temp.style.top = '12.2%';
              // temp.style.fontSize = '4.6em';

              if(tempReading <= -1) {
                temp.style.left = '2.4vw';
              } else {
                temp.style.left = '4.4vw';
              }

              conditions.style.top = '-2.5vh';
              // // city.style.fontSize = '4.2em';

              document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              document.querySelector('.date-and-time').style.fontSize = '1.1em';
            } else if(window.matchMedia("(min-height: 800px)").matches) {
              
              // temp.style.fontSize = '4.6em';

              if(tempReading <= -1) {
                temp.style.left = '2.4vw';
              } else {
                temp.style.left = '4.4vw';
              }

              if(window.matchMedia("(min-height: 900px)").matches) {
                temp.style.top = '14.2%';
                conditions.style.top = '-2vh';

                document.querySelector('.conditions img').style.cssText = 'height: 280px; width: 239px;';
              } else if(window.matchMedia("(min-height: 839px)").matches) {
                temp.style.top = '15.2%';
                conditions.style.top = '-2vh';
              } else if(window.matchMedia("(min-height: 820px)").matches) {
                temp.style.top = '14.2%';
                conditions.style.top = '-3vh';
              } else {
                temp.style.top = '14.2%';
              }
              // // city.style.fontSize = '4.2em';

              document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              document.querySelector('.date-and-time').style.fontSize = '1.1em';
            } else if(window.matchMedia("(min-height: 700px)").matches) {
              temp.style.top = '17.2%';
              // temp.style.fontSize = '4.6em';

              if(tempReading <= -1) {
                temp.style.left = '2.2vw';
              } else {
                temp.style.left = '4.2vw';
              }

              if(window.matchMedia("(max-height: 728px)").matches) {
                temp.style.top = '15.2%';
              }

              document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 224px;';
            }    
            
            

            
            
          } 


          

          if(window.matchMedia("(max-width: 300px)").matches) {
            
            
            if(tempReading <= -1) {
              temp.style.left = '4.6vw';
            } else {
              temp.style.left = '6.6vw';
            }
          }

          

          
/*
          if(hour3 >= 4 && hour < 12) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
          } else if(hour >= 12 && hour < 18) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
          } else if(hour >= 18 && hour < 22) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
          } else if(hour >= 22 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
          }*/
      }  else if(landscapeW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

       /* if(moon260.matches) {
            temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 7.2vh;';
            conditions.style.cssText = `top: 2.5vh;`;
        
            conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {*/
            

            temp.style.cssText = 'top: 21vh; margin: auto;';

            tempConditions.style.cssText = 'top: 9.6vh;';
            conditions.style.cssText = `top: 3.72vh;`;
            // temp.style.fontSize = '3.4em';

            

            if(window.matchMedia("(min-width: 647px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '0.4vw';
              } else {
                temp.style.left = '1.9vw';
              }
            } else {
              if(tempReading <= -1) {
                temp.style.left = '0.7vw';
              } else {
                temp.style.left = '2.2vw';
              }
            }

            setTimeout(() => {

              if(window.matchMedia("(min-width: 700px)").matches) {
                // leftDiv.style.right = '22vw';
                // rightDiv.style.left = '22vw';
              } else if(window.matchMedia("(min-width: 601px)").matches) {
                // leftDiv.style.right = '23.5vw';
                // rightDiv.style.left = '23.5vw';
              } else if(window.matchMedia("(max-width: 500px)").matches && window.matchMedia("(min-width: 400px)").matches) {
                // leftDiv.style.right = '30vw';
                // rightDiv.style.left = '30vw';
              } else if(window.matchMedia("(max-width: 600px)").matches && window.matchMedia("(min-width: 500px)").matches) {
                // leftDiv.style.right = '28vw';
                // rightDiv.style.left = '28vw';
              } else {
                // leftDiv.style.right = '25vw';
                // rightDiv.style.left = '25vw';

                /*leftDiv.style.width = '32vw';
                // rightDiv.style.width = '32vw';*/
              }

              if(window.matchMedia("(max-width: 600px)").matches) {
                // rightDiv.style.width = '31vw';
              } else if(window.matchMedia("(max-width: 767px)").matches) {
                // rightDiv.style.width = '30vw';
              }

              if(window.matchMedia("(min-height: 314px)").matches) {
                // leftDiv.style.top = '8vh';
                // rightDiv.style.top = '8vh';
            }
            },28);
        
            if(window.matchMedia("(max-height: 300px)").matches) {
              temp.style.top = '32.2vh';
              conditions.style.top = '8.62vh';

              document.querySelector('.conditions img').style.cssText = 'height: 146px; width: 137px; top: 4.2vh;';

              setTimeout(() => {
                // leftDiv.style.right = '22.4vw';
                // rightDiv.style.left = '22.4vw';
              },28)
            } else if(window.matchMedia("(min-width: 700px)").matches) {
              if(window.matchMedia("(min-height: 520px)").matches) {
                temp.style.top = '25.6vh';
              } else {
                temp.style.top = '26.4vh';
              }
          
              conditions.style.top = '10.2vh';
              document.querySelector(".conditions img").style.cssText = 'height: 180px; width: 151px;';
            } else if(window.matchMedia("(min-width: 660px)").matches) {
              temp.style.top = '27.1vh';
              conditions.style.top = '3.7vh';
              document.querySelector(".conditions img").style.cssText = 'height: 180px; width: 156px;';
            } else if(window.matchMedia("(min-width: 600px)").matches) {
              temp.style.top = '26.2vh';
              conditions.style.top = '3.7vh';
              document.querySelector(".conditions img").style.cssText = 'height: 176px; width: 151px;';
            } else {
              document.querySelector('.conditions img').style.cssText = 'height: 166px; width: 166px;';
            }
            

            if(maxWidth600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 156px; width: 144px;';
            }
            
            if(window.matchMedia("(min-height: 366px)").matches && window.matchMedia("(max-height: 400px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 164px; width: 142px;';
              conditions.style.top = '6.6vh';
            } else if(window.matchMedia("(min-height: 331px)").matches && window.matchMedia("(max-height: 365px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 164px; width: 142px;';
              conditions.style.top = '5.4vh';
              temp.style.top = '27.2vh';

            } else if(window.matchMedia("(min-height: 300px)").matches && window.matchMedia("(max-height: 330px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 144px; width: 125px;';
              conditions.style.top = '5.4vh';

              temp.style.top = '26.4vh';
            }
         // }
          
        }  else if(portraitW.matches && medMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");

          // // city.style.top = '1vh';
  
         /* if(moon260.matches) {
              temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 7.2vh;';
              conditions.style.cssText = `top: 2.5vh;`;
          
              conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {*/
              
  
              
  
              tempConditions.style.cssText = 'top: 9.6vh;';
              

              if(window.matchMedia("(min-height: 1153px)").matches && window.matchMedia("(min-width: 1000px)").matches) {
                temp.style.cssText = 'top: 13.91vh; margin: auto;';
                conditions.style.cssText = `top: 1vh;`;

                if(tempReading <= -1) {
                  temp.style.left = '0.7vw';
                } else {
                  temp.style.left = '2.7vw';
                }

                document.querySelector('.conditions img').style.cssText = 'height: 351px; width: 314px;';
              } else if(window.matchMedia("(min-height: 1153px)").matches) {
                temp.style.cssText = 'margin: auto;';
                temp.style.top = '13.2vh';

                conditions.style.top = '0.72vh';

                if(tempReading <= -1) {
                  temp.style.left = '0.7vw';
                } else {
                  temp.style.left = '2.7vw';
                }

                document.querySelector('.conditions img').style.cssText = 'height: 335px; width: 280px;';
              } else if(window.matchMedia("(min-height: 777px)").matches) {
                temp.style.top = '14.2vh';

                conditions.style.top = '-0.28vh';

                document.querySelector('.conditions img').style.cssText = 'height: 327px; width: 272px;';
              } else {
                temp.style.cssText = 'top: 15.2vh; margin: auto;';
                conditions.style.cssText = `top: -1.28vh;`;

                if(tempReading <= -1) {
                  temp.style.left = '0.7vw';
                } else {
                  temp.style.left = '2.7vw';
                }

                document.querySelector('.conditions img').style.cssText = 'height: 324px; width: 282px;';
              }
              
              
              
           // }
            
          }  else if(landscapeW.matches && medMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                

                if(window.matchMedia("(min-height: 511px)").matches) {
                  temp.style.cssText = 'top: 28.19vh; margin: auto;';

                  // temp.style.fontSize = '5.1em';
    
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  
                  if(tempReading <= -1) {
                    temp.style.left = '0.5vw';
                  } else {
                    temp.style.left = '2vw';
                  }

                  // leftDiv.style.right = '25vw';
                  // rightDiv.style.left = '25vw';
                  
                    if(window.matchMedia("(min-height: 700px)").matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 214px; width: 204px;';
                      conditions.style.cssText = `top: 13.2vh;`;
                      temp.style.top = '26.46vh';
                    } else {
                      document.querySelector('.conditions img').style.cssText = 'height: 218px; width: 196px;';
                      conditions.style.cssText = `top: 10.2vh;`;
                      temp.style.top = '27.19vh';
                    }

                } else {
                    // leftDiv.style.right = '23.2vw';
                    // rightDiv.style.left = '23.2vw';
                    
                    temp.style.cssText = 'top: 29vh; margin: auto;';

                    // temp.style.fontSize = '3.7em';

                    if(tempReading <= -1) {
                      temp.style.left = '0.5vw';
                    } else {
                      temp.style.left = '2vw';
                    }
    
                    tempConditions.style.cssText = 'top: 9.6vh;';

                    conditions.style.cssText = `top: 6.6vh;`;
  
                  
                  if(window.matchMedia("(max-width: 840px)").matches) {
                    // leftDiv.style.right = '22.6vw';
                    // rightDiv.style.left = '22.6vw';

                    temp.style.top = '27.9vh';
                    
                    if(window.matchMedia("(min-width: 820px)").matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 194px; width: 167px;';
                    } else {
                      document.querySelector('.conditions img').style.cssText = 'height: 176px; width: 156px;';
                    }
                    
                  } else if(window.matchMedia("(max-width: 900px)").matches) {
                    if(window.matchMedia("(min-height: 448px)").matches) {
                      temp.style.top = '25.4vh';
                    } else {
                      temp.style.top = '26.4vh';
                    }
            
                    if(window.matchMedia("(min-width: 835px)").matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 192px; width: 170px;';
                    } else {
                      document.querySelector('.conditions img').style.cssText = 'height: 184px; width: 166px;';
                    }
                    
                  } else {
                  
                    document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 192px;';
                  
                  }

                }
                
             // }
              
            }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
      
                  temp.style.cssText = 'top: 12vh; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  conditions.style.cssText = `top: 8vh;`;

                  if(tempReading <= -1) {
                    temp.style.left = '0';
                  } else {
                    temp.style.left = '2vw';
                  }
              
                  //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
               // }
                
              }  else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {
                  /*// leftDiv.style.right = '18.4vw';
                  // rightDiv.style.left = '18.4vw';*/

                    temp.style.cssText = 'margin: auto;';

                    // temp.style.fontSize = '5.4em';

                    if(tempReading <= -1) {
                      temp.style.left = '-0.1vw';
                    } else {
                      temp.style.left = '1.4vw';
                    }

                    // // city.style.top = '1vh';
                    // // city.style.fontSize = '6.2em';

                    document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                    document.querySelector('.date-and-time').style.fontSize = '1.4em';

                    
 
                    if(window.matchMedia("(min-height: 700px)").matches) {
                      temp.style.top = '17.8vh';
                      conditions.style.cssText = `top: 7.2vh;`;
                    } else {
                      temp.style.top = '22.2vh';
                      conditions.style.cssText = `top: 1.4vh;`;
                    }

                    tempConditions.style.cssText = 'top: 9.6vh;';

                    rightDiv.style.fontSize = '1.6em';

                    if(window.matchMedia("(min-height: 900px)").matches) {
                      temp.style.top = '22.6vh';

                      conditions.style.top = '9.2vh';

                      document.querySelector('.conditions img').style.cssText = 'height: 284px; width: 236px;';
                    } else {
                      temp.style.top = '23.2vh';

                      conditions.style.top = '7.2vh';

                      document.querySelector('.conditions img').style.cssText = 'height: 282px; width: 234px;';
                    }
              }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                const moon260 = window.matchMedia("(max-width: 260px)");
        
               /* if(moon260.matches) {
                    temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 7.2vh;';
                    conditions.style.cssText = `top: 2.5vh;`;
                
                    conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                  } else {*/
                    
        
                    setTimeout(() => {
                      temp.style.cssText = 'margin: auto;';

                      // temp.style.fontSize = '5.1em';

                      if(tempReading <= -1) {
                        temp.style.left = '0.34vw';
                      } else {
                        temp.style.left = '1.84vw';
                      }

                      let minHeight900 = window.matchMedia("(min-height: 863px)");

                      console.log(`window.innerHeight = ${window.innerHeight}`)
                      console.log(`minHeight900.matches: ${minHeight900.matches}`);

                      if(minHeight900.matches) {
                        temp.style.top = '21.2vh';
                      } else {
                        temp.style.top = '24.2vh';
                      }





                      // // city.style.top = '1vh';
                      // // city.style.fontSize = '6.2em';
  
                      document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                      document.querySelector('.date-and-time').style.fontSize = '1.4em';
  
                      conditions.style.top = '4.2vh';
                    },28);
                    
        
                    tempConditions.style.cssText = 'top: 9.6vh;';
                    conditions.style.cssText = `top: 4vh;`;
                    
                    /*if(maxWidth1200.matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                    } else {*/
                      document.querySelector('.conditions img').style.cssText = 'height: 302px; width: 239px;';
                    //}
                    
                 // }
                  
                }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'top: 9.1vh; margin: auto;';

                      // temp.style.fontSize = '6em';

                      if(tempReading <= -1) {
                        temp.style.left = '0.2vw';
                      } else {
                        temp.style.left = '2.2vw';
                      }
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: -3.5vh;`;
                        
                      setTimeout(() => {
                        leftDiv.style.height = '32vh';
                        rightDiv.style.height = '32vh';

                        
                        
                      },28);
                  
                      document.querySelector('.conditions img').style.cssText = 'height: 314px; width: 286px;';
                   // }
                    
                  }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        setTimeout(() => {
                          temp.style.cssText = 'top: 28.4vh; margin: auto;';

                          // temp.style.fontSize = '5.6em';

                          if(tempReading <= -1) {
                            temp.style.left = '0.4vw';
                          } else {
                            temp.style.left = '1.9vw';
                          }
                        },25);
            
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        conditions.style.cssText = `top: 17vh;`;
                    
                        document.querySelector('.conditions img').style.cssText = 'height: 272px; width: 245px;';
                     // }
                      
                    } 







break;

    case 'partly-cloudy-night8.png':

      if(hour >= 4 && hour < 12) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
      } else if(hour >= 12 && hour < 18) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
      } else if(hour >= 18 && hour < 22) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
      } else if(hour >= 22 || hour < 4) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
      }

      city.style.color = 'rgb(255,255,255)';
      greetingBarTxt.style.color = 'rgb(255,255,255)';
      temp.style.color = 'rgb(2,2,2)';



      if(desktopW.matches) {
        tempConditions.style.cssText = 'top: 16vh;';
        conditions.style.cssText = `top: 1vh;`;
        // temp.style.cssText = 'left: 7%; top: 30%';

        // // city.style.top = '1vh';
        // // city.style.fontSize = '6.2em';



        if(window.matchMedia("(min-width: 2000px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.5vw';
          } else {
            temp.style.left = '1vw';
          }
        } else if(window.matchMedia("(min-width: 1900px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.4vw';
          } else {
            temp.style.left = '1.1vw';
          }
        } else if(window.matchMedia("(min-width: 1700px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1600px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1400px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.15vw';
          } else {
            temp.style.left = '1.35vw';
          }
        } else if(window.matchMedia("(min-width: 1300px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        }
      
        if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
          
      
          if(window.matchMedia("(max-height: 525px)").matches) {
            conditions.style.cssText = `top: 2vh;`;
      
            temp.style.top = '17vh';
          } else if(window.matchMedia("(max-height: 550px)").matches) {
            conditions.style.cssText = `top: 3.5vh;`;
      
            temp.style.top = '17.25vh';
          } else if(window.matchMedia("(max-height: 575px)").matches) {
            conditions.style.cssText = `top: 5vh;`;
      
            temp.style.top = '18vh';
          } else {
            conditions.style.cssText = `top: 6.5vh;`;
            
            temp.style.top = '18.5vh';
          }


        } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
          
          if(window.matchMedia("(max-height: 625px)").matches) {
            conditions.style.cssText = `top: 3.6vh;`;
      
            temp.style.top = '18.14vh';
          } else if(window.matchMedia("(max-height: 650px)").matches) {
            conditions.style.cssText = `top: 3.85vh;`;
      
            temp.style.top = '16.4vh';
          } else if(window.matchMedia("(max-height: 675px)").matches) {
            conditions.style.cssText = `top: 5.1vh;`;
      
            temp.style.top = '17.9vh';
          } else {
            conditions.style.cssText = `top: 5.85vh;`;
            
            temp.style.top = '18.4vh';
          }
      
        } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
          temp.style.top = '13.14vh';
      
          if(window.matchMedia("(max-height: 725px)").matches) {
            conditions.style.cssText = `top: 1.75vh;`;
          } else if(window.matchMedia("(max-height: 750px)").matches) {
            conditions.style.cssText = `top: 2vh;`;
          } else if(window.matchMedia("(max-height: 775px)").matches) {
            conditions.style.cssText = `top: 2.5vh;`;
          } else {
            conditions.style.cssText = `top: 2.75vh;`;
          }

        } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
          
          temp.style.top = '13.95vh';
          
          if(window.matchMedia("(max-height: 825px)").matches) {
            conditions.style.top = '3.75vh';
          } else if(window.matchMedia("(max-height: 850px)").matches) {
            conditions.style.cssText = `top: 4.25vh;`;
          } else if(window.matchMedia("(max-height: 875px)").matches) {
            conditions.style.cssText = `top: 4.5vh;`;
          } else {
            conditions.style.cssText = `top: 4.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
          
          temp.style.top = '14.46vh';
          
          if(window.matchMedia("(max-height: 925px)").matches) {
            conditions.style.top = '5.25vh';
          } else if(window.matchMedia("(max-height: 950px)").matches) {
            conditions.style.cssText = `top: 5.75vh;`;
          } else if(window.matchMedia("(max-height: 975px)").matches) {
            conditions.style.cssText = `top: 6vh;`;
          } else {
            conditions.style.cssText = `top: 6.25vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1025px)").matches) {
            conditions.style.cssText = `top: 6.75vh;`;
          } else if(window.matchMedia("(max-height: 1050px)").matches) {
            conditions.style.cssText = `top: 7vh;`;
          } else if(window.matchMedia("(max-height: 1075px)").matches) {
            conditions.style.cssText = `top: 7.25vh;`;
          } else {
            temp.style.top = '15.2vh';

            conditions.style.cssText = `top: 7.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
          
          temp.style.top = '14vh';
      
          if(window.matchMedia("(max-height: 1125px)").matches) {
            conditions.style.cssText = `top: 6.5vh;`;
          } else if(window.matchMedia("(max-height: 1150px)").matches) {
            conditions.style.cssText = `top: 6.75vh;`;
          } else if(window.matchMedia("(max-height: 1175px)").matches) {
            conditions.style.cssText = `top: 7vh;`;
          } else {
            conditions.style.cssText = `top: 7.25vh;`;
          }
          
        } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
          
          temp.style.top = '14.2vh';
      
          if(window.matchMedia("(max-height: 1225px)").matches) {
            conditions.style.cssText = `top: 7.5vh;`;
          } else if(window.matchMedia("(max-height: 1250px)").matches) {
            conditions.style.cssText = `top: 7.75vh;`;
          } else if(window.matchMedia("(max-height: 1275px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
          } else {
            conditions.style.cssText = `top: 8.25vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
          
          temp.style.top = '14.7vh';
      
          if(window.matchMedia("(max-height: 1325px)").matches) {
            conditions.style.cssText = `top: 8.5vh;`;
          } else if(window.matchMedia("(max-height: 1350px)").matches) {
            conditions.style.cssText = `top: 8.75vh;`;
          } else if(window.matchMedia("(max-height: 1375px)").matches) {
            conditions.style.cssText = `top: 9vh;`;
          } else {
            temp.style.top = '15.2vh';
            conditions.style.cssText = `top: 9.25vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1425px)").matches) {
            conditions.style.cssText = `top: 9vh;`;
          } else if(window.matchMedia("(max-height: 1450px)").matches) {
            conditions.style.cssText = `top: 9.25vh;`;
          } else if(window.matchMedia("(max-height: 1475px)").matches) {
            conditions.style.cssText = `top: 9.25vh;`;
          } else {
            temp.style.top = '15.2vh';
            conditions.style.cssText = `top: 9.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1525px)").matches) {
            conditions.style.cssText = `top: 9.25vh;`;
          } else if(window.matchMedia("(max-height: 1550px)").matches) {
            conditions.style.cssText = `top: 9.5vh;`;
          } else if(window.matchMedia("(max-height: 1575px)").matches) {
            conditions.style.cssText = `top: 9.75vh;`;
          } else {
            conditions.style.cssText = `top: 10vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
          
          temp.style.top = '15.2vh';
      
          if(window.matchMedia("(max-height: 1625px)").matches) {
            conditions.style.cssText = `top: 10.25vh;`;
          } else if(window.matchMedia("(max-height: 1650px)").matches) {
            conditions.style.cssText = `top: 10.25vh;`;
          } else if(window.matchMedia("(max-height: 1675px)").matches) {
            conditions.style.cssText = `top: 10.5vh;`;
          } else {
            conditions.style.cssText = `top: 10.5vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
          
          temp.style.top = '14.84vh';

          conditions.style.top = '10vh';
      
        } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {
          
          temp.style.top = '14.95vh';
          
          conditions.style.cssText = `top: 10.5vh;`;
        } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
          
          temp.style.top = '15.25vh';
          
          conditions.style.cssText = `top: 11.06vh;`;
      
        } else {
          
          temp.style.top = '15.46vh';
          
          conditions.style.cssText = `top: 11.5vh;`;
        }
      
      
        if(window.matchMedia("(max-height: 599px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 239px; width: 225px;';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 259px; width: 231px;';
        } else if(window.matchMedia("(min-height: 800px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 259px; width: 231px;';
        } else {
          document.querySelector('.conditions img').style.cssText = 'height: 259px; width: 231px;';
        }
      
      } else if(portraitW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

        if(moon260.matches) {
            temp.style.cssText = 'top: 11.6%; margin: auto;';

            if(tempReading <= -1) {
              temp.style.left = '2vw'; 
            } else {
              temp.style.left = '4vw';
            }

            tempConditions.style.cssText = 'top: 8.2vh;';
            conditions.style.cssText = `top: 3.5vh;`;
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {
            const minWidth481 = window.matchMedia('(min-width: 481px)');
            
            if(minWidth481.matches) {
              temp.style.cssText = 'top: 6vh; margin: auto;';
              conditions.style.cssText = `top: 1vh;`;

          if(tempReading <= -1) {
            temp.style.left = '1vw'; 
          } else {
            temp.style.left = '3vw';
          }
            } else {
              temp.style.cssText = 'top: 11.4%; margin: auto;';
              
              // leftDiv.style.top = '-8.6vh';

              document.querySelector('.conditions img').style.cssText = 'height: 239px; width: 219px;';

              if(window.matchMedia("(min-width: 391px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '1.2vw'; 
                } else {
                  temp.style.left = '3.2vw';
                }
              } else if(window.matchMedia("(min-width: 367px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '2vw'; 
                } else {
                  temp.style.left = '4vw';
                }
              } else {
                if(tempReading <= -1) {
                  temp.style.left = '2vw'; 
                } else {
                  temp.style.left = '4vw';
                }
              }

              if(window.matchMedia("(min-height: 700px)").matches) {
                conditions.style.cssText = `top: -1.25vh;`;
                temp.style.top = '12.4%';
              } else if(window.matchMedia("(min-height: 660px)").matches) {
                conditions.style.cssText = `top: -1.25vh;`;
                temp.style.top = '12.9%';
              } else {
                conditions.style.cssText = `top: -2vh;`;
                temp.style.top = '13%';
              }
              
            }

            if(window.matchMedia("(min-height: 800px)").matches) {
              //// // city.style.top = '1.5vh';
              conditions.style.top = '0.2vh';

              if(window.matchMedia("(min-height: 851px)").matches) {
                temp.style.top = '11.9%';
              } else if(window.matchMedia("(min-height: 820px)").matches) {
                temp.style.top = '12%';
              } else {
                temp.style.top = '12.44%';
              }
              

              //// // city.style.fontSize = '4em';

              //document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              //document.querySelector('.date-and-time').style.fontSize = '1.1em';
            } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 728px)").matches && window.matchMedia("(min-width: 500px)").matches) {
              //// // city.style.top = '1vh';
              //// // city.style.fontSize = '3.7em';
              temp.style.top = '11%';
              conditions.style.top = '-1.5vh';
              
              document.querySelector('.conditions img').style.cssText = 'height: 248px; width: 224px;';
            } else if(window.matchMedia("(min-height: 700px)").matches) {
              conditions.style.top = '-0.5vh';
              document.querySelector('.conditions img').style.cssText = 'height: 242px; width: 216px;';
            }

            if(window.matchMedia("(min-height: 900px)").matches) {

              if(tempReading <= -1) {
                temp.style.left = '0.7vw';
              } else {
                temp.style.left = '2.7vw';
              }

              if(window.matchMedia("(min-height: 1000px)").matches) {
                temp.style.top = '9.6%';

                document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 228px;';
              } else {
                temp.style.top = '10.4%';

                document.querySelector('.conditions img').style.cssText = 'height: 248px; width: 224px;';
              }

            }

            

            if(maxHeight600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 197px; width: 177px;';

              conditions.style.cssText = 'top: -1.35vh;';
              temp.style.top = '12.4%';
            }

            

            tempConditions.style.cssText = 'top: 11vh;';
            

            /*// leftDiv.style.top = '-10vh';
            // rightDiv.style.top = '-10vh';*/
        

            console.log('GUESS WHO?');
            //document.querySelector('.conditions img').style.cssText = 'border-radius: 0; top: 4vh;';
          } 


          if(window.matchMedia("(max-width: 300px)").matches) {
            conditions.style.top = '-1.25vh';

            temp.style.top = '11.4%';

            if(tempReading <= -1) {
              temp.style.left = '3.1vw';
            } else {
              temp.style.left = '5.1vw';
            }

            document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 204px;';
          }

          
/*
          if(hour3 >= 4 && hour < 12) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
          } else if(hour >= 12 && hour < 18) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
          } else if(hour >= 18 && hour < 22) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
          } else if(hour >= 22 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
          }*/
      }  else if(landscapeW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

       /* if(moon260.matches) {
            temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 7.2vh;';
            conditions.style.cssText = `top: 2.5vh;`;
        
            conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {*/
            

            temp.style.cssText = 'top: 18.4vh; margin: auto;';

            tempConditions.style.cssText = 'top: 9.6vh;';
            conditions.style.cssText = `top: 8vh;`;


            if(tempReading <= -1) {
                temp.style.left = '0.5vw'; 
              } else {
                temp.style.left = '2vw';
              }
            
            
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';

            if(window.matchMedia("(max-width: 699px)").matches) {
              
              
              
              
              
              if(window.matchMedia("(max-height: 300px)").matches) {
                temp.style.top = '26.25vh';

                conditions.style.top = '10vh';
              } else if(window.matchMedia("(max-height: 339px)").matches) {
                temp.style.top = '22.9vh';

                conditions.style.top = '10.35vh';
              } else if(window.matchMedia("(max-height: 372px)").matches) {
                temp.style.top = '22.1vh';

                conditions.style.top = '8.85vh';
              } else if(window.matchMedia("(max-height: 372px)").matches) {
                temp.style.top = '22.9vh';

                conditions.style.top = '10vh';
              } else if(window.matchMedia("(max-height: 397px)").matches) {
                temp.style.top = '23.9vh';

                conditions.style.top = '11vh';
              } else {
                temp.style.top = '22.9vh';

                conditions.style.top = '10vh';
              }

              if(window.matchMedia("(max-width: 599px)").matches) {
                setTimeout(() => {
                  // leftDiv.style.right = '27.5vw';
                  // rightDiv.style.left = '27.5vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '0.5vw';  
                } else {
                  temp.style.left = '2vw';
                }
                
                
                document.querySelector('.conditions img').style.cssText = 'height: 127px; width: 114px;';
              } else {
                setTimeout(() => {
                  // leftDiv.style.right = '22vw';
                  // rightDiv.style.left = '22vw';
                },28);

                if(window.matchMedia("(min-width: 653px)").matches) {
                  if(tempReading <= -1) {
                    temp.style.left = '0vw'; 
                  } else {
                    temp.style.left = '1.5vw';
                  }
                } else {
                  if(tempReading <= -1) {
                    temp.style.left = '0.3vw'; 
                  } else {
                    temp.style.left = '1.8vw';
                  }
                }

                if(window.matchMedia("(max-height: 340px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 144px; width: 134px;';
                } else if(window.matchMedia("(max-height: 372px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 151px; width: 137px;';
                } else {
                  document.querySelector('.conditions img').style.cssText = 'height: 151px; width: 137px;';
                }
                
              }
              
              
              
            } else if(window.matchMedia("(min-width: 700px)").matches) {
              conditions.style.top = '11.5vh';

              temp.style.top = '24vh';

              if(tempReading <= -1) {
                temp.style.left = '0vw';  
              } else {
                temp.style.left = '1.5vw';
              }

              if(window.matchMedia("(max-height: 499px)").matches) {
                temp.style.top = '23vh';

                document.querySelector('.conditions img').style.cssText = 'height: 151px; width: 137px;';
              } else {
                temp.style.top = '24.17vh';
                
                if(tempReading <= -1) {
                  temp.style.left = '0.1vw';  
                } else {
                  temp.style.left = '1.6vw';
                }

                conditions.style.top = '14vh';
                document.querySelector('.conditions img').style.cssText = 'height: 162px; width: 146px;';
              }

              
            }

            if(window.matchMedia("(min-height: 480px)").matches) {
              // // city.style.top = '2vh';
            }
         // }

         setTimeout(() => {
          if(window.matchMedia("(max-width: 600px)").matches) {
            // rightDiv.style.width = '31vw';
          } else if(window.matchMedia("(max-width: 767px)").matches) {
            // rightDiv.style.width = '30vw';
          }

          if(window.matchMedia("(min-height: 314px)").matches) {
            // leftDiv.style.top = '8vh';
            // rightDiv.style.top = '8vh';
          }

          
         },28);
          
        }  else if(portraitW.matches && medMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");
          // // city.style.top = '1vh';
  
         /* if(moon260.matches) {
              temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 7.2vh;';
              conditions.style.cssText = `top: 2.5vh;`;
          
              conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {*/
              
              conditions.style.cssText = `top: 0.5vh;`;

              tempConditions.style.cssText = 'top: 9.6vh;';
  
              
              temp.style.cssText = 'margin: auto;';
          
              document.querySelector('.conditions img').style.cssText = 'height: 292px; width: 262px;';
           // }

           if(window.matchMedia("(min-height: 1153px)").matches && window.matchMedia("(min-width: 1000px)").matches) {
            temp.style.top = '11.6vh';

            conditions.style.top = '3.5vh';

            document.querySelector('.conditions img').style.cssText = 'height: 317px; width: 281px;';
          } else if(window.matchMedia("(max-width: 860px)").matches) {
            

            if(window.matchMedia("(min-height: 1153px)").matches) {
              temp.style.top = '11.10vh';

              conditions.style.top = '3vh';

              document.querySelector('.conditions img').style.cssText = 'height: 307px; width: 281px;';
            } else {
              temp.style.top = '10.6vh';

              conditions.style.cssText = `top: 1.5vh;`;
            }

            if(tempReading <= -1) {
              temp.style.left = '0.5vw'; 
            } else {
              temp.style.left = '2.5vw';
            }
            
            // left: 3vw; top: 8.2vh; 
           } else {
             temp.style.top = '7.2vh';
             conditions.style.top = '0';

             if(tempReading <= -1) {
              temp.style.left = '0.25vw'; 
            } else {
              temp.style.left = '2.25vw';
            }
           }
            
          }  else if(landscapeW.matches && medMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                
                setTimeout(() => {
                  // leftDiv.style.top = '11vh';
                  // rightDiv.style.top = '11vh';
                },28);

                
    
                temp.style.cssText = 'margin: auto;';
    
                tempConditions.style.cssText = 'top: 9.6vh;';
            

                if(window.matchMedia("(max-height: 400px)").matches) {
                  // // city.style.top = '0';

                  temp.style.top = '22.56vh';
                  conditions.style.cssText = `top: 9vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 166px; width: 151px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                } else if(window.matchMedia("(min-height: 447px)").matches) {
                  temp.style.top = '23.75vh';
                  conditions.style.cssText = `top: 12.6vh;`;

                  if(window.matchMedia("(min-width: 850px)").matches) {
                    conditions.style.top = '11.6vh';

                    document.querySelector('.conditions img').style.cssText = 'height: 180px; width: 168px;';
                  } else {
                    document.querySelector('.conditions img').style.cssText = 'height: 184px; width: 158px;';
                  }
                  

                  if(tempReading <= -1) {
                    temp.style.left = '0.15vw'; 
                  } else {
                    temp.style.left = '1.65vw';
                  }
                } else {
                  if(window.matchMedia("(min-width: 835px)").matches) {
                    temp.style.top = '22.24vh';
                  } else {
                    temp.style.top = '23.24vh';
                  }

                  
                  conditions.style.cssText = `top: 8.6vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 180px; width: 166px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                }

                if(window.matchMedia("(max-width: 818px)").matches) {
                  // leftDiv.style.right = '20vw';
                  // rightDiv.style.left = '20vw';
                } else {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                }
             // }

             if(window.matchMedia("(min-width: 1000px)").matches) {
              if(window.matchMedia("(min-height: 685px)").matches) {
                temp.style.top = '26.5vh';

                conditions.style.top = '17.14vh';

                document.querySelector('.conditions img').style.cssText = 'height: 209px; width: 188px;';
              } else {
                temp.style.top = '25vh';

                conditions.style.top = '12.14vh';

                document.querySelector('.conditions img').style.cssText = 'height: 219px; width: 198px;';
              }
              
              
              
              if(tempReading <= -1) {
                temp.style.left = '-0.3vw';
              } else {
                temp.style.left = '1.2vw';
              }

              
             } else if(window.matchMedia("(min-width: 900px)").matches) {
              temp.style.top = '26vh';

              if(tempReading <= -1) {
                temp.style.left = '0vw';
              } else {
                temp.style.left = '1.5vw';
              }

              conditions.style.top = '14.2vh';

              document.querySelector('.conditions img').style.cssText = 'height: 206px; width: 192px;';
             }
              
            }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
      
                  temp.style.cssText = 'top: 12vh; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  conditions.style.cssText = `top: 8vh;`;



                  if(tempReading <= -1) {
                    temp.style.left = '0'; 
                  } else {
                    temp.style.left = '2vw';
                  }
              
                  //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
               // }
                
              }  else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {    

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    


                    if(window.matchMedia("(max-height: 600px)").matches) {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 6.14vh;`;
                    } else {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 11.67vh;`;
                    }
                    
                    // // city.style.fontSize = '6.2em';

                    rightDiv.style.fontSize = '1.6em';

                    /*
                    setTimeout(() => {
                      // leftDiv.style.right = '18.5vw';
                      // rightDiv.style.left = '18.5vw';
                    },29);*/

                    document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                    document.querySelector('.date-and-time').style.fontSize = '1.4em';
                    

                    if(window.matchMedia('(min-height: 900px)').matches) {
                      temp.style.cssText = 'top: 22.64vh; margin: auto;';

                      conditions.style.cssText = `top: 14.67vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '0.1vw'; 
                      } else {
                        temp.style.left = '1.6vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 253px; width: 229px;';
                    }  else {
                      temp.style.cssText = 'top: 20.9vh; margin: auto;';

                      conditions.style.cssText = `top: 11.67vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '0.6vw'; 
                      } else {
                        temp.style.left = '1.6vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 227px;';
                    }
              }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                
                
                const moon260 = window.matchMedia("(max-width: 260px)");
        
               /* if(moon260.matches) {
                    temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 7.2vh;';
                    conditions.style.cssText = `top: 2.5vh;`;
                
                    conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                  } else {*/
                    
        
                    temp.style.cssText = 'margin: auto;';

                    if(tempReading <= -1) {
                      temp.style.left = '0.1vw'; 
                    } else {
                      temp.style.left = '1.6vw';
                    }
       
                    if(window.matchMedia("(min-height: 900px)").matches) {
                      temp.style.top = '18.24vh';
                    } else {
                      temp.style.top = '17.82vh';
                    }

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    conditions.style.cssText = `top: 7vh;`;
                    
                    /*if(maxWidth1200.matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                    } else {*/
                      document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 229px;';
                    //}
                    
                 // }
                  
                }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'top: 6.2vh; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: -1.3vh;`;

                      setTimeout(() => {
                        leftDiv.style.height = '32vh';
                        rightDiv.style.height = '32vh';

                        
                        
                      },28);
                  
                      document.querySelector('.conditions img').style.cssText = 'height: 274px; width: 251px;';
                   // }

                   if(tempReading <= -1) {
                    temp.style.left = '-0.6vw'; 
                  } else {
                    temp.style.left = '1.4vw';
                  }
                  }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        temp.style.cssText = 'top: 28vh; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        conditions.style.cssText = `top: 21vh;`;

                        if(tempReading <= -1) {
                          temp.style.left = '0'; 
                        } else {
                          temp.style.left = '1.5vw';
                        }
                    
                        document.querySelector('.conditions img').style.cssText = 'height: 246px; width: 224px;';
                     // }
                      
                    } 
      
      break;

    case 'cloudy.png':

      if(hour >= 4 && hour < 12) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(28,136,122);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(28,136,122);';
      } else if(hour >= 12 && hour < 18) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(28,159,182);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(28,159,182);';
      } else if(hour >= 18 && hour < 22) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,28,174);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,28,174);';
      } else if(hour >= 22 || hour < 4) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
      }

      city.style.color = 'rgb(255,255,255)';
      greetingBarTxt.style.color = 'rgb(255,255,255)';
      temp.style.color = 'rgb(2,2,2)';


      if(desktopW.matches) {
        tempConditions.style.cssText = 'top: 16vh;';
        conditions.style.cssText = `top: 1vh;`;
        temp.style.cssText = 'top: 30%';

        if(tempReading <= -1) {
          temp.style.left = '3.5%'; 
        } else {
          temp.style.left = '5%';
        }

        
        if(window.matchMedia("(min-width: 2000px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.75vw';
          } else {
            temp.style.left = '0.75vw';
          }
        } else if(window.matchMedia("(min-width: 1900px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.5vw';
          } else {
            temp.style.left = '1vw';
          }
        } else if(window.matchMedia("(min-width: 1700px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.4vw';
          } else {
            temp.style.left = '1.1vw';
          }
        } else if(window.matchMedia("(min-width: 1600px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1400px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.1vw';
          } else {
            temp.style.left = '1.4vw';
          }
        } else if(window.matchMedia("(min-width: 1300px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        }
      
        if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
          
      
          if(window.matchMedia("(max-height: 525px)").matches) {
            conditions.style.cssText = `top: 0.25vh;`;
      
            temp.style.top = '18vh';
          } else if(window.matchMedia("(max-height: 550px)").matches) {
            conditions.style.cssText = `top: 1.75vh;`;
      
            temp.style.top = '18.25vh';
          } else if(window.matchMedia("(max-height: 575px)").matches) {
            conditions.style.cssText = `top: 3.25vh;`;
      
            temp.style.top = '19vh';
          } else {
            conditions.style.cssText = `top: 4.75vh;`;
            
            temp.style.top = '19.5vh';
          }


        } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
          
          if(window.matchMedia("(max-height: 625px)").matches) {
            conditions.style.cssText = `top: 1.25vh;`;
      
            temp.style.top = '18.14vh';
          } else if(window.matchMedia("(max-height: 650px)").matches) {
            conditions.style.cssText = `top: 1.88vh;`;
      
            temp.style.top = '16.4vh';
          } else if(window.matchMedia("(max-height: 675px)").matches) {
            conditions.style.cssText = `top: 2.62vh;`;
      
            temp.style.top = '17.9vh';
          } else {
            conditions.style.cssText = `top: 3.80vh;`;
            
            temp.style.top = '18.4vh';
          }
      
        } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
          temp.style.top = '13.14vh';
      
          if(window.matchMedia("(max-height: 725px)").matches) {
            conditions.style.cssText = `top: 0vh;`;
          } else if(window.matchMedia("(max-height: 750px)").matches) {
            conditions.style.cssText = `top: 0.5vh;`;
          } else if(window.matchMedia("(max-height: 775px)").matches) {
            conditions.style.cssText = `top: 1.25vh;`;
          } else {
            conditions.style.cssText = `top: 2.22vh;`;
          }

        } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
          
          temp.style.top = '13.95vh';
          
          if(window.matchMedia("(max-height: 825px)").matches) {
            conditions.style.top = '2.25vh';
          } else if(window.matchMedia("(max-height: 850px)").matches) {
            conditions.style.cssText = `top: 3vh;`;
          } else if(window.matchMedia("(max-height: 875px)").matches) {
            conditions.style.cssText = `top: 3.25vh;`;
          } else {
            conditions.style.cssText = `top: 3.5vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
          
          temp.style.top = '14.46vh';
          
          if(window.matchMedia("(max-height: 925px)").matches) {
            conditions.style.top = '3.75vh';
          } else if(window.matchMedia("(max-height: 950px)").matches) {
            conditions.style.cssText = `top: 4.25vh;`;
          } else if(window.matchMedia("(max-height: 975px)").matches) {
            conditions.style.cssText = `top: 4.5vh;`;
          } else {
            conditions.style.cssText = `top: 4.75vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1025px)").matches) {
            conditions.style.cssText = `top: 5vh;`;
          } else if(window.matchMedia("(max-height: 1050px)").matches) {
            conditions.style.cssText = `top: 5.5vh;`;
          } else if(window.matchMedia("(max-height: 1075px)").matches) {
            conditions.style.cssText = `top: 6vh;`;
          } else {
            temp.style.top = '15.2vh';

            conditions.style.cssText = `top: 6.42vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
          
          temp.style.top = '14vh';
      
          if(window.matchMedia("(max-height: 1125px)").matches) {
            conditions.style.cssText = `top: 5.25vh;`;
          } else if(window.matchMedia("(max-height: 1150px)").matches) {
            conditions.style.cssText = `top: 5.5vh;`;
          } else if(window.matchMedia("(max-height: 1175px)").matches) {
            conditions.style.cssText = `top: 5.75vh;`;
          } else {
            conditions.style.cssText = `top: 6vh;`;
          }
          
        } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
          
          temp.style.top = '14.2vh';
      
          if(window.matchMedia("(max-height: 1225px)").matches) {
            conditions.style.cssText = `top: 6.25vh;`;
          } else if(window.matchMedia("(max-height: 1250px)").matches) {
            conditions.style.cssText = `top: 6.5vh;`;
          } else if(window.matchMedia("(max-height: 1275px)").matches) {
            conditions.style.cssText = `top: 6.75vh;`;
          } else {
            conditions.style.cssText = `top: 6.875vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
          
          temp.style.top = '14.7vh';
      
          if(window.matchMedia("(max-height: 1325px)").matches) {
            conditions.style.cssText = `top: 7.625vh;`;
          } else if(window.matchMedia("(max-height: 1350px)").matches) {
            conditions.style.cssText = `top: 7.875vh;`;
          } else if(window.matchMedia("(max-height: 1375px)").matches) {
            conditions.style.cssText = `top: 8.125vh;`;
          } else {
            temp.style.top = '15.2vh';
            conditions.style.cssText = `top: 8.375vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1425px)").matches) {
            conditions.style.cssText = `top: 8.125vh;`;
          } else if(window.matchMedia("(max-height: 1450px)").matches) {
            conditions.style.cssText = `top: 8.125vh;`;
          } else if(window.matchMedia("(max-height: 1475px)").matches) {
            conditions.style.cssText = `top: 8.375vh;`;
          } else {
            temp.style.top = '15.2vh';
            conditions.style.cssText = `top: 8.625vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1525px)").matches) {
            conditions.style.cssText = `top: 8.25vh;`;
          } else if(window.matchMedia("(max-height: 1550px)").matches) {
            conditions.style.cssText = `top: 8.5vh;`;
          } else if(window.matchMedia("(max-height: 1575px)").matches) {
            conditions.style.cssText = `top: 8.75vh;`;
          } else {
            conditions.style.cssText = `top: 9vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
          
          temp.style.top = '15.2vh';
      
          if(window.matchMedia("(max-height: 1625px)").matches) {
            conditions.style.cssText = `top: 9.5vh;`;
          } else if(window.matchMedia("(max-height: 1650px)").matches) {
            conditions.style.cssText = `top: 9.5vh;`;
          } else if(window.matchMedia("(max-height: 1675px)").matches) {
            conditions.style.cssText = `top: 9.5vh;`;
          } else {
            conditions.style.cssText = `top: 9.5vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
          
          temp.style.top = '14.84vh';

          conditions.style.top = '9.09vh';
      
        } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {
          
          temp.style.top = '14.95vh';
          
          conditions.style.cssText = `top: 9.34vh;`;
        } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
          
          temp.style.top = '15.25vh';
          
          conditions.style.cssText = `top: 10.34vh;`;
      
        } else {
          
          temp.style.top = '15.46vh';
          
          conditions.style.cssText = `top: 10.75vh;`;
        }
      
      
        if(window.matchMedia("(max-height: 599px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 258px; width: 237px;';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 284px; width: 242px;';
        } else if(window.matchMedia("(min-height: 800px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 284px; width: 242px;';
        } else {
          document.querySelector('.conditions img').style.cssText = 'height: 284px; width: 242px;';
        }
        

      } else if(portraitW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

        if(moon260.matches) {
            temp.style.cssText = 'top: 11.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 8.2vh;';
            conditions.style.cssText = `top: 3.5vh;`;

            if(tempReading <= -1) {
              temp.style.left = '2vw'; 
            } else {
              temp.style.left = '4vw';
            }
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {
            const minWidth481 = window.matchMedia('(min-width: 481px)');
            
            if(minWidth481.matches) {
              temp.style.cssText = 'top: 6.6vh; margin: auto;';
              conditions.style.cssText = `top: 0vh;`;

              // temp.style.fontSize = '4.8em';

              if(tempReading <= -1) {
                temp.style.left = '-0.4vw'; 
              } else {
                temp.style.left = '1.6vw';
              }
            } else if(window.matchMedia("(min-width: 400px)").matches) {
              temp.style.cssText = 'top: 12.1vh; margin: auto;';
              conditions.style.cssText = `top: -1vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '1vw'; 
              } else {
                temp.style.left = '3vw';
              }
            } else if(window.matchMedia("(max-height: 500px)").matches) {
              temp.style.cssText = 'top: 15.2%; margin: auto;';
              conditions.style.cssText = `top: 0.5vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '1.4vw'; 
              } else {
                temp.style.left = '3.4vw';
              }
            } else {
              temp.style.cssText = 'top: 13%; margin: auto;';
              conditions.style.cssText = `top: 0.5vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '1.7vw'; 
              } else {
                temp.style.left = '3.7vw';
              }
            }

            if(maxHeight600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 196px; width: 191px;';

              conditions.style.cssText = 'top: -1.09vh;';

              temp.style.top = '13.7%';

              // temp.style.fontSize = '3.7em';
            } else if(minWidth481.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 245px;';
            } else if(window.matchMedia("(min-width: 400px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 264px; width: 229px;';

              temp.style.top = '13.4%';

              if(window.matchMedia("(min-height: 768px)").matches) {
                conditions.style.top = '-2vh';
              }

            } else if(window.matchMedia("(min-height: 800px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 212px;';

              conditions.style.top = '-2.2vh';
              temp.style.top = '12.4%';
            } else if(window.matchMedia("(min-height: 700px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 212px;';

              conditions.style.top = '-1.2vh';
              temp.style.top = '12.27%';
            } else if(window.matchMedia("(min-height: 660px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 212px;';

              conditions.style.top = '-1.7vh';
              temp.style.top = '12.27%';
            } else if(window.matchMedia("(min-height: 653px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 212px;';

              conditions.style.top = '-0.7vh';
              temp.style.top = '12.27%';
            } else {
              document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 212px;';

              conditions.style.top = '-2vh';
              temp.style.top = '12.4%';
            }

            

            tempConditions.style.cssText = 'top: 11vh;';
            

            /*// leftDiv.style.top = '-10vh';
            // rightDiv.style.top = '-10vh';*/
        

            console.log('GUESS WHO?');

            if(window.matchMedia("(min-height: 800px)").matches) {
              if(window.matchMedia("(min-height: 960px)").matches) {
                temp.style.top = '10.5%';

                conditions.style.top = '0vh';

                document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 245px;';
              } else {
                temp.style.top = '12.1%';

                conditions.style.top = '-0.5vh';
              }
              
              
              // temp.style.fontSize = '4.6em';

              

              // // city.style.fontSize = '3.7em';

              document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              document.querySelector('.date-and-time').style.fontSize = '1.1em';

              if(tempReading <= -1) {
                temp.style.left = '1vw'; 
              } else {
                temp.style.left = '3vw';
              }


            } else if(window.matchMedia("(min-height: 700px)").matches) {
              temp.style.top = '10.9%';
              // temp.style.fontSize = '4.6em';

              conditions.style.top = '-2vh';

              if(tempReading <= -1) {
                temp.style.left = '1.2vw'; 
              } else {
                temp.style.left = '3.2vw';
              }

              if(window.matchMedia("(max-height: 728px)").matches && window.matchMedia("(min-width: 500px)").matches) {
                document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 245px;';
              }
            }    
            
            
            if(window.matchMedia("(max-width: 300px)").matches) {
              conditions.style.top = '-1vh';

              if(tempReading <= -1) {
                temp.style.left = '2vw';
              } else {
                temp.style.left = '4vw';
              }

              document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 202px;';
            }
            
            
          } 

          

          
/*
          if(hour3 >= 4 && hour < 12) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
          } else if(hour >= 12 && hour < 18) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
          } else if(hour >= 18 && hour < 22) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
          } else if(hour >= 22 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
          }*/
      }  else if(landscapeW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

       /* if(moon260.matches) {
            temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 7.2vh;';
            conditions.style.cssText = `top: 2.5vh;`;
        
            conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {*/
            

            temp.style.cssText = 'top: 18.4vh; margin: auto;';

            tempConditions.style.cssText = 'top: 9.6vh;';
            conditions.style.cssText = `top: 8vh;`;

            if(tempReading <= -1) {
              temp.style.left = '0.5vw'; 
            } else {
              temp.style.left = '2vw';
            }
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';

            if(window.matchMedia("(max-width: 699px)").matches) {
              
              
              
              
              
              if(window.matchMedia("(max-height: 300px)").matches) {
                temp.style.top = '25.6vh';
                conditions.style.top = '10.25vh';

              } else if(window.matchMedia("(max-height: 339px)").matches) {
                temp.style.top = '22.7vh';

                conditions.style.top = '9.28vh';
              } else if(window.matchMedia("(max-height: 372px)").matches) {
                temp.style.top = '22.2vh';

                conditions.style.top = '8vh';
              } else if(window.matchMedia("(max-height: 397px)").matches) {
                temp.style.top = '22.6vh';

                conditions.style.top = '9vh';
              } else {
                temp.style.top = '23.6vh';

                conditions.style.top = '10vh';
              }

              if(window.matchMedia("(max-width: 599px)").matches) {
                setTimeout(() => {
                  // leftDiv.style.right = '27.5vw';
                  // rightDiv.style.left = '27.5vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '0.5vw';  
                } else {
                  temp.style.left = '2vw';
                }
                
                
                document.querySelector('.conditions img').style.cssText = 'height: 137px; width: 114px;';
              } else {
                setTimeout(() => {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '0vw';
                } else {
                  temp.style.left = '1.5vw';
                }

                if(window.matchMedia("(max-height: 340px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 144px; width: 129px;';
                } else if(window.matchMedia("(max-height: 372px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 164px; width: 144px;';
                } else if(window.matchMedia("(max-height: 379px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 164px; width: 137px;';
                } else {
                  document.querySelector('.conditions img').style.cssText = 'height: 164px; width: 144px;';
                }
                
              }
              
              
              
            } else if(window.matchMedia("(min-width: 700px)").matches) {
              conditions.style.top = '7vh';

              temp.style.top = '20.6vh';

              if(tempReading <= -1) {
                temp.style.left = '0.25vw';  
              } else {
                temp.style.left = '1.75vw';
              }

              if(window.matchMedia("(max-height: 499px)").matches) {
                document.querySelector('.conditions img').style.cssText = 'height: 180px; width: 151px;';
              } else {
                temp.style.top = '25.37vh';
                
                if(tempReading <= -1) {
                  temp.style.left = '0vw';  
                } else {
                  temp.style.left = '1.5vw';
                }

                conditions.style.top = '15vh';
                document.querySelector('.conditions img').style.cssText = 'height: 167px; width: 151px;';
              }

              
            }

            if(window.matchMedia("(min-height: 480px)").matches) {
              // // city.style.top = '2vh';
            }
         // }

         setTimeout(() => {
          if(window.matchMedia("(max-width: 600px)").matches) {
            // rightDiv.style.width = '31vw';
          } else if(window.matchMedia("(max-width: 767px)").matches) {
            // rightDiv.style.width = '30vw';
          }

          if(window.matchMedia("(min-height: 314px)").matches) {
            // leftDiv.style.top = '8vh';
            // rightDiv.style.top = '8vh';
          }

          
         },28);
          
        }  else if(portraitW.matches && medMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");
          // // city.style.top = '1vh';
  
         /* if(moon260.matches) {
              temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 7.2vh;';
              conditions.style.cssText = `top: 2.5vh;`;
          
              conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {*/
              
  
              
  
              tempConditions.style.cssText = 'top: 9.6vh;';
              

              if(window.matchMedia("(min-height: 1153px)").matches && window.matchMedia("(min-width: 1000px)").matches) {
                temp.style.cssText = 'top: 10.1vh; margin: auto;';
                conditions.style.cssText = `top: 2.75vh;`;

                if(tempReading <= -1) {
                  temp.style.left = '0'; 
                } else {
                  temp.style.left = '2vw';
                }

                document.querySelector('.conditions img').style.cssText = 'height: 314px; width: 284px;';
              } else if(window.matchMedia("(min-height: 1153px)").matches) {
                temp.style.cssText = 'top: 10vh; margin: auto;';
                conditions.style.cssText = `top: 1.5vh;`;

                if(tempReading <= -1) {
                  temp.style.left = '0'; 
                } else {
                  temp.style.left = '2vw';
                }

                document.querySelector('.conditions img').style.cssText = 'height: 334px; width: 306px;';
              } else {
                temp.style.cssText = 'top: 11.5vh; margin: auto;';
                conditions.style.cssText = `top: 0.5vh;`;

                if(tempReading <= -1) {
                  temp.style.left = '0'; 
                } else {
                  temp.style.left = '2vw';
                }

                document.querySelector('.conditions img').style.cssText = 'height: 319px; width: 286px;';
              }
              
           // }
            
          }  else if(landscapeW.matches && medMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                
                setTimeout(() => {
                  // leftDiv.style.top = '11vh';
                  // rightDiv.style.top = '11vh';
                },28);

                
    
                temp.style.cssText = 'margin: auto;';
    
                tempConditions.style.cssText = 'top: 9.6vh;';
            

                if(window.matchMedia("(max-height: 400px)").matches) {
                  // // city.style.top = '0';

                  temp.style.top = '22.6vh';
                  conditions.style.cssText = `top: 7.5vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 175px; width: 158px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                } else if(window.matchMedia("(min-height: 447px)").matches) {
                  temp.style.top = '23.4vh';
                  conditions.style.cssText = `top: 9.8vh;`;

                  if(window.matchMedia("(min-width: 850px)").matches) {
                    document.querySelector('.conditions img').style.cssText = 'height: 206px; width: 175px;';
                  } else {
                    document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 162px;';
                  }
                  

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                } else {
                  temp.style.top = '22.84vh';
                  conditions.style.cssText = `top: 7.2vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 194px; width: 167px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                }

                if(window.matchMedia("(max-width: 818px)").matches) {
                  // leftDiv.style.right = '20vw';
                  // rightDiv.style.left = '20vw';
                } else {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                }
             // }

             if(window.matchMedia("(min-width: 1000px)").matches) {
              if(window.matchMedia("(min-height: 685px)").matches) {
                temp.style.top = '25.6vh';
                conditions.style.top = '15.35vh';

                document.querySelector('.conditions img').style.cssText = 'height: 231px; width: 200px;';
              } else {
                temp.style.top = '25.6vh';
                conditions.style.top = '12.6vh';

                document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 200px;';
              }

              if(tempReading <= -1) {
                temp.style.left = '-0.1vw';
              } else {
                temp.style.left = '1.4vw';
              }

              
             } else if(window.matchMedia("(min-width: 900px)").matches) {
              temp.style.top = '24.6vh';

              if(tempReading <= -1) {
                temp.style.left = '0vw';
              } else {
                temp.style.left = '1.5vw';
              }
              

              conditions.style.top = '13.2vh';

              document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 196px;';
             }
              
            }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
      
                  temp.style.cssText = 'top: 12vh; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  conditions.style.cssText = `top: 8vh;`;
              
                  //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
               // }

               if(tempReading <= -1) {
                temp.style.left = '0'; 
              } else {
                temp.style.left = '2vw';
              }
                
              }  else if(landscapeW.matches && lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {
                    // wider than 1068px, wider than 1199px, shorter than 1069px (so why does this not apply?)
                
                    temp.style.cssText = 'margin: auto;';


                    // temp.style.fontSize = '5.4em';

                    if(tempReading <= -1) {
                      temp.style.left = '-0.5vw'; 
                    } else {
                      temp.style.left = '1vw';
                    }

                    // // city.style.top = '1vh';
                    // // city.style.fontSize = '6.2em';
                    document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                    document.querySelector('.date-and-time').style.fontSize = '1.4em';
 
                    if(window.matchMedia("(min-height: 900px)").matches) {
                      temp.style.top = '19.6vh';
                      conditions.style.top = '10vh';

                      if(tempReading <= -1) {
                        temp.style.left = '-0.3vw'; 
                      } else {
                        temp.style.left = '1.2vw';
                      }
                      
                      document.querySelector('.conditions img').style.cssText = 'height: 284px; width: 245px;';
                    }else if(window.matchMedia("(min-height: 700px)").matches) {
                      temp.style.top = '21.8vh';
                      conditions.style.cssText = `top: 10.2vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '-0.3vw'; 
                      } else {
                        temp.style.left = '1.2vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 286px; width: 235px;';
                    } else {
                      temp.style.cssText = 'top: 21.4vh;';
                      conditions.style.cssText = `top: 6.2vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '-0.25vw'; 
                      } else {
                        temp.style.left = '1.25vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 229px;';
                    }

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    

                    
              }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                  // landscape, wider than 1068px, shorter than 1069px

                const moon260 = window.matchMedia("(max-width: 260px)");
        
               /* if(moon260.matches) {
                    temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 7.2vh;';
                    conditions.style.cssText = `top: 2.5vh;`;
                
                    conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                  } else {*/
                    
        
                    setTimeout(() => {
                      temp.style.cssText = 'margin: auto;';

                      // temp.style.fontSize = '5.1em';

                      if(tempReading <= -1) {
                        temp.style.left = '0.34vw'; 
                      } else {
                        temp.style.left = '1.84vw';
                      }

                      let minHeight900 = window.matchMedia("(min-height: 863px)");

                      // // city.style.top = '1vh';
                      // // city.style.fontSize = '6.2em';

                      console.log(`window.innerHeight = ${window.innerHeight}`)
                      console.log(`minHeight900.matches: ${minHeight900.matches}`);
                     if(minHeight900.matches) {
                        temp.style.top = '18.2vh';
                      } else {
                        temp.style.top = '17.8vh';
                      }
                    },25);
                    
        
                    tempConditions.style.cssText = 'top: 9.6vh;';
                    conditions.style.cssText = `top: 5.6vh;`;
                    
                    /*if(maxWidth1200.matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                    } else {*/
                      document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 239px;';
                    //}
                    
                 // }
                  
                }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'top: 6vh; margin: auto;';

                      // temp.style.fontSize = '6em';
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: -1.4vh;`;

                      setTimeout(() => {
                        leftDiv.style.height = '32vh';
                        rightDiv.style.height = '32vh';

                        
                        
                      },28);
                  
                      document.querySelector('.conditions img').style.cssText = 'height: 272px; width: 262px;';
                   // }

                   if(tempReading <= -1) {
                    temp.style.left = '-0.4vw'; 
                  } else {
                    temp.style.left = '1.6vw';
                  }
                    
                  }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        setTimeout(() => {
                          temp.style.cssText = 'top: 27.35vh; margin: auto;';

                          // temp.style.fontSize = '5.6em';

                          if(tempReading <= -1) {
                            temp.style.left = '-0.25vw'; 
                          } else {
                            temp.style.left = '1.25vw';
                          }
                        },25);
                        
            
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        conditions.style.cssText = `top: 20.25vh;`;
                    
                        document.querySelector('.conditions img').style.cssText = 'height: 267px; width: 234px;';
                     // }
                      
                    } 


      
        
    break;
    case 'rainy.png':
      if(hour >= 18 || hour < 4) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
      } else if(window.matchMedia("(max-width: 480px)").matches && portraitW.matches) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';
      } else {
        leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
        rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
      }

      temp.style.color = 'rgb(2,2,2)';

      /*if(window.matchMedia("(max-width: 480px)").matches) {
        setTimeout(() => {
          leftDiv.style.color = 'rgb(255,255,255)';
          rightDiv.style.color = 'rgb(255,255,255)';

          lowTempDiv.style.borderColor = 'rgb(255,255,255)';
        },28);
      }*/

/*
      setTimeout(() => {
        if(desktopW.matches) {
          if(hour >= 4 && hour < 18) {
            if(desktopW.matches && window.matchMedia("(max-width: 1999px)").matches && window.matchMedia('(min-width: 1700px)').matches) {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); right: 19.6vw; top: 0;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); left: 19.6vw; top: 0;';
            } else {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); right: 22.6vw; top: 0;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); left: 22.6vw; top: 0;';
            }

            city.style.cssText = 'color: rgb(2,2,2);';
  
            highTempDiv.style.cssText = 'color: rgb(2,2,2);';
            lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            precipDiv.style.cssText = 'color: rgb(2,2,2);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
  
            feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
          } else if(hour >= 18 || hour < 4) {
            if(desktopW.matches && window.matchMedia("(max-width: 1999px)").matches && window.matchMedia('(min-width: 1700px)').matches) {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); right: 19.6vw; top: 0;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); left: 19.6vw; top: 0;';
            } else {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); right: 22.6vw; top: 0;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); left: 22.6vw; top: 0;';
            }

            city.style.cssText = 'color: rgb(253,253,253);';
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
          }
        } else if(portraitW.matches && window.matchMedia("(max-width: 480px)").matches) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
        } else if(smallMobileW.matches && portraitW.matches) {
          if(hour >= 4 && hour < 18) {
            city.style.cssText = 'color: rgb(2,2,2);';

            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -10vh;';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -10vh;';
  
            highTempDiv.style.cssText = 'color: rgb(2,2,2);';
            lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            precipDiv.style.cssText = 'color: rgb(2,2,2);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
  
            feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            
  
          } else if(hour >= 18 || hour < 4) {
            city.style.cssText = 'color: rgb(253,253,253);';

            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
           //lrDivs.style.cssText = 'bottom: 10vh;';
          }
        } else if(medMobileW.matches && portraitW.matches) {
          if(hour >= 4 && hour < 18) {
            city.style.cssText = 'color: rgb(2,2,2);';

            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -8vh;';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -8vh;';
  
            highTempDiv.style.cssText = 'color: rgb(2,2,2);';
            lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            precipDiv.style.cssText = 'color: rgb(2,2,2);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
  
            feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            
  
          } else if(hour >= 18 || hour < 4) {
            city.style.cssText = 'color: rgb(253,253,253);';

            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -8vh;';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -8vh;';
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
           //lrDivs.style.cssText = 'bottom: 10vh;';
          }
        } else if(portraitW.matches) {
          if(hour >= 4 && hour < 18) {
            city.style.cssText = 'color: rgb(2,2,2);';

            leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: -4.8vh;';
            rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: -4.8vh;';
  
            
  
            highTempDiv.style.cssText = 'color: rgb(2,2,2);';
            lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            precipDiv.style.cssText = 'color: rgb(2,2,2);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
  
            feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
          } else if(hour >= 18 || hour < 4) {
            city.style.cssText = 'color: rgb(253,253,253);';

            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -4.8vh;';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -4.8vh;';
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
          }
        } else if(landscapeW.matches && smallMobileW.matches) {
          if(hour >= 4 && hour < 18) {

            city.style.cssText = 'color: rgb(2,2,2);';
  
            if(window.matchMedia("(max-width: 500px)").matches) {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; right: 29vw; font-size: 1.2em;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; left: 29vw; font-size: 0.76em;';
            } else if(window.matchMedia("(max-width: 600px)").matches) {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; right: 29vw; font-size: 1.4em;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; left: 29vw; font-size: 0.84em;';
            } else {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; right: 23.5vw; font-size: 1.4em;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; left: 23.5vw; font-size: 0.84em;';
            }
            
  
            highTempDiv.style.cssText = 'color: rgb(2,2,2);';
            lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            precipDiv.style.cssText = 'color: rgb(2,2,2);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
  
            feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
          } else if(hour >= 18 || hour < 4) {
            city.style.cssText = 'color: rgb(253,253,253);';

            if(window.matchMedia("(max-width: 500px)").matches) {
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; right: 29vw; font-size: 1.2em;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; left: 29vw; font-size: 0.76em;';
            } else if(window.matchMedia("(max-width: 600px)").matches) {
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; right: 29vw; font-size: 1.4em;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; left: 29vw; font-size: 0.84em;';
            } else {
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; right: 23.5vw; font-size: 1.4em;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; left: 23.5vw; font-size: 0.84em;';
              }
            
            
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
          }
        }  else if(landscapeW.matches && medMobileW.matches) {
          if(hour >= 4 && hour < 18) {

            city.style.cssText = 'color: rgb(2,2,2);';
  
            if(window.matchMedia("(min-width: 824px)").matches && window.matchMedia("(max-width: 974px)").matches) {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; right: 21.5vw;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; left: 21.5vw;';
            } else if(window.matchMedia("(min-width: 975px)").matches && window.matchMedia("(max-width: 1099px)").matches) {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; right: 24vw;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; left: 24vw;';
            } else {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; right: 22vw;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; left: 22vw;';
            }
            
  
            highTempDiv.style.cssText = 'color: rgb(2,2,2);';
            lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            precipDiv.style.cssText = 'color: rgb(2,2,2);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
  
            feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
          } else if(hour >= 18 || hour < 4) {
            city.style.cssText = 'color: rgb(253,253,253);';

            if(window.matchMedia("(min-width: 824px)").matches) {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; right: 24vw;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; left: 24vw;';
            } else {
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; right: 22vw;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; left: 22vw;';
            }
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
          }
        }  else if(landscapeW.matches && lrgMobileW.matches && window.matchMedia("(max-height: 900px)").matches) {
          if(hour >= 4 && hour < 18) {
            city.style.cssText = 'color: rgb(2,2,2);';

            leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; right: 19vw;';
            rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; left: 19vw;';
  
            highTempDiv.style.cssText = 'color: rgb(2,2,2);';
            lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            precipDiv.style.cssText = 'color: rgb(2,2,2);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
  
            feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
          } else if(hour >= 18 || hour < 4) {
            city.style.cssText = 'color: rgb(253,253,253);';

            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; right: 19vw;';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; left: 19vw;';
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
          }
        } else if(landscapeW.matches && lrgMobileW.matches) {
          if(hour >= 4 && hour < 18) {
            city.style.cssText = 'color: rgb(2,2,2);';

            leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; right: 19vw;';
            rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; left: 19vw;';
  
            highTempDiv.style.cssText = 'color: rgb(2,2,2);';
            lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            precipDiv.style.cssText = 'color: rgb(2,2,2);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
  
            feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
          } else if(hour >= 18 || hour < 4) {
            city.style.cssText = 'color: rgb(253,253,253);';

            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; right: 19vw;';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; left: 19vw;';
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
          }
        } else if(landscapeW.matches) {
          if(hour >= 4 && hour < 18) {
            city.style.cssText = 'color: rgb(2,2,2);';

            leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 20vh; width: 39vw; right: 11vw;';
            rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 20vh; width: 39vw; left: 11vw;';
  
            highTempDiv.style.cssText = 'color: rgb(2,2,2);';
            lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            precipDiv.style.cssText = 'color: rgb(2,2,2);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
  
            feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
          } else if(hour >= 18 || hour < 4) {
            city.style.cssText = 'color: rgb(253,253,253);';

            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 20vh; width: 39vw; right: 11vw;';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 20vh; width: 39vw; left: 11vw;';
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
          }
        } else {
          if(hour >= 4 && hour < 18) {
            city.style.cssText = 'color: rgb(2,2,2);';

            leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
            rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
  
            highTempDiv.style.cssText = 'color: rgb(2,2,2);';
            lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            precipDiv.style.cssText = 'color: rgb(2,2,2);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
  
            feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
          } else if(hour >= 18 || hour < 4) {
            city.style.cssText = 'color: rgb(253,253,253);';

            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
  
            highTempDiv.style.cssText = 'color: rgb(255,255,255);';
            lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            precipDiv.style.cssText = 'color: rgb(255,255,255);';
  
            feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
  
            feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
          }
        }
  
  
  
      },28)
      
  */
        
      
  
      if(desktopW.matches) {
        tempConditions.style.cssText = 'top: 16vh;';
        conditions.style.cssText = `top: 0.5vh;`;
        // temp.style.cssText = 'left: 7%; top: 30%';

        // // city.style.top = '1vh';
        // // city.style.fontSize = '6.2em';


        if(window.matchMedia("(min-width: 2000px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.5vw';
          } else {
            temp.style.left = '1vw';
          }
        } else if(window.matchMedia("(min-width: 1900px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.4vw';
          } else {
            temp.style.left = '1.1vw';
          }
        } else if(window.matchMedia("(min-width: 1700px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1600px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1400px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.1vw';
          } else {
            temp.style.left = '1.4vw';
          }
        } else if(window.matchMedia("(min-width: 1300px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        }
      
        if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
          
      
          if(window.matchMedia("(max-height: 525px)").matches) {
            conditions.style.cssText = `top: 4vh;`;
      
            temp.style.top = '13vh';
          } else if(window.matchMedia("(max-height: 550px)").matches) {
            conditions.style.cssText = `top: 5vh;`;
      
            temp.style.top = '13.5vh';
          } else if(window.matchMedia("(max-height: 575px)").matches) {
            conditions.style.cssText = `top: 6vh;`;
      
            temp.style.top = '14.9vh';
          } else {
            conditions.style.cssText = `top: 6.6vh;`;
            
            temp.style.top = '15.51vh';
          }


        } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
          
          if(window.matchMedia("(max-height: 625px)").matches) {
            conditions.style.cssText = `top: 2.86vh;`;
      
            temp.style.top = '12.14vh';
          } else if(window.matchMedia("(max-height: 650px)").matches) {
            conditions.style.cssText = `top: 3.11vh;`;
      
            temp.style.top = '12.14vh';
          } else if(window.matchMedia("(max-height: 675px)").matches) {
            conditions.style.cssText = `top: 3.86vh;`;
      
            temp.style.top = '12.89vh';
          } else {
            conditions.style.cssText = `top: 4.61vh;`;
            
            temp.style.top = '13.49vh';
          }
      
        } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
          
          if(window.matchMedia("(max-height: 725px)").matches) {
            conditions.style.cssText = `top: 2vh;`;
          } else if(window.matchMedia("(max-height: 750px)").matches) {
            conditions.style.cssText = `top: 2.75vh;`;
          } else if(window.matchMedia("(max-height: 775px)").matches) {
            conditions.style.cssText = `top: 3vh;`;
          } else {
            conditions.style.cssText = `top: 3.25vh;`;
          }

          if(window.matchMedia("(min-height: 751px)").matches) {
            temp.style.top = '10.14vh';
          } else {
            temp.style.top = '9.64vh';
          }

        } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
          
          temp.style.top = '11.37vh';
          
          if(window.matchMedia("(max-height: 825px)").matches) {
            conditions.style.top = '4.25vh';
          } else if(window.matchMedia("(max-height: 850px)").matches) {
            conditions.style.cssText = `top: 4.84vh;`;
          } else if(window.matchMedia("(max-height: 875px)").matches) {
            conditions.style.cssText = `top: 4.84vh;`;
          } else {
            temp.style.top = '12.37vh';
            conditions.style.cssText = `top: 6.14vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
          
          temp.style.top = '11.9vh';
          
          if(window.matchMedia("(max-height: 925px)").matches) {
            conditions.style.top = '5.77vh';
          } else if(window.matchMedia("(max-height: 950px)").matches) {
            conditions.style.cssText = `top: 6.25vh;`;
          } else if(window.matchMedia("(max-height: 975px)").matches) {
            conditions.style.cssText = `top: 6.5vh;`;
          } else {
            conditions.style.cssText = `top: 6.5vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
          
          temp.style.top = '12.25vh';
      
          if(window.matchMedia("(max-height: 1025px)").matches) {
            conditions.style.cssText = `top: 6.75vh;`;
          } else if(window.matchMedia("(max-height: 1050px)").matches) {
            conditions.style.cssText = `top: 7vh;`;
          } else if(window.matchMedia("(max-height: 1075px)").matches) {
            conditions.style.cssText = `top: 7.10vh;`;
          } else {
            conditions.style.cssText = `top: 7.10vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
          
          temp.style.top = '12.75vh';
      
          if(window.matchMedia("(max-height: 1125px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
          } else if(window.matchMedia("(max-height: 1150px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
          } else if(window.matchMedia("(max-height: 1175px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
          } else {
            conditions.style.cssText = `top: 8vh;`;
          }
          
        } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
          
          temp.style.top = '13.27vh';
      
          if(window.matchMedia("(max-height: 1225px)").matches) {
            conditions.style.cssText = `top: 8.5vh;`;
          } else if(window.matchMedia("(max-height: 1250px)").matches) {
            conditions.style.cssText = `top: 8.75vh;`;
          } else if(window.matchMedia("(max-height: 1275px)").matches) {
            conditions.style.cssText = `top: 8.75vh;`;
          } else {
            conditions.style.cssText = `top: 9vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
          
          temp.style.top = '13.75vh';
      
          if(window.matchMedia("(max-height: 1325px)").matches) {
            conditions.style.cssText = `top: 9.625vh;`;
          } else if(window.matchMedia("(max-height: 1350px)").matches) {
            conditions.style.cssText = `top: 9.625vh;`;
          } else if(window.matchMedia("(max-height: 1375px)").matches) {
            conditions.style.cssText = `top: 9.625vh;`;
          } else {
            conditions.style.cssText = `top: 9.625vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
          
          temp.style.top = '13.57vh';
      
          if(window.matchMedia("(max-height: 1425px)").matches) {
            conditions.style.cssText = `top: 9.625vh;`;
          } else if(window.matchMedia("(max-height: 1450px)").matches) {
            conditions.style.cssText = `top: 9.625vh;`;
          } else if(window.matchMedia("(max-height: 1475px)").matches) {
            conditions.style.cssText = `top: 10vh;`;
          } else {
            conditions.style.cssText = `top: 10vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
          
          temp.style.top = '13.7vh';
      
          if(window.matchMedia("(max-height: 1525px)").matches) {
            conditions.style.cssText = `top: 10.125vh;`;
          } else if(window.matchMedia("(max-height: 1550px)").matches) {
            conditions.style.cssText = `top: 10.25vh;`;
          } else if(window.matchMedia("(max-height: 1575px)").matches) {
            conditions.style.cssText = `top: 10.25vh;`;
          } else {
            conditions.style.cssText = `top: 10.25vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
          
          temp.style.top = '14.53vh';
      
          if(window.matchMedia("(max-height: 1625px)").matches) {
            conditions.style.cssText = `top: 11.25vh;`;
          } else if(window.matchMedia("(max-height: 1650px)").matches) {
            conditions.style.cssText = `top: 11.25vh;`;
          } else if(window.matchMedia("(max-height: 1675px)").matches) {
            conditions.style.cssText = `top: 11.25vh;`;
          } else {
            conditions.style.cssText = `top: 11.25vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
          
          temp.style.top = '13.925vh';

          conditions.style.top = '10.84vh';
      
        } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {

          if(window.matchMedia("(min-height: 1851px)").matches) {
            temp.style.top = '14.2vh';
          } else {
            temp.style.top = '14.3vh';
          }
          
          conditions.style.cssText = `top: 11.34vh;`;
        } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
          
          if(window.matchMedia("(min-height: 1976px)").matches) {
            temp.style.top = '14.51vh';
          } else if(window.matchMedia("(min-height: 1951px)").matches) {
            temp.style.top = '14.62vh';
          } else {
            temp.style.top = '14.72vh';
          }
          
          conditions.style.cssText = `top: 11.84vh;`;
      
        } else {
          
          temp.style.top = '14.99vh';
          
          conditions.style.cssText = `top: 12.25vh;`;
        }
      
      
        if(window.matchMedia("(max-height: 599px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 237px; width: 227px;';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 246px;';
        } else if(window.matchMedia("(min-height: 800px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 246px;';
        } else {
          document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 246px;';
        }

       
      } else if(portraitW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

        document.querySelector('.conditions img').style.cssText = 'height: 219px; width: 219px;';

        if(moon260.matches) {
            temp.style.cssText = 'top: 11.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 8.2vh;';
            conditions.style.cssText = `top: 3.5vh;`;

            if(tempReading <= -1) {
              temp.style.left = '2vw'; 
            } else {
              temp.style.left = '4vw';
            }
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {
            const minWidth481 = window.matchMedia('(min-width: 481px)');
            
            if(minWidth481.matches) {
              temp.style.cssText = 'top: 6vh; margin: auto;';
              conditions.style.cssText = `top: 1vh;`;

              if(tempReading <= -1) {
                temp.style.left = '1vw'; 
              } else {
                temp.style.left = '3vw';
              }
            } else {
              temp.style.cssText = 'top: 9%; margin: auto;';
              conditions.style.cssText = `top: 0vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '2vw'; 
              } else {
                temp.style.left = '4vw';
              }
            }

            if(window.matchMedia("(min-height: 1000px)").matches) {
              //// // city.style.top = '1.5vh';
              conditions.style.top = '1.25vh';

              if(window.matchMedia("(min-height: 840px)").matches) {
                temp.style.top = '8.24%';
              } else if(window.matchMedia("(min-height: 820px)").matches) {
                temp.style.top = '8.8%';
              } else {
                temp.style.top = '8.46%';
              }
              
              if(window.matchMedia("(min-width: 448px)").matches) {
                temp.style.left = '4vw';
              }

              document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 224px;';

              //// // city.style.fontSize = '4em';

              //document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              //document.querySelector('.date-and-time').style.fontSize = '1.1em';
            } else if(window.matchMedia("(min-height: 900px)").matches) {
              //// // city.style.top = '1.5vh';
              conditions.style.top = '1.25vh';

              if(window.matchMedia("(min-height: 840px)").matches) {
                temp.style.top = '8.24%';
              } else if(window.matchMedia("(min-height: 820px)").matches) {
                temp.style.top = '8.8%';
              } else {
                temp.style.top = '8.46%';
              }
              
              if(window.matchMedia("(min-width: 448px)").matches) {
                temp.style.left = '4vw';
              }

              document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 219px;';

              //// // city.style.fontSize = '4em';

              //document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              //document.querySelector('.date-and-time').style.fontSize = '1.1em';
            } else if(window.matchMedia("(min-height: 800px)").matches) {
              //// // city.style.top = '1.5vh';
              conditions.style.top = '1.25vh';

              if(window.matchMedia("(min-height: 840px)").matches) {
                temp.style.top = '8.24%';
              } else if(window.matchMedia("(min-height: 820px)").matches) {
                temp.style.top = '8.8%';
              } else {
                temp.style.top = '8.46%';
              }
              
              if(window.matchMedia("(min-width: 448px)").matches) {
                temp.style.left = '4vw';
              }

              document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 219px;';

              //// // city.style.fontSize = '4em';

              //document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              //document.querySelector('.date-and-time').style.fontSize = '1.1em';
            } else if(window.matchMedia("(min-height: 700px)").matches) {
              //// // city.style.top = '1vh';
              //// // city.style.fontSize = '3.7em';
              
              if(window.matchMedia("(min-height: 712px)").matches) {
                temp.style.top = '9.12%';
              } else {
                temp.style.top = '9.62%';
              }

              conditions.style.top = '1.75vh';
              
              if(window.matchMedia("(max-height: 728px)").matches) {
                conditions.style.top = '-0.5vh';

                temp.style.top = '7.12%';

                
                if(window.matchMedia("(min-width: 500px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 225px; width: 219px;'; 
                }
              }          
            }

            if(window.matchMedia("(min-height: 900px)").matches) {
              if(window.matchMedia("(min-height: 1000px)").matches) {
                temp.style.top = '7.7%';

                document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 219px;';
              } else {
                temp.style.top = '8.2%';

                document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 219px;';
              }
              
              
              
              if(tempReading <= -1) {
                temp.style.left = '1vw';
              } else {
                temp.style.left = '3vw';
              }

              
            }

            

            if(maxHeight600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 177px; width: 177px;';

              conditions.style.cssText = 'top: 1.25vh;';
              temp.style.top = '8.8%';

              if(tempReading <= -1) {
                temp.style.left = '3.6vw';
              } else {
                temp.style.left = '5.6vw';
              }
              
            }


            
            if(window.matchMedia("(max-width: 300px)").matches) {

              if(window.matchMedia("(min-height: 600px)").matches) {
                document.querySelector('.conditions img').style.cssText = 'height: 214px; width: 198px;';

                conditions.style.top = '0vh';

                temp.style.top = '8.5%';

                if(tempReading <= -1) {
                  temp.style.left = '2.2vw';
                } else {
                  temp.style.left = '4.2vw';
                }

              } else {
                document.querySelector('.conditions img').style.cssText = 'height: 204px; width: 204px;';

                conditions.style.top = '1.75vh';
              }
              
            }

            

            tempConditions.style.cssText = 'top: 11vh;';
            

            /*// leftDiv.style.top = '-10vh';
            // rightDiv.style.top = '-10vh';*/
        

            console.log('GUESS WHO?');
            //document.querySelector('.conditions img').style.cssText = 'border-radius: 0; top: 4vh;';
          } 

          
/*
          if(hour3 >= 4 && hour < 12) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
          } else if(hour >= 12 && hour < 18) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
          } else if(hour >= 18 && hour < 22) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
          } else if(hour >= 22 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
          }*/


      }  else if(landscapeW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

       /* if(moon260.matches) {
            temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 7.2vh;';
            conditions.style.cssText = `top: 2.5vh;`;
        
            conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {*/
            

            temp.style.cssText = 'top: 18.4vh; margin: auto;';

            tempConditions.style.cssText = 'top: 9.6vh;';
            conditions.style.cssText = `top: 8vh;`;

            if(tempReading <= -1) {
              temp.style.left = '0.5vw'; 
            } else {
              temp.style.left = '2vw';
            }
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';

            if(window.matchMedia("(max-width: 699px)").matches) {
              
              
              
              
              
              if(window.matchMedia("(max-height: 300px)").matches) {
                temp.style.top = '19.6vh';

                conditions.style.top = '11.25vh';
              } else if(window.matchMedia("(max-height: 339px)").matches) {
                temp.style.top = '19.10vh';

                conditions.style.top = '10.5vh';
              } else if(window.matchMedia("(max-height: 372px)").matches) {
                temp.style.top = '18.2vh';

                conditions.style.top = '11vh';
              } else if(window.matchMedia("(max-height: 397px)").matches) {
                temp.style.top = '18.4vh';

                conditions.style.top = '10.6vh';
              } else {
                temp.style.top = '20.8vh';

                conditions.style.top = '13vh';
              }

              if(window.matchMedia("(max-width: 599px)").matches) {
                setTimeout(() => {
                  // leftDiv.style.right = '27.5vw';
                  // rightDiv.style.left = '27.5vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '0.9vw';  
                } else {
                  temp.style.left = '2.4vw';
                }
                
                
                document.querySelector('.conditions img').style.cssText = 'height: 127px; width: 114px;';
              } else {
                setTimeout(() => {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '0.4vw';
                } else {
                  temp.style.left = '1.9vw';
                }

                if(window.matchMedia("(max-height: 340px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 132px; width: 127px;';
                } else if(window.matchMedia("(max-height: 372px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 144px; width: 134px;';
                } else if(window.matchMedia("(max-height: 379px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 148px; width: 137px;';
                } else {
                  document.querySelector('.conditions img').style.cssText = 'height: 144px; width: 134px;';
                }
                
              }
              
              
              
            } else if(window.matchMedia("(min-width: 700px)").matches) {
              conditions.style.top = '8vh';

              temp.style.top = '17vh';

              if(tempReading <= -1) {
                temp.style.left = '0.25vw';  
              } else {
                temp.style.left = '1.75vw';
              }

              if(window.matchMedia("(max-height: 499px)").matches) {
                conditions.style.top = '13vh';
                temp.style.top = '20vh';

                document.querySelector('.conditions img').style.cssText = 'height: 151px; width: 147px;';
              } else {
                temp.style.top = '21.37vh';
                
                if(tempReading <= -1) {
                  temp.style.left = '0.25vw';  
                } else {
                  temp.style.left = '1.75vw';
                }

                conditions.style.top = '15vh';
                document.querySelector('.conditions img').style.cssText = 'height: 162px; width: 146px;';
              }

              
            }

            if(window.matchMedia("(min-height: 480px)").matches) {
              // // city.style.top = '2vh';
            }
         // }

         setTimeout(() => {
          if(window.matchMedia("(max-width: 600px)").matches) {
            // rightDiv.style.width = '31vw';
          } else if(window.matchMedia("(max-width: 767px)").matches) {
            // rightDiv.style.width = '30vw';
          }

          if(window.matchMedia("(min-height: 314px)").matches) {
            // leftDiv.style.top = '8vh';
            // rightDiv.style.top = '8vh';
          }

          
         },28);

        }  else if(portraitW.matches && medMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");
          // // city.style.top = '1vh';
  
         /* if(moon260.matches) {
              temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 7.2vh;';
              conditions.style.cssText = `top: 2.5vh;`;
          
              conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {*/
              
  
              temp.style.cssText = 'margin: auto;';
  
              tempConditions.style.cssText = 'top: 9.6vh;';
              conditions.style.cssText = `top: 2vh;`;
          
              document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 262px;';
           // }

           if(window.matchMedia("(min-height: 1153px)").matches && window.matchMedia("(min-width: 1000px)").matches) {
            conditions.style.top = '4vh';
            temp.style.top = '8.89vh';

            document.querySelector('.conditions img').style.cssText = 'height: 312px; width: 292px;';
          } else if(window.matchMedia("(max-width: 860px)").matches) {
           
            if(tempReading <= -1) {
              temp.style.left = '0.75vw'; 
            } else {
              temp.style.left = '2.75vw';
            }

            if(window.matchMedia("(min-height: 1153px)").matches) {
              conditions.style.top = '3vh';
              temp.style.top = '7.89vh';

              document.querySelector('.conditions img').style.cssText = 'height: 302px; width: 282px;';
            } else {
              conditions.style.top = '3vh';
              temp.style.top = '7.9vh';

              document.querySelector('.conditions img').style.cssText = 'height: 272px; width: 262px;';
            }
            
            
            // left: 3vw; top: 8.2vh; 

            
           } else {

             if(tempReading <= -1) {
              temp.style.left = '0.25vw'; 
            } else {
              temp.style.left = '2.25vw';
            }

            document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 262px;';

             if(window.matchMedia("(min-height: 1300px)").matches) {
              temp.style.top = '5.4vh';

              conditions.style.top = '1vh';

              document.querySelector('.conditions img').style.cssText = 'height: 282px; width: 262px;';
             } else {
              temp.style.top = '6.4vh';
             }
             
           }
            
          }  else if(landscapeW.matches && medMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                
                setTimeout(() => {
                  // leftDiv.style.top = '11vh';
                  // rightDiv.style.top = '11vh';
                },28);

                
    
                temp.style.cssText = 'margin: auto;';
    
                tempConditions.style.cssText = 'top: 9.6vh;';
            

                if(window.matchMedia("(max-height: 400px)").matches) {
                  // // city.style.top = '0';

                  temp.style.top = '17.5vh';
                  conditions.style.cssText = `top: 9.84vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 158px; width: 158px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                } else if(window.matchMedia("(min-height: 447px)").matches) {
                  temp.style.top = '20.4vh';
                  conditions.style.cssText = `top: 11.8vh;`;

                  if(window.matchMedia("(min-width: 850px)").matches) {
                    document.querySelector('.conditions img').style.cssText = 'height: 186px; width: 170px;';
                  } else {
                    document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 162px;';
                  }
                  

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                } else {
                  temp.style.top = '20.14vh';
                  conditions.style.cssText = `top: 12.6vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 167px; width: 167px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                }

                if(window.matchMedia("(max-width: 818px)").matches) {
                  // leftDiv.style.right = '20vw';
                  // rightDiv.style.left = '20vw';
                } else {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                }
             // }

             if(window.matchMedia("(min-width: 1000px)").matches) {
              if(window.matchMedia("(min-height: 685px)").matches) {
                temp.style.top = '22.8vh';
                conditions.style.top = '16.4vh';
              } else {
                temp.style.top = '22.6vh';
                conditions.style.top = '14vh';
              }

              if(tempReading <= -1) {
                temp.style.left = '-0.1vw';
              } else {
                temp.style.left = '1.4vw';
              }
              

              

              document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 200px;';
             } else if(window.matchMedia("(min-width: 900px)").matches) {
              temp.style.top = '21.6vh';

              if(tempReading <= -1) {
                temp.style.left = '0vw';
              } else {
                temp.style.left = '1.5vw';
              }
              

              conditions.style.top = '13.2vh';

              document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 192px;';
             }
              
            }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
      
                  temp.style.cssText = 'top: 12vh; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  conditions.style.cssText = `top: 8vh;`;

                  if(tempReading <= -1) {
                    temp.style.left = '0'; 
                  } else {
                    temp.style.left = '2vw';
                  }
              
                  //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
               // }
                
              }  else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {    

                /*
                setTimeout(() => {
                  // leftDiv.style.right = '18.5vw';
                  // rightDiv.style.left = '18.5vw';
                },28);*/

        
                    tempConditions.style.cssText = 'top: 9.6vh;';
                    


                    if(window.matchMedia("(max-height: 600px)").matches) {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 10.14vh;`;
                    } else {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 12.17vh;`;
                    }
                    
                    // // city.style.fontSize = '6.2em';

                    rightDiv.style.fontSize = '1.6em';

                    document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                    document.querySelector('.date-and-time').style.fontSize = '1.4em';

                    if(window.matchMedia('(min-height: 900px)').matches) {
                      temp.style.cssText = 'top: 20.14vh; margin: auto;';

                      if(tempReading <= -1) {
                        temp.style.left = '0.1vw'; 
                      } else {
                        temp.style.left = '1.6vw';
                      }

                      conditions.style.cssText = `top: 16.17vh;`;

                      document.querySelector('.conditions img').style.cssText = 'height: 239px; width: 239px;';
                    }  else {
                      temp.style.cssText = 'left: 1.6vw; top: 18.4vh; margin: auto;';

                      if(tempReading <= -1) {
                        temp.style.left = '0.6vw'; 
                      } else {
                        temp.style.left = '1.6vw';
                      }

                      conditions.style.cssText = `top: 12.17vh;`;

                      document.querySelector('.conditions img').style.cssText = 'height: 237px; width: 237px;';
                    }
              }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                
                
                const moon260 = window.matchMedia("(max-width: 260px)");
        
               /* if(moon260.matches) {
                    temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 7.2vh;';
                    conditions.style.cssText = `top: 2.5vh;`;
                
                    conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                  } else {*/
                    
        
                    temp.style.cssText = 'margin: auto;';
       
                    if(tempReading <= -1) {
                      temp.style.left = '0.1vw'; 
                    } else {
                      temp.style.left = '1.6vw';
                    }

                    if(window.matchMedia("(min-height: 900px)").matches) {
                      temp.style.top = '18.24vh';
                    } else {
                      temp.style.top = '13.6vh';

                      setTimeout(() => {
                        // leftDiv.style.top = '5.3vh';
                        // rightDiv.style.top = '5.3vh';
                      },28);
                      
                    }

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    conditions.style.cssText = `top: 8vh;`;
                    
                    /*if(maxWidth1200.matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                    } else {*/
                      document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 222px;';
                    //}
                    
                 // }
                  
                }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'top: 3.7vh; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: -0.5vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '0'; 
                      } else {
                        temp.style.left = '2vw';
                      }

                      setTimeout(() => {
                        leftDiv.style.height = '32vh';
                        rightDiv.style.height = '32vh';

                        
                        

                        },28);
                  
                      document.querySelector('.conditions img').style.cssText = 'height: 255px; width: 245px;';
                   // }
                    
                  }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        temp.style.cssText = 'top: 26vh; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        conditions.style.cssText = `top: 21.5vh;`;

                        if(tempReading <= -1) {
                          temp.style.left = '0'; 
                        } else {
                          temp.style.left = '1.5vw';
                        }

                        document.querySelector('.conditions img').style.cssText = 'height: 242px; width: 222px;';
                     // }
                      
                    } 
      
      break;

      case 'stormyALT6A.png':

        if(hour >= 18 || hour < 4) {
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
        } else if(window.matchMedia("(max-width: 480px)").matches && portraitW.matches) {
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';
        } else {
          leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
          rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
        }

        temp.style.color = 'rgb(2,2,2)';

        /*
        if(hour3 >= 4 && hour < 12) {
          leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
          rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
        } else if(hour >= 12 && hour < 18) {
          leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
          rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
        } else if(hour >= 18 && hour < 22) {
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
        } else if(hour >= 22 || hour < 4) {
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
        }
  
        if(window.matchMedia("(max-width: 480px)").matches) {
          setTimeout(() => {
            leftDiv.style.color = 'rgb(255,255,255)';
            rightDiv.style.color = 'rgb(255,255,255)';
  
            lowTempDiv.style.borderColor = 'rgb(255,255,255)';
          },28);
        }
  */


        /*
        setTimeout(() => {
          if(desktopW.matches) {
            if(hour >= 4 && hour < 18) {
              if(desktopW.matches && window.matchMedia("(max-width: 1999px)").matches && window.matchMedia('(min-width: 1700px)').matches) {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); right: 19.6vw; top: 0;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); left: 19.6vw; top: 0;';
              } else {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); right: 22.6vw; top: 0;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); left: 22.6vw; top: 0;';
              }
  
              city.style.cssText = 'color: rgb(2,2,2);';
    
              highTempDiv.style.cssText = 'color: rgb(2,2,2);';
              lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              precipDiv.style.cssText = 'color: rgb(2,2,2);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
    
              feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            } else if(hour >= 18 || hour < 4) {
              if(desktopW.matches && window.matchMedia("(max-width: 1999px)").matches && window.matchMedia('(min-width: 1700px)').matches) {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); right: 19.6vw; top: 0;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); left: 19.6vw; top: 0;';
              } else {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); right: 22.6vw; top: 0;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); left: 22.6vw; top: 0;';
              }
  
              city.style.cssText = 'color: rgb(253,253,253);';
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            }
          } else if(portraitW.matches && window.matchMedia("(max-width: 480px)").matches) {
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
          } else if(smallMobileW.matches && portraitW.matches) {
            if(hour >= 4 && hour < 18) {
              city.style.cssText = 'color: rgb(2,2,2);';
  
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -10vh;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -10vh;';
    
              highTempDiv.style.cssText = 'color: rgb(2,2,2);';
              lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              precipDiv.style.cssText = 'color: rgb(2,2,2);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
    
              feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              
    
            } else if(hour >= 18 || hour < 4) {
              city.style.cssText = 'color: rgb(253,253,253);';
  
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
             //lrDivs.style.cssText = 'bottom: 10vh;';
            }
          } else if(medMobileW.matches && portraitW.matches) {
            if(hour >= 4 && hour < 18) {
              city.style.cssText = 'color: rgb(2,2,2);';
  
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -8vh;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -8vh;';
    
              highTempDiv.style.cssText = 'color: rgb(2,2,2);';
              lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              precipDiv.style.cssText = 'color: rgb(2,2,2);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
    
              feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              
    
            } else if(hour >= 18 || hour < 4) {
              city.style.cssText = 'color: rgb(253,253,253);';
  
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -8vh;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -8vh;';
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
             //lrDivs.style.cssText = 'bottom: 10vh;';
            }
          } else if(portraitW.matches) {
            if(hour >= 4 && hour < 18) {
              city.style.cssText = 'color: rgb(2,2,2);';
  
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: -4.8vh;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: -4.8vh;';
    
              
    
              highTempDiv.style.cssText = 'color: rgb(2,2,2);';
              lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              precipDiv.style.cssText = 'color: rgb(2,2,2);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
    
              feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            } else if(hour >= 18 || hour < 4) {
              city.style.cssText = 'color: rgb(253,253,253);';
  
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -4.8vh;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -4.8vh;';
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
            }
          } else if(landscapeW.matches && smallMobileW.matches) {
            if(hour >= 4 && hour < 18) {
  
              city.style.cssText = 'color: rgb(2,2,2);';
    
              if(window.matchMedia("(max-width: 500px)").matches) {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; right: 29vw; font-size: 1.2em;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; left: 29vw; font-size: 0.76em;';
              } else if(window.matchMedia("(max-width: 600px)").matches) {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; right: 29vw; font-size: 1.4em;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; left: 29vw; font-size: 0.84em;';
              } else {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; right: 23.5vw; font-size: 1.4em;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; left: 23.5vw; font-size: 0.84em;';
              }
              
    
              highTempDiv.style.cssText = 'color: rgb(2,2,2);';
              lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              precipDiv.style.cssText = 'color: rgb(2,2,2);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
    
              feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            } else if(hour >= 18 || hour < 4) {
              city.style.cssText = 'color: rgb(253,253,253);';
  
              if(window.matchMedia("(max-width: 500px)").matches) {
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; right: 29vw; font-size: 1.2em;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; left: 29vw; font-size: 0.76em;';
              } else if(window.matchMedia("(max-width: 600px)").matches) {
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; right: 29vw; font-size: 1.4em;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; left: 29vw; font-size: 0.84em;';
              } else {
                  leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; right: 23.5vw; font-size: 1.4em;';
                  rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; left: 23.5vw; font-size: 0.84em;';
                }
              
              
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            }
          }  else if(landscapeW.matches && medMobileW.matches) {
            if(hour >= 4 && hour < 18) {
  
              city.style.cssText = 'color: rgb(2,2,2);';
    
              if(window.matchMedia("(min-width: 824px)").matches && window.matchMedia("(max-width: 974px)").matches) {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; right: 21.5vw;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; left: 21.5vw;';
              } else if(window.matchMedia("(min-width: 975px)").matches && window.matchMedia("(max-width: 1099px)").matches) {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; right: 24vw;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; left: 24vw;';
              } else {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; right: 22vw;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; left: 22vw;';
              }
              
    
              highTempDiv.style.cssText = 'color: rgb(2,2,2);';
              lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              precipDiv.style.cssText = 'color: rgb(2,2,2);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
    
              feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            } else if(hour >= 18 || hour < 4) {
              city.style.cssText = 'color: rgb(253,253,253);';
  
              if(window.matchMedia("(min-width: 824px)").matches) {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; right: 24vw;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; left: 24vw;';
              } else {
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; right: 22vw;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; left: 22vw;';
              }
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            }
          }  else if(landscapeW.matches && lrgMobileW.matches && window.matchMedia("(max-height: 900px)").matches) {
            if(hour >= 4 && hour < 18) {
              city.style.cssText = 'color: rgb(2,2,2);';
  
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; right: 19vw;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; left: 19vw;';
    
              highTempDiv.style.cssText = 'color: rgb(2,2,2);';
              lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              precipDiv.style.cssText = 'color: rgb(2,2,2);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
    
              feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            } else if(hour >= 18 || hour < 4) {
              city.style.cssText = 'color: rgb(253,253,253);';
  
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; right: 19vw;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; left: 19vw;';
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            }
          } else if(landscapeW.matches && lrgMobileW.matches) {
            if(hour >= 4 && hour < 18) {
              city.style.cssText = 'color: rgb(2,2,2);';
  
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; right: 19vw;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; left: 19vw;';
    
              highTempDiv.style.cssText = 'color: rgb(2,2,2);';
              lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              precipDiv.style.cssText = 'color: rgb(2,2,2);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
    
              feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            } else if(hour >= 18 || hour < 4) {
              city.style.cssText = 'color: rgb(253,253,253);';
  
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; right: 19vw;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; left: 19vw;';
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            }
          } else if(landscapeW.matches) {
            if(hour >= 4 && hour < 18) {
              city.style.cssText = 'color: rgb(2,2,2);';
  
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 20vh; width: 39vw; right: 11vw;';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 20vh; width: 39vw; left: 11vw;';
    
              highTempDiv.style.cssText = 'color: rgb(2,2,2);';
              lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              precipDiv.style.cssText = 'color: rgb(2,2,2);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
    
              feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            } else if(hour >= 18 || hour < 4) {
              city.style.cssText = 'color: rgb(253,253,253);';
  
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 20vh; width: 39vw; right: 11vw;';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 20vh; width: 39vw; left: 11vw;';
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            }
          } else {
            if(hour >= 4 && hour < 18) {
              city.style.cssText = 'color: rgb(2,2,2);';
  
              leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
              rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
    
              highTempDiv.style.cssText = 'color: rgb(2,2,2);';
              lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              precipDiv.style.cssText = 'color: rgb(2,2,2);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
    
              feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
            } else if(hour >= 18 || hour < 4) {
              city.style.cssText = 'color: rgb(253,253,253);';
  
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
    
              highTempDiv.style.cssText = 'color: rgb(255,255,255);';
              lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              precipDiv.style.cssText = 'color: rgb(255,255,255);';
    
              feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
    
              feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            }
          }
    
    
    
        },28)
        
    */
          
    
    
        if(desktopW.matches) {
          tempConditions.style.cssText = 'top: 16vh;';
          conditions.style.cssText = `top: 1vh;`;
          // temp.style.cssText = 'left: 7%; top: 30%';
  
          // // city.style.top = '1vh';
          // // city.style.fontSize = '6.2em';
  
  
  
          if(window.matchMedia("(min-width: 2000px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '-0.5vw';
            } else {
              temp.style.left = '1vw';
            }
          } else if(window.matchMedia("(min-width: 1900px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '-0.4vw';
            } else {
              temp.style.left = '1.1vw';
            }
          } else if(window.matchMedia("(min-width: 1700px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '-0.25vw';
            } else {
              temp.style.left = '1.25vw';
            }
          } else if(window.matchMedia("(min-width: 1600px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '-0.25vw';
            } else {
              temp.style.left = '1.25vw';
            }
          } else if(window.matchMedia("(min-width: 1400px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '-0.1vw';
            } else {
              temp.style.left = '1.4vw';
            }
          } else if(window.matchMedia("(min-width: 1300px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '-0.25vw';
            } else {
              temp.style.left = '1.25vw';
            }
          }
        
          if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
            
        
            if(window.matchMedia("(max-height: 525px)").matches) {
              conditions.style.cssText = `top: 5vh;`;
        
              temp.style.top = '12.5vh';
            } else if(window.matchMedia("(max-height: 550px)").matches) {
              conditions.style.cssText = `top: 6vh;`;
        
              temp.style.top = '13vh';
            } else if(window.matchMedia("(max-height: 575px)").matches) {
              conditions.style.cssText = `top: 7vh;`;
        
              temp.style.top = '14.15vh';
            } else {
              conditions.style.cssText = `top: 7.6vh;`;
              
              temp.style.top = '14.51vh';
            }
  
  
          } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
            
            if(window.matchMedia("(max-height: 625px)").matches) {
              conditions.style.cssText = `top: 5.36vh;`;
        
              temp.style.top = '11.64vh';
            } else if(window.matchMedia("(max-height: 650px)").matches) {
              conditions.style.cssText = `top: 5.61vh;`;
        
              temp.style.top = '11.64vh';
            } else if(window.matchMedia("(max-height: 675px)").matches) {
              conditions.style.cssText = `top: 6.36vh;`;
        
              temp.style.top = '12.39vh';
            } else {
              conditions.style.cssText = `top: 7.11vh;`;
              
              temp.style.top = '12.99vh';
            }
        
          } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
            
            if(window.matchMedia("(max-height: 725px)").matches) {
              conditions.style.cssText = `top: 4.35vh;`;
            } else if(window.matchMedia("(max-height: 750px)").matches) {
              conditions.style.cssText = `top: 4.5vh;`;
            } else if(window.matchMedia("(max-height: 775px)").matches) {
              conditions.style.cssText = `top: 4.65vh;`;
            } else {
              conditions.style.cssText = `top: 4.8vh;`;
            }
  
            if(window.matchMedia("(min-height: 751px)").matches) {
              temp.style.top = '9.64vh';
            } else {
              temp.style.top = '9.64vh';
            }
  
          } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
            
            temp.style.top = '10.97vh';
            
            if(window.matchMedia("(max-height: 825px)").matches) {
              conditions.style.top = '5.75vh';
            } else if(window.matchMedia("(max-height: 850px)").matches) {
              conditions.style.cssText = `top: 5.75vh;`;
            } else if(window.matchMedia("(max-height: 875px)").matches) {
              conditions.style.cssText = `top: 6vh;`;
            } else {
              temp.style.top = '12.37vh';
              conditions.style.cssText = `top: 7.44vh;`;
            }
        
          } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
            
            temp.style.top = '11.9vh';
            
            if(window.matchMedia("(max-height: 925px)").matches) {
              conditions.style.top = '7.27vh';
            } else if(window.matchMedia("(max-height: 950px)").matches) {
              conditions.style.cssText = `top: 7.27vh;`;
            } else if(window.matchMedia("(max-height: 975px)").matches) {
              conditions.style.cssText = `top: 7.51vh;`;
            } else {
              conditions.style.cssText = `top: 7.51vh;`;
            }
        
          } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
            
            temp.style.top = '12.25vh';
        
            if(window.matchMedia("(max-height: 1025px)").matches) {
              conditions.style.cssText = `top: 7.5vh;`;
            } else if(window.matchMedia("(max-height: 1050px)").matches) {
              conditions.style.cssText = `top: 7.75vh;`;
            } else if(window.matchMedia("(max-height: 1075px)").matches) {
              conditions.style.cssText = `top: 7.85vh;`;
            } else {
              conditions.style.cssText = `top: 7.95vh;`;
            }
        
          } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
            
            temp.style.top = '12.75vh';
        
            if(window.matchMedia("(max-height: 1125px)").matches) {
              conditions.style.cssText = `top: 8.6vh;`;
            } else if(window.matchMedia("(max-height: 1150px)").matches) {
              conditions.style.cssText = `top: 8.6vh;`;
            } else if(window.matchMedia("(max-height: 1175px)").matches) {
              conditions.style.cssText = `top: 8.75vh;`;
            } else {
              conditions.style.cssText = `top: 8.75vh;`;
            }
            
          } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
            
            temp.style.top = '13.27vh';
        
            if(window.matchMedia("(max-height: 1225px)").matches) {
              conditions.style.cssText = `top: 9.35vh;`;
            } else if(window.matchMedia("(max-height: 1250px)").matches) {
              conditions.style.cssText = `top: 9.44vh;`;
            } else if(window.matchMedia("(max-height: 1275px)").matches) {
              conditions.style.cssText = `top: 9.55vh;`;
            } else {
              conditions.style.cssText = `top: 9.6vh;`;
            }
        
          } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
            
            temp.style.top = '13.75vh';
        
            if(window.matchMedia("(max-height: 1325px)").matches) {
              conditions.style.cssText = `top: 10.225vh;`;
            } else if(window.matchMedia("(max-height: 1350px)").matches) {
              conditions.style.cssText = `top: 10.225vh;`;
            } else if(window.matchMedia("(max-height: 1375px)").matches) {
              conditions.style.cssText = `top: 10.225vh;`;
            } else {
              conditions.style.cssText = `top: 10.225vh;`;
            }
        
          } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
            
            temp.style.top = '13.57vh';
        
            if(window.matchMedia("(max-height: 1425px)").matches) {
              conditions.style.cssText = `top: 10.225vh;`;
            } else if(window.matchMedia("(max-height: 1450px)").matches) {
              conditions.style.cssText = `top: 10.225vh;`;
            } else if(window.matchMedia("(max-height: 1475px)").matches) {
              conditions.style.cssText = `top: 10.425vh;`;
            } else {
              conditions.style.cssText = `top: 10.425vh;`;
            }
        
          } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
            
            temp.style.top = '13.7vh';
        
            if(window.matchMedia("(max-height: 1525px)").matches) {
              conditions.style.cssText = `top: 10.625vh;`;
            } else if(window.matchMedia("(max-height: 1550px)").matches) {
              conditions.style.cssText = `top: 10.7vh;`;
            } else if(window.matchMedia("(max-height: 1575px)").matches) {
              conditions.style.cssText = `top: 10.7vh;`;
            } else {
              conditions.style.cssText = `top: 10.7vh;`;
            }
        
          } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
            
            temp.style.top = '14.53vh';
        
            if(window.matchMedia("(max-height: 1625px)").matches) {
              conditions.style.cssText = `top: 11.6vh;`;
            } else if(window.matchMedia("(max-height: 1650px)").matches) {
              conditions.style.cssText = `top: 11.6vh;`;
            } else if(window.matchMedia("(max-height: 1675px)").matches) {
              conditions.style.cssText = `top: 11.6vh;`;
            } else {
              conditions.style.cssText = `top: 11.6vh;`;
            }
        
          } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
            
            temp.style.top = '13.925vh';
  
            conditions.style.top = '11.21vh';
        
          } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {
  
            if(window.matchMedia("(min-height: 1851px)").matches) {
              temp.style.top = '14.2vh';
            } else {
              temp.style.top = '14.3vh';
            }
            
            conditions.style.cssText = `top: 11.69vh;`;
          } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
            
            if(window.matchMedia("(min-height: 1976px)").matches) {
              temp.style.top = '14.35vh';
            } else if(window.matchMedia("(min-height: 1951px)").matches) {
              temp.style.top = '14.46vh';
            } else {
              temp.style.top = '14.62vh';
            }
            
            conditions.style.cssText = `top: 12.14vh;`;
        
          } else {
            
            temp.style.top = '14.99vh';
            
            conditions.style.cssText = `top: 12.6vh;`;
          }
        
        
          if(window.matchMedia("(max-height: 599px)").matches) {
            document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 246px;';
          } else if(window.matchMedia("(max-height: 699px)").matches) {
            document.querySelector('.conditions img').style.cssText = 'height: 272px; width: 251px;';
          } else if(window.matchMedia("(min-height: 800px)").matches) {
            document.querySelector('.conditions img').style.cssText = 'height: 296px; width: 251px;';
          } else {
            document.querySelector('.conditions img').style.cssText = 'height: 276px; width: 251px;';
          }
  
  
        } else if(portraitW.matches && smallMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");
  
          if(moon260.matches) {
              temp.style.cssText = 'top: 11.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 8.2vh;';
              conditions.style.cssText = `top: 3.5vh;`;
  
              if(tempReading <= -1) {
                temp.style.left = '2vw'; 
              } else {
                temp.style.left = '4vw';
              }
          
              //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {
              const minWidth481 = window.matchMedia('(min-width: 481px)');
              
              if(minWidth481.matches) {
                temp.style.cssText = 'left: 3vw; top: 6vh; margin: auto;';
                conditions.style.cssText = `top: 1vh;`;
  
                if(tempReading <= -1) {
                  temp.style.left = '1.7vw'; 
                } else {
                  temp.style.left = '3.7vw';
                }
              } else {
                temp.style.cssText = 'top: 8.7%; margin: auto;';
                conditions.style.cssText = `top: 1.5vh;`;
                // leftDiv.style.top = '-8.6vh';
  
                if(window.matchMedia("(min-width: 373px)").matches) {
                  if(tempReading <= -1) {
                    temp.style.left = '3.4vw'; 
                  } else {
                    temp.style.left = '5.4vw';
                  }
                } else {
                    if(tempReading <= -1) {
                      temp.style.left = '4vw'; 
                    } else {
                      temp.style.left = '6vw';
                    }
                }
                
                if(window.matchMedia("(min-height: 737px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 219px;';
                } else {
                  
                  if(window.matchMedia("(min-height: 660px)").matches) {
                    temp.style.top = '8.5%';
                    conditions.style.top = '1.75vh';
                  }
  
                  document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 219px;';
                }
  
                
              } 
  
              if(window.matchMedia("(min-height: 800px)").matches) {
                //// // city.style.top = '1.5vh';
                conditions.style.top = '2vh';
  
                if(window.matchMedia("(min-height: 829px)").matches) {
                  temp.style.top = '8.2%';
                } else {
                  temp.style.top = '8.9%';
                }
                
  
                if(tempReading <= -1) {
                  temp.style.left = '3.1vw';
                } else {
                  temp.style.left = '5.1vw';
                }
  
                //// // city.style.fontSize = '4em';
  
                //document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
                //document.querySelector('.date-and-time').style.fontSize = '1.1em';
              } else if(window.matchMedia("(min-height: 700px)").matches) {
                //// // city.style.top = '1vh';
                //// // city.style.fontSize = '3.7em';
  
                if(window.matchMedia("(max-width: 480px)").matches) {
                  temp.style.top = '8%';
                } else {
                  temp.style.top = '6.6%';
                }
      
                conditions.style.top = '1.75vh';
                
                
                if(window.matchMedia("(max-height: 728px)").matches && window.matchMedia("(min-width: 500px)").matches) {
                  temp.style.top = '7.2%';
                  
                  document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 219px;';
                } else {
                  document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 219px;';
                }

                
              }
  
              if(window.matchMedia("(min-height: 900px)").matches) {
                temp.style.top = '7.2%';
  
                if(tempReading <= -1) {
                  temp.style.left = '1.4vw';
                } else {
                  temp.style.left = '3.4vw';
                }
                
  
                document.querySelector('.conditions img').style.cssText = 'height: 282px; width: 229px;';
              }
  
              
  
              if(maxHeight600.matches) {
                document.querySelector('.conditions img').style.cssText = 'height: 202px; width: 177px;';
  
                conditions.style.cssText = 'top: 1.5vh;';
                temp.style.top = '6.9%';
              }
  
  
              
              if(window.matchMedia("(max-width: 300px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '5.2vw'; 
                } else {
                  temp.style.left = '7.2vw';
                }

                temp.style.top = '8%';
  
                conditions.style.top = '1.25vh';
                document.querySelector('.conditions img').style.cssText = 'height: 237px; width: 204px;';
              }
  
              
  
              tempConditions.style.cssText = 'top: 11vh;';
              
  
              /*// leftDiv.style.top = '-10vh';
              // rightDiv.style.top = '-10vh';*/
          
  
              console.log('GUESS WHO?');
              //document.querySelector('.conditions img').style.cssText = 'border-radius: 0; top: 4vh;';
            } 
  
            
  /*
            if(hour3 >= 4 && hour < 12) {
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
            } else if(hour >= 12 && hour < 18) {
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
            } else if(hour >= 18 && hour < 22) {
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
            } else if(hour >= 22 || hour < 4) {
              leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
              rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
            }*/
        }  else if(landscapeW.matches && smallMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");
  
         /* if(moon260.matches) {
              temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 7.2vh;';
              conditions.style.cssText = `top: 2.5vh;`;
          
              conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {*/
              
  
              temp.style.cssText = 'top: 18.4vh; margin: auto;';
  
              tempConditions.style.cssText = 'top: 9.6vh;';
              conditions.style.cssText = `top: 8vh;`;
  
              if(tempReading <= -1) {
                temp.style.left = '0.5vw'; 
              } else {
                temp.style.left = '2vw';
              }
          
              //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
  
              if(window.matchMedia("(max-width: 699px)").matches) {
                
                
                
                
                
                if(window.matchMedia("(max-height: 300px)").matches) {
                  temp.style.top = '20.6vh';
  
                  conditions.style.top = '14.5vh';
                } else if(window.matchMedia("(max-height: 339px)").matches) {
                  temp.style.top = '20.6vh';
  
                  conditions.style.top = '14.6vh';
                } else if(window.matchMedia("(max-height: 372px)").matches) {
                  temp.style.top = '18.2vh';
  
                  conditions.style.top = '13vh';
                } else if(window.matchMedia("(max-height: 397px)").matches) {
                  temp.style.top = '19vh';
  
                  conditions.style.top = '13.6vh';
                } else {
                  temp.style.top = '20vh';
  
                  conditions.style.top = '14.6vh';
                }
  
                if(window.matchMedia("(max-width: 599px)").matches) {
                  setTimeout(() => {
                    // leftDiv.style.right = '27.5vw';
                    // rightDiv.style.left = '27.5vw';
                  },28);
  
                  if(tempReading <= -1) {
                    temp.style.left = '0.9vw';  
                  } else {
                    temp.style.left = '2.4vw';
                  }
                  
                  
                  document.querySelector('.conditions img').style.cssText = 'height: 136px; width: 120px;';
                } else {
                  setTimeout(() => {
                    // leftDiv.style.right = '21vw';
                    // rightDiv.style.left = '21vw';
                  },28);
  
                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw';
                  } else {
                    temp.style.left = '1.75vw';
                  }
  
                  if(window.matchMedia("(max-height: 340px)").matches) {
                    document.querySelector('.conditions img').style.cssText = 'height: 137px; width: 126px;';
                  } else if(window.matchMedia("(max-height: 372px)").matches) {
                    document.querySelector('.conditions img').style.cssText = 'height: 156px; width: 134px;';
                  } else if(window.matchMedia("(max-height: 379px)").matches) {
                    document.querySelector('.conditions img').style.cssText = 'height: 164px; width: 137px;';
                  } else {
                    document.querySelector('.conditions img').style.cssText = 'height: 156px; width: 134px;';
                  }
                  
                }
                
                
                
              } else if(window.matchMedia("(min-width: 700px)").matches) {
                conditions.style.top = '8vh';
  
                temp.style.top = '15.4vh';
  
                if(tempReading <= -1) {
                  temp.style.left = '0.5vw';  
                } else {
                  temp.style.left = '2vw';
                }
  
                if(window.matchMedia("(max-height: 499px)").matches) {
                  conditions.style.top = '14vh';
                  temp.style.top = '19.4vh';

                  document.querySelector('.conditions img').style.cssText = 'height: 162px; width: 151px;';
                } else {
                  temp.style.top = '21.44vh';
                  
                  if(tempReading <= -1) {
                    temp.style.left = '0.5vw';  
                  } else {
                    temp.style.left = '2vw';
                  }
  
                  conditions.style.top = '16vh';
                  document.querySelector('.conditions img').style.cssText = 'height: 180px; width: 151px;';
                }
  
                
              }
  
              if(window.matchMedia("(min-height: 480px)").matches) {
                // // city.style.top = '2vh';
              }
           // }
  
           setTimeout(() => {
            if(window.matchMedia("(max-width: 600px)").matches) {
              // rightDiv.style.width = '31vw';
            } else if(window.matchMedia("(max-width: 767px)").matches) {
              // rightDiv.style.width = '30vw';
            }
  
            if(window.matchMedia("(min-height: 314px)").matches) {
              // leftDiv.style.top = '8vh';
              // rightDiv.style.top = '8vh';
            }
  
            
           },28);
            
          }  else if(portraitW.matches && medMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
            // // city.style.top = '1vh';
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                
    
                temp.style.cssText = 'margin: auto;';
    
                tempConditions.style.cssText = 'top: 9.6vh;';
                conditions.style.cssText = `top: 2vh;`;
            
                document.querySelector('.conditions img').style.cssText = 'height: 305px; width: 262px;';
             // }
  
             if(window.matchMedia("(min-height: 1153px)").matches && window.matchMedia("(min-width: 1000px)").matches) {
              conditions.style.top = '6vh';
              temp.style.top = '10.6vh';

              if(tempReading <= -1) {
                temp.style.left = '0.7vw'; 
              } else {
                temp.style.left = '2.7vw';
              }

              document.querySelector('.conditions img').style.cssText = 'height: 362px; width: 312px;';
            } else if(window.matchMedia("(max-width: 860px)").matches) {
  
              
  
              if(window.matchMedia("(min-height: 1153px)").matches) {
                conditions.style.top = '4vh';
                temp.style.top = '8.6vh';
  
                if(tempReading <= -1) {
                  temp.style.left = '0.7vw'; 
                } else {
                  temp.style.left = '2.7vw';
                }
  
                document.querySelector('.conditions img').style.cssText = 'height: 343px; width: 292px;';
              } else {
                temp.style.top = '7.5vh';

                conditions.style.top = '3vh';
  
                if(tempReading <= -1) {
                  temp.style.left = '1.4vw'; 
                } else {
                  temp.style.left = '3.4vw';
                }

                document.querySelector('.conditions img').style.cssText = 'height: 314px; width: 262px;';
              }
              
              
              // left: 3vw; top: 8.2vh; 
             } else {
  
              if(tempReading <= -1) {
                temp.style.left = '0.25vw'; 
              } else {
                temp.style.left = '2.25vw';
              }
  
               if(window.matchMedia("(min-height: 1300px)").matches) {
                temp.style.top = '5.1vh';
               } else {
                temp.style.top = '6.4vh';
               }
               
             }
  
             if(window.matchMedia("(min-height: 1324px)").matches) {
                temp.style.top = '9.8vh';
  
                if(tempReading <= -1) {
                  temp.style.left = '0.7vw';
                } else {
                  temp.style.left = '2.7vw';
                }
  
                document.querySelector('.conditions img').style.cssText = 'height: 341px; width: 307px;';
             }
              
            }  else if(landscapeW.matches && medMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
                  setTimeout(() => {
                    // leftDiv.style.top = '11vh';
                    // rightDiv.style.top = '11vh';
                  },28);
  
                  
      
                  temp.style.cssText = 'margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
              
  
                  if(window.matchMedia("(max-height: 400px)").matches) {
                    // // city.style.top = '0';
  
                    temp.style.top = '17.64vh';
                    conditions.style.cssText = `top: 10.84vh;`;
                    document.querySelector('.conditions img').style.cssText = 'height: 184px; width: 164px;';
  
                    if(tempReading <= -1) {
                      temp.style.left = '0.34vw'; 
                    } else {
                      temp.style.left = '1.84vw';
                    }
  
                  } else if(window.matchMedia("(min-height: 447px)").matches) {
                    temp.style.top = '18.6vh';
                    conditions.style.cssText = `top: 12.6vh;`;
  
                    if(window.matchMedia("(min-width: 850px)").matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 206px; width: 175px;';
                    } else {
                      document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 162px;';
                    }
                    
  
                    if(tempReading <= -1) {
                      temp.style.left = '0.5vw'; 
                    } else {
                      temp.style.left = '2vw';
                    }
                  } else {
                    temp.style.top = '19.61vh';
                    conditions.style.cssText = `top: 13vh;`;
                    document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 167px;';
  
                    if(tempReading <= -1) {
                      temp.style.left = '0.34vw'; 
                    } else {
                      temp.style.left = '1.84vw';
                    }
                  }
  
                  setTimeout(() => {
                    if(window.matchMedia("(max-width: 818px)").matches) {
                      // leftDiv.style.right = '20vw';
                      // rightDiv.style.left = '20vw';
                    } else {
                      // leftDiv.style.right = '20.2vw';
                      // rightDiv.style.left = '20.2vw';
                    }
                  },29);
  
               // }
  
               if(window.matchMedia("(min-width: 1000px)").matches) {
                if(window.matchMedia("(min-height: 685px)").matches) {
                  temp.style.top = '21.9vh';

                  conditions.style.top = '16.35vh';
  
                  document.querySelector('.conditions img').style.cssText = 'height: 237px; width: 200px;';
                } else {
                  temp.style.top = '21.25vh';
  
                  conditions.style.top = '14.6vh';
  
                  document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 200px;';
                }
  
                if(tempReading <= -1) {
                  temp.style.left = '0.2vw';
                } else {
                  temp.style.left = '1.7vw';
                }
                
               } else if(window.matchMedia("(min-width: 900px)").matches) {
                temp.style.top = '20.9vh';
  
                if(tempReading <= -1) {
                  temp.style.left = '0.25vw';
                } else {
                  temp.style.left = '1.75vw';
                }
                
  
                conditions.style.top = '14.6vh';
  
                document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 196px;';
               }
                
              }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                const moon260 = window.matchMedia("(max-width: 260px)");
        
               /* if(moon260.matches) {
                    temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 7.2vh;';
                    conditions.style.cssText = `top: 2.5vh;`;
                
                    conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                  } else {*/
                    
        
                    temp.style.cssText = 'top: 12vh; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 9.6vh;';
                    conditions.style.cssText = `top: 8vh;`;
                
                    //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
                 // }
  
                 if(tempReading <= -1) {
                  temp.style.left = '0'; 
                } else {
                  temp.style.left = '2vw';
                }
                  
                }  else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {    
  
                      if(window.matchMedia('(min-height: 900px)').matches) {
                        temp.style.cssText = 'top: 15.4vh; margin: auto;';
  
                        if(tempReading <= -1) {
                          temp.style.left = '0.1vw'; 
                        } else {
                          temp.style.left = '1.6vw';
                        }
                      }  else {
                        temp.style.cssText = 'top: 17vh; margin: auto;';
  
                        if(tempReading <= -1) {
                          temp.style.left = '0.5vw'; 
                        } else {
                          temp.style.left = '2vw';
                        }
                      }
  
                      /*
                      setTimeout(() => {
                        // leftDiv.style.right = '18.5vw';
                        // rightDiv.style.left = '18.5vw';
                      },29);
                      */
                      
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      
  
  
                      if(window.matchMedia("(max-height: 600px)").matches) {
                        // // city.style.top = '1vh';
                        conditions.style.cssText = `top: 10.14vh;`;
                        
                        if(tempReading <= -1) {
                          temp.style.left = '0.5vw';
                        } else {
                          temp.style.left = '2vw';
                        }
                      
                      } else {
                        // // city.style.top = '1vh';
                        conditions.style.cssText = `top: 12.17vh;`;
                      }
                      
                      // // city.style.fontSize = '6.2em';
  
                      rightDiv.style.fontSize = '1.6em';
  
                      document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                      document.querySelector('.date-and-time').style.fontSize = '1.4em';
  
                      if(window.matchMedia("(min-height: 900px)").matches) {
                        temp.style.top = '20.6vh';
                        conditions.style.cssText = `top: 16.17vh;`;
  
                        if(tempReading <= -1) {
                          temp.style.left = '0.25vw';
                        } else {
                          temp.style.left = '1.75vw';
                        }

                        document.querySelector('.conditions img').style.cssText = 'height: 288px; width: 244px;';
                      } else {
                        temp.style.cssText = 'top: 17vh; margin: auto;';
                        conditions.style.cssText = `top: 12.17vh;`;

                        document.querySelector('.conditions img').style.cssText = 'height: 286px; width: 242px;';
                      }
                      
                }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                  
                  
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'margin: auto;';
  
                      if(tempReading <= -1) {
                        temp.style.left = '-0.1vw';
                      } else {
                        temp.style.left = '1.4vw';
                      }
         
                      if(window.matchMedia("(min-height: 900px)").matches) {
                        temp.style.top = '18.24vh';
                      } else {
                        temp.style.top = '12.34vh';
                        
                        setTimeout(() => {
                          // leftDiv.style.top = '5vh';
                          // rightDiv.style.top = '5vh';
                        },28);
                      }
  
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: 8vh;`;
                      
                      /*if(maxWidth1200.matches) {
                        document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                      } else {*/
                        document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 222px;';
                      //}
                      
                   // }
                    
                  }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        temp.style.cssText = 'top: 3.5vh; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 10.6vh;';
                        conditions.style.cssText = `top: -0.5vh;`;
  
                        if(tempReading <= -1) {
                          temp.style.left = '0.5vw'; 
                        } else {
                          temp.style.left = '2.5vw';
                        }
  
                        setTimeout(() => {
                          leftDiv.style.height = '32vh';
                          rightDiv.style.height = '32vh';
  
                          
                          
  
                          },28);
                    
                        document.querySelector('.conditions img').style.cssText = 'height: 305px; width: 267px;';
                     // }
                      
                    }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                      const moon260 = window.matchMedia("(max-width: 260px)");
              
                     /* if(moon260.matches) {
                          temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
              
                          tempConditions.style.cssText = 'top: 7.2vh;';
                          conditions.style.cssText = `top: 2.5vh;`;
                      
                          conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                        } else {*/
                          
              
                          temp.style.cssText = 'top: 25vh; margin: auto;';
              
                          tempConditions.style.cssText = 'top: 9.6vh;';
                          conditions.style.cssText = `top: 21.5vh;`;
  
                          if(tempReading <= -1) {
                            temp.style.left = '0'; 
                          } else {
                            temp.style.left = '1.5vw';
                          }
                      
                          document.querySelector('.conditions img').style.cssText = 'height: 277px; width: 232px;';
                       // }
                        
                      } 
        
        break;
      
        case 'stormyALT6B.png':

          if(hour >= 18 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
          } else if(window.matchMedia("(max-width: 480px)").matches && portraitW.matches) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202);';
          } else {
            leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
            rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
          }

          temp.style.color = 'rgb(2,2,2)';

         /* 
          if(hour3 >= 4 && hour < 12) {
            leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
            rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
          } else if(hour >= 12 && hour < 18) {
            leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
            rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
          } else if(hour >= 18 && hour < 22) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
          } else if(hour >= 22 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
          }

          temp.style.color = 'rgb(144,144,255)';
    
          if(window.matchMedia("(max-width: 480px)").matches) {
            setTimeout(() => {
              leftDiv.style.color = 'rgb(255,255,255)';
              rightDiv.style.color = 'rgb(255,255,255)';
    
              lowTempDiv.style.borderColor = 'rgb(255,255,255)';
            },28);
          }*/
    
          /*
          setTimeout(() => {
            if(desktopW.matches) {
              if(hour >= 4 && hour < 18) {
                if(desktopW.matches && window.matchMedia("(max-width: 1999px)").matches && window.matchMedia('(min-width: 1700px)').matches) {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); right: 19.6vw; top: 0;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); left: 19.6vw; top: 0;';
                } else {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); right: 22.6vw; top: 0;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); left: 22.6vw; top: 0;';
                }
    
                city.style.cssText = 'color: rgb(2,2,2);';
      
                highTempDiv.style.cssText = 'color: rgb(2,2,2);';
                lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                precipDiv.style.cssText = 'color: rgb(2,2,2);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
      
                feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              } else if(hour >= 18 || hour < 4) {
                if(desktopW.matches && window.matchMedia("(max-width: 1999px)").matches && window.matchMedia('(min-width: 1700px)').matches) {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); right: 19.6vw; top: 0;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); left: 19.6vw; top: 0;';
                } else {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); right: 22.6vw; top: 0;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); left: 22.6vw; top: 0;';
                }
    
                city.style.cssText = 'color: rgb(253,253,253);';
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              }
            } else if(portraitW.matches && window.matchMedia("(max-width: 480px)").matches) {
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
            } else if(smallMobileW.matches && portraitW.matches) {
              if(hour >= 4 && hour < 18) {
                city.style.cssText = 'color: rgb(2,2,2);';
    
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -10vh;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -10vh;';
      
                highTempDiv.style.cssText = 'color: rgb(2,2,2);';
                lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                precipDiv.style.cssText = 'color: rgb(2,2,2);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
      
                feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                
      
              } else if(hour >= 18 || hour < 4) {
                city.style.cssText = 'color: rgb(253,253,253);';
    
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -10vh;';
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
               //lrDivs.style.cssText = 'bottom: 10vh;';
              }
            } else if(medMobileW.matches && portraitW.matches) {
              if(hour >= 4 && hour < 18) {
                city.style.cssText = 'color: rgb(2,2,2);';
    
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -8vh;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(202,202,202); top: -8vh;';
      
                highTempDiv.style.cssText = 'color: rgb(2,2,2);';
                lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                precipDiv.style.cssText = 'color: rgb(2,2,2);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
      
                feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                
      
              } else if(hour >= 18 || hour < 4) {
                city.style.cssText = 'color: rgb(253,253,253);';
    
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -8vh;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -8vh;';
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
               //lrDivs.style.cssText = 'bottom: 10vh;';
              }
            } else if(portraitW.matches) {
              if(hour >= 4 && hour < 18) {
                city.style.cssText = 'color: rgb(2,2,2);';
    
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: -4.8vh;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: -4.8vh;';
      
                
      
                highTempDiv.style.cssText = 'color: rgb(2,2,2);';
                lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                precipDiv.style.cssText = 'color: rgb(2,2,2);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
      
                feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              } else if(hour >= 18 || hour < 4) {
                city.style.cssText = 'color: rgb(253,253,253);';
    
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -4.8vh;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: -4.8vh;';
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
              }
            } else if(landscapeW.matches && smallMobileW.matches) {
              if(hour >= 4 && hour < 18) {
    
                city.style.cssText = 'color: rgb(2,2,2);';
      
                if(window.matchMedia("(max-width: 500px)").matches) {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; right: 29vw; font-size: 1.2em;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; left: 29vw; font-size: 0.76em;';
                } else if(window.matchMedia("(max-width: 600px)").matches) {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; right: 29vw; font-size: 1.4em;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; left: 29vw; font-size: 0.84em;';
                } else {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; right: 23.5vw; font-size: 1.4em;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 8vh; width: 30vw; left: 23.5vw; font-size: 0.84em;';
                }
                
      
                highTempDiv.style.cssText = 'color: rgb(2,2,2);';
                lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                precipDiv.style.cssText = 'color: rgb(2,2,2);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
      
                feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              } else if(hour >= 18 || hour < 4) {
                city.style.cssText = 'color: rgb(253,253,253);';
    
                if(window.matchMedia("(max-width: 500px)").matches) {
                  leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; right: 29vw; font-size: 1.2em;';
                  rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; left: 29vw; font-size: 0.76em;';
                } else if(window.matchMedia("(max-width: 600px)").matches) {
                  leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; right: 29vw; font-size: 1.4em;';
                  rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; left: 29vw; font-size: 0.84em;';
                } else {
                    leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; right: 23.5vw; font-size: 1.4em;';
                    rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 8vh; width: 30vw; left: 23.5vw; font-size: 0.84em;';
                  }
                
                
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              }
            }  else if(landscapeW.matches && medMobileW.matches) {
              if(hour >= 4 && hour < 18) {
    
                city.style.cssText = 'color: rgb(2,2,2);';
      
                if(window.matchMedia("(min-width: 824px)").matches && window.matchMedia("(max-width: 974px)").matches) {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; right: 21.5vw;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; left: 21.5vw;';
                } else if(window.matchMedia("(min-width: 975px)").matches && window.matchMedia("(max-width: 1099px)").matches) {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; right: 24vw;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; left: 24vw;';
                } else {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; right: 22vw;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 10vh; width: 31vw; left: 22vw;';
                }
                
      
                highTempDiv.style.cssText = 'color: rgb(2,2,2);';
                lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                precipDiv.style.cssText = 'color: rgb(2,2,2);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
      
                feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              } else if(hour >= 18 || hour < 4) {
                city.style.cssText = 'color: rgb(253,253,253);';
    
                if(window.matchMedia("(min-width: 824px)").matches) {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; right: 24vw;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; left: 24vw;';
                } else {
                  leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; right: 22vw;';
                  rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(139,139,139); top: 10vh; width: 31vw; left: 22vw;';
                }
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              }
            }  else if(landscapeW.matches && lrgMobileW.matches && window.matchMedia("(max-height: 900px)").matches) {
              if(hour >= 4 && hour < 18) {
                city.style.cssText = 'color: rgb(2,2,2);';
    
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; right: 19vw;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; left: 19vw;';
      
                highTempDiv.style.cssText = 'color: rgb(2,2,2);';
                lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                precipDiv.style.cssText = 'color: rgb(2,2,2);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
      
                feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              } else if(hour >= 18 || hour < 4) {
                city.style.cssText = 'color: rgb(253,253,253);';
    
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; right: 19vw;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; left: 19vw;';
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              }
            } else if(landscapeW.matches && lrgMobileW.matches) {
              if(hour >= 4 && hour < 18) {
                city.style.cssText = 'color: rgb(2,2,2);';
    
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; right: 19vw;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 9vh; width: 31vw; left: 19vw;';
      
                highTempDiv.style.cssText = 'color: rgb(2,2,2);';
                lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                precipDiv.style.cssText = 'color: rgb(2,2,2);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
      
                feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              } else if(hour >= 18 || hour < 4) {
                city.style.cssText = 'color: rgb(253,253,253);';
    
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; right: 19vw;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 9vh; width: 31vw; left: 19vw;';
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              }
            } else if(landscapeW.matches) {
              if(hour >= 4 && hour < 18) {
                city.style.cssText = 'color: rgb(2,2,2);';
    
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 20vh; width: 39vw; right: 11vw;';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202); top: 20vh; width: 39vw; left: 11vw;';
      
                highTempDiv.style.cssText = 'color: rgb(2,2,2);';
                lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                precipDiv.style.cssText = 'color: rgb(2,2,2);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
      
                feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              } else if(hour >= 18 || hour < 4) {
                city.style.cssText = 'color: rgb(253,253,253);';
    
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 20vh; width: 39vw; right: 11vw;';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139); top: 20vh; width: 39vw; left: 11vw;';
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              }
            } else {
              if(hour >= 4 && hour < 18) {
                city.style.cssText = 'color: rgb(2,2,2);';
    
                leftDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
                rightDiv.style.cssText = 'color: rgb(2,2,2); border: 6px solid rgb(202,202,202);';
      
                highTempDiv.style.cssText = 'color: rgb(2,2,2);';
                lowTempDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                precipDiv.style.cssText = 'color: rgb(2,2,2);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetDiv.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
      
                feelsLikeVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                humidityVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                windVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                conditionsInfoVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunriseVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
                sunsetVal.style.cssText = 'color: rgb(2,2,2); border-color: rgb(2,2,2);';
              } else if(hour >= 18 || hour < 4) {
                city.style.cssText = 'color: rgb(253,253,253);';
    
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(139,139,139);';
      
                highTempDiv.style.cssText = 'color: rgb(255,255,255);';
                lowTempDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                precipDiv.style.cssText = 'color: rgb(255,255,255);';
      
                feelsLikeDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetDiv.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
      
                feelsLikeVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                humidityVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                windVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                conditionsInfoVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunriseVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
                sunsetVal.style.cssText = 'color: rgb(255,255,255); border-color: rgb(255,255,255);';
              }
            }
      
      
      
          },28)
          
      */
            
      
      
          if(desktopW.matches) {
            tempConditions.style.cssText = 'top: 16vh;';
            conditions.style.cssText = `top: 1vh;`;
            // temp.style.cssText = 'left: 7%; top: 30%';
    
            // // city.style.top = '1vh';
            // // city.style.fontSize = '6.2em';
    
    
    
            if(window.matchMedia("(min-width: 2000px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '-0.5vw';
              } else {
                temp.style.left = '1vw';
              }
            } else if(window.matchMedia("(min-width: 1900px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '-0.4vw';
              } else {
                temp.style.left = '1.1vw';
              }
            } else if(window.matchMedia("(min-width: 1700px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '-0.25vw';
              } else {
                temp.style.left = '1.25vw';
              }
            } else if(window.matchMedia("(min-width: 1600px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '-0.25vw';
              } else {
                temp.style.left = '1.25vw';
              }
            } else if(window.matchMedia("(min-width: 1400px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '-0.1vw';
              } else {
                temp.style.left = '1.4vw';
              }
            } else if(window.matchMedia("(min-width: 1300px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '-0.25vw';
              } else {
                temp.style.left = '1.25vw';
              }
            }
          
            if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
              
          
              if(window.matchMedia("(max-height: 525px)").matches) {
                conditions.style.cssText = `top: 5vh;`;
          
                temp.style.top = '12.5vh';
              } else if(window.matchMedia("(max-height: 550px)").matches) {
                conditions.style.cssText = `top: 6vh;`;
          
                temp.style.top = '13vh';
              } else if(window.matchMedia("(max-height: 575px)").matches) {
                conditions.style.cssText = `top: 7vh;`;
          
                temp.style.top = '14.15vh';
              } else {
                conditions.style.cssText = `top: 7.6vh;`;
                
                temp.style.top = '14.51vh';
              }
    
    
            } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
              
              if(window.matchMedia("(max-height: 625px)").matches) {
                conditions.style.cssText = `top: 5.36vh;`;
          
                temp.style.top = '11.64vh';
              } else if(window.matchMedia("(max-height: 650px)").matches) {
                conditions.style.cssText = `top: 5.61vh;`;
          
                temp.style.top = '11.64vh';
              } else if(window.matchMedia("(max-height: 675px)").matches) {
                conditions.style.cssText = `top: 6.36vh;`;
          
                temp.style.top = '12.39vh';
              } else {
                conditions.style.cssText = `top: 7.11vh;`;
                
                temp.style.top = '12.99vh';
              }
          
            } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
              
              if(window.matchMedia("(max-height: 725px)").matches) {
                conditions.style.cssText = `top: 4.35vh;`;
              } else if(window.matchMedia("(max-height: 750px)").matches) {
                conditions.style.cssText = `top: 4.5vh;`;
              } else if(window.matchMedia("(max-height: 775px)").matches) {
                conditions.style.cssText = `top: 4.65vh;`;
              } else {
                conditions.style.cssText = `top: 4.8vh;`;
              }
    
              if(window.matchMedia("(min-height: 751px)").matches) {
                temp.style.top = '9.64vh';
              } else {
                temp.style.top = '9.64vh';
              }
    
            } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
              
              temp.style.top = '10.97vh';
              
              if(window.matchMedia("(max-height: 825px)").matches) {
                conditions.style.top = '5.75vh';
              } else if(window.matchMedia("(max-height: 850px)").matches) {
                conditions.style.cssText = `top: 5.75vh;`;
              } else if(window.matchMedia("(max-height: 875px)").matches) {
                conditions.style.cssText = `top: 6vh;`;
              } else {
                temp.style.top = '12.37vh';
                conditions.style.cssText = `top: 7.44vh;`;
              }
          
            } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
              
              temp.style.top = '11.9vh';
              
              if(window.matchMedia("(max-height: 925px)").matches) {
                conditions.style.top = '7.27vh';
              } else if(window.matchMedia("(max-height: 950px)").matches) {
                conditions.style.cssText = `top: 7.27vh;`;
              } else if(window.matchMedia("(max-height: 975px)").matches) {
                conditions.style.cssText = `top: 7.51vh;`;
              } else {
                conditions.style.cssText = `top: 7.51vh;`;
              }
          
            } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
              
              temp.style.top = '12.25vh';
          
              if(window.matchMedia("(max-height: 1025px)").matches) {
                conditions.style.cssText = `top: 7.5vh;`;
              } else if(window.matchMedia("(max-height: 1050px)").matches) {
                conditions.style.cssText = `top: 7.75vh;`;
              } else if(window.matchMedia("(max-height: 1075px)").matches) {
                conditions.style.cssText = `top: 7.85vh;`;
              } else {
                conditions.style.cssText = `top: 7.95vh;`;
              }
          
            } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
              
              temp.style.top = '12.75vh';
          
              if(window.matchMedia("(max-height: 1125px)").matches) {
                conditions.style.cssText = `top: 8.6vh;`;
              } else if(window.matchMedia("(max-height: 1150px)").matches) {
                conditions.style.cssText = `top: 8.6vh;`;
              } else if(window.matchMedia("(max-height: 1175px)").matches) {
                conditions.style.cssText = `top: 8.75vh;`;
              } else {
                conditions.style.cssText = `top: 8.75vh;`;
              }
              
            } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
              
              temp.style.top = '13.27vh';
          
              if(window.matchMedia("(max-height: 1225px)").matches) {
                conditions.style.cssText = `top: 9.35vh;`;
              } else if(window.matchMedia("(max-height: 1250px)").matches) {
                conditions.style.cssText = `top: 9.44vh;`;
              } else if(window.matchMedia("(max-height: 1275px)").matches) {
                conditions.style.cssText = `top: 9.55vh;`;
              } else {
                conditions.style.cssText = `top: 9.6vh;`;
              }
          
            } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
              
              temp.style.top = '13.75vh';
          
              if(window.matchMedia("(max-height: 1325px)").matches) {
                conditions.style.cssText = `top: 10.225vh;`;
              } else if(window.matchMedia("(max-height: 1350px)").matches) {
                conditions.style.cssText = `top: 10.225vh;`;
              } else if(window.matchMedia("(max-height: 1375px)").matches) {
                conditions.style.cssText = `top: 10.225vh;`;
              } else {
                conditions.style.cssText = `top: 10.225vh;`;
              }
          
            } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
              
              temp.style.top = '13.57vh';
          
              if(window.matchMedia("(max-height: 1425px)").matches) {
                conditions.style.cssText = `top: 10.225vh;`;
              } else if(window.matchMedia("(max-height: 1450px)").matches) {
                conditions.style.cssText = `top: 10.225vh;`;
              } else if(window.matchMedia("(max-height: 1475px)").matches) {
                conditions.style.cssText = `top: 10.425vh;`;
              } else {
                conditions.style.cssText = `top: 10.425vh;`;
              }
          
            } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
              
              temp.style.top = '13.7vh';
          
              if(window.matchMedia("(max-height: 1525px)").matches) {
                conditions.style.cssText = `top: 10.625vh;`;
              } else if(window.matchMedia("(max-height: 1550px)").matches) {
                conditions.style.cssText = `top: 10.7vh;`;
              } else if(window.matchMedia("(max-height: 1575px)").matches) {
                conditions.style.cssText = `top: 10.7vh;`;
              } else {
                conditions.style.cssText = `top: 10.7vh;`;
              }
          
            } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
              
              temp.style.top = '14.53vh';
          
              if(window.matchMedia("(max-height: 1625px)").matches) {
                conditions.style.cssText = `top: 11.6vh;`;
              } else if(window.matchMedia("(max-height: 1650px)").matches) {
                conditions.style.cssText = `top: 11.6vh;`;
              } else if(window.matchMedia("(max-height: 1675px)").matches) {
                conditions.style.cssText = `top: 11.6vh;`;
              } else {
                conditions.style.cssText = `top: 11.6vh;`;
              }
          
            } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
              
              temp.style.top = '13.925vh';
    
              conditions.style.top = '11.21vh';
          
            } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {
    
              if(window.matchMedia("(min-height: 1851px)").matches) {
                temp.style.top = '14.2vh';
              } else {
                temp.style.top = '14.3vh';
              }
              
              conditions.style.cssText = `top: 11.69vh;`;
            } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
              
              if(window.matchMedia("(min-height: 1976px)").matches) {
                temp.style.top = '14.35vh';
              } else if(window.matchMedia("(min-height: 1951px)").matches) {
                temp.style.top = '14.46vh';
              } else {
                temp.style.top = '14.62vh';
              }
              
              conditions.style.cssText = `top: 12.14vh;`;
          
            } else {
              
              temp.style.top = '14.99vh';
              
              conditions.style.cssText = `top: 12.6vh;`;
            }
          
          
            if(window.matchMedia("(max-height: 599px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 246px;';
            } else if(window.matchMedia("(max-height: 699px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 272px; width: 251px;';
            } else if(window.matchMedia("(min-height: 800px)").matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 296px; width: 251px;';
            } else {
              document.querySelector('.conditions img').style.cssText = 'height: 276px; width: 251px;';
            }
  
    
          } else if(portraitW.matches && smallMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
            if(moon260.matches) {
                temp.style.cssText = 'top: 11.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 8.2vh;';
                conditions.style.cssText = `top: 3.5vh;`;
    
                if(tempReading <= -1) {
                  temp.style.left = '2vw'; 
                } else {
                  temp.style.left = '4vw';
                }
            
                //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {
                const minWidth481 = window.matchMedia('(min-width: 481px)');
                
                if(minWidth481.matches) {
                  temp.style.cssText = 'left: 3vw; top: 6vh; margin: auto;';
                  conditions.style.cssText = `top: 1vh;`;
    
                  if(tempReading <= -1) {
                    temp.style.left = '1.7vw'; 
                  } else {
                    temp.style.left = '3.7vw';
                  }
                } else {
                  temp.style.cssText = 'top: 8.7%; margin: auto;';
                  conditions.style.cssText = `top: 1.5vh;`;
                  // leftDiv.style.top = '-8.6vh';
    
                  if(window.matchMedia("(min-width: 373px)").matches) {
                    if(tempReading <= -1) {
                      temp.style.left = '3.4vw'; 
                    } else {
                      temp.style.left = '5.4vw';
                    }
                  } else {
                      if(tempReading <= -1) {
                        temp.style.left = '4vw'; 
                      } else {
                        temp.style.left = '6vw';
                      }
                  }
                  
                  if(window.matchMedia("(min-height: 737px)").matches) {
                    document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 219px;';
                  } else {
                    
                    if(window.matchMedia("(min-height: 660px)").matches) {
                      temp.style.top = '8.5%';
                      conditions.style.top = '1.75vh';
                    }
    
                    document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 219px;';
                  }

                  if(window.matchMedia("(min-height: 660px)").matches) {
                    temp.style.top = '8.2%';
                  } else if(window.matchMedia("(min-height: 647px)").matches) {
                    temp.style.top = '7.7%';
                  } else {
                    temp.style.top = '8.7%';
                  }
    
                  
                } 
    
                if(window.matchMedia("(min-height: 800px)").matches) {
                  //// // city.style.top = '1.5vh';
                  conditions.style.top = '2vh';
    
                  if(window.matchMedia("(min-height: 829px)").matches) {
                    temp.style.top = '7.7%';
                  } else {
                    temp.style.top = '8.4%';
                  }
                  
    
                  if(tempReading <= -1) {
                    temp.style.left = '3.1vw';
                  } else {
                    temp.style.left = '5.1vw';
                  }
    
                  //// // city.style.fontSize = '4em';
    
                  //document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
                  //document.querySelector('.date-and-time').style.fontSize = '1.1em';
                } else if(window.matchMedia("(min-height: 700px)").matches) {
                  //// // city.style.top = '1vh';
                  //// // city.style.fontSize = '3.7em';
    
                  if(window.matchMedia("(max-width: 480px)").matches) {
                    temp.style.top = '8%';
                  } else {
                    temp.style.top = '6.6%';
                  }
        
                  conditions.style.top = '1.75vh';
                  
                  if(window.matchMedia("(max-height: 728px)").matches && window.matchMedia("(min-width: 500px)").matches) {
                    temp.style.top = '7.2%';
                    
                    document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 219px;';
                  } else {
                    document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 219px;';
                  }
                }
    
                if(window.matchMedia("(min-height: 900px)").matches) {
                  temp.style.top = '7.2%';
    
                  if(tempReading <= -1) {
                    temp.style.left = '1.4vw';
                  } else {
                    temp.style.left = '3.4vw';
                  }
                  
    
                  document.querySelector('.conditions img').style.cssText = 'height: 282px; width: 229px;';
                }
    
                
    
                if(maxHeight600.matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 202px; width: 177px;';
    
                  conditions.style.cssText = 'top: 2vh;';
                  temp.style.top = '7.9%';
                }
    
    
                
                if(window.matchMedia("(max-width: 300px)").matches) {
                  if(tempReading <= -1) {
                    temp.style.left = '5.2vw'; 
                  } else {
                    temp.style.left = '7.2vw';
                  }
    
                  conditions.style.top = '1.25vh';
                  document.querySelector('.conditions img').style.cssText = 'height: 237px; width: 204px;';
                }
    
                
    
                tempConditions.style.cssText = 'top: 11vh;';
                
    
                /*// leftDiv.style.top = '-10vh';
                // rightDiv.style.top = '-10vh';*/
            
    
                console.log('GUESS WHO?');
                //document.querySelector('.conditions img').style.cssText = 'border-radius: 0; top: 4vh;';
              } 
    
              
    /*
              if(hour3 >= 4 && hour < 12) {
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
              } else if(hour >= 12 && hour < 18) {
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
              } else if(hour >= 18 && hour < 22) {
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
              } else if(hour >= 22 || hour < 4) {
                leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
                rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
              }*/
          }  else if(landscapeW.matches && smallMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                
    
                temp.style.cssText = 'top: 18.4vh; margin: auto;';
    
                tempConditions.style.cssText = 'top: 9.6vh;';
                conditions.style.cssText = `top: 8vh;`;
    
                if(tempReading <= -1) {
                  temp.style.left = '0.5vw'; 
                } else {
                  temp.style.left = '2vw';
                }
            
                //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
    
                if(window.matchMedia("(max-width: 699px)").matches) {
                  
                  
                  
                  
                  
                  if(window.matchMedia("(max-height: 300px)").matches) {
                    temp.style.top = '20.6vh';
    
                    conditions.style.top = '14.5vh';
                  } else if(window.matchMedia("(max-height: 339px)").matches) {
                    temp.style.top = '20.6vh';
    
                    conditions.style.top = '14.6vh';
                  } else if(window.matchMedia("(max-height: 372px)").matches) {
                    temp.style.top = '18.2vh';
    
                    conditions.style.top = '13vh';
                  } else if(window.matchMedia("(max-height: 397px)").matches) {
                    temp.style.top = '19vh';
    
                    conditions.style.top = '13.6vh';
                  } else {
                    temp.style.top = '20vh';
    
                    conditions.style.top = '14.6vh';
                  }
    
                  if(window.matchMedia("(max-width: 599px)").matches) {
                    setTimeout(() => {
                      // leftDiv.style.right = '27.5vw';
                      // rightDiv.style.left = '27.5vw';
                    },28);
    
                    if(tempReading <= -1) {
                      temp.style.left = '0.9vw';  
                    } else {
                      temp.style.left = '2.4vw';
                    }
                    
                    
                    document.querySelector('.conditions img').style.cssText = 'height: 136px; width: 120px;';
                  } else {
                    setTimeout(() => {
                      // leftDiv.style.right = '21vw';
                      // rightDiv.style.left = '21vw';
                    },28);
    
                    if(tempReading <= -1) {
                      temp.style.left = '0.4vw';
                    } else {
                      temp.style.left = '1.9vw';
                    }
    
                    if(window.matchMedia("(max-height: 340px)").matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 137px; width: 126px;';
                    } else if(window.matchMedia("(max-height: 372px)").matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 156px; width: 134px;';
                    } else if(window.matchMedia("(max-height: 379px)").matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 164px; width: 137px;';
                    } else {
                      document.querySelector('.conditions img').style.cssText = 'height: 156px; width: 134px;';
                    }
                    
                  }
                  
                  
                  
                } else if(window.matchMedia("(min-width: 700px)").matches) {
                  conditions.style.top = '8vh';
    
                  temp.style.top = '15.4vh';
    
                  if(tempReading <= -1) {
                    temp.style.left = '0.5vw';  
                  } else {
                    temp.style.left = '2vw';
                  }
    
                  if(window.matchMedia("(max-height: 499px)").matches) {
                    conditions.style.top = '14vh';
                    temp.style.top = '19.4vh';

                    document.querySelector('.conditions img').style.cssText = 'height: 162px; width: 151px;';
                  } else {
                    temp.style.top = '21.44vh';
                    
                    if(tempReading <= -1) {
                      temp.style.left = '0.5vw';  
                    } else {
                      temp.style.left = '2vw';
                    }
    
                    conditions.style.top = '16vh';
                    document.querySelector('.conditions img').style.cssText = 'height: 180px; width: 151px;';
                  }
    
                  
                }
    
                if(window.matchMedia("(min-height: 480px)").matches) {
                  // // city.style.top = '2vh';
                }
             // }
    
             setTimeout(() => {
              if(window.matchMedia("(max-width: 600px)").matches) {
                // rightDiv.style.width = '31vw';
              } else if(window.matchMedia("(max-width: 767px)").matches) {
                // rightDiv.style.width = '30vw';
              }
    
              if(window.matchMedia("(min-height: 314px)").matches) {
                // leftDiv.style.top = '8vh';
                // rightDiv.style.top = '8vh';
              }
    
              
             },28);
              
            }  else if(portraitW.matches && medMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
              // // city.style.top = '1vh';
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
      
                  temp.style.cssText = 'margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  conditions.style.cssText = `top: 2vh;`;
              
                  document.querySelector('.conditions img').style.cssText = 'height: 305px; width: 262px;';
               // }
    
               if(window.matchMedia("(min-height: 1153px)").matches && window.matchMedia("(min-width: 1000px)").matches) {
                conditions.style.top = '6vh';
                temp.style.top = '10.6vh';
  
                if(tempReading <= -1) {
                  temp.style.left = '0.7vw'; 
                } else {
                  temp.style.left = '2.7vw';
                }
  
                document.querySelector('.conditions img').style.cssText = 'height: 362px; width: 312px;';
              } else if(window.matchMedia("(max-width: 860px)").matches) {
    
                
    
                if(window.matchMedia("(min-height: 1153px)").matches) {
                  conditions.style.top = '4vh';
                  temp.style.top = '8.6vh';
    
                  if(tempReading <= -1) {
                    temp.style.left = '0.7vw'; 
                  } else {
                    temp.style.left = '2.7vw';
                  }
    
                  document.querySelector('.conditions img').style.cssText = 'height: 343px; width: 292px;';
                } else {
                  temp.style.top = '7.5vh';

                  conditions.style.top = '3vh';
    
                  if(tempReading <= -1) {
                    temp.style.left = '1.4vw'; 
                  } else {
                    temp.style.left = '3.4vw';
                  }

                  document.querySelector('.conditions img').style.cssText = 'height: 314px; width: 262px;';
                }
                
                
                // left: 3vw; top: 8.2vh; 
               } else {
    
                if(tempReading <= -1) {
                  temp.style.left = '0.25vw'; 
                } else {
                  temp.style.left = '2.25vw';
                }
    
                 if(window.matchMedia("(min-height: 1300px)").matches) {
                  temp.style.top = '5.1vh';
                 } else {
                  temp.style.top = '6.4vh';
                 }
                 
               }
    
               if(window.matchMedia("(min-height: 1324px)").matches) {
                  temp.style.top = '9.8vh';
    
                  if(tempReading <= -1) {
                    temp.style.left = '0.7vw';
                  } else {
                    temp.style.left = '2.7vw';
                  }
    
                  document.querySelector('.conditions img').style.cssText = 'height: 341px; width: 307px;';
               }
                
              }  else if(landscapeW.matches && medMobileW.matches) {
                const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
                  setTimeout(() => {
                    // leftDiv.style.top = '11vh';
                    // rightDiv.style.top = '11vh';
                  },28);
  
                  
      
                  temp.style.cssText = 'margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
              
  
                  if(window.matchMedia("(max-height: 400px)").matches) {
                    // // city.style.top = '0';
  
                    temp.style.top = '17.64vh';
                    conditions.style.cssText = `top: 10.84vh;`;
                    document.querySelector('.conditions img').style.cssText = 'height: 184px; width: 164px;';
  
                    if(tempReading <= -1) {
                      temp.style.left = '0.34vw'; 
                    } else {
                      temp.style.left = '1.84vw';
                    }
  
                  } else if(window.matchMedia("(min-height: 447px)").matches) {
                    temp.style.top = '18.6vh';
                    conditions.style.cssText = `top: 12.6vh;`;
  
                    if(window.matchMedia("(min-width: 850px)").matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 206px; width: 175px;';
                    } else {
                      document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 162px;';
                    }
                    
  
                    if(tempReading <= -1) {
                      temp.style.left = '0.5vw'; 
                    } else {
                      temp.style.left = '2vw';
                    }
                  } else {
                    temp.style.top = '19.61vh';
                    conditions.style.cssText = `top: 13vh;`;
                    document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 167px;';
  
                    if(tempReading <= -1) {
                      temp.style.left = '0.34vw'; 
                    } else {
                      temp.style.left = '1.84vw';
                    }
                  }
  
                  setTimeout(() => {
                    if(window.matchMedia("(max-width: 818px)").matches) {
                      // leftDiv.style.right = '20vw';
                      // rightDiv.style.left = '20vw';
                    } else {
                      // leftDiv.style.right = '20.2vw';
                      // rightDiv.style.left = '20.2vw';
                    }
                  },29);
  
               // }
  
               if(window.matchMedia("(min-width: 1000px)").matches) {
                if(window.matchMedia("(min-height: 685px)").matches) {
                  temp.style.top = '21.9vh';

                  conditions.style.top = '16.35vh';
  
                  document.querySelector('.conditions img').style.cssText = 'height: 237px; width: 200px;';
                } else {
                  temp.style.top = '21.25vh';
  
                  conditions.style.top = '14.6vh';
  
                  document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 200px;';
                }
  
                if(tempReading <= -1) {
                  temp.style.left = '0.2vw';
                } else {
                  temp.style.left = '1.7vw';
                }

               } else if(window.matchMedia("(min-width: 900px)").matches) {
                temp.style.top = '20.9vh';
  
                if(tempReading <= -1) {
                  temp.style.left = '0.25vw';
                } else {
                  temp.style.left = '1.75vw';
                }
                
  
                conditions.style.top = '14.6vh';
  
                document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 196px;';
               }

                }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'top: 12vh; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: 8vh;`;
                  
                      //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
                   // }
    
                   if(tempReading <= -1) {
                    temp.style.left = '0'; 
                  } else {
                    temp.style.left = '2vw';
                  }
                    
                  }  else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {    
    
                        if(window.matchMedia('(min-height: 900px)').matches) {
                          temp.style.cssText = 'top: 15.4vh; margin: auto;';
    
                          if(tempReading <= -1) {
                            temp.style.left = '0.1vw'; 
                          } else {
                            temp.style.left = '1.6vw';
                          }
                        }  else {
                          temp.style.cssText = 'top: 17vh; margin: auto;';
    
                          if(tempReading <= -1) {
                            temp.style.left = '0.5vw'; 
                          } else {
                            temp.style.left = '2vw';
                          }
                        }
    
                        /*
                        setTimeout(() => {
                          // leftDiv.style.right = '18.5vw';
                          // rightDiv.style.left = '18.5vw';
                        },29);
                        */
                        
            
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        
    
    
                        if(window.matchMedia("(max-height: 600px)").matches) {
                          // // city.style.top = '1vh';
                          conditions.style.cssText = `top: 10.14vh;`;
                          
                          if(tempReading <= -1) {
                            temp.style.left = '0.5vw';
                          } else {
                            temp.style.left = '2vw';
                          }
                        
                        } else {
                          // // city.style.top = '1vh';
                          conditions.style.cssText = `top: 12.17vh;`;
                        }
                        
                        // // city.style.fontSize = '6.2em';
    
                        rightDiv.style.fontSize = '1.6em';
    
                        document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                        document.querySelector('.date-and-time').style.fontSize = '1.4em';
    
                        if(window.matchMedia("(min-height: 900px)").matches) {
                          temp.style.top = '20.6vh';
                          conditions.style.cssText = `top: 16.17vh;`;
    
                          if(tempReading <= -1) {
                            temp.style.left = '0.25vw';
                          } else {
                            temp.style.left = '1.75vw';
                          }
  
                          document.querySelector('.conditions img').style.cssText = 'height: 288px; width: 244px;';
                        } else {
                          temp.style.cssText = 'top: 17vh; margin: auto;';
                          conditions.style.cssText = `top: 12.17vh;`;
  
                          document.querySelector('.conditions img').style.cssText = 'height: 286px; width: 242px;';
                        }
                        
                  }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                    
                    
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        temp.style.cssText = 'margin: auto;';
    
                        if(tempReading <= -1) {
                          temp.style.left = '-0.1vw';
                        } else {
                          temp.style.left = '1.4vw';
                        }
           
                        if(window.matchMedia("(min-height: 900px)").matches) {
                          temp.style.top = '18.24vh';
                        } else {
                          temp.style.top = '12.34vh';
                          
                          setTimeout(() => {
                            // leftDiv.style.top = '5vh';
                            // rightDiv.style.top = '5vh';
                          },28);
                        }
    
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        conditions.style.cssText = `top: 8vh;`;
                        
                        /*if(maxWidth1200.matches) {
                          document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                        } else {*/
                          document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 222px;';
                        //}
                        
                     // }
                      
                    }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                      const moon260 = window.matchMedia("(max-width: 260px)");
              
                     /* if(moon260.matches) {
                          temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
              
                          tempConditions.style.cssText = 'top: 7.2vh;';
                          conditions.style.cssText = `top: 2.5vh;`;
                      
                          conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                        } else {*/
                          
              
                          temp.style.cssText = 'top: 3.5vh; margin: auto;';
              
                          tempConditions.style.cssText = 'top: 9.6vh;';
                          conditions.style.cssText = `top: -0.5vh;`;
    
                          if(tempReading <= -1) {
                            temp.style.left = '0.5vw'; 
                          } else {
                            temp.style.left = '2.5vw';
                          }
    
                          setTimeout(() => {
                            leftDiv.style.height = '32vh';
                            rightDiv.style.height = '32vh';
    
                            
                            
    
                            },28);
                      
                          document.querySelector('.conditions img').style.cssText = 'height: 305px; width: 267px;';
                       // }
                        
                      }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                        const moon260 = window.matchMedia("(max-width: 260px)");
              
                     /* if(moon260.matches) {
                          temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
              
                          tempConditions.style.cssText = 'top: 7.2vh;';
                          conditions.style.cssText = `top: 2.5vh;`;
                      
                          conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                        } else {*/
                          
              
                          temp.style.cssText = 'top: 25vh; margin: auto;';
              
                          tempConditions.style.cssText = 'top: 9.6vh;';
                          conditions.style.cssText = `top: 21.5vh;`;
  
                          if(tempReading <= -1) {
                            temp.style.left = '0'; 
                          } else {
                            temp.style.left = '1.5vw';
                          }
                      
                          document.querySelector('.conditions img').style.cssText = 'height: 277px; width: 232px;';
                       // }
                        } 
          
          break;
          
      case 'windy.png':

      if(hour >= 4 && hour < 12) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
      } else if(hour >= 12 && hour < 18) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
      } else if(hour >= 18 && hour < 22) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
      } else if(hour >= 22 || hour < 4) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
      }

      city.style.color = 'rgb(255,255,255)';
      greetingBarTxt.style.color = 'rgb(255,255,255)';
      temp.style.color = 'rgb(2,2,2)';



      if(desktopW.matches) {
        tempConditions.style.cssText = 'top: 16vh;';
        conditions.style.cssText = `top: 2vh;`;
        // temp.style.cssText = 'left: 7%; top: 30%';

        // // city.style.top = '1vh';
        // // city.style.fontSize = '6.2em';



        if(window.matchMedia("(min-width: 2000px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.75vw';
          } else {
            temp.style.left = '0.75vw';
          }
        } else if(window.matchMedia("(min-width: 1900px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.5vw';
          } else {
            temp.style.left = '1vw';
          }
        } else if(window.matchMedia("(min-width: 1700px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.4vw';
          } else {
            temp.style.left = '1.1vw';
          }
        } else if(window.matchMedia("(min-width: 1600px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1400px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.3vw';
          } else {
            temp.style.left = '1.2vw';
          }
        } else if(window.matchMedia("(min-width: 1300px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        }
      
        if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
          
      
          if(window.matchMedia("(max-height: 525px)").matches) {
            conditions.style.cssText = `top: 6vh;`;
      
            temp.style.top = '18vh';
          } else if(window.matchMedia("(max-height: 550px)").matches) {
            conditions.style.cssText = `top: 7.5vh;`;
      
            temp.style.top = '18.25vh';
          } else if(window.matchMedia("(max-height: 575px)").matches) {
            conditions.style.cssText = `top: 8.5vh;`;
      
            temp.style.top = '19vh';
          } else {
            conditions.style.cssText = `top: 9.5vh;`;
            
            temp.style.top = '19.5vh';
          }


        } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
          
          if(window.matchMedia("(max-height: 625px)").matches) {
            conditions.style.cssText = `top: 6.75vh;`;
      
            temp.style.top = '17.46vh';
          } else if(window.matchMedia("(max-height: 650px)").matches) {
            conditions.style.cssText = `top: 6.77vh;`;
      
            temp.style.top = '16.4vh';
          } else if(window.matchMedia("(max-height: 675px)").matches) {
            conditions.style.cssText = `top: 7.86vh;`;
      
            temp.style.top = '17.5vh';
          } else {
            conditions.style.cssText = `top: 8.29vh;`;
            
            temp.style.top = '17.9vh';
          }
      
        } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
          temp.style.top = '14vh';
      
          if(window.matchMedia("(max-height: 725px)").matches) {
            conditions.style.cssText = `top: 5.3vh;`;
          } else if(window.matchMedia("(max-height: 750px)").matches) {
            conditions.style.cssText = `top: 6vh;`;
          } else if(window.matchMedia("(max-height: 775px)").matches) {
            conditions.style.cssText = `top: 6vh;`;
          } else {
            conditions.style.cssText = `top: 6.29vh;`;
          }

        } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
          
          temp.style.top = '13.95vh';
          
          if(window.matchMedia("(max-height: 825px)").matches) {
            conditions.style.top = '6.5vh';
          } else if(window.matchMedia("(max-height: 850px)").matches) {
            conditions.style.cssText = `top: 6.75vh;`;
          } else if(window.matchMedia("(max-height: 875px)").matches) {
            conditions.style.cssText = `top: 6.75vh;`;
          } else {
            conditions.style.cssText = `top: 7.25vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
          
          temp.style.top = '14.46vh';
          
          if(window.matchMedia("(max-height: 925px)").matches) {
            conditions.style.top = '7.75vh';
          } else if(window.matchMedia("(max-height: 950px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
          } else if(window.matchMedia("(max-height: 975px)").matches) {
            conditions.style.cssText = `top: 8.25vh;`;
          } else {
            conditions.style.cssText = `top: 8.25vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1025px)").matches) {
            conditions.style.cssText = `top: 8.88vh;`;
          } else if(window.matchMedia("(max-height: 1050px)").matches) {
            conditions.style.cssText = `top: 9.13vh;`;
          } else if(window.matchMedia("(max-height: 1075px)").matches) {
            conditions.style.cssText = `top: 9.37vh;`;
          } else {
            temp.style.top = '15.2vh';

            conditions.style.cssText = `top: 9.62vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
          
          temp.style.top = '14vh';
      
          if(window.matchMedia("(max-height: 1125px)").matches) {
            conditions.style.cssText = `top: 8.4vh;`;
          } else if(window.matchMedia("(max-height: 1150px)").matches) {
            conditions.style.cssText = `top: 8.65vh;`;
          } else if(window.matchMedia("(max-height: 1175px)").matches) {
            conditions.style.cssText = `top: 8.9vh;`;
          } else {
            conditions.style.cssText = `top: 9.15vh;`;
          }
          
        } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
          
          temp.style.top = '14.2vh';
      
          if(window.matchMedia("(max-height: 1225px)").matches) {
            conditions.style.cssText = `top: 9.1vh;`;
          } else if(window.matchMedia("(max-height: 1250px)").matches) {
            conditions.style.cssText = `top: 9.38vh;`;
          } else if(window.matchMedia("(max-height: 1275px)").matches) {
            conditions.style.cssText = `top: 9.38vh;`;
          } else {
            conditions.style.cssText = `top: 9.5vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
          
          temp.style.top = '14.7vh';
      
          if(window.matchMedia("(max-height: 1325px)").matches) {
            conditions.style.cssText = `top: 10.253vh;`;
          } else if(window.matchMedia("(max-height: 1350px)").matches) {
            conditions.style.cssText = `top: 10.253vh;`;
          } else if(window.matchMedia("(max-height: 1375px)").matches) {
            conditions.style.cssText = `top: 10.253vh;`;
          } else {
            temp.style.top = '15.2vh';
            conditions.style.cssText = `top: 10.753vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1425px)").matches) {
            conditions.style.cssText = `top: 10.625vh;`;
          } else if(window.matchMedia("(max-height: 1450px)").matches) {
            conditions.style.cssText = `top: 10.625vh;`;
          } else if(window.matchMedia("(max-height: 1475px)").matches) {
            conditions.style.cssText = `top: 10.875vh;`;
          } else {
            conditions.style.cssText = `top: 10.925vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1525px)").matches) {
            conditions.style.cssText = `top: 10.88vh;`;
          } else if(window.matchMedia("(max-height: 1550px)").matches) {
            conditions.style.cssText = `top: 11.13vh;`;
          } else if(window.matchMedia("(max-height: 1575px)").matches) {
            conditions.style.cssText = `top: 11.13vh;`;
          } else {
            conditions.style.cssText = `top: 11.13vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
          
          temp.style.top = '15.2vh';
      
          if(window.matchMedia("(max-height: 1625px)").matches) {
            conditions.style.cssText = `top: 11.46vh;`;
          } else if(window.matchMedia("(max-height: 1650px)").matches) {
            conditions.style.cssText = `top: 11.46vh;`;
          } else if(window.matchMedia("(max-height: 1675px)").matches) {
            conditions.style.cssText = `top: 11.46vh;`;
          } else {
            temp.style.top = '15vh';
            conditions.style.cssText = `top: 11.46vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
          
          temp.style.top = '14.72vh';

          conditions.style.top = '11.29vh';
      
        } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {
          
          temp.style.top = '14.72vh';
          
          if(window.matchMedia("(min-height: 1876px)").matches) {
            conditions.style.cssText = `top: 11.62vh;`;
          } else {
            conditions.style.cssText = `top: 11.54vh;`;
          }
          
        } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
          
          temp.style.top = '15.14vh';
          
          conditions.style.cssText = `top: 11.94vh;`;
      
        } else {
          
          temp.style.top = '15.51vh';
          
          conditions.style.cssText = `top: 12.55vh;`;
        }
      
      
        if(window.matchMedia("(max-height: 599px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 209px; width: 227px;';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 222px; width: 232px;';
        } else if(window.matchMedia("(min-height: 800px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 222px; width: 232px;';
        } else {
          document.querySelector('.conditions img').style.cssText = 'height: 222px; width: 232px;';
        }
      
      } else if(portraitW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

        if(moon260.matches) {
            temp.style.cssText = 'top: 11.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 8.2vh;';
            conditions.style.cssText = `top: 3.5vh;`;

            if(tempReading <= -1) {
              temp.style.left = '2vw'; 
            } else {
              temp.style.left = '4vw';
            }
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {
            const minWidth481 = window.matchMedia('(min-width: 481px)');

            document.querySelector('.conditions img').style.cssText = 'height: 204px; width: 228px;';
            
            if(minWidth481.matches) {
              temp.style.cssText = 'top: 6vh; margin: auto;';
              conditions.style.cssText = `top: 1vh;`;

              if(window.matchMedia("(max-width: 570px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '1vw'; 
                } else {
                  temp.style.left = '3vw';
                }
              } else {
                if(tempReading <= -1) {
                  temp.style.left = '0.5vw'; 
                } else {
                  temp.style.left = '2.5vw';
                }
              }

              
            } else {
              temp.style.cssText = 'top: 12.5%; margin: auto;';
              // leftDiv.style.top = '-8.6vh';

              if(window.matchMedia("(min-height: 653px)").matches) {
                conditions.style.cssText = `top: 1.75vh;`;
              } else {
                temp.style.top = '12.25%';

                conditions.style.cssText = `top: 1vh;`;
              }

              if(window.matchMedia("(min-width: 367px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '1.4vw'; 
                } else {
                  temp.style.left = '3.4vw';
                }
              } else {
                if(tempReading <= -1) {
                  temp.style.left = '1.5vw'; 
                } else {
                  temp.style.left = '3.5vw';
                }
              }

              
            }

            if(window.matchMedia("(min-height: 800px)").matches) {
              //// // city.style.top = '1.5vh';

              
              if(window.matchMedia("(min-height: 831px)").matches) {
                conditions.style.top = '3vh';
                temp.style.top = '12.5%';
              } else if(window.matchMedia("(min-height: 818px)").matches) {
                conditions.style.top = '2.75vh';
                temp.style.top = '12.25%';
              } else {
                conditions.style.top = '2.5vh';
                temp.style.top = '12%';
              }
              

              document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 224px;';

              //// // city.style.fontSize = '4em';

              //document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              //document.querySelector('.date-and-time').style.fontSize = '1.1em';
            } else if(window.matchMedia("(min-height: 700px)").matches) {
              //// // city.style.top = '1vh';
              //// // city.style.fontSize = '3.7em';
              

              if(window.matchMedia("(max-height: 728px)").matches) {
                temp.style.top = '11.4%';
                conditions.style.top = '1.25vh';    
              } else {
                temp.style.top = '12.4%';
                conditions.style.top = '2.25vh';    
              }
              
              document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
            }

            if(window.matchMedia("(min-height: 900px)").matches) {
              temp.style.top = '10.4%';


            }

            

            if(maxHeight600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 160px; width: 194px;';

              conditions.style.cssText = 'top: 3.5vh;';
              temp.style.top = '13%';
            }


            
            if(window.matchMedia("(max-width: 300px)").matches) {
              conditions.style.top = '2vh';

              if(tempReading <= -1) {
                temp.style.left = '2.2vw';
              } else {
                temp.style.left = '4.2vw';
              }
              document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 180px;';
            }

            

            tempConditions.style.cssText = 'top: 11vh;';
            

            /*// leftDiv.style.top = '-10vh';
            // rightDiv.style.top = '-10vh';*/
        

            console.log('GUESS WHO?');
            //document.querySelector('.conditions img').style.cssText = 'border-radius: 0; top: 4vh;';
          } 

          
/*
          if(hour3 >= 4 && hour < 12) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
          } else if(hour >= 12 && hour < 18) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
          } else if(hour >= 18 && hour < 22) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
          } else if(hour >= 22 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
          }*/
      }  else if(landscapeW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

       /* if(moon260.matches) {
            temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 7.2vh;';
            conditions.style.cssText = `top: 2.5vh;`;
        
            conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {*/
            

            temp.style.cssText = 'top: 18.4vh; margin: auto;';

            tempConditions.style.cssText = 'top: 9.6vh;';
            conditions.style.cssText = `top: 8vh;`;

            if(tempReading <= -1) {
              temp.style.left = '0.5vw'; 
            } else {
              temp.style.left = '2vw';
            }
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';

            if(window.matchMedia("(max-width: 699px)").matches) {
              
              
              
              
              
              if(window.matchMedia("(max-height: 300px)").matches) {
                temp.style.top = '25.6vh';
                conditions.style.top = '13.75vh';

                if(tempReading <= -1) {
                  temp.style.left = '-0.5vw'; 
                } else {
                  temp.style.left = '1vw';
                }
              } else if(window.matchMedia("(max-height: 339px)").matches) {
                temp.style.top = '23.21vh';

                conditions.style.top = '14.85vh';
              } else if(window.matchMedia("(max-height: 372px)").matches) {
                temp.style.top = '22.95vh';

                conditions.style.top = '13.85vh';
              } else if(window.matchMedia("(max-height: 397px)").matches) {
                temp.style.top = '22.6vh';

                conditions.style.top = '13.6vh';
              } else {
                temp.style.top = '23.6vh';

                conditions.style.top = '14.6vh';
              }

              if(window.matchMedia("(max-width: 599px)").matches) {
                setTimeout(() => {
                  // leftDiv.style.right = '27.5vw';
                  // rightDiv.style.left = '27.5vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '-0.15vw';  
                } else {
                  temp.style.left = '1.35vw';
                }
                
                
                document.querySelector('.conditions img').style.cssText = 'height: 104px; width: 120px;';
              } else {
                setTimeout(() => {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '-0.1vw';
                } else {
                  temp.style.left = '1.4vw';
                }
                

                if(window.matchMedia("(max-height: 340px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 122px; width: 126px;';
                } else if(window.matchMedia("(max-height: 372px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 128px; width: 137px;';
                } else {
                  document.querySelector('.conditions img').style.cssText = 'height: 128px; width: 137px;';
                }
                
              }
              
              
              
            } else if(window.matchMedia("(min-width: 700px)").matches) {
              conditions.style.top = '8vh';

              temp.style.top = '19.4vh';

              if(tempReading <= -1) {
                temp.style.left = '-0.25vw';  
              } else {
                temp.style.left = '1.25vw';
              }

              if(window.matchMedia("(max-height: 499px)").matches) {
                conditions.style.top = '13vh';
                temp.style.top = '22.9vh';

                document.querySelector('.conditions img').style.cssText = 'height: 141px; width: 147px;';
              } else {
                temp.style.top = '23.9vh';
                
                if(tempReading <= -1) {
                  temp.style.left = '-0.25vw';  
                } else {
                  temp.style.left = '1.25vw';
                }

                conditions.style.top = '17vh';
                document.querySelector('.conditions img').style.cssText = 'height: 139px; width: 146px;';
              }

              
            }

            if(window.matchMedia("(min-height: 480px)").matches) {
              // // city.style.top = '2vh';
            }
         // }

         setTimeout(() => {
          if(window.matchMedia("(max-width: 600px)").matches) {
            // rightDiv.style.width = '31vw';
          } else if(window.matchMedia("(max-width: 767px)").matches) {
            // rightDiv.style.width = '30vw';
          }

          if(window.matchMedia("(min-height: 314px)").matches) {
            // leftDiv.style.top = '8vh';
            // rightDiv.style.top = '8vh';
          }

          
         },28);
          
        }  else if(portraitW.matches && medMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");
          // // city.style.top = '1vh';
  
         /* if(moon260.matches) {
              temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 7.2vh;';
              conditions.style.cssText = `top: 2.5vh;`;
          
              conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {*/
              
  
              temp.style.cssText = 'margin: auto;';
  
              tempConditions.style.cssText = 'top: 9.6vh;';
              conditions.style.cssText = `top: 2vh;`;
          
              
           // }

           if(window.matchMedia("(max-width: 860px)").matches) {
            if(window.matchMedia("(min-width: 784px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '0.25vw'; 
              } else {
                temp.style.left = '2.25vw';
              }
            } else {
              if(tempReading <= -1) {
                temp.style.left = '0.5vw'; 
              } else {
                temp.style.left = '2.5vw';
              }
            }
            
            

            if(window.matchMedia("(min-height: 1153px)").matches) {
              conditions.style.top = '4vh';
              temp.style.top = '11.1vh';

              document.querySelector('.conditions img').style.cssText = 'height: 296px; width: 296px;';
            } else {
              temp.style.top = '10.6vh';
              
              conditions.style.top = '3.7vh';

              document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 251px;';
            }
            
            
            // left: 3vw; top: 8.2vh; 
           } else {
             if(tempReading <= -1) {
              temp.style.left = '0.25vw'; 
            } else {
              temp.style.left = '2.25vw';
            }

             if(window.matchMedia("(min-height: 1300px)").matches) {
              temp.style.top = '12.2vh';
              conditions.style.top = '5vh';

              if(tempReading <= -1) {
                temp.style.left = '-0.4vw';
              } else {
                temp.style.left = '1.6vw';
              }

              document.querySelector('.conditions img').style.cssText = 'height: 296px; width: 296px;';

             } else {
              temp.style.top = '6.4vh';
             }
             
           }
            
          }  else if(landscapeW.matches && medMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                
                setTimeout(() => {
                  // leftDiv.style.top = '11vh';
                  // rightDiv.style.top = '11vh';
                },28);

                
    
                temp.style.cssText = 'margin: auto;';
    
                tempConditions.style.cssText = 'top: 9.6vh;';
            

                if(window.matchMedia("(max-height: 400px)").matches) {
                  // // city.style.top = '0';

                  temp.style.top = '22.9vh';
                  conditions.style.cssText = `top: 12.5vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 144px; width: 155px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.1vw'; 
                  } else {
                    temp.style.left = '1.6vw';
                  }
                } else if(window.matchMedia("(min-height: 447px)").matches) {
                  temp.style.top = '24.24vh';
                  conditions.style.cssText = `top: 14.6vh;`;

                  if(window.matchMedia("(min-width: 850px)").matches) {
                    document.querySelector('.conditions img').style.cssText = 'height: 162px; width: 167px;';
                  } else {
                    document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 162px;';
                  }
                  

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                } else {
                  temp.style.top = '24.16vh';
                  conditions.style.cssText = `top: 14.6vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 148px; width: 162px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                }

                if(window.matchMedia("(max-width: 818px)").matches) {
                  // leftDiv.style.right = '20vw';
                  // rightDiv.style.left = '20vw';
                } else {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                }
             // }

             if(window.matchMedia("(min-width: 1000px)").matches) {
              if(window.matchMedia("(min-height: 685px)").matches) {
                conditions.style.top = '17.6vh';
              } else {
                conditions.style.top = '15.6vh';
              }
              
              temp.style.top = '25.4vh';
              temp.style.left = '1.2vw';

              
              document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 196px;';
             } else if(window.matchMedia("(min-width: 900px)").matches) {
              temp.style.top = '25vh';
              temp.style.left = '1.25vw';

              conditions.style.top = '15.6vh';

              document.querySelector('.conditions img').style.cssText = 'height: 184px; width: 188px;';
             }
              
            }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
      
                  temp.style.cssText = 'top: 12vh; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  conditions.style.cssText = `top: 8vh;`;

                  if(tempReading <= -1) {
                    temp.style.left = '0'; 
                  } else {
                    temp.style.left = '2vw';
                  }
              
                  //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
               // }
                
              }  else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {    

        
                    tempConditions.style.cssText = 'top: 9.6vh;';
                    


                    if(window.matchMedia("(max-height: 600px)").matches) {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 10.14vh;`;
                    } else {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 16.17vh;`;
                    }
                    
                    // // city.style.fontSize = '6.2em';

                    /*
                    // leftDiv.style.right = '17.6vw';
                    // rightDiv.style.left = '17.6vw';
                    */

                    rightDiv.style.fontSize = '1.6em';

                    document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                    document.querySelector('.date-and-time').style.fontSize = '1.4em';

                    if(window.matchMedia('(min-height: 900px)').matches) {
                      temp.style.cssText = 'top: 22.64vh; margin: auto;';
                      conditions.style.cssText = `top: 17.17vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '0.1vw'; 
                      } else {
                        temp.style.left = '1.6vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 218px;';
                    }  else {
                      temp.style.cssText = 'top: 22.4vh; margin: auto;';
                      conditions.style.cssText = `top: 16.17vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '0vw'; 
                      } else {
                        temp.style.left = '1.5vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 210px; width: 216px;';
                    }
              }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                
                
                const moon260 = window.matchMedia("(max-width: 260px)");
        
               /* if(moon260.matches) {
                    temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 7.2vh;';
                    conditions.style.cssText = `top: 2.5vh;`;
                
                    conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                  } else {*/
                    
        
                    temp.style.cssText = 'margin: auto;';

                    if(tempReading <= -1) {
                      temp.style.left = '0.1vw'; 
                    } else {
                      temp.style.left = '1.6vw';
                    }
       
                    if(window.matchMedia("(min-height: 900px)").matches) {
                      temp.style.top = '18.24vh';
                    } else {
                      temp.style.top = '17.82vh';
                    }

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    conditions.style.cssText = `top: 9vh;`;
                    
                    /*if(maxWidth1200.matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                    } else {*/
                      document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 229px;';
                    //}
                    
                 // }
                  
                }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'top: 6.3vh; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: 0.5vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '-0.5'; 
                      } else {
                        temp.style.left = '1.5vw';
                      }

                      setTimeout(() => {
                        leftDiv.style.height = '32vh';
                        rightDiv.style.height = '32vh';
  
                        
                        
  
                        },28);
                  
                      document.querySelector('.conditions img').style.cssText = 'height: 237px; width: 237px;';
                   // }
                    
                  }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        temp.style.cssText = 'top: 27.3vh; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        conditions.style.cssText = `top: 22.2vh;`;
                    
                        document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 224px;';
                     // }

                     if(tempReading <= -1) {
                      temp.style.left = '-0.25vw'; 
                    } else {
                      temp.style.left = '1.25vw';
                    }
                      
                    }
                    
                    document.querySelector('.conditions img').style.borderRadius = '25%';
      
      break;

    case 'snowy.png':
      if(hour >= 4 && hour < 18) {
        rightDiv.style.cssText = 'color: rgb(12,12,12); border: 6px solid rgb(192,192,192);';

        temp.style.color = 'rgb(2,2,2)';

        if(window.matchMedia("(max-width: 480px)").matches && portraitW.matches) {
          leftDiv.style.cssText = 'color: rgb(254,254,254); border: 6px solid rgb(192,192,192);';
        } else {
          leftDiv.style.cssText = 'color: rgb(12,12,12); border: 6px solid rgb(192,192,192);';
        }

        /**leftDiv.style.cssText = 'color: rgb(96,96,234); border: 6px solid rgb(128,128,128);';
        rightDiv.style.cssText = 'color: rgb(96,96,234); border: 6px solid rgb(128,128,128);'; */
      } else if(hour >= 18 || hour < 4) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(154,154,154);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(154,154,154);';

        temp.style.color = 'rgb(253,253,253)';
      }


      if(desktopW.matches) {
        tempConditions.style.cssText = 'top: 16vh;';
        conditions.style.cssText = `top: 1vh;`;
        // temp.style.cssText = 'left: 7%; top: 30%';

        // // city.style.top = '1vh';
        // // city.style.fontSize = '6.2em';



        if(window.matchMedia("(min-width: 2000px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.75vw';
          } else {
            temp.style.left = '0.75vw';
          }
        } else if(window.matchMedia("(min-width: 1900px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.5vw';
          } else {
            temp.style.left = '1vw';
          }
        } else if(window.matchMedia("(min-width: 1700px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.4vw';
          } else {
            temp.style.left = '1.1vw';
          }
        } else if(window.matchMedia("(min-width: 1600px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1400px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.3vw';
          } else {
            temp.style.left = '1.2vw';
          }
        } else if(window.matchMedia("(min-width: 1300px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        }
      
        if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
          
      
          if(window.matchMedia("(max-height: 525px)").matches) {
            conditions.style.cssText = `top: 4vh;`;
      
            temp.style.top = '18vh';
          } else if(window.matchMedia("(max-height: 550px)").matches) {
            conditions.style.cssText = `top: 5.5vh;`;
      
            temp.style.top = '18.25vh';
          } else if(window.matchMedia("(max-height: 575px)").matches) {
            conditions.style.cssText = `top: 6.5vh;`;
      
            temp.style.top = '19vh';
          } else {
            conditions.style.cssText = `top: 7.5vh;`;
            
            temp.style.top = '19.5vh';
          }


        } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
          
          if(window.matchMedia("(max-height: 625px)").matches) {
            conditions.style.cssText = `top: 5.75vh;`;
      
            temp.style.top = '17.46vh';
          } else if(window.matchMedia("(max-height: 650px)").matches) {
            conditions.style.cssText = `top: 5.77vh;`;
      
            temp.style.top = '17.21vh';
          } else if(window.matchMedia("(max-height: 675px)").matches) {
            conditions.style.cssText = `top: 6.86vh;`;
      
            temp.style.top = '17.79vh';
          } else {
            conditions.style.cssText = `top: 7.29vh;`;
            
            temp.style.top = '18.15vh';
          }
      
        } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
          temp.style.top = '14vh';
      
          if(window.matchMedia("(max-height: 725px)").matches) {
            conditions.style.cssText = `top: 4.3vh;`;
          } else if(window.matchMedia("(max-height: 750px)").matches) {
            conditions.style.cssText = `top: 4.4vh;`;
          } else if(window.matchMedia("(max-height: 775px)").matches) {
            conditions.style.cssText = `top: 4.4vh;`;
          } else {
            temp.style.top = '14.14vh';
            conditions.style.cssText = `top: 5.29vh;`;
          }

        } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
          
          temp.style.top = '13.95vh';
          
          if(window.matchMedia("(max-height: 825px)").matches) {
            conditions.style.top = '5.19vh';
          } else if(window.matchMedia("(max-height: 850px)").matches) {
            conditions.style.cssText = `top: 5.44vh;`;
          } else if(window.matchMedia("(max-height: 875px)").matches) {
            conditions.style.cssText = `top: 5.44vh;`;
          } else {
            conditions.style.cssText = `top: 5.94vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
          
          temp.style.top = '14.46vh';
          
          if(window.matchMedia("(max-height: 925px)").matches) {
            conditions.style.top = '6.6vh';
          } else if(window.matchMedia("(max-height: 950px)").matches) {
            conditions.style.cssText = `top: 6.85vh;`;
          } else if(window.matchMedia("(max-height: 975px)").matches) {
            conditions.style.cssText = `top: 7.35vh;`;
          } else {
            conditions.style.cssText = `top: 7.44vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1025px)").matches) {
            conditions.style.cssText = `top: 7.98vh;`;
          } else if(window.matchMedia("(max-height: 1050px)").matches) {
            conditions.style.cssText = `top: 8.23vh;`;
          } else if(window.matchMedia("(max-height: 1075px)").matches) {
            conditions.style.cssText = `top: 8.47vh;`;
          } else {
            temp.style.top = '15.2vh';

            conditions.style.cssText = `top: 8.72vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
          
          temp.style.top = '14vh';
      
          if(window.matchMedia("(max-height: 1125px)").matches) {
            conditions.style.cssText = `top: 7.5vh;`;
          } else if(window.matchMedia("(max-height: 1150px)").matches) {
            conditions.style.cssText = `top: 7.75vh;`;
          } else if(window.matchMedia("(max-height: 1175px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
          } else {
            conditions.style.cssText = `top: 8.08vh;`;
          }
          
        } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
          
          temp.style.top = '14.2vh';
      
          if(window.matchMedia("(max-height: 1225px)").matches) {
            conditions.style.cssText = `top: 8.29vh;`;
          } else if(window.matchMedia("(max-height: 1250px)").matches) {
            conditions.style.cssText = `top: 8.57vh;`;
          } else if(window.matchMedia("(max-height: 1275px)").matches) {
            conditions.style.cssText = `top: 8.57vh;`;
          } else {
            conditions.style.cssText = `top: 8.69vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
          
          temp.style.top = '14.7vh';
      
          if(window.matchMedia("(max-height: 1325px)").matches) {
            conditions.style.cssText = `top: 9.373vh;`;
          } else if(window.matchMedia("(max-height: 1350px)").matches) {
            conditions.style.cssText = `top: 9.373vh;`;
          } else if(window.matchMedia("(max-height: 1375px)").matches) {
            conditions.style.cssText = `top: 9.623vh;`;
          } else {
            temp.style.top = '15.2vh';
            conditions.style.cssText = `top: 9.873vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1425px)").matches) {
            conditions.style.cssText = `top: 10.125vh;`;
          } else if(window.matchMedia("(max-height: 1450px)").matches) {
            conditions.style.cssText = `top: 10.125vh;`;
          } else if(window.matchMedia("(max-height: 1475px)").matches) {
            conditions.style.cssText = `top: 10.375vh;`;
          } else {
            conditions.style.cssText = `top: 10.425vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1525px)").matches) {
            conditions.style.cssText = `top: 10.43vh;`;
          } else if(window.matchMedia("(max-height: 1550px)").matches) {
            conditions.style.cssText = `top: 10.43vh;`;
          } else if(window.matchMedia("(max-height: 1575px)").matches) {
            conditions.style.cssText = `top: 10.43vh;`;
          } else {
            conditions.style.cssText = `top: 10.43vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
          
          temp.style.top = '15.2vh';
      
          if(window.matchMedia("(max-height: 1625px)").matches) {
            conditions.style.cssText = `top: 10.76vh;`;
          } else if(window.matchMedia("(max-height: 1650px)").matches) {
            conditions.style.cssText = `top: 10.76vh;`;
          } else if(window.matchMedia("(max-height: 1675px)").matches) {
            conditions.style.cssText = `top: 11.01vh;`;
          } else {
            conditions.style.cssText = `top: 11.01vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
          
          temp.style.top = '14.72vh';

          if(window.matchMedia("(min-height: 1751px)").matches) {
            conditions.style.top = '10.89vh';  
          } else {
            conditions.style.top = '10.64vh';
          }
          
      
        } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {
          
          temp.style.top = '14.72vh';
          
          conditions.style.cssText = `top: 11.02vh;`;
          
        } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
          
          temp.style.top = '15.14vh';

          if(window.matchMedia("(min-height: 1976px)").matches) {
            conditions.style.cssText = `top: 11.51vh;`;
          } else {
            conditions.style.cssText = `top: 11.44vh;`;
          }
      
        } else {
          
          temp.style.top = '15.51vh';
          
          conditions.style.cssText = `top: 12.12vh;`;
        }
      
      
        if(window.matchMedia("(max-height: 599px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 229px;';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 235px; width: 235px;';
        } else if(window.matchMedia("(min-height: 800px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 235px; width: 235px;';
        } else {
          document.querySelector('.conditions img').style.cssText = 'height: 235px; width: 235px;';
        }
      
      
      } else if(portraitW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

        if(moon260.matches) {
            temp.style.cssText = 'top: 11.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 8.2vh;';
            conditions.style.cssText = `top: 3.5vh;`;

            if(tempReading <= -1) {
              temp.style.left = '2vw'; 
            } else {
              temp.style.left = '4vw';
            }
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {
            const minWidth481 = window.matchMedia('(min-width: 481px)');
            
            document.querySelector('.conditions img').style.cssText = 'height: 219px; width: 219px;';

            if(minWidth481.matches) {
              temp.style.cssText = 'top: 6vh; margin: auto;';
              conditions.style.cssText = `top: 1vh;`;

              if(tempReading <= -1) {
                temp.style.left = '1vw'; 
              } else {
                temp.style.left = '3vw';
              }
            } else if(window.matchMedia("(min-width: 367px)").matches) {
              temp.style.cssText = 'top: 13.24%; margin: auto;';
              conditions.style.cssText = `top: 0.25vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '-0.9vw'; 
              } else {
                temp.style.left = '3.1vw';
              }
            } else if(window.matchMedia("(min-height: 647px)").matches) {
              temp.style.cssText = 'top: 12.24%; margin: auto;';
              conditions.style.cssText = `top: 0.75vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '-2.1vw'; 
              } else {
                temp.style.left = '3.9vw';
              }
            } else {
              temp.style.cssText = 'top: 13.24%; margin: auto;';
              conditions.style.cssText = `top: 0vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '-2.1vw'; 
              } else {
                temp.style.left = '3.9vw';
              }
            }

            if(window.matchMedia("(min-height: 800px)").matches) {
              //// // city.style.top = '1.5vh';
              conditions.style.top = '1.5vh';
              temp.style.top = '11.64%';

              if(window.matchMedia("(min-width: 448px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '-1.1vw'; 
                } else {
                  temp.style.left = '2.9vw';
                }
              } else {
                if(tempReading <= -1) {
                  temp.style.left = '-0.8vw'; 
                } else {
                  temp.style.left = '3.2vw';
                }
              }
              

              //// // city.style.fontSize = '4em';

              //document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              //document.querySelector('.date-and-time').style.fontSize = '1.1em';
            } else if(window.matchMedia("(min-height: 700px)").matches) {
              //// // city.style.top = '1vh';
              //// // city.style.fontSize = '3.7em';
              temp.style.top = '12.8%';
              conditions.style.top = '1.25vh';
              
              if(window.matchMedia("(max-height: 728px)").matches) {
                temp.style.top = '11.3%';
                conditions.style.top = '0.75vh'; 
              }
              
              if(window.matchMedia("(min-width: 500px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '-1vw'; 
                } else {
                  temp.style.left = '3vw';
                }
              } else if(window.matchMedia("(min-width: 400px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '-0.8vw'; 
                } else {
                  temp.style.left = '3.2vw';
                }
              }
            }

            if(window.matchMedia("(min-height: 900px)").matches) {

              if(window.matchMedia("(min-height: 1000px)").matches) {
                temp.style.top = '9.9%';

                document.querySelector('.conditions img').style.cssText = 'height: 228px; width: 228px;';
              } else {
                temp.style.top = '10.3%';

                document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 224px;';
              }

            }

            

            if(maxHeight600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 177px; width: 177px;';

              conditions.style.cssText = 'top: 0.7vh;';
              temp.style.top = '13.41%';
            }


            
            if(window.matchMedia("(max-width: 300px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '2.4vw'; 
              } else {
                temp.style.left = '4.4vw';
              }

              conditions.style.top = '0.75vh';
              document.querySelector('.conditions img').style.cssText = 'height: 204px; width: 204px;';
            }

            

            tempConditions.style.cssText = 'top: 11vh;';
            

            /*// leftDiv.style.top = '-10vh';
            // rightDiv.style.top = '-10vh';*/
        

            console.log('GUESS WHO?');
            //document.querySelector('.conditions img').style.cssText = 'border-radius: 0; top: 4vh;';
          } 

          
/*
          if(hour3 >= 4 && hour < 12) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
          } else if(hour >= 12 && hour < 18) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
          } else if(hour >= 18 && hour < 22) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
          } else if(hour >= 22 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
          }*/
      }  else if(landscapeW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

       /* if(moon260.matches) {
            temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 7.2vh;';
            conditions.style.cssText = `top: 2.5vh;`;
        
            conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {*/
            

            temp.style.cssText = 'top: 18.4vh; margin: auto;';

            tempConditions.style.cssText = 'top: 9.6vh;';
            conditions.style.cssText = `top: 8vh;`;


            if(tempReading <= -1) {
                temp.style.left = '0.5vw'; 
              } else {
                temp.style.left = '2vw';
              }
            
            
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';

            if(window.matchMedia("(max-width: 699px)").matches) {
              
              
              
              
              
              if(window.matchMedia("(max-height: 300px)").matches) {
                temp.style.top = '25.6vh';

                conditions.style.top = '13.5vh';
              } else if(window.matchMedia("(max-height: 339px)").matches) {
                temp.style.top = '22.59vh';

                conditions.style.top = '12.25vh';
              } else if(window.matchMedia("(max-height: 372px)").matches) {
                temp.style.top = '22.09vh';

                conditions.style.top = '11vh';
              } else if(window.matchMedia("(max-height: 397px)").matches) {
                temp.style.top = '22.5vh';

                conditions.style.top = '12.3vh';
              } else {
                temp.style.top = '23.5vh';

                conditions.style.top = '13.3vh';
              }

              if(window.matchMedia("(max-width: 599px)").matches) {
                setTimeout(() => {
                  // leftDiv.style.right = '27.5vw';
                  // rightDiv.style.left = '27.5vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '0.4vw';  
                } else {
                  temp.style.left = '1.9vw';
                }
                
                
                document.querySelector('.conditions img').style.cssText = 'height: 114px; width: 114px;';
              } else {
                setTimeout(() => {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                },28);

                if(window.matchMedia("(min-width: 647px)").matches) {
                  if(tempReading <= -1) {
                    temp.style.left = '-0.1vw'; 
                  } else {
                    temp.style.left = '1.4vw';
                  }
                } else {
                  if(tempReading <= -1) {
                    temp.style.left = '0vw'; 
                  } else {
                    temp.style.left = '1.5vw';
                  }
                }

                if(window.matchMedia("(max-height: 340px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 122px; width: 132px;';
                } else if(window.matchMedia("(max-height: 372px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 137px; width: 137px;';
                } else {
                  document.querySelector('.conditions img').style.cssText = 'height: 137px; width: 137px;';
                }
                
              }
              
              
              
            } else if(window.matchMedia("(min-width: 700px)").matches) {
              conditions.style.top = '8vh';

              temp.style.top = '19.75vh';

              if(tempReading <= -1) {
                temp.style.left = '-0.22vw';  
              } else {
                temp.style.left = '1.28vw';
              }

              if(window.matchMedia("(max-height: 499px)").matches) {
                conditions.style.top = '13vh';
                temp.style.top = '23.75vh';

                document.querySelector('.conditions img').style.cssText = 'height: 144px; width: 144px;';
              } else {
                temp.style.top = '24.67vh';
                
                if(tempReading <= -1) {
                  temp.style.left = '0.1vw';  
                } else {
                  temp.style.left = '1.6vw';
                }

                conditions.style.top = '16vh';
                document.querySelector('.conditions img').style.cssText = 'height: 151px; width: 151px;';
              }

              
            }

            if(window.matchMedia("(min-height: 480px)").matches) {
              // // city.style.top = '2vh';
            }
         // }

         setTimeout(() => {
          if(window.matchMedia("(max-width: 600px)").matches) {
            // rightDiv.style.width = '31vw';
          } else if(window.matchMedia("(max-width: 767px)").matches) {
            // rightDiv.style.width = '30vw';
          }

          if(window.matchMedia("(min-height: 314px)").matches) {
            // leftDiv.style.top = '8vh';
            // rightDiv.style.top = '8vh';
          }

          
         },28);
          
        }  else if(portraitW.matches && medMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");
          // // city.style.top = '1vh';
  
         /* if(moon260.matches) {
              temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 7.2vh;';
              conditions.style.cssText = `top: 2.5vh;`;
          
              conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {*/
              
  
              temp.style.cssText = 'margin: auto;';
  
              tempConditions.style.cssText = 'top: 9.6vh;';
              conditions.style.cssText = `top: 2vh;`;
          
              
           // }

           if(window.matchMedia("(max-width: 810px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '0.4vw'; 
            } else {
              temp.style.left = '2.4vw';
            }

            if(window.matchMedia("(min-height: 1153px)").matches) {
              conditions.style.top = '3.24vh';
              temp.style.top = '11vh';

              document.querySelector('.conditions img').style.cssText = 'height: 302px; width: 302px;';
            } else {
              temp.style.top = '10.64vh';

              conditions.style.top = '4vh';

              document.querySelector('.conditions img').style.cssText = 'height: 255px; width: 255px;';
            }
            
            
            // left: 3vw; top: 8.2vh; 
           } else if(window.matchMedia("(max-width: 860px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '0.7vw'; 
            } else {
              temp.style.left = '2.7vw';
            }

            if(window.matchMedia("(min-height: 1153px)").matches) {
              alert('CALLED');

              conditions.style.top = '2vh';
              temp.style.top = '8.2vh';

              document.querySelector('.conditions img').style.cssText = 'height: 296px; width: 296px;';
            } else {
              temp.style.top = '9.64vh';

              document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 262px;';
            }
            
            
            // left: 3vw; top: 8.2vh; 
           } else {
             if(tempReading <= -1) {
              temp.style.left = '-0.09vw'; 
            } else {
              temp.style.left = '1.91vw';
            }

             if(window.matchMedia("(min-height: 1300px)").matches) {
              temp.style.top = '11.6vh';
              conditions.style.top = '4vh';

              document.querySelector('.conditions img').style.cssText = 'height: 312px; width: 312px;';
             } else {
              temp.style.top = '6.4vh';

              document.querySelector('.conditions img').style.cssText = 'height: 267px; width: 267px;';
             }
             
             
           }
            
          }  else if(landscapeW.matches && medMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                
                setTimeout(() => {
                  // leftDiv.style.top = '11vh';
                  // rightDiv.style.top = '11vh';
                },28);

                
    
                temp.style.cssText = 'margin: auto;';
    
                tempConditions.style.cssText = 'top: 9.6vh;';
            

                if(window.matchMedia("(max-height: 400px)").matches) {
                  // // city.style.top = '0';

                  temp.style.top = '23.16vh';
                  conditions.style.cssText = `top: 12vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 148px; width: 148px;';

                  if(tempReading <= -1) {
                    temp.style.left = '-0.1vw'; 
                  } else {
                    temp.style.left = '1.4vw';
                  }
                } else if(window.matchMedia("(min-height: 447px)").matches) {
                  temp.style.top = '24.6vh';
                  conditions.style.cssText = `top: 14.2vh;`;

                  if(window.matchMedia("(min-width: 850px)").matches) {
                    document.querySelector('.conditions img').style.cssText = 'height: 167px; width: 167px;';
                  } else {
                    document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 162px;';
                  }
                  

                  if(tempReading <= -1) {
                    temp.style.left = '0vw'; 
                  } else {
                    temp.style.left = '1.5vw';
                  }
                } else {
                  temp.style.top = '24.24vh';
                  conditions.style.cssText = `top: 13.6vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 155px; width: 162px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0vw'; 
                  } else {
                    temp.style.left = '1.5vw';
                  }
                }

                if(window.matchMedia("(max-width: 818px)").matches) {
                  // leftDiv.style.right = '20vw';
                  // rightDiv.style.left = '20vw';
                } else {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                }
             // }

             if(window.matchMedia("(min-width: 1000px)").matches) {
              if(window.matchMedia("(min-height: 685px)").matches) {
                temp.style.top = '24.84vh';
                conditions.style.top = '16.6vh';
              } else {
                temp.style.top = '25vh';
                conditions.style.top = '14.6vh';
              }
              
              
              
              if(tempReading <= -1) {
                temp.style.left = '-0.41vw';
              } else {
                temp.style.left = '1.09vw';
              }

              document.querySelector('.conditions img').style.cssText = 'height: 196px; width: 196px;';
             } else if(window.matchMedia("(min-width: 900px)").matches) {
              temp.style.top = '24.84vh';

              if(tempReading <= -1) {
                temp.style.left = '-0.36vw';
              } else {
                temp.style.left = '1.14vw';
              }

              conditions.style.top = '14.6vh';

              document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 188px;';
             }
              
            }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
      
                  temp.style.cssText = 'top: 12vh; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  conditions.style.cssText = `top: 8vh;`;

                  if(tempReading <= -1) {
                    temp.style.left = '0'; 
                  } else {
                    temp.style.left = '2vw';
                  }
              
                  //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
               // }
                
              }  else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {    

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    


                    if(window.matchMedia("(max-height: 600px)").matches) {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 10.14vh;`;
                    } else {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 13.47vh;`;
                    }


                    if(window.matchMedia('(min-height: 900px)').matches) {
                      temp.style.cssText = 'top: 23.06vh; margin: auto;';
                      conditions.style.top = '15.47vh';

                      if(tempReading <= -1) {
                        temp.style.left = '0vw'; 
                      } else {
                        temp.style.left = '1.5vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 239px; width: 239px;';
                    }  else {
                      temp.style.cssText = 'top: 22.4vh; margin: auto;';
                      conditions.style.top = '13.47vh';

                      if(tempReading <= -1) {
                        temp.style.left = '0vw'; 
                      } else {
                        temp.style.left = '1.5vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 237px; width: 237px;';
                    }
                    
                    // // city.style.fontSize = '6.2em';

                    rightDiv.style.fontSize = '1.6em';

                    document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                    document.querySelector('.date-and-time').style.fontSize = '1.4em';
                    
              }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                
                
                const moon260 = window.matchMedia("(max-width: 260px)");
        
               /* if(moon260.matches) {
                    temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 7.2vh;';
                    conditions.style.cssText = `top: 2.5vh;`;
                
                    conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                  } else {*/
                    
        
                    temp.style.cssText = 'margin: auto;';

                    if(tempReading <= -1) {
                      temp.style.left = '0.1vw'; 
                    } else {
                      temp.style.left = '1.6vw';
                    }
       
                    if(window.matchMedia("(min-height: 900px)").matches) {
                      temp.style.top = '18.24vh';
                    } else {
                      temp.style.top = '17.06vh';
                    }

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    conditions.style.cssText = `top: 8vh;`;
                    
                    /*if(maxWidth1200.matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                    } else {*/
                      document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 229px;';
                    //}
                    
                 // }
                  
                }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'top: 7vh; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: 0.77vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '-0.75vw'; 
                      } else {
                        temp.style.left = '1.25vw';
                      }

                      setTimeout(() => {
                        leftDiv.style.height = '32vh';
                        rightDiv.style.height = '32vh';

                        
                        

                        },28);
                  
                      document.querySelector('.conditions img').style.cssText = 'height: 248px; width: 248px;';
                   // }
                    
                  }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        temp.style.cssText = 'top: 27.5vh; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        conditions.style.cssText = `top: 21.5vh;`;

                        if(tempReading <= -1) {
                          temp.style.left = '-0.25vw'; 
                        } else {
                          temp.style.left = '1.25vw';
                        }
                    
                        document.querySelector('.conditions img').style.cssText = 'height: 226px; width: 226px;';
                     // }
                      
                    }  

      break;

      

    case 'hazy.png':
      if(hour >= 4 && hour < 18) {
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(106,106,106);';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(106,106,106);';
        } else if(hour >= 18 || hour < 4) {
          leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(82,82,82);';
          rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(82,82,82);';
        }

        city.style.color = 'rgb(255,255,255)';
        greetingBarTxt.style.color = 'rgb(255,255,255)';
        temp.style.color = 'rgb(2,2,2)';

       

      if(desktopW.matches) {
        tempConditions.style.cssText = 'top: 16vh;';
        conditions.style.cssText = `top: 1vh;`;
        // temp.style.cssText = 'left: 7%; top: 30%';

        // // city.style.top = '1vh';
        // // city.style.fontSize = '6.2em';



        if(window.matchMedia("(min-width: 2000px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.5vw';
          } else {
            temp.style.left = '1vw';
          }
        } else if(window.matchMedia("(min-width: 1900px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.4vw';
          } else {
            temp.style.left = '1.1vw';
          }
        } else if(window.matchMedia("(min-width: 1700px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1600px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1400px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.1vw';
          } else {
            temp.style.left = '1.4vw';
          }
        } else if(window.matchMedia("(min-width: 1300px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        }
      
        if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
          
      
          if(window.matchMedia("(max-height: 525px)").matches) {
            conditions.style.cssText = `top: 4vh;`;
      
            temp.style.top = '7.9vh';
          } else if(window.matchMedia("(max-height: 550px)").matches) {
            conditions.style.cssText = `top: 5.6vh;`;
      
            temp.style.top = '9.4vh';
          } else if(window.matchMedia("(max-height: 575px)").matches) {
            conditions.style.cssText = `top: 7vh;`;
      
            temp.style.top = '10.4vh';
          } else {
            conditions.style.cssText = `top: 7.75vh;`;
            
            temp.style.top = '11.4vh';
          }


        } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
          
          if(window.matchMedia("(max-height: 625px)").matches) {
            conditions.style.cssText = `top: 6.6vh;`;
      
            temp.style.top = '10.64vh';
          } else if(window.matchMedia("(max-height: 650px)").matches) {
            conditions.style.cssText = `top: 6.85vh;`;
      
            temp.style.top = '10.64vh';
          } else if(window.matchMedia("(max-height: 675px)").matches) {
            conditions.style.cssText = `top: 7.6vh;`;
      
            temp.style.top = '11.39vh';
          } else {
            conditions.style.cssText = `top: 8.35vh;`;
            
            temp.style.top = '11.99vh';
          }
      
        } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
          temp.style.top = '7.14vh';
      
          if(window.matchMedia("(max-height: 725px)").matches) {
            conditions.style.cssText = `top: 2.5vh;`;
          } else if(window.matchMedia("(max-height: 750px)").matches) {
            conditions.style.cssText = `top: 2.75vh;`;
          } else if(window.matchMedia("(max-height: 775px)").matches) {
            conditions.style.cssText = `top: 3vh;`;
          } else {
            conditions.style.cssText = `top: 3.25vh;`;
          }

        } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
          
          temp.style.top = '9.37vh';
          
          if(window.matchMedia("(max-height: 825px)").matches) {
            conditions.style.top = '5.25vh';
          } else if(window.matchMedia("(max-height: 850px)").matches) {
            conditions.style.cssText = `top: 5.75vh;`;
          } else if(window.matchMedia("(max-height: 875px)").matches) {
            conditions.style.cssText = `top: 5.75vh;`;
          } else {
            conditions.style.cssText = `top: 6vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
          
          temp.style.top = '10.6vh';
          
          if(window.matchMedia("(max-height: 925px)").matches) {
            conditions.style.top = '7.25vh';
          } else if(window.matchMedia("(max-height: 950px)").matches) {
            conditions.style.cssText = `top: 7.25vh;`;
          } else if(window.matchMedia("(max-height: 975px)").matches) {
            conditions.style.cssText = `top: 7.5vh;`;
          } else {
            conditions.style.cssText = `top: 7.5vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
          
          temp.style.top = '11.25vh';
      
          if(window.matchMedia("(max-height: 1025px)").matches) {
            conditions.style.cssText = `top: 8.25vh;`;
          } else if(window.matchMedia("(max-height: 1050px)").matches) {
            conditions.style.cssText = `top: 8.5vh;`;
          } else if(window.matchMedia("(max-height: 1075px)").matches) {
            conditions.style.cssText = `top: 8.5vh;`;
          } else {
            conditions.style.cssText = `top: 8.5vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
          
          temp.style.top = '10.75vh';
      
          if(window.matchMedia("(max-height: 1125px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
          } else if(window.matchMedia("(max-height: 1150px)").matches) {
            conditions.style.cssText = `top: 8.25vh;`;
          } else if(window.matchMedia("(max-height: 1175px)").matches) {
            conditions.style.cssText = `top: 8.25vh;`;
          } else {
            conditions.style.cssText = `top: 8.25vh;`;
          }
          
        } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
          
          temp.style.top = '11.27vh';
      
          if(window.matchMedia("(max-height: 1225px)").matches) {
            conditions.style.cssText = `top: 8.5vh;`;
          } else if(window.matchMedia("(max-height: 1250px)").matches) {
            conditions.style.cssText = `top: 8.75vh;`;
          } else if(window.matchMedia("(max-height: 1275px)").matches) {
            conditions.style.cssText = `top: 8.75vh;`;
          } else {
            conditions.style.cssText = `top: 9vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
          
          temp.style.top = '11.7vh';
      
          if(window.matchMedia("(max-height: 1325px)").matches) {
            conditions.style.cssText = `top: 9.625vh;`;
          } else if(window.matchMedia("(max-height: 1350px)").matches) {
            conditions.style.cssText = `top: 9.625vh;`;
          } else if(window.matchMedia("(max-height: 1375px)").matches) {
            conditions.style.cssText = `top: 9.625vh;`;
          } else {
            conditions.style.cssText = `top: 9.625vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
          
          temp.style.top = '12.27vh';
      
          if(window.matchMedia("(max-height: 1425px)").matches) {
            conditions.style.cssText = `top: 10.125vh;`;
          } else if(window.matchMedia("(max-height: 1450px)").matches) {
            conditions.style.cssText = `top: 10.125vh;`;
          } else if(window.matchMedia("(max-height: 1475px)").matches) {
            conditions.style.cssText = `top: 10.375vh;`;
          } else {
            conditions.style.cssText = `top: 10.375vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
          
          temp.style.top = '12.2vh';
      
          if(window.matchMedia("(max-height: 1525px)").matches) {
            conditions.style.cssText = `top: 10.25vh;`;
          } else if(window.matchMedia("(max-height: 1550px)").matches) {
            conditions.style.cssText = `top: 10.25vh;`;
          } else if(window.matchMedia("(max-height: 1575px)").matches) {
            conditions.style.cssText = `top: 10.25vh;`;
          } else {
            conditions.style.cssText = `top: 10.25vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
          
          temp.style.top = '13.14vh';
      
          if(window.matchMedia("(max-height: 1625px)").matches) {
            conditions.style.cssText = `top: 11.25vh;`;
          } else if(window.matchMedia("(max-height: 1650px)").matches) {
            conditions.style.cssText = `top: 11.25vh;`;
          } else if(window.matchMedia("(max-height: 1675px)").matches) {
            conditions.style.cssText = `top: 11.25vh;`;
          } else {
            conditions.style.cssText = `top: 11.25vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
          
          temp.style.top = '12.5vh';

          conditions.style.top = '10.84vh';
      
        } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {
          
          temp.style.top = '12.95vh';
          
          conditions.style.cssText = `top: 11.34vh;`;
        } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
          
          temp.style.top = '13.42vh';
          
          conditions.style.cssText = `top: 11.84vh;`;
      
        } else {
          
          temp.style.top = '13.69vh';
          
          conditions.style.cssText = `top: 12.25vh;`;
        }
      
      
        if(window.matchMedia("(max-height: 599px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 224px;';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 224px;';
        } else if(window.matchMedia("(min-height: 800px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 241px;';
        } else {
          document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 241px;';
        }


      } else if(portraitW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

        if(moon260.matches) {
            temp.style.cssText = 'top: 11.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 8.2vh;';
            conditions.style.cssText = `top: 3.5vh;`;

            if(tempReading <= -1) {
              temp.style.left = '2vw'; 
            } else {
              temp.style.left = '4vw';
            }
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {
            const minWidth481 = window.matchMedia('(min-width: 481px)');
            
            if(minWidth481.matches) {
              temp.style.cssText = 'top: 6vh; margin: auto;';
              conditions.style.cssText = `top: 1vh;`;

              if(tempReading <= -1) {
                temp.style.left = '1vw'; 
              } else {
                temp.style.left = '3vw';
              }
            } else {
              temp.style.cssText = 'top: 7%; margin: auto;';
              conditions.style.cssText = `top: 0.25vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(window.matchMedia('(min-height: 660px)').matches) {
                temp.style.top = '5.8%';
                conditions.style.top = '1vh';

                document.querySelector('.conditions img').style.cssText = 'height: 219px; width: 219px;';
              } else if(window.matchMedia('(min-height: 647px)').matches) {
                temp.style.top = '5.1%';

                document.querySelector('.conditions img').style.cssText = 'height: 219px; width: 219px;';
              } else {
                temp.style.top = '6.3%';
                conditions.style.top = '1vh';

                document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
              }

              if(window.matchMedia("(min-width: 448px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '1.9vw'; 
                } else {
                  temp.style.left = '3.9vw';
                }
              } else if(window.matchMedia("(min-width: 395px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '2.2vw'; 
                } else {
                  temp.style.left = '4.2vw';
                }
              } else if(window.matchMedia("(min-width: 367px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '2.4vw'; 
                } else {
                  temp.style.left = '4.4vw';
                }
              } else if(window.matchMedia("(min-width: 321px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '2.6vw'; 
                } else {
                  temp.style.left = '4.6vw';
                }
              } else {
                if(tempReading <= -1) {
                  temp.style.left = '2.8vw'; 
                } else {
                  temp.style.left = '4.8vw';
                }
              }
            }

            if(window.matchMedia("(min-height: 800px)").matches) {
              //// // city.style.top = '1.5vh';
              conditions.style.top = '2.5vh';
              temp.style.top = '6.6%';

              //// // city.style.fontSize = '4em';

              //document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              //document.querySelector('.date-and-time').style.fontSize = '1.1em';
            } else if(window.matchMedia("(min-height: 700px)").matches) {
              //// // city.style.top = '1vh';
              //// // city.style.fontSize = '3.7em';

              if(window.matchMedia("(min-width: 510px)").matches) {
                temp.style.top = '5.1%';
              } else {
                temp.style.top = '6.4%';
              }
              
              conditions.style.top = '1.75vh';
              
              if(window.matchMedia("(max-height: 728px)").matches && window.matchMedia("(min-width: 500px)").matches) {
                temp.style.top = '4.1%';
                conditions.style.top = '0.75vh';
                
                document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 219px;';
              }
            }

            if(window.matchMedia("(min-height: 1000px)").matches) {
              temp.style.top = '5.6%';
              conditions.style.top = '2%';

              document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 224px;';
            } else if(window.matchMedia("(min-height: 900px)").matches) {
              temp.style.top = '5.6%';
              conditions.style.top = '2%';

              document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 219px;';
            }

            

            if(maxHeight600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 177px; width: 177px;';

              conditions.style.cssText = 'top: 1.2vh;';
              temp.style.top = '5.6%';
            }


            
            if(window.matchMedia("(max-width: 300px)").matches) {
              conditions.style.top = '0.75vh';
              document.querySelector('.conditions img').style.cssText = 'height: 204px; width: 204px;';
            }

            

            tempConditions.style.cssText = 'top: 11vh;';
            

            /*// leftDiv.style.top = '-10vh';
            // rightDiv.style.top = '-10vh';*/
        

            console.log('GUESS WHO?');
            //document.querySelector('.conditions img').style.cssText = 'border-radius: 0; top: 4vh;';
          } 

          
/*
          if(hour3 >= 4 && hour < 12) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
          } else if(hour >= 12 && hour < 18) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
          } else if(hour >= 18 && hour < 22) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
          } else if(hour >= 22 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
          }*/
      }  else if(landscapeW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

       /* if(moon260.matches) {
            temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 7.2vh;';
            conditions.style.cssText = `top: 2.5vh;`;
        
            conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {*/
            

            temp.style.cssText = 'top: 18.4vh; margin: auto;';

            tempConditions.style.cssText = 'top: 9.6vh;';
            conditions.style.cssText = `top: 8vh;`;

            if(tempReading <= -1) {
              temp.style.left = '0.5vw'; 
            } else {
              temp.style.left = '2vw';
            }
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';

            if(window.matchMedia("(max-width: 699px)").matches) {
              
              
              
              
              
              if(window.matchMedia("(max-height: 300px)").matches) {
                temp.style.top = '16.6vh';
                conditions.style.top = '11.25vh';
              } else if(window.matchMedia("(max-height: 339px)").matches) {
                temp.style.top = '17vh';

                conditions.style.top = '13vh';
              } else if(window.matchMedia("(max-height: 372px)").matches) {
                temp.style.top = '15.96vh';

                conditions.style.top = '12vh';
              } else {
                temp.style.top = '16.6vh';

                conditions.style.top = '12.5vh';
              }

              if(window.matchMedia("(max-width: 599px)").matches) {
                setTimeout(() => {
                  // leftDiv.style.right = '27.5vw';
                  // rightDiv.style.left = '27.5vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '0.5vw';  
                } else {
                  temp.style.left = '2vw';
                }
                
                
                document.querySelector('.conditions img').style.cssText = 'height: 115px; width: 115px;';
              } else {
                setTimeout(() => {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '0vw';
                } else {
                  temp.style.left = '1.5vw';
                }

                if(window.matchMedia("(max-height: 340px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 132px; width: 128px;';
                } else if(window.matchMedia("(max-height: 372px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 137px; width: 128px;';
                } else {
                  document.querySelector('.conditions img').style.cssText = 'height: 137px; width: 128px;';
                }
                
              }
              
              
              
            } else if(window.matchMedia("(min-width: 700px)").matches) {
              conditions.style.top = '8vh';

              temp.style.top = '12.96vh';

              if(tempReading <= -1) {
                temp.style.left = '0.25vw';  
              } else {
                temp.style.left = '1.75vw';
              }

              if(window.matchMedia("(max-height: 499px)").matches) {
                conditions.style.top = '13vh';
                temp.style.top = '16.96vh';

                document.querySelector('.conditions img').style.cssText = 'height: 147px; width: 141px;';
              } else {
                temp.style.top = '19.88vh';
                
                if(tempReading <= -1) {
                  temp.style.left = '0vw';  
                } else {
                  temp.style.left = '1.5vw';
                }

                conditions.style.top = '16vh';
                document.querySelector('.conditions img').style.cssText = 'height: 167px; width: 141px;';
              }

              
            }

            if(window.matchMedia("(min-height: 480px)").matches) {
              // // city.style.top = '2vh';
            }
         // }

         setTimeout(() => {
          if(window.matchMedia("(max-width: 600px)").matches) {
            // rightDiv.style.width = '31vw';
          } else if(window.matchMedia("(max-width: 767px)").matches) {
            // rightDiv.style.width = '30vw';
          }

          if(window.matchMedia("(min-height: 314px)").matches) {
            // leftDiv.style.top = '8vh';
            // rightDiv.style.top = '8vh';
          }

          
         },28);
          
        }  else if(portraitW.matches && medMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");
          // // city.style.top = '1vh';
  
         /* if(moon260.matches) {
              temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 7.2vh;';
              conditions.style.cssText = `top: 2.5vh;`;
          
              conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {*/
              
  
              temp.style.cssText = 'margin: auto;';
  
              tempConditions.style.cssText = 'top: 9.6vh;';
              conditions.style.cssText = `top: 2vh;`;
           // }

           if(window.matchMedia("(max-width: 860px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '0.75vw'; 
            } else {
              temp.style.left = '2.75vw';
            }

            if(window.matchMedia("(min-height: 1153px)").matches) {
              conditions.style.top = '3vh';
              temp.style.top = '6.2vh';
          
              document.querySelector('.conditions img').style.cssText = 'height: 306px; width: 296px;';
            } else {
              temp.style.top = '6.06vh';

              conditions.style.top = '3vh';

              document.querySelector('.conditions img').style.cssText = 'height: 277px; width: 262px;';
            }
            
            
            // left: 3vw; top: 8.2vh; 
           } else {
             if(tempReading <= -1) {
              temp.style.left = '0.25vw'; 
            } else {
              temp.style.left = '2.25vw';
            }

             if(window.matchMedia("(min-height: 1300px)").matches) {
              temp.style.top = '8vh';
              conditions.style.top = '4.6vh';
             
              document.querySelector('.conditions img').style.cssText = 'height: 324px; width: 312px;';
             } else {
              temp.style.top = '6.4vh';
             }
           }
            
          }  else if(landscapeW.matches && medMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                
                setTimeout(() => {
                  // leftDiv.style.top = '11vh';
                  // rightDiv.style.top = '11vh';
                },28);

                
    
                temp.style.cssText = 'margin: auto;';
    
                tempConditions.style.cssText = 'top: 9.6vh;';
            

                if(window.matchMedia("(max-height: 400px)").matches) {
                  // // city.style.top = '0';

                  temp.style.top = '14.88vh';
                  conditions.style.cssText = `top: 10vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 162px; width: 155px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                } else if(window.matchMedia("(min-height: 447px)").matches) {
                  temp.style.top = '16.4vh';
                  conditions.style.cssText = `top: 11.6vh;`;

                  if(window.matchMedia("(min-width: 850px)").matches) {
                    document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 167px;';
                  } else {
                    document.querySelector('.conditions img').style.cssText = 'height: 188px; width: 162px;';
                  }
                  

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                } else {
                  temp.style.top = '15.14vh';
                  conditions.style.cssText = `top: 11.6vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 162px; width: 162px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                }

                if(window.matchMedia("(max-width: 818px)").matches) {
                  // leftDiv.style.right = '20vw';
                  // rightDiv.style.left = '20vw';
                } else {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                }
             // }

             if(window.matchMedia("(min-width: 1000px)").matches) {
              if(window.matchMedia("(min-height: 685px)").matches) {
                temp.style.top = '22vh';
                temp.style.left = '1.2vw';

                conditions.style.top = '17.6vh';

                document.querySelector('.conditions img').style.cssText = 'height: 214px; width: 196px;';  
              } else {
                temp.style.top = '19vh';
                temp.style.left = '1.2vw';

                conditions.style.top = '14.6vh';

                document.querySelector('.conditions img').style.cssText = 'height: 204px; width: 196px;';  
              }
              
              
             } else if(window.matchMedia("(min-width: 900px)").matches) {
              temp.style.top = '18.92vh';
              temp.style.left = '1.25vw';

              conditions.style.top = '14.2vh';

              document.querySelector('.conditions img').style.cssText = 'height: 200px; width: 188px;';
             }
              
            }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
      
                  temp.style.cssText = 'top: 12vh; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  conditions.style.cssText = `top: 8vh;`;
              
                  //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
               // }

               if(tempReading <= -1) {
                temp.style.left = '0'; 
              } else {
                temp.style.left = '2vw';
              }
                
              }  else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {    

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    


                    if(window.matchMedia("(max-height: 600px)").matches) {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 10.14vh;`;
                    } else {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 13.17vh;`;
                    }



                    if(window.matchMedia('(min-height: 900px)').matches) {
                      temp.style.cssText = 'top: 18.88vh; margin: auto;';
                      conditions.style.cssText = `top: 17.17vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '0.3vw'; 
                      } else {
                        temp.style.left = '1.8vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 247px; width: 239px;';
                    }  else {
                      temp.style.cssText = 'top: 16.4vh; margin: auto;';
                      conditions.style.cssText = `top: 13.17vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '0.1vw'; 
                      } else {
                        temp.style.left = '1.6vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 237px;';
                    }
                    
                    // // city.style.fontSize = '6.2em';

                    rightDiv.style.fontSize = '1.6em';

                    document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                    document.querySelector('.date-and-time').style.fontSize = '1.4em';
                    
              }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                
                
                const moon260 = window.matchMedia("(max-width: 260px)");
        
               /* if(moon260.matches) {
                    temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 7.2vh;';
                    conditions.style.cssText = `top: 2.5vh;`;
                
                    conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                  } else {*/
                    
        
                    temp.style.cssText = 'margin: auto;';

                    if(tempReading <= -1) {
                      temp.style.left = '0.1vw'; 
                    } else {
                      temp.style.left = '1.6vw';
                    }
       
                    if(window.matchMedia("(min-height: 900px)").matches) {
                      temp.style.top = '18.24vh';
                    } else {
                      temp.style.top = '11.1vh';
                    }

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    conditions.style.cssText = `top: 8vh;`;
                    
                    /*if(maxWidth1200.matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                    } else {*/
                      document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 229px;';
                    //}
                    
                 // }
                  
                }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'top: 2.4vh; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: 0vh;`;

                      setTimeout(() => {
                        leftDiv.style.height = '32vh';
                        rightDiv.style.height = '32vh';

                        
                        

                        },28);
                  
                      document.querySelector('.conditions img').style.cssText = 'height: 251px; width: 251px;';
                   // }

                   if(tempReading <= -1) {
                    temp.style.left = '0'; 
                  } else {
                    temp.style.left = '2vw';
                  }
                    
                  }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        temp.style.cssText = 'top: 25vh; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        conditions.style.cssText = `top: 23vh;`;
                    
                        document.querySelector('.conditions img').style.cssText = 'height: 237px; width: 222px;';
                     // }

                     setTimeout(() => {
                      if(tempReading <= -1) {
                        temp.style.left = '0.25vw'; 
                      } else {
                        temp.style.left = '1.75vw';
                      }
                     },29);
                     
                      
                    } 
      
      




      break;
    case 'moon.png':
      if(hour >= 4 && hour < 12) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
      } else if(hour >= 12 && hour < 18) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
      } else if(hour >= 18 && hour < 22) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
      } else if(hour >= 22 || hour < 4) {
        leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
        rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
      }

      city.style.color = 'rgb(255,255,255)';
      greetingBarTxt.style.color = 'rgb(255,255,255)';
      temp.style.color = 'rgb(2,2,2)';


      if(desktopW.matches) {
        tempConditions.style.cssText = 'top: 16vh;';
        conditions.style.cssText = `top: 1vh;`;
        // temp.style.cssText = 'left: 7%; top: 30%';

        // // city.style.top = '1vh';
        // // city.style.fontSize = '6.2em';



        if(window.matchMedia("(min-width: 2000px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.5vw';
          } else {
            temp.style.left = '1vw';
          }
        } else if(window.matchMedia("(min-width: 1900px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.4vw';
          } else {
            temp.style.left = '1.1vw';
          }
        } else if(window.matchMedia("(min-width: 1700px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1600px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        } else if(window.matchMedia("(min-width: 1400px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.1vw';
          } else {
            temp.style.left = '1.4vw';
          }
        } else if(window.matchMedia("(min-width: 1300px)").matches) {
          if(tempReading <= -1) {
            temp.style.left = '-0.25vw';
          } else {
            temp.style.left = '1.25vw';
          }
        }
      
        if(window.matchMedia("(min-height: 500px)").matches && window.matchMedia("(max-height: 599px)").matches) {
          
      
          if(window.matchMedia("(max-height: 525px)").matches) {
            conditions.style.cssText = `top: 4.75vh;`;
      
            temp.style.top = '17vh';
          } else if(window.matchMedia("(max-height: 550px)").matches) {
            conditions.style.cssText = `top: 6.5vh;`;
      
            temp.style.top = '17.25vh';
          } else if(window.matchMedia("(max-height: 575px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
      
            temp.style.top = '18vh';
          } else {
            conditions.style.cssText = `top: 9.25vh;`;
            
            temp.style.top = '18.5vh';
          }


        } else if(window.matchMedia("(min-height: 600px)").matches && window.matchMedia("(max-height: 699px)").matches) {
          
          if(window.matchMedia("(max-height: 625px)").matches) {
            conditions.style.cssText = `top: 6.6vh;`;
      
            temp.style.top = '18.14vh';
          } else if(window.matchMedia("(max-height: 650px)").matches) {
            conditions.style.cssText = `top: 5.85vh;`;
      
            temp.style.top = '16.4vh';
          } else if(window.matchMedia("(max-height: 675px)").matches) {
            conditions.style.cssText = `top: 7.6vh;`;
      
            temp.style.top = '17.9vh';
          } else {
            conditions.style.cssText = `top: 7.85vh;`;
            
            temp.style.top = '18.4vh';
          }
      
        } else if(window.matchMedia("(min-height: 700px)").matches && window.matchMedia("(max-height: 799px)").matches) {
          temp.style.top = '13.14vh';
      
          if(window.matchMedia("(max-height: 725px)").matches) {
            conditions.style.cssText = `top: 4vh;`;
          } else if(window.matchMedia("(max-height: 750px)").matches) {
            conditions.style.cssText = `top: 4.25vh;`;
          } else if(window.matchMedia("(max-height: 775px)").matches) {
            conditions.style.cssText = `top: 4.75vh;`;
          } else {
            conditions.style.cssText = `top: 5vh;`;
          }

        } else if(window.matchMedia("(min-height: 800px)").matches && window.matchMedia("(max-height: 899px)").matches) {
          
          temp.style.top = '13.95vh';
          
          if(window.matchMedia("(max-height: 825px)").matches) {
            conditions.style.top = '5.75vh';
          } else if(window.matchMedia("(max-height: 850px)").matches) {
            conditions.style.cssText = `top: 6.25vh;`;
          } else if(window.matchMedia("(max-height: 875px)").matches) {
            conditions.style.cssText = `top: 6.25vh;`;
          } else {
            conditions.style.cssText = `top: 6.5vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 900px)").matches && window.matchMedia("(max-height: 999px)").matches) {
          
          temp.style.top = '14.46vh';
          
          if(window.matchMedia("(max-height: 925px)").matches) {
            conditions.style.top = '7.25vh';
          } else if(window.matchMedia("(max-height: 950px)").matches) {
            conditions.style.cssText = `top: 7.75vh;`;
          } else if(window.matchMedia("(max-height: 975px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
          } else {
            conditions.style.cssText = `top: 8.25vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1000px)").matches && window.matchMedia("(max-height: 1099px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1025px)").matches) {
            conditions.style.cssText = `top: 8.25vh;`;
          } else if(window.matchMedia("(max-height: 1050px)").matches) {
            conditions.style.cssText = `top: 8.5vh;`;
          } else if(window.matchMedia("(max-height: 1075px)").matches) {
            conditions.style.cssText = `top: 8.75vh;`;
          } else {
            temp.style.top = '15.2vh';

            conditions.style.cssText = `top: 9.17vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1100px)").matches && window.matchMedia("(max-height: 1199px)").matches) {
          
          temp.style.top = '14vh';
      
          if(window.matchMedia("(max-height: 1125px)").matches) {
            conditions.style.cssText = `top: 8vh;`;
          } else if(window.matchMedia("(max-height: 1150px)").matches) {
            conditions.style.cssText = `top: 8.25vh;`;
          } else if(window.matchMedia("(max-height: 1175px)").matches) {
            conditions.style.cssText = `top: 8.5vh;`;
          } else {
            conditions.style.cssText = `top: 8.75vh;`;
          }
          
        } else if(window.matchMedia("(min-height: 1200px)").matches && window.matchMedia("(max-height: 1299px)").matches) {
          
          temp.style.top = '14.2vh';
      
          if(window.matchMedia("(max-height: 1225px)").matches) {
            conditions.style.cssText = `top: 8.75vh;`;
          } else if(window.matchMedia("(max-height: 1250px)").matches) {
            conditions.style.cssText = `top: 9vh;`;
          } else if(window.matchMedia("(max-height: 1275px)").matches) {
            conditions.style.cssText = `top: 9.25vh;`;
          } else {
            conditions.style.cssText = `top: 9.375vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1300px)").matches && window.matchMedia("(max-height: 1399px)").matches) {
          
          temp.style.top = '14.7vh';
      
          if(window.matchMedia("(max-height: 1325px)").matches) {
            conditions.style.cssText = `top: 9.625vh;`;
          } else if(window.matchMedia("(max-height: 1350px)").matches) {
            conditions.style.cssText = `top: 9.875vh;`;
          } else if(window.matchMedia("(max-height: 1375px)").matches) {
            conditions.style.cssText = `top: 10.125vh;`;
          } else {
            temp.style.top = '15.2vh';
            conditions.style.cssText = `top: 10.375vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1400px)").matches && window.matchMedia("(max-height: 1499px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1425px)").matches) {
            conditions.style.cssText = `top: 10.125vh;`;
          } else if(window.matchMedia("(max-height: 1450px)").matches) {
            conditions.style.cssText = `top: 10.125vh;`;
          } else if(window.matchMedia("(max-height: 1475px)").matches) {
            conditions.style.cssText = `top: 10.375vh;`;
          } else {
            temp.style.top = '15.2vh';
            conditions.style.cssText = `top: 10.625vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1500px)").matches && window.matchMedia("(max-height: 1599px)").matches) {
          
          temp.style.top = '15vh';
      
          if(window.matchMedia("(max-height: 1525px)").matches) {
            conditions.style.cssText = `top: 10.25vh;`;
          } else if(window.matchMedia("(max-height: 1550px)").matches) {
            conditions.style.cssText = `top: 10.5vh;`;
          } else if(window.matchMedia("(max-height: 1575px)").matches) {
            conditions.style.cssText = `top: 10.75vh;`;
          } else {
            conditions.style.cssText = `top: 11vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1600px)").matches && window.matchMedia("(max-height: 1699px)").matches) {
          
          temp.style.top = '15.2vh';
      
          if(window.matchMedia("(max-height: 1625px)").matches) {
            conditions.style.cssText = `top: 11.25vh;`;
          } else if(window.matchMedia("(max-height: 1650px)").matches) {
            conditions.style.cssText = `top: 11.25vh;`;
          } else if(window.matchMedia("(max-height: 1675px)").matches) {
            conditions.style.cssText = `top: 11.5vh;`;
          } else {
            conditions.style.cssText = `top: 11.5vh;`;
          }
      
        } else if(window.matchMedia("(min-height: 1700px)").matches && window.matchMedia("(max-height: 1799px)").matches) {
          
          temp.style.top = '14.84vh';

          conditions.style.top = '10.84vh';
      
        } else if(window.matchMedia("(min-height: 1800px)").matches && window.matchMedia("(max-height: 1899px)").matches) {
          
          temp.style.top = '14.95vh';
          
          conditions.style.cssText = `top: 11.34vh;`;
        } else if(window.matchMedia("(min-height: 1900px)").matches && window.matchMedia("(max-height: 1999px)").matches) {
          
          temp.style.top = '15.25vh';
          
          conditions.style.cssText = `top: 11.84vh;`;
      
        } else {
          
          temp.style.top = '15.46vh';
          
          conditions.style.cssText = `top: 12.25vh;`;
        }
      
      
        if(window.matchMedia("(max-height: 599px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 214px; width: 227px;';
        } else if(window.matchMedia("(max-height: 699px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 230px; width: 234px;';
        } else if(window.matchMedia("(min-height: 800px)").matches) {
          document.querySelector('.conditions img').style.cssText = 'height: 232px; width: 239px;';
        } else {
          document.querySelector('.conditions img').style.cssText = 'height: 230px; width: 234px;';
        }
        
      } else if(portraitW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

        if(moon260.matches) {
            temp.style.cssText = 'top: 11.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 8.2vh;';
            conditions.style.cssText = `top: 3.5vh;`;

            if(tempReading <= -1) {
              temp.style.left = '2vw'; 
            } else {
              temp.style.left = '4vw';
            }
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {
            const minWidth481 = window.matchMedia('(min-width: 481px)');
            
            document.querySelector('.conditions img').style.cssText = 'height: 214px; width: 222px;';

            if(minWidth481.matches) {
              temp.style.cssText = 'top: 6vh; margin: auto;';
              conditions.style.cssText = `top: 1vh;`;

              if(tempReading <= -1) {
                temp.style.left = '1vw'; 
              } else {
                temp.style.left = '3vw';
              }
            } else if(window.matchMedia("(min-width: 367px)").matches) {
              temp.style.cssText = 'top: 13.24%; margin: auto;';
              conditions.style.cssText = `top: 1.25vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '-0.2vw'; 
              } else {
                temp.style.left = '3.8vw';
              }
            } else {
              temp.style.cssText = 'top: 12.5%; margin: auto;';
              conditions.style.cssText = `top: 0.5vh;`;
              // leftDiv.style.top = '-8.6vh';

              if(tempReading <= -1) {
                temp.style.left = '-1.2vw'; 
              } else {
                temp.style.left = '4.8vw';
              }
            }

            if(window.matchMedia("(min-height: 800px)").matches) {
              //// // city.style.top = '1.5vh';
              conditions.style.top = '2vh';
              
              if(window.matchMedia("(min-height: 851px)").matches) {
                temp.style.top = '11.9%';
              } else if(window.matchMedia("(min-height: 820px)").matches) {
                temp.style.top = '12%';
              } else {
                temp.style.top = '12.44%';
              }

              if(window.matchMedia("(min-width: 448px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '-1.1vw'; 
                } else {
                  temp.style.left = '2.9vw';
                }
              } else if(window.matchMedia("(min-width: 394px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '0.2vw'; 
                } else {
                  temp.style.left = '4.2vw';
                }
              } else {
                if(tempReading <= -1) {
                  temp.style.left = '0.8vw'; 
                } else {
                  temp.style.left = '4.8vw';
                }
              }
              

              //// // city.style.fontSize = '4em';

              //document.querySelector('.weather-greeting-txt').style.fontSize = '4em';
              //document.querySelector('.date-and-time').style.fontSize = '1.1em';
            } else if(window.matchMedia("(min-height: 700px)").matches) {
              //// // city.style.top = '1vh';
              //// // city.style.fontSize = '3.7em';
              temp.style.top = '12.06%';
              conditions.style.top = '1.75vh';

              if(window.matchMedia("(max-height: 728px)").matches) {
                temp.style.top = '11.06%';
                conditions.style.top = '0.75vh';
              }
              
              if(window.matchMedia("(min-width: 500px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '1.2vw'; 
                } else {
                  temp.style.left = '3.2vw';
                }

                
              
              } else if(window.matchMedia("(min-width: 400px)").matches) {
                if(tempReading <= -1) {
                  temp.style.left = '1.8vw'; 
                } else {
                  temp.style.left = '3.8vw';
                }
              }
            }

            if(window.matchMedia("(min-height: 900px)").matches) {
              if(window.matchMedia("(min-height: 1000px)").matches) {
                temp.style.top = '9.9%';
              } else {
                temp.style.top = '10.3%';
              }
            }

            

            if(maxHeight600.matches) {
              document.querySelector('.conditions img').style.cssText = 'height: 177px; width: 177px;';

              conditions.style.cssText = 'top: 1.2vh;';
              temp.style.top = '12.41%';
            }


            
            if(window.matchMedia("(max-width: 300px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '4.4vw'; 
              } else {
                temp.style.left = '6.4vw';
              }

              temp.style.top = '11.84%';
              temp.style.left = '5.4vw';

              conditions.style.top = '1vh';
              document.querySelector('.conditions img').style.cssText = 'height: 204px; width: 204px;';
            }

            

            tempConditions.style.cssText = 'top: 11vh;';



            if(window.matchMedia("(min-width: 500px)").matches) {

              if(window.matchMedia("(min-height: 1000px)").matches) {
                document.querySelector('.conditions img').style.cssText = 'height: 222px; width: 230px;';
              } else {
                document.querySelector('.conditions img').style.cssText = 'height: 222px; width: 226px;';
              }

              
            }
            

            /*// leftDiv.style.top = '-10vh';
            // rightDiv.style.top = '-10vh';*/
        

            console.log('GUESS WHO?');
            //document.querySelector('.conditions img').style.cssText = 'border-radius: 0; top: 4vh;';
          } 

          
/*
          if(hour3 >= 4 && hour < 12) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,136,122);';
          } else if(hour >= 12 && hour < 18) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(0,159,182);';
          } else if(hour >= 18 && hour < 22) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(102,0,174);';
          } else if(hour >= 22 || hour < 4) {
            leftDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
            rightDiv.style.cssText = 'color: rgb(255,255,255); border: 6px solid rgb(59,0,71);';
          }*/
      }  else if(landscapeW.matches && smallMobileW.matches) {
        const moon260 = window.matchMedia("(max-width: 260px)");

       /* if(moon260.matches) {
            temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';

            tempConditions.style.cssText = 'top: 7.2vh;';
            conditions.style.cssText = `top: 2.5vh;`;
        
            conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
          } else {*/
            

            temp.style.cssText = 'top: 18.4vh; margin: auto;';

            tempConditions.style.cssText = 'top: 9.6vh;';
            conditions.style.cssText = `top: 8vh;`;


            if(tempReading <= -1) {
                temp.style.left = '0.5vw'; 
              } else {
                temp.style.left = '2vw';
              }
            
            
        
            //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';

            if(window.matchMedia("(max-width: 699px)").matches) {
              
              
              
              
              
              if(window.matchMedia("(max-height: 300px)").matches) {
                temp.style.top = '25.75vh';

                conditions.style.top = '13.25vh';
              } else if(window.matchMedia("(max-height: 339px)").matches) {
                temp.style.top = '23.1vh';

                conditions.style.top = '13.25vh';
              } else if(window.matchMedia("(max-height: 372px)").matches) {
                temp.style.top = '21.96vh';

                conditions.style.top = '11.75vh';
              } else if(window.matchMedia("(max-height: 397px)").matches) {
                temp.style.top = '22.9vh';

                conditions.style.top = '13vh';
              } else {
                temp.style.top = '22.9vh';

                conditions.style.top = '13vh';
              }

              if(window.matchMedia("(max-width: 599px)").matches) {
                setTimeout(() => {
                  // leftDiv.style.right = '27.5vw';
                  // rightDiv.style.left = '27.5vw';
                },28);

                if(tempReading <= -1) {
                  temp.style.left = '0.5vw';  
                } else {
                  temp.style.left = '2vw';
                }
                
                
                document.querySelector('.conditions img').style.cssText = 'height: 109px; width: 115px;';
              } else {
                setTimeout(() => {
                  // leftDiv.style.right = '22vw';
                  // rightDiv.style.left = '22vw';
                },28);

                if(window.matchMedia("(min-width: 653px)").matches) {
                  if(tempReading <= -1) {
                    temp.style.left = '0.4vw'; 
                  } else {
                    temp.style.left = '1.9vw';
                  }
                } else {
                  if(tempReading <= -1) {
                    temp.style.left = '0.5vw'; 
                  } else {
                    temp.style.left = '2vw';
                  }
                }

                if(window.matchMedia("(max-height: 300px)").matches) {
                  
                  setTimeout(() => {
                  // leftDiv.style.right = '22.2vw';
                  // rightDiv.style.left = '22.2vw';
                  },29);

                  document.querySelector('.conditions img').style.cssText = 'height: 127px; width: 134px;';
                } else if(window.matchMedia("(max-height: 340px)").matches) {
                  
                  setTimeout(() => {
                  // leftDiv.style.right = '22.2vw';
                  // rightDiv.style.left = '22.2vw';
                  },29);

                  document.querySelector('.conditions img').style.cssText = 'height: 136px; width: 146px;';
                } else if(window.matchMedia("(max-height: 372px)").matches) {
                  document.querySelector('.conditions img').style.cssText = 'height: 134px; width: 142px;';
                } else {
                  document.querySelector('.conditions img').style.cssText = 'height: 134px; width: 142px;';
                }
                
              }
              
              
              
            } else if(window.matchMedia("(min-width: 700px)").matches) {
              conditions.style.top = '9vh';

              temp.style.top = '19.75vh';

              if(tempReading <= -1) {
                temp.style.left = '0.25vw';  
              } else {
                temp.style.left = '1.75vw';
              }

              if(window.matchMedia("(max-height: 499px)").matches) {
                conditions.style.top = '15vh';
                temp.style.top = '23.75vh';

                document.querySelector('.conditions img').style.cssText = 'height: 132px; width: 142px;';
              } else {
                setTimeout(() => {
                  // leftDiv.style.right = '23vw';
                  // rightDiv.style.left = '23vw';
                },28);
                
                temp.style.top = '23.67vh';
                
                if(tempReading <= -1) {
                  temp.style.left = '0.1vw';  
                } else {
                  temp.style.left = '1.6vw';
                }

                conditions.style.top = '16vh';
                document.querySelector('.conditions img').style.cssText = 'height: 142px; width: 146px;';
              }

              
            }

            if(window.matchMedia("(min-height: 480px)").matches) {
              // // city.style.top = '2vh';
            }
         // }

         setTimeout(() => {
          if(window.matchMedia("(max-width: 600px)").matches) {
            // rightDiv.style.width = '31vw';
          } else if(window.matchMedia("(max-width: 767px)").matches) {
            // rightDiv.style.width = '30vw';
          }

          if(window.matchMedia("(min-height: 314px)").matches) {
            // leftDiv.style.top = '8vh';
            // rightDiv.style.top = '8vh';
          }

          
         },28);
          
        }  else if(portraitW.matches && medMobileW.matches) {
          const moon260 = window.matchMedia("(max-width: 260px)");
          // // city.style.top = '1vh';
  
         /* if(moon260.matches) {
              temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
  
              tempConditions.style.cssText = 'top: 7.2vh;';
              conditions.style.cssText = `top: 2.5vh;`;
          
              conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
            } else {*/
              
  
              temp.style.cssText = 'margin: auto;';
  
              tempConditions.style.cssText = 'top: 9.6vh;';
              conditions.style.cssText = `top: 2vh;`;
          
              document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 262px;';
           // }

           if(window.matchMedia("(min-height: 1153px)").matches) {
            conditions.style.top = '5vh';
            temp.style.top = '11.2vh';


            if(window.matchMedia("(min-width: 960px)").matches) {
              if(tempReading <= -1) {
                temp.style.left = '0vw';
              } else {
                temp.style.left = '2vw';
              }
            } else {
              if(tempReading <= -1) {
                temp.style.left = '1vw';
              } else {
                temp.style.left = '3vw';
              }
            }
            

            document.querySelector('.conditions img').style.cssText = 'height: 272px; width: 282px;';
          } else if(window.matchMedia("(max-width: 810px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '0.9vw'; 
            } else {
              temp.style.left = '2.9vw';
            }

            if(window.matchMedia("(min-height: 1153px)").matches) {
              conditions.style.top = '4vh';
              temp.style.top = '10.2vh';

              document.querySelector('.conditions img').style.cssText = 'height: 277px; width: 292px;';
            } else {
              temp.style.top = '10.14vh';

              conditions.style.top = '3vh';

              document.querySelector('.conditions img').style.cssText = 'height: 262px; width: 267px;';
            }
            
            
            // left: 3vw; top: 8.2vh; 
           } else if(window.matchMedia("(max-width: 860px)").matches) {
            if(tempReading <= -1) {
              temp.style.left = '0.7vw'; 
            } else {
              temp.style.left = '2.7vw';
            }

            if(window.matchMedia("(min-height: 1153px)").matches) {
              conditions.style.top = '1vh';
              temp.style.top = '7.2vh';
            } else {
              temp.style.top = '9.64vh';
            }
            
            
            // left: 3vw; top: 8.2vh; 
           } else {
             if(tempReading <= -1) {
              temp.style.left = '-0.09vw'; 
            } else {
              temp.style.left = '1.91vw';
            }

             if(window.matchMedia("(min-height: 1300px)").matches) {
              temp.style.top = '8.84vh';

              conditions.style.top = '6vh';
             } else {
              temp.style.top = '6.4vh';
             }
             
           }
            
          }  else if(landscapeW.matches && medMobileW.matches) {
            const moon260 = window.matchMedia("(max-width: 260px)");
    
           /* if(moon260.matches) {
                temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
    
                tempConditions.style.cssText = 'top: 7.2vh;';
                conditions.style.cssText = `top: 2.5vh;`;
            
                conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
              } else {*/
                
                setTimeout(() => {
                  // leftDiv.style.top = '11vh';
                  // rightDiv.style.top = '11vh';
                },28);

                
    
                temp.style.cssText = 'margin: auto;';
    
                tempConditions.style.cssText = 'top: 9.6vh;';
            

                if(window.matchMedia("(max-height: 400px)").matches) {
                  // // city.style.top = '0';

                  temp.style.top = '22.56vh';
                  conditions.style.cssText = `top: 12.4vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 144px; width: 155px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                } else if(window.matchMedia("(min-height: 447px)").matches) {
                  temp.style.top = '24vh';
                  conditions.style.cssText = `top: 15vh;`;

                  if(window.matchMedia("(min-width: 850px)").matches) {
                    document.querySelector('.conditions img').style.cssText = 'height: 160px; width: 166px;';
                  } else {
                    document.querySelector('.conditions img').style.cssText = 'height: 184px; width: 158px;';
                  }
                  

                  if(tempReading <= -1) {
                    temp.style.left = '0.34vw'; 
                  } else {
                    temp.style.left = '1.84vw';
                  }
                } else if(window.matchMedia("(min-height: 400px)").matches) {
                  temp.style.top = '22.84vh';
                  conditions.style.cssText = `top: 11.6vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 158px; width: 168px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                } else {
                  temp.style.top = '23.24vh';
                  conditions.style.cssText = `top: 12.6vh;`;
                  document.querySelector('.conditions img').style.cssText = 'height: 162px; width: 172px;';

                  if(tempReading <= -1) {
                    temp.style.left = '0.25vw'; 
                  } else {
                    temp.style.left = '1.75vw';
                  }
                }

                if(window.matchMedia("(max-width: 818px)").matches) {
                  // leftDiv.style.right = '20vw';
                  // rightDiv.style.left = '20vw';
                } else {
                  // leftDiv.style.right = '21vw';
                  // rightDiv.style.left = '21vw';
                }
             // }

             if(window.matchMedia("(min-width: 1000px)").matches) {
              if(window.matchMedia("(min-height: 685px)").matches) {
                temp.style.top = '26vh';
                conditions.style.top = '18.35vh';

                document.querySelector('.conditions img').style.cssText = 'height: 190px; width: 194px;';
              } else {
                temp.style.top = '25.25vh';
                conditions.style.top = '15.6vh';

                document.querySelector('.conditions img').style.cssText = 'height: 190px; width: 200px;';
              }
              
              
              
              if(tempReading <= -1) {
                temp.style.left = '0vw';
              } else {
                temp.style.left = '1.5vw';
              }

             } else if(window.matchMedia("(min-width: 900px)").matches) {
              temp.style.top = '26vh';

              if(tempReading <= -1) {
                temp.style.left = '0.1vw';
              } else {
                temp.style.left = '1.6vw';
              }

              conditions.style.top = '16.6vh';

              document.querySelector('.conditions img').style.cssText = 'height: 180px; width: 190px;';
             }
              
            }  else if(portraitW.matches && lrgMobileW.matches && !xlMobileW.matches) {
              const moon260 = window.matchMedia("(max-width: 260px)");
      
             /* if(moon260.matches) {
                  temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 7.2vh;';
                  conditions.style.cssText = `top: 2.5vh;`;
              
                  conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                } else {*/
                  
      
                  temp.style.cssText = 'top: 12vh; margin: auto;';
      
                  tempConditions.style.cssText = 'top: 9.6vh;';
                  conditions.style.cssText = `top: 8vh;`;

                  if(tempReading <= -1) {
                    temp.style.left = '0'; 
                  } else {
                    temp.style.left = '2vw';
                  }
              
                  //conditionsImg.style.cssText = 'border-radius: 0; top: 4vh;';
               // }
                
              }  else if(lrgMobileW.matches && minWidth1200.matches && !xlMobileW.matches) {    

        
                    tempConditions.style.cssText = 'top: 9.6vh;';
                    


                    if(window.matchMedia("(max-height: 600px)").matches) {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 10.14vh;`;
                    } else {
                      // // city.style.top = '1vh';
                      conditions.style.cssText = `top: 13.17vh;`;
                    }
                    
                    // // city.style.fontSize = '6.2em';

                    rightDiv.style.fontSize = '1.6em';

                    document.querySelector('.weather-greeting-txt').style.fontSize = '5.9em';
                    document.querySelector('.date-and-time').style.fontSize = '1.4em';


                    if(window.matchMedia('(min-height: 900px)').matches) {
                      temp.style.cssText = 'top: 22.24vh; margin: auto;';

                      conditions.style.cssText = `top: 16.17vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '0.2vw'; 
                      } else {
                        temp.style.left = '1.7vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 226px; width: 229px;';
                    }  else {
                      temp.style.cssText = 'top: 20.6vh; margin: auto;';

                      conditions.style.cssText = `top: 13.17vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '0.2vw'; 
                      } else {
                        temp.style.left = '1.7vw';
                      }

                      document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 227px;';
                    }
                    
              }  else if(landscapeW.matches && lrgMobileW.matches && !xlMobileW.matches) {
                
                
                const moon260 = window.matchMedia("(max-width: 260px)");
        
               /* if(moon260.matches) {
                    temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
        
                    tempConditions.style.cssText = 'top: 7.2vh;';
                    conditions.style.cssText = `top: 2.5vh;`;
                
                    conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                  } else {*/
                    
        
                    temp.style.cssText = 'margin: auto;';

                    if(tempReading <= -1) {
                      temp.style.left = '0.1vw'; 
                    } else {
                      temp.style.left = '1.6vw';
                    }
       
                    if(window.matchMedia("(min-height: 900px)").matches) {
                      temp.style.top = '18.24vh';
                    } else {
                      temp.style.top = '17.06vh';
                    }

                    tempConditions.style.cssText = 'top: 9.6vh;';
                    conditions.style.cssText = `top: 8vh;`;
                    
                    /*if(maxWidth1200.matches) {
                      document.querySelector('.conditions img').style.cssText = 'height: 212px; width: 212px;';
                    } else {*/
                      document.querySelector('.conditions img').style.cssText = 'height: 229px; width: 229px;';
                    //}
                    
                 // }
                  
                }  else if(portraitW.matches && xlMobileW.matches && lrgMobileW.matches) {
                  const moon260 = window.matchMedia("(max-width: 260px)");
          
                 /* if(moon260.matches) {
                      temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 7.2vh;';
                      conditions.style.cssText = `top: 2.5vh;`;
                  
                      conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                    } else {*/
                      
          
                      temp.style.cssText = 'top: 6.3vh; margin: auto;';
          
                      tempConditions.style.cssText = 'top: 9.6vh;';
                      conditions.style.cssText = `top: 0.5vh;`;

                      if(tempReading <= -1) {
                        temp.style.left = '-0.4vw'; 
                      } else {
                        temp.style.left = '1.6vw';
                      }

                      setTimeout(() => {
                        leftDiv.style.height = '32vh';
                        rightDiv.style.height = '32vh';

                        
                        
                      },28);
                  
                      document.querySelector('.conditions img').style.cssText = 'height: 245px; width: 255px;';
                   // }
                    
                  }  else if(landscapeW.matches && xlMobileW.matches && lrgMobileW.matches) {
                    const moon260 = window.matchMedia("(max-width: 260px)");
            
                   /* if(moon260.matches) {
                        temp.style.cssText = 'left: 4vw; top: 10.6%; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 7.2vh;';
                        conditions.style.cssText = `top: 2.5vh;`;
                    
                        conditionsImg.style.cssText = 'border-radius: 0; top: 2vh;';
                      } else {*/
                        
            
                        temp.style.cssText = 'top: 27.72vh; margin: auto;';
            
                        tempConditions.style.cssText = 'top: 9.6vh;';
                        conditions.style.cssText = `top: 22vh;`;

                        if(tempReading <= -1) {
                          temp.style.left = '0'; 
                        } else {
                          temp.style.left = '1.5vw';
                        }

                    
                        document.querySelector('.conditions img').style.cssText = 'height: 224px; width: 234px;';
                     // }
                      
                    } 
      
      break;
    default:
      /* tempConditions.style.cssText = 'top: 16vh;';
      conditions.style.cssText = `top: 0;`;
      temp.style.cssText = 'left: 6%; top: 23%';
      conditionsImg.style.cssText = 'border-radius: 0;';*/
      break;
  }


  

}


approveSounds.addEventListener('click',function() {
  soundsEnabled = true;
  getReady();
});

denySounds.addEventListener('click',function() {
  soundsEnabled = false;
  getReady();
});

function getReady() {
  const hiddenItems = ['.date-and-time', '.full-weather-div'];

  enableSoundDiv.style.animation = 'vanish-sound-page 2010ms 1 ease-in-out';

  document.querySelector('html').style.overflow = 'visible';

  greetingBarTxt.textContent = `${weatherGreeting}`;

  for(let hiddenItem of hiddenItems) {
    setTimeout(() => {
      document.querySelector(`${hiddenItem}`).style.visibility = 'visible';
    },1);
  }

  

  if(desktopW.matches && window.matchMedia("(max-height: 699px)").matches) {
    // document.querySelector('.nav-bar-apps').style.cssText = 'display: none; opacity: 0; visibility: hidden;';

    // document.querySelector('.menu-icon').style.cssText = 'display: flex; opacity: 1; visibility: visible;';
  }

  setTimeout(() => {
    enableSoundDiv.style.cssText = 'opacity: 0; display: none; visibility: hidden; height: 0; width: 0;';

    execute();
  },2000);
}



/*(*/function execute() {
  elapsed = 848;

  toggleCities(elapsed);

  for(let i = 0; i < 1000; i++) {
    setTimeout(() => {
      toggleCities(elapsed);
      elapsed += 174800;
    }, 174800);
  }
}/*)()*/;

  /*resultFunct('Tokyo');*/

function toggleCities(elapsed) {

  setTimeout(() => {
    resultFunct('Miami Beach');
    k++;
  }, elapsed);

  setTimeout(() => {
    resultFunct('Orlando');
    k++;
  }, elapsed + 6800);

  
  setTimeout(() => {
    resultFunct('Key West');
    k++;
  }, elapsed + 12800);

  
  setTimeout(() => {
    resultFunct('Coral Gables');
    k++;
  }, elapsed + 18800);

  
    setTimeout(() => {
    resultFunct('South Miami');
    k++;
  }, elapsed + 24800);

  
  setTimeout(() => {
    resultFunct('Miramar');
    k++;
  }, elapsed + 30800);
    
    setTimeout(() => {
      resultFunct('Savannah');
      k++;
    }, elapsed + 36800);

    setTimeout(() => {
      resultFunct('Green Bay');
      k++;
    },elapsed + 42800);

    setTimeout(() => {
      resultFunct('South Bend');
      k++;
    },elapsed + 48800);

    setTimeout(() => {
      resultFunct('New Orleans');
      k++;
    }, elapsed + 54800);

    setTimeout(() => {
      resultFunct('Toronto');
      k++;
    }, elapsed + 60800);

    setTimeout(() => {
      resultFunct('Juneau');
      k++;
    }, elapsed + 66800);

    setTimeout(() => {
      resultFunct('Honolulu');
      k++;
    }, elapsed + 72800);

    setTimeout(() => {
      resultFunct('Stockholm');
      k++;
    }, elapsed + 78800);

    setTimeout(() => {
      resultFunct('Helsinki');
      k++;
    }, elapsed + 84800);

    setTimeout(() => {
      resultFunct('Oslo');
      k++;
    }, elapsed + 90800);

    setTimeout(() => {
      resultFunct('Reykjavik');
      k++;
    }, elapsed + 96800);

    setTimeout(() => {
      resultFunct('Dublin,ie');
      k++;
    }, elapsed + 102800);

    setTimeout(() => {
      resultFunct('London');
      k++;
    }, elapsed + 108800);

    setTimeout(() => {
      resultFunct('Zurich');
      k++;
    }, elapsed + 114800);

    setTimeout(() => {
      resultFunct('Edinburgh');
      k++;
    }, elapsed + 120800);

    setTimeout(() => {
      resultFunct('Buenos Aires');
      k++;
    }, elapsed + 126800);

    setTimeout(() => {
      resultFunct('Tokyo');
      k++;
    }, elapsed + 132800);

    setTimeout(() => {
      resultFunct('Seattle');
      k++;
    }, elapsed + 138800);

    setTimeout(() => {
      resultFunct('San Francisco');
      k++;
    }, elapsed + 144800);

    setTimeout(() => {
      resultFunct('Nashville');
      k++;
    }, elapsed + 150800);

    setTimeout(() => {
      resultFunct('Atlanta');
      k++;
    }, elapsed + 156800);

    setTimeout(() => {
      resultFunct('Birmingham');
      k++;
    }, elapsed + 162800);

    setTimeout(() => {
      resultFunct('Talladega');
      k++;
    }, elapsed + 168800);

    setTimeout(() => {
      resultFunct('Antarctica');
      k++;
    }, elapsed + 174800);
  }
