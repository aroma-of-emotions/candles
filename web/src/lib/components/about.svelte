<script>
  import BotCandle from './bot-candle.svelte';
</script>

<div id="about" class="bg-#a5988e text-white">
  <div class="mx-auto pl-30 py-20 bg-#a5988e">
    <div class="grid grid-cols-3 items-center">
      <div>
        <div class="">
          <h1 class="text-4xl font-semibold text-white">О нас</h1>
        </div>

        <div class="mt-8 w-70%">
          <p class="text-base text-white">
            Мы команда энтузиастов, желающих показать новый способ для восприятия искусства. Наша
            миссия — создание альтернативы традиционному взаимодействию с искусством через ароматы,
            открывая новые горизонты для созерца, подарков и любимых арт-материал. Также мы хотим
            изменить "мерено" на заполненные здоровья с заряженным воздухом и курение.
          </p>
        </div>
      </div>

      <div class=" mt-10 col-span-2">
        <div class="flex flex-wrap items-center">
          <div class=" w-1/4 px-4">
            <img class="w-full h-full object-contain" src="1.png" alt="Artistic representation" />
            <p class="mt-2 text-center text-sm text-white">Наслаждайтесь моментом</p>
          </div>
          <div class=" w-1/2 px-4">
            <img
              class="rounded-t-full w-full h-1/2 object-contain"
              src="2.jpeg"
              alt="Embossed candle"
            />
            <p class="mt-2 text-center text-sm text-white">Создайте любимую атмосферу</p>
          </div>
          <div class=" w-1/4 px-4">
            <img class="w-full h-full object-contain" src="3.png" alt="Candle with stars" />
            <p class="mt-2 text-center text-sm text-white">Изготовлены с любовью</p>
          </div>
        </div>

        <BotCandle />
      </div>
    </div>
  </div>
</div>
