<script lang="ts">
  import { Button, Fileupload, Label } from 'flowbite-svelte';
  import { fileName, priorityFees } from '../../stores';
  import { Convert } from '../../interfaces/uploadImageResponse';
  import { ConvertPF } from '../../interfaces/priorityFees';

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

    await estimateFees();
  }

  async function estimateFees() {
    const requestData = {
      order_type: 'image',
      file_name: ''
    };

    console.log(requestData);
    // TODO get url from env var
    const response = await fetch('http://localhost/estimatefees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });
    // console.log(await response.json());

    const data = ConvertPF.toPriorityFees(await response.text());
    console.log(data);

    priorityFees.set(data);
  }
</script>

<div class="grid justify-items-center">
  <Label class="mb-2 py-2" for="larg_size">Upload your image file</Label>
  <Fileupload id="larg_size" size="lg" />
  <Button
    outline
    gradient
    color="purpleToPink"
    class="mt-2"
    on:click={uploadFile}>Preview Inscription</Button
  >
</div>
