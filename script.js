function bookCar(carName, carImage, price) {
    localStorage.setItem('carName', carName);
    localStorage.setItem('carImage', carImage);
    localStorage.setItem('price', price);
    window.location.href = 'car.html';
}

function saveBookingDetails() {
    const pickupLocation = document.getElementById('pickup-location').value;
    const dateTime = document.getElementById('date-time').value;
    const phone = document.getElementById('phone').value;

    if (pickupLocation && dateTime && phone) {
        localStorage.setItem('pickupLocation', pickupLocation);
        localStorage.setItem('dateTime', dateTime);
        localStorage.setItem('phone', phone);
        window.location.href = 'confirm.html';
    } else {
        alert('Please fill all fields');
    }
}

function loadCarDetails() {
    const carName = localStorage.getItem('carName');
    const carImage = localStorage.getItem('carImage');

    document.getElementById('car-name').textContent = carName;
    document.getElementById('car-img').src = carImage;
}

function loadConfirmation() {
    const bookingId = Math.floor(Math.random() * 10000000000);
    document.getElementById('booking-id').textContent = bookingId;
}

function goHome() {
    localStorage.clear();
    window.location.href = 'index.html';
}

// Call functions on appropriate pages
if (window.location.pathname.includes('car.html')) {
    window.onload = loadCarDetails;
}

if (window.location.pathname.includes('confirm.html')) {
    window.onload = loadConfirmation;
}




