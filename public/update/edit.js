console.log('hello edit page');

const id = new URLSearchParams(window.location.search).get('id');

const containerDOM = document.querySelector('.container');
const imgDOM = document.querySelector('.img');
const failedDom = document.querySelector(".failed");
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

const getCar = async ()=>{
    try {
        const {
          data: { car }
        } = await axios.get(`/api/vehicle/cars/${id}`);
        const {name,price,engine,power,imageUrl,mileage,fuel,groundClearance,numberOfCylinders,maxTorque,transmissionType,bodyType} = car;
        
        nameDOM.value =name;
        priceDOM.value =price;
        engineDOM.value =engine;
        powerDOM.value =power;
        imageUrlDOM.value =imageUrl;
        mileageDOM.value =mileage;
        fuelDOM.value =fuel;
        groundClearanceDOM.value =groundClearance
        numberOfCylindersDOM.value =numberOfCylinders
        maxTorqueDOM.value =maxTorque
        bodyTypeDOM.value =bodyType
        transmissionTypeDOM.value =transmissionType
    } catch (error) {
        containerDOM.innerHTML = '<h5 class="empty-list">Failed to get data\nRetry....</h5>';
    }
}

getCar();

const update = async () => {
    try {
        failedDom.innerHTML = '<h5 class="empty-list">Loading...</h5>';
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

        await axios.patch(`/api/vehicle/cars/${id}`, {
            name: name,
            price: price,
            engine: engine,
            power: power,
            imageUrl: imageUrl,
            mileage: mileage,
            fuel: fuel,
            groundClearance: groundClearance,
            numberOfCylinders: numberOfCylinders,
            maxTorque: maxTorque,
            bodyType: bodyType,
            transmissionType: transmissionType,
        });

        failedDom.innerHTML = '<h5 class="empty-list">Update Success...</h5>';
    } catch (error) {
        failedDom.innerHTML = '<h5 class="empty-list">Failed to update. Retry....</h5>';
    }
};




const loadImg = () => {
    const imV = imageUrlDOM.value;
    imgDOM.innerHTML = `<img class="pic" src="${imV}" alt="">`;
  };