<template>
<!-- Button trigger modal -->
<div   data-bs-toggle="modal" data-bs-target="#exampleModal">
  <slot></slot>
</div>

<!-- Modal -->
<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-body">
        To enjoy a full experience of our features, Login is required
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <router-link to="/login" >
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Login</button>
        </router-link>
        
      </div>
    </div>
  </div>
</div>

</template>