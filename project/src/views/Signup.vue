<!-- 회원가입 -->
<template>
  <div class="signup">
    <div class="top">
        <h1>회원가입 페이지</h1>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-name"
        label="name:"
        label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter Name"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-id"
        label="ID:"
        label-for="input-id">
        <b-form-input
          id="input-id"
          v-model="form.id"
          type="text"
          required
          placeholder="Enter ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-pwd"
        label="password:"
        label-for="input-pwd">
        <b-form-input
          id="input-pwd"
          v-model="form.pwd"
          :state="pwdState"
          aria-describedby="input-live-feedback"
          type="password"
          required
          placeholder="Enter pwd"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          Enter at least 4 letters
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-mail"
        label="Email address:"
        label-for="input-mail"
        description="We'll never share your email with anyone else.">
        <b-form-input
          id="input-mail"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-gender"
        label="Gender:"
        label-for="input-gender">
        <b-form-radio-group
            id="radio-group-gender"
            v-model="form.selected"
            :options="options"
            name="radio-options"
          ></b-form-radio-group>
      </b-form-group>

      <b-form-group
        id="input-group-birth"
        label="Date of birth:"
        label-for="input-birth">
        <b-form-input
          id="input-birth"
          v-model="form.birth"
          type="date"
          required
        ></b-form-input>
      </b-form-group>

      <!-- 취향 태그 시작 -->
      <b-form-group label="Please select a tag that suits your taste">
        <!-- prop `add-on-change` is needed to enable adding tags vie the `change` event -->
        <b-form-tags v-model="form.value" size="lg" add-on-change no-outer-focus class="mb-2">
          <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
            <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
              <li v-for="tag in tags" :key="tag" class="list-inline-item">
                <b-form-tag
                  @remove="removeTag(tag)"
                  :title="tag"
                  :disabled="disabled"
                  variant="info"
                >{{ tag }}</b-form-tag>
              </li>
            </ul>
            <b-form-select
              v-bind="inputAttrs"
              v-on="inputHandlers"
              :disabled="disabled || availableOptions.length === 0"
              :options="availableOptions"
            >
              <template v-slot:first>
                <!-- This is required to prevent bugs with Safari -->
                <option disabled value="">Choose a tag...</option>
              </template>
            </b-form-select>
          </template>
        </b-form-tags>
      </b-form-group>
      <!-- 취향 태그 끝 -->

      <!-- 손님 / 샵직원 -->
      <b-form-group
        id="input-group-staff"
        label="Type: 고객 / 네일아티스트"
        label-for="input-staff">
        <b-form-radio-group
          id="btn-radios-staff"
          v-model="form.staff"
          :options="staffOptions"
          buttons
          button-variant="outline-primary"
          size="sm"
          name="radio-btn-outline"
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group
        id="input-group-shop"
        label="Shop"
        label-for="input-shop">
        <b-button v-b-toggle.collapse-2 class="m-1">Toggle Collapse</b-button>
      </b-form-group>
        <b-collapse id="collapse-2">
          <b-card>
            <b-form-input
              id="input-shop"
              v-model="form.shop"
              type="search"
              required
            ></b-form-input>
          </b-card>
        </b-collapse>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          id:'',
          pwd:'',
          email: '',
          selected:'',
          birth:'',
          staff:'g',
          shop:''
        },
        options:[
          {text:'여자', value:'w'},
          {text:'남자', value:'m'}
        ],
        staffOptions:[
          {text:'Guest', value:'g'},
          {text:'Staff', value:'s'}
        ],
        value:[],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$http.post('/api/users/signUp', { 
          form: this.form
        })
        
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values l1l1o0o0
        this.form.name = ''
        this.form.email = ''
        this.form.id = ''
        this.form.pwd = ''
        this.form.birth = ''
        this.form.staff = ''
        this.form.shop = ''
        this.form.value = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    computed:{
      pwdState(){
        return this.form.pwd.length > 3 ? true : false
      },
      availableOptions() {
        return this.options.filter(opt => this.value.indexOf(opt) === -1)
      }
    }
  }
</script>

<style>

</style>