<template>
    <div class="login_page">
        <div class="login__header">
            <a href="">Sound<span>Bit</span></a>
        </div>
        <div class="login__container">
            <img src="../../assets/svg/background_login.svg" />

            <form>
                <h1>Bem-vindo de volta ao SoundBit</h1>

                <div class="login___input">
                    <input type="text" placeholder="Email" v-model="email" />

                    <input type="password" placeholder="Password" v-model="password" />
                </div>
                <button type="submit" @click="handleCredentials">Entrar</button>

                <div class="login___options">
                    <span>Esqueceu sua senha?</span>
                    <span>Não tem uma conta? <router-link to="/signup">Cadastre-se aqui!</router-link></span>
                </div>
            </form> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleCredentials() {

        }
    }
}
</script>

<style scoped>
    .login_page {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        height: 100vh;
        background-color: #F5F6FA;
        font-family: sans-serif, Roboco;
    }

    .login__header {
        display: flex;
        align-items: center;

        padding: 0 50px;
    }

    .login__header a {
        font-size: 30px;
        font-weight: bold;

        text-decoration: none;

        color: #E85288;
    }

    .login__header span {
        color: #000000;
    }

    .login__container {
        display: flex;
        justify-content: space-around;

        margin-bottom: 90px;
    }

    .login__container img {
        height: 60vh;
        width: 50vw;
    }

    .login__container form {
        display: flex;
        flex-direction: column;

        text-align: center;
        align-items: center;

        justify-content: space-evenly;

        width: 40vw;
        height: 60vh;

        margin-right: 30px;
    }

    .login__container h1 {
        font-size: 26px;
        font-weight: bold;
    }

    .login___input {
        display: flex;
        flex-direction: column;
        width: 70%;

    }

    .login___input input {
        height: 50px;

        border-radius: 20px;
        border: 1px solid #999999;

        font-size: 18px;

        padding: 0 40px;

        outline: none;
    }

    .login___input input:nth-child(1) {
        margin-bottom: 40px;
    }

    .login__container button {
        height: 50px;
        width: 50%;

        border-radius: 20px;
        border: 1px solid #E85288;
        background-color: #E85288;

        color: #ffffff;

        font-size: 20px;
        font-weight: bold;
    }

    .login___options {
        display: flex;
        flex-direction: column;
        color: #E85288;
        font-weight: bold;
    }

    .login___options a {
        color: #000000;
        text-decoration: none;
    }
</style>