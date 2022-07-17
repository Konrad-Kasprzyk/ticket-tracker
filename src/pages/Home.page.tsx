import React, { FormEvent, useState } from "react";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import app from "../config/firebase";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

function HomePage() {
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState(42);
  const [searchName, setSearchName] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "projects"), {
        name: inputName,
        number: inputNumber,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function logByName() {
    const q = query(collection(db, "projects"), where("name", "==", searchName));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }

  async function logAll() {
    const querySnapshot = await getDocs(collection(db, "projects"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }

  return (
    <div>
      <form id="myform" onSubmit={handleSubmit}>
        <label htmlFor="name">Project's name</label>
        <input id="name" type="text" onChange={(event) => setInputName(event.target.value)} />
        <label htmlFor="number">favourite number</label>
        <input id="number" type="text" onChange={(event) => setInputNumber(+event.target.value)} />
        <input type="submit" value="Add document to projects" />
      </form>
      <br />
      <label>
        Get project by name (console log)
        <input type="text" onChange={(event) => setSearchName(event.target.value)} />
      </label>
      <button onClick={() => logByName()}>Log by name</button>
      <br />
      <div>Get all projects (console log)</div>
      <button onClick={() => logAll()}>Log all</button>
    </div>
  );
}

export default HomePage;
