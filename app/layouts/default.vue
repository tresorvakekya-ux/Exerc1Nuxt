<script setup>
/* Ce fichier enveloppe toutes les pages avec un en-tête de navigation commun et un pied
 de page.
*/ 
</script>

<template>
  <div>
    <header>
      <h1>Mon application</h1>
      <nav>
        <NuxtLink to="/">Accueil</NuxtLink> | 
        <NuxtLink to="/about">À propos</NuxtLink> | 
        <NuxtLink to="/login">Connexion</NuxtLink> |
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </nav>
    </header>
    <hr />

    <main>
      <!-- Le contenu des pages s'injectera ici -->
      <slot />
    </main>

    <hr />
    <footer>
      <p>© 2026 Mon application</p>
    </footer>
  </div>
</template>