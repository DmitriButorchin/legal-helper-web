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
import { selectCorrespondents } from "../correspondents/correspondents-slice";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

function ClaimNew() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [creationDate, setCreationDate] = useState(dayjs());
  const [regionId, setRegionId] = useState("");
  const [lawyerId, setLawyerId] = useState("");
  const [correspondentId, setCorrespondentId] = useState("");
  const [deadline, setDeadline] = useState(dayjs());
  const regions = useSelector((state) => selectRegions(state));
  const lawyers = useSelector((state) =>
    selectLawyersByRegionSorted(state, regionId)
  );
  const laziestLawyer = useSelector((state) =>
    selectLaziestLawyer(state, regionId)
  );
  const correspondents = useSelector((state) => selectCorrespondents(state));

  function handleCreationDateChange(e) {
    setCreationDate(e);
  }

  function handleRegionChange(e) {
    setLawyerId("");
    setRegionId(e.target.value);
  }

  useEffect(() => {
    setLawyerId(laziestLawyer.id);
  }, [laziestLawyer]);

  function handleLawyerChange(e) {
    setLawyerId(e.target.value);
  }

  function handleCorrespondentChange(e) {
    setCorrespondentId(e.target.value);
  }

  function handleDeadlineChange(e) {
    setDeadline(e);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    formJson.creationDate = creationDate?.format("YYYY-MM-DD") || "";
    formJson.deadline = deadline?.format("YYYY-MM-DD") || "";
    dispatch(createClaim(formJson)).then((response) => {
      if (response.errors) {
        setErrors(response.errors);
      } else {
        navigate(`/claims/${encodeURIComponent(response.registrationNumber)}`);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="claim-new">
      <TextField
        required
        label={t("Registration Number")}
        variant="standard"
        name="registrationNumber"
        error={!!errors.registrationNumber}
        helperText={errors.registrationNumber}
      />

      <FormControl
        required
        variant="standard"
        sx={{ minWidth: 120 }}
        error={!!errors.correspondentId}
      >
        <InputLabel>{t("Correspondent", { count: 1 })}</InputLabel>
        <Select
          name="correspondentId"
          value={correspondentId}
          label={t("Correspondent", { count: 1 })}
          onChange={handleCorrespondentChange}
        >
          {correspondents.map((correspondent) => {
            return (
              <MenuItem key={correspondent.id} value={correspondent.id}>
                {correspondent.title}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>{errors.correspondentId}</FormHelperText>
      </FormControl>

      {/* TODO: add validation*/}
      <DatePicker
        label={t("Creation Date")}
        value={creationDate}
        onChange={handleCreationDateChange}
        format="DD/MM/YYYY"
      />

      <TextField
        required
        label={t("Creation Number")}
        variant="standard"
        name="creationNumber"
        error={!!errors.creationNumber}
        helperText={errors.creationNumber}
      />

      <TextField
        required
        label={t("Summary")}
        variant="standard"
        name="summary"
        error={!!errors.summary}
        helperText={errors.summary}
      />

      <TextField
        required
        label={t("Responsible")}
        variant="standard"
        name="responsible"
        error={!!errors.responsible}
        helperText={errors.responsible}
      />

      <FormControl
        required
        variant="standard"
        sx={{ minWidth: 120 }}
        error={!!errors.regionId}
      >
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
        <FormHelperText>{errors.regionId}</FormHelperText>
      </FormControl>

      <FormControl
        required
        variant="standard"
        sx={{ minWidth: 120 }}
        error={!!errors.lawyerId}
      >
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
        <FormHelperText>{errors.lawyerId}</FormHelperText>
      </FormControl>

      <TextField
        required
        label={t("Defendant")}
        variant="standard"
        name="defendant"
        error={!!errors.defendant}
        helperText={errors.defendant}
      />

      {/* TODO: add validation*/}
      <DatePicker
        label={t("Deadline")}
        value={deadline}
        onChange={handleDeadlineChange}
        format="DD/MM/YYYY"
      />

      <Button variant="outlined" type="submit">
        {t("Save")}
      </Button>
    </form>
  );
}

export default ClaimNew;
