$(document).ready(function () {
  let dropdown = $(".dropdown");
  let dropdownContainer = $(".dropdown-container");

  dropdown.hide();

  dropdownContainer.hover(
    (event) => {
      let hoveredDropdown = $(event.target).find(".dropdown");
      hoveredDropdown.show();
    },
    (event) => {
      let hoveredDropdown = $(event.target).find(".dropdown");
      hoveredDropdown.hide();
    }
  );

  dropdown.mouseleave(() => {
    dropdown.hide();
  });

  // Select the spans
  var emailSpan = $(".text-email");
  var shippingSpan = $(".text-shipping");

  // Hide the shipping span initially
  shippingSpan.hide();

  // Set the interval to switch between spans every 3 seconds
  setInterval(function () {
    if (emailSpan.is(":visible")) {
      shippingSpan.css("right", "0");
      shippingSpan.show();
      shippingSpan.animate({ right: "48%" });

      emailSpan.animate({ left: -10 }, () => {
        emailSpan.hide();
        emailSpan.css("left", "");
      });
    } else {
      emailSpan.css("right", "0");
      emailSpan.show();
      emailSpan.animate({ right: "43%" });

      shippingSpan.animate({ left: -5 }, () => {
        shippingSpan.hide();
        shippingSpan.css("left", "");
        emailSpan.show();
      });
    }
  }, 4000); // 3 seconds interval
});
