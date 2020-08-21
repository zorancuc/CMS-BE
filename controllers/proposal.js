const db = require('../services/firebase/firebase');

module.exports = {
    createNewProposal: async (req, res) => {
        try {
            let proposal = req.body;
            let result;
            if (proposal.network == "kovan") {
                result = await db.ref('proposals')
                .child(proposal.topicKey)
                .set(proposal);
            } else if (proposal.network == "mainnet") {
                result = await db.ref('proposals_mainnet')
                .child(proposal.topicKey)
                .set(proposal);
            }
            
            res.json({
                success: true,
                response: result
            })
        } catch (ex) {
            console.log(ex);
            res.status(400).json({
                message: ex.message
            });
        }
    },

    getProposals: async (req, res) => {
        try {
            let ref;
            if (req.query.network == 'kovan') 
                ref = db.ref('proposals');
            else if (req.query.network == 'mainnet')
                ref = db.ref('proposals_mainnet');
            let proposals = [];
            ref.once('value').then(function(snapshot) {
                let jsonProposals = snapshot.val();
                for (let key in jsonProposals) {
                    proposals.push(jsonProposals[key]);
                }
                res.send(proposals);
            })


        } catch (ex) {
            console.log(ex);
            res.status(400).json({
                message: ex.message
            });
        }
    }
}
