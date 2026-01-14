//Select the form
$("#serviceForm").submit(function (event) {
     event.preventDefault();

 $("#serviceName").css("border", "");
 $("#serviceDescription").removeAttr("style");
 $("#servicePrice").css("border", "");


     const name = $("#serviceName").val().trim();
     const description = $("#serviceDescription").val().trim();
     const price = $("#servicePrice").val().trim();

     //console.log(name, description, price);

//2. Validate the values
if(!name|| !description || !price<=0 ) {
    alert("All fields are mandatory");
    

} else{
    //3. Assignment 3
    //save it in local storage
}

if(!name) {        
        $("#serviceName").css("border", "3px solid red");
    }
    if(!description){
        $("#serviceDescription").css("border", "3px solid red");
    }
    if(!price || price<=0){
        $("#servicePrice").css("border", "3px solid red");
   
    } else{
this.reset();//remove and clear borders afterwards/
    }
//save it to local storage
          this.reset();


});




