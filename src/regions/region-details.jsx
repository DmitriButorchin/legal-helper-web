import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectRegionById } from "./regions-slice";
import { useSelector } from "react-redux";

function RegionDetails() {
  const params = useParams();
  const { t } = useTranslation();

  const region = useSelector((state) =>
    selectRegionById(state, +params.regionId)
  );
  return (
    <div>
      {t("Region", { count: 1 })}
      <div>
        {t("ID")}: {region.id}
      </div>
      <div>
        {t("Title")}: {region.title}
      </div>
    </div>
  );
}

export default RegionDetails;
