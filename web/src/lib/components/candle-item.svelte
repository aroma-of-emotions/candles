<script lang="ts">
  import axios from 'axios';

  import Button from './Button.svelte';
  import { goto } from '$app/navigation';
  import { server_url } from '$lib/utils';
  export let candleId: number;
  export let img: string;
  export let price: string;
  export let name: string;
  export let description: string;
</script>

<div class="gap-10px flex flex-col items-center justify-items-center w-full h-full text-center">
  <img src={img} alt="img" class="w-full h-full object-contain" />
  <p class="font-bold">
    {price}
  </p>
  <p class="font-bold">
    {name}
  </p>
  <p>
    {@html description}
  </p>
  <Button
    on:click={async () => {
      try {
        const response = await axios.post(
          `${server_url}/api/cart`,
          {
            candleId,
            quantity: 1
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
        goto('/candles/cart');
        console.log(response);
      } catch (error) {
        console.error('Error fetching candles:', error);
      }
    }}
  >
    Добавить в корзину
  </Button>
</div>
