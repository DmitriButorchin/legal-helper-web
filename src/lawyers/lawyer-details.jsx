import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { selectLawyerById } from "./lawyersSlice";
import { useSelector } from "react-redux";

function LawyerDetails() {
  const params = useParams();
  const { t } = useTranslation();

  const lawyer = useSelector((state) =>
    selectLawyerById(state, +params.lawyerId)
  );
  return (
    <div>
      <div>
        {t("First Name")}: {lawyer.firstName}
      </div>
      <div>
        {t("Last Name")}: {lawyer.lastName}
      </div>
      <div>
        {t("Region")}: {lawyer.region}
      </div>
    </div>
  );
}

export default LawyerDetails;
