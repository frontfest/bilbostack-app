const talks = require('../data/talks');
const feedbacks = require('../data/feedbacks');
const questions = require('../data/questions');

async function getIndex(req, res) {
    const feedbackList = await feedbacks.all();
    
    const talkList = talks.all();

    const talkIndex = {};

    let feedbackCount = 0;

    talkList.forEach((talk) => {
        talk._5starsCount = 0;
        talk._4starsCount = 0;
        talk._3starsCount = 0;
        talk._2starsCount = 0;
        talk._1starsCount = 0;
        talk._average = 0;
        talk._feedbackCount = 0;
        talk._comments = [];
        talk._questions = [];
        talkIndex[talk.slug] = talk;
    });

    feedbackList.forEach((feedback) => {
        const talk = talkIndex[feedback.talkSlug];

        if (!talk) return;

        feedbackCount++;

        const stars = {
            5: '⭐⭐⭐⭐⭐',
            4: '⭐⭐⭐⭐',
            3: '⭐⭐⭐',
            2: '⭐⭐',
            1: '⭐'
        };

        if (feedback.comment) {
            talk._comments.push({
                rating: stars[feedback.rating],
                comment: feedback.comment
            });
        }

        talk[`_${feedback.rating}starsCount`]++;
    });

    talkList.forEach((talk) => {
        let total = 0;
        let count = 0;

        for(let i = 1; i <= 5; i++) {
            total += talk[`_${i}starsCount`] * i;
            count += talk[`_${i}starsCount`];
        }

        for(let i = 1; i <= 5; i++) {
            talk[`_${i}starsPercent`] = (talk[`_${i}starsCount`] / count) * 100;
        }

        talk._feedbackCount = count;

        if (count === 0) {
            return;
        }

        talk._average = Math.round((total / count) * 100) / 100;
    });

    res.render('pages/admin', { talks: talkList, feedbackCount });
}

async function getQuestions(req, res) {
    const talkQuestions = await questions.getByTalkSlug(req.talk.slug);
    res.render('pages/questions', { talk: req.talk, questions: talkQuestions });
}

module.exports = {
    getIndex,
    getQuestions
};
