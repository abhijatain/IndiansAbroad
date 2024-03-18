<script setup>
import { ref } from 'vue'

let voilent = ref(true)
let political = ref(true)
let religion = ref(true)
let other = ref(true)

const emit = defineEmits(['inFocus', 'filterData'])


function filter_by() {
    emit('filterData',{'v':voilent.value,'p':political.value,'r':religion.value,'o':other.value})
}
</script>

<template>
<div class="row d-flex justify-content-center p-2">
    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <label class="btn" :class="{'btn-danger': voilent, 'btn-outline-danger': !voilent}" @click="voilent = !voilent;filter_by()" :key="voilent">Voilent</label>
    <label class="btn" :class="{'btn-warning': political, 'btn-outline-warning': !political}" @click="political = !political;filter_by()" :key="political">Political</label>
    <label class="btn" :class="{'btn-success': religion, 'btn-outline-success': !religion}" @click="religion = !religion;filter_by()" :key="religion">Religion</label>
    <label class="btn" :class="{'btn-primary': other, 'btn-outline-primary': !other}" @click="other = !other;filter_by()" :key="other">Success</label>
    </div>
<p class="text-center">Check content based on senstivity</p>
</div>
</template>

<style scoped>
.btn-outline-danger:hover {
      /* Set hover styles to none */
      background-color: inherit !important;
      border-color: inherit !important;
      color: inherit !important;
    }

    .btn-outline-warning:hover {
      /* Set hover styles to none */
      background-color: inherit !important;
      border-color: inherit !important;
      color: inherit !important;
    }
    .btn-outline-success:hover {
      /* Set hover styles to none */
      background-color: inherit !important;
      border-color: inherit !important;
      color: inherit !important;
    }
    .btn-outline-primary:hover {
      /* Set hover styles to none */
      background-color: inherit !important;
      border-color: inherit !important;
      color: inherit !important;
    }
</style>