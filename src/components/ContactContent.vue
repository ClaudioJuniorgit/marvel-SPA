<script setup lang="ts">
import { ref, nextTick } from 'vue'

const contacForm = ref()

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const formError = ref({
  name: 'Name required',
  email: 'Email required',
  phone: 'Phone required',
  message: 'Message required'
})

const hasError = ref({
  name: false,
  email: false,
  phone: false,
  message: false
})

const modalActivated = ref(false)

const isValidForm = ref(false)

const validateField = (field: string) => {
  if (form.value[field].trim() === '') {
    hasError.value[field] = true
    isValidForm.value = false
    return
  }
  hasError.value[field] = false

  validateForm()
}

const validateForm = () => {
  for (const key in form.value) {
    if (form.value[key].trim() === '') {
      return (isValidForm.value = false)
    }
  }
  return (isValidForm.value = true)
}

const clearForm = () => {
  for (const key in form.value) {
    form.value[key] = ''
  }
}

const sendData = async (e: MouseEvent) => {
  e.preventDefault()
  isValidForm.value = false
  await nextTick()
  contacForm.value.reset()
  clearForm()
  modalActivated.value = true
}
</script>

<template>
  <div class="container-content">
    <form ref="contacForm" class="formContact">
      <div class="container-Field">
        <label for="textContact">Name</label>
        <input
          :class="{ inputError: hasError.name }"
          v-model="form.name"
          type="text"
          name=""
          id="nameContact"
          placeholder="Ex.: Your full name"
          @input="validateField('name')"
        />
        <p class="invalidField" v-if="hasError.name">{{ formError.name }}</p>
      </div>
      <div class="container-Field">
        <label for="emailContact">Email</label>
        <input
          :class="{ inputError: hasError.email }"
          v-model="form.email"
          type="text"
          name=""
          id="emailContact"
          placeholder="Ex.: myemail@email.com"
          @input="validateField('email')"
        />
        <p class="invalidField" v-if="hasError.email">{{ formError.email }}</p>
      </div>
      <div class="container-Field">
        <label for="phoneContact">Phone</label>
        <input
          :class="{ inputError: hasError.phone }"
          v-model="form.phone"
          type="text"
          name=""
          id="phoneContact"
          placeholder="Ex.: (99) 9 9999-9999"
          @input="validateField('phone')"
        />
        <p class="invalidField" v-if="hasError.phone">{{ formError.phone }}</p>
      </div>
      <div class="container-Field">
        <label for="messageContact">Message</label>
        <textarea
          :class="{ inputError: hasError.message }"
          v-model="form.message"
          id="messageContact"
          placeholder="Ex.: Contact message for Marvel"
          @input="validateField('message')"
        ></textarea>
        <p class="invalidField" v-if="hasError.message">{{ formError.message }}</p>
      </div>
      <input
        @click="(event) => sendData(event)"
        :disabled="!isValidForm"
        class="btn"
        type="submit"
        value="Send"
      />
    </form>
    <div v-if="modalActivated == true" class="modal-container">
      <div class="modal-content" name="modal">
        <div class="line-division" id="modal-top">
          <p>Message sent successfully!</p>
          <svg
            @click="modalActivated = false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.25 17.25L6.75 6.75M17.25 6.75L6.75 17.25"
              stroke="#767676"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="line-division" id="modal-body">
          <p>Thank you, we'll reach you as soon as possible</p>
        </div>
        <div id="modal-footer">
          <button @click="modalActivated = false" class="btn">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container-content {
  display: flex;
}

.formContact {
  display: flex;
  width: 100vw;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 80px;
  margin-top: 80px;
  gap: 8px;
}

.formContact label,
input,
textarea {
  width: 38px;
  height: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-top: 16px;
}
input,
textarea {
  width: 620px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  padding: 11px 0px 11px 16px;
}

.formContact ::placeholder {
  color: #cccccc;
}

.formContact textarea {
  height: 107px;
  resize: none;
}

.btn {
  width: 96px;
  height: 41px;
  border-radius: 4px;
  color: #ffffff;
  background-color: #ec1d24;
  padding: 11px 24px 11px 24px;
  border: none;
  cursor: pointer;
}
.btn:hover {
  background-color: #9f0013;
}

.formContact .btn:disabled {
  background-color: #cccccc;
  color: #767676;
  cursor: default;
}

.inputError {
  border: 1px solid #ec1d24;
}

.invalidField {
  color: #ec1d24;
  margin-top: 5px;
}

.container-Field {
  display: flex;
  flex-direction: column;
}

.modal-container {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.modal-content {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 533px;
  height: 196px;
  background-color: #ffffff;
  border-radius: 8px;
  top: 235px;
}

#modal-top {
  display: flex;
  position: relative;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  gap: 20px;
  padding: 0 24px;
}

#modal-top > svg {
  cursor: pointer;
  z-index: 10;
}

.line-division::after {
  content: '';
  border-bottom: 1px solid #cccccc;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#modal-body {
  display: flex;
  position: relative;
  height: 67px;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}
#modal-body p {
  display: flex;
  font-size: 16px;
  margin-left: 24px;
}

#modal-footer {
  display: flex;
  height: 73px;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
#modal-footer button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 24px 16px 0px;
}
</style>
