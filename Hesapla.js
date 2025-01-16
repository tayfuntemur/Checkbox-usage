

const products = [
    { name: "Kitap", price: 100 },
    { name: "Defter", price: 50 },
    { name: "Kalem", price: 10 },
    { name: "Çanta", price: 300 },
    { name: "Silgi", price: 20 }
];


$("#table tbody").empty();

products.forEach(element => {
    $("#table tbody").append(`
        <tr>
            <td><input type="checkbox" class="product-checkbox" data-name="${element.name}" data-price="${element.price}"></td> 
            <td>${element.name}</td>
            <td>${element.price} tl </td>
            <td><input type="number" class="adet" min="1" placeholder="Miktar giriniz" ></td> 
        </tr>
    `);
});

function calculateTotal() {
    let totalCost = 0;
    

    $(".product-checkbox").each(function() {
        // Secili kutulari secmek
        if ($(this).prop("checked")) {
            let price = $(this).data("price");
            let quantity = $(this).closest("tr").find(".adet").val();

            // Geçerli bir miktar girilirse, maliyeti hesapla
            if (quantity && quantity > 0) {
                totalCost += price * quantity;
            }
        }
    });

    // Update toplam fiyati
    $("#total-cost").text(totalCost.toFixed(2));
}


function resetInputs() {
    $(".product-checkbox").prop("checked", false); 
    $(".adet").val('');
    $("#total-cost").text('0'); 
}


$("#calculate-button").on("click", function() {
    calculateTotal(); 
  
});
$("#reset-button").on("click", function() {
    
    resetInputs(); 
});

class mert {
    //mdn object.create;
}

const person ={
    isHuman :false,
    printproduction: function(){
        console.log(`benim adim ${this.name}. Ben bir insanmıyım ? ${this.isHuman} `);
    },
};

 function guzelseyler (){
    console.log(`sen guzel birisin ${this.name}`);
}

const ben=Object.create(person);
ben.isHuman=true;
ben.name="tayfun";
ben.printproduction();

ben.isHuman=false;
ben.name="karabas";
ben.printproduction();


person.forEach(element => {
    console.log(`${element.name}`);
});
    
