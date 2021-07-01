<template>
  <div>
    <Dialog v-model:visible="showDialog" modal :closable="false" class="p-dialog" content-class="user-info-dialog" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}">
          <div class="user-info-dialog">
            <img :src="userInfo.avatar" alt="user-avatar" class="user-info-dialog-avatar">
            <h2 class="user-info-dialog-full-name">{{userInfo.fullName}}</h2>
            <h4 class="user-info-dialog-title">{{userInfo.title}}</h4>
            <p class="user-info-dialog-biography">{{userInfo.biography}}</p>
            <div class="user-info-dialog-contacts">{{userInfo.email}} | {{userInfo.phone}}</div>
          </div>
          <template #footer>
            <div class="p-grid user-info-dialog-footer">
              <div class="p-col p-d-flex p-jc-start">
                <Button label="CLOSE" class="close-dialog-btn" @click="closeModal"/>
              </div>
              <div class="p-col">
                <Button label="EDIT"/>
                <Button label="DELETE" />
              </div>
            </div>
          </template>
    </Dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    showDialog() {
      return this.showProfile
    }
  },
  props: {
    showProfile: {
      type: Boolean,
      required: true,
    },
    userInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      console.log('fff')
      this.$emit('closeModal')
    },
    editUser() {

    },
    deleteUser() {

    },
  },
}
</script>

<style scoped lang="scss">

.p-button {
  background-color: #f5540b;
  outline: none;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
}

.user-info-dialog {
  text-align: center;

&-avatar {
   max-width: 200px;
   height: auto;
   margin-bottom: 30px;
 }

&-full-name {
   font-size: 32px;
 }

&-title {
   font-size: 14px;
   color: gray;
   margin-bottom: 30px;
 }

&-biography {
   font-weight: bolder;
   margin-bottom: 50px;
 }

&-contacts {
   font-weight: 700;
 }
}

.user-info-dialog-footer {
  margin-top: 24px;
.close-dialog-btn {
  background-color: transparent;
  color: #f5540b;

  border: 1px solid #f5540b;
}
}
</style>
