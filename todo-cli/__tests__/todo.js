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
const TODAY = new Date(); 
const one_DAY = 60 * 60 * 24 * 1000;
describe("todoList", () => {
  beforeAll(() => {
    const TODAY = new Date();
     //referred to discord forum for this line of code
    add({
      title: "Test Todo",
      completed: false,
      dueDate: new Date(TODAY.getTime() - 1 * one_DAY).toLocaleDateString("en-CA",),
    });
    add({
      title: "Test Todo_2",
      completed: false,
      dueDate: new Date(TODAY.getTime() + 1 * one_DAY).toLocaleDateString("en-CA",),
    });
    add({
      title: "Test Todo_3",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("A test that checks creating a new todo", () => {
    const Todo_ItemsCount = all.length;
    add({
      title: "Test Todo",
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
        title: "Test Todo",
        completed: false,
        dueDate: new Date(TODAY.getTime() - 1 * one_DAY).toLocaleDateString(
          "en-CA",
        ),
      });
    expect(overdue().length).toEqual(overDue_ItemsCount+1) 
  });
  test("checks retrieval of due today items", () => {
    const duetoday_ItemsCount =dueToday().length;
    add({
        title: "Test Todo3",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      });
    expect(dueToday().length).toEqual(duetoday_ItemsCount+1) ;
  });
  test("checks retrieval of due later items", () => {
    const dueLater_ItemsCount =dueLater().length;
    add({
        title: "Test Todo2",
        completed: false,
        dueDate: new Date(TODAY.getTime() + 2 * one_DAY)
        .toISOString()
        .slice(0, 10),
      });
    expect(dueLater().length).toEqual(dueLater_ItemsCount+1);
  });
});
