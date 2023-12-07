import { defineStore } from "pinia";

export const useTodos = defineStore("todos", {
  //todos는 저장소의 구분될 수 있는 식별값 파일명으로 한다.
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: "all",
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished);
      //todo의 값이 finish인 것들만 return된다.
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === "finished") {
        // call other getters with autocompletion ✨
        return this.finishedTodos;
      } else if (this.filter === "unfinished") {
        return this.unfinishedTodos;
      }
      return this.todos;
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false });
    },
    doneTodo(id) {
      const idx = this.todos.findIndex((todo) => todo.id === id);

      if (idx > -1) {
        this.todos[idx].isFinished = true;
      }
    },
    removeTodo(id) {
      const idx = this.todos.findIndex((todo) => todo.id === id);

      if (idx > -1) {
        this.todos.splice(idx, 1); //splice: js에서 배열을 잘라낼 때 사용 idx부터 1개를 지운다는 뜻
      }
    },
    clearTodo() {
      this.todos = []; //js문법 배열을 초기화 하는 것
    },
  },
});
