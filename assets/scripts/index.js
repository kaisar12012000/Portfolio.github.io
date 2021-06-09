//Scroll on click
var x = document.getElementById("scrollClick");

//-------JQUERY--------
$(document).ready(function(){
    //Add smooth scrolling to all links with given id
    $(x).on('click', function(event){
        //Make sure this.hash has a value before overriding default behaviour
        if(this.hash !== ""){
            //Prevent Default achor behaviour
            event.preventDefault();
            //Store the value of hash
            var hash = this.hash;

            $('html,body').animate({
                scrollTop: $(hash).offset().top
            },1000, function(){
                window.location.hash = hash;
            });
        }
    });
});