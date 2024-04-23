<script lang="ts">
  import BotCandle from './bot-candle.svelte';
  import Expandable from './expandable.svelte';
</script>

<div id="delivery" class="grid grid-cols-3 pl-30 py-20">
  <div>
    <h1 class="font-bold mb-6">Доставка</h1>
    <p class="mb-8">Мы предоставляем следующие способы доставки:</p>
  </div>
  <div class="col-span-2">
    <div class="mx-30">
      <div class=" bg-opacity-50 bg-white shadow w-full h-full px-10 py-5 flex flex-col gap-2">
        <Expandable title="Срочная курьерская доставка по Санкт-Петербургу от 2 дней">
          Для уточнения наличия товара и расчета стоимости напишите в <a
            href="https://t.me/karinakrasyuk">Telegram</a
          >
        </Expandable>
        <Expandable title="Самовывоз в Санкт-Петербурге от 2 дней">
          Самостоятельно забрать заказ можно из нашей мастерской по адресу:Санкт-Петербург, улица
          Ломоносова, 9.Часы работы: Пн-Пт 10:00-20:00. Вход по предварительной записи. Напишите нам
          в <a href="https://t.me/karinakrasyuk">Telegram</a>, чтобы согласовать дату и время вашего
          визита.
        </Expandable>
        <Expandable title="Курьерская доставка по Санкт-Петербургу и России от 3 дней">
          Рассчитать стоимость и сроки доставки можно на сайте в Корзине на этапе оформления заказа.
        </Expandable>
        <Expandable title="Доставка по России в пункты выдачи СДЭК от 3 дней">
          Рассчитать стоимость и сроки доставки можно на сайте в Корзине на этапе оформления заказа.
        </Expandable>
        <Expandable title="Доставка по России в отделения Почты России от 5 дней">
          Рассчитать стоимость и сроки доставки можно на сайте в Корзине на этапе оформления заказа.
        </Expandable>
      </div>
    </div>

    <br />
    <BotCandle />
  </div>
</div>
