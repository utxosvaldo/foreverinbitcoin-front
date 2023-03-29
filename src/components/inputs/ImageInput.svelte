<script lang="ts">
  import { Button, Fileupload, Label } from 'flowbite-svelte';
  import { fileName } from '../../stores';
  import { Convert } from '../../interfaces/uploadImageResponse';

  async function uploadFile() {
    const fileInput = document.getElementById('larg_size');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    // TODO get url from env var
    const response = await fetch('http://localhost/upload', {
      method: 'POST',
      body: formData
    });

    const data = Convert.toUploadImageResponse(await response.text());
    // console.log(data);

    fileName.set(data.fileName);
  }
</script>

<div class="grid justify-items-center">
  <Label class="mb-2 py-2" for="larg_size">Large file input</Label>
  <Fileupload id="larg_size" size="lg" />
  <Button
    outline
    gradient
    color="purpleToPink"
    class="mt-2"
    on:click={uploadFile}>Preview Inscription</Button
  >
</div>
