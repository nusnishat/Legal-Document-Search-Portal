export type TLegalDocument = {
  id: string;
  title: string;
  type: string;
  content: string;
  dateCreated: string; // you can also use Date if you want actual Date objects
};