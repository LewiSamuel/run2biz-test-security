var axios = require("axios").default;

function getOptionsPassword(password) {
    return {
        method: 'POST',
        url: 'http://localhost:5000/v1/question/1/password',
        headers: {'Content-Type': 'multipart/form-data;'},
        data: {password: password}
      }
}
describe('Testes de Senha', () => {

    test('Nao permitir senha menor que 184759', async () => {
        // request
        var options = getOptionsPassword(184759);
        
        let result = await axios.request(options);
        // test
        expect(result.data.valid).toBe(false);
    });

    test('Nao permitir senha maior que 856920', async () => {
        // request
        var options = getOptionsPassword(856920);
        
        let result = await axios.request(options);
        // test
        expect(result.data.valid).toBe(false);
    });

    test('222222 is valid (double 22, never decreases)', async () => {
        // request
        var options = getOptionsPassword(222222);
        
        let result = await axios.request(options);
        // test
        expect(result.data.valid).toBe(true);
    });

    test('236775 is not valid (decreasing pair of digits 75).', async () => {
        // request
        var options = getOptionsPassword(236775);
        
        let result = await axios.request(options);
        // test
        expect(result.data.valid).toBe(false);
    });

    test('345789 is not valid (no double).', async () => {
        // request
        var options = getOptionsPassword(345789);
        
        let result = await axios.request(options);
        // test
        expect(result.data.valid).toBe(false);
    });
    test('334478 is valid because the digits never decrease and all repeated digits are exactly two digits long.', async () => {
        // request
        var options = getOptionsPassword(334478);
        
        let result = await axios.request(options);
        // test
        expect(result.data.valid).toBe(true);
    });
    test('347779 is not valid (the repeated 7 is adjacent three times, 777).', async () => {
        // request
        var options = getOptionsPassword(347779);
        
        let result = await axios.request(options);
        // test
        expect(result.data.valid).toBe(false);
    });
    test('444557 is valid (4 is repeated more than twice but it still contains a double 55).', async () => {
        // request
        var options = getOptionsPassword(444557);
        
        let result = await axios.request(options);
        // test
        expect(result.data.valid).toBe(true);
    });
});