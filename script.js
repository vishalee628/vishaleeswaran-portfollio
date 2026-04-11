// Skill Section
let SkillTitle = document.getElementById('Skill-title');
let softskillsBtn = document.getElementById('softskills');
let educationBtn = document.getElementById('education');
let certificatesBtn = document.getElementById('certificates');
let internshipsBtn = document.getElementById('internships');

// Reusable function
function setSkillTitle(text) {
  const h = document.createElement('h1');
  h.className = 'display-5 font-weight-light mb-3';
  h.id = 'Skill-title';
  h.innerText = text;
  SkillTitle.replaceWith(h);
  SkillTitle = h;   // update reference to the new element
}

// Add listeners
softskillsBtn.addEventListener('click', () => setSkillTitle('Soft Skills'));
educationBtn.addEventListener('click', () => setSkillTitle('Education'));
certificatesBtn.addEventListener('click', () => setSkillTitle('Certificates'));
internshipsBtn.addEventListener('click', () => setSkillTitle('Internships'));

// Optional: initial value
setSkillTitle('Skills');



// Contact Section



function SendMessage(){
    var phonenumber="+916380792722"

    let Name= document.getElementById('Name');
let Email= document.getElementById('Email');
let PhoneNumber= document.getElementById('PhoneNumber');
let ServiceofInterest= document.getElementById('Service-of-Interest');
let Timeline= document.getElementById('Timeline');
let Message= document.getElementById('Message');

var url="https://wa.me/"+phonenumber+"?text="
+"*Name* : "+Name.value+"%0a"
+"*Email* : "+Email.value+"%0a"
+"*Phone Number* : "+PhoneNumber.value+"%0a"
+"*Service of Interest* : "+ServiceofInterest.value+"%0a"
+"*Timeline* : "+Timeline.value+"%0a"
+"*Message* : "+Message.value+"%0a%0a"+"*_This message is sent from Vishal Portfolio website._*";
window.open(url,'_blank').focus();
}

