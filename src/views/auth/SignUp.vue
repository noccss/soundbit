<template>
  <div class="register_app">
    <div class="register__header">
      <h1>Sound<span>Bit</span></h1>
    </div>

    <div class="register__container">
      <img src="../../assets/img/Auth/background_register.svg" />

      <form>
        <h1>Bem vindo de volta ao SoundBit</h1>
        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.emailRules]"
          label="E-mail"
          required
          outlined
          name="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          :rules="[rules.required, rules.min]"
          label="Password"
          required
          outlined
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-text-field
          v-model="confirmPassword"
          :append-icon="showConfirmPassowrd ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showConfirmPassowrd ? 'text' : 'password'"
          :rules="[rules.required, rules.min]"
          label="Confirm Password"
          required
          outlined
          @click:append="showConfirmPassowrd = !showConfirmPassowrd"
        ></v-text-field>

        <v-btn class="ma-2" outlined large color="white"> Register </v-btn>

        <router-link to="/login"
          >Se já possui uma conta, clique aqui!</router-link
        >
        <p></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      showPassword: false,
      showConfirmPassowrd: false,
      email: "",
      password: "",
      confirmPassword: "",
      rules: {
        required: (v) => !!v || "Required",
        min: (v) => v.length >= 8 || "Min 8 characteres",
        emailRules: (v) =>
          /.+@.+/.test(v) ||
          "Email precisa estar no formato example@example.com",
      },
    };
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

.v-btn {
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
</style>
