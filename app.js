showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //   console.log(notesObj);
  showNotes();
  
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        <button id="${index}"onclick="edit(this.id)" class="btn btn-primary">Edit Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = "<span style= 'font-weight:bold;margin: 20px;'>First note to be added yet !!`</span>"
  }
}

// Function to delete a note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
function edit(index)
{
  document.getElementById("notes").contentEditable = true;
  document.getElementById("demo");
}



let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  })

})
display_c(0);
function display_c(start) {
  window.start = parseFloat(start);
  var end = 0 // change this to stop the counter at a higher value
  var refresh = 1000; // Refresh rate in milli seconds
  if (window.start >= end) {
    mytime = setTimeout('display_ct()', refresh)
  } else {
    alert("error");
  }
}

function display_ct() {
  // Caculating total secs
  var secs = Math.floor(window.start)
  // Calculating how many minutes have passed
  var minutes = Math.floor(window.start/ 60)
  
  // Calculating how many Hours have passed
  var hours = Math.floor(window.start / 3600)
  // Calculating how many Days have passed
  var days = Math.floor(window.start / 86400);
  var x = "Total Seconds = "+ window.start + " ( " + hours + " Hours " + minutes%60 + " Minutes and " + secs%60 + " Seconds " + ")";

  document.getElementById('ct').innerHTML = x;
  window.start = window.start + 1;

  tt = display_c(window.start);
}