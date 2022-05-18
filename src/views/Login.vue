<template>
  <form class="card auth-card" @submit.prevent="submitHendler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="state.email"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid"
        v-if="v$.email.$dirty && v$.email.$required">Email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="state.password"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid"
        v-if="v$.password.$dirty && v$.password.$required">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
            @click="submitHandler()"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import router from "@/router";
import  useValidate from '@vuelidate/core'
import {email, required} from '@vuelidate/validators'
import {reactive, computed, ref} from 'vue'
import { useStore } from 'vuex';

export default {
    name: "Login",
    setup() {
      const login__form = ref({});
      const register__form = ref({});
      const store = useStore();


      const state = reactive({
        login: '',
        password: '',
      });
      const reles = computed( () => {
        return {
          email: {required, email}, 
          password: {required} 
        }
      });
      const v$ = useValidate(reles, state);
      return {
        state, v$,
        login__form,
        register__form
      }
    },
    methods: {
        submitHandler() {
            this.v$.$validate();
            if (!this.v$.$error) {
              this.$router.push('/')
            } else {
              console.log(2);
            }
        },

        printError($name, $param) {
            if ($name === 'required') {
                return 'Поле не должно быть пустым'
            } else if ($name === 'minLength') {
                return 'Минимальная длина должна быть ' + $param + ' символов'
            }
        }
    }
}
</script>