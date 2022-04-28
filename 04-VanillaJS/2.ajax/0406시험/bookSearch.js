/**
 * @filename    : bookSearch.js
 * @autor       : 유다현 (ekgus1129@gmail.com);
 * @description : book api 가져오기~
 */

/*KAKAO REST KEY*/
const KAKAO_REST_KEY = "76d2e46a76f3c4ffdf1b6b518a323d34";

/* 페이지 번호*/
let currentPage = 1;

/* 검색어*/
let queryKeyword = null;

/* 마지막 페이지인지 검사*/
let isEnd = false;

/*AJax 요청 후 결과를 화면에 HTML로 출력하는 함수*/
async function get_search() {
  //로딩바 객체
  const loading = document.querySelector("#loading");

  //로딩바 화면에 표시
  loading.classList.add("active");

  //검색결과가 표시될 때
  const list = document.querySelector("#list");

  //1페이지에 대한 요청일 경우 기존에 표시되고 있던 검색결과가 있다면 삭제
  if (currentPage == 1) {
    Array.from(list.getElementsByTagName("li")).forEach((v, i) => {
      list.removeChild(v);
    });
  }
  //검색결과를 저장할 빈 변수
  let json = null;

  try {
    json = await axios.get("https://dapi.kakao.com/v3/search/book", {
      params: {
        query: queryKeyword,
        page: currentPage,
        sort: source,
        size: size,
      },
      headers: {
        Authorization: "KakaoAK 76d2e46a76f3c4ffdf1b6b518a323d34",
      },
    });
    console.log(json);
  } catch (e) {
    console.error(err);
    alert("요청처리 실패");
    return;
  } finally {
    //로딩바 닫기
    loading.classList.remove("active");
  }

  if (json != null) {
    const { data } = json;
    // 다음 페이지를 요청 할 수 있는지를 판단하기 위한 값
    isEnd = data.meta.isEnd;
    // console.log(json);

    data.documents.map((v, i) => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      //a 태그의 파라미터 추가
      a.setAttribute("href", v.url);
      a.setAttribute("target", "_blank");
      a.setAttribute("title", v.title);

      //썸네일 이미지와 이미지가 없을 경우 대처 이미치 추가 
      const img = document.createElement("img");
      img.setAttribute("src", v.thumbnail || "./noimage.gif");

      //책 제목 
      const title = document.createElement("p");
      title.innerHTML = v.title;

      //책 소개
      const contents = document.createElement("p");
      contents.innerHTML =v.contents;

      //span 태그의 클래스 추가
      function addInfo(data) {
        data.classList.add("info");
        return data;
      }
  

      //글쓴이
      const authors = document.createElement("span");
      authors.innerHTML = v.authors;

      //출판사
      const publisher = document.createElement("span");
      publisher.innerHTML = v.publisher;

      //정상가 
      const price = document.createElement("span");
      price.innerHTML = v.price;

      //세일가
      const sale_price = document.createElement("span");
      sale_price.innerHTML = sale_price  == -1 ? v.sale_price :   "세일가가 없습니다." ;
  
      //a태그에 모두 추가
      a.appendChild(img);
      a.appendChild(title);
      a.appendChild(addInfo(contents));
      a.appendChild(addInfo(authors));
      a.appendChild(addInfo(publisher));
      a.appendChild(addInfo(price));
      a.appendChild(addInfo(sale_price));

      //a 태그를 li 태그에 추가 
      li.appendChild(a);
      //li 태그를 list 태그에 추가
      list.appendChild(li);
    });
  }
}

/*검색 폼의 submit 이벤트 - 신규검색*/
document.querySelector("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault();

  //입력된 검색어를 갖고와서 공백 없앰.
  const queryField = document.querySelector("#query");
  queryKeyword = queryField.value.trim();

  /* 결과 문서 정렬 방식 */
  const sourceField = document.querySelector("#source");
  source = sourceField[sourceField.selectedIndex].value;

  console.log(source);
  /* 결과 페이지 번호 */
  const pageSize = document.querySelector("#size");
  size = pageSize[pageSize.selectedIndex].value;
  console.log(size);

  /*키워드가 입력되지 않았을 때 */
  if (!queryKeyword) {
    alert("검색어를 입력하세요");
    queryField.focus();
    return;
  }
  /*페이지 번호*/
  currentPage = 1;
  /*페이지 불러오기*/
  get_search();
});

/* 스크롤 이벤트 - 추가검색*/
window.addEventListener("scroll", (e) => {
  //마지막 페이지 이거나 이미 로딩바가 화면에 표시되고 있다면 처리 중단

  if (
    isEnd ||
    document.querySelector("#loading").classList.contains("active")
  ) {
    return;
  }

  //스크롤바의 Y좌표
  const scrollTop = window.scrollY;
  //   console.log(scrollTop);
  //웹 브라우저의 창 높이
  const windowHeight = window.screen.availHeight;
  //   console.log(windowHeight);
  //문서 높이
  const documentHeight = document.body.scrollHeight;
  //스크롤바의 반동 효과를 고려해서 더 커질수 있음

  if (scrollTop + windowHeight >= documentHeight) {
    //2페이지 이후는 추가검색
    currentPage++;
    get_search();
  }
});
