import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectClaimById } from "./claims-slice";
import { useSelector } from "react-redux";
import { selectRegionById } from "../regions/regions-slice";
import { selectLawyerById } from "../lawyers/lawyers-slice";
import { selectAgencyById } from "../agencies/agencies-slice";

function ClaimDetails() {
  const params = useParams();
  const { t } = useTranslation();

  const claim = useSelector((state) =>
    selectClaimById(state, params.claimId)
  );
  const region = useSelector((state) =>
    selectRegionById(state, claim.regionId)
  );
  const lawyer = useSelector((state) =>
    selectLawyerById(state, claim.lawyerId)
  );
  const agency = useSelector((state) =>
    selectAgencyById(state, claim.agencyId)
  );
  return (
    <div>
      {t("Claim", { count: 1 })}
      <div>
        {t("Number")}: {claim.number}
      </div>
      <div>
        {t("Region", { count: 1 })}: {region.title}
      </div>
      <div>
        {t("Lawyer", { count: 1 })}: {lawyer.firstName} {lawyer.lastName}
      </div>
      <div>
        {t("Agency", { count: 1 })}: {agency.title}
      </div>
    </div>
  );
}

export default ClaimDetails;
