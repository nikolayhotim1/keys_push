"usestrict";
let map = new Map();

map.set("name", "Nikolay")
    .set("surname", "Hotim");

let values = Array.from(map.values());

values.push("is #1");
alert(values);