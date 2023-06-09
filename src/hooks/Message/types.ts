export interface Message {
  variation: "success" | "error" | "warning" | "info";
  message: string;
}
