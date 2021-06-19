<template>
    <div class="login_app">
        <div class="login__header">
            <h1>Sound<span>Bit</span></h1>
        </div>

        <div class="login__container">
            <img src="../../assets/img/Auth/background_login.svg" />

            <form>
                <h1>Bem vindo de volta ao SoundBit</h1>
                <v-text-field
                    v-model="email"
                    :error-message="emailErrors"
                    :rules="[rules.required]"
                    label="E-mail"
                    required
                    outlined
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
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

                <v-btn
                    class="ma-2"
                    outlined
                    large
                    color="white"
                > Login
                </v-btn>

                <router-link to="">Esqueceu sua senha?</router-link>
                <p>Não tem uma conta? <router-link to="">Cadastre-se aqui!</router-link></p>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'login',
    data() {
        return {
            showPassword: false,
            password: '',
            rules: {
                required: v => !!v || 'Required',
                min: v => v.length >= 8 || 'Min 8 characteres',
            }
        }
    }
}
</script>

<style scoped>
    .login_app {
        display: flex;
        flex-direction: column;

        width: 100vw;
        height: 100vh;

        background-color: #F5F6FA;
    }

    .login__header {
        color: #E85288;
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

    .v-btn {
        background-color: #E85288;
        width: 50%;
        border-radius: 20px;
    }

    .login__container a {
        color: #E85288;

        font-weight: bold;

        text-decoration: none;
    }

    .login__container span {
        color: #000000;
        font-weight: bold;
    }
</style>
