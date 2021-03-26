// Get modal elements
var modal = document.getElementById('simpleModal');

//Get open modal button
var modalBtn = document.getElementById('modalBtn');

//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', clickOutside);


//function to open modal
function openModal(){
    modal.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e){
    if(e.target == modal) {
        modal.style.display = 'none';
    }    
}

// Tabs

var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel (panelIndex,colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "#fff";

    tabPanels.forEach(function(node) {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
}

showPanel(0, '#2ECC71');