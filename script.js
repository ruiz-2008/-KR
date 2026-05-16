// إخفاء شاشة التحميل بعد فترة زمنية
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // مدة الانتظار 3 ثواني
});