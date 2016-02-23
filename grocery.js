$(document).ready(function() {

  var groceries = [
  {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
  {name: "Onions", status: "needed", price: "1.85", quantity: 2},
  {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
  {name: "Limes", status: "complete", price: ".33", quantity: 3},
  {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];


// Before we start anything, string up the css file, this javascript file, and
// the jQuery CDN to grocery.html file.

//1. Display the existing list of grocery items (from the grocery array)
// in an unordered list in the "list" id that already exists in grocery.html.
// Display each item's name, price, and quantity.
// Ex: Tomatoes (5) @ $3.99

  function itemsTotal(){
    for(i=0; i<groceries.length; i++){
     var listItem = groceries[i];
       $("<li>" + listItem.name + " (" + listItem.quantity + ") @ $" + listItem.price + "</li>")
       .appendTo('#list');
    }
    var total = 0;
      for(i=0; i<groceries.length; i++) {
      total += (groceries[i].quantity * groceries[i].price);
    }
    $(".totalCost h4 span").text("$" + total.toFixed(2));
  }
  itemsTotal();


  //2. Use the inputs and add button to add grocery items to the beginning of the list.
  // Default status should be "needed". The item should appear above the existing grocery items.
  function addItem(name, quantity, price){
    var newItem = {name: name, status: "needed", price: price, quantity: parseInt(quantity)};
    groceries.unshift(newItem);
  }

  $(".btn-success").click(function(){
    var name = $("#addItem").val();
    var quantity = $("#addQuantity").val();
    var price = $("#addPrice").val();

    if (name == '' || quantity == '' || price == '') {
      alert("please fill in all of the items");
    }
    else {
      addItem(name, quantity, price);
      itemsTotal();
    }
  });





//3. Make sure that the grocery list displayed updates when you add an item to the list.

//3. Display the total cost of the groceries. Make sure this updates as you add items to the list.




//4. Put a check in to make sure users aren't adding items without a name, price, or quatity.

});



