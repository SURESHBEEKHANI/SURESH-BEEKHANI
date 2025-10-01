declare module "pdf-parse" {
  interface PDFInfo {
    version?: string;
    metadata?: any;
    numpages?: number;
    numrender?: number;
    info?: any;
    text?: string;
  }
  function pdf(dataBuffer: Buffer | Uint8Array | ArrayBuffer): Promise<PDFInfo>;
  export default pdf;
}

declare module "pdf-parse/lib/pdf-parse.js" {
  interface PDFInfo {
    version?: string;
    metadata?: any;
    numpages?: number;
    numrender?: number;
    info?: any;
    text?: string;
  }
  function pdf(dataBuffer: Buffer | Uint8Array | ArrayBuffer): Promise<PDFInfo>;
  export default pdf;
}

