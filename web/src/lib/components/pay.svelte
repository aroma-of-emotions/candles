<script lang="ts">
  import BotCandle from './bot-candle.svelte';
</script>

<div id="pay" class="grid grid-cols-3 pl-30 py-20">
  <div>
    <h1 class="font-bold mb-6">Оплата</h1>
    <p class="mb-8">
      Оплатить заказ можно банковской картой в Корзине этапе оформления заказа на сайте.
    </p>
  </div>
  <div class="col-span-2">
    <div class="mx-30">
      <div class="text-right">
        <h1 class="font-bold mb-6">Обмен и возврат</h1>
        <p class="mb-8">
          В случае каких-либо проблем с вашим заказом, сообщите об этом в <a href="https://t.me/karinakrasyuk">Telegram</a> нашего
          контактного лица Карины. Мы оперативно разберемся в ситуации и предложим лучшее решение.
        </p>
      </div>
    </div>
    <br />
    <BotCandle />
  </div>
</div>
