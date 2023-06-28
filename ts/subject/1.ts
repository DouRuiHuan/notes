interface Todo {
  title: string;
  desc: string;
  completed: Boolean;
}

type TodoPreview = MyPick<Todo, "title" | "desc">;

const todo: TodoPreview = {
  title: "1234",
  desc: "hdiahf",
};

// 个人理解：
// T:Todo,K:'title'|'desc'
// K应包涵于Todo的key，🏪小key取T中的类型
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

export {};
