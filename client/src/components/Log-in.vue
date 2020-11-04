<template>
  <div class="log-in-content p-5 d-flex justify-content-center">
    <div class="col">
      <form>
        <div class="form-group">
          <label for="username">Usuario</label>
          <input type="text" class="form-control" id="username" v-model="username"/>
        </div><br>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" v-model="password"/>
        </div><br>
        
        <div class="text-center">
          <button type="button" class="btn btn-success" id="login" @click="login">
            Iniciar sesión
          </button>
        </div>
        <p v-if="msg">{{ msg }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import authService from '../services/auth.js';
export default {
  data(){
    return {
      username: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    async login(){
      try {
        const credentials = {
          username: this.username,
          password: this.password
        };
        const response = await authService.login(credentials);
        this.msg = response.msg;
        const token = response.token;
        const user = response.user;
        this.$store.dispatch('login', {token, user});
        this.$router.push('/Home');
      } catch (error) {
        this.msg = error;
      }
    }
  }
}
</script>>

<style scoped>

#email {
  text-align: center;
}
#password {
  text-align: center;
}
.col {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}
label{
  font-size: 2.5rem;
  display: inline-block;
  width: 180px;
  text-align: center;
  margin-right: 2.5rem;
}

input{
  width: 20rem !important;
  height: 3rem !important;
}

#submit{
  font-size: 2.5rem;
}
</style>