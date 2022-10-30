/* Add your JavaScript to this file */
function ValidateEmail(email)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Thank You! Your email address", email, "has been added to our mailing list!");
document.form1.text1.focus();
return true;
}
else
{
alert("Please enter a valid email address.");
document.form1.text1.focus();
return false;
}
}