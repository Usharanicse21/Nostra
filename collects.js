var search = document.getElementById("search")
var product = document.getElementById("img_container")
var productlist = product.querySelectorAll(".img_card")

console.log(productlist)
search.addEventListener("keyup",function()

{
    var enteredvalue = event.target.value.toUpperCase()
    
    for(count=0;count<productlist.length;count=count+1)
        {
            var productname = productlist[count].querySelector("h1").textContent

          if(productname.toUpperCase().indexOf(enteredvalue)<0 )
            {
                productlist[count].style.display="none"
            }
            else
            {
                productlist[count].style.display="inline"
            }
        }
        }
    )
        // Category Filter Options

    document.addEventListener("DOMContentLoaded", function () {
    // Select all checkboxes inside .checkBox
    const checkboxes = document.querySelectorAll(".checkBox input");

    // Select all product cards
    const imgCards = document.querySelectorAll(".img_card");

    // Add an event listener to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterItems);
    });

    function filterItems() {
        let selectedFilters = []; // Create an empty array to store selected filters

        // Loop through each checkbox to check if it's checked
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedFilters.push(checkbox.value); // Add checked checkbox value to the array
            }
        });

        // Loop through each product card to check if it matches selected filters
        imgCards.forEach(card => {
            // Get the hidden category text and convert it into an array
            const categories = card.querySelector(".categories").textContent.split(",");

            // Check if the product matches any selected filters
            if (selectedFilters.length === 0) {
                // If no filters are selected, show all products
                card.style.display = "block";
            } else {
                // Check if at least one selected filter is present in the categories
                let isMatch = selectedFilters.some(filter => categories.includes(filter));

                // Show or hide the product based on the match
                if (isMatch) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        });
    }
});

    