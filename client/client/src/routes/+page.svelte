<script>
    let file;
    async function handleSubmit() {
        const formData = new FormData();
        formData.append('file', file);
        fetch('/api/uploadfile', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<form>
    <input type="file" name="example" bind:files={file} />
    <input type="submit" on:click={handleSubmit} />
</form>