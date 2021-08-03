import { getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target //Whatever we are clicking on we are saying that it is our click event target and it needs to be stored in a variable so we can access it later. itemClicked is that variable//
        if (itemClicked.id.startsWith("walker")) {     //Now we can say that if our item clicked has an id that starts with walker, which we assigned below from our list element inside of our html.
            const [, walkerId] = itemClicked.id.split("--")  //Then split the string, because in our list element id below we used two dashes after our walker attribute, so that we only save the id portion of the walker string. 

            for (const walker of walkers) {  //Now we can iterate through the entire walkers array and look at each walker.
                if (walker.id === parseInt(walkerId)) {  //Within that iteration we can find out if the walker.id property, which we get from the actual walker object within the walkers array(.notation), is equal to the walkerId, which we got from above by taking the item clicked id and storing it in the walkerId variable, by the way it is a string because it came from the list element string so we use parseint to mak eit a number, then we can create a window alert that tells us the walker.name, which comes from the database serves the city. 
                    window.alert(`${walker.name} services ${walker.city}`)  //We needed to do all of that so that we could match the walker to the city because in the databse it just has a walker.id, .name, .city. and we are only interested in talking about data with its unique id and not its name property because names are not as unique as ids.
                }
            }
        }
    }
)

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`


    }

    walkerHTML += "</ul>"
    return walkerHTML
}

