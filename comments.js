// Create web server using express router
// Use the comments controller to handle requests
// Exports the router

const express = require('express');
const commentsController = require('../controllers/comments');

const router = express.Router();

router.get('/comments', commentsController.getComments);
router.post('/comments', commentsController.createComment);
router.put('/comments/:id', commentsController.updateComment);
router.delete('/comments/:id', commentsController.deleteComment);

module.exports = router;
