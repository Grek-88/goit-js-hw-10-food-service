const checkBoxTheme = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.theme === 'true') {
    body.classList.add(Theme.LIGHT, Theme.DARK);
    checkBoxTheme.checked = true

} else {
    localStorage.setItem('theme', false);
    body.classList.add(Theme.LIGHT)
}

checkBoxTheme.addEventListener('change', changeTheme);

function changeTheme(ev) {
localStorage.setItem('theme', ev.target.checked)

body.classList.toggle(Theme.DARK);
};