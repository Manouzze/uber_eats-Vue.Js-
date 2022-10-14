<template>
  <div class="restaurant--card">
    <div :style="changeBackground" class="restaurant--image"></div>
    <div class="restaurant--info">
      <div class="top"></div>
      <p class="name">
        {{ info_restaurant.name }}
      </p>
      <p class="note">
        <span>{{ info_restaurant.note }}</span>
      </p>
      <p class="time">
        {{ info_restaurant.drive_time }}
      </p>
    </div>
  </div>
</template>

<script>
//import
import { computed } from "vue";
export default {
  name: "RestaurantCard",
  props: {
    info_restaurant: Object,
  },
  setup(props) {
    const changeBackground = computed(() => {
      return {
        backgroundImage: `url(${props.info_restaurant.image})`,
      };
    });
    // return
    return {
      changeBackground,
    };
  },
};
</script>

<style lang="scss">
.restaurant--card {
  width: 32%;
  height: 30vh;
  p {
    margin: 0px;
  }
  .restaurant--image {
    border: 1px solid;
    height: 70%;
  }
  .restaurant--info {
    .top {
      margin: 10px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .note {
      background-color: rgb(190, 190, 190);
      border-radius: 50%;
      height: 25px;
      width: 25px;
      display: flex;
      justify-content: center;
      font-size: 0.8rem;
    }
    .time {
      font-size: 0.9rem;
    }
  }
}
</style>
