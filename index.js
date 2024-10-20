var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) { },
  onResponse: function (error, response) { },
  successTemplate: '<div style="background-color: #f0f0f0; color: #333; padding: 20px; font-size: calc(1rem + 0.4vw); text-align: center;">Teşekkür ederim. Form başarıyla gönderildi.</div>'
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