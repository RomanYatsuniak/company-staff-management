<template>
  <div class="p-grid user-list-item p-ai-center">
    <div class="p-col-4">
      <div class="p-grid p-ai-center">
        <div class="p-col">
          <button class="change-user-btn">
            <i class="pi pi-pencil"></i>
          </button>
        </div>
        <div class="p-col">
          <img :src="avatar" alt="employee-avatar" class="employee-avatar">
        </div>
        <div class="p-col">
          <div class="employee-full-name">
            <button class="profile-check-btn" @click="showProfile">
              {{fullName}}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="p-col-5">
      <div class="p-grid">
        <div class="employee-title p-col-3">{{title}}</div>
        <div class="employee-year p-col-3">{{year}}</div>
        <div class="employee-email p-col-6">{{email}}</div>
      </div>
    </div>
    <div class="p-col-3">
      <div class="employee-phone ">{{phone}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true
    }
  },
  methods: {
    showProfile() {
      this.$emit('showProfile', this.id)
    }
  }
}
</script>

<style scoped lang="scss">
.user-list-item {
  background: white;
  padding: 15px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
  .change-user-btn {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
  .employee-avatar {
    width: 50px;
    height: 50px;
  }

  .employee-full-name {
    .profile-check-btn {
      border: 0;
      background: transparent;
      cursor: pointer;
    }
  }
}
</style>
