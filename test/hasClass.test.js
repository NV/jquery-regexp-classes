module("hasClass");

test("RegExp", function() {
	var elem = jQuery("<div class='state-open state-loading disabled'/>");
	ok( elem.hasClass(/^state-/) );
	ok( elem.hasClass(/disabled$/) );
	ok( !elem.hasClass(/open state/) );
	ok( elem.hasClass(/.+/) );
});

test("{test: Function}", function() {
	var elem = jQuery("<div class='state-open state-loading disabled'/>");
	ok(
		elem.hasClass({test: function(className) {
			return className.indexOf("-") == -1;
		}})
	);
});

test("string", function() {
	var elem = jQuery("<div class='state-open state-loading disabled'/>");
	ok( elem.hasClass("state-open") );
	ok( elem.hasClass("disabled") );
	ok( !elem.hasClass("open state") );
});
