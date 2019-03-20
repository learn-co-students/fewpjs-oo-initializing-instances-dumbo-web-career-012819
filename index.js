// Write your code hered

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.drink = drink;
        this.soup = soup;
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.entree = entree;
        this.salad = salad;
        this._dessert = dessert;
        this.soup = soup
    }
}
