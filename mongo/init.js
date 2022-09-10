db = new Mongo().getDB("potions_shop");

db.createCollection('users', { capped: false });
db.createCollection('potions', { capped: false });

db.users.insert([
    {
        name: "admin",
        email: "admin@potions-shop.com",
        pwd: "root"
    },
    {
        'name': 'visitor',
        'email': 'visitor@anymail.com',
        'pwd': 'password'
    }
]);

db.potions.insert([
    {
        id: "Love Potion" + new Date().toLocaleString(),
        name: "Love Potion",
        desc: "With camelia flowers, oak resine and good vibes.",
        price: 120,
        img: "https://www.toutsurlevin.ca/wp-content/uploads/2020/04/Potion-magique-Tout-sur-le-Vin.jpg",
        created: new Date().toLocaleString()
    },
    {
        id: "Charisma" + new Date().toLocaleString(),
        name: "Charisma",
        desc: "For children, allow them to learn in 1 month how to articulate and express themselves like an young adult.",
        price: 2750,
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fcbcc687028061.5dab84d9eb632.jpg",
        created: new Date().toLocaleString()
    },
    {
        id: "Positivity" + new Date().toLocaleString(),
        name: "Positivity",
        desc: "Spray some drops on the meanest person you know and they won't even think of a bad thing to say during 6h.",
        price: 39.99,
        img: "https://i.pinimg.com/736x/3b/5c/94/3b5c946fcc1fc11d9575b8187f0ff5d4.jpg",
        created: new Date().toLocaleString()
    }
]);