Vue.component("avatar", {
	props: ["avatar"],
	mounted: function() {},
	methods: {
		getRandomChoice(items) {
			const itemsLength = Object.entries(items).length;
			return Object.entries(items)[
				Math.floor(Math.random() * itemsLength)
			][1];
		}
	},
	data() {
		return {};
	},
	computed: {
		cssVars() {
			return {
				"--avataaar-hair-color":
					this.avatar.hairColor === "random"
						? this.getRandomChoice(HAIR_COLORS)
						: HAIR_COLORS[this.avatar.hairColor],
				"--avataaar-facial-hair-color":
					this.avatar.facialHairColor === "random"
						? this.getRandomChoice(HAIR_COLORS)
						: HAIR_COLORS[this.avatar.facialHairColor],
				"--avataaar-hat-color":
					this.avatar.topColor === "random"
						? this.getRandomChoice(HAT_AND_SHIRT_COLORS)
						: HAT_AND_SHIRT_COLORS[this.avatar.topColor],
				"--avataaar-shirt-color":
					this.avatar.clotheColor === "random"
						? this.getRandomChoice(HAT_AND_SHIRT_COLORS)
						: HAT_AND_SHIRT_COLORS[this.avatar.clotheColor]
			};
		},
		isCircleValue() {
			return this.avatar.isCircle;
		},
		topTypeValue() {
			return this.avatar.topType === "random"
				? this.getRandomChoice(Object.keys(topTypes))
				: this.avatar.topType;
		},
		accessoriesTypeValue() {
			return this.avatar.accessoriesType === "random"
				? this.getRandomChoice(Object.keys(accessoriesTypes))
				: this.avatar.accessoriesType;
		},
		facialHairTypeValue() {
			return this.avatar.facialHairType === "random"
				? this.getRandomChoice(Object.keys(facialHairTypes))
				: this.avatar.facialHairType;
		},
		clotheTypeValue() {
			console.log(this.avatar.clotheType);
			return this.avatar.clotheType === "random"
				? this.getRandomChoice(Object.keys(clothesType))
				: this.avatar.clotheType;
		},
		eyeTypeValue() {
			return this.avatar.eyeType === "random"
				? this.getRandomChoice(Object.keys(eyeTypes))
				: this.avatar.eyeType;
		},
		eyebrowTypeValue() {
			return this.avatar.eyebrowType === "random"
				? this.getRandomChoice(Object.keys(eyebrowTypes))
				: this.avatar.eyebrowType;
		},
		mouthTypeValue() {
			return this.avatar.mouthType === "random"
				? this.getRandomChoice(Object.keys(mouthTypes))
				: this.avatar.mouthType;
		},
		skinColorValue() {
			return this.avatar.skinColor === "random"
				? this.getRandomChoice(Object.keys(SKIN_COLORS))
				: this.avatar.skinColor;
		},
		graphicTypeValue() {
			return this.avatar.graphicType === "random"
				? this.getRandomChoice(Object.keys(GraphicShirtTypes))
				: this.avatar.graphicType;
		}
	},
	template: "#vue-avatar"
});
