import React from "react";

import Gmail from "@/assets/icons/gmail.svg";
import { MultiSelect } from "@/common/MultiSelect";
import { ProviderBox } from "@/common/ProviderBox";

const List: React.FC = () => {
  return (
    <ProviderBox
      logo={Gmail}
      title="Gmail"
      subTitle={`These Gmail contacts will\n sync to MailChimp`}
    >
      <MultiSelect />
    </ProviderBox>
  );
};

export default List;
