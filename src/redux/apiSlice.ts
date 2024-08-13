import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request";
import * as APITypes from "../API";

const endpoint = "YOUR_GRAPHQL_ENDPOINT";

// Define the types for the state
interface Student {
  id: string;
  name: string;
  courses: {
    nextToken: string | null;
    __typename: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __typename: string;
}

interface StudentsState {
  student: Student | undefined;
  students: Student[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

// Define async thunks for each GraphQL operation
export const createStudent = createAsyncThunk(
  "students/createStudent",
  async (variables: APITypes.CreateStudentMutationVariables) => {
    const query = gql`
      mutation CreateStudent(
        $input: CreateStudentInput!
        $condition: ModelStudentConditionInput
      ) {
        createStudent(input: $input, condition: $condition) {
          id
          name
          courses {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
      }
    `;
    const response = await request(endpoint, query, variables);
    return response.createStudent;
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async (variables: APITypes.UpdateStudentMutationVariables) => {
    const query = gql`
      mutation UpdateStudent(
        $input: UpdateStudentInput!
        $condition: ModelStudentConditionInput
      ) {
        updateStudent(input: $input, condition: $condition) {
          id
          name
          courses {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
      }
    `;
    const response = await request(endpoint, query, variables);
    return response.updateStudent;
  }
);

export const getStudent = createAsyncThunk(
  "students/getStudent",
  async (variables: APITypes.GetStudentQueryVariables) => {
    const query = gql`
      query GetStudent($id: ID!) {
        getStudent(id: $id) {
          id
          name
          courses {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
      }
    `;
    const response = await request(endpoint, query, variables);
    return response.getStudent;
  }
);

// Define slices
const studentsSlice = createSlice({
  name: "students",
  initialState: {
    student: undefined,
    students: [],
    status: "idle",
    error: undefined,
  } as StudentsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        createStudent.fulfilled,
        (state, action: PayloadAction<Student>) => {
          state.status = "succeeded";
          state.students.push(action.payload);
        }
      )
      .addCase(createStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateStudent.fulfilled,
        (state, action: PayloadAction<Student>) => {
          state.status = "succeeded";
          const index = state.students.findIndex(
            (student) => student.id === action.payload.id
          );
          if (index !== -1) {
            state.students[index] = action.payload;
          }
        }
      )
      .addCase(updateStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getStudent.fulfilled,
        (state, action: PayloadAction<Student>) => {
          state.status = "succeeded";
          state.student = action.payload;
        }
      )
      .addCase(getStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default studentsSlice.reducer;
