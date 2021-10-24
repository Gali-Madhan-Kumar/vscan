import { Grid } from "@material-ui/core";
import React from "react";
import ScrollspyNav from "react-scrollspy-nav";
import FaultyCodeTable from "../table/FaultCodeTable";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

export default function ScrollSpy({ data }) {
  return (
    <>
      <ScrollspyNav
        scrollTargetIds={["section_1", "section_2"]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
      >
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li style={{ listStyle: "none" }}>
            <a href="#section_1">Engine Details</a>
          </li>
          <li style={{ listStyle: "none" }}>
            <a href="#section_2">Fault Codes : {data.obdCodes.length}</a>
          </li>
        </ul>
      </ScrollspyNav>
      <Grid container style={{ marginTop: "1rem" }} spacing={4}>
        <Grid item lg={12} className="summary-grid">
          <span className="summary-title">VSCAN REPORT SUMMARY</span>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "1rem" }} container spacing={4}>
        <Grid item lg={6} className="string-values-grid">
          <div className="string-values">
            <div className="string-title">Vscan Report Id : </div>
            <div className="string-value">{data.vscanReportId}</div>
          </div>
          <div className="string-values">
            <div className="string-title">Job Card Id : </div>
            <div className="string-value">{data.jobcardId}</div>
          </div>
          <div className="string-values">
            <div className="string-title">IMEI : </div>
            <div className="string-value">{data.imei}</div>
          </div>
          <div className="string-values">
            <div className="string-title">VIN : </div>
            <div className="string-value">{data.vin}</div>
          </div>
          <div className="string-values">
            <div className="string-title">Make : </div>
            <div className="string-value">{data.make}</div>
          </div>
          <div className="boolean-values-div">
            <div className="boolean-values">
              <div className="boolean-title">RPM : </div>
              <div className={`boolean-value ${data.rpm}`}>
                {data.rpm ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Fuel Pressure : </div>
              <div className={`boolean-value ${data.fuelPressure}`}>
                {data.fuelPressure ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">CoolantTemp : </div>
              <div className={`boolean-value ${data.coolantTemp}`}>
                {data.coolantTemp ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Intake Air Temp : </div>
              <div className={`boolean-value ${data.intakeAirTemp}`}>
                {data.intakeAirTemp ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Injector Module; : </div>
              <div className={`boolean-value ${data.injectorModule}`}>
                {data.injectorModule ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Emission Control : </div>
              <div className={`boolean-value ${data.emissionControl}`}>
                {data.emissionControl ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Computer Circuit : </div>
              <div className={`boolean-value ${data.computerCircuit}`}>
                {data.computerCircuit ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Transmission; : </div>
              <div className={`boolean-value ${data.transmission}`}>
                {data.transmission ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} className="string-values-grid">
          <div className="string-values">
            <div className="string-title">Created on : </div>
            <div className="string-value">
              {new Date(data.createdOn * 1000).toDateString()}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">Vendor Id : </div>
            <div className="string-value">{data.vendorId}</div>
          </div>
          <div className="string-values">
            <div className="string-title">Battery Voltage : </div>
            <div className="string-value">{data.batteryVoltage}</div>
          </div>
          <div className="string-values">
            <div className="string-title">Registration Number : </div>
            <div className="string-value">{data.regNo}</div>
          </div>
          <div className="string-values">
            <div className="string-title">Modal : </div>
            <div className="string-value">{data.model}</div>
          </div>
          <div className="boolean-values-div">
            <div className="boolean-values">
              <div className="boolean-title">Fuel Trim : </div>
              <div className={`boolean-value ${data.fuelTrim}`}>
                {data.fuelTrim ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Throttle Position : </div>
              <div className={`boolean-value ${data.throttlePosition}`}>
                {data.throttlePosition ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Engine Load : </div>
              <div className={`boolean-value ${data.engineLoad}`}>
                {data.engineLoad ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Maf : </div>
              <div className={`boolean-value ${data.maf}`}>
                {data.maf ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Fuel And Air mix : </div>
              <div className={`boolean-value ${data.fuelAndAirMix}`}>
                {data.fuelAndAirMix ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Ignition Module : </div>
              <div className={`boolean-value ${data.ignitionModule}`}>
                {data.ignitionModule ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
            <div className="boolean-values">
              <div className="boolean-title">Vehicle SpeedIdle : </div>
              <div className={`boolean-value ${data.vehicleSpeedIdle}`}>
                {data.vehicleSpeedIdle ? <CheckIcon /> : <ClearIcon />}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid id="section_1" container style={{ marginTop: "3rem" }} spacing={4}>
        <Grid item lg={12} className="summary-grid">
          <span className="summary-title">Engine Details</span>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "1rem" }} container spacing={4}>
        <Grid item lg={6} className="string-values-grid">
          <div className="string-values">
            <div className="string-title">Report Created On : </div>
            <div className="string-value">
              {new Date(data.vScanEngineData.createdOn * 1000).toDateString()}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">Short term fuel Trim: </div>
            <div className="string-value">
              {data.vScanEngineData.shortTermFuelTrim}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">Fuel Pressure : </div>
            <div className="string-value">
              {data.vScanEngineData.fuelPressure}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">Timing Advance : </div>
            <div className="string-value">
              {data.vScanEngineData.timingAdvance}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">
              Engine Friction Percent Torque :{" "}
            </div>
            <div className="string-value">
              {data.vScanEngineData.engineFrictionPercentTorque}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">Intake Air Temperature :</div>
            <div className="string-value">
              {data.vScanEngineData.intakeAirTemperature}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">Engine Rmp :</div>
            <div className="string-value">{data.vScanEngineData.engineRpm}</div>
          </div>
        </Grid>
        <Grid item lg={6} className="string-values-grid">
          <div className="string-values">
            <div className="string-title">Calculated Engine Load : </div>
            <div className="string-value">
              {data.vScanEngineData.calculatedEngineLoad}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">Long term fuel Trim: </div>
            <div className="string-value">
              {data.vScanEngineData.longTermFuelTrim}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">Maf : </div>
            <div className="string-value">{data.vScanEngineData.maf}</div>
          </div>
          <div className="string-values">
            <div className="string-title">Throttle Position : </div>
            <div className="string-value">
              {data.vScanEngineData.throttlePosition}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">Engine Coolant Temperature : </div>
            <div className="string-value">
              {data.vScanEngineData.engineCoolantTemperature}
            </div>
          </div>
          <div className="string-values">
            <div className="string-title">Vehicle Identification Number :</div>
            <div className="string-value">
              {data.vScanEngineData.vehicleIdentificationNumber}
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid id="section_2" container style={{ marginTop: "3rem" }} spacing={4}>
        <Grid item lg={12} className="summary-grid">
          <span className="summary-title">Fault Codes List</span>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "1rem" }} container spacing={4}>
        <Grid item lg={12} className="string-values-grid">
          <FaultyCodeTable data={data.obdCodes} />
        </Grid>
      </Grid>
    </>
  );
}
