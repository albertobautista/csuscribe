import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | {
      message: string;
    }
  | any;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getContacts(req, res);
    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

const getContacts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const prueba = {
    statusCode: 200,
    message: 'Los contratos y contactos son',
    data: [
      {
        id: 110,
        name: 'Compucad',
        contracts: [
          {
            id: 111,
            contractNumber: '1111111111111',
          },
          {
            id: 222,
            contractNumber: '2222222222222',
          },
        ],
        contacts: [
          {
            id: 333,
            name: 'Alberto',
            lastName: 'Bautista',
            email: 'alberto@gmail.com',
          },
          {
            id: 444,
            name: 'Joel',
            lastName: 'Valtierra',
            email: 'joel@gmail.com',
          },
        ],
      },
      {
        id: 100,
        name: 'Tesselar',
        contracts: [
          {
            id: 555,
            contractNumber: '555555555555',
          },
          {
            id: 666,
            contractNumber: '666666666666',
          },
        ],
        contacts: [
          {
            id: 7777,
            name: 'Daniel',
            lastName: 'Chavez',
            email: 'Daniel@gmail.com',
          },
          {
            id: 888,
            name: 'Javier',
            lastName: 'Hernandez',
            email: 'javier@gmail.com',
          },
        ],
      },
    ],
  };
  return res.status(200).json(prueba);
};
