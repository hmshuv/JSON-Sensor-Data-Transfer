// Function to generate random sensor values
function getRandomSensorValue() {
    return (Math.random() * 100).toFixed(2); // Random float between 0 and 100
}

// Function to manage sensors
function manageSensors() {
    var sensorData = {
        "sensor1": 25.5,
        "sensor2": 30.2,
        "sensor3": 18.7,
        "sensor4": 22.9,
        "sensor5": 28.1,
        "sensor6": 19.8,
        "sensor7": 35.0,
        "sensor8": 27.3,
        "sensor9": 21.6,
        "sensor10": 32.4,
    };

    // Function to update sensor values and refresh the interface
    function updateSensorValues() {
        var sensors = Object.keys(sensorData);
        for (var i = 0; i < sensors.length; i++) {
            var sensor = sensors[i];
            var value = getRandomSensorValue();

            // Update the interface with the new value
            var valueCell = document.querySelector(`#${sensor}-value`);
            if (valueCell) {
                valueCell.textContent = value;
            }
        }
    }

    // Initial rendering of sensor data
    updateSensorValues();

    // Update sensor values and refresh the interface every 200ms
    setInterval(updateSensorValues, 200);
}

// Call the manageSensors function to start managing sensors
manageSensors();