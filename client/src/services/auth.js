import service from '../services/Service';

export default {
    login(credentials) {
      return service.login(credentials)
        .then(Response => Response.data);
    }
};