<template>
  <div class="auth-body">
    <div class="auth-container">
      <div class="auth-form-container sign-in-container">
        <form @submit="loginMethod">
          <h1>Sign in</h1>
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
          <input v-model="email" type="email" required placeholder="Email">
          <input v-model="password" type="password" required placeholder="Password">
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="auth-overlay">
          <div class="overlay-panel overlay-right">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button @click="moveToSignup" class="ghost">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from '../services/auth'
export default {
    data() {
        return {
           
                email: "",
                password: ""
           
        }
    },
    methods: {
            async loginMethod(e) {
                e.preventDefault();
            const response = await login(this.email,this.password)
            if(response.status===200){
              this.$router.push('/')
            }
            console.log(response)
            
            },
            moveToSignup(){
              this.$router.push('/signup')
            }
        }
}
</script>
