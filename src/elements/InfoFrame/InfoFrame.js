import React, { useState } from "react";
import PropTypes from "prop-types";

import infoFields from "assets/constants/infoFields";
import { useSelector } from "react-redux";

const InfoFrame = ({ data }) => {
  return (
    <>
      {data ? (
        <table>
          <tbody>
            <tr>
              <td>{infoFields.ip}</td>
              <td>{data.ip}</td>
            </tr>
            <tr>
              <td>{infoFields.country}</td>
              <td>{data.country}</td>
            </tr>
            <tr>
              <td>{infoFields.continent}</td>
              <td>{data.continent}</td>
            </tr>
            <tr>
              <td>{infoFields.capital}</td>
              <td>{data.capital}</td>
            </tr>
            <tr>
              <td>{infoFields.city}</td>
              <td>{data.city}</td>
            </tr>
            <tr>
              <td>{infoFields.latitude}</td>
              <td>{data.latitude}</td>
            </tr>
            <tr>
              <td>{infoFields.longitude}</td>
              <td>{data.longitude}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default InfoFrame;
