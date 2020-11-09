<template>
  <div id="window">
    <div id="table">
      <h1 id="title">Alta Clientes</h1>
      <table width="100%">
        <tr>
          <td colspan="5" id="titleLine"></td>
        </tr>
        <tr>
          <td class="titleCell">Tipo:</td>
          <td class="inputCell"><input type="text" class="input"></td>
          <td class="blankCell"></td>
          <td class="titleCell">Id Cliente:</td>
          <td class="inputCell"><input type="text" class="input"></td>
        </tr>
        <tr>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
        </tr>
        <tr>
          <td class="titleCell">Razon Social:</td>
          <td class="inputCell" colspan="4"><input type="text" class="input"></td>
        </tr>
        <tr>
          <td class="titleCell">RFC:</td>
          <td class="inputCell" colspan="2"><input type="text" class="input"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
        </tr>
        <tr>
          <td class="titleCell">Calle:</td>
          <td class="inputCell" colspan="4"><input type="text" class="input"></td>
        </tr>
        <tr>
          <td class="titleCell">Colonia:</td>
          <td class="inputCell" colspan="2"><input type="text" class="input"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
        </tr>
        <tr>
          <td class="titleCell">NoExt:</td>
          <td class="inputCell"><input type="text" class="input"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
        </tr>
        <tr>
          <td class="titleCell">NoInt:</td>
          <td class="inputCell"><input type="text" class="input"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
        </tr>
        <tr>
          <td class="titleCell">Ciudad:</td>
          <td class="inputCell"><input type="text" class="input"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
        </tr>
        <tr>
          <td class="titleCell">Estado:</td>
          <td class="inputCell"><input type="text" class="input"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
        </tr>
        <tr>
          <td class="titleCell">CP:</td>
          <td class="inputCell"><input type="text" class="input"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
        </tr>
        <tr>
          <td class="contactoCell" colspan="2">Contacto</td>
          <td class="contactoCell"></td>
          <td class="contactoCell"></td>
          <td class="contactoCell"></td>
        </tr>
        <tr>
          <td class="titleCell">Contacto:</td>
          <td class="inputCell" colspan="3"><input type="text" class="input"></td>
          <td class="inputCell" ><input type="text" class="input"></td>
        </tr>
        <tr>
          <td class="titleCell">Telefono:</td>
          <td class="inputCell" colspan="2"><input type="text" class="input"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
        </tr>
        <tr>
          <td class="titleCell">Correo:</td>
          <td class="inputCell" colspan="3"><input type="text" class="input"></td>
          <td class="inputCell" ><input type="text" class="input"></td>
        </tr>
        <tr>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
          <td class="blankCell"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
div{
  font-family: Roboto;
}
#window{
  border: 5px solid black;
  margin: 20px;
  background-color: #e5e5e5;
}
#title{
  padding-bottom: 30px;
  font-weight: bold;
}
#table {
  padding: 25px;
}
table, th, td {
  border: 1px black dotted;
  border-collapse: collapse;
  empty-cells: show;
}
td:empty::after {
  content: "\00a0";
}
#titleLine {
  background-color: #780e06;
  color: #780e06;
}
.titleCell {
  width: 20%;
  text-align: right;
  color: #780e06;
  background-color: #d49490;
  font-weight: bold;
}
.inputCell {
  width: 20%;
  table-layout: fixed;
  background-color: #f0c1bd;
  opacity: 50%;
}
.input {
  width: 100%;
  box-sizing: border-box;
  border: 0;
  background-color: #f0c1bd;
  opacity: 50%;
}
.contactoCell {
  color: #780e06;
  background-color: #f0c1bd;
  font-weight: bold;
  text-align: left;
}
.blankCell {
  color: white;
  width: 20%;
}
</style> 