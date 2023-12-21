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
const T_day = new Date(); 
const _1DAY = 60 * 60 * 24 * 1000;
describe("todoList", () => {
  beforeAll(() => {
    const T_day = new Date();
     //referred to discord forum for this line of code
    add({
      title: "Test_To_check",
      completed: false,
      dueDate: new Date(T_day.getTime() - 1 * _1DAY).toLocaleDateString("en-CA",),
    });
    add({
      title: "Test_To_check2",
      completed: false,
      dueDate: new Date(T_day.getTime() + 1 * _1DAY).toLocaleDateString("en-CA",),
    });
    add({
      title: "Test_To_check3",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("A test that checks creating a new todo", () => {
    const Todo_ItemsCount = all.length;
    add({
      title: "Test_To_check",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(Todo_ItemsCount + 1);
  });
  test("checks marking a todo as completed ", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("checks retrieval of overdue items", () => {
    const overDue_ItemsCount =overdue().length;
    add({
        title: "Test_To_check",
        completed: false,
        dueDate: new Date(T_day.getTime() - 1 * _1DAY).toLocaleDateString(
          "en-CA",
        ),
      });
    expect(overdue().length).toEqual(overDue_ItemsCount+1) 
  });
  test("checks retrieval of due today items", () => {
    const duetoday_ItemsCount =dueToday().length;
    add({
        title: "Test_To_check3",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      });
    expect(dueToday().length).toEqual(duetoday_ItemsCount+1) ;
  });
  test("checks retrieval of due later items", () => {
    const dueLater_ItemsCount =dueLater().length;
    add({
        title: "Test_To_check2",
        completed: false,
        dueDate: new Date(T_day.getTime() + 2 * _1DAY)
        .toISOString()
        .slice(0, 10),
      });
    expect(dueLater().length).toEqual(dueLater_ItemsCount+1);
  });
});
