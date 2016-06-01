$(document).foundation()

function addValuesToDetails() {

}

var addValuesToDetails = function(ev) {
  ev.preventDefault();
  var details = document.querySelector('div.details');
  //details.innerHTML += '<p>' + this.firstName.value + '</p>';
  var firstName = this.firstName.value;
  var hairColor = this.hairColor.value;
  var age = this.age.value;
  var birthplace = this.birthplace.value;

  var colorDiv = '<div style="height: 100px; width: 100px; background-color: ' +hairColor + '"></div>'
  //details.innerHTML += '<p>' + firstName + '</p>';
  //details.innerHTML += '<p>' + hairColor + '</p>';
  //details.innerHTML += '<p>' + age + '</p>';
  //details.innerHTML += '<p>' + birthplace + '</p>';


  details.innerHTML += ' \
  <dl> \
    <dt>Name</dt> \
    <dd>' + firstName + '</dd> \
        \
    <dt>Hair Color</dt> \
    <dd>' + colorDiv + '</dd> \
      \
    <dt>Age</dt> \
    <dd>' + age + '</dd> \
      \
    <dt>Birthplace</dt> \
    <dd>' + birthplace + '</dd> \
  </dl>';

};


var myForm = document.querySelector('form');
myForm.onsubmit = addValuesToDetails;
