<script setup>
/* Cette page fait appel à definePageMeta() pour activer la protection de la route. 
Si l'utilisateur n'est pas connecté, il sera redirigé vers la page de connexion.
*/ 
</script>

<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div>
    <h2>Dashboard</h2>
    <p>Bienvenue dans votre espace privé.</p>
  </div>
</template>