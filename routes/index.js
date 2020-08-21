var express = require('express');
var path = require('path');
var router = express.Router();
// const { validateToken } = require('../services/middleware');
var proposal = require('../controllers/proposal');

router.use('/api/auth', require('./auth'));
// router.use('/api/btc/v1', validateToken, proposal.createNewProposal);
router.post('/api/proposal/v1/newProposal', proposal.createNewProposal);
router.get('/api/proposal/v1/proposals', proposal.getProposals);

// router.get('/*', function (req, res) {
//     res.sendFile(path.join(process.cwd() + '/public/index.html'));
// });

module.exports = router;
