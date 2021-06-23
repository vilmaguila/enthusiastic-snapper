<template>
  <div>
    <nav-bar>
      <nav-bar-item nuxt to="/"> Home </nav-bar-item>
      <nav-bar-item nuxt to="/gurus"> Gurus </nav-bar-item>
      <nav-bar-item v-if="$auth.loggedIn" nuxt to="/profile"
        >Profile
      </nav-bar-item>
      <!-- show login when not authenticated -->
      <nav-bar-item v-if="!$auth.loggedIn" @click.native="login"
        >Log in</nav-bar-item
      >
      <!-- show logout when authenticated -->
      <nav-bar-item v-if="$auth.loggedIn" @click.native="logout"
        >Log out</nav-bar-item
      >
    </nav-bar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWith('auth0')
    },
    // Log the user out
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
