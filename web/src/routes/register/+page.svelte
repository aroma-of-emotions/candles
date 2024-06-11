<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { TextInput, PasswordInput } from 'carbon-components-svelte';
  import Button from '$lib/components/Button.svelte';
  import { server_url } from '$lib/utils';

  let email: string = '';
  let password: string = '';
  let password2: string = '';
  let username: string = '';
  let error: string = '';

  async function register() {
    try {
      if (password !== password2) throw new Error('Пароли различаются');

      const response = await fetch(`${server_url}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, username })
      });

      if (!response.ok) {
        // const data = await response.json();
        throw new Error((await response.text()) || 'Registration failed');
      }

      goto('/candles/login');
    } catch (err: any) {
      error = err.message;
    }
  }
</script>

<!-- <div class="mt-100">
  <form on:submit|preventDefault={register}>
    <a href="/candles/login">login</a>
    <div>
      <label for="email">Email:</label>
      <input id="email" type="email" bind:value={email} required />
    </div>
    <div>
      <label for="username">Username:</label>
      <input id="username" type="text" bind:value={username} required />
    </div>

    <div>
      <label for="password">Password:</label>
      <input id="password" type="password" bind:value={password} required />
    </div>
    <button type="submit">Register</button>
    {#if error}
      <p style="color: red">{error}</p>
    {/if}
  </form>
</div> -->

<div class="h-[calc(100vh-85px)] grid items-center justify-items-center">
  <div class="grid items-center justify-items-center text-center py-20">
    <div class="">
      <div class="mx-30">
        <div class=" bg-opacity-50 bg-white shadow w-full h-full px-10 py-5 flex flex-col gap-2">
          <div>
            <h1 class="font-bold mb-6">Регистрация</h1>
            <p class="mb-8">
              Если вы уже зарегистрированы, вы можете войти здесь
              <a href="/candles/login">здесь</a>
            </p>
          </div>
          <form on:submit|preventDefault={register}>
            <TextInput
              id="email"
              light
              labelText="Email"
              placeholder="Введите ваш email"
              bind:value={email}
              required
            />
            <TextInput
              id="username"
              light
              labelText="Логин"
              placeholder="Введите ваш логин"
              bind:value={username}
              required
            />

            <PasswordInput
              id="password"
              light
              labelText="Пароль"
              placeholder="Введите ваш пароль"
              bind:value={password}
            />
            <PasswordInput
              id="password-2"
              light
              labelText="Подтверждение  пароля"
              placeholder="Потдвердите ваш пароль"
              bind:value={password2}
            />
            <br />
            {#if error}
              <p style="color: red">{error}</p>
            {/if}
            <br />

            <div>
              <Button>Зарегистрироваться</Button>
            </div>
          </form>
        </div>
      </div>

      <br />
    </div>
  </div>
</div>
