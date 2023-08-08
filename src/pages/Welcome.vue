<script setup>
import {computed} from "vue";
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
const router = useRouter();

const getUserInformation = computed(() => {
  return JSON.parse(localStorage.getItem('users'));
});


function logout(){
  localStorage.removeItem('users');
  Toast.fire({
    icon: 'success',
    title: 'Logout Successfully.'
  })
  router.push('/');
}

</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="JavaScript:void(0)" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Welcome
      </a>
      <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Dashboard
          </h1>

            <p v-if="getUserInformation" class="text-sm font-light text-gray-500 dark:text-gray-400">
              Dear {{ getUserInformation.name }}, <br>
              welcome to dashboard. <br><br>
              <b>Email:</b> {{ getUserInformation?.email }} <br>
              <b>Password:</b> {{ getUserInformation?.password }}
            </p>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>