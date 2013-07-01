(function ( $ ) {
    
// Set up hex digit array
    
var hexDigits = new Array     ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
/* Function to convert RGB to HEX */
    
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}


$.fn.cycleColors = function(cssProperty,arrayToCycle,milliseconds) {
    
    var jqueryObj = this;
    setInterval(function(){
        
       /* Loop through each color */
       
       for (var i = 0; i < arrayToCycle.length; i++) {
           var rgb = jqueryObj.css(cssProperty);
           console.log(rgb2hex(rgb) + " == "+ arrayToCycle[i]);
           if(rgb2hex(rgb) == arrayToCycle[i]){
               
               if(i == arrayToCycle.length - 1){
                   console.log('Setting css color to',arrayToCycle[0]);
                   jqueryObj.css(cssProperty,arrayToCycle[0]);
                   break;
               }else{
                   console.log('Setting css color to',arrayToCycle[i + 1]);
                   jqueryObj.css(cssProperty,arrayToCycle[i+1]);
                   break;
               }
              
               
           }
       }            
    
    },milliseconds);
        
    return this;
};

    
}( jQuery ));