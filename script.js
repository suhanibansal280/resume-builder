function generate(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let institute = document.getElementById("instituteName").value;

let about = document.getElementById("about").value;
let skills = document.getElementById("skills").value;
let education = document.getElementById("education").value;
let extra = document.getElementById("extra").value;

let photoFile = document.getElementById("photo").files[0];
let logoFile = document.getElementById("logo").files[0];

let photoURL = photoFile ? URL.createObjectURL(photoFile) : "";
let logoURL = logoFile ? URL.createObjectURL(logoFile) : "";

document.getElementById("resume").innerHTML = `
<div class="resume">

<div class="header-top">
<img src="${logoURL}" class="inst-logo">
<h1>${institute}</h1>
</div>

<div class="main">

<div class="left">
<img src="${photoURL}" class="photo">
<h2>${name}</h2>
<p><i class="fa fa-phone"></i> ${phone}</p>
<p><i class="fa fa-envelope"></i> ${email}</p>
<h3>Skills</h3>
<p>${skills}</p>
</div>

<div class="right">
<h3>About Me</h3>
<p>${about}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Extra Curriculum</h3>
<p>${extra}</p>
</div>

</div>
</div>
`;
}

function downloadPDF(){

let element = document.getElementById("resume");

if(!element.innerHTML){
alert("Please preview resume first!");
return;
}

html2pdf().from(element).save("MyResume.pdf");
}