export interface PeriodicElement {
  user: string;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  actions: any;

}

export const ELEMENT_DATA: PeriodicElement[] = [

  {
    firstName: 'Felipe',
    user: 'Felipe_Posada',
    lastName: "Posada",
    email: 'Felipe@gmail.com',
    active: true,
    actions: null
  },

];


export const felipe = {
  id: 0,
  email: 'felipe@gmail.com',
  active: 'true',
  firstName: 'Felipe',
  lastName: 'Posada',
  user: 'Felipe_Posada',
};
