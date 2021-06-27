function validateForm() {
    var firstName = document.forms["myForm"]["firstName"].value;
    if (firstName == "" || firstName == null) {
      alert("First Name must be filled out");
      return false;
    }

    var lastName = document.forms["myForm"]["lastName"].value;
    if (lastName == "" || lastName == null) {
      alert("Last Name must be filled out");
      return false;
    }
    var email = document.forms["myForm"]["email"].value;
    if (email == "" || email == null) {
      alert("Email must be filled out");
      return false;
    }
    var password = document.forms["myForm"]["password"].value;
    if (password == "" || password == null) {
      alert("Password must be filled out");
      return false;
    }
    var address = document.forms["myForm"]["address"].value;
    if (address == "" || address == null) {
      alert("Address must be filled out");
      return false;
    }
    var city = document.forms["myForm"]["city"].value;
    if (city == "" || city == null) {
      alert("City must be filled out");
      return false;
    }
    var province = document.forms["myForm"]["province"].value;
    if (province == "" || province == null) {
      alert("Province must be selected");
      return false;
    }
    var country = document.forms["myForm"]["country"].value;
    if (country == "" || country == null) {
      alert("Country must be selected");
      return false;
    }
  }