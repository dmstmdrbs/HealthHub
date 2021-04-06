<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="id"
            :rules="idRules"
            label="ID"
            :counter="20"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            type="password"
            v-model="pw"
            :rules="pwRules"
            label="Password"
            :counter="20"
            required
          ></v-text-field>
        </v-col>
        
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            type = "password"
            v-model="pwCheck"
            :rules="pwCheckRules"
            label="Password Check"
            :counter="20"
            required
          ></v-text-field>
          <v-btn
            elevation="2"
            small
            v-on:click = "checkPW">
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      errors:[],
      firstname: '',
      lastname: '',
      id : '',
      pw : '',
      pwRules:[
        v => !!v || 'Password is required',
        v => v.length <= 20 || 'Password must be less than 20 characters',
      ],
      pwCheck: '',
      pwCheckRules:[
        v => !!v || 'Rewrite the password',
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      checkPW: function(){
        if(this.pw != this.pwCheck){
          this.errors.push('Please check the pasword')
        }
      }
    }
  }
</script>