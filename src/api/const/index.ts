export interface IApiConst {
  readonly apiKey: string;
  readonly url: string
}

class ApiConst implements IApiConst {
  public apiKey='';
  public url=''
  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_API_KEY ?? '';
    this.url = process.env.NEXT_PUBLIC_API_URL ?? '';
  }
}

export const api = new ApiConst();