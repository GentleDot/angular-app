export class Member {
  private _MemberId: string;
  private _MemberName: string;

  constructor() {}

  get MemberId(): string {
    return this._MemberId;
  }

  set MemberId(value: string) {
    this._MemberId = value;
  }

  get MemberName(): string {
    return this._MemberName;
  }

  set MemberName(value: string) {
    this._MemberName = value;
  }
}
