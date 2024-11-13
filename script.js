// Constructor for the 1981 Chevy El Camino with Camper Shell
function ElCamino(carBrand, carModel, color, scale, vehicleType, price, year, features) {
    this.carBrand = carBrand;
    this.carModel = carModel;
    this.color = color;
    this.scale = scale;
    this.vehicleType = vehicleType;
    this.price = price;
    this.year = year;
    this.features = features;
  }
  
  // Create an instance of the 1981 Chevy El Camino
  const elCamino = new ElCamino(
    "Chevrolet",
    "1981 El Camino with Camper Shell",
    "Black",
    "1/64 Scale",
    "Pickup Truck",
    "$8.99",
    1981,
    {
      tires: "Real Rubber Tires",
      body: "Metal Body and Chassis",
      exterior: "Detailed Exterior",
      packaging: "Blister Pack"
    }
  );
  
  // Display car details
  document.querySelector('#price-display').innerText = elCamino.price;
  document.querySelector('#carColor').innerText = elCamino.color;
  
  function updateCar() {
    const newColor = document.querySelector('#colorSelect').value;
    const newPrice = document.querySelector('#newPrice').value;
  
    // Update car instance with new details
    elCamino.color = newColor;
    elCamino.price = `$${parseFloat(newPrice).toFixed(2)}`;
  
    // Update the UI with the new values
    document.querySelector('#price-display').innerText = elCamino.price;
    document.querySelector('#carColor').innerText = elCamino.color;
  }
  
  // Display more details on button click
  document.querySelector('#moreDetailsBtn').addEventListener('click', () => {
    alert(`More details about the ${elCamino.carModel}: 
    - Year: ${elCamino.year}
    - Features: ${Object.values(elCamino.features).join(', ')}`);
  });
  