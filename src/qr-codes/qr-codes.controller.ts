import { Controller, Get, Query } from '@nestjs/common';
import { QrCodesService } from './qr-codes.service';

@Controller('qr-codes')
export class QrCodesController {
    constructor(private readonly qrCodeService: QrCodesService) {}

  @Get()
  async generateQrCode(@Query('data') data: string) {
    const qrCodeDataURL = await this.qrCodeService.generateQrCode(data);
    return `<img src="${qrCodeDataURL}" alt="QR Code" />`;
  }
}