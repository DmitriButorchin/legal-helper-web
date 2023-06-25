import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectCaseById } from "./cases-slice";
import { useSelector } from "react-redux";
import { selectRegionById } from "../regions/regions-slice";
import { selectLawyerById } from "../lawyers/lawyers-slice";

function CaseDetails() {
  const params = useParams();
  const { t } = useTranslation();

  const caseObject = useSelector((state) =>
    selectCaseById(state, +params.caseId)
  );
  const region = useSelector((state) =>
    selectRegionById(state, caseObject.regionId)
  );
  const lawyer = useSelector((state) =>
    selectLawyerById(state, caseObject.lawyerId)
  );
  return (
    <div>
      {t("Case", { count: 1 })}
      <div>
        {t("Number")}: {caseObject.number}
      </div>
      <div>
        {t("Region", { count: 1 })}: {region.title}
      </div>
      <div>
        {t("Lawyer", { count: 1 })}: {lawyer.firstName} {lawyer.lastName}
      </div>
    </div>
  );
}

export default CaseDetails;
