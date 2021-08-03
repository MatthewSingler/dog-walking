import { getPets, getWalkers } from "./database.js"


const pets = getPets()  //This is storing the return of the getPets function, which comes from the database and is used to map the pets array in the database and store a copy of it.
const walkers = getWalkers()  //This is storing the return of the getWalkers function, which comes from the database and is mapping the database and storing a copy of it for us to use.



export const RegisteredPets = () => {  //This is allowing us to export the information stored in registeredpets. 
    let petHTML = "<ul>"  //We are storing the unordered list from our html doc, which is stored in main.js, and contains the registered pets function, right here in petHTML.

    for (const pet of pets) { //We are iterating through the pets array and looking at each pet object. 
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`  //Using the list item from our html we give it an id of pet--. This is because we want to be able to use the word pet to identify what we are clicking on down below in our event listener. The += is used to iterate through the list elements. using the pet.id and the pet.name is for ?????
    }

    petHTML += "</ul>"  //???

    return petHTML //Now we return the petHTML variable that we declared above. 
}
const getPetWalkerMatch = (petObject, walkerArray) => {  //We invoke the getpetwalkermatch function and pass along petobject and walkerarray as arguements.
    let walker = null  //Making walker equal to null allows us to pass in whatever we want later on, and also gives us an answer if something is wrong.???
    for (const petWalkerMatch of walkerArray) {  //We iterate through the walkerarray and look at each petwalkermatch to ????
        if (petObject.walkerId === petWalkerMatch.id) {  //where did we getpetObject from??? We used it as an arguement on line 20 but, did we just make it up? If the petObj from the pets array has a walkerId that is equal to the petwalkermatch.id then we set walker equal to petwalkermatch below.
            walker = petWalkerMatch
        }
    }
    return walker  //Now we can return walker and it will show us the walker that was a match from petwalkermatch. But, how did we get petwalkermatch??? Where was is declared?
}

document.addEventListener(  //We are adding and event listener for the entire doc. But we are only interested in a click event if...
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target  //...the target of the click is being stored in the itemclicked variable. 
        if (itemClicked.id.startsWith("pet")) {  //if the itemclicked has an id that starts with pet, which we defined on line 13, then we want store it in the variable walkerId below. 
            const [, walkerId] = itemClicked.id.split("--")  //We can split the item clicked because we put the two dashes in the id above and we only want the id property, and not the name. Does it give us this as an array? Is that why we use the brackets when declaring the variable on line 35?
            
            for (const pet of pets) {  //We iterate through the pets array and look at each pet.
                const lookingForWalker = getPetWalkerMatch (pet, walkers)  //We want to store the getpetwalkermatch in the variable lookingforwalker.  We are using pet and walkers as arguements in our getpetwalkermatch function. Where did we create that function??? I know on line 20 we declared it but, I don't understand that process???
            }
            window.alert(`${lookingForWalker.name} is currently walking ${pets.name}`)  //Now we can have our window alert say that so and so walker is walking so and so pet. Where does lookingforwalker.name come from? I know I declared it on line 38 but, I don't understand how that is working.
        }
    }
)