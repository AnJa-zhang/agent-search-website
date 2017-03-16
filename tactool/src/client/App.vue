<template>
  <section id="task-page">
    <div id="menu-area">
      <div class="container">
        <a class="prev-day" href="/prev"></a>
        <a class="date-display" href="/home">{{ date }}</a>
        <a class="next-day" href="/next"></a>
      </div>
    </div>
    <div id="task-area">
      <ul id="task-area-wrapper">
        <li class="task" v-for="(item, index) of items" v-on:delete="itmes.splice(index, 1)">
          <span class="check-button"><input type="checkbox" name="check" v-model="item.done"></span>
          <span class="task-content" v-bind:class="{ finished: item.done }"><input type="text" name="content" v-on:keyup.delete="removetask(index)" v-bind:title="item.content" v-bind:value="item.content" v-model="item.content"></span>
        </li>
        <li class="add-task">
          <span class="add-button" v-on:click="newtask">···</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'task-page',
  data () {
    return {
      items:[
        {content:'Task1',done:false},
        {content:'Task2',done:false},
        {content:'Task3',done:false},
        {content:'Task4',done:false},
        {content:'Task5',done:false}
      ],
      date:(new Date()).toLocaleDateString()
    }
  },
  methods:{
    newtask: function() {
      this.items.push({content:''})
    },
    removetask: function(index) {
      if(window.event.target.value === ''){
        this.items.splice(index, 1)
      }
    }
  }
}
</script>

<style>
@charset utf-8;
/* animation defination */
/* utils defination */
html {
  font-size: 14px;
  font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
body {
  font-size: 62.5%;
  text-align: center;
  margin: 0;
}
#task-page {
  max-width: 20rem;
  margin: 0 auto;
  padding: 0 3px;
  background: #f3c5cb;
}
#task-page ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  *zoom: 1;
}
#task-page ul:after {
  display: table;
  content: "";
  line-height: 0;
  clear: both;
}
#menu-area .container a{
  color: #FFF;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
}
#menu-area .container {
  padding: 3px;
  font-size: 1.2rem;
  height: 3rem;
  color: #FFF;
}
#menu-area .container .prev-day {
  width: 0;
  height: 0;
  transform: rotate(-45deg);
  border-width: 10px;
  border-color: #fbfbfb rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #f1f1f1;
  border-style: solid;
}
#menu-area .container .next-day {
  width: 0;
  height: 0;
  transform: rotate(135deg);
  border-width: 10px;
  border-color: #fbfbfb rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #f1f1f1;
  border-style: solid;
}
#menu-area .container .next-day:hover, #menu-area .container .prev-day:hover{
  cursor: pointer;
}
#menu-area .container .date-display {
  line-height: 3rem;
  width: 8rem;
  height: 2.6rem;
  border: 1px solid #FFF;
  border-radius: 3px;
}
#menu-area .container span {
  display: inline-block;
}
#task-area {
  background: #FFF;
}
#task-area ul li {
  float: left;
  width: 100%;
  border-bottom: 1px solid #d0cece;
  display: inline-block;
  min-height: 20px;
}
#task-area ul li:hover {
  background: #fbfbfb;
}
#task-area ul li input {
  display: inline-block;
  border: 0;
}
#task-area ul li input[type='text'] {
  min-width: 17rem;
  min-height: 3rem;
  font-size: 1rem;
  outline: none;
  background-color: rgba(255, 255, 255, 0.05);
  white-space: nowrap;
  -webkit-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}
#task-area ul li span {
  display: inline-block;
}
#task-area ul li .check-button {
  width: 10%;
  float: left;
}
#task-area ul li .check-button input {
  height: 3rem;
}
#task-area ul li .task-content {
  width: 90%;
  float: right;
}
#task-area ul li .add-button {
  width: 100%;
  font-size: 1.3rem;
  line-height: 1.3rem;
}
#task-area ul li .add-button:hover {
  cursor: pointer;
}
#task-area ul li .finished input {
  text-decoration: line-through;
  color: #a7a7a7;
}

</style>
