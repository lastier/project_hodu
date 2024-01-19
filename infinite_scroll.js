// const image_List = document.querySelector(".infinite_box");
// let pageToFetch = 1;
//
// async function fetchImages(pageNum){
//     try{
//         const response=await fetch('https://picsum.photos/v2/list?page='+pageNum+'&limit=6');
//         if(!response.ok){
//             throw new Error('네트워크 응답에 문제가 발생했습니다.');
//         }
//
//         const datas = await response.json();
//         console.log(datas)
//
//         makeImageList(datas);
//
//     }catch(error){
//         console.error('데이터를 가져오는데 문제가 발생했습니다.', error);
//     }
// }
// function makeImageList(datas){
//     datas.forEach((item)=>{
//         image_List.innerHTML = image_List.innerHTML+"<li><img src="+ item.download_url +" alt=''></li>";
//     })
// }
//
// image_List.addEventListener('scroll',()=>{
//     console.log('Scrolling...');
//     //스크롤이 상단으로부터 얼마나 이동했는지 알아야 한다.(뷰포트의 높이+스크롤된 길이)
//     //화면에 로딩된 페이지의 전체높이를 알아야 한다.
//     //뷰포트의 높이+스크롤된 길이 + 10 === 화면에 로딩된 페이지 전체높이
//
//     if(document.scrollHeight-10 < document.scrollTop + document.clientHeight){
//         fetchImages(pageToFetch+=1);
//     }
// });
//
// fetchImages();

// const infinityScroll = () => {
//     console.log('scroll!');
// }
//
// observer.observe(document.querySelector(".infinite_box"));


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