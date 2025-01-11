<template>
  <div>
    <h1>Все пользователи</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user._id.$oid">
        {{ user.name }} ({{ user.login }})
      </li>
    </ul>
    <div v-else>
      Загрузка данных...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:3000/allUsers');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      this.users = await response.json();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
