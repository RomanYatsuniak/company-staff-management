<template>
  <div>
    <ConfirmDialog acceptLabel="DELETE"></ConfirmDialog>
  </div>
</template>

<script>
export default {
  props: {
    deleteProfile: {
      type: Boolean,
      required: true
    },
    userInfo: {
      type: Object,
      required: true
    }
  },
  watch: {
    deleteProfile() {
      if (this.deleteProfile) {
        this.delUser()
      }
    }
  },
  methods: {
    delUser() {
      this.$confirm.require({
        message: `Are you sure you want to remove ${this.userInfo.fullName}`,
        header: 'DELETE EMPLOYEE',
        accept: () => {
          this.$emit('acceptDeleteProfile', this.userInfo.id)
        },
        reject: () => {
          this.$emit('rejectDeleteProfile')
        }
      });
    },
  }
}
</script>

<style scoped lang="scss">
button {
  background-color: yellow;
}
.p-button {
  background-color: #f5540b;
  outline: none;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
}


</style>
