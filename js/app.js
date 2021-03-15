const $btn_share=document.getElementById("icono");
const $share=document.querySelector(".card__footer-icono");
const $share_icon=document.querySelector(".card__footer-icono img");
const $rs=document.querySelector(".container__rs");
$btn_share.addEventListener("click",e=>{
  e.preventDefault();
  $rs.classList.toggle("active");
  $share.classList.toggle("share-active");
  $share_icon.classList.toggle("share-icon-active");

})