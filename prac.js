function calculate(currentYear,yearBorn) {
    var currentYear= document.getElementById("current").value;
    var yearBorn= document.getElementById("born").value;
    var age= currentYear-yearBorn
    console.log("You are "+age+" years old!");
    
}