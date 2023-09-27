import styles from "./main.module.css";
import Sidebar from "@/component/Sidebar";
import Header from "@/component/Header";
import Head from "next/head";
// import ServicesList from "../../Components/ServicesList";
import { useState } from "react";
// import Modaladd from "../../Components/Modaladd";
import Image from "next/image";
import { useEffect } from "react";
// import Modaladd1 from "../../Components/Modaladd1";
// import axios from "axios";
// import withAuth from "../../Api/withAuth";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Services");
  const [isOpen1, setIsOpen1] = useState(false);
  const [serviceid, setserviceid] = useState();

  const [Assigned, SetAssigned] = useState(false);
  const [NonAssigned, SetNonAssigned] = useState(false);
  const [Completed, SetCompleted] = useState(false);
  const [NotResolved, SetNotResolved] = useState(false);
  const [Ongoing, SetOngoing] = useState(false);
  //search
  const [searchQuery, setSearchQuery] = useState("");
  const [drop, setdrop] = useState(false);

  const Modaladd1handler = (data) => {
    setIsOpen1(data);
  };

  const serviceidhander = (data) => {
    setserviceid(data);
  };

  function addServicehandler() {
    console.log("add service ");
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  };
  const closeModal1 = () => {
    setIsOpen1(false);
  };

  const handleServices = (data) => {
    // Do something with the data received from the child component
    console.log(data);
    setTitle(data);
  };

  const handleDataFromChild = (data) => {
    console.log("searchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh=", data);
    setSearch(data);
  };

  const handle1 = (data) => {
    console.log("assigned", data);
    SetAssigned(data);
  };
  const handle2 = (data) => {
    SetNonAssigned(data);
  };
  const handle3 = (data) => {
    SetCompleted(data);
  };
  const handle5 = (data) => {
    SetNotResolved(data);
    console.log("not resolved", data);
  };
  const handle4 = (data) => {
    SetOngoing(data);
  };
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=1256" />
      </Head>
      <div className={styles.main_con}>
        <div className={styles.left_con}>
          <Sidebar
            type="allcomplaint"
            Onservices={handleServices}
            onassigned={handle1}
            NONASSIGNED={handle2}
            COMPLETE={handle3}
            NOTRESOLVED={handle5}
            ONGOING={handle4}
          />
        </div>
        <div className={styles.right_con}>
          <div className={styles.header}>
            <Header onSearch={setSearchQuery} />
          </div>
          <div className={styles.container}>
            <div className={styles.main_head}>
              {/* <div className={styles.title_con}>
                <p className={styles.title}>Complaints</p>
              </div>
              <div
                className={isOpen ? styles.title_con1_a : styles.title_con1}
                onClick={addServicehandler}
              >
                <p className={isOpen ? styles.but_add_a : styles.but_add}>
                  Add Service +
                </p>
              </div> */}
            </div>
            <div className={styles.lll}>
              <table className={styles.contenttable}>
                <thead className={styles.head}>
                  <tr className={styles.head_text}>
                    <th>Complain ID</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>File</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.border}>
                    <td className={styles.text}>MoHUA18552</td>
                    <td className={styles.text}>
                      Fencing has broken because of...
                    </td>
                    <td className={styles.text}>Wardha</td>
                    <td className={styles.text}>
                      {
                        <Image
                          src="/file.png"
                          width={16}
                          height={20}
                          className={styles.arrow}
                        />
                      }
                    </td>
                    <td className={styles.text}>Pending</td>
                  </tr>
                  <tr className={styles.border}>
                    <td className={styles.text}>MoHUA18555</td>
                    <td className={styles.text}>
                      Water Leakage in main pipe of...
                    </td>
                    <td className={styles.text}>Pune</td>
                    <td className={styles.text}>
                      {
                        <Image
                          src="/file.png"
                          width={16}
                          height={20}
                          className={styles.arrow}
                        />
                      }
                    </td>
                    <td className={styles.text}>Pending</td>
                  </tr>
                  <tr className={styles.border}>
                    <td className={styles.text}>MoHUA18565</td>
                    <td className={styles.text}>
                      A Sewage issue in area for...
                    </td>
                    <td className={styles.text}>Nashik</td>
                    <td className={styles.text}>
                      {
                        <Image
                          src="/file.png"
                          width={16}
                          height={20}
                          className={styles.arrow}
                        />
                      }
                    </td>
                    <td className={styles.text}>Not Approved</td>
                  </tr>
                  <tr className={styles.border}>
                    <td colSpan={5}>
                      <div className={styles.cont_main}>
                        <div>
                          <div className={styles.cont_1}>
                            <p>Complainant :</p>
                            <p className={styles.text2}>Mr. Tony Stark</p>
                          </div>
                          <div className={styles.cont_1}>
                            <p>Contact :</p>
                            <p className={styles.text4}>9865401435</p>
                          </div>
                          <div className={styles.cont_1}>
                            <p>Occurrence place :</p>
                            <p className={styles.text3}>
                              22-25, Juhi vihar, Kalyan Nagar, College Road,
                              Nashik -422013
                            </p>
                          </div>
                          <div className={styles.cont_1}>
                            <p>Complaint:</p>
                            <p className={styles.text5}>
                              I wish to raise a grievance regarding a sewage
                              issue near my residence. The sewage system in our
                              locality is in dire need of attention, leading to
                              unpleasant odors and potential health hazards. I
                              kindly request immediate action to address and
                              resolve this problem, ensuring a clean and safe
                              environment for our community.
                            </p>
                          </div>
                        </div>
                        <div className={styles.cont_main_1}>
                          <div className={styles.text_cont1}>
                            <p className={styles.text_a1}>Assign</p>
                            <Image
                              src="/arrow_drop_down.png"
                              width={15}
                              height={7.5}
                              alt="arrow"
                              className={styles.arrow}
                              // onClick={() => {
                              //   console.log("aaaaaaaa");
                              //   assignedhandler(row._id);
                              // }}
                            />
                          </div>
                          <div
                            className={styles.text_cont2}
                            onClick={() => {
                              setdrop(!drop);
                            }}
                          >
                            <p className={styles.text_a1}>Status</p>
                            <Image
                              src="/arrow_drop_down.png"
                              width={15}
                              height={7.5}
                              alt="arrow"
                              className={styles.arrow}
                              // onClick={() => {
                              //   console.log("aaaaaaaa");
                              //   assignedhandler(row._id);
                              // }}
                            />
                          </div>
                          {drop == true && (
                            <div className={styles.options}>
                              <button
                                className={styles.btn}
                                // onClick={handleclosepending}
                              >
                                Pending
                              </button>
                              <button
                                className={styles.btn_g}
                                //onClick={handlecloseapproved}
                              >
                                Approved
                              </button>
                              <button
                                className={styles.btn_r}
                                // onClick={handleclosenotapproved}
                              >
                                Not Approved
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Main), {
  ssr: false,
});
