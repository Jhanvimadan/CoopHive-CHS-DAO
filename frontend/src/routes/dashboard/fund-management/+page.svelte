<script>
  import { goto } from '$app/navigation';
</script>

<h2>Fund Management</h2>
<button on:click={() => goto('/fund-management/expenditure')}>View Expenditures</button>
<button on:click={() => goto('/fund-management/request')}>Request Funds</button>
