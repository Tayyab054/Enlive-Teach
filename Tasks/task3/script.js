 // 1. Our starting data
    let data = [
        { id: 1, name: "Apple", price: "$1" },
        { id: 2, name: "Banana", price: "$0.5" },
        { id: 3, name: "Cherry", price: "$2" }
    ];

    const container = document.getElementById("container");

    // 2. Function to display data on the screen
    function renderUI(items) {
        container.innerHTML = ""; // Clear old content

        items.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.textContent = `${item.name} - ${item.price}`;
            container.appendChild(card);
        });
    }

    // 3. Show first data
    renderUI(data);

    // 4. Change data after 3 seconds
    setTimeout(() => {
        console.log("Updating data...");
        data = [
            { id: 1, name: "Apple", price: "$1.2" },  // Price changed
            { id: 4, name: "Dragonfruit", price: "$5" } // New fruit
        ];
        renderUI(data);
    }, 3000);

    // 5. Change again after 6 seconds
    setTimeout(() => {
        console.log("Updating data again...");
        data = [
            { id: 4, name: "Dragonfruit", price: "$4.5" }, // Price changed
            { id: 5, name: "Elderberry", price: "$3" } // New fruit
        ];
        renderUI(data);
    }, 6000);