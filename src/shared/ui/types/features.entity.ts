import React from "react";
import { IconType } from "react-icons/lib";

export interface FeatureEntity {
  icon: IconType;
  name: string;
  description: string;
  cta?: string;
  className: string;
  background?: React.JSX.Element;
}
