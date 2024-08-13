import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getStudent, createStudent, updateStudent } from "../redux/apiSlice";

const StudentComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const student = useAppSelector((state) => state.students.student);
  const status = useAppSelector((state) => state.students.status);
  const error = useAppSelector((state) => state.students.error);

  useEffect(() => {
    dispatch(getStudent({ id: "1" }));
  }, [dispatch]);

  const handleCreateStudent = () => {
    dispatch(
      createStudent({ input: { id: "2", name: "John Doe" }, condition: null })
    );
  };

  const handleUpdateStudent = () => {
    dispatch(
      updateStudent({ input: { id: "1", name: "Jane Doe" }, condition: null })
    );
  };

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {student && (
        <div>
          <h1>{student.name}</h1>
          <button onClick={handleUpdateStudent}>Update Student</button>
        </div>
      )}
      <button onClick={handleCreateStudent}>Create Student</button>
    </div>
  );
};

export default StudentComponent;
