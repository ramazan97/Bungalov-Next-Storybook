import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bungalovData } from "../../components/data";
import { blogData } from "../../components/data";

const initialState = {
  user: [],
  bungalov: bungalovData,
  blog: blogData,
};

export const fetchBungalovData = createAsyncThunk("user/fetchBungalovData", async () => {
  return Promise.resolve(bungalovData);
});

export const fetchBlogData = createAsyncThunk("user/fetchBlogData", async () => {
  return Promise.resolve(blogData);
});

export const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBungalovData.fulfilled, (state, action) => {
        state.bungalov = action.payload;
      })
      .addCase(fetchBlogData.fulfilled, (state, action) => {
        state.blog = action.payload;
      });
  },
});

export const selectUser = (state) => state.user.user;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { bungalovData } from "../../components/data";
// import { blogData } from "../../components/data";
// const initialState = {
//   user: [],
//   bungalov: bungalovData,
//   blog: blogData,
// };

// export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
//   return Promise.resolve(bungalovData);
// });
// export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
//   return Promise.resolve(bungalovData ||blogData);
// });



// export const { actions, reducer } = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchUser.fulfilled, (state, action) => {
//       state.user = action.payload;
//     });
//   },
// });

// export const selectUser = (state) => state.user.user;




// export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
//   return Promise.resolve({ id: 1, name: "John Doe" });
// });
// export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
//   return Promise.resolve([
//     {
//       id: 1,
//       name: "Card Title 1",

//       explanation:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quos?",
//       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id non est. Dignissimos, aut! Ullam!",

//       image: require("../../../public/bungalov/slider1.jpg"),
//     },
//     {
//       id: 2,
//       name: "Card Title 2",

//       explanation:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quos?",
//       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id non est. Dignissimos, aut! Ullam!",

//       image: require("../../../public/bungalov/slider2.jpg"),
//     },
//     {
//       id: 3,
//       name: "Card Title 3",

//       explanation:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quos?",
//       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id non est. Dignissimos, aut! Ullam!",

//       image: require("../../../public/bungalov/slider3.jpg"),
//     },
//     {
//       id: 4,
//       name: "Card Title 4",

//       explanation:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quos?",
//       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id non est. Dignissimos, aut! Ullam!",

//       image: require("../../../public/bungalov/slider4.jpg"),
//     },
//     {
//       id: 5,
//       name: "Card Title 5",

//       explanation:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quos?",
//       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id non est. Dignissimos, aut! Ullam!",

//       image: require("../../../public/bungalov/slider5.jpg"),
//     },
//   ]);
// });