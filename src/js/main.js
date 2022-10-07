const ham_btn = document.querySelector('.hamburger');
const ham_content = document.querySelector('.hamburger-content');

ham_btn.addEventListener('click', function(){
  ham_content.classList.toggle('slide');
});
