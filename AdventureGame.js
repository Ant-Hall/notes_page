let characterName = prompt("What is your character's name?")
let characterClass = prompt("Is your character a Warrior, Mage, or a Rogue?")
let health = 100
let baseDamage = 25

alert(`Welcome, ${characterName} the ${characterClass}! You have ${health} health and your base damage is ${baseDamage}.`)

let dragonHealth = 300
action = prompt("You encounter a dragon, do you want to fight or to run?")
    if (action == fight){
    let dragonDamage = Math.floor(Math.random() * 50) 
    health = health - dragonDamage
    alert(`The dragon attacked you and you took ${dragonDamage} damage, your health is now ${health}`)
        if(health == 0) {
            alert("You died!")}
        else { 
        alert("You attack the Dragon")
        dragonHealth = dragonHealth - baseDamage}
        
     
     
     
     
    
    
    
    }
    if (action == run){
    alert("You ran away")
    }
    else{
        alert("The dragon gets confused and flies away, you get knocked back and take 15 damage.") , health = health - 15
    }


