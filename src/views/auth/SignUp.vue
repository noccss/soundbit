<template>
  <div class="register_app">
    <div class="register__header">
      <h1>Sound<span>Bit</span></h1>
    </div>

    <div class="register__container">
      <img src="../../assets/img/Auth/background_register.svg" />

      <v-form ref="form" @submit.prevent="handleSubmit">
        <h1>Welcome to <strong>Sound</strong>Bit</h1>
        <v-text-field
          v-model="email"
          :append-icon="'mdi-email'"
          :rules="[rulesEmail.required, rulesEmail.email]"
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
        <v-text-field
          v-model="confirmPassword"
          :append-icon="showConfirmPassowrd ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showConfirmPassowrd ? 'text' : 'password'"
          :rules="[rulesPassword.confirmPassword, rulesPassword.min]"
          label="Confirm Password"
          required
          outlined
          @click:append="showConfirmPassowrd = !showConfirmPassowrd"
        ></v-text-field>

        <v-checkbox
          label="Do you agree with the Terms & Conditions?"
          v-model="checkbox"
          :rules="[rulesTerms]"
          required
        ></v-checkbox>

        <v-btn class="ma-2 register___btnSubmit" outlined large color="white" type="submit">
          Register
        </v-btn>

        <router-link to="/login"
          >Se já possui uma conta, clique aqui!</router-link
        >
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
  name: "signup",
  data() {
    return {
      showPassword: false,
      showConfirmPassowrd: false,
      snackbar: {
        open: false,
        text: "",
        color: "",
        timeout: 0,
      },
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
      rulesPassword: {
        required: (v) => !!v || "Password is required",
        min: (v) => v.length >= 8 || "Min 8 characteres",
        confirmPassword: (v) => !!v || "Confirm the password",
      },
      rulesEmail: {
        required: (v) => !!v || "Email is required",
        email: (v) =>
          /.+@.+/.test(v) ||
          "Email precisa estar no formato example@example.com",
      },
      rulesTerms: (v) => !!v || "You must agree to continue!",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.$refs.form.validate() && this.validCredentials()) {
          await axios.post("", {
            email: this.email,
            password: this.password,
          });

          this.$router.push("/login");
        }
      } catch (err) {
        this.snackbar.open = true;
        this.snackbar.color = "red";
        this.snackbar.text = err;
        console.log(err);
      }
    },

    validCredentials() {
      if (this.password === this.confirmPassword) {
        return true;
      } else {
        this.snackbar.open = true;
        this.snackbar.color = "red";
        this.snackbar.text = "Your password is not matched";
        return false;
      }
    },
  },
};
</script>

<style scoped>
.register_app {
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: #f5f6fa;
}

.register__header {
  color: #e85288;
  height: 120px;
  display: flex;
  align-items: center;
  margin: 0 60px;
}

.register__header span {
  color: #000;
}

.register__container {
  display: flex;

  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 0 60px;
}

.register__container img {
  width: 50vw;
}

.register__container form {
  display: flex;
  flex-direction: column;

  width: 40vw;

  align-items: center;

  text-align: center;
}

.register__container h1 {
  margin-bottom: 40px;
}

.v-text-field {
  width: 90%;

  border-radius: 20px;
  padding: 0 40px;
}

.register___btnSubmit {
  background-color: #e85288;
  width: 50%;
  border-radius: 20px;
}

.register__container a {
  color: #e85288;

  font-weight: bold;

  text-decoration: none;
}

.register__container span {
  color: #000000;
  font-weight: bold;
}

.register__container strong {
  color: #e85288;
}
</style>
