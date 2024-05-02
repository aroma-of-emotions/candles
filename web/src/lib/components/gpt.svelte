<script lang="ts">
  import Button from './Button.svelte';
  import BotCandle from './bot-candle.svelte';
  import CandleItem from './candle-item.svelte';
  import { TextInput } from 'carbon-components-svelte';
</script>

<div id="gpt" class="grid grid-cols-3 pl-30 py-20">
  <div>
    <h1 class="font-bold mb-6">Не уверены в выборе?</h1>
    <p class="mb-8">Наш помощник ИИ подберёт вам нужный дизайн и аромат!</p>
  </div>
  <div class="col-span-2">
    <div class="mx-30">
      <div class=" bg-opacity-50 bg-white shadow w-full h-full px-10 py-5 flex flex-col gap-2">
        <h3>TODO GPT</h3>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>

    <br />
    <BotCandle />
  </div>
</div>
