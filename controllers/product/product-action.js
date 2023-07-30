const socialMenu = document.querySelector('.social__menu');
const adminList = document.querySelector('.admin__interaction');
const arrow = document.querySelector('.bx-chevron-down');

export function actionMenu() {
    socialMenu.addEventListener('click', () => {
        adminList.classList.toggle('active');
        arrow.classList.toggle('bx-chevron-up')
    })
}

