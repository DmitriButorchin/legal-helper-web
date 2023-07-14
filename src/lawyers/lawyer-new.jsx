import "./lawyer-new.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createLawyer } from "./actions";
import { selectRegions } from "../regions/regions-slice";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

function LawyerNew() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [regionId, setRegionId] = useState("");
  const regions = useSelector((state) => selectRegions(state));

  function handleRegionChange(e) {
    setRegionId(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    dispatch(createLawyer(formJson)).then((response) => {
      if (response.errors) {
        setErrors(response.errors);
      } else {
        navigate(`/lawyers/${encodeURIComponent(response.ssn)}`);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="lawyer-new">
      <TextField
        required
        label={t("SSN")}
        variant="standard"
        name="ssn"
        error={!!errors.ssn}
        helperText={t(errors.ssn)}
      />

      <TextField
        required
        label={t("First Name")}
        variant="standard"
        name="firstName"
        error={!!errors.firstName}
        helperText={t(errors.firstName)}
      />

      <TextField
        required
        label={t("Last Name")}
        variant="standard"
        name="lastName"
        error={!!errors.lastName}
        helperText={t(errors.lastName)}
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
        <FormHelperText>{t(errors.regionId)}</FormHelperText>
      </FormControl>

      <Button variant="outlined" type="submit">
        {t("Save")}
      </Button>
    </form>
  );
}

export default LawyerNew;
