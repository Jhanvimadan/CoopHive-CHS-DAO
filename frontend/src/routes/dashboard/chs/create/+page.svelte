<script>
    let chsName = '';
    let description = '';
    let location = '';
  
    const handleSubmit = async () => {
      const response = await fetch('/api/chs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chsName, description, location }),
      });
  
      if (response.ok) {
        alert('CHS created successfully!');
        // Redirect or handle success here
      } else {
        alert('Failed to create CHS');
      }
    };
  </script>
  
  <section>
    <h1>Create Cooperative Housing Society (CHS)</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <div>
        <label for="name">CHS Name:</label>
        <input type="text" id="name" bind:value={chsName} required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" bind:value={description}></textarea>
      </div>
      <div>
        <label for="location">Location:</label>
        <input type="text" id="location" bind:value={location} required />
      </div>
      <button type="submit">Create CHS</button>
    </form>
  </section>
  