window.addEventListener('load', start);

const sidebarButton = document.getElementById('sidebar-button');
const navContent = document.getElementById('navcontent');
const navItens = document.querySelectorAll('.nav-item');

function start() {
  window.addEventListener('resize', sideNavSize);
  sidebarButton.addEventListener('click', fullPageNav);
  navItens.forEach((navItem) => navItem.addEventListener('click', fullPageNav));
}

const fullPageNav = () => {
  if (
    !window.matchMedia('(min-width: 600px)').matches &&
    !window.matchMedia('(min-width: 1200px)').matches
  ) {
    if (navContent.style.width === '0%' || navContent.style.width === '') {
      navContent.style.width = '100%';
    } else {
      navContent.style.width = '0%';
    }
  }
};

const sideNavSize = () => {
  if (
    window.matchMedia('(min-width: 600px)').matches ||
    window.matchMedia('(min-width: 1200px)').matches
  ) {
    navContent.style.width = '35%';
  } else if (navContent.style.width === '35%') {
    navContent.style.width = '0%';
  }
};
