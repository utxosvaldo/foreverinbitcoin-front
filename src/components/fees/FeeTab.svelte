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

<div class="flex justify-center p-1">
  <div class="pr-1">
    <Badge border color="purple"
      ><Clock size="20" class="pr-1" />{timeEstimate}</Badge
    >
  </div>
  <div class="pl-1">
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
      <TableBodyCell class="flex whitespace-nowrap">
        <div>
          {feeRateEstimate.networkFee.toLocaleString('en-US')} sats
        </div>
        <div class="pl-1 font-light">~ {networkFeeUSD.toFixed(2)} USD</div>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Service fee</TableBodyCell>
      <TableBodyCell class="flex whitespace-nowrap">
        <div>
          {feeRateEstimate.serviceFee.toLocaleString('en-US')} sats
        </div>
        <div class="pl-1 font-light">
          ~ {serviceFeeUSD.toFixed(2)} USD
        </div>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
  <tfoot>
    <tr class="font-semibold text-gray-900 dark:text-white">
      <th scope="row" class="py-3 px-6 text-base">Total</th>
      <td class="py-3 px-6 flex whitespace-nowrap">
        <div>
          {feeRateEstimate.totalAmount.toLocaleString('en-US')} sats
        </div>
        <div class="pl-1 font-light">~ {totalAmountUSD.toFixed(2)} USD</div>
      </td>
    </tr>
  </tfoot>
</Table>
