<script>
  import { get } from 'svelte/store';
  import { authStore } from '$lib/stores/authStore';
  import { onMount } from "svelte";
  
  let proposals = [];
  let filteredProposals = [];
  let selectedCategory = '';
  let selectedInvestmentRange = '';
  let error = '';

  // Retrieve userId from the authStore
  const { userId, token } = get(authStore);
  console.log(`userId: ${userId}, token: ${token}`);

  async function fetchProposals() {
    if (!userId) {
      error = 'User not authenticated';
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/asset/user-assets?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch proposals');

      proposals = await response.json();
      filteredProposals = proposals; // Initially show all proposals
    } catch (err) {
      error = err.message;
      console.log(`Error: ${err.message}`);
    }
  }

  function applyFilters() {
    filteredProposals = proposals.filter((proposal) => {
      const categoryMatch = selectedCategory ? proposal.category === selectedCategory : true;
      let investmentMatch = true;
      if (selectedInvestmentRange) {
        const [min, max] = selectedInvestmentRange.split('-').map(Number);
        investmentMatch = proposal.investmentRequired >= min && proposal.investmentRequired <= max;
      }
      return categoryMatch && investmentMatch;
    });
  }

  // Fetch proposals on page load
  onMount(fetchProposals);
</script>

<!-- HTML & Template for Proposals -->
<h1 class="text-4xl font-bold text-center text-gray-800 mb-8 dark:text-white">
  Browse Proposals: Your Investment Opportunities Await! 💼
</h1>

<div class="mb-6 flex flex-wrap justify-center gap-4">
  <select bind:value={selectedCategory} class="p-2 bg-gray-100 rounded-lg border dark:bg-gray-700" on:change={applyFilters}>
    <option value="">All Categories</option>
    <option value="Tech">Tech</option>
    <option value="Finance">Finance</option>
    <option value="Healthcare">Healthcare</option>
  </select>

  <select bind:value={selectedInvestmentRange} class="p-2 bg-gray-100 rounded-lg border dark:bg-gray-700" on:change={applyFilters}>
    <option value="">Any Investment Range</option>
    <option value="0-10000">0 - 10,000</option>
    <option value="10001-50000">10,001 - 50,000</option>
    <option value="50001-100000">50,001 - 100,000</option>
  </select>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {#if error}
    <p class="text-center text-red-500">{error}</p>
  {:else if filteredProposals.length === 0}
    <div class="p-4 text-center col-span-full">
      <p>No proposals found. To add a new proposal, please visit the 'Proposal Submission' section.</p>
    </div>
  {:else}
    {#each filteredProposals as proposal}
      <div class="w-full max-w-sm bg-white border rounded-lg shadow-md dark:bg-gray-800 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <div class="px-5 pb-5">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{proposal.title}</h5>
          <p class="text-sm text-gray-700 dark:text-gray-400">Investment Requirement: ${proposal.investmentRequired}</p>
          <p class="text-sm text-gray-700 dark:text-gray-400">Potential Returns: {proposal.potentialReturns}%</p>
          <a href={`/view/${proposal.id}`} class="text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5">View Details</a>
        </div>
      </div>
    {/each}
  {/if}
</div>
