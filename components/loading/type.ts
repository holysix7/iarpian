export interface LoadingProps {
  loadingType: LoadingType;
  className?: string;
}

export enum LoadingType {
  Spinner = "spinner",
  Dots = "dots",
  Bars = "bars",
  Ring = "ring",
  Pulse = "pulse",
}
