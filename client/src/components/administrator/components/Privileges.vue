<template>
  <div id="privileges" class="p-2">
    <div class="row">
      <div class="col-8">
        <!--SEARCH USER-->
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Buscar usuario</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Usuario"
            aria-label="Username"
          />
        </div>
        <!--SEARCH USER-->
      </div>
      <div class="col-4" id="save">
        <!--SAVE BUTTON-->
        <button class="btn btn-success">Guardar</button>
        <!--SAVE BUTTON-->
      </div>
    </div>
    <!--PRIVELGES LIST-->
    <div id="privileges">
      <div id="Cotizaciones">
        <h5>Cotizaciones</h5>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck1"
          />
          <label class="custom-control-label" for="customCheck1">Acceso</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck2"
          />
          <label class="custom-control-label" for="customCheck2"
            >Escritura</label
          >
        </div>
      </div>
    </div>
    <!--PRIVELGES LIST-->
  </div>
</template>

<script>
import { Vue } from "vue-property-decorator";
export default class Privileges extends Vue {}
</script>

<style scoped>
#save {
  text-align: right;
}
</style>