import { students } from "./data";
export default function RenderingList() {
  // const student = students.filter(student => student.class === 'Class 1').map(student =>
  //   (<ul key={student.id} className="border border-pink-500">
  //     <li>{student.id}</li>
  //     <li>{student.name}</li>
  //     <li>{student.scores}</li>
  //     <li>{student.percentage}</li>
  //   </ul>));
  return (
    <div>
      {/* {student} */}
      {students.filter(student => student.class === 'Class 1').map(student =>
        <ul key={student.id}>
          <li>
            {student.name}
          </li>
          <li>
            {student.id}
          </li>
          <li>
            {student.class}
          </li>
          <li>
            {student.percentage}
          </li>
        </ul>
        )}
      </div>
        
    )
}