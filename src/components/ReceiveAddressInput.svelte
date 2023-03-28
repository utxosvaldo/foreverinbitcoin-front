<script>
  import { Button } from 'flowbite-svelte';
</script>

<div class="mb-6">
  <label
    for="default-input"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >Receive address for your inscription:</label
  >
  <input
    type="text"
    id="default-input"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
  <div class="mb-6">
    <div>
      <label
        for="error"
        class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
        >Invalid Bitcoin address</label
      >
      <input
        type="text"
        id="error"
        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
        placeholder="Error input"
      />
      <p class="mt-2 text-sm text-red-600 dark:text-red-500">
        Please enter a valid segwit (bc1q...) or taproot (bc1p...) address.
      </p>
    </div>
  </div>

  <Button gradient color="purpleToPink" class="mt-2">Preview Inscription</Button
  >
</div>
