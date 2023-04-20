// (function() {

// });

const movieURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=3bb6bc8ef217fa691d88c726f34cd910&language=ko-KR&page=1&region=KR";

const hotRated =
  "https://api.themoviedb.org/3/tv/popular?api_key=3bb6bc8ef217fa691d88c726f34cd910&language=ko-KR&page=1";

const topRated =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=3bb6bc8ef217fa691d88c726f34cd910&language=ko-KR&page=1";

const popularTv1 =
  "https://api.themoviedb.org/3/tv/216390?api_key=3bb6bc8ef217fa691d88c726f34cd910&language=ko-KR";

const popularTv2 =
  "https://api.themoviedb.org/3/tv/99966?api_key=3bb6bc8ef217fa691d88c726f34cd910&language=ko-KR";

const popularTv3 =
  "https://api.themoviedb.org/3/tv/216304?api_key=3bb6bc8ef217fa691d88c726f34cd910&language=ko-KR";

$.ajax({
  type: "GET",
  url: topRated,
  dataType: "json",
  async: false,
  success: function (data) {
    const results = data.results;
    console.log(results);
    console.log(data);
    //   https://image.tmdb.org/t/p/w500/
    for (const result of results) {
      console.log("영화 포스터 : ", result.poster_path);
      console.log("영화 아이디 : ", result.id);
      for (var i = 0; i < 3; i++) {
        $(`.card_top_${i}`).text(`${results[i].overview}`);
        let imgURL = "https://image.tmdb.org/t/p/w500" + results[i].poster_path;
        $(`.card_img_${i}`).append(
          `<a href='./detail.html?id=${results[i].id}'><img src=${imgURL}></a>`
        );
      }
      return;
    }
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});

$.ajax({
  type: "GET",
  url: popularTv1,
  dataType: "json",
  async: false, // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
  success: function (data) {
    //정상 응답시 처리 작업
    console.log(data);
    $(`.card_h_0`).text(`${data.overview}`);
    let imgURL = "https://image.tmdb.org/t/p/w500" + data.poster_path;
    $(`.card_hot_0`).append(
      `<a href='./detail.html?id=${data.id}'><img src=${imgURL}></a>`
    );
  },
  error: function (request, status, error) {
    //응답 에러시 처리 작업
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});

function bringHighNumberToFront(arr) {
  var max = arr[0]; // 배열의 첫 번째 원소를 초기 최대값으로 설정
  var maxIndex = 0; // 초기 최대값의 인덱스를 0으로 설정

  // 배열을 순회하면서 최대값을 찾음
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  // 최대값을 배열의 첫 번째 원소와 교환
  var temp = arr[0];
  arr[0] = max;
  arr[maxIndex] = temp;

  return arr;
}

// 예시 배열
var arr = [216390, 99966, 216304];
console.log("원래 배열: " + arr);
arr = bringHighNumberToFront(arr);
console.log("변경된 배열: " + arr);
// 인기드라마 1

// //if 문
// $.ajax({
//   type: "GET",
//   url: topRated,
//   dataType: "json",
//   async: false,
//   success: function (data) {
//     const results = data.results;
//     // console.log(results);
//     // console.log(data);
//     // origin_country
//     var numbers = []; // 빈 배열 생성

//     for (var i = 0; i <= 10; i++) {
//       if (data.results[i].origin_country == "KR") {
//         // i가 짝수인 경우
//         numbers.push(data.results[i].id); // 배열에 i 값을 저장
//       }
//     }

//     console.log(numbers); // [2, 4] 출력
//   },
//   error: function (request, status, error) {
//     console.log("code:" + request.status);
//     console.log("message:" + request.responseText);
//     console.log("error:" + error);
//   },
// });
// $.ajax({
//   type: "GET",
//   url: movieURL,
//   dataType: "json",
//   async: false,
//   success: function (data) {
//     const results = data.results;
//     console.log(results);
//     console.log(data);
//     //   https://image.tmdb.org/t/p/w500/
//     for (const result of results) {
//       console.log("영화 제목 : ", result.title);
//       console.log("영화 상세설명 : ", result.overview);
//       console.log("영화 평점 : ", result.vote_average);
//       console.log("영화 포스터 : ", result.poster_path);

//       let imgURL = "https://image.tmdb.org/t/p/w500" + result.poster_path;
//       $(".images").append(
//         `<a href='./detail.html?id=${result.id}'><img src=${imgURL}></a>`
//       );
//       $(".images").append(`${result.title}`);
//     }
//   },
//   error: function (request, status, error) {
//     console.log("code:" + request.status);
//     console.log("message:" + request.responseText);
//     console.log("error:" + error);
//   },
// });
