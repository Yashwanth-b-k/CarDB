console.log('hello details');

const containerDOM = document.querySelector('.container');

// const id = new URLSearchParams(params).get('id');
const id = new URLSearchParams(window.location.search).get('id');

const deleteCar = async()=>{
  try {
    await axios.delete(`/api/vehicle/cars/${id}`)
    window.open('carDB.html', '_blank');
  } catch (error) { 
    console.log(error)
  }
}

const gCar = async()=>{
    try { 
      containerDOM.innerHTML = `<h5 class="empty-list">Loading.......</h5>`;
      const {
        data: { car }
      } = await axios.get(`/api/vehicle/cars/${id}`);
      const {name,price,engine,power,imageUrl,mileage,fuel,groundClearance,numberOfCylinders,maxTorque,transmissionType,bodyType} = car;
      containerDOM.innerHTML = `
      <div class="first">
      <div class="img">
        <img src="${imageUrl}" alt="">
      </div>
      <div class="pricing">
        <h1>${name}</h1>
        <h2>Starting @ RS: ${price}*</h2>
        <ul>
          <li>
            <p>Max Tourque: <span>${maxTorque}</span></p>
          </li> 
          <li>
            <p>Ground Clearence: <span>${groundClearance}</span></p>
          </li> 
          <li> 
            <p>Body Type: <span>${bodyType}</span></p>
          </li>
          <li>
            <p>Transmission: <span>${transmissionType}</span></p>
          </li>
        </ul>
      </div>
    </div> 
    <div class="labels">
      <label>Key Features</label>
      <div class="features">
        <div class="energy">
          <img src="./assets/img/car-engine.png" alt="">
          <p>${engine}</p>
        </div>
        <div class="power">
          <img src="./assets/img/energy.png" alt="">
          <p>${power}</p>
        </div>
        <div class="pump">
          <img src="./assets/img/pump.png" alt="">
          <p>${fuel}</p>
        </div>
        <div class="mileage">
          <img src="./assets/img/speed.png" alt="">
          <p>${mileage}</p>
        </div>
        <div class="seat">
          <img src="./assets/img/seat.png" alt="">
          <p>${numberOfCylinders} Cylinders</p>
        </div>
      </div>
      
  <button class="btn" onclick="deleteCar()"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
    </div>
      `
    } catch (error) {
        containerDOM.innerHTML = `<h5 class="empty-list">car you are looking for is not present in data base</h5>`;
    }
}

gCar(); 