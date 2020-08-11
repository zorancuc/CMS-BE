const db = require('../services/firebase/firebase');

module.exports = {
    createNewProposal: async (req, res) => {
        try {
            let proposal = req.body;
            let result = await db.ref('proposals')
                .child(proposal.topicKey)
                .set(proposal);

            console.log(result);

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
            let ref = db.ref('proposals');
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
