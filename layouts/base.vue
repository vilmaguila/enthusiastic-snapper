<template>
  <div>
    <nav-bar>
      <nav-bar-item nuxt to="/"> Home </nav-bar-item>
      <nav-bar-item nuxt to="/gurus"> Gurus </nav-bar-item>
      <nav-bar-item nuxt to="/profile">Profile </nav-bar-item>
      <div v-if="!$auth.loading">
        <!-- show login when not authenticated -->
        <nav-bar-item v-if="!$auth.isAuthenticated" @click.native="login"
          >Log in</nav-bar-item
        >
        <!-- show logout when authenticated -->
        <nav-bar-item v-if="$auth.isAuthenticated" @click.native="logout"
          >Log out</nav-bar-item
        >
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
