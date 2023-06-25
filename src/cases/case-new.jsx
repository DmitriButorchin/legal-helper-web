import "./case-new.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCase } from "../cases/actions";
import { selectRegions } from "../regions/regions-slice";
import { selectLawyersByRegionSorted } from "../lawyers/lawyers-slice";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

function CaseNew() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [regionId, setRegionId] = useState("");
  function handleRegionChange(e) {
    setRegionId(e.target.value);
  }

  const [lawyerId, setLawyerId] = useState("");
  function handleLawyerChange(e) {
    setLawyerId(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    dispatch(createCase(formJson)).then((response) =>
      navigate(`/cases/${response.id}`)
    );
  }

  const regions = useSelector((state) => selectRegions(state));
  const lawyers = useSelector((state) => selectLawyersByRegionSorted(state, regionId));
  return (
    <form onSubmit={handleSubmit} className="case-new">
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
                {lawyer.firstName} {lawyer.lastName} ({lawyer.caseCount})
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

export default CaseNew;
