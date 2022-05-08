/**
 * Created by andrey on 08.05.2022.
 */

var Solder = function (type) {
    this.type = type;
    this.code = Math.floor(Math.random() * Solder.GetSoldersAmount(type)) + 1;

    this.health = Solder.HEALTH;
    this.damage = Math.ceil(Math.random() * (Solder.DAMAGE[1] - Solder.DAMAGE[0])) + Solder.DAMAGE[0];
};

Solder.GetSoldersAmount = function (type) {
    var amount = 1;
    while (resources[type + (amount + 1) + '_json']) {
        amount++;
    }
    return amount;
};

Solder.HEALTH = 100;
Solder.DAMAGE = [10, 20];