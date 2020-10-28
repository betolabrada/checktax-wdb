import axios from 'axios';

const apiClient = axios.create({
    baseURL: `http://localhost:3000/api`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});

export default {
    getData: () => apiClient.get(''),
    postData: () => apiClient.post('', {}),
    updateData: () => apiClient.put('', {}),
    removeData: () => apiClient.delete(''),

    getFinanzas: () => apiClient.get('/finanzas/getAll'),
    getFinanza: (num: number) => apiClient.get('/finanzas/get', { params: { operacion: num } } ),
    postOperacion: (data: any) => apiClient.post('/finanzas/post', data),
    updateOperacion: (id: string, data: any) => apiClient.patch(`/finanzas/update/${id}`, data),

    getProducto: () => apiClient.get('/finanzas/producto'),
}
