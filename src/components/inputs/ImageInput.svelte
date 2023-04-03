<script lang="ts">
  import { Button, Fileupload, Label } from 'flowbite-svelte';
  import {
    fileName,
    priorityFees,
    feeRate,
    feePriority,
    rateUSD,
    loadingEstimateFees
  } from '../../stores';
  import { ConvertPF } from '../../interfaces/priorityFees';
  import Filepond from '../Filepond.svelte';

  // $: disabled = $fileName == '';

  async function estimateFees() {
    const requestData = {
      order_type: 'image',
      file_name: $fileName
    };

    console.log(requestData);
    // TODO get url from env var
    $loadingEstimateFees = true;
    console.log('loading', $loadingEstimateFees);
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
    loadingEstimateFees.set(false);
    // console.log('setting priority fees to', $feePriority, $feeRate);
  }
</script>

<Filepond />

<!-- <Button
  gradient
  color="purpleToPink"
  class="mt-2"
  {disabled}
  on:click={estimateFees}>Preview Inscription</Button
> -->
