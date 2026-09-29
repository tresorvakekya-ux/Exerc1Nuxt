<template>
/* Ce garde de navigation intercepte l'accès au tableau de bord. Comme demandé, 
la variable simule un utilisateur anonyme.
*/ 
</template>

export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false

  // Si l'utilisateur n'est pas connecté, redirection forcée
  if (!isLoggedIn) {
    return navigateTo('/login')
  }
})