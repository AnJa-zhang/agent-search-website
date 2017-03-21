<template>
  <section id="home-page">
    <div id="menu-area">
      <div class="container">
        <a class="back" href="/">Back</a>
      </div>
    </div>
    <div id="statistic-area">
      <ul id="task-area-wrapper">
      </ul>
    </div>
  </section>
</template>
<script type="text/javascript">

  var todos = localStorage

  var getTodoDate = {
    getTodoYear: function (todoKey) {
      return todoKey.match(/^[0-9]+-/)[0].slice(0,-1);
    },
    getTodoMonth: function (todoKey) {
      return todoKey.match(/-[0-9]+-/)[0].slice(1,-1);
    },
    getTodoDay: function (todoKey) {
      return todoKey.match(/-[0-9]+$/)[0].slice(1);
    }
  }

  var generateBody = function(todos) {
    const now = new Date();
    var start = ''
    var todoObj = {'01':[], '02':[],'03':[], '04':[],'05':[], '06':[],'07':[], '08':[],'09':[], '10':[],'11':[], '12':[]}
    for (let key in todos.key) {
      if (getTodoDate.getTodoYear(todos.key) !== now.getDateYear()) {
        return;
      }
      todos.key.push(getTodoDate.getTodoDay(todos.key));
      todoObj[(getTodoDate.getTodoMonth(todos.key))].push(todos.key);
    }
    console.log(todoObj);
    return todoObj;
  }

  export default {
    name: 'home-page',
    data(){
      return {
        todos: generateBody(todos)
      }
    }
  }
</script>
<style type="text/css">
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
  max-width: 22rem;
  margin: 10px auto;
  border: 1px solid #a7a7a7;
  border-radius: 8px 8px 0 0;
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
</style>