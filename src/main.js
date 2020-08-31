import './css/styles.css';

function toggleInnerMenu(){
  let menu = document.querySelector('.menu-list');
  let class_names = menu.classList;
  class_names.add("hide");
}
function toggleMenu(){
  let menu = document.querySelector('.menu-list');
  let class_names = menu.classList;
  if(class_names.contains("hide")){
    class_names.remove("hide");
  }
  else{
    class_names.add("hide");
  }

}
document.querySelector('.close').addEventListener('click',toggleMenu,false);
document.querySelector('.closeInner').addEventListener('click',toggleInnerMenu,false);
