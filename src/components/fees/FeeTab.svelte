<script>
  import { Card } from 'flowbite-svelte';

  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell
  } from 'flowbite-svelte';
</script>

<Table hoverable>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell><span class="font-extrabold">Time:</span></TableBodyCell>
      <TableBodyCell class="text-end">Next Block (10min)</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell
        ><span class="font-extrabold">Fee rate:</span></TableBodyCell
      >
      <TableBodyCell class="text-end">10 sats/vB</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell
        ><span class="font-extrabold">Network fee:</span></TableBodyCell
      >
      <TableBodyCell class="text-end">
        <div class="text-lg">45,000 sats</div>
        <div class="text-xs">~24USD</div>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell
        ><span class="font-extrabold">Service fee:</span></TableBodyCell
      >
      <TableBodyCell class="text-end">
        <div class="text-lg">25,000 sats</div>
        <div class="text-xs">~24USD</div>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell
        ><span class="text-3xl font-black">Total:</span></TableBodyCell
      >
      <TableBodyCell class="text-3xl text-end">
        <div class="text-lg">70,000 sats</div>
        <div class="text-xs">~24USD</div>
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
