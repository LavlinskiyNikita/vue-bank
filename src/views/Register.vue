<template>
  <form class="card auth-card" @submit.prevent >
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model="state.email"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid"
        v-if="v$.email.$dirty && v$.email.$required"
        :class="{invalid: v$.email.$dirty && !v$.email.$required}" 
        >Email</small>
        
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model="password"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid"
          v-if="v$.password.$dirty && v$.password.$required"
          :class="{invalid: v$.password.$dirty && !v$.password.$required}" 
        >Password</small>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            class="validate"
            v-model.trim="state.name"
        >
        <label for="name">Имя</label>
        <small class="helper-text invalid"
               :class="{invalid: v$.name.$dirty && !v$.name.$required}" 
               v-if="v$.name.$dirty && v$.name.$required">Name</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="state.agree"/>
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
            @click="Register()"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
 </form>
</template>

<script>

import  useValidate from '@vuelidate/core'
import {email, required} from '@vuelidate/validators'
import {reactive, computed, ref} from 'vue'
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth'
import { useRouter } from 'vue-router'
import router from '@/router'



export default {
  setup() {
      const state = reactive({
        login: '',
        password: '',
        name: '',
        agree: false
      });

      const reles = computed( () => {
        return {
          email: {required, email}, 
          password: {required},
          name: {required},
          agree: {checked: v => v }
        }
      });
      
      const v$ = useValidate(reles, state);
      return {
        state, v$
      }
    },
    methods: {

      Register() {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
          .then ((data) => {
            this.v$.$validate();
              if (!this.v$.$error) {
                this.$router.push('/')
              } else {
                console.log(12);
              }
          })
          .catch ((error) => {
            console.log(error.code);
            alert(error.message)
          })
      },
      submitHandler() {


        const formDate = {
          email: this.email,
          password: this.password,
          name: this.name
        }
      },
    }
}
</script>