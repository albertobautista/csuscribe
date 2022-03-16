import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { AxiosResponse } from 'axios';
import { Dropdown, DropdownProps, Grid, Header, Placeholder } from 'semantic-ui-react';

import { ActiveProductContext } from '@context/ActiveProduct';
import { Contact } from '@interfaces/contact';
import { Contract } from '@interfaces/contract';
import { DropdownPops } from '@interfaces/dropdown';

import { ContractAndContactResponseProps, ContractAndContact } from './interfaces';
import { getContractsAndContactsInfo } from './services';

const AutodeskDetail = () => {
  const { t } = useTranslation('autodesk-detail');

  const { setActiveProductToCart, activeProductToCart } = useContext(ActiveProductContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ isError: false, message: '' });

  const [contractsOptions, setContractsOptions] = useState<DropdownPops[]>([]);
  const [contactsOptions, setContactsOptions] = useState<DropdownPops[]>([]);

  const [contractActive, setContractActive] = useState(0);
  const [contactActive, setContactActive] = useState(0);

  const [clients, setClients] = useState<ContractAndContact[]>([]);

  const setContracts = (contracts: Contract[]) => {
    const contractsArrary = contracts.map((contract, index) => ({
      key: index + 1,
      value: contract.id,
      text: contract.contractNumber,
    }));

    contractsArrary.unshift({
      key: 0,
      value: 0,
      text: 'Nuevo contrato',
    });
    return contractsArrary;
  };

  const setContacts = (contacts: Contact[]) => {
    const contactsArrary = contacts.map((contact, index) => ({
      key: index + 1,
      value: contact.id,
      text: `${contact.name} ${contact.lastName} - ${contact.email}`,
    }));

    contactsArrary.unshift({
      key: 0,
      value: 0,
      text: 'Selecciona un contacto',
    });

    return contactsArrary;
  };
  const cleanState = () => {
    setContractActive(0);
    setContactActive(0);
    setActiveProductToCart({ ...activeProductToCart, contactId: 0, contractId: 0 });
  };
  const filterContractsAndContacts = (id: number) => {
    console.log('🚀 ~ file: index.tsx ~ line 58 ~ filterContractsAndContacts ~ id', id);
    // alert();
    const algo = clients.filter((client) => client.id === id);
    console.log('🚀 ~ file: index.tsx ~ line 60 ~ filterContractsAndContacts ~ algo', algo);
    const contratos = setContracts(algo[0].contracts);
    const contactos = setContacts(algo[0].contacts);
    setContractsOptions(contratos);
    setContactsOptions(contactos);
    cleanState();
  };

  const getContractsAndContacts = () => {
    setLoading(true);
    getContractsAndContactsInfo()
      .then((response: AxiosResponse<ContractAndContactResponseProps>) => {
        const { statusCode } = response.data;

        if (statusCode === 200) {
          const { data } = response.data;

          setClients(data);
        } else {
          setError({ isError: true, message: `Error: ${statusCode}` });
        }
      })
      .catch((error) => {
        setError({ isError: true, message: `Error: ${error}` });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getContractsAndContacts();
  }, []);

  useEffect(() => {
    return () => {
      cleanState();
    };
  }, []);

  useEffect(() => {
    if (!error.isError) {
      if (activeProductToCart.clientId !== 0) {
        filterContractsAndContacts(activeProductToCart.clientId);
      }
    }
  }, [activeProductToCart.clientId]);

  const handleContractChange = (e, item: DropdownProps) => {
    if (item.value !== 0) {
      setContactActive(0);
      setContractActive(Number(item.value));
      setActiveProductToCart({ ...activeProductToCart, contactId: 0, contractId: Number(item.value) });
    } else {
      setContractActive(item.value);
      setActiveProductToCart({ ...activeProductToCart, contractId: Number(item.value) });
    }
  };

  const handleContactChange = (e, item: DropdownProps) => {
    setContactActive(Number(item.value));
    setActiveProductToCart({ ...activeProductToCart, contactId: Number(item.value) });
  };

  return !loading ? (
    !error.isError ? (
      <Grid>
        {contractsOptions.length > 1 && contactsOptions.length > 1 ? (
          activeProductToCart.clientId !== 0 ? (
            <>
              <Grid.Row>
                <Grid.Column largeScreen={11} computer={11} tablet={16} mobile={16}>
                  <Header as="h4" className="no-margin-y">
                    {t('contracts')}:&nbsp;
                  </Header>
                  <Dropdown options={contractsOptions} value={contractActive} onChange={handleContractChange} fluid selection placeholder={'Contratos'} />
                </Grid.Column>
              </Grid.Row>
              {contractActive === 0 && (
                <Grid.Row className="no-padding-y">
                  <Grid.Column largeScreen={11} computer={11} tablet={16} mobile={16}>
                    <Header as="h4" className="no-margin-y">
                      {t('contacts')}:&nbsp;
                    </Header>
                    <Dropdown options={contactsOptions} value={contactActive} onChange={handleContactChange} fluid selection placeholder={'Contactos'} />
                  </Grid.Column>
                </Grid.Row>
              )}
            </>
          ) : null
        ) : null}
      </Grid>
    ) : (
      <Grid>
        <Grid.Row centered>
          <Grid.Column largeScreen={16} computer={16} tablet={8} mobile={16}>
            <Header as="h5" className="no-margin-y" color="red">
              ***** {error.message} *****
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  ) : (
    <Grid>
      <Grid.Row centered>
        <Grid.Column largeScreen={16} computer={16} tablet={8} mobile={16}>
          <Placeholder>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AutodeskDetail;
