# Redux

1. Một số lưu ý quan trọng trước khi bắt đầu tìm hiểu Redux

- HTML, CSS
- ES 6+
- React: Props, state, Function Component, React Hooks,...
- Async trong JS

2. Redux là gì?

- Là một thư viện JS dùng để quản lý và cập nhật state của ứng dụng
- Redux là một PATTERN (khuôn mẫu)
- Redux Toolkit bản chất là một Redux

3. Vì sao nên sử dụng Redux(Redux Toolkit)?

- Quản lí Global state
  - Các component tại mọi nơi trong ứng dụng có thể truy xuất và cập nhật
  - Giải quyết vấn đề của React khi muốn truyền dữ liệu vào các cấp con cháu
- Dễ dàng debug
- Xử lý caching dữ liệu từ Server
- Redux toolkit sinh ra để giải quyết các vấn đề đối với Redux Core:
  - Việc cấu hình (config) Redux phức tạp
  - Phải cài đặt thủ công nhiều packages để Redux có thể hoạt động hiệu quả
  - Redux yêu cầu rất nhiều boilerplate code (code lặp đi lặp lại nhiều lần)

4. Khi nào nên sử dụng Redux?

- Dự án có số lượng lớn state và các state được sử dụng ở nhiều nơi
- State được cập nhật thường xuyên
- Logic code cập nhật state phức tạp
- Ứng dụng có số lượng code trung bình hoặc lớn và có nhiều người làm chung
- Cần debug và muốn xem cách state được cập nhật tại bất kì khoảng thời gian nào

5. Kiến trúc và khái niệm liên quan:

- State Management: (useState, useReducers,...)

```jsx
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when some thing happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);

    // View: the UI definition
    return (
      <div>
        value: {counter}
        <button onClick={increment}>Increment</button>
      </div>
    );
  };
}
```

- Immutability (Bất biến)

```jsx
/**
 * Ví dụ về mutation (thay đổi giá trị obj, array)
 * Khong nen dung trong REDUX
 **/
const obj = { a: 1, b: 2 };
// still the same object outside, but the contents have changed
obj.b = 3;

const arr = ["a", "b"];
// In the same way, we can change the contents of this array
arr.push("c");
arr[1] = "d";
```

```jsx
/**
 * Ví dụ về immutation (KHÔNG thay đổi giá trị obj, array)
 * NEN DUNG TRONG REDUX
 **/
const obj = {
  a: {
    c: 3,
  },
  b: 2,
};

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42,
  },
};

const arr = ["a", "b"];
// Create a new copy arr, with "c" appended to the end
const arr2 = arr.concat("c");

// or, we can make a copy of the original array:
const arr3 = arr.slice();
// and mutate the copy
arr3.push("c");
```

- Kiến trúc Redux
  ![Ảnh ví dụ](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
- 1. REDUCERS:

  - Là 1 function (dùng để cập nhật lại giá trị state ở trong kho, kiểm tra action là gì rồi cập nhật state tương ứng)
  - Giá trị state mới luôn được tính toán dự trên giá trị state trước đó
  - Không được thay đổi giá trị state hiện tại
  - Không được dùng code bất đồng bộ,không dự đoán được ở trong function reducer(Math.random(), Date.now(),Request tới Server...)
  - PURE FUNCTION (Dự đoán được)

  ```jsx
  const initValue = { value: 0 };
  const rootReducer = (state = initValue, action) => {
    // Action
    /**
    {
        type: "todoList/increment",
        payload: 10,
    };
    **/

    // Predictable (Dự đoán được)
    switch (action.type) {
      case "INCREMENT":
        // Immutability
        return {
          ...state,
          value: state.value + 1,
        };
      // => { value: 1; }
      case "todoList/increment":
        return {
          ...state,
          value: state.value + action.payload,
        };
      // => { value: 10; }

      default:
        return state;
    }
  };
  ```

- 2. ACTION:

  - Là 1 Object

  ```jsx
  const INCREMENT = {
    type: "todoList/increment",
    payload: 10,
  };

  // Action creators
  const incrementCreator = (data) => {
    return {
      type: "todoList/increment123",
      payload: data,
    };
  };

  incrementCreator(10);
  ```

- 3. DISPATCH:

  - Là 1 Function

  ```jsx
  dispatch(INCREMENT);
  /** 
  {
      type: "todoList/increment",
      payload: 10,
  };
  **/

  dispatch(incrementCreator(15));
  /** 
  {
      type: "todoList/increment123",
      payload: 15,
  };
  **/
  ```

6. Project:

- React + Redux Core
- React + Redux Toolkit
