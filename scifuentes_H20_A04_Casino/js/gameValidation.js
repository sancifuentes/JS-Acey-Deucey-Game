let $$ = sel => document.querySelector(sel);

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

let chkFirst = new RegExp(/^[a-z \' \-]{1,20}$/i);
let chkLast = new RegExp(/^[a-z \' \-]{1,30}$/i);
let chkUserN = new RegExp(/^[A-Z]+[a-z]+[0-5]?$/);
let chkPhone = new RegExp(/^\d{3}\.\d{3}\.\d{4}|^(\(\d{3}\)) ?(\d{3})(\-\d{4})$/);
let chkCity = new RegExp(/^[A-Z]+$/i);
let chkEmail = new RegExp(/^[a-z0-9_.-]+@[a-z0-9]+\.(com|ca|org)$/i);
let chkAmt = new RegExp(/^\$?([5-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-5],?[0][0][0])\$?$/);

let form = $$("#reForm");

let checkForm = function()
{
    let isValid = false; 

    let firstNameField = $$("#firstName").value;
    let lastNameField = $$("#lastName").value;
    let userNameField = $$("#userName").value;
    let phoneNumField = $$("#phoneNumber").value;
    let cityField = $$("#city").value;
    let emailField = $$("#email").value;
    let bankField = $$("#bankAmt").value;
    
    let allTxtFields = document.querySelectorAll("input[type=text]");

    let i = 0;

        if(firstNameField.match(chkFirst) && lastNameField.match(chkLast) && userNameField.match(chkUserN) && phoneNumField.match(chkPhone) && cityField.match(chkCity) && emailField.match(chkEmail) && bankField.match(chkAmt))
        {
            isValid = true;

            storeForm(firstNameField, lastNameField, userNameField, phoneNumField, cityField, emailField, bankField);

            return isValid;
        }

        if(allTxtFields[i].value === "")
        {
            isValid = false;
            alert("Please fill all of the text fields");
            return isValid;
        }

        if(!(firstNameField.match(chkFirst)))
        {
            isValid = false;
            alert("First name field empty or invalid. It can only contain letters, space, single quote or a dash.");
            return isValid;
        }

        if(!(lastNameField.match(chkLast)))
        {
            isValid = false;
            alert("Last name field empty or invalid.It can only contain letters, space single quote or a dash.");
            return isValid;
        }

        if(!(userNameField.match(chkUserN)))
        {
            isValid = false;
            alert("Username field empty or invalid. It must start with an uppercase followed by lowercase letters and end with a single digit between 0 and 5.");
            return isValid;
        }

        if(!(phoneNumField.match(chkPhone)))
        {
            isValid = false;
            alert("Phone number field empty or invalid. It must be in the format (###) ###-#### or ###.###.####");
            return isValid;
        }

        if(!(cityField.match(chkCity)))
        {
            isValid = false;
            alert("City field empty or invalid. It can only contain letters.");
            return isValid;
        }

        if(!(emailField.match(chkEmail)))
        {
            isValid = false;
            alert("Email field empty or invalid. It must be in the format namevalue@domain.com/ca/org where namevalue is any combination of letters, numbers and underscore(_), dash (-) or period (.). Domain is any combination of letters and numbers. Top level domain can only be .com, .ca or .org.");
            return isValid;
        }

        if(!(bankField.match(chkAmt)))
        {
            isValid = false;
            alert("Bank field empty or invalid. Only a number between $5 and $5000 can be entered.");
            return isValid;
        }

} 

let storeForm = function(first, last, user, phone, city, eMail, bank)
{
    let firstNameVal = first;
    let lastNameVal = last;
    let usernameVal = user;
    let phoneVal = phone;
    let cityVal = city;
    let emailVal = eMail;
    let bankVal = bank;

    localStorage.firstName = firstNameVal;
    localStorage.lastName = lastNameVal;
    localStorage.username = usernameVal;
    localStorage.phoneNum = phoneVal;
    localStorage.city = cityVal;
    localStorage.email = emailVal;
    localStorage.bankRoll = bankVal;

    let currentDate = new Date();

    let month = monthNames[currentDate.getMonth()];
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minutes = ('0' + currentDate.getMinutes()).slice(-2);

    localStorage.lastVisit = `${month} ${day}, ${year} at ${hour}:${minutes}`;
}