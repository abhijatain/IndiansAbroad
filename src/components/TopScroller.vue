<template>
<div id="container1">
    <div id="objects">
        <!--
        <div class="object">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-secondary" for="btnradio1">Australia</label>
        </div>
        <div class="object">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnradio2">Canadaa</label>
        </div>
        <div class="object">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked>
            <label class="btn btn-outline-secondary" for="btnradio3">Germany</label>
        </div>
        <div class="object">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnradio4">Italy</label>
        </div>
        <div class="object">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnradio4">Uk</label>
        </div>
        <div class="object">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnradio4">Uk</label>
        </div>
     -->

     <a class="nav-link object"  >Germany</a>
      <a class="nav-link object" href="#">Uk</a>
      <a class="nav-link object" href="#">Russia</a>
      <a class="nav-link object" href="#">Italy</a>
      <a class="nav-link object" href="#">Australia</a>
      <a class="nav-link object" href="#">Germany</a>
      <a class="nav-link object" href="#">Uk</a>
      <a class="nav-link object" href="#">Russia</a>
      <a class="nav-link object" href="#">Italy</a>
      <a class="nav-link object" href="#">Australia</a>
      
    </div>
  </div>
</template>

<style scoped>
#container1 {
  overflow-x:scroll;
  overflow-y:hidden;
  
  margin-bottom:.5rem;
  padding-top:1rem;
  /* Styling */
  
  
}

#objects {
  width: auto;
  white-space:nowrap; 
  padding-right:1rem;
  padding-left:1rem;
 
}

.object {
  display: inline-block;
 
  margin-right: .5rem;
  
}
</style>
