<script>
  import { TextInput } from 'carbon-components-svelte';
  import BotCandle from './bot-candle.svelte';
  import Button from './Button.svelte';
</script>

<div id="partners" class="bg-#a5988e text-white">
  <div class="mx-auto pl-30 py-20 bg-#a5988e">
    <div class="grid grid-cols-3 items-center">
      <div>
        <div class="">
          <h1 class="text-4xl font-semibold text-white">Партнёрам</h1>
        </div>

        <div class="mt-8 w-70%">
          <p class="text-base text-white">
            Если у вас есть запрос или предложение о сотрудничестве, заполните эту форму и мы сможем
            связаться с вами. Заполненная форма поможет нам оперативно и емко предоставить для вас
            данные об условиях сотрудничества.
          </p>
        </div>
      </div>

      <div class=" mt-10 col-span-2">
        <div class="mx-30">
          <div
            class=" bg-opacity-50 bg-#C4B7AF shadow w-full h-full px-10 py-5 flex flex-col gap-2"
          >
            <h3>Форма для обратной связи</h3>
            <p>Заполните пожалуйста свои данные и мы свяжемся с вами в ближайшее время.</p>
            <TextInput light placeholder="Имя" />
            <TextInput light placeholder="Телефон" />
            <TextInput light placeholder="Email" />
            <TextInput light placeholder="Ваш бренд/компания" />
            <div>
              <Button>Оставить заявку</Button>
            </div>
          </div>
          <br />
          <br />
        </div>
        <BotCandle />
      </div>
    </div>
  </div>
</div>
