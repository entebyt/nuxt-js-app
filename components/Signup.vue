<template>
  <div class="auth-body">
    <div class="auth-container">
      <div class="auth-form-container sign-in-container">
        <form @submit="signupMethod">
          <h1>Sign up</h1>
          <div class="social-container">
            <a href="#" class="social">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="text" required placeholder="Name">
          <input type="email" required v-model="email" placeholder="Email">
          <input type="password" v-model="password" required placeholder="Password">
          <button type="submit">Sign up</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="auth-overlay">
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button @click="moveToSignin" class="ghost">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {signup} from '../services/auth'
export default {
    data(){
        return {
        password:'',
        email:''
      }
    },
    methods:{
      async signupMethod(e){
        e.preventDefault();
        try{  const response = await signup(this.email,this.password,this.$axios)
        console.log(response)
        if(response.status===200){
 this.$router.push('/')
        }
        }
        catch{

        }}
        ,moveToSignin(){
        this.$router.push('/login')
      }
      },
      
    }

</script>
