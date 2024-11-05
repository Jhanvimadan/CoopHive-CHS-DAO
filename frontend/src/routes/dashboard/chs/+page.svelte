<script>
  let activeButton = ''; // Tracks the active button ('create' or 'manage')
  let chsName = '';
  let chsDescription = '';
  let chsLocation = '';
  let chsList = []; // Stores all CHS entries

  // Load CHS entries from localStorage
  function loadChs() {
    const storedChs = localStorage.getItem('chsList');
    if (storedChs) {
      chsList = JSON.parse(storedChs);
    }
  }

  // Save CHS entries to localStorage
  function saveChs() {
    localStorage.setItem('chsList', JSON.stringify(chsList));
  }

  function toggleForm(button) {
    activeButton = button;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add the form data to the CHS list
    chsList = [...chsList, { name: chsName, description: chsDescription, location: chsLocation }];
    saveChs(); // Save to localStorage
    // Clear form fields
    chsName = '';
    chsDescription = '';
    chsLocation = '';
    // Switch to manage view to see the newly added CHS
    activeButton = 'manage';
  }

  function deleteChs(index) {
    chsList = chsList.filter((_, i) => i !== index);
    saveChs(); // Save to localStorage after deletion
  }

  function moveUp(index) {
    if (index > 0) {
      const temp = chsList[index];
      chsList[index] = chsList[index - 1];
      chsList[index - 1] = temp;
      saveChs(); // Save to localStorage after moving
    }
  }

  function moveDown(index) {
    if (index < chsList.length - 1) {
      const temp = chsList[index];
      chsList[index] = chsList[index + 1];
      chsList[index + 1] = temp;
      saveChs(); // Save to localStorage after moving
    }
  }

  // Load the CHS data when the component mounts
  loadChs();
</script>


<div class="button-container">
  <!-- Buttons for Create and Manage -->
  <button 
    class="{activeButton === 'create' ? 'active' : ''}" 
    on:click={() => toggleForm('create')}>
    Create CHS
  </button>
  <button 
    class="{activeButton === 'manage' ? 'active' : ''}" 
    on:click={() => toggleForm('manage')}>
    Manage CHS
  </button>
</div>

<!-- Create CHS Form -->
{#if activeButton === 'create'}
  <form on:submit={handleSubmit}>
    <label for="name">CHS Name:</label>
    <input id="name" bind:value={chsName} type="text" placeholder="Enter CHS name" required />

    <label for="description">Description:</label>
    <input id="description" bind:value={chsDescription} type="text" placeholder="Enter description" required />

    <label for="location">Location:</label>
    <input id="location" bind:value={chsLocation} type="text" placeholder="Enter location" required />

    <button type="submit">Submit</button>
  </form>
{/if}

<style>
  .button-group {
    display: flex;
    gap: 10px; /* Space between buttons */
    justify-content: flex-end; /* Align buttons to the right */
  }
</style>

<!-- Manage CHS List -->
{#if activeButton === 'manage'}
  <h3>Manage CHS</h3>
  {#if chsList.length > 0}
    <ul>
      {#each chsList as chs, index}
        <li>
          <strong>{chs.name}</strong><br />
          Description: {chs.description}<br />
          Location: {chs.location}
          <div class="button-group">
            <button on:click={() => moveUp(index)}>Up</button>
            <button on:click={() => moveDown(index)}>Down</button>
            <button on:click={() => deleteChs(index)}>Delete</button>
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No CHS entries available.</p>
  {/if}
{/if}
