import React, { useEffect, useState } from "react";
import "./style.css";
import ServerImg from "./assets/server.svg";
import { BiCloud } from "react-icons/bi";
import { RiCreativeCommonsZeroLine, RiHome2Line } from "react-icons/ri";
import DiscImg from "./assets/disc.svg";
import Linux from "./assets/linux.svg";
import Windows from "./assets/windows.svg";
import Application from "./assets/application.svg";
import Memory from "./assets/memory.svg";
import getGoogleData from "./services/getGoogleData";
import { motion } from "framer-motion";
import axios from "axios";
import { BsCircle } from "react-icons/bs";
import AccordionComponent from "./components/Accordion"

function HomePage() {
  const [latency, setLatency] = useState(56);
  const [isOpen, setIsOpen] = useState({});
  const [hosts, setHosts] = useState([
    {
      hostname: "",
      localidade: "",
      virtual: "",
      memoria: "",
      disco: "",
      so: "",
      soVersion: "",
      application: "",
    },
  ]);

  useEffect(async () => {
    const users = await getGoogleData();

    setHosts(users);
  }, []);

  const handleServerLatency = async (server) => {
    const result = await axios.get(
      `http://127.0.0.1:5000/ping?server=${server}`
    );
    setIsOpen({ ...isOpen, [server]: true });
    console.log(isOpen);
    if (!result.data.content.lenght || result.data.content.lenght < 1) {
      return null;
    }
    const latency = result.data.content[0].toFixed(2);
  };

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  return (
    <div className="App">
      <header>
        <img src={ServerImg} alt="ServerIcon" id="serverImage" />
        <bold>
          <span>Server Control center</span>
          <span>Deployed by jenkins</span>
        </bold>
      </header>
      <main>
        <h2>Servidores</h2>

        {hosts.map((host, idx) => (
          <React.Fragment>
            <div
              className="server"
              onClick={() => handleServerLatency(host.hostname)}
              key={idx}
            >
              <div className="column column-20">
                {host.virtual.toLowerCase() == "sim" ? (
                  <BiCloud size={30} className="icons" color="#2E4277" />
                ) : (
                  <RiHome2Line size={30} className="icons" color="#2E4277" />
                )}
                <span>{host.hostname}</span>
              </div>
              <div className="column column-10">
                <img src={Memory} className="icons" alt="disc image" />
                <span>{host.memoria}</span>
              </div>
              <div className="column column-10">
                <img src={DiscImg} className="icons" alt="disc image" />
                <span>{host.disco}</span>
              </div>
              <div className="column column-40">
                <img
                  src={host.so == "Linux" ? Linux : Windows}
                  alt="Windows Image"
                />
                <span>
                  {host.so} | {host.soVersion}
                </span>
              </div>

              <div className="column column-20">
                <img src={Application} alt="ApplicationIcon" />
                <span>{host.application}</span>
              </div>
            </div>
            <AccordionComponent/>
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}

export default HomePage;
