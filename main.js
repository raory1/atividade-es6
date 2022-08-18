const arr = [1,2,3,4,6,8,9]

const newArr = arr.map(item=>item * 2)
console.log(newArr)

const test = () => {
    return {nome: 'Isa'};
}
console.log(teste())

function soma(a = 2, b = 3){
    return a+b;
}

console.log(soma(2))
/*const soma = arr.reduce(function(total, next){
    return total + next;
})

console.log(soma)

const filter = arr.filter(function(item){
    return item % 2 === 0;
})

console.log(filter)

const find = arr.find(function(item){
    return item === 3;
})

console.log(find)*/