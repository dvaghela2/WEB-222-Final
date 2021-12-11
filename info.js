var fname = document.querySelector("#first-name")
var lname = document.querySelector("#last-name")
var password1 = document.querySelector("#pass")
var password2 = document.querySelector("#confirm-pass")
var username = document.querySelector("#username")
var radio_btns = document.signup.userEducation
function validatePassword() {
  var isValid = false
  if (password1.value.trim().length < 6) {
    document.querySelector("#error-1").innerHTML =
      "Password must contain atleast 6 characters!"
    document.querySelector("#error-1").style.display = "block"
    password1.classList.add("not-valid")
    return isValid
  }
  let re = /^[a-zA-Z]/
  if (!re.test(password1.value.trim())) {
    document.querySelector("#error-1").innerHTML =
      "Password must start with an alphabet!"
    document.querySelector("#error-1").style.display = "block"
    password1.classList.add("not-valid")
    return isValid
  }
  re = /[0-9]/
  if (!re.test(password1.value.trim())) {
    document.querySelector("#error-1").innerHTML = "Password must have 1 digit!"
    document.querySelector("#error-1").style.display = "block"
    password1.classList.add("not-valid")
    return isValid
  }
  re = /[A-Z]/
  if (!re.test(password1.value.trim())) {
    document.querySelector("#error-1").innerHTML =
      "Password must have 1 uppercase!"
    document.querySelector("#error-1").style.display = "block"
    password1.classList.add("not-valid")
    return isValid
  }
  if (password1.value.trim() !== password2.value.trim()) {
    document.querySelector("#error-1").innerHTML = "Passwords must match!"
    document.querySelector("#error-1").style.display = "block"
    password1.classList.add("not-valid")
    password2.classList.add("not-valid")
    return isValid
  }
  return (isValid = true)
}

function validateName() {
  isValid = false
  var regName = /^[A-Z]+[a-zA-Z]+$/
  if (regName.test(fname.value.trim()) && regName.test(lname.value.trim())) {
    isValid = true
  } else {
    document.querySelector("#error-2").innerHTML =
      "Name must start with a cap and only alphabet allowed!"
    document.querySelector("#error-2").style.display = "block"
    fname.classList.add("not-valid")
    lname.classList.add("not-valid")
  }
  return isValid
}

function educationChecked() {
  var count = 0
  for (var i = 0; i < radio_btns.length; i++) {
    if (radio_btns[i].checked == true) {
      count++
    }
  }
  if (count === 0) {
    document.querySelector("#error-3").innerHTML = "Must select an education"
    document.querySelector("#error-3").style.display = "block"
  }
  return count
}

function validateUsername() {
  isValid = false
  var regUser = /^[a-zA-Z][a-zA-Z0-9]{6,}$/
  if (!regUser.test(username.value.trim())) {
    document.querySelector("#error-4").innerHTML =
      "username must start with an alphabet"
    document.querySelector("#error-4").style.display = "block"
    username.classList.add("not-valid")
    return isValid
  }
  return true
}
var resetBtn = document.signup.resetBtn
function clearForm() {
  fname = lname = password1 = username = password2 = ""
}

function validate() {
  var isValid = false
  if (
    !educationChecked() ||
    !validateName() ||
    !validatePassword() ||
    !validateUsername()
  )
    return isValid
  document.querySelector("#error-1").style.display = "none"
  password1.classList.remove("not-valid")
  password2.classList.remove("not-valid")
  alert("Form Submission Sucess!")

  return (isValid = true)
}