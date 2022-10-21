import {
  collection,
  getFirestore,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const getTransactions = async () => {
  const rawTransactions = [];

  getAuth();
  const uid = localStorage.getItem("uid");
  const db = getFirestore();
  const q = query(
    collection(db, "transactions"),
    where("uid", "==", uid),
    orderBy("date", "desc")
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    rawTransactions.push({ doc_id: doc.id, data: doc.data() });
  });

  const transactions = rawTransactions.map((ele) => {
    return {
      id: ele.doc_id,
      date: ele.data.date,
      transactionType: ele.data.transaction_type,
      category: ele.data?.category,
      type: ele.data.type,
      transactionName: ele.data.name,
      amount: ele.data.amount,
      description: ele.data?.description,
      holder: ele.data?.holder,
      uid: ele.data.uid,
    };
  });

  return transactions;
};

export default getTransactions;
