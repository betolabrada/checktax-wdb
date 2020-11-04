import axios from 'axios';

const apiClient = axios.create({
    baseURL: `http://localhost:3000/api`,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
    }
});

export default {
    login: (credentials: JSON) => apiClient.post('/login/login', credentials),
    getData: () => apiClient.get(''),
    postData: () => apiClient.post('', {}),
    updateData: () => apiClient.put('', {}),
    removeData: () => apiClient.delete(''),
    getFinanzas: () => apiClient.get('/finanzas/getAll'),
    getFinanza: (num: number) => apiClient.get('/finanzas/get', { params: { operacion: num } } ),
    postOperacion: (data: any) => apiClient.post('/finanzas/post', data)
}