const fileInput = document.getElementById("file");

fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  console.log(selectedFile);

  const filename = document.getElementById("fileName");
  filename.innerHTML = `${selectedFile.name}`;
}

function showPopup() { 
  window.open("../html/privacypolicy.html", "a", "width=500, height=800, left=50, top=50"); 
}