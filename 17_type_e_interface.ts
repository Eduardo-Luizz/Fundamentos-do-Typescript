// Definicao
type TUser = {
  id: number,
  name: string
}

interface IUser {
  id: number;
  name: string;
}

type TUnio = {
  method: string;
}

interface IUnio {
  method: string;
}

// Unindo
type TAccount = TUser & TUnio

interface IAccount extends IUser, IUnio {}