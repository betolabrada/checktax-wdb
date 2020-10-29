<template>
  <div class="log-in-content p-5 d-flex justify-content-center">
    <div class="col">
      <form>
        <div class="form-group">
          <label for="email">Usuario</label>
          <input type="email" class="form-control" id="email" />
        </div><br>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" />
        </div><br>
        
        <div class="text-center">
          <button type="submit" class="btn btn-success" id="submit">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

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