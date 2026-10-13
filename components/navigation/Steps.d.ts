import * as React from "react";
export interface StepDef {
  title: React.ReactNode;
  description?: React.ReactNode;
}
export interface StepsProps extends React.HTMLAttributes<HTMLOListElement> {
  steps: (string | StepDef)[];
  current?: number;
}
export declare function Steps(props: StepsProps): JSX.Element;
