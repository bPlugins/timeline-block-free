import Changelog from "../../../bpl-tools//Admin/Changelog/Changelog";
import Overview from "../../../bpl-tools/Admin/Overview/Overview";

import { changelogs } from "../utils/data";
import Button from "../../../bpl-tools/Components/Button/Button";

const Welcome = (props) => {
  const { isPremium, adminUrl } = props;

  return (
    <>
      <Overview {...props}>
        {!isPremium && (
          <Button
            href={`${adminUrl}tools.php?page=timeline-block#/pricing`}
            // target="_blank"
            // rel="noreferrer"
            variant="secondary"
          >
            Buy Now
          </Button>
        )}
      </Overview>

      <Changelog changelogs={changelogs} {...props} />
    </>
  );
};
export default Welcome;
