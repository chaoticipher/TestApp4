import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 13405,
  login: 'LQn0k',
};

export const sampleWithPartialData: IUser = {
  id: 27572,
  login: 'I',
};

export const sampleWithFullData: IUser = {
  id: 17413,
  login: '&8@67',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
