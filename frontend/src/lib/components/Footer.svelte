<script>
  import { HomeOutline } from 'flowbite-svelte-icons';
</script>

<footer class="bg-white shadow dark:bg-gray-900 relative">
  <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <a
        href="/"
        class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <HomeOutline class="text-primary-500 w-10 h-10" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >CHS-DAO</span
        >
      </a>
      <ul
        class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
      >
        <li>
          <a href="/about-us" class="hover:underline me-4 md:me-6">About Us</a>
        </li>
        <li>
          <a href="#" class="hover:underline me-4 md:me-6">How it Works</a>
        </li>
        <li>
          <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
          <a href="/contact-us" class="hover:underline">Contact Support</a>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="flex justify-between items-center flex-wrap">
      <span class="block text-sm text-gray-500 dark:text-gray-400"
        >© 2024 CHS-DAO. All rights reserved.</span
      >
      <span class="block text-sm text-gray-500 dark:text-gray-400 text-right"
        >Building transparency and trust in cooperative housing through blockchain
        innovation.</span
      >
    </div>
  </div>
</footer>
