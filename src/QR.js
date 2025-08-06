import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';


const QRComponent = () => {
  return (
    <div className="qr-container text-center">
      <h3>Escanea el código para visitar nuestro sitio web</h3>
      <QRCodeCanvas value="http://localhost:3000/" size={200} />
    </div>
  );
};

export default QRComponent;
