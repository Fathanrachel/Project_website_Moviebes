function active() {
  document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('ul li a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

function toggleSidebar() {
  const sideNav = document.querySelector('.side-nav');
  sideNav.style.left = sideNav.style.left === '0px' ? '-250px' : '0px';
}

function uncheckAllCheckboxes(element) {
  var checkboxes = element.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}

document.getElementById('uncheckCategories').addEventListener('click', function (event) {
  event.preventDefault();
  var categoriesSection = document.querySelector('.genre-selection .check-box:nth-child(2)');
  uncheckAllCheckboxes(categoriesSection);
});

document.getElementById('uncheckServices').addEventListener('click', function (event) {
  event.preventDefault();
  var servicesSection = document.querySelector('.genre-selection .check-box:nth-child(4)');
  uncheckAllCheckboxes(servicesSection);
});

function search(){
  const value = document.querySelector('input').value;
  const iconSearch = document.querySelector('.search-icon');

  if(value !== ''){
    iconSearch.style.display = 'none';
  } else {
    iconSearch.style.display = 'block';
  }

}

function tampilkanRating(elemen) {
  const elemenRating = elemen.querySelector('.rating');
  if (elemenRating) {
    elemenRating.style.display = 'block';
  }
}

function sembunyikanRating(elemen) {
  const elemenRating = elemen.querySelector('.rating');
  if (elemenRating) {
    elemenRating.style.display = 'none';
  }
}


active();
toggleSidebar();
uncheckAllCheckboxes();
tampilkanRating();
sembunyikanRating();

