import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectLawyerBySsn } from "./lawyers-slice";
import { useSelector } from "react-redux";
import { selectRegionById } from "../regions/regions-slice";

function LawyerDetails() {
  const params = useParams();
  const { t } = useTranslation();

  const lawyer = useSelector((state) =>
    selectLawyerBySsn(state, params.lawyerSsn)
  );
  const region = useSelector((state) =>
    selectRegionById(state, lawyer.regionId)
  );
  return (
    <div>
      {t("Lawyer", { count: 1 })}
      <div>
        {t("SSN")}: {lawyer.ssn}
      </div>
      <div>
        {t("First Name")}: {lawyer.firstName}
      </div>
      <div>
        {t("Last Name")}: {lawyer.lastName}
      </div>
      <div>
        {t("Region", { count: 1 })}: {region.title}
      </div>
      <div>
        {t("Claim Count")}: {lawyer.claimCount}
      </div>
    </div>
  );
}

export default LawyerDetails;
