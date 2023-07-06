import "./region-new.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRegion } from "./actions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function RegionNew() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    dispatch(createRegion(formJson)).then((response) => {
      if (response.errors) {
        setErrors(response.errors);
      } else {
        navigate(`/regions/${encodeURIComponent(response.id)}`);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="region-new">
      <TextField
        required
        label={t("Title")}
        variant="standard"
        name="title"
        error={!!errors.title}
        helperText={errors.title}
      />

      <Button variant="outlined" type="submit">
        {t("Save")}
      </Button>
    </form>
  );
}

export default RegionNew;
