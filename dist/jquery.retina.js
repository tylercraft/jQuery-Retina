/*! jQuery Retina Plugin - v1.0 - 3/25/2012
* https://github.com/tylercraft/jQuery-Retina
* Copyright (c) 2012 Tyler Craft; Licensed MIT, GPL */

/*
 * Twitter Search Plugin jquery.retina.js
 * https://github.com/tylercraft/jQuery-Retina
 *
 * Copyright (c) 2012 tylercraft.com
 * Author: Tyler Craft
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/tylercraft/jQuery-Retina
 *
 */
(function( $ ) {
  
  $.fn.retina = function( options ) {
      
    var settings = {
                      // Check for data-retina attribute. If exists, swap out image
                      dataRetina: true,
                      // Suffix to append to image file name
                      suffix: "",
                      // Check if image exists before swapping out
                      checkIfImageExists: false,
                      // Callback function if custom logic needs to be 
                      // applied to image file name
                      customFileNameCallback: "",
                      // override window.devicePixelRatio
                      overridePixelRation: false
                    };
  
    if(options){
      jQuery.extend(settings,options);
    }
  
    var retinaEnabled = false;
    
    // If retina enabled only
    if(settings.overridePixelRation || window.devicePixelRatio >= 1.2) {
      retinaEnabled = true;
    }
    
    // Begin to iterate over the jQuery collection that the method was called on
    return this.each(function () {
      
      // Cache `this`
      var $this = $(this);
      
      $this.addClass('retina-off');
      
      if(!retinaEnabled){
        return false;
      }

      var newImageSrc = '';
    
      // Get data-retina attribute
      if(settings.dataRetina && $this.attr('data-retina')){
        newImageSrc = $this.attr('data-retina');
      }

      if(settings.suffix){
        // If there is a data-retina attribute, suffix that
        // Otherwise, suffix the primary image
        if(!newImageSrc){
          newImageSrc = $this.attr('src');
        }
      }
    
      if(settings.suffix){
        // Get filename sans extension
        var baseFileName = newImageSrc.replace(/.[^.]+$/,'');
        var baseFileExtension = newImageSrc.replace(/^.*\./,'');
      
        newImageSrc = baseFileName + settings.suffix + '.' + baseFileExtension;
      }
    
      if(settings.customFileNameCallback){
        newImageSrc = settings.customFileNameCallback($this);
      }

      if(settings.checkIfImageExists && newImageSrc){
        $.ajax({url: newImageSrc, type: "HEAD", success: function() {
          $this.attr('src',newImageSrc);
          $this.removeClass('retina-off');
          $this.addClass('retina-on');
        }});
      }else if(newImageSrc){
        $this.attr('src',newImageSrc);
        $this.removeClass('retina-off');
        $this.addClass('retina-on');
      }
    });
  };
}(jQuery));
