import { useState } from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Sidebar({
  type,
  Onservices,
  APPROVED,
  NOTAPPROVED,
  PENDING,
  onassigned,
  NONASSIGNED,
  COMPLETE,
  NOTRESOLVED,
  ONGOING,
}) {
  const [drop, SetDrop] = useState(false);
  const [Assigned, SetAssigned] = useState(false);
  const [NonAssigned, SetNonAssigned] = useState(false);
  const [Completed, SetCompleted] = useState(false);
  const [NotResolved, SetNotResolved] = useState(false);
  const [Ongoing, SetOngoing] = useState(false);
  const [drop1, setdrop1] = useState(false);
  const [allcomplaint, setallcomplaint] = useState(false);
  const [Complaints, setComplaints] = useState(false);
  const [pending, setpending] = useState(false);

  const [home, sethome] = useState(false);
  const [dashboard, setdashboard] = useState(false);

  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <>
      <div
        className={
          currentPath === "/dashboard" ? styles.left_con_dash : styles.left_con
        }
      >
        <div className={styles.logo_con}>
          <Image
            src="/image 20.png"
            width={48}
            height={80}
            alt="Picture of the author"
          />
          <p className={styles.text122}>
            Ministry of Housing and Urban affairs
          </p>
        </div>
        <div className={styles.options}>
          <div className={styles.sections}>
            <div className={styles.customlink}>
              <div
                className={
                  dashboard ? styles.sections_sub : styles.sections_sub_a
                }
                onClick={() => {
                  setpending(false);
                  sethome(false);
                  setComplaints(false);
                  setallcomplaint(false);
                  setdashboard(true);
                }}
              >
                <p
                  className={
                    type === "services" || type === "servicesdetails"
                      ? styles.text_active
                      : styles.text
                  }
                >
                  Dashboard
                </p>
              </div>
            </div>
          </div>
          <div className={styles.sections}>
            <div
              className={home ? styles.sections_sub : styles.sections_sub_a}
              onClick={() => {
                setpending(false);
                sethome(true);
                setComplaints(false);
                setallcomplaint(false);
                setdashboard(false);
              }}
            >
              <div className={styles.customlink}>
                <p
                  className={
                    type === "employee" ? styles.text_active : styles.text
                  }
                >
                  Home
                </p>
              </div>
            </div>
          </div>
          <div className={styles.sections}>
            <div
              className={
                allcomplaint ? styles.sections_sub : styles.sections_sub_a
              }
              onClick={() => {
                setpending(false);
                sethome(false);
                setComplaints(false);
                setallcomplaint(true);
                setdashboard(false);
              }}
            >
              <div className={styles.customlink}>
                <p
                  className={
                    type === "allcomplaint" ? styles.text_active : styles.text
                  }
                >
                  All Complaints
                </p>
              </div>
            </div>
          </div>
          <div className={styles.customlink}>
            <div className={styles.sections}>
              <div
                className={
                  Complaints ? styles.sections_sub : styles.sections_sub_a
                }
                onClick={() => {
                  setpending(false);
                  sethome(false);
                  setComplaints(true);
                  setallcomplaint(false);
                  setdashboard(false);
                }}
              >
                <p
                  className={
                    type === "reimbursement" || type === "reimbursement"
                      ? styles.text_active
                      : styles.text
                  }
                >
                  Complaints
                </p>
              </div>
            </div>
          </div>
          <div className={styles.customlink}>
            <div className={styles.sections}>
              <div
                className={
                  pending ? styles.sections_sub : styles.sections_sub_a
                }
                onClick={() => {
                  console.log("clicked");
                  // setAprroved(false);
                  // setnotapproved(false);
                  setpending(true);
                  sethome(false);
                  setComplaints(false);
                  setallcomplaint(false);
                  setdashboard(false);
                  // setdrop1(false);
                }}
              >
                <p
                  className={
                    type === "salesreimbursementdetails" ||
                    type === "salesreimbursementdetails"
                      ? styles.text_active
                      : styles.text
                  }
                >
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
