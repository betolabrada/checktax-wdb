<template>
  <div class="p-5 row">
    <div class="col"></div>
    <div class="col">
      <form>
        <div class="form-group">
          <label for="email">Usuario</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="form-group form-check">
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
    <div class="col"></div>
  </div>
</template>

<style scoped>
#email {
  text-align: center;
}
#password {
  text-align: center;
}
</style>