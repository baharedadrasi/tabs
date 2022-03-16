const about = document.querySelector('.about');
const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    tabBtns.forEach(function (tabBtn) {
      tabBtn.classList.remove('active');
    });

    e.target.classList.add('active');
  }

  contents.forEach(function (content) {
    content.classList.remove('active');
  });

  const element = document.getElementById(id);
  element.classList.add('active');
});
