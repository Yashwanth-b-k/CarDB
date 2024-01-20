console.log('hello cardb');

const cardDOM = document.querySelector('.card-container');
const searchTextDOM = document.querySelector('.searchText');
const searchBtnDOM = document.querySelector('.searchBtn');

let page = 1;
const populate = async (name,page) => {
    try {
        cardDOM.innerHTML = `<h5 class="empty-list">Loading.......</h5>`;
        const { data: { cars } } = await axios.get(`/api/vehicle/cars?name=${name}&page=${page}`);
        if (cars.length<1){
            cardDOM.innerHTML = `no cars to show from database`;
            return;
        }
        const allCars = cars.map((car)=>{
            const {name,mileage,fuel,engine,power,price,imageUrl,_id:carID} = car;
            return ` <div class="product-card">
            <div class="p-img">
                <img src="${imageUrl}" alt="">
            </div>
            <div class="p-details">
                <h3>${name}</h3>
                <p>milage: <span>${mileage}</span></p>
                <p>Fuel: <span>${fuel}</span></p>
                <p>Engine: <span>${engine}</span></p>
                <p>Horse Power: <span>${power}</span></p>
            </div>
            <div class="p-price">
                <h5>Price: <span>Rs ${price}*</span></h5>
                <a href="details.html?id=${carID}"><button>Details</button></a>
                <a href="./update/edit.html?id=${carID}"><button>Edit</button></a>
            </div>
        </div>`
        }).join('');
        cardDOM.innerHTML = allCars+`
        <div class="page">
        <button class="navi" onclick="prev()"><-prev</button>
        <button class="navi" onclick="next()">next-></button>
      </div>`;

   
    } catch (error) {
        cardDOM.innerHTML = '<h5 class="empty-list">There was an error, please try later....</h5>'
    }
}
 

const filter = async()=>{
    const name = searchTextDOM.value;
    populate(name,1);
}
const prev = async()=>{
    if(page>1){
        const name = searchTextDOM.value;
        page--;
        populate(name,page)
    }

}
const next = async()=>{
    const name = searchTextDOM.value;
    page++;
    populate(name,page)
}
populate('',1);
