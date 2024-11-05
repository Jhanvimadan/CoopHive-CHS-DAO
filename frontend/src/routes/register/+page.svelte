<script>
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import { onMount } from 'svelte';
  import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';

  const showToast = (message, type) => {
    toasts.add({
      description: message,
      duration: 2500,
      placement: 'top-right',
      type: type || 'info',
      theme: 'dark',
    });
  };

  onMount(() => {
    const registerSuccess = localStorage.getItem('registerSuccess');
    if (registerSuccess) {
      showToast('Registered successfully! Please log in.', 'success');
      localStorage.removeItem('registerSuccess');
    }
  });

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value; // Get name from input
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Store name in localStorage
        localStorage.setItem('userName', name);
        showToast('Registration successful! Redirecting...', 'success');
        setTimeout(() => {
          localStorage.setItem('registerSuccess', 'true');
          window.location.href = '/login';
        }, 2000);
      } else {
        const errorData = await response.json();
showToast(`Registration failed: ${errorData.message || 'Unknown error'}`, 'error');
 }
    } catch (error) {
      showToast(`An error occurred: ${error.message}`, 'error');
    }
  };
</script>

<Navbar />
<section class="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:bg-gray-900 flex items-center">
  <div class="container mx-auto px-4 py-12">
    <div class="lg:flex justify-between items-center">
      <div class="lg:w-1/2 space-y-4">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">CoopHive</h1>
        
        <div class="flex flex-col justify-center">
          <h1 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Welcome to CoopHive</h1>
          <p class="text-lg text-gray-500 dark:text-gray-400">
            Join us to explore exclusive features and transform your digital journey.
            At your Cooperative Housing Society, the decentralized platform that transforms how you manage and invest in cooperative housing societies. Experience unparalleled transparency and control through blockchain technology.
          </p>
        </div>
        <a href="/about-us" class="text-primary-600 dark:text-primary-500 hover:underline font-medium text-lg inline-flex items-center">
          Read more
          <svg class="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-width="2" d="M1 5h12M9 1l4 4-4 4"></path>
          </svg>
        </a>      
      </div>
      <div class="lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Create your account</h2>
        <form class="mt-6 space-y-4" on:submit|preventDefault={handleRegister}>
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input type="text" name="name" id="name" class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700" required />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input type="email" name="email" id="email" class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700" required />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input type="password" name="password" id="password" class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700" required />
          </div>
          <button type="submit" class="w-full bg-red-800 text-white py-3 rounded-lg">Sign Up</button>
          <p class="text-sm text-gray-700 dark:text-gray-400">Already have an account? <a href="/login" class="text-blue-600 dark:text-blue-400 hover:underline">Log in</a></p>
        </form>
      </div>
    </div>
  </div>
</section>

<ToastContainer let:data>
  <FlatToast {data} />
</ToastContainer>
<Footer />
