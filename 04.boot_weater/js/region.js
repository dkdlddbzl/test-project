// 1. 전체 url 가져오기
const currentURL = location.href;
console.log(currentURL);

//2. 쿼리 스트링 파라매터 가져오기
const urlObj = new URL(currentURL);
const params = urlObj.searchParams; //파라미터에 대한정보가 들어있다
console.log(params);

//파라미터의 값을 구한다 params.get('변수명')
const q = params.get("q");
const krcity = params.get("krcity");

console.log(q, krcity);

//3. ajax 이용해서 전체 날씨 정보 얻어오기
function getCityweather(q) {
  var temp = {};
  var openWeatherAPI =
    "https://api.openweathermap.org/data/2.5/weather?appid=2ff63fe12596708b64a9fd51a3132953&units=metric&lang=kr";
  openWeatherAPI += "&q=" + q;

  $.ajax({
    type: "GET",
    url: openWeatherAPI,
    dataType: "json",
    async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
    success: function (data) {
      console.log(data);
      //정상 응답시 처리 작업
      temp.celsius = data.main.temp.toFixed(0); // 소수점 버림;
      temp.feels_like = data.main.feels_like.toFixed(0); // 소수점 버림;
      temp.humidity = data.main.humidity.toFixed(0); // 소수점 버림;
      temp.windspeed = data.wind.speed.toFixed(0); // 소수점 버림;
      temp.cloudsall = data.clouds.all.toFixed(0); // 소수점 버림;
      temp.icon = data.weather[0].icon;
    },
    error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  return temp;
}

//4. 데이터 바인딩 작업
$(".region-title").text(`${krcity} 상세날씨`);
let temp = getCityweather(q);
$(".celsius").text(`${temp.celsius}℃`);
$(".feel").text(`${temp.feels_like}℃`);
$(".humidity").text(`${temp.humidity}%`);
$(".windspeed").text(`${temp.windspeed}m/s`);
$(".cloudsall").text(`${temp.cloudsall}%`);

var iconURL = "https://openweathermap.org/img/wn/" + temp.icon + ".png";

$(".img").attr("src", iconURL);
