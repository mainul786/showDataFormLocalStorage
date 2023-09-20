const getInputById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () =>{
    const product = getInputById('product-field');
    const quantity = getInputById('quantity-field');
    // console.log(product, quantity);
    displayContainer(product, quantity);
    setValueLocalStorage(product, quantity);

   // simply version

    // localStorage.setItem(product,  quantity)

};

const getValueLocatStorage = () =>{
    const getData = localStorage.getItem('cart');
    let cart = {};
    if(getData){
        cart = JSON.parse(getData);
    }
    return cart;
};

const setValueLocalStorage = (product, quantity) =>{
    const cart = getValueLocatStorage();
    cart[product] = quantity;
    const value = JSON.stringify(cart);
   
        localStorage.setItem('cart', value);
    
};

const displayContainer = (product, quantity) =>{
    const display = document.getElementById('displayContainer');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    display.appendChild(li);
};

const dipslayDataFormLocatStorage = () =>{
    const cart = getValueLocatStorage();
    // console.log(cart);
    for(let product in cart){
        const quantity = cart[product];
        displayContainer(product , quantity )
    }

}
dipslayDataFormLocatStorage();

