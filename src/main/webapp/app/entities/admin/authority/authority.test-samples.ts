import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '32693693-5aa4-41d5-8108-2cd84a87f6ff',
};

export const sampleWithPartialData: IAuthority = {
  name: 'be3c66c1-059f-4fa2-ad91-454272b2ba73',
};

export const sampleWithFullData: IAuthority = {
  name: '500e9d2d-4eeb-4479-bcf7-674343ed9bd4',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
