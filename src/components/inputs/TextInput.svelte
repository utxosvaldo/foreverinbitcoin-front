<script>
  import { Textarea, Label, Button } from 'flowbite-svelte';
  import { ConvertPF } from '../../interfaces/priorityFees';
  import { ConvertUTR } from '../../interfaces/uploadTextResponse';
  import {
    feePriority,
    feeRate,
    fileName,
    priorityFees,
    rateUSD,
    text
  } from '../../stores';

  async function handleTextUpload() {
    const requestData = {
      text: $text
    };

    console.log('text data: ', requestData);
    const response = await fetch('/upload_text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });

    const data = ConvertUTR.toUploadTextResponse(await response.text());

    fileName.set(data.filename);

    await estimateFees();
  }

  async function estimateFees() {
    const requestData = {
      filename: $fileName
    };

    console.log(requestData);
    const response = await fetch('/estimatefees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });
    // console.log(await response.json());

    const data = ConvertPF.toPriorityFees(await response.text());
    // console.log(data);

    priorityFees.set(data);
    feePriority.set('high');
    feeRate.set(data.high.feeRate);
    rateUSD.set(data.rateUSD);
    // console.log('setting priority fees to', $feePriority, $feeRate);
  }
</script>

<div class="grid justify-items-center  w-full">
  <div>
    <Textarea
      id="textarea-id"
      placeholder="Enter your text..."
      rows="4"
      name="message"
      class="w-full"
      bind:value={$text}
    />
    <Button
      outline
      gradient
      color="purpleToPink"
      class="mt-2"
      on:click={handleTextUpload}>Preview Inscription</Button
    >
  </div>
</div>
