/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudentInput = {
  id?: string | null,
  name: string,
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  name: string,
  courses?: ModelEnrollmentsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEnrollmentsConnection = {
  __typename: "ModelEnrollmentsConnection",
  items:  Array<Enrollments | null >,
  nextToken?: string | null,
};

export type Enrollments = {
  __typename: "Enrollments",
  id: string,
  studentId: string,
  courseId: string,
  student: Student,
  course: Course,
  createdAt: string,
  updatedAt: string,
};

export type Course = {
  __typename: "Course",
  id: string,
  title: string,
  students?: ModelEnrollmentsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  title: string,
};

export type ModelCourseConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCourseInput = {
  id: string,
  title?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateEnrollmentsInput = {
  id?: string | null,
  studentId: string,
  courseId: string,
};

export type ModelEnrollmentsConditionInput = {
  studentId?: ModelIDInput | null,
  courseId?: ModelIDInput | null,
  and?: Array< ModelEnrollmentsConditionInput | null > | null,
  or?: Array< ModelEnrollmentsConditionInput | null > | null,
  not?: ModelEnrollmentsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateEnrollmentsInput = {
  id: string,
  studentId?: string | null,
  courseId?: string | null,
};

export type DeleteEnrollmentsInput = {
  id: string,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelEnrollmentsFilterInput = {
  id?: ModelIDInput | null,
  studentId?: ModelIDInput | null,
  courseId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEnrollmentsFilterInput | null > | null,
  or?: Array< ModelEnrollmentsFilterInput | null > | null,
  not?: ModelEnrollmentsFilterInput | null,
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionEnrollmentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentId?: ModelSubscriptionIDInput | null,
  courseId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEnrollmentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionEnrollmentsFilterInput | null > | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    courses?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    courses?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    courses?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    students?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    students?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    students?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEnrollmentsMutationVariables = {
  input: CreateEnrollmentsInput,
  condition?: ModelEnrollmentsConditionInput | null,
};

export type CreateEnrollmentsMutation = {
  createEnrollments?:  {
    __typename: "Enrollments",
    id: string,
    studentId: string,
    courseId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEnrollmentsMutationVariables = {
  input: UpdateEnrollmentsInput,
  condition?: ModelEnrollmentsConditionInput | null,
};

export type UpdateEnrollmentsMutation = {
  updateEnrollments?:  {
    __typename: "Enrollments",
    id: string,
    studentId: string,
    courseId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEnrollmentsMutationVariables = {
  input: DeleteEnrollmentsInput,
  condition?: ModelEnrollmentsConditionInput | null,
};

export type DeleteEnrollmentsMutation = {
  deleteEnrollments?:  {
    __typename: "Enrollments",
    id: string,
    studentId: string,
    courseId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    courses?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentsQueryVariables = {
  id?: string | null,
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    students?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  id?: string | null,
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEnrollmentsQueryVariables = {
  id: string,
};

export type GetEnrollmentsQuery = {
  getEnrollments?:  {
    __typename: "Enrollments",
    id: string,
    studentId: string,
    courseId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEnrollmentsQueryVariables = {
  filter?: ModelEnrollmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnrollmentsQuery = {
  listEnrollments?:  {
    __typename: "ModelEnrollmentsConnection",
    items:  Array< {
      __typename: "Enrollments",
      id: string,
      studentId: string,
      courseId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EnrollmentsByStudentIdQueryVariables = {
  studentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEnrollmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EnrollmentsByStudentIdQuery = {
  enrollmentsByStudentId?:  {
    __typename: "ModelEnrollmentsConnection",
    items:  Array< {
      __typename: "Enrollments",
      id: string,
      studentId: string,
      courseId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EnrollmentsByCourseIdQueryVariables = {
  courseId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEnrollmentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EnrollmentsByCourseIdQuery = {
  enrollmentsByCourseId?:  {
    __typename: "ModelEnrollmentsConnection",
    items:  Array< {
      __typename: "Enrollments",
      id: string,
      studentId: string,
      courseId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    courses?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    courses?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    courses?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    students?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    students?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    title: string,
    students?:  {
      __typename: "ModelEnrollmentsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEnrollmentsSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentsFilterInput | null,
};

export type OnCreateEnrollmentsSubscription = {
  onCreateEnrollments?:  {
    __typename: "Enrollments",
    id: string,
    studentId: string,
    courseId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEnrollmentsSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentsFilterInput | null,
};

export type OnUpdateEnrollmentsSubscription = {
  onUpdateEnrollments?:  {
    __typename: "Enrollments",
    id: string,
    studentId: string,
    courseId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEnrollmentsSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentsFilterInput | null,
};

export type OnDeleteEnrollmentsSubscription = {
  onDeleteEnrollments?:  {
    __typename: "Enrollments",
    id: string,
    studentId: string,
    courseId: string,
    student:  {
      __typename: "Student",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    course:  {
      __typename: "Course",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
