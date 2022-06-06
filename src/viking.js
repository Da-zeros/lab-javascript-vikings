// Soldier
class Soldier {

  constructor(paramHealth, paramStrength) {
    this.health = paramHealth 
    this.strength = paramStrength
  }

  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage 
  }
}

// Viking
class Viking extends Soldier {
  constructor(paramName, paramHealth, paramStrength){
    super(paramHealth, paramStrength)
    this.name = paramName
  }

  receiveDamage(damage){
    this.health -= damage
    if(this.health > 0 ){return `${this.name} has received ${damage} points of damage`}
    else if(this.health <= 0){return`${this.name} has died in act of combat`} 
  }
  
  battleCry(){

    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
    if(this.health > 0 ){return `A Saxon has received ${damage} points of damage`}
    else if(this.health <= 0){return`A Saxon has died in combat`} 
  }
}

// War
class War {
  
  vikingArmy=[]
  saxonArmy=[]

  addViking(vikingObj){
    this.vikingArmy.push(vikingObj)
  }

  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj)
  }

  vikingAttack(){
    
    let vikingInd = Math.floor(Math.random() * this.vikingArmy.length)
    let saxonInd = Math.floor(Math.random() * this.saxonArmy.length)

    let life = this.saxonArmy[saxonInd].receiveDamage(this.vikingArmy[vikingInd].strength)
    
    this.saxonArmy = this.saxonArmy.filter(element => element.health > 0)
    
    return life

  }

  saxonAttack(){
    
    let vikingInd = Math.floor(Math.random() * this.vikingArmy.length)
    let saxonInd = Math.floor(Math.random() * this.saxonArmy.length)

    let life = this.vikingArmy[vikingInd].receiveDamage(this.saxonArmy[saxonInd].strength)
    
    this.vikingArmy = this.vikingArmy.filter(element => element.health > 0)
    
    return life

  }

  showStatus(){
    if(this.saxonArmy.length === 0){return "Vikings have won the war of the century!"} 
    else if(this.vikingArmy.length === 0){ return "Saxons have fought for their lives and survived another day..."}
    else if(this.saxonArmy.length === 1 && this.vikingArmy.length === 1){ return "Vikings and Saxons are still in the thick of battle."}
  }
 
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
