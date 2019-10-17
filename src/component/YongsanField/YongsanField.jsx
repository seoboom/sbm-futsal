import React, {useState, useEffect} from "react";
import axios from "axios";
import qs from "qs";

import "./YongsanField.css";

import {Container, Row, Col} from "react-bootstrap";

function YongsanField({date, fieldCode, fieldName}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .post(
        "https://www.hdc-iparkmall.com/plugin/ret_StadData_New.asp",
        qs.stringify({curdate: date, curstadcode: fieldCode}),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(response => {
        console.log(response);
        setLoading(false);
      })
      .catch(error => {});
  }, [date]);

  return (
    <div className="field_block">
      <h1 className="text-primary">{fieldName}</h1>
    </div>
  );
}

export default YongsanField;
