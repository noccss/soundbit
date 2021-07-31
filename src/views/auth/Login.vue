<template>
  <div class="login_app">
    <div class="login__header">
      <h1>Sound<span>Bit</span></h1>
    </div>

    <div class="login__container">
      <img src="../../assets/img/Auth/background_login.svg" />

      <v-form ref="form" @submit.prevent="handleSubmit">
        <h1>Welcome back to <strong>Sound</strong>Bit</h1>
        <v-text-field
          v-model="email"
          :rules="[rulesEmail.required, rulesEmail.email]"
          :append-icon="'mdi-email'"
          label="E-mail"
          required
          outlined
          name="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          :rules="[rulesPassword.required, rulesPassword.min]"
          label="Password"
          required
          outlined
          @click:append="showPassword = !showPassword"
        ></v-text-field>

        <v-btn class="ma-2 login___btnSubmit" type="submit" outlined large color="white">
          Login
        </v-btn>

        <router-link to="/forgotPassword">Forgot your password?</router-link>
        <p>
          Don't have account?
          <router-link to="/signup">Sign Up here!</router-link>
        </p>
      </v-form>

      <v-snackbar v-model="snackbar.open" :color="snackbar.color">
        {{ snackbar.text }}

        <template #action>
          <v-btn color="white" text @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      snackbar: {
        open: false,
        text: "",
        color: "",
        timeout: 0,
      },
      rulesPassword: {
        required: (v) => !!v || "Password is required",
        min: (v) => v.length >= 8 || "Min 8 characteres",
      },
      rulesEmail: {
        required: (v) => !!v || "Email is required",
        email: (v) =>
          /.+@.+/.test(v) ||
          "Email precisa estar no formato example@example.com",
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post('', {
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.snackbar.open = true;
        this.snackbar.color = "red";
        this.snackbar.text = "Wrong Credentials. Please, Try again!"
      }
    },
  },
};
</script>

<style scoped>
.login_app {
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: #f5f6fa;
}

.login__header {
  color: #e85288;
  height: 120px;
  display: flex;
  align-items: center;
  margin: 0 60px;
}

.login__header span {
  color: #000;
}

.login__container {
  display: flex;

  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 0 60px;
}

.login__container img {
  width: 50vw;
}

.login__container form {
  display: flex;
  flex-direction: column;

  width: 40vw;

  align-items: center;

  text-align: center;
}

.login__container h1 {
  margin-bottom: 40px;
}

.v-text-field {
  width: 90%;

  border-radius: 20px;
  padding: 0 40px;
}

.login___btnSubmit {
  background-color: #e85288;
  width: 50%;
  border-radius: 20px;
}

.login__container a {
  color: #e85288;

  font-weight: bold;

  text-decoration: none;
}

.login__container span {
  color: #000000;
  font-weight: bold;
}

.login__container strong {
  color: #e85288;
}
</style>
