<script lang="ts">
  import {
    Badge,
    Button,
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
    ArrowUpOnSquare,
    ReceiptPercent
  } from 'svelte-heros-v2';
  import type { FeeRateEstimate } from '../../interfaces/priorityFees';
  import { feePriority, rateUSD, discount, feeRate } from '../../stores';
  import PromoCode from '../promo/PromoCode.svelte';

  export let feeRateEstimate: FeeRateEstimate;
  export let timeEstimate: string;
  // export let rateUSD: number;

  // function discounted(price: number) {
  //   return price * $discount
  // }

  $: networkFeeUSD =
    Math.round((feeRateEstimate.networkFee * $rateUSD) / 1e6) / 100;
  $: serviceFeeUSD =
    Math.round((feeRateEstimate.serviceFee * $rateUSD) / 1e6) / 100;
  $: totalAmountUSD =
    Math.round((feeRateEstimate.totalAmount * $rateUSD) / 1e6) / 100;

  $: discountedServiceFee = feeRateEstimate.serviceFee * (1 - $discount);
  $: discountedTotal = discountedServiceFee + feeRateEstimate.networkFee;
  $: discountedTotalUSD = Math.round((discountedTotal * $rateUSD) / 1e6) / 100;
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
      <TableBodyCell tdClass="py-3 pl-6 pr-0 justify-end">
        {#if $discount <= 0}
          <div class=" flex whitespace-nowrap justify-end">
            {feeRateEstimate.serviceFee.toLocaleString('en-US')} sats
          </div>
        {:else}
          <div
            class=" flex whitespace-nowrap justify-end text-xs text-gray-400 line-through"
          >
            {feeRateEstimate.serviceFee.toLocaleString('en-US')} sats
          </div>
          <div class=" flex whitespace-nowrap justify-end">
            <ReceiptPercent variation="solid" color="purple" class="pr-1" />
            {discountedServiceFee.toLocaleString('en-US')} sats
          </div>
        {/if}
      </TableBodyCell>
      <TableBodyCell tdClass="py-3 px-1 font-light text-xs">
        {#if $discount <= 0}
          <div class=" flex whitespace-nowrap">
            ~{serviceFeeUSD.toFixed(2)}USD
          </div>
        {:else}
          <div
            class=" flex whitespace-nowrap justify-start text-xs text-gray-200 line-through"
          >
            ~{serviceFeeUSD.toFixed(2)}USD
          </div>
          <div class=" flex whitespace-nowrap">
            ~{(serviceFeeUSD * (1 - $discount)).toFixed(2)}USD
          </div>
        {/if}
        <!-- <Span class="font-light text-xs"> -->
        <!-- </Span> -->
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>

  <tfoot class="w-full">
    <tr class="font-semibold text-gray-900 dark:text-white">
      <th scope="row" class="py-3 px-6 text-base">Total</th>

      <td class="py-3 pl-6 pr-0 ">
        {#if $discount <= 0}
          <div class=" flex whitespace-nowrap ">
            {feeRateEstimate.totalAmount.toLocaleString('en-US')} sats
          </div>
        {:else}
          <div
            class=" flex whitespace-nowrap justify-end text-xs text-gray-400 line-through"
          >
            {feeRateEstimate.totalAmount.toLocaleString('en-US')} sats
          </div>
          <div class=" flex whitespace-nowrap text-lg">
            <ReceiptPercent variation="solid" color="purple" class="pr-1" />
            {discountedTotal.toLocaleString('en-US')} sats
          </div>
        {/if}
      </td>
      <td class="py-3 px-1 font-light text-xs">
        {#if $discount <= 0}
          <div class=" flex whitespace-nowrap justify-end text-xs">
            ~{totalAmountUSD.toFixed(2)}USD
          </div>
        {:else}
          <div
            class=" flex whitespace-nowrap justify-end text-xs text-gray-200 line-through"
          >
            ~{totalAmountUSD.toFixed(2)}USD
          </div>
          <div class=" flex whitespace-nowrap justify-start text-xs ">
            ~{discountedTotalUSD.toFixed(2)}USD
          </div>
        {/if}
        <!-- <div
          class=" flex whitespace-nowrap justify-end text-xs text-gray-200 line-through"
        >
          ~{totalAmountUSD.toFixed(2)}USD
        </div>
        <div class=" flex whitespace-nowrap">
          ~{(serviceFeeUSD * (1 - $discount)).toFixed(2)}USD
        </div> -->
      </td></tr
    >
  </tfoot>
</Table>
<div class="flex w-full justify-end">
  <PromoCode />
</div>
