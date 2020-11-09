<template>
  <div class="log-in-content p-5 d-flex justify-content-center">
    <div class="col">
      <form>
        <div class="main-input-group">
          <label for="email">Usuario</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="main-input-group">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="main-input-group form-check">
          <input type="checkbox" id="remember" />
          <label class="form-check-label" for="remember"
            >Manten mi sesión inciada</label
          >
        </div>
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

.log-in-content {
  background: aqua;
}

#email {
  text-align: center;
}
#password {
  text-align: center;
}
</style>