Vue.component("top-nav", {
	props: ["avatar", "tokens"],
	template: "#vue-top-nav",
	mounted: function() {},
	methods: {
		updateAvatar: function() {
			this.$emit("update-avatar", this.avatar);
		},
		doesNotWearHat: function() {
			return this.avatar.topType.includes("Hair");
		}
	}
});
