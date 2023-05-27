$(document).ready(function() {
  var totalAmount = 0; 
  
  $('input[type="checkbox"]').on('change', function() {
    if ($(this).is(':checked')) {
      var dishName = $(this).siblings('.item-name').text();
      var priceText = $(this).parent().text().match(/\$\d+/); 
      var price = parseInt(priceText[0].substring(1)); 
      var quantity = parseInt(prompt('Enter quantity for ' + dishName + ':'));
      var amount = quantity * price;
      
      totalAmount += amount; 
      
      var newRow = $('<tr>');
      newRow.append($('<td>').text(dishName));
      newRow.append($('<td>').text(quantity));
      newRow.append($('<td>').text('$' + price));
      newRow.append($('<td>').text('$' + amount));
      
      $('#myModal .table').append(newRow);
    }
  });
  
  $('#myModal').on('shown.bs.modal', function() {
    $('#myModal .total-amount').text('Total Amount: $' + totalAmount); 
  });
});

$(document).ready(function() {
  // ... Previous code
  
  $('#pay').on('click', function() {
    
    var orderNumber = Math.floor(Math.random() * 1000000);
    
    $('#orderNumber').text(orderNumber);
    $('#orderSuccessModal').modal('show');
  });
});
