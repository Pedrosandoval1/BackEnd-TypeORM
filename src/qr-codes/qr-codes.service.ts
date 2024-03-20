import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';

@Injectable()
export class QrCodesService {
    async generateQrCode(data: string): Promise<string> {
        try {
          const qrCodeDataURL = await qrcode.toDataURL(data);
          return qrCodeDataURL;
        } catch (error) {
          throw new Error('Failed to generate QR code.');
        }
      }
}
// the generated QR code
// This method takes a string data as input and returns a Promise that
//  resolves to a data URL representing the generated QR code.
