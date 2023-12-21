/* eslint-disable space-in-parens */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue,dueToday,dueLater } = todoList();
const Today = new Date(); 
const one_Day = 60 * 60 * 24 * 1000;
describe("todoList", () => {
  beforeAll(() => {
    const Today = new Date();
     //referred to discord forum for this line of code
    add({
      Title: "Test_Todo_One",
      Completed: false,
      dueDate: new Date(Today.getTime() - 1 * one_Day).toLocaleDateString(
        "en-CA",
      ),
    });
    add({
      Title: "Test_Todo_Two",
      Completed: false,
      due_Date: new Date(Today.getTime() + 1 * one_Day).toLocaleDateString(
        "en-CA",
      ),
    });
    add({
      Title: "Test_Todo_Three",
      Completed: false,
      due_Date: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      Title: "Test todo",
      Completed: false,
      due_Date: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("checks return a list of overdue todos", () => {
    const overDue_ItemsCount =overdue().length;
    add({
        Title: "Test todo",
        Completed: false,
        due_Date: new Date(Today.getTime() - 1 * one_Day).toLocaleDateString(
          "en-CA",
        ),
      });
    expect(overdue().length).toEqual(overDue_ItemsCount+1) 
  });
  test("checks return a list of todos due today", () => {
    const duetoday_ItemsCount =dueToday().length;
    add({
        Title: "Test todo_3",
        Completed: false,
        due_Date: new Date().toLocaleDateString("en-CA"),
      });
    expect(dueToday().length).toEqual(duetoday_ItemsCount+1) ;
  });
  test("checks return a list of todos due later", () => {
    const dueLater_ItemsCount =dueLater().length;
    add({
        Title: "Test todo_2",
        completed: false,
        due_Date: new Date(Today.getTime() + 2 * oneDay)
        .toISOString()
        .slice(0, 10),
      });
    expect(dueLater().length).toEqual(dueLater_ItemsCount+1);
  });
});
