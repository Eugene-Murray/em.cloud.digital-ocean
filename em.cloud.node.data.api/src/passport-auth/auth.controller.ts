import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

}
