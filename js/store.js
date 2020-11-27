const store = new Vuex.Store({
    state: {
        topics: window.course.topics,
        tokens: 1000
    },
    mutations: {
        increment: function (state, n) {
            console.log(state, n)
            state.tokens += n;
        },
        updateTopic: function (state, data) {
            var topics = state.topics.filter(topic => topic.id === data.topicId)
            var topic = topics[0]

            var subtopics = topic.subtopics.filter(subtopic => subtopic.id === data.subtopicId)
            var subtopic = subtopics[0]
            subtopic['isCompleted'] = true
            console.log(state, data, topic, subtopic)
        },
    }
})