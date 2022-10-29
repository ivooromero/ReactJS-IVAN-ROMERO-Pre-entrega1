
import { getDoc, query } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { zapatillas } from "../Products/zapatillas";
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { Query } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { docs } from 'firebase/firestore'
import { addDoc} from 'firebase/firestore';
export const getProductsByCategory = (categoria) => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  const collectionQuery = query(collectionReference, where("categoria" , "==" , categoria));


  return getDocs(collectionQuery)
  .then(snapshot => {
    const list = snapshot
    .docs.map((doc)=>({
      id: doc.id,
      ...doc.data()
    }));
    return list
  })
}
export const createOrder = (newOrder) => {
  // obtenemos la basedatos
  const database = getFirestore(); 

  // obtenemos la referencia a la collecion
  const collectionReference = collection(database, 'orders');

  return addDoc(collectionReference, newOrder)
    .then((snapshot) => snapshot.id)
    .catch(error => console.warn(error))
};
export const getProduct = (id) => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  const collectionQuery = query(collectionReference, where("idP" , "==" , id));

  return getDocs(collectionQuery)
  .then(snapshot => {
    const list = snapshot
    .docs.map((doc)=>({
      id: doc.id,
      ...doc.data()
    }));
    return list
  })
}
export const searchProduct = (nombre) =>{
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    const collectionQuery = query(collectionReference, where("nombre" , "==" , nombre))
  
    return getDocs(collectionQuery)
    .then(snapshot => {
      const list = snapshot
      .docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }));
      return list
    })
  }


export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};


