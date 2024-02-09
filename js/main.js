const cardContainer = document.querySelector("#todoCards");

const card = document.querySelector(".todoCard");
const text = card.querySelector(".task");
card.addEventListener("click", function(){
    // clear text area on click.
    text.value = ""; 
});
        
const addBtn = document.querySelector("#btn");
//card addition.
addBtn.addEventListener("click", addCard); 

const deleteBtn = document.querySelector(".delBtn");
deleteBtn.addEventListener("click", function(){
    // card deletion.
    deleteCard(card) 
});

function addCard(){
    //clones card div and it's content.
    let newCard = card.cloneNode(true); 

    let newText = newCard.querySelector(".task")
    // resets default text display to "New task".
    newText.value = "New Task"; 
    newText.addEventListener("click", function(){
        // clear text area on click, but for new cards.
        newText.value = ""; 
    });

    let newDeleteBtn = newCard.querySelector(".delBtn");
    newDeleteBtn.addEventListener("click", function(){
        // ensures function of delete button for new cards.
        deleteCard(newCard); 
    });

    // adds the new card in the container.
    cardContainer.appendChild(newCard); 
}

function deleteCard(elem){
    // anihilates the targeted element with nuclear fire.
    elem.remove(); 
}