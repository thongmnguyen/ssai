const LS_AVATAR_KEY = "LS_AVATAR_KEY";
const LS_TOPIC_KEY = "LS_TOPIC_KEY";
const LS_TOKENS_KEY = "LS_TOKENS_KEY";
var app = new Vue({
	el: "#app",
	data: {
		tokens: 0,
		avatar: {
			isCircle: true,
			circleColor: "#f8f8f8",
			topType: "NoHair",
			accessoriesType: "Blank",
			facialHairType: "Blank",
			clotheType: "Blank",
			eyeType: "Default",
			eyebrowType: "Default",
			mouthType: "Default",
			skinColor: "Light",
			graphicType: "Deer",
			hairColor: "Black",
			facialHairColor: "BrownDark",
			topColor: "PastelYellow",
			clotheColor: "Blue03"
		},
		topics: [
			{
				id: 1,
				token: 100,
				title: "Topic 1",
				body:
					" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste possimus, labore distinctio assumenda officia quo non molestiae eius.",
				completed: false
			},
			{
				id: 2,
				token: 200,
				title: "Topic 2",
				body:
					" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste possimus, labore distinctio assumenda officia quo non molestiae eius.",
				completed: false
			},
			{
				id: 3,
				token: 300,
				title: "Game",
				body:
					" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste possimus, labore distinctio assumenda officia quo non molestiae eius.",
				completed: false
			},
			{
				id: 4,
				token: 400,
				title: "Scenarios",
				body:
					" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste possimus, labore distinctio assumenda officia quo non molestiae eius.",
				completed: false
			},
			{
				id: 5,
				token: 500,
				title: "Quiz",
				body:
					" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste possimus, labore distinctio assumenda officia quo non molestiae eius.",
				completed: false
			},
			{
				id: 6,
				token: 1000,
				title: "Assessment",
				body:
					" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste possimus, labore distinctio assumenda officia quo non molestiae eius.",
				completed: false
			}
		]
	},
	mounted: function() {
		if (localStorage.getItem(LS_AVATAR_KEY)) {
			try {
				this.avatar = JSON.parse(localStorage.getItem(LS_AVATAR_KEY));
			} catch (e) {
				localStorage.removeItem(LS_AVATAR_KEY);
			}
		}

		if (localStorage.getItem(LS_TOPIC_KEY)) {
			try {
				this.topics = JSON.parse(localStorage.getItem(LS_TOPIC_KEY));
			} catch (e) {
				localStorage.removeItem(LS_TOPIC_KEY);
			}
		}

		if (localStorage.getItem(LS_TOKENS_KEY)) {
			try {
				this.tokens = JSON.parse(localStorage.getItem(LS_TOKENS_KEY));
			} catch (e) {
				localStorage.removeItem(LS_TOKENS_KEY);
			}
		}

	},
	methods: {
		updateAvatar(data) {
			var parsed = JSON.stringify(this.avatar);
			localStorage.setItem(LS_AVATAR_KEY, parsed);
		},
		updateTopic(id) {
			const found = this.topics.find(element => element.id === id);

			if (!found.completed) {
				found.completed = true;
				this.tokens += found.token;

				var parsed = JSON.stringify(this.topics);

				localStorage.setItem(LS_TOPIC_KEY, parsed);
				localStorage.setItem(LS_TOKENS_KEY, this.tokens);
			}
		}
	}
});


cssVars({
  onlyLegacy: false,

})