const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`)
})

arr.map(value => value * 2);

const arrFlat = [1, 2, 3, 4, 5, ['a', 'f']];

arrFlat.flat();
//[1, 2, 3, 4, 5, 'a','f']

const retorno = arr.find(value => value > 2);
//retorna o primeiro numero maior que 2

const retorno = arr.filter(value => value > 2);
// [3,4]
//retonar uma novo array com todos os elementos que satisfazem a condicao


const retorno = arr.includes(1)
    //true
    //retorna um boolean se existe um item no array


const retorno = arr.some(value => value % 2 == 0)
    //treu
    //retorna se algum item satisfaz a condicao


const retorno = arr.every(value => value % 2 == 0)
    // para saber se todos os itns satisfaz a condicao


const retorno = arr.sort()
    //ordenar elementos de um array


const retorno = arr.reverse()
    //reverter o sentido do array


const retorno = arr.join('-')
    // "1-2-3-4-5"    
    //Trnsforma em outro tipo de dado

const retorno = arr.reduce((total, value) => total += value, 0)
//15
// estah retornando a soma os elementos do array