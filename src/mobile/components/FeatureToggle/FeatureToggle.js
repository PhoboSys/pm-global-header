import React from "react";
import { isEmpty } from "lodash";

import TogglesIcon from "../SVG/Toggles";
import { useModal } from "../modals";
import Button from "../common/Button";

import FeatureTogglesModal from "./FeatureTogglesModal";
import useFeatureToggles from "../../../features/useFeatureToggles";
import { withDevelopmentOnly } from "../../../hocs";

import css from "./FeatureToggle.module.scss";

const FeatureToggle = () => {
  const { toggles = {} } = useFeatureToggles();
  const { modal, open } = useModal({ Content: FeatureTogglesModal, toggles });

  if (isEmpty(toggles)) return null;

  return (
    <>
      <Button className={css.button} onClick={open}>
        <TogglesIcon />
      </Button>
      {modal}
    </>
  );
};

export default withDevelopmentOnly(React.memo(FeatureToggle));
