import "./claim-new.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createClaim } from "../claims/actions";
import { selectRegions } from "../regions/regions-slice";
import {
  selectLawyersByRegionSorted,
  selectLaziestLawyer,
} from "../lawyers/lawyers-slice";
import { selectAgencies } from "../agencies/agencies-slice";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

function ClaimNew() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [regionId, setRegionId] = useState("");
  const [lawyerId, setLawyerId] = useState("");
  const [agencyId, setAgencyId] = useState("");
  const regions = useSelector((state) => selectRegions(state));
  const lawyers = useSelector((state) =>
    selectLawyersByRegionSorted(state, regionId)
  );
  const laziestLawyer = useSelector((state) =>
    selectLaziestLawyer(state, regionId)
  );
  const agencies = useSelector((state) => selectAgencies(state));

  function handleRegionChange(e) {
    setLawyerId('');
    setRegionId(e.target.value);
  }

  useEffect(() => {
    setLawyerId(laziestLawyer.id);
  }, [laziestLawyer]);

  function handleLawyerChange(e) {
    setLawyerId(e.target.value);
  }

  function handleAgencyChange(e) {
    setAgencyId(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    dispatch(createClaim(formJson)).then((response) =>
      navigate(`/claims/${response.id}`)
    );
  }

  return (
    <form onSubmit={handleSubmit} className="claim-new">
      <TextField label={t("Number")} variant="standard" name="number" />

      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <InputLabel>{t("Region", { count: 1 })}</InputLabel>
        <Select
          name="regionId"
          value={regionId}
          label={t("Region", { count: 1 })}
          onChange={handleRegionChange}
        >
          {regions.map((region) => {
            return (
              <MenuItem key={region.id} value={region.id}>
                {region.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <InputLabel>{t("Lawyer", { count: 1 })}</InputLabel>
        <Select
          name="lawyerId"
          value={lawyerId}
          label={t("Lawyer", { count: 1 })}
          onChange={handleLawyerChange}
        >
          {lawyers.map((lawyer) => {
            return (
              <MenuItem key={lawyer.id} value={lawyer.id}>
                {lawyer.firstName} {lawyer.lastName} ({lawyer.claimCount})
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <InputLabel>{t("Agency", { count: 1 })}</InputLabel>
        <Select
          name="agencyId"
          value={agencyId}
          label={t("Agency", { count: 1 })}
          onChange={handleAgencyChange}
        >
          {agencies.map((agency) => {
            return (
              <MenuItem key={agency.id} value={agency.id}>
                {agency.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Button variant="outlined" type="submit">
        {t("Save")}
      </Button>
    </form>
  );
}

export default ClaimNew;