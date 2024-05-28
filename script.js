function generatePassword() {
    var length = document.getElementById("length").value;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
  }
  
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("showPassword");
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
  