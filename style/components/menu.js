const menu = document.querySelector('.menu_mobile')
const navbarActive = document.querySelector('.nav_container')
const spanTop = document.querySelector('.line_top')
const spanMid = document.querySelector('.line_mid')
const spanBot = document.querySelector('.line_bot')
const gift = document.querySelector('.gift')
const giftClose = document.querySelector('.close_gift')

menu.addEventListener('click', () => {
    spanTop.classList.toggle('active_top')
    spanMid.classList.toggle('active_mid')
    spanBot.classList.toggle('active_bot')
    navbarActive.classList.toggle('active_navbar')
})


giftClose.addEventListener('click', () => {
    gift.style.display = 'none'
})
