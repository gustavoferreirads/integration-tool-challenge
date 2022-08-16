import React from "react";

import Mailchimp from "@/assets/icons/mailchimp.svg";
import { MultiSelect } from "@/common/MultiSelect";
import { ProviderBox } from "@/common/ProviderBox";

const Contacts: React.FC = () => {
  return (
    <ProviderBox
      logo={Mailchimp}
      title="Mailchimp"
      subTitle={`These Mailchimp contacts will\n sync to Gmail`}
    >
      <MultiSelect />
    </ProviderBox>
  );
};

export default Contacts;
