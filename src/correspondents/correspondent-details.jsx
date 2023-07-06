import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectCorrespondentById } from "./correspondents-slice";

function CorrespondentDetails() {
  const params = useParams();
  const { t } = useTranslation();

  const correspondent = useSelector((state) =>
    selectCorrespondentById(state, params.correspondentId)
  );
  return (
    <div>
      {t("Correspondent", { count: 1 })}
      <div>
        {t("Title")}: {correspondent.title}
      </div>
    </div>
  );
}

export default CorrespondentDetails;
