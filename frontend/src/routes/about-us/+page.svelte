<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
  </script>
  
  <Navbar />
  <section class="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center relative">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <h1 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">About Us</h1>
      <p class="mb-6 text-lg text-gray-500 lg:text-xl dark:text-gray-400">
        Welcome to CoopHive, where we aim to connect and empower cooperative housing societies through innovative solutions...
        CoopHive is a decentralized platform built to revolutionize the management and governance of cooperative housing societies (CHS). 
        Using the power of blockchain and decentralized autonomous organizations (DAOs), CoopHive streamlines decision-making, transparency, and collaboration among residents. 
        It empowers members to vote on key issues, manage resources, and stay informed, ensuring a seamless, community-driven approach to cooperative living. 
        Designed with simplicity and security in mind, CoopHive is set to redefine how housing societies operate in the digital age. 
    </p>
    <section class="bg-white dark:bg-gray-900 py-8">
        <div class="mx-auto max-w-screen-xl text-center">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Our Services</h2>
          <p class="text-lg text-gray-500 dark:text-gray-400 my-4">
            Explore the range of services we offer to streamline your Cooperative Housing Society management.
          </p>
          <div class="grid gap-8 md:grid-cols-3">
            <div class="service-box bg-gray-100 p-6 rounded-lg transition hover:bg-red-800 hover:text-white">
              <a href="/login"> 
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
  </section>
  
  <Footer />
  