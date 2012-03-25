/*global QUnit:true, module:true, test:true, asyncTest:true, expect:true*/
/*global start:true, stop:true ok:true, equal:true, notEqual:true, deepEqual:true*/
/*global notDeepEqual:true, strictEqual:true, notStrictEqual:true, raises:true*/
(function($) {

  $(function(){
    var flags = [];

    $('#test-1 img').retina({overridePixelRation: true});
    $('#test-2 img[data-retina]').retina({checkIfImageExists: true, overridePixelRation: true});
    $('#test-3 img.retina').retina({customFileNameCallback: function(obj){ return 'http://farm5.staticflickr.com/4114/4916734631_f2b8f2e296_z.jpg'; }, overridePixelRation: true});

    module("$.fn.retina()");
    test("Test the signatures", function() {

      ok($.isFunction($.fn.retina), "$.fn.retina exists and is a function" );

      equal( (typeof $.fn.retina({})), "object", "$.fn.retina({}) returns an object" );

      equal( (typeof $.fn.retina()), "object", "$.fn.retina() returns an object" );

      equal( (typeof $.fn.retina(null)), "object", "$.fn.retina(null) returns an object" );

      equal( (typeof $.fn.retina(undefined)), "object", "$.fn.retina(null) returns an object" );

    });
    
    test("Test retina images were swapped", function() {
      
      equal( $("#test-1 img.retina-on").length, 1, "Retina image swapped out successfully" );
      equal( $("#test-2 img.retina-on").length, 0, "Not allowed to AJAX to Flickr. Retina image will not have been swapped" );
      equal( $("#test-3 img.retina-on").length, 1, "Retina image swapped out successfully" );
    });
  });

}(jQuery));
