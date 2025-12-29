const express = require('express');
const { getComments, createComment, getComment, deleteComment, updateComment } = require('../controller/comments.controller');
const protect = require('../middlewares/auth.middleware');

const commentsRouter = express.Router();

commentsRouter
    .route('/')
    .get(getComments)
    .post(protect, createComment)

commentsRouter
    .route('/:id')
    .get(getComment)
    .delete(protect, allowedTo("admin", "moderator"),deleteComment)
    .patch(protect, allowedTo("admin", "moderator"), updateComment)

module.exports = commentsRouter;