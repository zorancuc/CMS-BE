// this is going to store Firebase realtime database API code
const db = require('./firebase');

// ##########3 user API

// create an user and store it at users/id path (it's an asynchronous func)

module.exports = {
    createNewProposal: (proposal) =>
        db
        .ref('proposals')
        .child(proposal.topicKey)
        .set(proposal)
}

// other APIs could come below
