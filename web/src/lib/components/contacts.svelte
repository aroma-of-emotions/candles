<script>
  import BotCandle from './bot-candle.svelte';
</script>

<div id="contacts" class="bg-#a5988e text-white">
  <div class="mx-auto pl-30 py-20 bg-#a5988e">
    <div class="grid grid-cols-3 items-center">
      <div>
        <div class="">
          <h1 class="text-4xl font-semibold text-white">Контакты</h1>
        </div>

        <div class="mt-8 w-70%">
          <p class="text-base text-white">
            Свяжитесь с нами! Здесь вы найдете все необходимые контактные данные, чтобы задать
            вопросы или выразить свои пожелания. Мы всегда рады общению с нашими клиентами.
          </p>
        </div>
      </div>

      <div class=" mt-10 col-span-2">
        <div class="mx-30">
          <div
            class=" bg-opacity-50 bg-#C4B7AF shadow w-full h-full px-10 py-5 flex flex-col gap-2 items-center"
          >
            <p>Telegram: <a href="https://t.me/karinakrasyuk">@karinakrasyuk</a></p>
            <p>Почта: <a href="mailto: karinakrasuk05@gmail.com">karinakrasuk05@gmail.com</a></p>
            <p>Телефон: <a href="tel:+7(812)233-00-89">+7 (812) 233-00-89</a></p>
          </div>
          <br />
          <br />
        </div>
        <BotCandle />
      </div>
    </div>
  </div>
</div>
