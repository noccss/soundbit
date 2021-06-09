<template>
    <div class="register_page">
        <div class="register__header">
            <a href="">Sound<span>Bit</span></a>
        </div>
        <div class="register__container">
            <img src="../../assets/svg/background_register.svg" />
            <form>
                <h1>Bem-vindo ao SoundBit</h1>

                <div class="register___input">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                </div>

                <button type="submit">Cadastrar</button>

                <div class="">
                    <span>Esqueceu sua senha?</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            
        }
    }    
}
</script>

<style scoped>
    .register_page {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        height: 100vh;
        background-color: #F5F6FA;
        font-family: sans-serif, Roboco;
    }

    .register__header {
        display: flex;
        align-items: center;

        padding: 0 50px;
    }

    .register__header a {
        font-size: 30px;
        font-weight: bold;

        text-decoration: none;

        color: #E85288;
    }

    .register__header span {
        color: #000000;
    }

    .register__container {
        display: flex;
        justify-content: space-around;

        margin-bottom: 90px;
    }

    .register__container img {
        height: 60vh;
        width: 50vw;
    }

    .register__container form {
        display: flex;
        flex-direction: column;

        text-align: center;
        align-items: center;

        justify-content: space-evenly;

        width: 40vw;
        height: 60vh;

        margin-right: 30px;
    }

    .register__container h1 {
        font-size: 26px;
        font-weight: bold;
    }

    .register___input {
        display: flex;
        flex-direction: column;
        width: 70%;
    }

    .register___input input {
        height: 50px;

        border-radius: 20px;
        border: 1px solid #999999;

        font-size: 18px;

        padding: 0 40px;

        outline: none;
        margin-bottom: 40px;
    }

    .register__container button {
        height: 50px;
        width: 50%;

        border-radius: 20px;
        border: 1px solid #E85288;
        background-color: #E85288;

        color: #ffffff;

        font-size: 20px;
        font-weight: bold;
    }
</style>