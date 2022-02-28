import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
// import { Header, Divider, Icon, Popup, Menu, Grid, Button } from 'semantic-ui-react';
import { Popup, Grid, Button } from 'semantic-ui-react';

const urlImgProfile = 'https://tuclik-stage.s3.amazonaws.com/avatar/default/defaultAvatar.png';

const PopMenu = () => {
  const router = useRouter();
  const { t } = useTranslation('pop-menu');

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const renderLogin = () => {
    return (
      <Grid padded>
        <Grid.Row centered>
          <Grid.Column textAlign="center">
            <Button primary fluid onClick={() => router.push('/login')}>
              {t('login')}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };
  return (
    <Grid padded>
      <Grid.Row centered className="no-padding-y">
        <Grid.Column textAlign="center" className="no-padding-x">
          <Popup
            trigger={
              <div style={{ cursor: 'pointer' }}>
                <Image src={urlImgProfile} alt="Imagen de perfil" width="32px" height="32px" />
              </div>
            }
            // content={isAuthenticated ? this.renderMenu() : this.renderLogin()}
            content={renderLogin()}
            on="click"
            position="bottom right"
            open={isOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            style={{ width: '17em' }}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PopMenu;
