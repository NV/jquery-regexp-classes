module("removeClass");

test("/state-/", function() {
	var elem = jQuery("<div class='state-open state-loading disabled'/>");
	elem.removeClass(/^state-/);
	equal(elem[0].className, "disabled");
});

test("/disabled/", function() {
	var elem = jQuery("<div class='state-open state-disabled disabled'/>");
	elem.removeClass(/disabled$/);
	equal(elem[0].className, "state-open");
});

test("/open state/", function() {
	var elem = jQuery("<div class='state-open state-loading disabled'/>");
	elem.removeClass(/open state/);
	equal(elem[0].className, "state-open state-loading disabled");
});

test("/.+/", function() {
	var elem = jQuery("<div class='state-open state-loading disabled'/>");
	elem.removeClass(/.+/);
	equal(elem[0].className, "");
});

test("{test: Function}", function() {
	var elem = jQuery("<div class='state-open state-loading disabled'/>");
	elem.removeClass({test: function(className) {
		return className.indexOf("-") > -1;
	}});
	equal(elem[0].className, "disabled");
});

test("string", function() {
	var elem = jQuery("<div class='state-open state-loading disabled'/>");
	elem.removeClass("state");
	equal(elem[0].className, "state-open state-loading disabled");
	elem.removeClass("state-loading");
	equal(elem[0].className, "state-open disabled");
	elem.removeClass("disabled state-open");
	equal(elem[0].className, "");
});

test("empty params", function() {
	var elem = jQuery("<div class='state-open state-loading disabled'/>");
	elem.removeClass();
	equal(elem[0].className, "");
});