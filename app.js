const buttons = document.querySelectorAll(".icon-link");
const buttonId = document.querySelector('h3');
const socialMedia = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'];




for (let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener('mouseover', function () {
    buttonId.innerHTML = `${socialMedia[i]}`;
    console.log(buttons[i]);
  })
}
