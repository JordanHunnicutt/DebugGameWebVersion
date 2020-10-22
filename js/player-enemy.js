//Different character classes

class Weapon
{
    constructor()
    {
        this._name = "fists";
        this._damage = 5;
    }

    get name()
    {
        return this._name;
    }

    set name(newName)
    {
        this._name = newName;
    }

    get damage()
    {
        return this._damage;
    }

    set damage(newName)
    {
        this._dam = newDam;
    }
}

class Player{
	
    constructor(name)
    {
        this._name = name;
        this._health = 30;
        this._weapon = new Weapon();
    }

    get name()
    {
        return this._name;
    }

    set name(newName)
    {
        this._name = newName;
    }

    get health()
    {
        return this._health;
    }

    set health(newHealth)
    {
        this._health = newHealth;
    }

    get weapon()
    {
        return this._weapon;
    }

    set weapon(newWeapon)
    {
        this._weapon = newWeapon;
    }
}

class Enemy{

    constructor()
    {
        this._health = 20;
        this._strength = 3;
    }

    get health()
    {
        return this._health;
    }

    set health(newHealth)
    {
        this._health = newHealth;
    }

    get strength()
    {
        return this._strength;
    }

    set strength(newStrength)
    {
        this._strength = newStrength;
    }

}
