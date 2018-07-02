
function displayFully(projectName){
  var currProject = document.getElementById(projectName);
  var displayPort = document.getElementById("focusproject");
  var container = document.getElementById("projects")

  //console.log(container.clientWidth, container.clientHeight);
  var zoomPointX = ((currProject.offsetLeft + (currProject.clientWidth / 2)) / container.clientWidth) * 100
  var zoomPointY = ((currProject.offsetTop + (currProject.clientHeight / 2))/ container.clientHeight) * 100
  console.log(zoomPointX)
  displayPort.style.transformOrigin = zoomPointX + "% " + zoomPointY + "%";
  displayPort.innerHTML = "<h2 onclick='hideProject()'>X</h2>" + currProject.innerHTML;
  displayPort.style.display = 'block';
}


function hideProject(){
    var displayPort = document.getElementById("focusproject");
    displayPort.style.display = 'none';
}
