# rand-driven-ts

### Weighted Random Number Generator
This is a TypeScript function that allows you to generate random numbers based on specified probabilities. The function `weightedRandomNumber` takes an array of objects, where each object represents a number along with its probability of being selected. The probabilities should be normalized, meaning they should sum up to 1. The function then returns a random number based on the given probabilities.

# Usage
1. Import the function and define the weighted numbers:

````
import { weightedRandomNumber, WeightedNumber } from './weighted-random';

const weightedNumbers: WeightedNumber[] = [
{ number: 1, probability: 0.1 },
{ number: 2, probability: 0.05 },
{ number: 3, probability: 0.2 },
{ number: 4, probability: 0.15 },
{ number: 5, probability: 0.1 },
{ number: 6, probability: 0.1 },
{ number: 7, probability: 0.05 },
{ number: 8, probability: 0.1 },
{ number: 9, probability: 0.1 },
{ number: 10, probability: 0.05 },
];
````


1. Call the function to get a random number:
````
const randomValue: number = weightedRandomNumber(weightedNumbers);
console.log(randomValue); // Outputs a random number based on probabilities
````

## Example Explanation
In the provided example, we have an array of `WeightedNumber` objects with numbers ranging from 1 to 10. Each object contains a `number` and a `probability`, representing the likelihood of that number being selected. The `probability` values have already been normalized to ensure they sum up to 1.

For instance, if we run the function `weightedRandomNumber(weightedNumbers)`, the output will be a random number based on the probabilities assigned to each number. The number 10 has the highest probability (1.0) and will be selected most frequently, while the numbers with lower probabilities have a reduced chance of being chosen.


# Author:

````
Name:          Nikita
Mail:          n.vtorushin@inbox.ru
TG:            @n.vtorushin
Year of birth: 1999
About me:      vns.guru
````