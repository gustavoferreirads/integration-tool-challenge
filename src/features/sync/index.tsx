import React from "react";

import { SyncButton } from "@/common/SyncButton";
import { List as GmailContacts } from "@/features/gmail/views";
import { List as MailChimpContacts } from "@/features/mailchimp/views";
import { Box as Content } from "@/styles/components";

export const SyncContactsSection: React.FC = () => {
  return (
    <Content>
      <GmailContacts />
      <SyncButton />
      <MailChimpContacts />
    </Content>
  );
};
