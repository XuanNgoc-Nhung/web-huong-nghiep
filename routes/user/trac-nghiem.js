const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../../middleware/auth');

// Tất cả các routes trong trac-nghiem đều yêu cầu đăng nhập
router.use(isAuthenticated);

// Lấy danh sách bài trắc nghiệm
router.get('/', (req, res) => {
    // TODO: Implement get quiz list logic
    res.render('user/trac-nghiem/index', {
        title: 'Danh sách bài trắc nghiệm',
        quizzes: [] // TODO: Get quizzes from database
    });
});

// Trang bắt đầu làm bài trắc nghiệm
router.get('/bat-dau', (req, res) => {
    res.render('user/trac-nghiem/bat-dau', {
        title: 'Bắt đầu làm bài trắc nghiệm'
    });
});

// Route cho bài trắc nghiệm sở thích đam mê
router.get('/so-thich-dam-me', (req, res) => {  
    res.render('user/trac-nghiem/so-thich-dam-me', {
        title: 'Trắc nghiệm sở thích đam mê',
        questions: [1,2,3,4,5,6,7,8,9,10]
    });
});
// Route cho kỹ năng và khả năng
router.get('/ky-nang-kha-nang', (req, res) => {  
    res.render('user/trac-nghiem/ky-nang-kha-nang', {
        title: 'Kỹ năng, khả năng',
        questions: [1,2,3,4,5,6,7,8,9,10]
    });
});
// Route cho môi trường làm việc
router.get('/moi-truong-lam-viec', (req, res) => {  
    res.render('user/trac-nghiem/moi-truong-lam-viec', {
        title: 'Môi trường làm việc',
        questions: [1,2,3,4,5,6,7,8,9,10]
    });
});
// Route cho môi trường làm việc
router.get('/moi-truong-lam-viec', (req, res) => {  
    res.render('user/trac-nghiem/moi-truong-lam-viec', {
        title: 'Môi trường làm việc',
        questions: [1,2,3,4,5,6,7,8,9,10]
    });
});
// Route cho ngành phù hợp  
router.get('/nganh-phu-hop', (req, res) => {  
    res.render('user/trac-nghiem/nganh-phu-hop', {
        title: 'Ngành phù hợp',
        questions: [1,2,3,4,5,6,7,8,9,10]
    });
});
// Lấy chi tiết một bài trắc nghiệm
router.get('/:id', (req, res) => {
    // TODO: Implement get quiz detail logic
    res.json({ message: 'Get quiz detail route', quizId: req.params.id });
});

// Bắt đầu làm bài trắc nghiệm
router.post('/:id/start', (req, res) => {
    // TODO: Implement start quiz logic
    res.json({ message: 'Start quiz route', quizId: req.params.id });
});

// Nộp bài trắc nghiệm
router.post('/:id/submit', (req, res) => {
    // TODO: Implement submit quiz logic
    res.json({ message: 'Submit quiz route', quizId: req.params.id });
});

// Xem kết quả bài trắc nghiệm
router.get('/:id/result', (req, res) => {
    // TODO: Implement get quiz result logic
    res.json({ message: 'Get quiz result route', quizId: req.params.id });
});

// Lấy lịch sử làm bài trắc nghiệm của người dùng
router.get('/history', (req, res) => {
    // TODO: Implement get quiz history logic
    res.json({ message: 'Get quiz history route' });
});


module.exports = router; 