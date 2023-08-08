<script setup>

import {reactive, onMounted, computed} from "vue";
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'

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
const form = reactive({
  email: '',
  password: '',
  name: '',
  confirmationPassword: '',
});

const handleSubmit = (event) => {
  event.preventDefault();
  if (form.password.length <= 7) {
    Toast.fire({
      icon: 'info',
      title: 'Password should be minimum 8 digits.'
    })
    return;
  }

  if (form.confirmationPassword !== form.password) {
    Toast.fire({
      icon: 'info',
      title: 'Confirmation Password does not match.'
    })
    return;
  }

  localStorage.removeItem('users');
  localStorage.setItem('users', JSON.stringify(form));
  Toast.fire({
    icon: 'info',
    title: 'Registration Successfully. Please login with credential.'
  })
  router.push('/');

}

</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        User Registration
      </a>
      <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit="handleSubmit">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
              <input type="text" v-model="form.name" name="name" id="name"
                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="enter name" required="">
            </div>

            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
              <input type="email" v-model="form.email" name="email" id="email"
                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="name@company.com" required="">
            </div>
            <div>
              <label for="password"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" v-model="form.password" name="password" id="password" placeholder="••••••••"
                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required="">
            </div>

            <div>
              <label for="confirmationPassword"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmation Password</label>
              <input type="password" v-model="form.confirmationPassword" name="confirmationPassword" id="confirmationPassword" placeholder="••••••••"
                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required="">
            </div>

            <!--            <div class="flex items-center justify-between">
                          <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox"
                                     class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                     required="">
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                          </div>
                          <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                            password?</a>
                        </div>-->
            <button type="submit"
                    class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Sign Up
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              <router-link to="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log In</router-link>
            </p>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>