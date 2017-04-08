function submit() {
    var input = document.getElementById('input').value;
    console.log("User typed: " + input);
    var splitted = input.split(/(?!$)/u);
    console.log("User typed: " + splitted);
    
var char = []; 

for(var i=0; i<splitted.length; i++) {

    char[splitted[i]] = ( typeof char[splitted[i]] != 'undefined' ) ? char[splitted[i]]+=1 : 1

}

var char_counter = 0

for (key in char) {
  char_counter++;
  console.log(key+" = "+char[key]) ;
}
  console.log("Number of Unique Characters: " +char_counter);
  
  console.log("Total Number of Characters: "+splitted.length) ;

 

}