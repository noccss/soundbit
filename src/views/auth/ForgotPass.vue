<template>
  <div class="forgotPass_app">
    <div class="forgotPass__header">
      <h1>Sound<span>Bit</span></h1>
    </div>
    <div class="forgotPass__container">
      <v-stepper
        width="85%"
        v-if="validatedEmail == true ? (step = 3) : step"
        v-model="step"
      >
        <v-stepper-header>
          <v-stepper-step color="#e85288" :complete="step > 1" step="1">
            Digite seu E-mail
          </v-stepper-step>
          <v-stepper-step color="#e85288" :complete="step > 2" step="2">
            Confirme seu E-mail
          </v-stepper-step>
          <v-stepper-step color="#e85288" :complete="step > 3" step="3">
            Troque sua senha
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12">
              <v-form ref="form" @submit.prevent="validateEmail">
                <h1>Digite seu E-mail</h1>

                <v-text-field
                  class="mt-5"
                  v-model="email"
                  :rules="[rulesEmail.required, rulesEmail.email]"
                  :append-icon="'mdi-email'"
                  label="E-mail"
                  required
                  outlined
                  name="email"
                ></v-text-field>
              </v-form>
            </v-card>
            <v-btn
              class="forgotPass___btnSubmit"
              color="white"
              outlined
              large
              @click="validateEmail"
              >Continue</v-btn
            >
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card class="mb-12">
              <h1 class="mb-5">Confirme que é você mesmo!</h1>

              <p>
                Por favor, verifique para assegurarmos que realmente é você,
                pedimos que verifique seu E-mail e clique no link que está no
                corpo da mensagem
              </p>
              <p>
                Caso a mensagem que enviamos para seu E-mail não esteja
                aparecendo na caixa de entrada, verifique se está no spam
              </p>

              <p>
                Problemas para a visualização da mensagem, não se preocupe,
                basta vir falar conosco que vamos te ajudar com isso, basta nos
                enviar um E-mail, <a href="#">suporte@soundbit.com.br</a>
              </p>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card class="mb-12">
              <h1 class="mb-5">Troque sua senha!</h1>
              <v-form ref="form" @submit.prevent="handleSubmit">
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
                  v-model="newPassword"
                  :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showNewPassword ? 'text' : 'password'"
                  :rules="[
                    rulesPassword.required,
                    rulesPassword.min,
                    newPasswordDifferentRule,
                  ]"
                  label="New Password"
                  required
                  outlined
                  @click:append="showNewPassword = !showNewPassword"
                ></v-text-field>
                <v-text-field
                  v-model="confirmPassword"
                  :append-icon="showConfirmPassowrd ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showConfirmPassowrd ? 'text' : 'password'"
                  :rules="[
                    rulesPassword.confirmPassword,
                    rulesPassword.min,
                    newPasswordConfirmRule,
                  ]"
                  label="Confirm Password"
                  required
                  outlined
                  @click:append="showConfirmPassowrd = !showConfirmPassowrd"
                ></v-text-field>
                <v-btn
                  class="ma-2 forgotPass___btnSubmit"
                  color="white"
                  type="submit"
                  outlined
                  large
                  >Trocar Senha</v-btn
                >
              </v-form>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "forgotPassword",
  data() {
    return {
      step: 3,
      validatedEmail: false,
      email: "",
      password: "",
      confirmPassword: "",
      newPassword: "",
      showNewPassword: false,
      showPassword: false,
      showConfirmPassowrd: false,
      rulesEmail: {
        required: (v) => !!v || "Email is required",
        email: (v) =>
          /.+@.+/.test(v) ||
          "Email precisa estar no formato example@example.com",
      },
      rulesPassword: {
        required: (v) => !!v || "Password is required",
        min: (v) => v.length >= 8 || "Min 8 characteres",
        confirmPassword: (v) => !!v || "Confirm the password",
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if(this.$refs.form.validate()) {
          await axios.post("", {
            password: this.newPassword
          })
        }
      } catch(err) {
        console.log(err)
      }
    },
    validateEmail() {
      try {
        // await axios.post("", {
        //   email: this.email,
        // });

        if (this.email != "" && this.$refs.form.validate()) this.step = 2;
        else this.step = 2;
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    newPasswordDifferentRule() {
      return () =>
        this.password !== this.newPassword ||
        "Sua senha não pode ser igual a anterior";
    },
    newPasswordConfirmRule() {
      return () =>
        this.newPassword === this.confirmPassword ||
        "Sua senha está diferente da nova senha";
    },
  },
};
</script>

<style scoped>
.forgotPass_app {
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: #f5f6fa;
}

.forgotPass__header {
  color: #e85288;
  height: 120px;
  display: flex;
  align-items: center;
  margin: 0 60px;
}

.forgotPass__header span {
  color: #000;
}

.forgotPass__container {
  display: flex;

  justify-content: center;
  text-align: center;
}

.forgotPass__container h1 {
  font-size: 24px;

  color: #e85288;
}

.forgotPass___btnSubmit {
  background-color: #e85288;
  width: 50%;
  border-radius: 15px;
}
</style>
