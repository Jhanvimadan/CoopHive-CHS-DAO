<section class="bg-white dark:bg-gray-900 relative flex-grow">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">

    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      Your Cooperative Housing Society, Decentralized
    </h1>
    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
      Explore CHS-DAO, the decentralized platform that transforms how you manage and invest in cooperative housing societies. Experience unparalleled transparency and control through blockchain technology.
    </p>
    <a href="/register" class="inline-flex justify-between items-center py-3 px-3 pe-4 mb-7 text-sm text-primary-700 bg-primary-100 rounded-full dark:bg-primary-900 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800">
      <span class="text-xs bg-primary-600 rounded-full text-white px-2 py-1 me-2">New</span>
      <span class="text-sm font-medium">Explore our services!</span>
      <svg class="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
      </svg>
    </a>    
    
    <section class="bg-white dark:bg-gray-900 py-8">
      <div class="mx-auto max-w-screen-xl text-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Our Services</h2>
        <p class="text-lg text-gray-500 dark:text-gray-400 my-4">
          Explore the range of services we offer to streamline your Cooperative Housing Society management.
        </p>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="service-box bg-gray-100 p-6 rounded-lg transition hover:bg-red-800 hover:text-white">
            <a href="#" id="chsCreationLink">
              <h3 class="text-xl font-semibold">CHS Creation</h3>
            </a>
            <p>Create or Manage CHS.</p>
          </div>
          <div class="service-box bg-gray-100 p-6 rounded-lg transition hover:bg-red-800 hover:text-white">
            <a href="#" id="proposalsLink">
              <h3 class="text-xl font-semibold">Proposals</h3>
            </a>
            <p>Browse, view or invest in Proposals.</p>
          </div>
          <div class="service-box bg-gray-100 p-6 rounded-lg transition hover:bg-red-800 hover:text-white">
            <a href="#" id="fundManagementLink">
              <h3 class="text-xl font-semibold">Fund Management</h3>
            </a>
            <p>View expenditure or request funds.</p>
          </div>
        </div>
      </div>
    </section>
    <script>
      // Check if user is logged in (simple example, you'd replace this with actual auth check)
      function isLoggedIn() {
        return localStorage.getItem('loggedIn') === 'true'; // Example login status stored in local storage
      }
      
      // Redirect to login if not logged in, else to the service page
      function redirectToService(serviceUrl) {
        if (!isLoggedIn()) {
          window.location.href = `/login?redirect=${serviceUrl}`; // Redirect to login with service URL as a parameter
        } else {
          window.location.href = serviceUrl; // Go directly to the service
        }
      }
      
      // Add event listeners to service links
      document.getElementById('chsCreationLink').addEventListener('click', function(e) {
        e.preventDefault();
        redirectToService('/C=dashboard/chs');
      });
      
      document.getElementById('proposalsLink').addEventListener('click', function(e) {
        e.preventDefault();
        redirectToService('/Proposals');
      });
      
      document.getElementById('fundManagementLink').addEventListener('click', function(e) {
        e.preventDefault();
        redirectToService('/Fund-Management');
      });
      </script>
  </div>
  <div class="bg-gradient-to-b from-primary-50 to-transparent dark:from-primary-900 w-full h-full absolute top-0 left-0 z-0"></div>
</section>

