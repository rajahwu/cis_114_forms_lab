$(function() {
    $('#order').on('submit', function(e) {
      e.preventDefault();
    //   let name = $('#user_name').val();
    //   let address = $('#user_address--delivery').val();
    //   let numberOfPizzas = $('#order_quantity--pizza').val();
    //   let pizzaSize = $('#pizza_size').val();
    //   let pizzaToppings = $('#pizza_toppings').val();
    //   console.log(name, address, numberOfPizzas, pizzaSize, pizzaToppings);

    console.log(this.elements);

    // let elements = this.elements;
    // let index = 0;
    // while (elements.item(index) !== null) {
    //   let el = elements.item(index);
    //   if($('input[type="checkbox"]') || $('input[type="radio"]') && $(this).prop('checked') == true) {
    //       console.log($(el).val());
    //   } else if($('input[type="text"]') || $('input[type="number"]')) {
    //     console.log($(el).val());
    //   }
    
    //   index++;
    // }

    });
  });
