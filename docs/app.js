function validateData(data) {
  console.log(data);
  var check;
  switch (data.type) {
    case "fullname":
      check = /^[a-zA-Z][a-zA-Z\s]*$/.test(data.el.value);
      break;
    case "email":
      check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.el.value);
      break;
    case "phonenumber":
      check = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
        data.el.value
      );
      break;
    case "companyname":
      check = data.el.value.trim().length > 0;
      break;
    case "companysize":
      check = data.el.value.trim().length > 0;
      break;
    case "checkbox":
      check = data.el.children[0].checked;
      break;
    default:
      check = false;
  }

  if (!check) {
    data.el.nextElementSibling.classList.remove("hidden");
    return false;
  }
  return true;
}

function resetForm() {
  var inputEls = document.querySelectorAll(".input-field");
  var inputElsArr = Array.from(inputEls);
  inputElsArr.forEach(el => {
    el.value = "";
  });
  document.querySelector(".checkbox-approve-input").checked = 0;
  resetValidationText();
}

function resetValidationText() {
  var validationTextEls = document.querySelectorAll(".validation-text");
  var validationTextArr = Array.from(validationTextEls);
  validationTextArr.forEach(el => {
    el.classList.add("hidden");
  });
}

function submitForm(event) {
  event.preventDefault();
  resetValidationText();
  var inputEls = document.querySelectorAll(".input-field");
  var inputElsArr = Array.from(inputEls);
  console.log("inputElsArr: ", inputElsArr);
  var isSubmitOk = false;
  inputElsArr.forEach(el => {
    var elData = {
      el: el,
      type: el.classList[0].split("-")[0]
    };
    isSubmitOk = validateData(elData);
  });

  if (isSubmitOk) {
    resetForm();
    alert("Thank you. We will contact you shortly");
    console.log("OK");
  } else {
    return console.log("no");
  }
}

function handleCheckbox (){
  var elCheckBox = document.querySelector('.checkbox-approve input');
  elCheckBox.classList.toggle('checked');
}
