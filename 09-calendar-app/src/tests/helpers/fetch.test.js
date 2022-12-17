import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";


describe('Tests for fetch helpers', () => {

    let token;
   
    test('should make a succesfull request without token', async() => {
        
        const response = await fetchWithoutToken('auth', {
            email: 'test@testing.com',
            password: '123456'
        }, 'POST');

        expect(response instanceof Response).toBe(true);

        const body = await response.json();
        expect(body.ok).toBe(true);
        token = body.token;
    });
    
    test('should make a succesfull request with token', async () => {
       
        localStorage.setItem('token', token);

        const response = await fetchWithToken('events/611c30ad1511c36dab6956ea', {}, 'DELETE');
        const body = await response.json();
        expect(body.msg).toBe('No existe un evento con ese id');
    });
    

});
