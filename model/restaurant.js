class Restaurant{
    constructor(
        id,
        name,
        description,
        ratings,
        time,
        discount,
        img,
        meals
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.ratings = ratings;
        this.time = time;
        this.discount = discount;
        this.img = img;
        this.meals = meals;
    }
}

export default Restaurant;