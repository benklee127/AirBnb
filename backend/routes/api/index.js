// backend/routes/api/index.js
const router = require('express').Router();
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);


//TEST ROUTES
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie tester
// router.get('/set-token-cookie', async (_req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         }
//     });
//     setTokenCookie(res, user);
//     return res.json({ user: user });
// });

// //test restore user
// router.get(
//     '/restore-user',
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// //test require auth
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

module.exports = router;
