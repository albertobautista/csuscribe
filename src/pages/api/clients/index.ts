import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | {
      message: string;
    }
  | any[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getClients(req, res);
    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

const getClients = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const prueba = {
    statusCode: 200,
    message: 'Los contratos y contactos son',
    data: [
      { key: 1, value: 110, text: 'Compucad' },
      { key: 2, value: 100, text: 'Tesselar' },
      // { key: 3, value: 101, text: 'Compusoluciones' },
      // { key: 4, value: 205, text: 'Apple' },
    ],
  };

  return res.status(200).json(prueba);
};
