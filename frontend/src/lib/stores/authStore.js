// @ts-nocheck
// src/lib/stores/authStore.js
import { goto } from '$app/navigation';
import { writable } from 'svelte/store';
import Cookies from 'js-cookie';

const createAuthStore = () => {
  let storedAuthState = {
    isLoggedIn: false,
    userId: null,
    token: null,
    userName: null,
  };

  if (typeof localStorage !== 'undefined') {
    const storedState = localStorage.getItem('authState');
    if (storedState) {
      storedAuthState = JSON.parse(storedState);
    }
  }

  const cookieUserId = Cookies?.get('userId');
  const cookieToken = Cookies?.get('token');
  
  if (cookieUserId && cookieToken) {
    storedAuthState = {
      isLoggedIn: true,
      userId: parseInt(cookieUserId, 10),
      token: cookieToken,
      userName: null,
    };
  }

  const { subscribe, set } = writable(storedAuthState);

  return {
    subscribe,
    login: (userData) => {
      const newState = {
        isLoggedIn: true,
        userId: userData.userId,
        token: userData.token,
        userName: userData.name,
      };
      set(newState);

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('authState', JSON.stringify(newState));
      }

      Cookies.set('userId', newState.userId, { expires: 7, secure: true, sameSite: 'Lax' });
      Cookies.set('token', newState.token, { expires: 7, secure: true, sameSite: 'Lax' });
    },
    logout: () => {
      const newState = { isLoggedIn: false, userId: null, token: null, userName: null };
      set(newState);

      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('authState');
      }

      Cookies.remove('userId');
      Cookies.remove('token');

      // Redirect logic (SvelteKit or fallback)
      if (typeof goto === 'function') {
        window.location.href = '/login';
      } else {
        window.location.href = '/login';
      }
    },
  };
};

export const authStore = createAuthStore();
