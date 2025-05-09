// Giỏ hàng đơn giản
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            count++;
            cartCount.textContent = count;

            // Hiệu ứng khi thêm vào giỏ
            this.textContent = 'Đã thêm!';
            this.style.backgroundColor = '#2ecc71';

            setTimeout(() => {
                this.textContent = 'Thêm vào giỏ';
                this.style.backgroundColor = '#3498db';
            }, 1000);
        });
    });

    // Giới Thiệu
    document.querySelector('.scroll-button').addEventListener('click', function () {
        const footer = document.getElementById('company-footer');
        footer.scrollIntoView({ behavior: 'smooth' });
    });

    // Xử lý modal đăng nhập/đăng ký
    const userIcon = document.querySelector('.icon i');
    const modal = document.getElementById('authModal');
    const closeBtn = document.querySelector('.close');

    // Hiển thị modal khi nhấp vào biểu tượng người dùng
    userIcon.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    // Ẩn modal khi nhấp vào nút đóng
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Ẩn modal khi nhấp ra ngoài modal
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Xử lý form (để ngăn gửi form mặc định - bạn có thể thêm logic xử lý form sau)
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Đăng nhập thành công! (Chức năng demo)');
        modal.style.display = 'none';
    });

    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Đăng ký thành công! (Chức năng demo)');
        modal.style.display = 'none';
    });
});

//chuyển đổi giữa các tab Đăng nhập và Đăng ký
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`).classList.add('active');
}