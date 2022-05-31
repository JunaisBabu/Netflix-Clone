import { EachPerson } from "./EachPerson";
import "./People.css";

let id = [
  976, 934, 6968, 2963, 74568, 500, 71580, 16483, 13240, 64, 117642, 192, 16828,
  17647, 90633, 1245, 6384, 18918, 1100, 3896, 1813, 2524, 10859, 85, 6193,
  109513, 3223, 287, 3894, 15217, 1136406,
];
let person1 = id[Math.floor(Math.random() * 32)];
let person2 = id[Math.floor(Math.random() * 32)];
let person3 = id[Math.floor(Math.random() * 32)];
function People() {
  return (
    <>
      <div className="people-container">
        <h3 className="people-title">People</h3>
        <h4 className="people-sub-title">Persons of the week</h4>
        <div className="each-person-component">
          <EachPerson id={person1} />
          <EachPerson id={person2} />
          <EachPerson id={person3} />
        </div>
      </div>
    </>
  );
}

export { People };
