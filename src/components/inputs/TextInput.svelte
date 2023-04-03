<script>
  import { Textarea, Label, Button } from 'flowbite-svelte';
  import { ConvertPF } from '../../interfaces/priorityFees';
  import { ConvertUTR } from '../../interfaces/uploadTextResponse';
  import {
    feePriority,
    feeRate,
    fileName,
    loadingEstimateFees,
    priorityFees,
    rateUSD,
    text
  } from '../../stores';

  $: disablePreview = $text == '';

  async function handleTextUpload() {
    if ($text == '') {
      console.log('No text');
      return;
    }
    const requestData = {
      text: $text
    };

    console.log('text data: ', requestData);
    const response = await fetch('/api/upload_text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });

    const data = ConvertUTR.toUploadTextResponse(await response.text());

    fileName.set(data.filename);

    await estimateFees();
  }

  async function estimateFees() {
    $loadingEstimateFees = true;
    console.log('loading', $loadingEstimateFees);

    const requestData = {
      filename: $fileName
    };

    console.log(requestData);
    const response = await fetch('/api/estimatefees', {
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
    $loadingEstimateFees = false;

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
    {#if disablePreview}
      <Button outline gradient color="purpleToPink" class="mt-2" disabled
        >Preview Inscription</Button
      >
    {:else}
      <Button
        gradient
        color="purpleToPink"
        class="mt-2"
        on:click={handleTextUpload}>Preview Inscription</Button
      >
    {/if}
  </div>
</div>
