<script>
  // Import components and stores
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
  import { authStore } from '$lib/stores/authStore';
  import { onMount } from 'svelte';

  // Show toast messages for login/logout status
  const showToast = (message, type = 'info') => {
    toasts.add({
      description: message,
      duration: 2500,
      placement: 'top-right',
      type: type,
      theme: 'dark',
    });
  };

  onMount(() => {
    const logoutSuccess = localStorage.getItem('logoutSuccess');
    if (logoutSuccess) {
      showToast('Logged out successfully', 'success');
      localStorage.removeItem('logoutSuccess');
    }
  });

  // Handle login form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Validate inputs
    if (!email || !password) {
      showToast('Please fill in both email and password fields', 'error');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log(userData);
        authStore.login({
      userId: userData.userId,
      token: userData.token,
      name: userData.name, // Add this to store the user's name
    });
        showToast('Login successful!', 'success');
        setTimeout(() => window.location.href = '/dashboard', 1000);
      } else {
        const errorData = await response.json();
        showToast(`Login failed: ${errorData.message || 'Unknown error'}`, 'error');
      }
    } catch (error) {
      showToast(`An error occurred: ${error.message || 'Unexpected error'}`, 'error');
    }
  };
</script>

<!-- Main Content -->
<Navbar />
<section class="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center relative bg-gradient-to-b from-primary-50 to-transparent dark:from-primary-900 w-full h-full top-0 left-0 z-0">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
    <div class="flex flex-col justify-center">
      <h1 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Welcome to CoopHive</h1>
      <p class="mb-6 text-lg text-gray-500 lg:text-xl dark:text-gray-400">At your Cooperative Housing Society, the decentralized platform that transforms how you manage and invest in cooperative housing societies. Experience unparalleled transparency and control through blockchain technology.</p>
      <a href="/about-us" class="text-primary-600 dark:text-primary-500 hover:underline font-medium text-lg inline-flex items-center">Read more
        <svg class="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-width="2" d="M1 5h12M9 1l4 4-4 4"></path>
        </svg>
      </a>
    </div>
    <div>
      <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Sign in to CoopHive</h2>
        <form class="mt-8 space-y-6" on:submit|preventDefault={handleLogin}>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" placeholder="name@company.com"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white" required>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white" required>
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="remember" name="remember" type="checkbox"
                class="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            </div>
            <label for="remember" class="ms-3 text-sm font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
            <a href="#" class="ms-auto text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Lost Password?</a>
          </div>
          <button type="submit" class="w-full px-5 py-3 text-base font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800">Login</button>
          <div class="text-sm font-medium text-gray-900 dark:text-white">Not registered yet? <a href="/register" class="text-primary-600 hover:underline">Create account</a></div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- Toast Notifications -->
<ToastContainer let:data>
  <FlatToast {data} />
</ToastContainer>

<Footer />
