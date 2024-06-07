<script lang="ts">
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import BotCandle from './bot-candle.svelte';
  import CandleItem from './candle-item.svelte';
  import { InlineLoading, TextInput, Tile } from 'carbon-components-svelte';
  import { tick } from 'svelte';
  import axios from 'axios';
  import SvelteMarkdown from 'svelte-markdown';
  import { server_url } from '$lib/utils';

  let userInput = '';
  let responseText = null;
  let captchaResponse = undefined;
  let promise: Promise<void> | null = null;

  async function submitToAI() {
    // return 'amogus';
    const { data } = await axios.post(`${server_url}/api/gpt-help`, {
      text: userInput
    });
    return data.data;
  }

  // onMount(() => {
  //   // CAPTCHA script
  //   const script = document.createElement('script');
  //   script.src = 'https://www.google.com/recaptcha/api.js?render=your_site_key';
  //   document.body.appendChild(script);

  //   script.onload = async () => {
  //     await tick();
  //     grecaptcha.ready(() => {
  //       grecaptcha.execute('your_site_key', { action: 'submit' }).then((token) => {
  //         captchaResponse = token;
  //       });
  //     });
  //   };
  // });
</script>

<!-- <div id="gpt" class="grid grid-cols-3 pl-30 py-20">
  <div>
    <h1 class="font-bold mb-6">Не уверены в выборе?</h1>
    <p class="mb-8">Наш помощник ИИ подберёт вам нужный дизайн и аромат!</p>
  </div>
  <div class="col-span-2">
    <div class="mx-30">
      <TextInput bind:value={userInput} placeholder="Введите ваш запрос" />
    <Button on:click={submitToAI}>Получить совет</Button>
    <p class="text-gray-500 text-xs">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      <div class="bg-opacity-50 bg-white shadow w-full h-full px-10 py-5 flex flex-col gap-2">
        <h3>AI Response</h3>
        {@html responseText}
      </div>
    </div>
    <BotCandle />
  </div>
</div> -->

<div id="gpt" class="grid grid-cols-3 pl-30 py-20">
  <div>
    <h1 class="font-bold mb-6">Не уверены в выборе?</h1>
    <p class="mb-8">Наш помощник ИИ подберёт вам нужный дизайн и аромат!</p>
  </div>
  <div class="col-span-2">
    <div class="mx-30">
      <div class=" bg-opacity-50 bg-white shadow w-full h-full px-10 py-5 flex flex-col gap-2">
        <h3>Здравствуйте!</h3>
        <br />
        <p>
          Я искусственный интеллект, ваш личный помощник на этом сайте. Я помогу вам выбрать свечу,
          которая лучше всего подойдет вашим предпочтениям. Как я могу вам помочь?
        </p>
        <br />
        <TextInput bind:value={userInput} placeholder="Введите ваш запрос" />
        <br />
        {#if promise}
          {#await promise}
            <InlineLoading description="Я думаю..." />
          {:then source}
            <br />
            <Tile light>
              <SvelteMarkdown {source} />
            </Tile>
            <br />
            <Button on:click={() => (promise = null)}>Получить новый совет</Button>
          {:catch error}
            <InlineLoading status="error" description="Я сломался :(" />
          {/await}
        {:else}
          <Button on:click={() => (promise = submitToAI())}>Получить совет</Button>
        {/if}
      </div>
    </div>
    <BotCandle />
  </div>
</div>
