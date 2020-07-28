$(window).on('load', function(){
  console.log("loaded");
  $('#btnReset, #btnWoke').on('click',function(){ $('#means, #IMTscore').removeClass("text-muted text-info text-danger text-warning text-primary text-success");});
$('#btnReset').on('click', function(){
    $('#kalkulator').trigger('reset');;
  });
});

function calculateBMI(){
    var weight = document.IMTcalc.weight.value;
    var height = document.IMTcalc.height.value*0.01;
    var men = document.getElementById("IMTmen").value;
    var women = document.getElementById("IMTwomen").value;
    
    if(weight > 0 && height > 0){
        var IMTHasil = (weight/(height*height));
        var IMTdec = IMTHasil.toFixed(2)
 //IMT Calculation result       
        document.getElementById("IMTscore").innerHTML=IMTdec;
        $('#triggerModal').attr('data-toggle', "modal");

if(document.getElementById('IMTmen').checked){
  //Result message        
        if(IMTHasil > 0 && IMTHasil < 17){
            document.getElementById('means').innerHTML="Kekurangan berat badan tingkat berat" ;
            $('#means, #IMTHasil').addClass('text-info');
            document.getElementById('genders').innerHTML="Ambang batas kekurangan berat badan tingkat berat untuk pria berada pada kisaran kurang dari 17";

        }
        
        if(IMTHasil > 17 && IMTHasil < 18.4){
            document.getElementById("means").innerHTML="Kekurangan berat badan tingkat ringan.";
            $('#means, #IMTscore').addClass('text-primary');
            document.getElementById('genders').innerHTML="Ambang batas kekurangan berat badan ringan untuk pria berada pada kisaran 17-18.4.";
        }
        
        if(IMTHasil > 18.5 && IMTHasil < 25){
            document.getElementById("means").innerHTML="Berat badan normal";
            $('#means, #IMTscore').addClass('text-success');
            document.getElementById('genders').innerHTML="Ambang batas berat badan normal untuk pria berada pada kisaran 18.5-25.";
        }
        
        if(IMTHasil > 25.1 && IMTHasil < 27){
            document.getElementById("means").innerHTML="Kelebihan berat badan tingkat ringan." ;
            $('#means, #IMTscore').addClass('text-warning');
            document.getElementById('genders').innerHTML="Ambang batas kelebihan berat badan untuk pria berada pada kisaran 25.1-27.";
        }
        
        if(IMTHasil > 27){
            document.getElementById("means").innerHTML="Kelebihan berat badan tingkat berat" ;
            $('#means, #IMTscore').addClass('text-danger');
            document.getElementById('genders').innerHTML="Ambang batas kelebihan berat badan tingkat berat untuk pria berada pada kisaran lebih dari 27.";
        }
}
else if(
document.getElementById('IMTwomen').checked){
  
 if(IMTHasil > 0 && IMTHasil < 17){
            document.getElementById("means").innerHTML="Kekurangan berat badan tingkat berat" ;
            $('#means, #IMTHasil').addClass('text-info');
            document.getElementById('genders').innerHTML="Ambang batas kekurangan berat badan tingkat berat untuk wanita berada pada kisaran kurang dari 17";
        }
        
        if(IMTHasil > 17 && IMTHasil < 18.4){
            document.getElementById("means").innerHTML="Kekurangan berat badan tingkat ringan.";
            $('#means, #IMTscore').addClass('text-primary');
            document.getElementById('genders').innerHTML="Ambang batas kekurangan berat badan ringan untuk pria berada pada kisaran 17-18.4.";
        }
        
        if(IMTHasil > 18.5 && IMTHasil < 25){
            document.getElementById("means").innerHTML="Berat badan normal";
            $('#means, #IMTscore').addClass('text-success');
            document.getElementById('genders').innerHTML="Ambang batas berat badan normal untuk wanita berada pada kisaran 18.5-25.";
        }
        
        if(IMTHasil > 25.1 && IMTHasil < 27){
            document.getElementById("means").innerHTML="Kelebihan berat badan tingkat ringan." ;
            $('#means, #IMTscore').addClass('text-warning');
            document.getElementById('genders').innerHTML="Ambang batas kelebihan berat badan untuk wanita berada pada kisaran 25.1-27.";
        }
        
        if(IMTHasil > 27){
            document.getElementById("means").innerHTML="Kelebihan berat badan tingkat berat" ;
            $('#means, #IMTscore').addClass('text-danger');
            document.getElementById('genders').innerHTML="Ambang batas kelebihan berat badan tingkat berat untuk pria berada pada kisaran lebih dari 27.";
        }
}

        
    }else{
    alert('Pilih jenis kelamin, masukkan berat dan tinggi badan, kemudian tekan Hitung IMT');
    $('#triggerModal').removeAttr('data-toggle')}
};

$(document).ready(function(){
  console.log('ready');
//Add reset button behavior on modal
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