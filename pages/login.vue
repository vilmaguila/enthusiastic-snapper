<template>
  <div>
    <h1>
      You are trying to access resource that required authentication, please
      login!
    </h1>
    <cool-button @click.native="login">Login</cool-button>
    <back-button label="Back"></back-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      this.$auth.loginWith('auth0')
    },
  },
}
</script>
