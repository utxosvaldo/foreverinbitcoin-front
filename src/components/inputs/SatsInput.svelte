<script>
  import { Button, ButtonGroup, Input, InputAddon } from 'flowbite-svelte';
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
      sats_name: $text.toLowerCase() + '.sats'
    };

    console.log('sats name data: ', requestData);
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
    <!-- <Label class="mb-2" for="input-addon-md">Default additional text</Label> -->
    <ButtonGroup class="w-full" size="md">
      <Input
        id="input-addon-md"
        type="text"
        placeholder="satoshi"
        class="text-center bg-white"
        bind:value={$text}
      />
      <InputAddon>.sats</InputAddon>
    </ButtonGroup>
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
