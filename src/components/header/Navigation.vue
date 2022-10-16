<template>
  <div class="navigation">
    <img
      src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
      alt=""
    />

    <div class="wrapper--input">
      <input
        v-model="user_search_restaurant"
        type="text"
        placeholder="Plats, courses alimentaires,"
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
    <div class="buttons">
      <ButtonNav />
      <ButtonNav />
      <ButtonNav />
    </div>
  </div>
</template>

<script>
import ButtonNav from "./ButtonNav.vue";
export default {
  name: "Navigation",
  components: {
    ButtonNav,
  },
};
</script>

<style lang="scss">
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 100%;
  img {
    width: auto;
    height: 24px;
  }

  .wrapper--input {
    position: relative;
    input {
      background-color: rgb(238, 238, 238);
      border: none;
      width: 300px;
      height: 60px;
      outline: none;
      padding-left: 20px;
      &:hover {
        transition: box-shadow 0.3s ease-in-out 0s;
        border-bottom: solid black 2px;
      }
    }
    .search {
      position: absolute;
      top: 100%;
      width: 100%;
      background-color: white;

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
  .buttons {
    display: flex;
    width: 50px;
    justify-content: space-evenly;
  }
}
</style>
