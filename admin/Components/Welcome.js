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
            href={`${adminUrl}edit.php?post_type=timeline_block&page=tlgb-dashboard#/pricing`}
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
