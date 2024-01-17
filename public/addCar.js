console.log("hello add Car");

const imgDOM = document.querySelector('.img');
const containerDOM = document.querySelector(".failed");
const nameDOM = document.querySelector(".name");
const priceDOM = document.querySelector(".price");
const engineDOM = document.querySelector(".engine");
const powerDOM = document.querySelector(".power");
const imageUrlDOM = document.querySelector(".imgURLText");
const mileageDOM = document.querySelector(".mileage");
const fuelDOM = document.querySelector(".fuel");
const groundClearanceDOM = document.querySelector(".groundClearance");
const numberOfCylindersDOM = document.querySelector(".numberOfCylinders");
const maxTorqueDOM = document.querySelector(".maxTorque");
const bodyTypeDOM = document.querySelector(".bodyType");
const transmissionTypeDOM = document.querySelector(".transmissionType");

const log = async () => {
  try {
    let name = nameDOM.value;
    let price = priceDOM.value;
    let engine = engineDOM.value;
    let power = powerDOM.value;
    let imageUrl = imageUrlDOM.value;
    let mileage = mileageDOM.value;
    let fuel = fuelDOM.value;
    let groundClearance = groundClearanceDOM.value;
    let numberOfCylinders = numberOfCylindersDOM.value;
    let maxTorque = maxTorqueDOM.value;
    let bodyType = bodyTypeDOM.value;
    let transmissionType = transmissionTypeDOM.value;

    await axios.post(`/api/vehicle/cars`, {
      name,
      price,
      engine,
      power,
      imageUrl,
      mileage,
      fuel,
      groundClearance,
      numberOfCylinders,
      maxTorque,
      bodyType,
      transmissionType,
    });
    containerDOM.innerHTML = '<h5 class="empty-list">Posted Success...</h5>';

    nameDOM.value = "";
    priceDOM.value = "";
    engineDOM.value = "";
    powerDOM.value = "";
    imageUrlDOM.value = "";
    mileageDOM.value = "";
    fuelDOM.value = "";
    groundClearanceDOM.value = "";
    numberOfCylindersDOM.value = "";
    maxTorqueDOM.value = "";
    bodyTypeDOM.value = "";
    transmissionTypeDOM.value = "";
    imgDOM.innerHTML = `<img class="pic" src="" alt="">`;
  } catch (error) {
    containerDOM.innerHTML = '<h5 class="empty-list">Failed to post\nRetry....</h5>';
  }
};

const loadImg = () => {
  const imV = imageUrlDOM.value;
  imgDOM.innerHTML = `<img class="pic" src="${imV}" alt="">`;
};
