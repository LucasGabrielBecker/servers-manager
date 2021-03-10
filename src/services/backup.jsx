<div className="server">
<div className="servername inserver">
  <BiCloud size={30} className="icons" color="#000000" />
  <span>ATSAPP01</span>
</div>
<div className="memory inserver">
  <img src={Memory} className="icons" alt="disc image" />
  <span>8 Gb</span>
</div>
<div className="disc inserver">
  <img src={DiscImg} className="icons" alt="disc image" />
  <span>20 Gb</span>
</div>
<div className="operational-system inserver">
  <img src={Windows} alt="Windows Image" />
  <span>Windows Server 2012 | R2 Standard X64 </span>
</div>

<div className="application inserver">
  <img src={Application} alt="ApplicationIcon" />
  <span>Integração ATS</span>
</div>
</div>




{hosts.map((host, idx) => (
  <div className="server" key={idx}>
    <div className="column column-20">
      {host.virtual.toLowerCase() == "sim" ? 
        (<BiCloud size={30} className="icons" color="#2E4277" />) :
        (<RiHome2Line size={30} className="icons" color="#2E4277" />)

      }
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
      <img src={host.so == "Linux" ? Linux : Windows } alt="Windows Image" />
      <span>{host.so} | {host.soVersion}</span>
    </div>

    <div className="column column-20">
      <img src={Application} alt="ApplicationIcon" />
      <span>{host.application}</span>
    </div>
  </div>
))}