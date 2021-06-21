<template>
  <div>
    <nav-bar>
      <nav-bar-item>
        <nuxt-link to="/"> Home </nuxt-link>
      </nav-bar-item>
      <nav-bar-item>
        <nuxt-link to="/gurus"> Gurus </nuxt-link>
      </nav-bar-item>
      <nav-bar-item>
        <nuxt-link to="/profile"> Profile </nuxt-link>
      </nav-bar-item>
      <div v-if="!$auth.loading">
        <!-- show login when not authenticated -->
        <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
        <!-- show logout when authenticated -->
        <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
      </div>
    </nav-bar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      })
    },
  },
}
</script>
