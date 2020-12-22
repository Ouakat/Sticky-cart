var CartPlusMinus = $('.cart-plus-minus');

$(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find('[name="qtybutton"]').val();
    if ($button.text() === "+") { var newVal = parseFloat(oldValue) + 1; } else { if (oldValue > 1) { var newVal = parseFloat(oldValue) - 1; } else { newVal = 1; } }
    $button.parent().find('[name="qtybutton"]').val(newVal);
});