<script lang="ts">
  import { Alert, Button, Heading, P, Span } from 'flowbite-svelte';
  import { ArrowDownOnSquare } from 'svelte-heros-v2';
  import { orderId } from '../../stores';
  // import { html2canvas } from 'html2canvas';
  import html2canvas from 'html2canvas';
  import ValidatedReceiveAddress from '../ValidatedReceiveAddress.svelte';

  function screenshot() {
    html2canvas(document.getElementById('screenshotDiv')).then(function (
      canvas
    ) {
      var link = document.createElement('a');
      link.download = 'foreverinbitcoin_' + $orderId + '.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }
</script>

<Alert color="purple" class="mt-5" id="screenshotDiv">
  <div slot="extra">
    <P
      size="xl"
      weight="bold"
      class="font-medium text-center"
      color="currentColor"
    >
      ForeverinBitcoin.com
    </P>
    <P
      size="lg"
      weight="bold"
      class="font-small text-center"
      color="currentColor"
    >
      Order ID
    </P>
    <P size="sm" class="block text-center font-mono" color="currentColor">
      {$orderId}
    </P>

    <ValidatedReceiveAddress />
    <div class="flex gap-2 justify-center mt-2 mb-4 ">
      <Button outline size="xs" color="purple" on:click={screenshot}>
        <ArrowDownOnSquare /> Save my order details
      </Button>
    </div>
    <div class="text-sm">
      For support send your order details to support@foreverinbitcoin.com
    </div>
  </div>
</Alert>
