<template>
  <div class="home">
    <Navigation />

    <div class="categories--restaurant">
      <div
        class="single--category"
        v-for="(category, i) in all_category"
        :key="i"
      >
        <img :src="category.img" alt="category restaurant" />
        <p>{{ category.category }}</p>
      </div>
    </div>

    <RowCaroussel />

    <RestaurantRow
      v-for="(data, i) in data_restaurant"
      :key="i"
      :three_restaurant="data"
    />
  </div>
</template>

<script>
// Import
import { info, tags } from "../BDD";
import { onMounted, ref, watch } from "vue";

// Components
import RowCaroussel from "../components/caroussel/RowCaroussel.vue";
import RestaurantRow from "../components/RestaurantRow.vue";
import Navigation from "../components/header/Navigation.vue";

export default {
  name: "Home",
  components: {
    RowCaroussel,
    RestaurantRow,
    Navigation,
  },
  setup() {
    class Restaurant {
      constructor(name, note, image, drive_time) {
        this.name = name;
        this.note = note;
        this.image = image;
        this.drive_time = drive_time;
      }
    }
    let data_restaurant = ref([]);
    let all_restaurant = [];

    const makeDataRestaurant = () => {
      let three_restaurant = [];

      for (const restaurant of info) {
        const new_restaurant = new Restaurant(
          restaurant.name,
          restaurant.note,
          restaurant.image,
          restaurant.drive_time
        );
        all_restaurant.push(new_restaurant);

        if (three_restaurant.length === 2) {
          three_restaurant.push(new_restaurant);
          data_restaurant.value.push(three_restaurant);
          three_restaurant = [];
        } else {
          three_restaurant.push(new_restaurant);
        }
      }
    };

    let all_category = [];
    for (const categories of tags) {
      all_category.push(categories);
    }

    //User search restaurant
    let user_search_restaurant = ref("");
    let search_restaurant = ref([]);

    watch(user_search_restaurant, (new_value) => {
      let regex = RegExp(new_value.toLowerCase());

      let new_search_restaurant = all_restaurant.filter((restaurant) =>
        regex.test(restaurant.name.toLowerCase())
      );

      new_value == 0
        ? (search_restaurant.value = [])
        : (search_restaurant.value = new_search_restaurant);
      console.log("search_restaurant", search_restaurant);
      console.log("new_search_restaurant", new_search_restaurant);
    });

    //METHODS

    onMounted(makeDataRestaurant);

    return {
      data_restaurant,
      user_search_restaurant,
      search_restaurant,
      all_category,
    };
  },
};
</script>

<style lang="scss">
.home {
  .categories--restaurant {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid rgb(218, 216, 216);

    .single--category {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 50px;
      }
    }
  }
}
</style>
