<template>
  <div class="home">
    <div class="header">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
        alt=""
      />
      <div class="wrapper--input">
        <input
          v-model=" "
          type="text"
          placeholder="De quoi avez vous envie ?"
        />
        <div class="search">
          <router-link to="/restaurant">
            <div
              v-for="(restaurant, i) in search_restaurant"
              :key="i"
              class="container--restaurant--search"
            >
              <div class="wrapper--img">
                <img :src="restaurant.image" alt="" />
              </div>
              <p>{{ restaurant.name }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <RestaurantRow
      v-for="(data, i) in data_restaurant"
      :key="i"
      :three_restaurant="data"
    />
  </div>
</template>

<script>
// Import
import BDD from "../BDD";
import { onMounted, ref, watch } from "vue";

// Components
import RestaurantRow from "../components/RestaurantRow.vue";

export default {
  name: "Home",
  components: {
    RestaurantRow,
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

      for (const restaurant of BDD) {
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

    onMounted(makeDataRestaurant);

    return {
      data_restaurant,
      user_search_restaurant,
      search_restaurant,
    };
  },
};
</script>

<style lang="scss">
.home {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    width: 100%;
    img {
      width: 200px;
    }
    .wrapper--input {
      position: relative;
      input {
        background-color: #d6d6d6;
        border: none;
        width: 400px;
        height: 60px;
        outline: none;
        padding-left: 20px;
      }
      .search {
        position: absolute;
        top: 100%;
        width: 100%;
        height: 500px;
        background-color: white;
        border: solid 1px saddlebrown;

        .container--restaurant--search {
          display: flex;
          align-items: center;
          padding: 10px;
          &:hover {
            background-color: #d6d6d6;
          }
          .wrapper--img {
            height: 60px;
            width: 60px;
            margin-right: 25px;
            border-radius: 50%;
            overflow: hidden;
            img {
              height: 100%;
              width: auto;
            }
          }
        }
      }
    }
  }
}
</style>
