<template>
  <div class="user-wrapper">
    <div class="content-box">
      <span v-if="!!activeCompany && activeCompany.id" style="color:white; margin-right:8px; display:inline-block">
        {{ activeCompany.title }}
      </span>
      <a-dropdown v-if="$hasRole('admin', 'super') || filteredCompanies.length">
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-icon type="api"></a-icon>
        </span>
        <a-menu slot="overlay" style="width: 250px" class="user-dropdown-menu-wrapper">
          <a-menu-item v-for="company in filteredCompanies" :key="company.id" style="width:100%">
            <span style="width:100%; display:inline-block" @click="setCompany(company.id)">{{ company.title }}</span>
          </a-menu-item>

          <template v-if="!!activeCompany && activeCompany.id && $hasRole('admin', 'super')">
            <a-menu-divider />
            <a-menu-item key="9999" style="width:100%">
              <span style="width:100%; display:inline-block" @click="unSetCompany">{{
                $t('Yönetici Oturumuna Geç')
              }}</span>
            </a-menu-item>
          </template>
        </a-menu>
      </a-dropdown>
      <a-divider v-else type="vertical" />
      <!-- <NoticeIcon class="action" /> -->
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <span>{{ nickname }}</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="0">
            <router-link :to="{ name: 'MyProfile' }">
              <a-icon type="user" />
              <span>{{ $t('Profilim') }}</span>
            </router-link>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout" />
              <span>{{ $t('Çıkış Yap') }}</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'UserMenu',
  components: {},
  computed: {
    ...mapGetters(['nickname', 'avatar', 'companies']),
    ...mapState({
      activeCompany: state => state.authentication.activeCompany
    }),
    filteredCompanies() {
      let data = []
      data = this.companies.filter(
        item => (!this.activeCompany || item.id !== this.activeCompany.id) && item.approved_at
      )
      return data
    }
  },
  created() {
    this.GetCompanies()
  },
  methods: {
    ...mapActions(['Logout', 'GetCompanies', 'UnSetCompany', 'SetCompany']),
    handleLogout() {
      this.$confirm({
        title: this.$t('Hesabınızdan Çıkış yapılacak'),
        content: this.$t('Çıkış yapmak istediğinize emin misiniz ?'),
        onOk: () => {
          return this.Logout({}).then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 16)
          })
        },
        onCancel() {}
      })
    },
    unSetCompany() {
      let hideMessage = this.$message.loading(this.$t('Firmadan çıkış yapılıyor...', 0))
      this.UnSetCompany()
        .then(() => window.location.reload())
        .finally(() => {
          hideMessage()
        })
    },
    setCompany(id) {
      let hideMessage = this.$message.loading(this.$t('Firma verileri yükleniyor...', 0))
      this.SetCompany(id)
        .then(() => window.location.reload())
        .finally(() => {
          hideMessage()
        })
    }
  }
}
</script>
