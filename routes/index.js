var express = require('express');
var path = require('path');
var router = express.Router();
const { validateToken } = require('../services/middleware');
var proposal = require('../controllers/proposal');

const eth = {
    'v1': require('./eth/v1')
};

const btc = {
    'v1': require('./btc/v1')
}

const bridge = {
    'v1': require('./bridge/v1')
};

router.use('/api/auth', require('./auth'));
// router.use('/api/bridge/v1', validateToken, bridge['v1']);
router.use('/api/eth/v1', validateToken, eth['v1']);
// router.use('/api/eth/v1', eth['v1']);
router.use('/api/btc/v1', validateToken, btc['v1']);
// router.use('/api/btc/v1', btc['v1']);
router.post('/api/proposal/v1/newProposal', proposal.createNewProposal);
router.get('/api/proposal/v1/proposals', proposal.getProposals);

router.get('/*', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/public/index.html'));
});

module.exports = router;
