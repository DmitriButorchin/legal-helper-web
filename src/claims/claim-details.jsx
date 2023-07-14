import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectClaimByNumber } from "./claims-slice";
import { useSelector } from "react-redux";
import { selectRegionById } from "../regions/regions-slice";
import { selectLawyerBySsn } from "../lawyers/lawyers-slice";
import { selectCorrespondentById } from "../correspondents/correspondents-slice";

function ClaimDetails() {
  const params = useParams();
  const { t } = useTranslation();

  const claim = useSelector((state) =>
    selectClaimByNumber(state, params.claimNumber)
  );
  const region = useSelector((state) =>
    selectRegionById(state, claim.regionId)
  );
  const lawyer = useSelector((state) =>
    selectLawyerBySsn(state, claim.lawyerSsn)
  );
  const correspondent = useSelector((state) =>
    selectCorrespondentById(state, claim.correspondentId)
  );
  return (
    <div>
      {t("Claim", { count: 1 })}
      <div>
        {t("Registration Number")}: {claim.registrationNumber}
      </div>
      <div>
        {t("Region", { count: 1 })}: {region.title}
      </div>
      <div>
        {t("Lawyer", { count: 1 })}: {lawyer.firstName} {lawyer.lastName}
      </div>
      <div>
        {t("Correspondent", { count: 1 })}: {correspondent.title}
      </div>
    </div>
  );
}

export default ClaimDetails;
