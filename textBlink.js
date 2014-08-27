/*!
 * jQuery Blink Plugin v1.0
 * http://www.thesaurabhgupta.in/
 * 2014 Saurabh Gupta
 * Requires:
 * jQuery v1.4.2 or later
 */

(function($){
    $.fn.textBlink=function(options){
        
        var settings =$.extend({
            addclass:"",
            delay:1000
        },options);
        

        return this.each(function(){
            var obj = $(this);
            setInterval(function(){
                
                if($(obj).hasClass(settings.addclass)){
                    $(obj).removeClass(settings.addclass);
                }else{
                    $(obj).addClass(settings.addclass);
                }
            },settings.delay);
        });
        
    }
    
}(jQuery));

