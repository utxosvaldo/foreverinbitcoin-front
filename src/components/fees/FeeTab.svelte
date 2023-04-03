<script lang="ts">
  import {
    Badge,
    Span,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow
  } from 'flowbite-svelte';
  import {
    Clock,
    Square2Stack,
    Square3Stack3d,
    ArrowUpOnSquare
  } from 'svelte-heros-v2';
  import type { FeeRateEstimate } from '../../interfaces/priorityFees';
  import { feePriority, rateUSD } from '../../stores';

  export let feeRateEstimate: FeeRateEstimate;
  export let timeEstimate: string;
  // export let rateUSD: number;

  $: networkFeeUSD =
    Math.round((feeRateEstimate.networkFee * $rateUSD) / 1e6) / 100;
  $: serviceFeeUSD =
    Math.round((feeRateEstimate.serviceFee * $rateUSD) / 1e6) / 100;
  $: totalAmountUSD =
    Math.round((feeRateEstimate.totalAmount * $rateUSD) / 1e6) / 100;
</script>

<div class="grid grid-flow-col p-0 w-full justify-stretch">
  <div class="mr-1 my-1 flex justify-end">
    <Badge border color="purple"
      ><Clock size="20" class="pr-1" />{timeEstimate}</Badge
    >
  </div>
  <div class="ml-1 my-1 flex justify-start">
    <Badge border color="purple">
      {#if $feePriority == 'low'}
        <Square3Stack3d size="20" class="pr-1" />
      {:else if $feePriority == 'medium'}
        <Square2Stack size="20" class="pr-1" />
      {:else if $feePriority == 'high'}
        <ArrowUpOnSquare size="20" class="pr-1" />
      {/if}
      {feeRateEstimate.feeRate} sats/vB</Badge
    >
  </div>
</div>
<Table shadow>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Network fee</TableBodyCell>
      <TableBodyCell
        tdClass="py-3 pl-6 pr-0 flex whitespace-nowrap justify-end"
      >
        {feeRateEstimate.networkFee.toLocaleString('en-US')} sats
      </TableBodyCell>
      <TableBodyCell tdClass="py-3 px-1 font-light text-xs">
        ~{networkFeeUSD.toFixed(2)}USD
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Service fee</TableBodyCell>
      <TableBodyCell
        tdClass="py-3 pl-6 pr-0 flex whitespace-nowrap justify-end"
      >
        {feeRateEstimate.serviceFee.toLocaleString('en-US')} sats
      </TableBodyCell>
      <TableBodyCell tdClass="py-3 px-1 font-light text-xs">
        <!-- <Span class="font-light text-xs"> -->
        ~{serviceFeeUSD.toFixed(2)}USD
        <!-- </Span> -->
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>

  <tfoot>
    <tr class="font-semibold text-gray-900 dark:text-white">
      <th scope="row" class="py-3 px-6 text-base">Total</th>
      <td class="py-3 pl-6 pr-0 flex whitespace-nowrap justify-end"
        >{feeRateEstimate.totalAmount.toLocaleString('en-US')} sats</td
      >
      <td class="py-3 px-1 font-light text-xs"
        >~{totalAmountUSD.toFixed(2)}USD</td
      >
    </tr>
  </tfoot>
</Table>
