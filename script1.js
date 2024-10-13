// 定義顏色名稱及對應的顏色
const colors = [
    { name: '粉紅色', color: '#ff69b4' },
    { name: '淡藍色', color: '#87ceeb' },
    { name: '橙色', color: '#ffa500' },
    { name: '綠色', color: '#32cd32' },
    { name: '藍紫色', color: '#8a2be2' },
    { name: '番茄紅', color: '#ff6347' },
    { name: '橙紅色', color: '#ff4500' },
    { name: '道奇藍', color: '#1e90ff' },
    { name: '暗綠藍', color: '#00ced1' },
    { name: '深粉紅', color: '#ff1493' }
];

// 選擇所有顏色方塊
const colorBoxes = document.querySelectorAll('.color-box');

// 當方塊被點擊時，隨機選擇顏色並更改方塊顏色和名稱
colorBoxes.forEach((box) => {
    box.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // 將方塊的背景顏色設置為隨機選擇的顏色
        box.style.backgroundColor = randomColor.color;
        // 顯示顏色名稱
        box.textContent = randomColor.name;
        // 設置文字顏色，以便在深色背景上依然能夠清晰顯示
        box.style.color = '#ffffff';
        box.style.fontSize = '14px';
        box.style.display = 'flex';
        box.style.justifyContent = 'center';
        box.style.alignItems = 'center';
    });
});
// 選擇浮動視窗元素
const modal = document.getElementById('luck-modal');
const closeBtn = document.querySelector('.close');

// 訂閱按鈕的事件處理
document.getElementById('subscribe-btn').addEventListener('click', function() {
    // 顯示浮動視窗
    modal.style.display = 'flex';
});

// 留言板提交事件處理
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單提交後刷新頁面
    // 顯示浮動視窗
    modal.style.display = 'flex';
});

// 當點擊關閉按鈕時，隱藏浮動視窗
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// 點擊窗口外部時，關閉浮動視窗
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
