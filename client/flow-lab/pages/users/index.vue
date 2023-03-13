<template>
  <div>
    <h3 class="text-3xl font-bold">{{ $route.meta.title }}</h3>
    <table>
      <thead>
        <th>ID</th>
        <th>Created At</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Role</th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.id }}</td>
          <td>{{ user.created_at }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Users'
})

type User = {
  id: number,
  created_at: Date,
  first_name: string,
  last_name: string,
  role: number
}

const users = ref<User[] | null>([])
users.value = await useFetch<User[]>('http://localhost:3001/user').data.value

</script>

<style scoped>

</style>