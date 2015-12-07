function isAllowedChar1(ch)
{	var notAllowedChars = "0123456789~`!@#$%^&*()+=;:|?<>[]{}";
	if (notAllowedChars.indexOf(ch)>=0)
	{return false;}
	return true;
}
function validate()
{
	if (document.contact.Name.value == "")
		{	
			alert("Please enter your Full Name");
			document.contact.Name.focus();
			return false;
		}
	else
		{
				tempStr = document.contact.Name.value;
				for(i=0;i<tempStr.length;i++)
			{	
				if(isAllowedChar1(tempStr.charAt(i))=="0")
				{
					alert("The Name can only contain Letters");
					document.contact.Name.focus();
					document.contact.Name.select();
					i = tempStr.length;
					return false;
				}
			}
		}
	if (document.contact.From.value == "" )
		{	alert("Please enter your Email.");
			document.contact.From.focus();
			document.contact.From.select();
			return false;
		}
	else
	{
	if(emailCheck(document.contact.From.value,document.contact.From)=="0")
		return false;
	}
	if (document.contact.Phone.value == "")
		{
			alert("Please enter your Contact Number");
			document.contact.Phone.focus();
			document.contact.Phone.select();
			return false;
		}
	else  
		{
			if (isNaN(document.contact.Phone.value))
				{	alert("Please enter a valid Contact Number");
					document.contact.Phone.focus();
					document.contact.Phone.select();
					return false;
				}
		}
	if (document.contact.Comments.value == "")
		{
			alert("Please enter your Comments");
			document.contact.Comments.focus();
			document.contact.Comments.select();
			return false;
		}
return true;
}
function ValidateList(that,TextMsg)
{	if (that.selectedIndex == "0"){alert("Please tell us " + TextMsg);that.focus();return false;}}
function  emailCheck(emailStr,that)
{
if(that.value == "")
{return 1;}
var emailPat=/^(.+)@(.+)$/
var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
var validChars="\[^\\s" + specialChars + "\]"
var quotedUser="(\"[^\"]*\")"
var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
var atom=validChars + '+'
var word="(" + atom + "|" + quotedUser + ")"
var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")
var matchArray=emailStr.match(emailPat)
	if (matchArray==null)
	{alert("Email address seems incorrect (check @ and .'s)");that.focus();return 0;}
var user=matchArray[1]
var domain=matchArray[2]
	if (user.match(userPat)==null)
	{alert("The username doesn't seem to be valid.");that.focus();return 0;}
var IPArray=domain.match(ipDomainPat)
	if (IPArray!=null)
	{ for (var i=1;i<=4;i++)
	  {if (IPArray[i]>255)
		{alert("Destination IP address is invalid!");that.focus();return 0;}
	  }
	    return 1;
	}
var domainArray=domain.match(domainPat)
	if (domainArray==null)
	{alert("The domain name doesn't seem to be valid.");that.focus();return 0;}
var atomPat=new RegExp(atom,"g")
var domArr=domain.match(atomPat)
var len=domArr.length
	if (domArr[domArr.length-1].length<2 || domArr[domArr.length-1].length>3)
	{alert("The address must end in a three-letter domain, or two letter country.");that.focus();return 0;}
	if (len<2) 
	{  var errStr="This address is missing a hostname!"
	   alert(errStr);that.focus();return 0;}
	return 1;
}