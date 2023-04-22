"use client";

import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";
import React from "react";

interface CalloutCardProps {
  message: string;
  warning?: boolean;
}

const CalloutCard: React.FC<CalloutCardProps> = ({ message, warning }) => {
  return (
    <Callout
      title={message}
      icon={warning ? ExclamationIcon : CheckCircleIcon}
      color={warning ? "rose" : "teal"}
      className="mt-4"
    ></Callout>
  );
};

export default CalloutCard;
