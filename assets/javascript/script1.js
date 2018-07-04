
function displayFully(projectName){
  var currProject = document.getElementById(projectName);
  var displayPort = document.getElementById("focusproject");
  var backGround = document.getElementById("fadeOut");
  var container = document.getElementById("projects");

  console.log(document.getElementById("tabs").getBoundingClientRect());

  displayPort.innerHTML = "<h2 id='closeproject' onclick='hideProject()'>X</h2>" + currProject.innerHTML;
  displayPort.style.display = 'block';
  if (window.innerWidth < 1520){
  backGround.style.display = 'block';
  }
}

function testIt(){
console.log(document.getElementById("tabs").getBoundingClientRect());
}


testIt();
window.onkeypress = testIt;


function hideProject(){
    var backGround = document.getElementById("fadeOut");
    var displayPort = document.getElementById("focusproject");
    displayPort.style.display = 'none';
    backGround.style.display = 'none';
}

function switchGrades(tabNum){
  tablist = document.getElementById("tabs").children;
  yearlist = document.getElementById("gradecontainer").children;
  for(i = 0; i < yearlist.length; i++){
    yearlist[i].style.display = 'none';
    tablist[i].classList.remove('activetab');
  }
  yearlist[tabNum].style.display = 'flex';
  tablist[tabNum].classList.add('activetab');
}
