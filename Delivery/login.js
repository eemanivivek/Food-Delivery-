function check() {
    if (document.getElementById("password").value != document.getElementById("confirmPassword").value) {
         alert( "Pasword doesn't match " );
    }
    else{
        alert("Successfully logged in");
        return true;
    }
}

const citiesByState = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Rajahmundry"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Bomdila"],
  "TamilNadu": ["Chennai", "Ooty", "Madurai", "Coimbatore"],
  "Karanataka": ["Banglore", "Mysore", "Mangalore", "Hubli"], 
  // Add more states and cities here

};

const stateDropdown = document.getElementById("state");
const cityDropdown = document.getElementById("city");

stateDropdown.addEventListener("change", () => {
  const selectedState = stateDropdown.value;
  const cities = citiesByState[selectedState];

  // Clear the city dropdown
  cityDropdown.innerHTML = "<option value=''>Select a city</option>";

  // Populate the city dropdown
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.text = city;
    cityDropdown.appendChild(option);
  });
});
