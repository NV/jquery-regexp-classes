(function(hasClass) {

	jQuery.fn.hasClass = function hasClassRegExp( selector ) {
		if ( selector && typeof selector.test === "function" ) {
			for ( var i = 0, l = this.length; i < l; i++ ) {
				var classNames = this[i].className.split( /\s+/ );
				for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
					if (selector.test( classNames[c]) ) {
						return true;
					}
				}
			}
            return false;
		} else {
			return hasClass.call(this, selector);
		}
	}

})(jQuery.fn.hasClass);
