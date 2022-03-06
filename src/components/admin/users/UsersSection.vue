<template>
  <div>
    <v-form>
      <v-text-field
        solo
        filled
        label="Search"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </v-form>
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Status</th>
            <th class="text-left">Earnings</th>
            <th width="150" class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in desserts" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.earings }}</td>
            <td>
              <v-btn>hello</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center">
      <v-pagination v-model="page" :length="4"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersSection",
  data() {
    return {
      page: 1,
      desserts: [
        {
          name: "Frozen Yogurt",
          email: "email@gmail.com",
          status: "active",
          earings: 800,
        },
        {
          name: "Frozen Yogurt",
          email: "email@gmail.com",
          status: "active",
          earings: 800,
        },
        {
          name: "Frozen Yogurt",
          email: "email@gmail.com",
          status: "active",
          earings: 800,
        },
      ],
    };
  },
};
</script>