const express = require('express');
const { getComments, createComment, getComment, deleteComment, updateComment } = require('../controller/comments.controller');

const commentsRouter = express.Router();

commentsRouter
    .route('/')
    .get(getComments)
    .post(createComment)

commentsRouter
    .route('/:id')
    .get(getComment)
    .delete(deleteComment)
    .patch(updateComment)

module.exports = commentsRouter;