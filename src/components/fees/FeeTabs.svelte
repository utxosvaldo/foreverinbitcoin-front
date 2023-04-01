<script lang="ts">
  import { Tabs, TabItem, Heading } from 'flowbite-svelte';
  import FeeTab from './FeeTab.svelte';
  import {
    Square3Stack3d,
    Square2Stack,
    ArrowUpOnSquare
  } from 'svelte-heros-v2';

  import { priorityFees, feePriority, feeRate } from '../../stores';

  const setLow = () => {
    $feePriority = 'low';
    $feeRate = $priorityFees.low.feeRate;
    console.log('setting ', $feePriority, $feeRate);
  };
  const setMedium = () => {
    $feePriority = 'medium';
    $feeRate = $priorityFees.medium.feeRate;
    console.log('setting ', $feePriority, $feeRate);
  };
  const setHigh = () => {
    $feePriority = 'high';
    $feeRate = $priorityFees.high.feeRate;
    console.log('setting ', $feePriority, $feeRate);
  };
</script>

<Heading class="text-xl">Inscription Priority</Heading>
<Tabs
  activeClasses="p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500"
  contentClass="p-4 bg-primary-50 rounded-lg dark:bg-gray-800 mt-0 w-90"
>
  <TabItem on:click={setLow}>
    <div slot="title" class="flex items-center gap-2">
      <Square3Stack3d variation="solid" />

      Low
    </div>

    <!-- <div class="flex"> -->
    <FeeTab feeRateEstimate={$priorityFees.low} timeEstimate={'~ 1 hour'} />
    <!-- </div> -->
  </TabItem>
  <TabItem on:click={setMedium}>
    <div slot="title" class="flex items-center gap-2">
      <Square2Stack variation="solid" />
      Medium
    </div>
    <FeeTab feeRateEstimate={$priorityFees.medium} timeEstimate={'~ 30 min'} />
  </TabItem>
  <TabItem open on:click={setHigh}>
    <div slot="title" class="flex items-center gap-2">
      <ArrowUpOnSquare variation="solid" />
      High
    </div>
    <FeeTab feeRateEstimate={$priorityFees.high} timeEstimate={'~ 10 min'} />
  </TabItem>
</Tabs>
