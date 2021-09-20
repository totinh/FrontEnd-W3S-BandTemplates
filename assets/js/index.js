
/*Modal Buy*/ 
const buyBtns = document.querySelectorAll('.js-buy-ticket') // lay tat ca cac class js-buy-ticket
const modal = document.querySelector('.js-modal') // lay class modal ra
const modalContainer = document.querySelector('.js-modal-container')
const modal_close = document.querySelector('.js-modal-close')

function showBuyTickets(){
    modal.classList.add('open')
}

function hideBuyTickets(){
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modal_close.addEventListener('click', hideBuyTickets)

modal.addEventListener('click',hideBuyTickets) // Nhan vao vung trong dong form lai

// Ngung noi bot vung chon thuoc tinh the cha
modalContainer.addEventListener('click',function (event){
    event.stopPropagation()
})