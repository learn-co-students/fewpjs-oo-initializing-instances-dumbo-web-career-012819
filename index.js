// Write your code here
class Breakfast {
  constructor(food, drink) {
    this.food = food
    this.drink = drink

  }
}

let monday = new Breakfast('bagel', 'monster');

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad
    this.soup = soup
    this.drink = drink

  }
}

let tuesday = new Lunch('good salad', 'tasty soup', "some soda");

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad
    this.soup = soup
    this.entree = entree
    this._dessert = dessert
  }
}

let tuesday_night = new Dinner('good salad', 'tasty soup', "burger", "cookies");