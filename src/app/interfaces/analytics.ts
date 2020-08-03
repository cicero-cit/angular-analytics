export interface CustomParams {
  [key:string]: any;
}

export interface EventParams extends CustomParams {
  non_interaction?: true;
  event_category?: string;
  event_label?: string;
  value?: number;
}
