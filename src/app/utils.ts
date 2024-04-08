export type InputTypes = "day" | "month" | "year";
export type InputFieldType = {
  title: string;
  type: InputTypes;
  errorMessage: string;
  placeholder: string;
};
export type IndexedObjectType<valueType> = {
  [keys: string]: valueType;
};
export const inputFields: InputFieldType[] = [
  {
    title: "Day",
    type: "day",
    errorMessage: "Must be a valid day",
    placeholder: "DD",
  },
  {
    title: "Month",
    type: "month",
    errorMessage: "Must be a valid month",
    placeholder: "MM",
  },
  {
    title: "Year",
    type: "year",
    errorMessage: "Must be in the past",
    placeholder: "YYYY",
  },
];

export const datErrorMessage =
  "Must be a valid date and it shouldn't be a future date";
export const defaultInputFieldsState = {
  day: "",
  month: "",
  year: "",
};

export const defaultInputFieldsErrorState: IndexedObjectType<boolean> = {
  day: false,
  month: false,
  year: false,
  date: false,
};

export const defaultAgeResults = {
  years: "--",
  months: "--",
  days: "--",
};
