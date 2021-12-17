
 var students = ["Ramish", "1","Ayyan","Qasim"];
 students[4] = "Shahzaib";

// //for loop//
 var output = "" ;
for (var i = 0; i < students.length - 1; i++) {
   output += students[i] + "<br>";
}
 document.getElementById("demo").innerHTML = output;