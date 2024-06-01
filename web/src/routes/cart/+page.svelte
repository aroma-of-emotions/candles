<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/components/Button.svelte';
  import type { CartItem } from '$lib/utils';
  import axios from 'axios';
  import { Select, SelectItem, NumberInput } from 'carbon-components-svelte';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  let cartItems: CartItem[] = [];
  let delivery: string = 'Курьером';
  let discount = 20;
  let delivery_cost = 300;
  let total = 0;

  $: total = calculateTotal(cartItems);
  $: delivery_cost = total >= 3000 ? 0 : 300;

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/cart', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      cartItems = response.data;
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    }
  };

  const updateQuantity = async (itemId: number, e: any) => {
    let newQuantity = +e.detail;
    try {
      if (newQuantity < 1) {
        await axios.delete(`http://localhost:3000/api/cart/${itemId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
      } else {
        await axios.put(
          `http://localhost:3000/api/cart/${itemId}`,
          {
            quantity: newQuantity
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
      }

      await fetchCartItems(); // Refresh cart items after update
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  };

  const calculateTotal = (cartItems: CartItem[]) => {
    let total = 0;
    console.log(cartItems);
    cartItems.forEach((item: any) => {
      total += item.candle.price * item.quantity;
    });
    return total;
  };

  onMount(fetchCartItems);
</script>

<div class="h-[calc(100vh-85px)] grid items-center justify-items-center">
  <div class="grid items-center justify-items-center py-20">
    <div class="mx-30 grid grid-cols-3 gap-10 items-center justify-items-center">
      <div class="grid-col-span-2 bg-opacity-50 bg-white shadow w-full h-full gap-2 pb-40">
        <div class="border-b border-black border-solid px-10 py-5 flex gap-10">
          <h1 class="font-semibold text-2xl">Моя корзина ({cartItems.length})</h1>
          <div class="ml-auto">
            <Select inline labelText="Вид доставки" on:change={(e) => (delivery = e.target.value)}>
              <SelectItem value="Курьером" />
            </Select>
          </div>
        </div>
        <div class="grid px-10 py-5 grid-cols-6 items-center w-full h-full gap-5">
          <h3 class="font-semibold text-gray-600 text-xs text-center">Товары</h3>
          <h3 class="font-semibold text-gray-600 text-xs text-center grid-col-span-2" />
          <h3 class="font-semibold text-gray-600 text-xs text-center">Цена</h3>
          <h3 class="font-semibold text-gray-600 text-xs text-center">Количество</h3>
          <h3 class="font-semibold text-gray-600 text-xs text-center">Итого</h3>
          {#each cartItems as item}
            <div class="w-full h-full">
              <img class="w-full object-fill" src={item.candle.imageUrl} alt={item.candle.name} />
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow grid-col-span-2">
              <span class="font-bold text-sm">{item.candle.name}</span>
              <span class="text-xs">{item.candle.description}</span>
            </div>
            <div class="flex justify-center">
              <p class="text-center font-semibold text-sm">{item.candle.price} ₽</p>
            </div>
            <div class="flex justify-center">
              <NumberInput
                bind:value={item.quantity}
                min={0}
                on:change={(e) => updateQuantity(item.id, e)}
              />
            </div>
            <div class="flex justify-center">
              <span class="text-center font-semibold text-sm">
                {item.candle.price * item.quantity}
                ₽
              </span>
            </div>
          {/each}
        </div>
        <div class="flex px-10">
          <div class="">
            <Button
              on:click={() => {
                goto('/candles#catalog');
              }}>Продолжить выбор</Button
            >
          </div>
          <div class="ml-auto">
            <Button on:click={() => {}}>Отчисть корзину</Button>
          </div>
        </div>
      </div>
      <div class="bg-opacity-50 bg-white shadow w-full h-full p-10 flex flex-col gap-2">
        <div class="flex justify-between border-b border-solid border-black">
          <p class="font-semibold text-sm uppercase">Итого:</p>
          <span class="font-semibold text-sm">{total} ₽</span>
        </div>
        <div class="flex justify-between border-b border-solid border-black">
          <p class="font-semibold text-sm uppercase">Ваша скидка:</p>
          <span class="font-semibold text-sm">{discount} %</span>
        </div>
        <div class="flex justify-between border-b border-solid border-black">
          <p class="font-semibold text-sm uppercase">Размер скидки:</p>
          <span class="font-semibold text-sm">
            {Math.round(total * (discount / 100) * 100) / 100} ₽
          </span>
        </div>
        <div class="flex justify-between border-b border-solid border-black">
          <p class="font-semibold text-sm uppercase">Стоимость доставки:</p>
          <span class="font-semibold text-sm">{delivery_cost} ₽</span>
        </div>
        <div class="flex justify-between border-b border-solid border-black">
          <p class="font-semibold text-sm uppercase">Итого(со скидкой):</p>
          <span class="font-semibold text-sm">
            {Math.round((total * (1 - discount / 100) + delivery_cost) * 100) / 100}
            ₽
          </span>
        </div>
        <p class="text-orange text-sm">*Бесплатная доставка при заказе от 3000 ₽</p>
        <br />
        <Button>
          Для оформления заказа отправьте скриншот корзины нашему
          <a href="https://t.me/karinakrasyuk">менеджеру</a>
        </Button>
      </div>
    </div>
  </div>
</div>

<!-- 
<div class="h-[calc(100vh-85px)] grid items-center justify-items-center">
  <div class="grid items-center justify-items-center text-center py-20">
    <div class="mx-30">
      <div class="bg-opacity-50 bg-white shadow w-full h-full px-10 py-5 flex flex-col gap-2">
        <div class="container mx-auto mt-10">
          <div class="flex flex-col lg:flex-row shadow-md my-10 bg-white">
            <div class="w-full lg:w-3/4 p-5">
              <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl">Моя корзина</h1>
                <h2 class="font-semibold text-2xl">{cartItems.length} позиций</h2>
              </div>
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Товары</h3>
                <h3 class="font-semibold text-gray-600 text-xs uppercase text-center">
                  Цена
                </h3>
                <h3 class="font-semibold text-gray-600 text-xs uppercase text-center">
                  Количество
                </h3>
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                  Итого
                </h3>
              </div>
              {#each cartItems as item}
                <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div class="flex w-2/5">
                    <div class="w-20">
                      <img class="h-24" src={item.candle.imageUrl} alt={item.candle.name} />
                    </div>
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                      <span class="font-bold text-sm">{item.candle.name}</span>
                      <span class="text-red-500 text-xs">{item.candle.description}</span>
                    </div>
                  </div>
                  <div class="flex justify-center w-1/5">
                    <span class="text-center w-1/5 font-semibold text-sm">{item.candle.price}</span>
                  </div>
                  <div class="flex justify-center w-1/5">
                    <input
                      class="mx-2 border text-center w-8"
                      type="number"
                      value={item.quantity}
                      min="1"
                      on:change={(e) => updateQuantity(item.id, e)}
                    />
                  </div>
                  <div class="flex justify-center w-1/5">
                    <span class="text-center w-1/5 font-semibold text-sm"
                      >{item.candle.price * item.quantity}</span
                    >
                  </div>
                </div>
              {/each}
            </div>
            <div class="w-full lg:w-1/4 px-8 py-10">
              <h1 class="font-semibold text-2xl border-b pb-8">Итого</h1>
              <div class="flex justify-between mt-10 mb-5">
                <span class="font-semibold text-sm uppercase">Итого:</span>
                <span class="font-semibold text-sm">{calculateTotal(cartItems)}</span>
              </div>
              <Button on:click={() => goto('/checkout')}>Перейти к оформлению</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->
