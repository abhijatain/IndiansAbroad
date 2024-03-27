<template>
  
<!-- Button trigger modal -->
<div   data-bs-toggle="modal" data-bs-target="#exampleModal">
  <slot></slot>
</div>

<!-- Modal -->
<div class="modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-3 shadow">
      <div class="modal-body p-4 text-center">
        <h5 class="mb-0">Login Required!</h5>
        <p class="mb-0">You can always change your mind in your account settings.</p>
      </div>
      <div class="modal-footer flex-nowrap p-0">
        <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end"><strong>Login</strong></button>
        <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
  
</div>

</template>