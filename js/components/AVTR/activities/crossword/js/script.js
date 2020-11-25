// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
			{
				clue: "Procedure required at the end of each day ",
				answer: "cleardesk",
				position: 1,
				orientation: "across",
				startx: 3,
				starty: 1
			},
			{
				clue:
					"By using the good decision-making model and including all the elements of a good decision you are much less likely to have your decisions ____________ or contested ",
				answer: "questioned",
				position: 2,
				orientation: "across",
				startx: 1,
				starty: 9
			},
			{
				clue:
					"Disclosure of this identity, or information leading to their identity, may result in an officer’s imprisonment for 6 months, or a penalty of 60 units, or both",
				answer: "whistleblower",
				position: 3,
				orientation: "across",
				startx: 4,
				starty: 6
			},
			{
				clue:
					"In simple terms, fraud generally requires three elements: you cannot commit fraud by accident; it must be intentional ",
				answer: "intent",
				position: 4,
				orientation: "across",
				startx: 10,
				starty: 11
			},

			{
				clue: "Key to access ATO property, assets and information ",
				answer: "buildingpass",
				position: 5,
				orientation: "down",
				startx: 6,
				starty: 4
			},
			{
				clue:
					"In simple terms, fraud generally requires three elements: a dishonest act or omission",
				answer: "deception",
				position: 7,
				orientation: "down",
				startx: 8,
				starty: 1
			},
			{
				clue:
					"Your unique identification to grant access to information and applications you need to do your work",
				answer: "userid",
				position: 8,
				orientation: "down",
				startx: 10,
				starty: 4
			},
			{
				clue:
					"Physical Security Management recommends you __________your building pass when leaving an ATO site",
				answer: "remove",
				position: 10,
				orientation: "down",
				startx: 13,
				starty: 3
			},
			{
				clue:
					"In simple terms, fraud generally requires three elements: this can be real or intangible ",
				answer: "benefit",
				position: 11,
				orientation: "down",
				startx: 15,
				starty: 5
			}
		];

		$("#puzzle-wrapper").crossword(puzzleData);
	});
})(jQuery);
