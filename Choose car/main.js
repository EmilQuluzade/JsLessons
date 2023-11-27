var cars = [
    {
      name: ''
    },
    {
      name: 'Honda',
      models: ['', 'Civic', 'Accord', 'Pilot', 'CR-V', 'Odyssey']
    },
    {
      name: 'Toyota',
      models: ['', 'Camry', 'Corolla', 'Rav4', 'Highlander', 'Prius']
    },
    {
      name: 'Ford',
      models: ['', 'Fusion', 'Escape', 'Explorer', 'Mustang', 'F-150']
    },
    {
      name: 'Chevrolet',
      models: ['', 'Malibu', 'Equinox', 'Tahoe', 'Camaro', 'Silverado']
    },
    {
      name: 'Nissan',
      models: ['', 'Altima', 'Maxima', 'Rogue', 'Pathfinder', 'Titan']
    }
  ];

  var carSelect = document.getElementById('selectCar');
  var modelSelect = document.getElementById('selectModel');
  for (let i = 0; i < cars.length; i++) {
    var option = document.createElement('option');
    carSelect.appendChild(option)
    option.textContent = cars[i].name;
    option.value = i;
  }

  carSelect.addEventListener('change', CarModel);

  function CarModel() {
    var selectedCarIndex = option.value;
    for (let i = 0; i < cars[selectedCarIndex].models.length; i++) {
      var optionModel = document.createElement('option');
      modelSelect.appendChild(optionModel)
      optionModel.textContent = cars[selectedCarIndex].models[i];
    
      
    }
  }