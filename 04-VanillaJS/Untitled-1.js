/*AJax 요청 후 결과를 화면에 HTML로 출력하는 함수*/
async function get_image_search() {
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
      json = await axios.get("https://dapi.kakao.com/v2/search/blog", {
        params: {
          query: queryKeyword,
          page: currentPage,
        },
        headers: {
          Authorization: "KakaoAK 76d2e46a76f3c4ffdf1b6b518a323d34",
        },
      });
    //  console.log(json);
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
      console.log(json);
      data.documents.map((v, i) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
  
        a.setAttribute("href", v.url);
        a.setAttribute("target", "_blank");
        a.setAttribute("title", v.title);
  
        const img = document.createElement("img");
        img.setAttribute("src", v.thumbnail);
  
        const h2 = document.createElement("h2");
        h2.innerHTML = v.blogname;
  
        const p = document.createElement("p");
        p.innerHTML = v.contents;
  
        const time = document.createElement("span");
        time.innerHTML = v.datetime;
  
        const Name = document.createElement("span");
        Name.innerHTML = v.blogname;
  
        a.appendChild(img);
        a.appendChild(h2);
        a.appendChild(p);
        a.appendChild(time);
        a.appendChild(Name);
  
        li.appendChild(a);
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
  
    if (!queryKeyword) {
      alert("검색어를 입력하세요");
      queryField.focus();
      return;
    }
    currentPage = 1;
    get_image_search();
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
    console.log(scrollTop);
    //웹 브라우저의 창 높이
    const windowHeight = window.screen.availHeight;
    console.log(windowHeight);
    //문서 높ㅁ이
    const documentHeight = document.body.scrollHeight;
    //스크롤바의 반동 효과를 고려해서 더 커질수 있음
  
    if (scrollTop + windowHeight >= documentHeight) {
      //2페이지 이후는 추가검색
      currentPage++;
      get_image_search();
    }
  });
  