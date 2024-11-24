const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "JAVA",
				weight: 12.3
			}, {
				text: "PYTHON",
				weight: 8
			}, {
				text: "AWS",
				weight: 14
			}, {
				text: "SPRING",
				weight: 6
			}, {
				text: "MICRONAUT",
				weight: 7
			}, {
				text: "SYSTEM DESIGN",
				weight: 10
			}, {
				text: "DS ALGO",
				weight: 4
			}, {
				text: "PSQL",
				weight: 15
			}, {
				text: "GARDLE",
				weight: 7
			},{
               text: "WORKFLOW ENGINE",
				weight: 7 
            }
            
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 10});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I am a backend developer with data science skills .", "love everything about code.", "also teach programming to people.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
