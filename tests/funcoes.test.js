
const contagem = require('../funcoes/contagem');

test(`contagem 1 a 7 = ${contagem([1, 7])}` , () => {
    const dados = [1, 7];
    const resultado = contagem(dados);
    expect(resultado).toBe(7); 
});

test(`contagem 4 a 9 = ${contagem([4, 9])}` , () => {
    const dados = [4, 9];
    const resultado = contagem(dados);
    expect(resultado).toBe(6); 
});


const fibonacci = require('../funcoes/fibonacci');

test(`fibonacci 6 = ${fibonacci(6).join(', ')}`, () => {
    const resultado = fibonacci(6);
    expect(resultado).toEqual([0, 1, 1, 2, 3, 5]);  
  });

  test(`fibonacci 3 = ${fibonacci(3).join(', ')}`, () => {
    const resultado = fibonacci(3);
    expect(resultado).toEqual([0, 1, 1]);  
  });


const mdc = require('../funcoes/mdc');

test(`mdc 35, 45 = ${mdc(35, 45)}` , () => {
    const resultado = mdc(35, 45);
    expect(resultado).toBe(5);
});

test(`mdc 10, 20 = ${mdc(10, 20)}` , () => {
    const resultado = mdc(10, 20);
    expect(resultado).toBe(10);
});


const ordenacao = require('../funcoes/ordenacao');

test(`ordenação [15, 13, 14, 10, 5, 8, 3] = ${ordenacao([15, 13, 14, 10, 5, 8, 3])}` ,() => {
    const array = [15, 13, 14, 10, 5, 8, 3];
    const resultado = ordenacao(array);
    expect(resultado).toEqual([3, 5, 8, 10, 13, 14, 15]);
});

test(`ordenação [10, 8, 9, 5, 4, 3, 1] = ${ordenacao([10, 8, 9, 5, 4, 3, 1])}` ,() => {
    const array = [10, 8, 9, 5, 4, 3, 1];
    const resultado = ordenacao(array);
    expect(resultado).toEqual([1,3,4,5,8,9,10]);
});


const primo = require('../funcoes/primo');

test(`3 é primo= ${primo(3)}` ,() => {
    expect(primo(3)).toBe(true);

});

test(`10 é primo = ${primo(10)}` , () => {
    expect(primo(10)).toBe(false);
});

const soma = require('../funcoes/soma');

test(`soma da lista: [1, 2, 5, 7] = ${soma([1, 2, 5, 7])}` , () => {
    const lista = [1, 2, 5, 7];
    const resultado = soma(lista);
    expect(resultado).toBe(15);
});

test(`soma da lista: [5, 7, 9, 11] = ${soma([5, 7, 9, 11])}` , () => {
    const lista = [5, 7, 9, 11];
    const resultado = soma(lista);
    expect(resultado).toBe(32);
});