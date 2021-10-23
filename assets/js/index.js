
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

/* Mobile Menu */ 
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight; // Lấy chiều cao của header là 46px

// Đóng - Mở mobile menu
mobileMenu.onclick = function(){
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed){
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng khi chọn phần tử trong menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i=0; i<menuItems.length;i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function(event){
        var isParenMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParenMenu){
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}