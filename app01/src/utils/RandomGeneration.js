const RandomGeneration = (array,Till) => {

    // parameter
    // const array = [`Richard`, `Steve`, `Paul`, `Pablo`, `Dimitri`,`Hassan`,`Pierre`]

    // current function variables
    var returnRandom = [] // reach 4 items as goal 
    var count=0;

    while (true) {

        if(count==Till || count===array.length){
            break;
        }

        const random = Math.floor(Math.random() * array.length)

        const found = returnRandom.filter(item => item === array[random])[0] !== undefined // returns whether true or false

        if (!found) {
            returnRandom.push(array[random])
            count++;
        }
    }
    
    return returnRandom
}

// issue(random>=array.length)
const issue = condition => condition ? console.log({ issue: `there is issue` }) : false

// simulation // 

// const par1 = [`Richard`, `Steve`, `Paul`, `Pablo`, `Dimitri`,`Hassan`,`Pierre`]
// console.log({listSize:par1.length})

// const list = RandomGeneration(par1,par1.length+50)
// console.log({list,listSize:list.length})

module.exports = {
    RandomGeneration
}