<script lang="ts">
  import { Tabs, TabItem, Heading, Span } from 'flowbite-svelte';
  import FeeTab from './FeeTab.svelte';
  import {
    Square3Stack3d,
    Square2Stack,
    ArrowUpOnSquare
  } from 'svelte-heros-v2';

  import {
    feePriority,
    feeRate,
    networkFee,
    serviceFee,
    totalAmount
  } from '../../stores';

  $: feeRateEstimate = {
    feeRate: $feeRate,
    networkFee: $networkFee,
    serviceFee: $serviceFee,
    totalAmount: $totalAmount
  };

  let timeEstimate: string = 'yeyeyeye';
  if ($feePriority == 'high') {
    timeEstimate = 'Next block (10 min)';
  } else if ($feePriority == 'medium') {
    timeEstimate = '~ 30 min)';
  } else if ($feePriority == 'low') {
    timeEstimate = '~ 1 hour';
  }
</script>

<!-- <Heading class="text-xl">Inscription Priority</Heading> -->

<Tabs
  activeClasses="p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500"
  contentClass="p-4 bg-primary-50 rounded-lg dark:bg-gray-800 mt-0 w-90"
>
  <TabItem open>
    <div slot="title" class="flex items-center gap-2 capitalize">
      {#if $feePriority == 'high'}
        <ArrowUpOnSquare variation="solid" />
      {:else if $feePriority == 'medium'}
        <Square2Stack variation="solid" />
      {:else if $feePriority == 'low'}
        <Square3Stack3d variation="solid" />
      {/if}
      {$feePriority} inscription priority
    </div>
    <FeeTab {feeRateEstimate} {timeEstimate} rateUSD={0} />
  </TabItem>
</Tabs>
