const Weapon = (function () {
    class Weapon {
        constructor(name, damage) {

            let damage = d;
            if (((typeof name === 'string')|| name === null) && ((typeof damage === 'number')|| damage === null)) {

                
                if (d.name === undefined)
                    d.name = null;
                if (d.damage === undefined)
                    this.damage = 0;
                if (this.name === undefined)
                    this.name = null;
                if (this.damage === undefined)
                    this.damage = 0;
                (function () {
                    d.name = name;
                    d.damage = damage;
                })();
            }
            else if (name === undefined && damage === undefined) {
               
                if (this.name === undefined)
                    this.name = null;
                if (this.damage === undefined)
                    this.damage = 0;
                if (this.name === undefined)
                    this.name = null;
                if (this.damage === undefined)
                    this.damage = 0;
                (function () {
                    d.name = "fists";
                    d.damage = 5;
                })();
            }

            else
                throw new Error('invalid key-stroke');
        }
        getName() {
            return this.name;
        }
        setName(name) {
            this.name = name;
        }
        getDamage() {
            return this.damage;
        }
        setDamage(damage) {
            this.damage = damage;
        }
        static makeWeapon(w) {
            switch ((w.toUpperCase())) {
                case "sword":
                    return new Weapon("sword", 15);
                default:
                    return new Weapon();
            }
        }
    }
    return Weapon;
}());
