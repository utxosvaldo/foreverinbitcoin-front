<script lang="ts">
  import {
    Badge,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow
  } from 'flowbite-svelte';
  import { Clock } from 'svelte-heros-v2';
  import type { FeeRateEstimate } from '../../interfaces/priorityFees';

  export let feeRateEstimate: FeeRateEstimate;
  export let timeEstimate: string;
  export let rateUSD: number;

  $: networkFeeUSD =
    Math.round((feeRateEstimate.networkFee * rateUSD) / 1e6) / 100;
  $: serviceFeeUSD =
    Math.round((feeRateEstimate.serviceFee * rateUSD) / 1e6) / 100;
  $: totalAmountUSD =
    Math.round((feeRateEstimate.totalAmount * rateUSD) / 1e6) / 100;
</script>

<Table hoverable>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell><span class="font-extrabold">Time:</span></TableBodyCell>
      <TableBodyCell class="text-end">{timeEstimate}</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell
        ><span class="font-extrabold">Fee rate:</span></TableBodyCell
      >
      <TableBodyCell class="text-end"
        >{feeRateEstimate.feeRate} sats/vB</TableBodyCell
      >
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell
        ><span class="font-extrabold">Network fee:</span></TableBodyCell
      >
      <TableBodyCell class="text-end">
        <div class="text-lg">
          {feeRateEstimate.networkFee.toLocaleString('en-US')} sats
        </div>
        <div class="text-xs">~{networkFeeUSD}USD</div>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell
        ><span class="font-extrabold">Service fee:</span></TableBodyCell
      >
      <TableBodyCell class="text-end">
        <div class="text-lg">
          {feeRateEstimate.serviceFee.toLocaleString('en-US')} sats
        </div>
        <div class="text-xs">~{serviceFeeUSD}USD</div>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell
        ><span class="text-3xl font-black">Total:</span></TableBodyCell
      >
      <TableBodyCell class="text-3xl text-end">
        <div class="text-lg">
          {feeRateEstimate.totalAmount.toLocaleString('en-US')} sats
        </div>
        <div class="text-xs">~{totalAmountUSD}USD</div>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

<!-- <Card class="w-full">
  <div class="flex justify-between w-full">
    <span class="font-bold">Time:</span><span>Next Block (10min)</span>
  </div>
  <div class="flex justify-between w-full">
    <span class="font-bold">Fee rate:</span><span>2 sats/vB</span>
  </div>
  <div class="flex justify-between w-full">
    <span class="font-bold">Network Fee:</span><span>45,000 sats</span>
  </div>
  <div class="flex justify-between w-full">
    <span class="font-bold">Service Fee:</span><span>25,000 sats</span>
  </div>
</Card> -->
