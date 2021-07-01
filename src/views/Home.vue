<template>
  <div class="">
    <div class="p-grid">
      <div class="p-field p-fluid find-input-wrapper p-col">
        <InputText v-model="searchField" class="find-input" id="firstname" type="text"
                   placeholder="Search by any field in employee profile"/>
      </div>
    </div>
    <div class="p-grid buttons-panel">
      <div class="p-col-12 p-md-5">
        <div class="company-employees">
          Total firm employees: {{ sortedUsersCount }}
        </div>
      </div>
      <div class="p-col-12 p-md-7">
        <div class="p-grid">
          <div class="p-md-3 p-offset-2">
            <Button label="Add employee"/>
          </div>
          <div class="p-md-3">
            <Dropdown class="field-sort" v-model="selectedFieldSorting" :options="firstSort"
                      option-label="name"></Dropdown>
          </div>
          <div class="p-md-3">
            <Dropdown class="alphabetic-sort" v-model="selectedAlphabeticSorting" :options="secondSort"
                      option-label="name"></Dropdown>
          </div>
          <div class="p-md-1">
            <div class="table-grid-choose">
              <button class="grid-btn"><i class="pi pi-th-large"></i></button>
              <button class="table-btn p-ml-2"><i class="pi pi-table"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-list">
      <user-list-item @showProfile="showModal" v-for="user of sortedUsers" :key="user.id" :title="user.title" :email="user.email"
                      :avatar="user.avatar" :full-name="user.fullName" :year="user.year" :id="user.id"
                      :phone="user.phone"></user-list-item>
    </div>
  </div>
  <show-profile-dialog @closeModal="closeModal" :show-profile="showProfile" :user-info="userInfo"></show-profile-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {FETCH_USERS} from "@/store/users/action-types";
import UserListItem from "@/components/UserListItem";
import ShowProfileDialog from '@/components/ShowProfileDialog';
export default {
  data() {
    return {
      showProfileUserId: null,
      showProfile: false,
      searchField: '',
      selectedFieldSorting: {name: 'TITLE'},
      selectedAlphabeticSorting: {name: 'ASC'},
      firstSort: [
        {name: 'TITLE'},
        {name: 'FIRST NAME'},
        {name: 'LAST NAME'}
      ],
      secondSort: [
        {name: 'ASC'},
        {name: 'DESC'}
      ]
    }
  },
  created() {
    this.FETCH_USERS()
  },
  computed: {
    ...mapGetters('users', [
      'usersInfo'
    ]),
    userInfo() {
      return this.usersInfo.find(user => user.id === this.showProfileUserId)
    },
    sortedUsersCount() {
      return this.sortedUsers.length
    },
    filteredUsers() {
      const users = this.searchField ? this.usersInfo.filter(user => {
        return user.fullName.toLowerCase().includes(this.searchField.toLowerCase()) ||
               user.title.toLowerCase().includes(this.searchField.toLowerCase()) ||
               user.email.toLowerCase().includes(this.searchField.toLowerCase()) ||
               user.phone.toLowerCase().includes(this.searchField.toLowerCase()) ||
               user.year.toString().toLowerCase().includes(this.searchField.toLowerCase())
      }) : this.usersInfo
      return users
    },
    sortedUsers() {
      const sorted = this.filteredUsers
      switch (this.selectedFieldSorting.name) {
        case 'TITLE':
          sorted.sort((a, b) => {
            if (a.title.length > b.title.length) {
              return 1;
            }
            else if (a.title.length < b.title.length) {
              return -1;
            }
            return 0;
          })
          break;
        case 'FIRST NAME':
          sorted.sort((a, b) => {
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
              return 1;
            }
            else if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
              return -1;
            }
            return 0;
          })
              break;
        case 'LAST NAME':
          sorted.sort((a, b) => {
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
              return 1;
            }
            else if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
              return -1;
            }
            return 0;
          })
          break;
        default:
          break;
      }
      if (this.selectedAlphabeticSorting.name === 'DESC') {
        sorted.reverse()
      }

      return sorted
    }
  },
  methods: {
    ...mapActions('users', [
      FETCH_USERS
    ]),
    showModal(id) {
      this.showProfile = true
      this.showProfileUserId = id
    },
    closeModal() {
      this.showProfile = false
      this.showProfileUserId = null
    }
  },
  components: {
    UserListItem,
    ShowProfileDialog
  }
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
.find-input-wrapper {
  background-color: white;
  padding: 25px;
  margin-bottom: 50px;

  .find-input {
    padding: 13px;
  }
}

.buttons-panel {
  .company-employees {
    font-size: 18px;
    font-weight: 500;
    color: #666d77;
  }

  .field-sort, .alphabetic-sort {
    width: 100%;
  }

  .table-grid-choose {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;

    .grid-btn, .table-btn {
      border: 0;
      cursor: pointer;
      background: transparent;
    }
  }
}



</style>
