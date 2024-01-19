//modal 창 기능
const modal = document.querySelector(".modal");
const modal_btn = document.querySelector('.subs_btn');

modal_btn.addEventListener('click', ()=>{
    modal.style.display="flex";

    const modal_btn2 = document.querySelector('.close_modal');
    modal_btn2.addEventListener('click', ()=>{
        modal.style.display="none";
    });
});


var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.445397, 126.571129), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

//무한 스크롤 페이지
// 이미지를 로딩하는 함수
function loadImage() {
    // 로딩할 이미지의 개수를 가져옵니다.
    const loadedImages = document.querySelector(".infinite_box ul").querySelectorAll("li").length;

    // 로딩할 이미지의 개수가 6개를 넘으면
    if (loadedImages >= 6) {
        return;
    }

    // 이미지 URL을 가져옵니다.
    const url = `https://picsum.photos/v2/list?page=${loadedImages / 6 + 2}&limit=6`;

    // 이미지를 로딩합니다.
    fetch(url).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                for (const image of data) {
                    // 이미지를 div 내에 추가합니다.
                    const li = document.createElement("li");
                    const img = document.createElement("img");
                    img.src = image.url;
                    li.appendChild(img);
                    document.querySelector(".infinite_box").appendChild(li);

                    // 이미지 정렬을 3*3으로 합니다.
                    const infiniteBox = document.querySelector(".infinite_box");
                    infiniteBox.querySelectorAll("li").forEach((li, index) => {
                        li.style.gridRow = `span ${Math.floor(index / 3)}`;
                        li.style.gridColumn = `span ${index % 3}`;
                    });
                }
            });
        }
    });
}

// 초기 이미지 6개 로딩
loadImage();

// 더보기 버튼을 클릭하면 이미지를 로딩합니다.
document.querySelector(".show_more_btn").addEventListener("click", function() {
    loadImage();
});