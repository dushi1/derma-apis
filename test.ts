import cities from "./dermacities.json";
import { StateCity } from "./src/entity/statecity.entity";

const statecity = cities.map((data) => {
    return { city: data.city, state: data.state }
})

console.log(statecity);
