$(document).ready(function() {
    $('#butsave').on('click', function() {
        $("#butsave").attr("disabled", "disabled");
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        if(name!="" && email!="" && phone!=""){
            $.ajax({
                url: "https://wexpushy.xyz/mobileapp/save.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    phone: phone           
                },
                cache: false,
                success: function(dataResult){
                    var dataResult = JSON.parse(dataResult);
                    if(dataResult.statusCode==200){
                        $("#butsave").removeAttr("disabled");
                        $('#fupForm').find('input:text').val('');
                        $("#success").show();
                        $('#success').html('Data added successfully !');
                        // alert("Data added successfully! !");                    
                    }
                    else if(dataResult.statusCode==201){
                       alert("Error occured !");
                    }
                    
                }
            });
        }
        else{
            alert('Please fill all the field !');
        }
    })

    //RETRIEVE DATA FROM DATABASE

    $('#read').click(function () {
        $.ajax({
        url: "https://wexpushy.xyz/mobileapp/data.php",
        type: "GET",
        cache: false,
        success: function(data){
            // alert(data);
            $('#table').html(data);
                    }
                })
            })
//READ AND RETRIEVE DATA FROM DATABASE
      $.ajax({
        url: "https://wexpushy.xyz/mobileapp/data.php",
        type: "GET",
        cache: false,
        success: function(data){
            // alert(data);
            $('#table').html(data);
              
        }
    });

});



