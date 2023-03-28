<script>
  import { Alert, Button, Heading, P } from 'flowbite-svelte';
</script>

<Alert color="blue">
  <div slot="extra">
    <P
      size="xl"
      weight="bold"
      class="font-medium text-center"
      color="currentColor"
    >
      Back up your order details
    </P>
    <div class="mt-2 mb-4 text-sm">
      For help send your order details to support@foreverinbitcoin.com
    </div>
    <div class="flex gap-2 justify-center">
      <Button size="xs"
        ><svg
          aria-hidden="true"
          class="-ml-0.5 mr-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z"
          />
        </svg>Save my order details</Button
      >
    </div>
  </div>
</Alert>
