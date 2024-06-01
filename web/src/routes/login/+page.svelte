<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/components/Button.svelte';
  import { TextInput } from 'carbon-components-svelte';
  import { PasswordInput } from 'carbon-components-svelte';
  import { reloadPage } from '$lib/utils';

  let email: string = '';
  let password: string = '';
  let error: string = '';

  async function login() {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error((await response.text()) || 'Login failed');
      }
      const { token, user } = await response.json();
      localStorage.setItem('email', email);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      goto('/candles');
      reloadPage();
    } catch (err: any) {
      error = err.message;
    }
  }
</script>

<div class="h-[calc(100vh-85px)] grid items-center justify-items-center">
  <div class="grid items-center justify-items-center text-center py-20">
    <div class="">
      <div class="mx-30">
        <div class=" bg-opacity-50 bg-white shadow w-full h-full px-10 py-5 flex flex-col gap-2">
          <div>
            <h1 class="font-bold mb-6">Авторизация</h1>
            <p class="mb-8">
              Если у вас нет аккаунта, то вы можете зарегистрироваться
              <a href="/candles/register">здесь</a>
            </p>
          </div>
          <form on:submit|preventDefault={login}>
            <TextInput
              id="email"
              light
              labelText="Email"
              placeholder="Введите ваш email"
              bind:value={email}
              required
            />
            <PasswordInput
              id="password"
              password
              light
              labelText="Пароль"
              placeholder="Введите ваш пароль"
              bind:value={password}
              required
            />
            <br />
            <div>
              <Button>Войти</Button>
            </div>
            {#if error}
              <p style="color: red">{error}</p>
            {/if}
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
