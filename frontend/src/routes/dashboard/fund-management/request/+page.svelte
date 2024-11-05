<script>
    let userId = '';
    let amount = '';
    let proposalId = '';
    let statusMessage = '';
  
    async function requestFunds() {
      try {
        const response = await fetch('/api/funds/request', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId, amount, proposalId }),
        });
        const result = await response.json();
        statusMessage = result.status || 'Request submitted successfully';
      } catch (error) {
        statusMessage = 'Failed to request funds';
        console.error(error);
      }
    }
  </script>
  
  <h3>Request Funds</h3>
  <form on:submit|preventDefault={requestFunds}>
    <label>
      User ID:
      <input type="text" bind:value={userId} />
    </label>
    <label>
      Amount:
      <input type="number" bind:value={amount} />
    </label>
    <label>
      Proposal ID:
      <input type="text" bind:value={proposalId} />
    </label>
    <button type="submit">Submit</button>
  </form>
  {#if statusMessage}
    <p>{statusMessage}</p>
  {/if}
  