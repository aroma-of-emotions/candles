<script lang="ts">
  import { onMount } from 'svelte';
  import axios from 'axios'; // You might need to install axios with 'npm install axios'
  import Button from './Button.svelte';
  import BotCandle from './bot-candle.svelte';
  import CandleItem from './candle-item.svelte';
  import ChevronDown from 'carbon-icons-svelte/lib/ArrowDown.svelte';
  import type { Candle } from '$lib/utils';

  let candles: Candle[] = [];
  let len = 4;
  onMount(async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/candles');
      candles = response.data;
    } catch (error) {
      console.error('Error fetching candles:', error);
    }
  });
</script>

<div id="catalog" class="px-30 py-20">
  <div>
    <h1 class="font-bold mb-6">Каталог</h1>
    <p class="mb-8">
      Откройте для себя наш широкий ассортимент ароматических свечей. Используйте фильтры по виду
      искусства и аромату для поиска идеальной свечи.
    </p>
  </div>
  <br />
  <br />
  <div class="col-span-2">
    <div class="grid grid-cols-2 gap-x-30 gap-y-20">
      {#each candles.slice(0, len) as candle}
        <CandleItem
          candleId={candle.id}
          img={candle.imageUrl}
          price={`${candle.price} ₽`}
          name={candle.name}
          description={`Запах: ${candle.description} <br/>Вид искусства: ${candle.artStyle}`}
        />
      {/each}
    </div>
    <br />
    <br />
    <div class="grid items-center justify-items-center">
      {#if len < 5}
        <Button
          on:click={() => {
            len = 666;
          }}
        >
          <div class="flex gap-5px items-center">
            Еще <ChevronDown />
          </div>
        </Button>
      {/if}
    </div>
    <BotCandle />
  </div>
</div>
