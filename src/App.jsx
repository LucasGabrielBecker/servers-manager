import React, { useEffect, useState } from "react";
import "./style.css";
import ServerImg from "./assets/server.svg";
import { BiCloud } from "react-icons/bi";
import { RiHome2Line } from "react-icons/ri";
import DiscImg from "./assets/disc.svg";
import Linux from "./assets/linux.svg";
import Windows from "./assets/windows.svg";
import Application from "./assets/application.svg";
import Memory from "./assets/memory.svg";
import getGoogleData from "./services/getGoogleData";
import { motion } from "framer-motion";

function HomePage() {
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

  

  return (
    <div className="App">
      <header>
        <img src={ServerImg} alt="ServerIcon" id="serverImage" />
        <bold>
          <span>Server Control center</span>
        </bold>
      </header>
      <main>
        <h2>Servidores</h2>

        {hosts.map((host, idx) => (
          <div className="server" key={idx}>
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
        ))}
      </main>
      <span style="font-size: 9px;">Fonte dos dados: <a href="https://docs.google.com/spreadsheets/d/10ezNSZr_x9SntLZnxIhRecQ4KBjtNz3o/edit#gid=1587471668">clique aqui</a></span>
    </div>
  );
}

export default HomePage;
