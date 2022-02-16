const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};
  
const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

// Dragon Damage
const dragonDamage = (strength) => Math.floor((Math.random()*strength) + 15);
dragon.damage = dragonDamage(dragon.strength);
console.log(dragon);

// Warrior Damage
const warriorDamage = (strength, weaponDmg) => {
   return Math.floor((Math.random()*(strength * weaponDmg)) + strength);
};
warrior.damage = warriorDamage(warrior.strength, warrior.weaponDmg);
console.log(warrior);

// Mage Damage
const mageDamage = (intelligence, mana) => {
    if (mage.mana < 15) {
        console.log("Não possui mana suficiente");
        return mage.mana -= 0;
    } else {
        mage.damage = Math.floor((Math.random()*(intelligence * 2)) + intelligence);
        mage.mana -= 15;
    }
}
mage.damage = mageDamage(mage.intelligence, mage.mana);
console.log(mage);