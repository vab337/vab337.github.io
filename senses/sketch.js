var promptNum;
var paragraph = 'p';
var prompt;


function displayPrompt(promptNum) {
  var pId = paragraph.concat(promptNum);
  console.log(pId);
  document.getElementById(pId).style.display = "block";

}
