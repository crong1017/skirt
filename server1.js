const express = require('express');
const app = express();
const path = require('path');

// 處理上傳圖片的路由
app.post('/upload', upload.single('image'), (req, res) => {
    try {
        res.send(`文件上傳成功: ${req.file.path}`);
    } catch (err) {
        res.status(400).send('上傳失敗');
    }
});

// 處理根路徑
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page.html'));
});

// 啟動伺服器
app.listen(6002, () => {
    console.log('伺服器運行在 http://localhost:6002');
});
