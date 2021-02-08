var userName = prompt("Enter your name please");
document.write("Welcom " + userName + " to our website <br /><br />");

var answer = '';

while (answer != `yes`){
    answer = prompt("Do you want to see some picture about Russia");
}

var numberOfImages = -1;
while (numberOfImages <= 0 || numberOfImages > 5){
    numberOfImages = prompt("How many image do you want to see about Russia?")
}
console.log("num :", numberOfImages);

for (i=1; i <= numberOfImages; i++){
    document.write('<img src="images/' + i + '.jpeg"');
    document.write('<br /><p>    ' + i + '</p>');
    console.log('<img src="images/' + i + '.jpeg"')
}
