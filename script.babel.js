window.addEventListener('load', start);

const sidebarButton = document.getElementById('sidebar-button');
const navContent = document.getElementById('navcontent');
const navItens = document.querySelectorAll('.nav-item');
const mobileWindow = window.matchMedia('(max-width: 600px)').matches;

function start() {
  window.addEventListener('resize', sideNavSize);
  sidebarButton.addEventListener('click', fullPageNav);
  navItens.forEach((navItem) => navItem.addEventListener('click', fullPageNav));
}

const fullPageNav = () => {
  if (mobileWindow) {
    if (navContent.style.width === '0%' || navContent.style.width === '') {
      navContent.style.width = '100%';
    } else {
      navContent.style.width = '0%';
    }
  }
};

const sideNavSize = () => {
  if (!mobileWindow) {
    navContent.style.width = '35%';
  } else if (navContent.style.width === '35%') {
    navContent.style.width = '0%';
  }
};
