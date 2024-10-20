var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) { },
  onResponse: function (error, response) { },
  successTemplate: '<span>Thank you!</span>'
})
const projectLink=document.querySelector(".project-link")
const cvLink=document.querySelector(".cv-link")
projectLink.addEventListener('click', function(event) {
    
    const userConfirmed = confirm("Are you sure you want to go to the project page?");
    
    
    if (!userConfirmed) {
        event.preventDefault(); 
    }
});
cvLink.addEventListener('click', function(event) {
    
    const userConfirmed = confirm("Are you sure you want to download my CV?");
    
    
    if (!userConfirmed) {
        event.preventDefault(); 
    }
});