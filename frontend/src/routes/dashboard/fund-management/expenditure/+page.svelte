<script>
    import { onMount } from 'svelte';
    let expenditures = [];
  
    onMount(async () => {
      try {
        const response = await fetch('/api/funds/expenditures');
        expenditures = await response.json();
      } catch (error) {
        console.error('Error loading expenditures:', error);
      }
    });
  </script>
  
  <h3>Expenditures</h3>
  <ul>
    {#each expenditures as expenditure}
      <li>
        <p>Amount: {expenditure.amount}</p>
        <p>Status: {expenditure.status}</p>
        <button on:click={() => console.log(`Details for ${expenditure.id}`)}>Details</button>
      </li>
    {/each}
  </ul>
  