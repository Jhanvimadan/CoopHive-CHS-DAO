<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const message = event.target.message.value;
  
      // Process form submission logic (e.g., send to an API)
      console.log('Submitted:', { name, email, message });
    };
  </script>
  
  <Navbar />
  <section class="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center relative">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <h1 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h1>
      <form on:submit={handleSubmit} class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
          <input type="text" name="name" id="name" required
            class="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
          <input type="email" name="email" id="email" required
            class="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
          <textarea name="message" id="message" rows="4" required
            class="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:text-white"></textarea>
        </div>
        <button type="submit" class="px-5 py-3 text-base font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800">Send Message</button>
      </form>
    </div>
  </section>
  
  <Footer />
  