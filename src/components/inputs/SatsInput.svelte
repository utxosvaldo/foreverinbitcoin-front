<script>
  import {
    Textarea,
    Label,
    Button,
    ButtonGroup,
    Input,
    InputAddon
  } from 'flowbite-svelte';
</script>

<div class="grid justify-items-center  w-full">
  <div>
    <!-- <Label class="mb-2" for="input-addon-md">Default additional text</Label> -->
    <ButtonGroup class="w-full" size="md">
      <Input
        id="input-addon-md"
        type="email"
        placeholder="satoshi"
        class="text-center bg-white"
      />
      <InputAddon>.sats</InputAddon>
    </ButtonGroup>
    <Button outline gradient color="purpleToPink" class="mt-2"
      >Preview Inscription</Button
    >
  </div>
</div>
