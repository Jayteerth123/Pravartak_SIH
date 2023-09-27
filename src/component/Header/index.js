import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Avatar from "@mui/material/Avatar";

export default function Header({ onSearch }) {
  const [search, setSearch] = useState("");
  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem("message");
    localStorage.removeItem("Name");

    // Redirect the user to the login page or a logged-out state
    window.location.href = "/login"; // Replace '/login' with your desired URL
  };
  const [name, setname] = useState("");
  useEffect(() => {
    const name1 = localStorage.getItem("Name");
    setname(name1);
    console.log("name==", name);
  }, []);

  return (
    <div className={styles.header_con}>
      <div className={styles.search_bar}>
        <div className={styles.search_bar_left}>
          <Image
            src="/search.png"
            width={15}
            height={15}
            alt="Picture of the author"
          />
          <input
            className={styles.inp}
            placeholder="Search"
            type="text"
            value={search}
          />
        </div>

        <Image
          src="/cross.png"
          width={15}
          height={15}
          alt="Picture of the author"
          onClick={() => {
            onSearch("");
            setSearch("");
          }}
        />
      </div>
      <div className={styles.profile}>
        {/* <Avatar alt="Admin" sx={{ width: 35, height: 35 }}>
          A
        </Avatar> */}
        <p className={styles.text}>Admin</p>
      </div>
    </div>
  );
}
