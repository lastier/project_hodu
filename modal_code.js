const modal = document.querySelector(".modal");
const modal_btn = document.querySelector('.subs_btn');

modal_btn.addEventListener('click', ()=>{
    modal.style.display="flex";

    const modal_btn2 = document.querySelector('.close_modal');
    modal_btn2.addEventListener('click', ()=>{
        modal.style.display="none";
    });
});