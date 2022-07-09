const router = require('express').Router();

const {
    addThought,
    removeThoughtById,
    addReaction,
    removeReactionById,
    getAllThoughts,
    getThoughtById
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);
router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThoughtById)
    .get(getThoughtById);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReactionById);

module.exports = router;

