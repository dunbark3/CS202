fetch('collection.json')
      .then(response => response.json())
      .then(data => {
        const content = document.getElementById('content');
        const col_left = document.getElementById('leftCol');
        const col_right = document.getElementById('rightCol');
        data.forEach(item => {
            const card_container = document.createElement('div');
            card_container.classList.add('card-container');

            const card_flip = document.createElement('div');
            card_flip.classList.add('card-flip');

            const card_front = document.createElement('div');
            card_front.classList.add('card-front');

            card_front.innerHTML = `
                <h2>${item.name}</h2>
                <img src="${item.image}" alt="${item.name}" style="width: 120px; height:  140px;">
                <p>${item.state} | Caffeine: ${item.caffeine}</p>
                <p>Complexity: ${item.complexity}</p>
            `;

            const card_back = document.createElement('div');
            card_back.classList.add('card-back');

            card_back.innerHTML = `
                <h3>Flavors: ${item.flavors}</h3>
                <p>Notes: ${item.notes}</p>
                <p>Order: ${item.order}</p>
            `;

            card_flip.appendChild(card_front);
            card_flip.appendChild(card_back);
            card_container.appendChild(card_flip);
            if(item.name == "Mocha" || item.name == "Oatmilk Shaken Espresso" || item.name == "Caramel Ribbon Crunch" || item.name == "Caramel Macchiato" || item.name == "Mocha Americano" || item.name == "Caramel Ribbon Plus" || item.name == "Sweet Cream Shaken" || item.name == "Pumpkin Mocha" || item.name == "Frozen Strawberry" || item.name == "Cookie Dough Frappuccino" || item.name == "Strawberry Vanilla") {
                col_left.appendChild(card_container);
            } else {
                col_right.appendChild(card_container);
            }

            card_container.addEventListener('click', () => {
                card_container.classList.toggle('flipped');
            });
        });
      });