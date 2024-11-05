<script>
  import { onMount } from 'svelte';
  export let params;

  let chs = { name: '', description: '', location: '' };

  onMount(async () => {
    const response = await fetch(`/api/chs/${params.id}`);
    chs = await response.json();
  });

  const handleEditSubmit = async () => {
    const response = await fetch(`/api/chs/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chs),
    });

    if (response.ok) {
      alert('CHS updated successfully');
      // Redirect or handle success
    } else {
      alert('Failed to update CHS');
    }
  };
</script>

<section>
  <h1>Edit CHS: {chs.name}</h1>
  <form on:submit|preventDefault={handleEditSubmit}>
    <div>
      <label for="name">CHS Name:</label>
      <input type="text" id="name" bind:value={chs.name} />
    </div>
    <div>
      <label for="description">Description:</label>
      <textarea id="description" bind:value={chs.description}></textarea>
    </div>
    <div>
      <label for="location">Location:</label>
      <input type="text" id="location" bind:value={chs.location} />
    </div>
    <button type="submit">Update CHS</button>
  </form>
</section>
