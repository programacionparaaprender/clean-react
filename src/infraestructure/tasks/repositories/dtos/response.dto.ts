import { IMetaData } from "./interfaces/metadata.interface";

export class ResponseDto<T> {
  meta:IMetaData;
  dates:T
  constructor(meta:IMetaData, dates:T) {
    this.meta = meta;
    this.dates = dates;
  }
}
