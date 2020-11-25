Vue.component("topic-item", {
	props: ["topic"],
	template: "#vue-topic-card",
	methods: {
		viewTopic(id) {
			this.$emit("view-topic", id);
		}
	}
});
