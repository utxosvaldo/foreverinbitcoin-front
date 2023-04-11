<script lang="ts">
  import {
    Alert,
    Button,
    ButtonGroup,
    Helper,
    Input,
    InputAddon,
    Label,
    P
  } from 'flowbite-svelte';
  import {
    ArrowLeftOnRectangle,
    Check,
    CheckCircle,
    ReceiptPercent
  } from 'svelte-heros-v2';
  import { discount, promoCode } from '../../stores';

  let isInputOpen: boolean = false;
  let isPromoCodeValid: boolean = false;
  let inputPromoCode: string;

  const cryptoMXDiscount: number = 1; // 1 => 100% discount, 0.5 => 50% discount, 0 => 0% discount

  function validateInputPromoCode() {
    if (inputPromoCode == 'CRYPTOMX') {
      isPromoCodeValid = true;
      console.log('valid promo code', promoCode);
      discount.set(cryptoMXDiscount);
      promoCode.set(inputPromoCode);
    } else {
      isPromoCodeValid = false;
      console.log('invalid promo code', promoCode);
      discount.set(0);
      promoCode.set('');
    }
  }
</script>

<div class="pt-1">
  <!-- {#if false} -->
  {#if $promoCode}
    <!-- {#if true} -->
    <Alert color="purple" class="mt-1" id="screenshotDiv">
      <div slot="extra">
        <P
          size="sm"
          weight="bold"
          class="font-small text-center"
          color="currentColor flex whitespace-nowrap justify-center"
        >
          <ReceiptPercent variation="solid" color="purple" />
          CRYPTOMX
          <!-- <CheckCircle size="30" variation="outline" class="pl-1" /> -->
        </P>
        <P size="xs" color="currentColor" class="block text-center font-mono"
          >100% discount on service fees</P
        >
      </div>
    </Alert>
  {:else}
    <div class="mt-1 flex justify-end w-full pr-0">
      <!-- <Label for="input-addon" class="mb-2">Groupped with button</Label> -->
      <div class="flex border shadow w-full rounded mr-0">
        <Input
          let:props
          id="promoCode"
          placeholder="Promo code..."
          class="bg-primary-50 mr-0"
          size="md"
        >
          <div slot="left">
            <!-- {#if true} -->
            <ReceiptPercent />
          </div>
          <input {...props} bind:value={inputPromoCode} />
          <div slot="right">
            {#if !isPromoCodeValid}
              <Button
                color="purple"
                size="xs"
                class=""
                on:click={validateInputPromoCode}
                >Apply
              </Button>
            {:else}
              <Check color="purple" />
            {/if}
          </div>
        </Input>
      </div>
    </div>
  {/if}
  <Helper class="mt-1 flex justify-start  text-xs"
    >Follow us <a
      href="https://twitter.com/ForeverinBTC"
      target="_blank"
      class="px-1 font-xs text-blue-600 hover:underline dark:text-blue-500"
      >@ForeverInBTC</a
    > for promotions</Helper
  >
  <!-- {:else} -->
  <!-- {/if} -->
</div>
