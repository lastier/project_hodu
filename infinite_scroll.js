//무한 스크롤 기능
const showMoreBtn = document.querySelector(".show_more_btn");
const infinite_box = document.querySelector(".infinite_box");
let pageToFetch = 1;
let count = 0;
let timer;

showMoreBtn.addEventListener('click', function (){
    if(count%2 === 0) {
        fetchImages(pageToFetch++);
        window.addEventListener('scroll', infinityScroll);
        showMoreBtn.innerText = 'Stop';
    }else {
        window.removeEventListener('scroll', infinityScroll);
        showMoreBtn.innerText = 'Show more';
    }
    count++;
});

async function fetchImages(pageNum) {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit=6');
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function makeImageList(datas) {
    for(let i=0; i<datas.length; i+=3) {
        infinite_box.innerHTML +=
            "<div class='infinite_image'>" +
            "<img src=" + datas[i].download_url + " alt=''>" +
            "<img src=" + datas[i+1].download_url + " alt=''>" +
            "<img src=" + datas[i+2].download_url + " alt=''>" +
            "</div>"
    }
}

function infinityScroll() {
    if (window.innerHeight + document.documentElement.scrollTop + 750 >= document.documentElement.offsetHeight) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fetchImages(pageToFetch++);
            }, 500);
        }
    }
}