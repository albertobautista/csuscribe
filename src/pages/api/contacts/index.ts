import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | {
      message: string;
    }
  | any[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getContacts(req, res);
    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

const getContacts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const prueba = [{ id: 1, value: 110, text: 'fsfsdfdsdfs' }];

  return res.status(200).json(prueba);
};
