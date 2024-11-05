<script>
  import { DarkMode } from 'flowbite-svelte';
  import { HomeOutline } from 'flowbite-svelte-icons';
  import SidebarComponent from './Sidebar.svelte';
  import { authStore } from '$lib/stores/authStore';

  let loggedIn;

  // Subscribe to authStore
  authStore.subscribe((auth) => {
    loggedIn = auth.isLoggedIn;
  });
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
  <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <HomeOutline class="text-primary-500 w-10 h-10" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CoopHive</span>
    </a>
    <div class="flex items-center md:order-2 space-x-4 md:space-x-2 rtl:space-x-reverse">
      <a
      href="/"
      class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-3 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
    >
      Home
    </a>
      <a href="/about-us" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">About Us</a>


      {#if loggedIn}
        <SidebarComponent /> <!-- Keeps the sidebar with the previous Dashboard content -->
        
        <a href="/contact-us" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Contact Us</a>

        <button on:click={authStore.logout} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-3 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Logout</button>
        {:else}
        <a
          href="/login"
          class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-3 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          Login
        </a>
        <a
          href="/register"
          class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-3 md:px-5 md:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          Sign up
        </a>
      {/if}
      <DarkMode />
    </div>
  </div>
</nav>