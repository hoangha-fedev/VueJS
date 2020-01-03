<template>
  <div class="eventhandling">
    <h1>Event Handing</h1>
    <h2>Listening to Events</h2>
    <button @click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <br />
    <button @click="increaseCounter">Add 10</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <br />
    <button @click="increaseCounters(50)">Add 50</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <br />
    <h2>click.stop</h2>
    <div @click="alertHello">
      <button @click.stop="alertWelcome">Click me!</button>
    </div>
    <br />
    <h2>click.prevent</h2>
    <form @submit.prevent>
      <p>Click submit mà không bị load lại trang</p>
      <button type="submit">Submit</button>
    </form>
    <br />
    <form @submit.prevent="sayHello">
      <p>Thực hiện một hành động khi submit</p>
      <button type="submit">Submit</button>
    </form>
    <br />
    <form>
      <p>Thêm trực tiếp prevent vào button</p>
      <button type="submit" @click.prevent="sayHello">Submit</button>
    </form>
    <br />
    <form>
      <p>Thực hiện stop và prevent đồng thời</p>
      <button type="submit" @click.stop.prevent="sayHello">Submit</button>
    </form>
    <br />
    <h2>click.once</h2>
    <form>
      <p>Chỉ thực hiện hành đồng 1 lần khi click</p>
      <button type="submit" @click.once="sayHello">Submit</button>
    </form>
    <br />
    <h2>click.capture</h2>
    <div @click.capture="alertHello">
      <button @click="alertWelcome">Click me!</button>
    </div>
    <br />
    <h2>click.self</h2>
    <div @click.self="alertHello">
      <button @click="alertWelcome">Click me!</button>
    </div>
    <route-view></route-view>
  </div>
</template>

<script>
export default {
  name: "EventHandling",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increaseCounter() {
      this.counter += 10;
    },
    increaseCounters(number) {
      this.counter += number;
    },
    alertHello() {
      alert("Hello");
    },
    alertWelcome() {
      alert("Welcome");
    },
    sayHello() {
      alert("Hello");
    }
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
