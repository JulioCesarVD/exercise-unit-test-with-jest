// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');


// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


// Comienza tu primera prueba
test('adds 14 + 10 to equal 24', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 10);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(24);
});


test("10 euros should be 10.70 dollars", function(){
    
    const dollars = fromEuroToDollar(10);
    const expected = 10 * 1.07;
    expect(dollars).toBe(expected);
});

test("10 dollars should be (10 / 1.07) * 156.5 yen", function(){
    
    const yenes = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5;
    expect(yenes).toBe(expected, 5);
});

test("One thousand yen should be (1000 / 156.5) * 0.87 pounds", function(){
    
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 5);
});