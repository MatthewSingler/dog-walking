import { getPets, getWalkers } from "./database.js"


const pets = getPets()
const walkers = getWalkers()
export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [, walkerId] = itemClicked.id.split("--")
            
            for (const pet of pets) {
                if (pet.id === parseInt(walkerId)) {
                    const whosWalkingWho = pets.filter(
                        (pet) => {
                            if (pet.walkerId === parseInt(walkerId)) {
                                return true
                            }
                        }
                    )
                    window.alert(`${walker.name} is currently walking ${whosWalkingWho.length}`)
                }
                
            }
        }
    }
)