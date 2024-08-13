export type UpdateStudentInput = {
  id: string;
  name?: string | null;
};

export type DeleteStudentInput = {
  id: string;
};

export type CreateCourseInput = {
  id?: string | null;
  title: string;
};

export type UpdateCourseInput = {
  id: string;
  title?: string | null;
};

export type DeleteCourseInput = {
  id: string;
};

export type ModelCourseConditionInput = {
  title?: string | null;
  and?: Array<ModelCourseConditionInput | null> | null;
  or?: Array<ModelCourseConditionInput | null> | null;
  not?: ModelCourseConditionInput | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput;
  condition?: ModelCourseConditionInput | null;
};

export type CreateCourseMutation = {
  createCourse?: {
    __typename: "Course";
    id: string;
    title: string;
    enrollments?: {
      __typename: "ModelEnrollmentsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput;
  condition?: ModelCourseConditionInput | null;
};

export type UpdateCourseMutation = {
  updateCourse?: {
    __typename: "Course";
    id: string;
    title: string;
    enrollments?: {
      __typename: "ModelEnrollmentsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput;
  condition?: ModelCourseConditionInput | null;
};

export type DeleteCourseMutation = {
  deleteCourse?: {
    __typename: "Course";
    id: string;
    title: string;
    enrollments?: {
      __typename: "ModelEnrollmentsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
