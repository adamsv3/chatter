import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  where,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";

let store;
const collection_name = "messages";

function useDB(room) {
  const [messages, setMessages] = useState([]);

  function add(m) {
    setMessages((current) => {
      const msgs = [m, ...current];
      msgs.sort(
        (a, b) => (b.date && b.date.seconds) - (a.date && a.date.seconds)
      );
      return msgs;
    });
  }
  function remove(id) {
    setMessages((current) => current.filter((m) => m.id !== id));
  }

  useEffect(async () => {
    const q = room
      ? query(collection(store, collection_name), where("room", "==", room))
      : query(collection(store, collection_name));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const { doc, type } = change;
        if (type === "added") add({ ...doc.data(), id: doc.id });
        if (type === "removed") remove(doc.id);
      });
    });
  }, [room]);
  return messages;
}

const db = {};
db.send = async function (msg) {
  return addDoc(collection(store, collection_name), msg);
};
db.edit = async function (id, msg) {
  return setDoc(doc(store, collection_name, id), msg);
};
db.delete = async function (id) {
  return deleteDoc(doc(store, collection_name, id));
};

export { db, useDB };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAw2Efy5onYmn7I3l7txMxrrXrjspyiOOw",
    authDomain: "chatter-2022-valeriea.firebaseapp.com",
    projectId: "chatter-2022-valeriea",
    storageBucket: "chatter-2022-valeriea.appspot.com",
    messagingSenderId: "673952982354",
    appId: "1:673952982354:web:8b0b018003ec68ec5c868b",
    measurementId: "G-3BGYCK1C7Z"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyCxnHdHGicbw16DmQfEbNVy7XD6ENprVNQ",
//   authDomain: "cv",
//   projectId: "chatter2021-2b8fb",
//   storageBucket: "chatter2021-2b8fb.appspot.com",
//   messagingSenderId: "778098356347",
//   appId: "1:778098356347:web:c396b31d7a0a5c0c6c32de",
// };

const app = initializeApp(firebaseConfig);
store = getFirestore(app);