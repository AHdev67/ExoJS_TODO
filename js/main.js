const card = document.querySelector(".todoCard");
        const cardContainer = document.querySelector("#todoCards");
        
        const addBtn = document.querySelector("#btn");
        addBtn.addEventListener("click", addCard);

        const deleteBtn = document.querySelector(".delBtn");
        deleteBtn.addEventListener("click", function(){
            deleteCard(card)
        });

        function addCard(){
            let newCard = card.cloneNode(true);

            let newText = newCard.querySelector(".task")
            newText.value = "New Task";

            let newDeleteBtn = newCard.querySelector(".delBtn");
            newDeleteBtn.addEventListener("click", function(){
                deleteCard(newCard);
            });

            cardContainer.appendChild(newCard);
        }

        function deleteCard(elem){
            elem.remove();
        }