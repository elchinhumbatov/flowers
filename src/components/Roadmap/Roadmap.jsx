import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import "./Roadmap.css";

function Roadmap({data}) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
      {
        data.links.map((link, idx) => {
          return <Link key={idx} color="inherit" to={link.url}>{link.text}</Link>
        })
      }
      <Typography color="textPrimary">{data.last}</Typography>
    </Breadcrumbs>
  );
}

export default Roadmap;
