import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import DocumentCard from "../../components/DocCard/DocCard";
import AuthContext from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { email, updateEmail } = useContext(AuthContext);
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    updateEmail("khalid11abdu@gmail.com");
    if (email !== null) {
      fetch("http://localhost:5000/documents/getall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ email: email }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => setDocuments(data.documents))
        .catch((error) => {
          console.error("Error fetching documents:", error);
        });
    }
  }, [email, updateEmail]);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles["document-container"]}>
        {documents.map((doc) => (
          <button class={styles["no-style"]} onClick={() => navigate("/documents/" + doc.id)}>
            <DocumentCard
              onClick={() => navigate("/documents/" + doc.id)}
              key={doc.id}
              name={doc.title}
              imageUrl={"https://cdn-icons-png.flaticon.com/512/281/281760.png"}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
