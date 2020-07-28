new WOW().init();
function calculateBMI(){
    var weight = document.IMTcalc.weight.value;
    var height = document.IMTcalc.height.value*0.01;
    var men = document.getElementById("IMTmen").value;
    var women = document.getElementById("IMTwomen").value;
    
    if(weight > 0 && height > 0){
        var IMTHasil = (weight/(height*height));
        var IMTdec = IMTHasil.toFixed(2)
 //IMT Calculation result       
        document.getElementById("IMTscore").innerHTML=IMTdec ;
        $('#triggerModal').attr('data-toggle', "modal");
        
        
//$('#IMTscore').fadeIn(function(){$('#IMTscore').value('IMTdec').animate({'opacity':1}, 400);});        
//Styling Result
        /*if(IMTHasil > 0 && IMTHasil < 18.5){
          $('#IMTscore').addClass('text-info');
        }
        if(IMTHasil > 18.5 && IMTHasil < 25){
          $('#IMTscore').addClass('text-success');
        }
        if(IMTHasil > 25 && IMTHasil < 30){
          $('#IMTscore').addClass('text-primary');
        }
        if(IMTHasil > 30 && IMTHasil < 35){
          $('#IMTscore').addClass('text-warning');
        }
        if(IMTHasil > 35){
          $('#IMTscore').addClass('text-danger');
        }*/

if(document.getElementById('IMTmen').checked){
  //Result message        
        if(IMTHasil < 18.5){
            document.getElementById("means").innerHTML="Kurus" ;
            $('#means, #IMTHasil').addClass('text-info');

        }
        
        if(IMTHasil > 18.5 && IMTHasil < 25){
            document.getElementById("means").innerHTML="Ideal";
            $('#means, #IMTscore').addClass('text-success');
        }
        
        if(IMTHasil > 25 && IMTHasil < 30){
            document.getElementById("means").innerHTML="Gemuk";
            $('#means, #IMTscore').addClass('text-primary');
        }
        
        if(IMTHasil > 30 && IMTHasil < 35){
            document.getElementById("means").innerHTML="Cenderung obesitas" ;
            $('#means, #IMTscore').addClass('text-warning');
        }
        
        if(IMTHasil > 35){
            document.getElementById("means").innerHTML="Obesitas" ;
            $('#means, #IMTscore').addClass('text-danger');
        }
  
  document.getElementById('genders').innerHTML="lakik";
}
else if(
document.getElementById('IMTwomen').checked){
  
  //Result message        
        if(IMTHasil < 20.5){
            document.getElementById("means").innerHTML="Kurus" ;
            $('#means, #IMTscore').addClass('text-info');

        }
        
        if(IMTHasil > 20.5 && IMTHasil < 25.5){
            document.getElementById("means").innerHTML="Ideal";
            $('#means, #IMTscore').addClass('text-success');
        }
        
        if(IMTHasil > 25.5 && IMTHasil < 30.5){
            document.getElementById("means").innerHTML="Gemuk";
            $('#means, #IMTscore').addClass('text-primary');
        }
        
        if(IMTHasil > 30.5 && IMTHasil < 35.5){
            document.getElementById("means").innerHTML="Cenderung obesitas" ;
            $('#means, #IMTscore').addClass('text-warning');
        }
        
        if(IMTHasil > 35.5){
            document.getElementById("means").innerHTML="Obesitas" ;
            $('#means, #IMTscore').addClass('text-danger');
        }
  document.getElementById('genders').innerHTML="wanitak";
}

        
    }else{
    alert('isi dulu');
    $('#triggerModal').removeAttr('data-toggle')}
};
/*
$('#buttonCalc').on('click', function(){
  $('input').attr('readonly', true);
  $('#means').fadeIn("slow");
});
$('#resets').on('click',function()
  {
    $('#means, #IMTscore').html("N/A");
    $('input').removeAttr('readonly');
  });*/
$('#btnReset, #btnWoke').on('click',function(){ $('#means, #IMTscore').removeClass("text-muted text-info text-danger text-warning text-primary text-success");});

$(document).ready(function(){
  
//Add reset button behavior on modal
    $('#btnReset').on('click', function(){
    $('#kalkulator').trigger('reset');;
  });
//enable button after page loads.
  $('button').prop('disabled', false)
// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

//BMI Script
});