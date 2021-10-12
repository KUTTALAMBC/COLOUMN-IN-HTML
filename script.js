function getnewCountry() {
    let selectedhtml = document.getElementById("list");
    let newOption = document.createElement("option");
  
    newOption.text = document.getElementById("textbox").value;
  
    selectedhtml.add(newOption);
  }