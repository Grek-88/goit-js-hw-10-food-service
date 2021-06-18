import menu from '../menu.json';
import createMenu from '../template/menu.hbs';

document.querySelector('.js-menu').innerHTML = createMenu(menu);