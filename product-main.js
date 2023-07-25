const socialMenu = document.querySelector('.social__menu');
const adminList = document.querySelector('.admin__list')
console.log(socialMenu);
console.log(adminList);
console.log(adminList.classList)

socialMenu.addEventListener('click', () => {
    adminList.classList.toggle('active');
})